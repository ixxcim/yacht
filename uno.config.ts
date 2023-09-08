// uno.config.ts

import { defineConfig, presetUno } from 'unocss';

import presetWebFonts from '@unocss/preset-web-fonts';

export default defineConfig({
    presets: [
        presetUno({ prefix: 'un-' }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'DM Sans:400,500,600,700'
            }
        })
    ]
});
