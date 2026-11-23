import { useEffect, useState } from 'react'

// Tiny hash router: #/ · #/grade/3 · #/grade/3/math · #/grade/3/math/2 · #/progress · #/parents
// Hash links need no server setup, so the site works on any static host.

export function parseHash(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean)
  if (parts.length === 0) return { name: 'home' }
  if (parts[0] === 'progress' && parts.length === 1) return { name: 'progress' }
  if (parts[0] === 'parents' && parts.length === 1) return { name: 'parents' }
  if (parts[0] === 'grade') {
    const g = Number(parts[1])
    if (!Number.isInteger(g)) return { name: 'notfound' }
    if (parts.length === 2) return { name: 'grade', g }
    if (parts.length === 3) return { name: 'subject', g, s: parts[2] }
    const i = Number(parts[3])
    if (parts.length === 4 && Number.isInteger(i)) return { name: 'lesson', g, s: parts[2], i }
  }
  return { name: 'notfound' }
}

export const isHomeHash = (hash) => parseHash(hash).name === 'home'

export function useRoute() {
  // On the server (pre-render) there is no window → home page.
  const [route, setRoute] = useState(() => (typeof window === 'undefined' ? { name: 'home' } : parseHash(window.location.hash)))

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

// Link builders
export const href = {
  home: () => '#/',
  grade: (g) => `#/grade/${g}`,
  subject: (g, s) => `#/grade/${g}/${s}`,
  lesson: (g, s, i) => `#/grade/${g}/${s}/${i}`,
  progress: () => '#/progress',
  parents: () => '#/parents',
}
