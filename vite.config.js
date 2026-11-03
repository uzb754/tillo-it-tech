import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tillo-it-tech/', // repozitoriy nomingiz shu yerga yoziladi
})