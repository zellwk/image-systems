// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'

import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [mdx(), svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
