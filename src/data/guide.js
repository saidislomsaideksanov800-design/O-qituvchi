// Short user guide ("Qo'llanma"). Each text has Uzbek (uz) and Russian (ru) versions.

export const guide = {
  title: { uz: "Qisqa qo'llanma", ru: 'Короткая инструкция' },
  lead: { uz: "1 daqiqada o'qing.", ru: 'Прочитайте за 1 минуту.' },

  stepsTitle: { uz: '4 qadam', ru: '4 шага' },
  steps: [
    {
      icon: 'cap',
      title: { uz: 'Sinf va fanni tanlang', ru: 'Выберите класс и предмет' },
      text: { uz: '1-darsdan boshlang.', ru: 'Начните с урока 1.' },
    },
    {
      icon: 'book',
      title: { uz: "Darsni o'qing", ru: 'Прочитайте урок' },
      text: { uz: "Tirnoq ichidagi kulrang matn — o'zbekcha tarjima.", ru: 'Серый текст в кавычках — перевод на узбекский.' },
    },
    {
      icon: 'test',
      title: { uz: "Testdan o'ting", ru: 'Пройдите тест' },
      text: { uz: "5 ta savoldan kamida 4 tasi to'g'ri bo'lsin.", ru: 'Нужно минимум 4 правильных ответа из 5.' },
    },
    {
      icon: 'lock',
      title: { uz: 'Keyingi dars ochiladi', ru: 'Откроется следующий урок' },
      text: { uz: "O'tmasa — darsni qayta o'qing va yana urining.", ru: 'Не прошли — перечитайте урок и попробуйте снова.' },
    },
  ],

  parentsTitle: { uz: 'Ota-onalarga', ru: 'Родителям' },
  parents: [
    { uz: 'Javobni aytib bermang — bola o\'zi bajarsin.', ru: 'Не подсказывайте ответ — пусть ребёнок делает сам.' },
    { uz: 'Doim bitta telefon yoki kompyuterdan foydalaning.', ru: 'Занимайтесь всегда на одном устройстве.' },
    { uz: "Brauzer tarixini tozalamang — natijalar o'chadi.", ru: 'Не очищайте историю браузера — результаты удалятся.' },
  ],

  faqTitle: { uz: 'Savollar', ru: 'Вопросы' },
  faq: [
    {
      q: { uz: 'Dars yopiqmi?', ru: 'Урок закрыт?' },
      a: { uz: "Oldingi darsning testidan o'ting.", ru: 'Пройдите тест предыдущего урока.' },
    },
    {
      q: { uz: "Natijalar yo'qoldimi?", ru: 'Пропал прогресс?' },
      a: { uz: 'Natijalar faqat shu qurilmada saqlanadi.', ru: 'Результаты хранятся только на этом устройстве.' },
    },
    {
      q: { uz: "Sayt eski ko'rinishdami?", ru: 'Сайт выглядит по-старому?' },
      a: { uz: 'Sahifani yangilang (Ctrl + F5).', ru: 'Обновите страницу (Ctrl + F5).' },
    },
  ],

  helpTitle: { uz: 'Savol qoldimi?', ru: 'Остались вопросы?' },
  helpText: { uz: "Muallifga yozing:", ru: 'Напишите автору:' },
  startCta: { uz: 'Darsni boshlash', ru: 'Начать урок' },
}
