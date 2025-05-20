import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '.htaccess',
          dest: '.' // places it directly in the dist folder
        }
      ]
    }),
    react()],
})
