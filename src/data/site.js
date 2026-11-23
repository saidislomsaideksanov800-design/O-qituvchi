// General site info. Keep this file plain JS (no imports) — vite.config.js also reads it.

const site = {
  brand: 'Darsim',
  author: "Saideksanov Saidislom Saydullo o'g'li",
  phone: '+998 91 876 83 50',
  telegram: 'NsdXcoseA', // without @

  // Used in <head>: page title, description, social preview.
  seo: {
    title: 'Darsim — уроки и тесты для 1–6 классов',
    description:
      'Darsim: уроки и тесты по математике, русскому языку, чтению и окружающему миру для 1–6 классов русских школ Узбекистана. Следующий урок открывается после теста.',
    url: 'https://o-qituvchi.vercel.app/',
    ogImage: 'https://o-qituvchi.vercel.app/og-image.jpg', // add a 1200×630 image as public/og-image.jpg
    locale: 'ru_RU',
  },

  // Share of correct answers needed to pass a lesson test (0.8 = 80%).
  passRatio: 0.8,
}

export default site
