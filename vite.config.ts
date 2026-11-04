import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const port = Number(process.env.PORT) || 5173

/**
 * Plugin API server-side untuk menyimpan & melayani data konten CMS
 * secara permanen di server/VPS (bukan hanya di localStorage browser).
 */
function contentApiPlugin(): Plugin {
  const handleApi = (req: any, res: any, next: any) => {
    const rawUrl = req.url || ''
    const pathname = rawUrl.split('?')[0]

    // Handle preflight CORS
    if (pathname === '/api/content' && req.method === 'OPTIONS') {
      res.statusCode = 204
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      res.end()
      return
    }

    if (pathname === '/api/content') {
      const rootDir = process.cwd()
      const dataFilePath = path.resolve(rootDir, 'data/content.json')
      const publicFilePath = path.resolve(rootDir, 'public/content.json')
      const distFilePath = path.resolve(rootDir, 'dist/content.json')

      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

      // ── GET: Ambil konten master dari disk server ──
      if (req.method === 'GET') {
        let contentStr = ''
        if (fs.existsSync(dataFilePath)) {
          contentStr = fs.readFileSync(dataFilePath, 'utf-8')
        } else if (fs.existsSync(distFilePath)) {
          contentStr = fs.readFileSync(distFilePath, 'utf-8')
        } else if (fs.existsSync(publicFilePath)) {
          contentStr = fs.readFileSync(publicFilePath, 'utf-8')
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.end(contentStr || 'null')
        return
      }

      // ── POST: Simpan konten baru ke disk server ──
      if (req.method === 'POST') {
        const chunks: Buffer[] = []
        req.on('data', (chunk: Buffer) => {
          chunks.push(chunk)
        })

        req.on('end', () => {
          try {
            const bodyBuffer = Buffer.concat(chunks)
            const bodyStr = bodyBuffer.toString('utf-8')
            const parsed = JSON.parse(bodyStr)

            if (!parsed || typeof parsed !== 'object' || !parsed.brandName) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: 'Data konten tidak valid' }))
              return
            }

            // Simpan ke data/content.json (utama, tidak terhapus saat build)
            fs.mkdirSync(path.dirname(dataFilePath), { recursive: true })
            fs.writeFileSync(dataFilePath, bodyStr, 'utf-8')

            // Simpan ke public/content.json (agar ikut tercopy saat build baru)
            fs.mkdirSync(path.dirname(publicFilePath), { recursive: true })
            fs.writeFileSync(publicFilePath, bodyStr, 'utf-8')

            // Simpan ke dist/content.json (agar langsung aktif di preview/production)
            if (fs.existsSync(path.dirname(distFilePath))) {
              fs.writeFileSync(distFilePath, bodyStr, 'utf-8')
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, message: 'Konten berhasil disimpan permanen di server' }))
          } catch (err: any) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, error: err?.message || 'Gagal menyimpan konten' }))
          }
        })
        return
      }
    }

    next()
  }

  return {
    name: 'teknoflase-content-api',
    configureServer(server) {
      server.middlewares.use(handleApi)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleApi)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    contentApiPlugin(),
  ],
  server: {
    host: '0.0.0.0',
    port: port,
    cors: true,
    allowedHosts: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: http: ws: wss:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: data: blob:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; connect-src 'self' ws: wss: http: https:; img-src 'self' data: blob: https:;",
    },
  },
  preview: {
    host: '0.0.0.0',
    port: port,
    cors: true,
    allowedHosts: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: http: ws: wss:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: data: blob:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; connect-src 'self' ws: wss: http: https:; img-src 'self' data: blob: https:;",
    },
  },
})

