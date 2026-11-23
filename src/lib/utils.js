// Small helpers.

// Join class names, skipping empty values.
export const cx = (...classes) => classes.filter(Boolean).join(' ')

// Fisher–Yates shuffle (returns a new array).
export function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Safe localStorage (private mode or blocked storage must not break the site).
export const storage = {
  get(key) {
    try { return window.localStorage.getItem(key) } catch { return null }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value) } catch { /* ignore */ }
  },
  remove(key) {
    try { window.localStorage.removeItem(key) } catch { /* ignore */ }
  },
}
