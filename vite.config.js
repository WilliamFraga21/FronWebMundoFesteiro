import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',   // Faz o servidor escutar em todas as interfaces de rede
    port: 3000,         // Defina a porta que você deseja (ex: 3000)
    open: true,         // (Opcional) Abre automaticamente o navegador
  }
})
