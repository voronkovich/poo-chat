import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineConfig({
    plugins: [
        vue({
            emplate: {
                compilerOptions: {
                    isCustomElement: tag => tag.startsWith('sl-')
                }
            }
        }),
        svgLoader(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    server: {
        open: true,
    },
})
