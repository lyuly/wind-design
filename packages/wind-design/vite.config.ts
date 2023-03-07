import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import * as pkg from './package.json'
import classNames from 'classnames'

const externals = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.dependencies || {})]

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'wind-design',
      fileName: (format: string) => `wind-design.${format}.js`
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          react: 'React',
          classNames: 'classnames'
        },
        exports: 'named'
      }
    }
  }
})
