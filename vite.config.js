import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import compression from 'vite-plugin-compression'; //npm install vite-plugin-compression --save-dev para comprimir los archivos

export default defineConfig({
  plugins: [vue(),
  compression({
    ext: '.br, .js, .css, .html, .svg', // Utiliza el algoritmo de compresión Brotli
    threshold: 10240,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    brotli: {
      quality: 11,
    },
  }),],
  base: "/chat/"
})
