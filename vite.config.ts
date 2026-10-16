import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const port = Number(process.env.PORT) || 5173

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
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

