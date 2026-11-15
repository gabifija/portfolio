import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base must match the GitHub Pages path: gabifija.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
});
