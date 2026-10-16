module.exports = {
  apps: [
    {
      name: 'teknoflase',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 5173',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 5173,
      },
    },
  ],
}
