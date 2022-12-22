import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin';
import vercel from 'vite-plugin-vercel';
import vercelSsr from '@magne4000/vite-plugin-vercel-ssr';

export default defineConfig({
  plugins: [
    react(),
    ssr(),
    vercel(),
    vercelSsr(),
  ],
  vercel: {
    // prerender: false,
    // isr: {
    //   '/about': { expiration: 15 },
    // },
  },
  server: {
    port: 3000,
  },
})
