import { defineConfig, loadEnv } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import dotenv from 'dotenv';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import presetMini from '@unocss/preset-mini';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

const env = loadEnv('all', process.cwd());

dotenv.config();

let port = env.VITE_PORT;
let apiUrl = env.VITE_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslint({
            cache: false,
            include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
        }),
        unocss({
            presets: [presetMini()]
        }),
        Components({
            directoryAsNamespace: true
        }),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia']
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
            '/v1': {
                target: apiUrl,
                changeOrigin: true,
                secure: false,
                ws: true,
                rewrite: (path) => path.replace(/^\/v1/, '')
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
