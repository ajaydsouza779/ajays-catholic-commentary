import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export { cloudinary }

// Helper function to upload image to Cloudinary
export async function uploadImageToCloudinary(
  file: File,
  folder: string = 'ajays-catholic-commentary'
): Promise<{ url: string; public_id: string }> {
  try {
    // Convert File to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'auto',
          transformation: [
            { width: 1200, height: 800, crop: 'limit' },
            { quality: 'auto' },
            { format: 'auto' }
          ]
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    return {
      url: (result as any).secure_url,
      public_id: (result as any).public_id
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    throw new Error('Failed to upload image')
  }
}

// ─── PPT (raw file) helpers ───────────────────────────────────────────────────

const PPT_FOLDER = 'commentary-ppt'

function pptPublicId(entryId: string) {
  return `${PPT_FOLDER}/${entryId}`
}

export async function uploadPPTToCloudinary(
  buffer: Buffer,
  entryId: string
): Promise<string> {
  const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: PPT_FOLDER, public_id: entryId, resource_type: 'raw', overwrite: true },
      (error, res) => { if (error) reject(error); else resolve(res as { secure_url: string }) }
    ).end(buffer)
  })
  return result.secure_url
}

export async function getPPTCloudinaryUrl(entryId: string): Promise<string | null> {
  try {
    const result = await cloudinary.api.resource(pptPublicId(entryId), { resource_type: 'raw' })
    return result.secure_url as string
  } catch {
    return null
  }
}

export async function deletePPTFromCloudinary(entryId: string): Promise<void> {
  await cloudinary.uploader.destroy(pptPublicId(entryId), { resource_type: 'raw' })
}

// Helper function to delete image from Cloudinary
export async function deleteImageFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
    throw new Error('Failed to delete image')
  }
}

// Helper function to get optimized image URL
export function getOptimizedImageUrl(
  publicId: string,
  width?: number,
  height?: number,
  quality: string = 'auto'
): string {
  const transformations = []
  
  if (width) transformations.push(`w_${width}`)
  if (height) transformations.push(`h_${height}`)
  transformations.push(`q_${quality}`)
  transformations.push('f_auto')
  
  return cloudinary.url(publicId, {
    transformation: transformations.join(',')
  })
}
