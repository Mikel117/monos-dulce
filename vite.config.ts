import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@components/atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@components/molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@components/organisms': path.resolve(__dirname, 'src/components/organisms'),
    }
  }
})
