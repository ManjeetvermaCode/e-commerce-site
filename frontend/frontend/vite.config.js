import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    // proxy requests prefixed '/api' and '/uploads'
    proxy: {
      '/api': 'http://localhost:5000',
      // '/uploads': 'http://localhost:5000',
=======
    proxy: {
      '/api':'http://localhost:5000',
      '/uploads':'http://localhost:5000',
>>>>>>> dabc080683da31ca3d8a29aeef1807aa2fe5c848
    },
  },
})
