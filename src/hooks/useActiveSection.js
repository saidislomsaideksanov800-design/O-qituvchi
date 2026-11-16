import { useEffect, useState } from 'react'

// Returns the id of the section in the middle of the screen ('' when none),
// used to highlight the current menu item.
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(ids.includes(entry.target.id) ? entry.target.id : '')
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // Watch every section, so sections without a menu item clear the highlight.
    document.querySelectorAll('main section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
