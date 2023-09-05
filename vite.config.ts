import { defineConfig, loadEnv } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import dotenv from 'dotenv';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const env = loadEnv('all', process.cwd());

dotenv.config();

let port = env.VITE_PORT;
let apiUrl = env.VITE_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            resolvers: [ElementPlusResolver({ ssr: true })]
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
        }
    },

    server: {
        host: 'localhost',
        port: parseInt(port),
        proxy: {
            '/api': {
                target: apiUrl,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        cors: {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
            credentials: false,
            allowedHeaders: 'Content-Type, Authorization, X-Requested-With'
        }
    }
});
