const fs = require('fs')
const path = require('path')

// Convert image to base64
function imageToBase64(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath)
    const base64String = imageBuffer.toString('base64')
    const mimeType = path.extname(imagePath).toLowerCase()
    
    let dataUrl
    switch (mimeType) {
      case '.jpg':
      case '.jpeg':
        dataUrl = `data:image/jpeg;base64,${base64String}`
        break
      case '.png':
        dataUrl = `data:image/png;base64,${base64String}`
        break
      case '.gif':
        dataUrl = `data:image/gif;base64,${base64String}`
        break
      case '.webp':
        dataUrl = `data:image/webp;base64,${base64String}`
        break
      default:
        throw new Error(`Unsupported image format: ${mimeType}`)
    }
    
    return dataUrl
  } catch (error) {
    console.error('Error converting image to base64:', error)
    throw error
  }
}

// Upload to API
async function uploadProfilePhoto(base64Data) {
  try {
    const response = await fetch('http://localhost:3001/api/admin/profile-photo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photo: base64Data })
    })

    const result = await response.json()
    
    if (!response.ok) {
      throw new Error(result.error || 'Upload failed')
    }
    
    return result
  } catch (error) {
    console.error('Error uploading profile photo:', error)
    throw error
  }
}

// Main function
async function main() {
  const imagePath = path.join(process.env.HOME, 'Downloads', 'Display Photo.jpg')
  
  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found at: ${imagePath}`)
    console.log('Please ensure "Display Photo.jpg" exists in your Downloads folder')
    process.exit(1)
  }

  try {
    console.log('Converting image to base64...')
    const base64Data = imageToBase64(imagePath)
    console.log('Base64 conversion complete')
    
    console.log('Uploading to API...')
    const result = await uploadProfilePhoto(base64Data)
    console.log('✅ Profile photo uploaded successfully!')
    console.log('Result:', result)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { imageToBase64, uploadProfilePhoto }
