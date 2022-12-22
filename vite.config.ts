import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: {
        noExtraDir: true,
      },
    }),
    vercel(),
  ],
  vercel: {
    expiration: 25,
    isr: {
      '/about': { expiration: 15, symlink: 'ssr_', route: '^/about$' },
    }
  },
  server: {
    port: 3000,
  },
})
