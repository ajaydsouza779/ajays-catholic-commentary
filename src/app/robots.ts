import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/auth/',
        '/_next/',
        '/private/',
      ],
    },
    sitemap: 'https://ajaycatholic.com/sitemap.xml',
  }
}
