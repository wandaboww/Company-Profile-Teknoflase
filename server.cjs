// Standalone production Node.js server for Teknoflase (Zero external dependencies)
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = Number(process.env.PORT) || 5173
const HOST = process.env.HOST || '0.0.0.0'
const DIST_DIR = path.resolve(__dirname, 'dist')
const DATA_DIR = path.resolve(__dirname, 'data')

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const pathname = decodeURIComponent(parsedUrl.pathname)

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  // ── CMS Content API ──
  if (pathname === '/api/content') {
    const dataFilePath = path.join(DATA_DIR, 'content.json')
    const distFilePath = path.join(DIST_DIR, 'content.json')

    if (req.method === 'GET') {
      let content = ''
      if (fs.existsSync(dataFilePath)) {
        content = fs.readFileSync(dataFilePath, 'utf-8')
      } else if (fs.existsSync(distFilePath)) {
        content = fs.readFileSync(distFilePath, 'utf-8')
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
      res.end(content || 'null')
      return
    }

    if (req.method === 'POST') {
      const chunks = []
      req.on('data', chunk => chunks.push(chunk))
      req.on('end', () => {
        try {
          const bodyStr = Buffer.concat(chunks).toString('utf-8')
          const parsed = JSON.parse(bodyStr)
          if (!parsed || typeof parsed !== 'object' || !parsed.brandName) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, error: 'Data konten tidak valid' }))
            return
          }

          fs.mkdirSync(DATA_DIR, { recursive: true })
          fs.writeFileSync(dataFilePath, bodyStr, 'utf-8')

          if (fs.existsSync(DIST_DIR)) {
            fs.writeFileSync(distFilePath, bodyStr, 'utf-8')
          }

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true, message: 'Konten berhasil disimpan ke server' }))
        } catch (err) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: err.message }))
        }
      })
      return
    }
  }

  // ── Static Files Serving (SPA Fallback to index.html) ──
  let filePath = path.join(DIST_DIR, pathname)

  // Prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.statusCode = 403
    res.end('Forbidden')
    return
  }

  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html')
  }

  if (!fs.existsSync(filePath)) {
    // SPA fallback: return index.html for non-asset routes
    filePath = path.join(DIST_DIR, 'index.html')
  }

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404
    res.end('File not found. Please run npm run build first.')
    return
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'

  // Caching headers
  if (pathname.startsWith('/assets/')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    res.setHeader('Cache-Control', 'no-cache, must-revalidate')
  }

  res.statusCode = 200
  res.setHeader('Content-Type', contentType)
  fs.createReadStream(filePath).pipe(res)
})

server.listen(PORT, HOST, () => {
  console.log(`Teknoflase Server running at http://${HOST}:${PORT}`)
})
