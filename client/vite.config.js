import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/ads.txt', // Source path in your project
          dest: '.', // Destination in the output directory (root of `dist`)
        },
      ],
    }),
  ],
});
