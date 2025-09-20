import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: './',   // Corrigido para funcionar no Netlify
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
