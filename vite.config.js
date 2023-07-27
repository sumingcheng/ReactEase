import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import svg from 'vite-plugin-svgr'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    react(),
    svg(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    splitVendorChunkPlugin(),
  ],
  define: {
    'process.env': process.env,
  },
  /*
   * 如果你的应用部署在服务器的根路径，那么 base 应当被设置为 '/'。这也是默认的设置。
   * 如果你的应用部署在一个子路径上，例如 http://www.example.com/my-app/，那么 base 应该被设置为 '/my-app/'。
   */
  base: '/',
  build: {
    minify: false,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 解决 React Router v6 打包路径问题
    },
  },
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
})
