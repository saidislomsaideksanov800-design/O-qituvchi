import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used only at build time: renders the page to plain HTML,
// so visitors see content before JavaScript loads (faster first paint, better SEO).
export function render() {
  return renderToString(<App />)
}
