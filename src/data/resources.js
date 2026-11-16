// Educational resources (carousel with category tabs).
// action: 'download' (file) or 'details' (link to a page)
// href:   for downloads put the file in public/resources/ and write '/resources/file.pdf'
// cover:  3D icon shown on the cover

export const resourcesSection = {
  eyebrow: "O'quv qurollari va kitoblar",
  title: 'Bepul resurslar',
  lead: "O'qituvchilar va talabalar uchun kitoblar, dars rejalari, video darslar va vositalar.",
  downloadLabel: 'Yuklab olish',
  detailsLabel: 'Batafsil',
}

export const categories = [
  { id: 'books', label: 'Kitoblar', cover: 'book' },
  { id: 'plans', label: 'Dars rejalari', cover: 'document' },
  { id: 'lessons', label: 'Video darslar', cover: 'play' },
  { id: 'tools', label: 'Vositalar', cover: 'bulb' },
]

// Helper so the list below stays short. Replace each item's text.
const item = (category, n, action) => ({
  category,
  title: `[RESOURCE_TITLE_${n}]`,
  subtitle: '[TYPE · YEAR]',
  description: '[SHORT_DESCRIPTION]',
  meta: action === 'download' ? '[FORMAT · SIZE]' : '[DURATION / INFO]',
  action,
  href: '[RESOURCE_URL]',
})

export const resources = [
  item('books', 1, 'download'), item('books', 2, 'download'), item('books', 3, 'download'), item('books', 4, 'download'), item('books', 5, 'details'),
  item('plans', 1, 'download'), item('plans', 2, 'download'), item('plans', 3, 'download'), item('plans', 4, 'download'),
  item('lessons', 1, 'details'), item('lessons', 2, 'details'), item('lessons', 3, 'details'), item('lessons', 4, 'details'),
  item('tools', 1, 'download'), item('tools', 2, 'download'), item('tools', 3, 'details'), item('tools', 4, 'download'),
]
