import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['/foto-Thiago.jpeg'], // Adicione o caminho correto para a imagem
    },
  },
})
