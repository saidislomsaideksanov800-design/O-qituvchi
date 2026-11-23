import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import { isHomeHash } from './lib/router.js'
import './index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The built HTML contains the pre-rendered home page.
// Home → React just attaches to it ("hydrate"). Any other page → render fresh.
if (container.firstElementChild && isHomeHash(window.location.hash)) {
  hydrateRoot(container, app)
} else {
  container.innerHTML = ''
  createRoot(container).render(app)
}
