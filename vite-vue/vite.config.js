import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import resolve from 'resolve'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build: {
  //   target: 'es2015', //主要用于兼容低版本浏览器 可以解决chrome65版本打包发布到服务器上页面空白的问题(主要是65版本不兼容 try catch )
  //   cssTarget: 'chrome65', // 兼容低版本浏览器上样式问题
  //   assetsDir: './assets', // 打包配置路径
  //   rollupOptions: {
  //     input: {
  //       // 主要用于配置多页面
  //       platForm: resolve(__dirname, 'platform.html'),
  //       merchant: resolve(__dirname, 'merchant.html')
  //     }
  //   }
  // }
})
