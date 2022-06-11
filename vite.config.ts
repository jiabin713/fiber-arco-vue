import WindiCSS from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import vitePluginForArco from '@arco-plugins/vite-vue';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue(), svgLoader(), WindiCSS(), vitePluginForArco()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      // {
      //   find: 'vue',
      //   replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      // },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/styles/breakpoint.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
