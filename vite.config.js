import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import site from './src/data/site.js'

// Escape text before putting it inside HTML attributes.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Fill {{key}} placeholders in index.html with SEO values from src/data/site.js,
// so all editable text lives in one place.
function seoFromData() {
  return {
    name: 'seo-from-data',
    transformIndexHtml(html) {
      return html.replace(/\{\{(\w+)\}\}/g, (match, key) => (key in site.seo ? esc(site.seo[key]) : match))
    },
  }
}

export default defineConfig({
  // Relative paths: the built site works from any folder or host (Vercel, Netlify, sub-folders).
  base: './',
  plugins: [react(), seoFromData()],
})
