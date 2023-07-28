import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import svg from 'vite-plugin-svgr'

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
  } /*
   * 如果你的应用部署在服务器的根路径，那么 base 应当被设置为 '/'。这也是默认的设置。
   * 如果项目要部署在 https://foo.github.io/bar/，那么 base 应该被设置为 '/bar/'。
   */,
  base: '/',
  build: {
    // minify选项设置为false，意味着在构建过程中不会压缩代码。
    minify: false,
    // outDir选项设置构建输出目录为"dist"，构建后的文件将会输出到这个目录。
    outDir: 'dist',
    rollupOptions: {
      input: {
        // input选项设置Rollup打包的入口文件，这里设置为项目根目录下的index.html文件。
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          // manualChunks函数用于控制代码拆分，这里的实现将node_modules中的各个包单独拆分为一个chunk。
          if (id.includes('node_modules')) {
            // 如果模块的路径中包含"node_modules"，那么将其拆分出来，
            // 并使用该模块在node_modules中的路径作为chunk的名称。
            return id.split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 解决 React Router v6 打包路径问题
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
