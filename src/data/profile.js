// Hero + About content.
// Photos: put files in src/assets/images/ and write the file name here
// (e.g. 'portrait.webp'). Leave '' to show the soft placeholder.

export const hero = {
  status: 'Hamkorlik uchun ochiqman', // small pill above the headline
  titleLines: ["O'qituvchi.", 'Videograf.', 'Tadqiqotchi.'],
  subtitle: '[HERO_SUBTITLE — 1–2 qisqa gap]',
  primaryCta: { label: "Ishlarimni ko'rish", href: '#videos' },
  secondaryCta: { label: 'CV yuklab olish' }, // links to site.cvFile
  portrait: '', // e.g. 'portrait.webp' (4:5, at least 880×1100)
  portraitAlt: 'Saidislom Saideksanov portreti',
  // Floating badges on the portrait (numbers from the design brief — check them)
  badges: [
    { icon: 'cap', value: '10+ yil', label: 'tajriba' },
    { icon: 'video', value: '50+', label: 'video' },
    { icon: 'document', value: '20+', label: 'ilmiy ish' },
  ],
}

export const about = {
  eyebrow: 'Men haqimda',
  title: "Sinfxona, kamera va laboratoriya orasida ko'prik quraman",
  paragraphs: ['[BIO_PARAGRAPH_1]', '[BIO_PARAGRAPH_2]'],
  photo: '', // e.g. 'about.webp' (4:5)
  photoAlt: '[PHOTO_ALT — rasmda nima bor]',
  photoCaption: '[PHOTO_CAPTION]',
  stats: [
    { icon: 'cap', value: '[NUMBER_1]', label: '[STAT_LABEL_1]' },
    { icon: 'play', value: '[NUMBER_2]', label: '[STAT_LABEL_2]' },
    { icon: 'star', value: '[NUMBER_3]', label: '[STAT_LABEL_3]' },
  ],
}
