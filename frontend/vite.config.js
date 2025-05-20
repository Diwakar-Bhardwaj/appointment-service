import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['9799-2409-408a-1e81-8660-9186-e917-71f3-f99a.ngrok-free.app'],
  },
 
})



