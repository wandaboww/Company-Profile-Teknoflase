import { useEffect } from 'react'
import type { LandingPageContent } from './AdminPanel'

interface SEOProps {
  content: LandingPageContent
}

export default function SEO({ content }: SEOProps) {
  const brand = content?.brandName || 'TEKNOFLASE'
  const location = content?.contact?.location || 'Bogor, Indonesia'
  const whatsapp = content?.contact?.whatsapp || '6281234567890'

  useEffect(() => {
    try {
      // 1. Dynamic Document Title
      const title = `${brand} | Jasa Pembuatan Website Bogor & Support UMKM`
      document.title = title

      // Helper untuk update atau create meta tag secara aman
      const setMetaTag = (attributeName: 'name' | 'property', key: string, value: string) => {
        try {
          const escapedKey = typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(key) : key
          let tag = document.querySelector(`meta[${attributeName}="${escapedKey}"]`)
          if (!tag) {
            tag = document.createElement('meta')
            tag.setAttribute(attributeName, key)
            document.head.appendChild(tag)
          }
          tag.setAttribute('content', value)
        } catch {
          // Fallback manual query jika CSS.escape gagal
          try {
            const allMetas = Array.from(document.getElementsByTagName('meta'))
            let tag = allMetas.find(m => m.getAttribute(attributeName) === key)
            if (!tag) {
              tag = document.createElement('meta')
              tag.setAttribute(attributeName, key)
              document.head.appendChild(tag)
            }
            tag.setAttribute('content', value)
          } catch {
            // Abaikan jika lingkungan DOM terbatas
          }
        }
      }

      const description = `Jasa pembuatan website profesional, landing page konversi, dan toko online murah di ${location} untuk UMKM & bisnis lokal. Cepat dimuat, ramah SEO Google, dan siap datangkan pelanggan via WhatsApp.`
      const keywords = `jasa pembuatan website bogor, jasa website umkm bogor, buat website bogor, web developer bogor, landing page bogor, toko online bogor, jasa bikin website murah bogor, ${brand.toLowerCase()}`

      setMetaTag('name', 'description', description)
      setMetaTag('name', 'keywords', keywords)
      setMetaTag('property', 'og:title', title)
      setMetaTag('property', 'og:description', description)
      setMetaTag('property', 'og:site_name', brand)
      setMetaTag('name', 'twitter:title', title)
      setMetaTag('name', 'twitter:description', description)

      // 2. Inject Dynamic Schema.org JSON-LD (LocalBusiness + FAQPage)
      const scriptId = 'dynamic-local-seo-schema'
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = scriptId
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }

      // Dynamic FAQ Schema
      const faqList = Array.isArray(content?.faqItems) ? content.faqItems : []
      const faqSchemaItems = faqList.slice(0, 8).map(faq => ({
        '@type': 'Question',
        'name': faq?.question || '',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq?.answer || '',
        },
      }))

      const schemaData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            '@id': 'https://teknoflase.com/#localbusiness',
            'name': `${brand} - Jasa Pembuatan Website Bogor`,
            'description': description,
            'url': 'https://teknoflase.com',
            'telephone': `+${whatsapp}`,
            'priceRange': 'Rp 500.000 - Rp 5.000.000',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': location,
              'addressLocality': 'Bogor',
              'addressRegion': 'Jawa Barat',
              'postalCode': '16111',
              'addressCountry': 'ID',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': -6.597147,
              'longitude': 106.806039,
            },
            'areaServed': [
              { '@type': 'City', 'name': 'Bogor' },
              { '@type': 'AdministrativeArea', 'name': 'Kabupaten Bogor' },
              { '@type': 'AdministrativeArea', 'name': 'Cibinong' },
              { '@type': 'AdministrativeArea', 'name': 'Sentul' },
              { '@type': 'AdministrativeArea', 'name': 'Jabodetabek' },
              { '@type': 'Country', 'name': 'Indonesia' },
            ],
            'openingHoursSpecification': [
              {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'opens': '08:00',
                'closes': '21:00',
              },
            ],
          },
          ...(faqSchemaItems.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  '@id': 'https://teknoflase.com/#faq',
                  'mainEntity': faqSchemaItems,
                },
              ]
            : []),
        ],
      }

      scriptTag.textContent = JSON.stringify(schemaData)
    } catch (err) {
      console.warn('SEO dynamic update error:', err)
    }
  }, [brand, location, whatsapp, content?.faqItems])

  return null
}
