import { GLYPHS, ICONS_3D } from '../../assets/icons/glyphs.js'

// Builds one hidden SVG sprite with every icon, rendered once in <App>.
// Icons then reuse it with <use href="#i-name">, so there are no extra requests.

const defs = `
  <linearGradient id="i3d-grad" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#F7A9C6"/><stop offset=".5" stop-color="#F2CDBB"/><stop offset="1" stop-color="#8FE08C"/>
  </linearGradient>
  <radialGradient id="i3d-gloss" cx=".28" cy=".12" r=".75">
    <stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".45" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="i3d-shade" x1="0" y1="0" x2="0" y2="1">
    <stop offset=".55" stop-color="#1F2430" stop-opacity="0"/><stop offset="1" stop-color="#1F2430" stop-opacity=".14"/>
  </linearGradient>
  <g id="i3d-tile">
    <rect x="3" y="3" width="42" height="42" rx="14" fill="url(#i3d-grad)"/>
    <rect x="3" y="3" width="42" height="42" rx="14" fill="url(#i3d-shade)"/>
    <rect x="3" y="3" width="42" height="42" rx="14" fill="url(#i3d-gloss)"/>
    <rect x="3.6" y="3.6" width="40.8" height="40.8" rx="13.4" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/>
  </g>`

const flat = Object.entries(GLYPHS)
  .map(([name, body]) =>
    `<symbol id="g-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`)
  .join('')

const tiles = ICONS_3D
  .map((name) => `<symbol id="i-${name}" viewBox="0 0 48 48"><use href="#i3d-tile"/>` +
    `<use href="#g-${name}" x="12" y="13.4" width="24" height="24" color="#1F2430" opacity=".3" stroke-width="2.4"/>` +
    `<use href="#g-${name}" x="12" y="12" width="24" height="24" color="#FFFFFF" stroke-width="2.4"/></symbol>`)
  .join('')

const markup = `<defs>${defs}</defs>${flat}${tiles}`

export default function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
