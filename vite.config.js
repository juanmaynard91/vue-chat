import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import compression from 'vite-plugin-compression';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  plugins: [vue(), terser(), cssnano(),
  compression({
    ext: '.br, .js, .css, .html, .svg',
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
  base: "/vue-chat/"
})
