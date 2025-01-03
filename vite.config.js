import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({
 // plugins: [react()],
//})





export default defineConfig({
  // Your Vite configuration here
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
});

