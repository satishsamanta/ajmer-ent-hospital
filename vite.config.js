import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo path
export default defineConfig({
  base: '/ajmer-ent-hospital/',
  plugins: [react()],
  server: { port: 5173, open: true }
})
