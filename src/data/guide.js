// User guide ("Qo'llanma"). Each text has Uzbek (uz) and Russian (ru) versions.
// The page shows the one that matches the interface language.

export const guide = {
  title: { uz: "Qo'llanma: saytdan qanday foydalanish", ru: 'Инструкция: как пользоваться сайтом' },
  lead: {
    uz: "Darsim — bolaning uy vazifasini mustaqil bajarishi uchun. 5 daqiqada o'qib chiqing va farzandingiz bilan birga birinchi darsni o'ting.",
    ru: 'Darsim помогает ребёнку делать домашнее задание самостоятельно. Прочитайте за 5 минут и пройдите первый урок вместе с ребёнком.',
  },

  stepsTitle: { uz: 'Qadamma-qadam', ru: 'Шаг за шагом' },
  steps: [
    {
      icon: 'globe',
      title: { uz: 'Tilni tanlang', ru: 'Выберите язык' },
      text: {
        uz: "Yuqori o'ng burchakdagi RU / UZ tugmasi menyu va tugmalar tilini almashtiradi. Darslar rus tilida, ostida o'zbekcha tarjimasi bor.",
        ru: 'Кнопка RU / UZ в правом верхнем углу меняет язык меню и кнопок. Уроки — на русском, под ними перевод на узбекский.',
      },
    },
    {
      icon: 'cap',
      title: { uz: 'Sinf → fan → dars', ru: 'Класс → предмет → урок' },
      text: {
        uz: "Bosh sahifada sinfni, keyin fanni tanlang. Darslar ro'yxatida har doim 1-darsdan boshlang. Yopiq darslar qulf belgisi bilan ko'rsatiladi.",
        ru: 'На главной выберите класс, затем предмет. Всегда начинайте с урока 1. Закрытые уроки отмечены замком.',
      },
    },
    {
      icon: 'book',
      title: { uz: "Darsni o'qing", ru: 'Прочитайте урок' },
      text: {
        uz: "Avval «Dars maqsadi»ni, keyin qoida va misollarni o'qing. Qo'sh tirnoq ichidagi kulrang matn — o'zbekcha tarjima. Uni «O'zbekcha tarjima» tugmasi bilan yashirish mumkin.",
        ru: 'Сначала прочитайте «Цель урока», затем правило и примеры. Серый текст в кавычках — перевод на узбекский. Его можно скрыть кнопкой «Перевод на узбекский».',
      },
    },
    {
      icon: 'test',
      title: { uz: "Testdan o'ting", ru: 'Пройдите тест' },
      text: {
        uz: "Dars oxirida «Darsni o'rgandim — testni boshlash»ni bosing. Javobni tanlang → «Javob berish» → izohni o'qing → «Keyingisi». 5 ta savoldan kamida 4 tasiga to'g'ri javob kerak.",
        ru: 'В конце урока нажмите «Я изучил(а) урок — начать тест». Выберите ответ → «Ответить» → прочитайте пояснение → «Далее». Нужно минимум 4 правильных ответа из 5.',
      },
    },
    {
      icon: 'lock',
      title: { uz: 'Keyingi dars ochiladi', ru: 'Откроется следующий урок' },
      text: {
        uz: "Test topshirilsa — «Keyingi dars» tugmasi chiqadi. Topshirilmasa — «Darsni takrorlash»ni bosing, darsni qayta o'qing va testni yana ishlang. Urinishlar soni cheklanmagan.",
        ru: 'Тест пройден — появится кнопка «Следующий урок». Не пройден — нажмите «Повторить урок», перечитайте урок и пройдите тест снова. Попыток — сколько угодно.',
      },
    },
    {
      icon: 'chart',
      title: { uz: "Natijalarni kuzating", ru: 'Следите за результатами' },
      text: {
        uz: "Menyudagi «Natijalarim» sahifasida har bir sinf va fan bo'yicha nechta dars o'tilgani va testlar soni ko'rinadi.",
        ru: 'На странице «Мой прогресс» видно, сколько уроков пройдено по каждому классу и предмету и сколько было попыток тестов.',
      },
    },
  ],

  parentsTitle: { uz: "Ota-onalar uchun muhim qoidalar", ru: 'Важно для родителей' },
  parents: [
    {
      uz: "Javobni aytib bermang. Bola xato qilsa, sayt o'zi to'g'ri javobni va sababini ko'rsatadi — keyin darsni qayta o'qib, testni o'zi topshirsin.",
      ru: 'Не подсказывайте ответ. Если ребёнок ошибся, сайт сам покажет правильный ответ и объяснение — пусть он перечитает урок и сдаст тест сам.',
    },
    {
      uz: "Qoidani tushuntirish uchun o'zbekcha tarjimadan foydalaning: avval ruscha o'qing, keyin tarjimani birga muhokama qiling.",
      ru: 'Используйте перевод, чтобы объяснить правило: сначала прочитайте по-русски, затем обсудите перевод вместе.',
    },
    {
      uz: "Har doim bitta telefon yoki kompyuter va bitta brauzerdan foydalaning: natijalar shu qurilmada saqlanadi.",
      ru: 'Занимайтесь всегда на одном устройстве и в одном браузере: результаты сохраняются на этом устройстве.',
    },
    {
      uz: "Brauzer tarixi va «sayt ma'lumotlari»ni tozalamang — natijalar o'chib ketadi.",
      ru: 'Не очищайте историю браузера и «данные сайтов» — результаты удалятся.',
    },
    {
      uz: "Kuniga 1–2 ta dars yetarli. Shoshilmaslik — yaxshi o'zlashtirishning kaliti.",
      ru: 'Достаточно 1–2 уроков в день. Без спешки тема усваивается лучше.',
    },
    {
      uz: "Haftada bir marta «Natijalarim» sahifasini ko'rib, bolani urinishi uchun maqtang.",
      ru: 'Раз в неделю смотрите «Мой прогресс» и хвалите ребёнка за старание.',
    },
  ],

  faqTitle: { uz: "Ko'p beriladigan savollar", ru: 'Частые вопросы' },
  faq: [
    {
      q: { uz: 'Dars ochilmayapti, qulf turibdi. Nima qilish kerak?', ru: 'Урок не открывается, стоит замок. Что делать?' },
      a: {
        uz: "Darslar tartib bilan ochiladi. Oldingi darsning testidan 5 tadan kamida 4 ta to'g'ri javob bilan o'ting — shunda keyingi dars ochiladi.",
        ru: 'Уроки открываются по порядку. Пройдите тест предыдущего урока минимум на 4 из 5 — тогда откроется следующий.',
      },
    },
    {
      q: { uz: "Natijalarim yo'qolib qoldi.", ru: 'Пропал мой прогресс.' },
      a: {
        uz: "Natijalar faqat shu qurilmadagi brauzerda saqlanadi. Boshqa telefon yoki brauzerda, yoki tarix tozalangandan keyin natijalar boshidan boshlanadi.",
        ru: 'Результаты хранятся только в браузере этого устройства. На другом телефоне, в другом браузере или после очистки истории прогресс начинается заново.',
      },
    },
    {
      q: { uz: "Saytda eski ko'rinish yoki eski matn turibdi.", ru: 'На сайте старый вид или старый текст.' },
      a: {
        uz: "Sahifani yangilang: kompyuterda Ctrl + F5, telefonda sahifani pastga tortib yangilang yoki brauzerni qayta oching.",
        ru: 'Обновите страницу: на компьютере Ctrl + F5, на телефоне потяните страницу вниз или перезапустите браузер.',
      },
    },
    {
      q: { uz: "Tarjima ko'rinmayapti.", ru: 'Не виден перевод.' },
      a: {
        uz: "Dars boshidagi «O'zbekcha tarjima» tugmasini yoqing — «Ko'rsatilgan» deb yozilishi kerak.",
        ru: 'Включите кнопку «Перевод на узбекский» в начале урока — должно быть написано «Показан».',
      },
    },
    {
      q: { uz: "Bola testni qayta-qayta topshirib, javoblarni yodlab olmaydimi?", ru: 'Не запомнит ли ребёнок ответы, пересдавая тест много раз?' },
      a: {
        uz: "Har urinishda savollar va javoblar tartibi aralashadi, har bir javobdan keyin izoh chiqadi. Bola qoidani tushunsagina barqaror o'tadi. Muhimi — bola o'zi bajarsin.",
        ru: 'При каждой попытке вопросы и ответы перемешиваются, после каждого ответа есть пояснение. Стабильно проходит тот, кто понял правило. Главное — чтобы ребёнок делал сам.',
      },
    },
    {
      q: { uz: 'Sayt pullikmi? Ro\'yxatdan o\'tish kerakmi?', ru: 'Сайт платный? Нужна регистрация?' },
      a: {
        uz: "Yo'q. Sayt bepul, ro'yxatdan o'tish shart emas — shunchaki oching va o'qing.",
        ru: 'Нет. Сайт бесплатный, регистрация не нужна — просто откройте и занимайтесь.',
      },
    },
  ],

  helpTitle: { uz: 'Savol qoldimi?', ru: 'Остались вопросы?' },
  helpText: { uz: "Muallifga yozing yoki qo'ng'iroq qiling.", ru: 'Напишите или позвоните автору.' },
  startCta: { uz: 'Birinchi darsni boshlash', ru: 'Начать первый урок' },
}
