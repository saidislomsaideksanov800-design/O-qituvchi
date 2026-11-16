// Small helpers used across components.

// Join class names, skipping empty values.
export const cx = (...classes) => classes.filter(Boolean).join(' ')

// True if a value is empty or still contains a [PLACEHOLDER].
export const isPlaceholder = (value) =>
  typeof value !== 'string' || value.trim() === '' || /\[[^\]]+\]/.test(value)

// Props for <a>. A placeholder link is shown but does nothing (aria-disabled),
// so no visitor lands on a broken page before you add the real URL.
export function linkProps(url, { external = false } = {}) {
  if (isPlaceholder(url)) {
    return {
      href: '#',
      'aria-disabled': 'true',
      title: "Havola hali qo'shilmagan",
      onClick: (e) => e.preventDefault(),
    }
  }
  return external ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : { href: url }
}

// Images: every file in src/assets/images/ is picked up automatically.
// Data files refer to images by file name, e.g. 'portrait.webp'.
const images = import.meta.glob('../assets/images/*.{webp,avif,jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
})

export function getImage(fileName) {
  if (isPlaceholder(fileName)) return null
  return images[`../assets/images/${fileName}`] ?? null
}

// Two-letter initials from a name ("Ali Valiyev" → "AV"). Placeholders → "?".
export function initials(name) {
  if (isPlaceholder(name)) return '?'
  return name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()
}

// Placeholder background variants, used in rotation.
export const PH = ['ph-a', 'ph-b', 'ph-c', 'ph-d', 'ph-e', 'ph-f']
