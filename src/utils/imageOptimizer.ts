import type { PortfolioItem } from '../components/AdminPanel'

/**
 * Kompres file gambar lokal dari input user menjadi Base64 Data URL
 * dengan dimensi proporsional (max 1200x800) dan kualitas teroptimasi.
 * Mengurangi ukuran file dari 3-5 MB menjadi ~70-120 KB (hemat >95% storage).
 */
export function compressImageFile(
  file: File,
  maxWidth = 1000,
  maxHeight = 650,
  quality = 0.70
): Promise<string> {
  return new Promise((resolve) => {
    // File SVG berukuran kecil secara bawaan, tidak perlu rasterisasi canvas
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader()
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
      reader.onerror = () => resolve('')
      reader.readAsDataURL(file)
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const rawDataUrl = typeof e.target?.result === 'string' ? e.target.result : ''
      if (!rawDataUrl) {
        resolve('')
        return
      }

      const img = new Image()
      img.onload = () => {
        let width = img.width
        let height = img.height

        // Skalakan dimensi secara proporsional jika melampaui batas maksimum
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height)
          width = Math.round(width * ratio)
          height = Math.round(height * ratio)
        }

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          resolve(rawDataUrl)
          return
        }

        ctx.drawImage(img, 0, 0, width, height)

        let result = ''
        try {
          // Prioritaskan format WebP (dukung transparansi & kompresi efisien)
          result = canvas.toDataURL('image/webp', quality)
          if (!result.startsWith('data:image/webp')) {
            result = canvas.toDataURL('image/jpeg', quality)
          }
        } catch {
          result = canvas.toDataURL('image/jpeg', quality)
        }

        resolve(result || rawDataUrl)
      }

      img.onerror = () => resolve(rawDataUrl)
      img.src = rawDataUrl
    }

    reader.onerror = () => resolve('')
    reader.readAsDataURL(file)
  })
}

/**
 * Kompres string Base64 yang sudah ada (misal data warisan lama di localStorage)
 * jika ukurannya melebihi batas aman (> 70 KB).
 */
export function compressBase64Image(
  dataUrl: string,
  maxWidth = 1000,
  maxHeight = 650,
  quality = 0.70
): Promise<string> {
  return new Promise((resolve) => {
    if (
      !dataUrl ||
      !dataUrl.startsWith('data:image/') ||
      dataUrl.startsWith('data:image/svg+xml') ||
      dataUrl.length < 70_000 // Kurang dari ~50 KB sudah sangat aman
    ) {
      resolve(dataUrl)
      return
    }

    const img = new Image()
    img.onload = () => {
      let width = img.width
      let height = img.height

      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width = Math.round(width * ratio)
        height = Math.round(height * ratio)
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        resolve(dataUrl)
        return
      }

      ctx.drawImage(img, 0, 0, width, height)

      let result = ''
      try {
        result = canvas.toDataURL('image/webp', quality)
        if (!result.startsWith('data:image/webp')) {
          result = canvas.toDataURL('image/jpeg', quality)
        }
      } catch {
        result = canvas.toDataURL('image/jpeg', quality)
      }

      resolve(result || dataUrl)
    }

    img.onerror = () => resolve(dataUrl)
    img.src = dataUrl
  })
}

/**
 * Sanitasi & kompres seluruh gambar di daftar proyek yang berukuran terlalu besar.
 * Mengembalikan array proyek yang sudah dioptimasi dan jumlah gambar yang berhasil dikompres.
 */
export async function sanitizePortfolioStorage(
  items: PortfolioItem[]
): Promise<{ items: PortfolioItem[]; compressedCount: number }> {
  if (!Array.isArray(items) || items.length === 0) {
    return { items, compressedCount: 0 }
  }

  let compressedCount = 0

  const sanitizedProjects = await Promise.all(
    items.map(async (project) => {
      let projectChanged = false

      // Periksa dan kompres array images
      const images = await Promise.all(
        (project.images || []).map(async (img) => {
          if (typeof img === 'string' && img.startsWith('data:image/') && img.length > 70_000) {
            const compressed = await compressBase64Image(img, 1000, 650, 0.70)
            if (compressed.length < img.length) {
              compressedCount++
              projectChanged = true
              return compressed
            }
          }
          return img
        })
      )

      // Periksa coverImage
      let coverImage = project.coverImage
      if (typeof coverImage === 'string' && coverImage.startsWith('data:image/') && coverImage.length > 70_000) {
        const compressed = await compressBase64Image(coverImage, 1000, 650, 0.70)
        if (compressed.length < coverImage.length) {
          compressedCount++
          projectChanged = true
          coverImage = compressed
        }
      }

      // Periksa image
      let image = project.image
      if (typeof image === 'string' && image.startsWith('data:image/') && image.length > 70_000) {
        const compressed = await compressBase64Image(image, 1000, 650, 0.70)
        if (compressed.length < image.length) {
          compressedCount++
          projectChanged = true
          image = compressed
        }
      }

      if (projectChanged) {
        return {
          ...project,
          images,
          coverImage,
          image,
        }
      }

      return project
    })
  )

  return { items: sanitizedProjects, compressedCount }
}
