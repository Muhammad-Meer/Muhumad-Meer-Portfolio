import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-icons/fi', 'react-icons/hi', 'react-icons/io'],
    exclude: ['react-icons/si'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/react-icons/')) {
            return 'icons';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/swiper/')) {
            return 'animations';
          }
        },
      },
    },
  },
})
