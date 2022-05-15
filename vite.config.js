import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
