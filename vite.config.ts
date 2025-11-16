/**
 * Vite configuration file
 * Sets up plugins and base path for GitHub Pages deployment.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/'
})
