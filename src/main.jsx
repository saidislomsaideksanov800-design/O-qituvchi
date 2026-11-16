import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production: the HTML is already pre-rendered, so React only attaches events ("hydrates").
// Development (npm run dev): the page starts empty, so React renders it.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
