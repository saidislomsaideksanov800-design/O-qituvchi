// General site info: owner name, SEO, navigation, CV file.
// Anything in [SQUARE_BRACKETS] is a placeholder you must replace.
// NOTE: keep this file plain JS (no imports) — vite.config.js also reads it.

const site = {
  fullName: "Saideksanov Saidislom Saydullo o'g'li", // footer, page title
  shortName: 'Saidislom Saideksanov', // logo in the menu (full name is too long for phones)
  monogram: 'SS', // 2 letters for the logo

  // Used in <head>: page title, description, social preview.
  seo: {
    title: "Saidislom Saideksanov — O'qituvchi, videograf, tadqiqotchi",
    description: '[META_DESCRIPTION — 150–160 belgi]',
    url: 'https://o-qituvchi.vercel.app/',
    ogImage: 'https://o-qituvchi.vercel.app/og-image.jpg', // add a 1200×630 image as public/og-image.jpg
    locale: 'uz_UZ',
  },

  // Put your CV at public/cv.pdf (same name) — the button links here.
  cvFile: 'cv.pdf',

  nav: [
    { id: 'about', label: 'Men haqimda' },
    { id: 'skills', label: "Ko'nikmalar" },
    { id: 'videos', label: 'Videolar' },
    { id: 'research', label: 'Tadqiqotlar' },
    { id: 'resources', label: 'Resurslar' },
    { id: 'contact', label: 'Aloqa' },
  ],
  navCta: "Bog'lanish",
  skipLink: "Asosiy tarkibga o'tish",
}

export default site
