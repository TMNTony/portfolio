import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueImages from 'vite-plugin-vue-images';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueImages(), vue()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})

