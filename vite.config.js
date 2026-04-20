import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // seperate third party libraries from main bundle
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
          ui: ['framer-motion', 'swiper', 'lucide-react', 'react-icons'],
          firebase: ['firebase']
        }
      }
    }
  }
})
