import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    sveltekit(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Empathy Chat',
        short_name: 'Empathy',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: []
      }
    })
  ]
});
