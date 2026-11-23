import { createContext, useContext, useEffect, useState } from 'react'
import { storage } from './utils.js'

// Interface texts in Russian and Uzbek. Lesson content itself is in Russian (school language).
// {n}, {i}, {k}, {c} are filled in by t(key, values).

const ru = {
  tagline: 'Учимся дома',
  topbar: 'Уроки и тесты для 1–6 классов русских школ Узбекистана',
  nav_home: 'Главная',
  nav_progress: 'Мой прогресс',
  nav_parents: 'Родителям',
  nav_guide: 'Инструкция',
  guide_cta_t: 'Впервые на сайте?',
  guide_cta_d: 'Короткая инструкция: как проходить уроки и тесты, и что делать, если урок закрыт.',
  menu_open: 'Открыть меню',
  menu_close: 'Закрыть меню',
  skip: 'Перейти к содержанию',
  lang_label: 'Язык интерфейса',
  uz_toggle: 'Перевод на узбекский',
  uz_on: 'Показан',
  uz_off: 'Скрыт',

  hero_title: 'Домашнее задание — сам, шаг за шагом',
  hero_text: 'Выбери класс и предмет, изучи урок и пройди тест. Следующий урок откроется, когда этот будет усвоен.',
  hero_cta: 'Выбрать класс',
  hero_progress: 'Мой прогресс',
  hero_card_title: 'Путь ученика',

  search_label: 'Поиск урока',
  search_ph: 'Например: периметр, гласные, басня',
  search_empty: 'Ничего не найдено. Попробуйте другое слово.',
  search_found: 'Найдено: {n}',

  grades_title: 'Выберите класс',
  grades_text: '4 предмета в каждом классе',
  grade: '{n} класс',
  subjects_count: '{n} предмета',

  steps_title: 'Как это работает',
  step1_t: 'Выбери урок',
  step1_d: 'Класс → предмет → урок. Начинай с первого урока.',
  step2_t: 'Изучи объяснение',
  step2_d: 'Правило, примеры и подсказки — всё на одной странице.',
  step3_t: 'Пройди тест',
  step3_d: 'Нужно ответить правильно минимум на {p}% вопросов.',
  step4_t: 'Открой следующий урок',
  step4_d: 'Без пройденного теста следующий урок закрыт.',

  parents_cta_t: 'Родителям',
  parents_cta_d: 'Как следить за успехами ребёнка и помогать без подсказок.',
  more: 'Подробнее',

  lessons: 'Уроки',
  lesson_n: 'Урок {n}',
  passed_of: 'Пройдено {c} из {n}',
  status_done: 'Пройден',
  status_open: 'Доступен',
  status_locked: 'Закрыт',
  locked_hint: 'Сначала пройдите тест урока {n}',
  open: 'Открыть',

  goal: 'Цель урока',
  rule: 'Правило',
  example: 'Пример',
  remember: 'Запомни',
  content_lang: '',
  start_test: 'Я изучил(а) урок — начать тест',
  test_title: 'Проверь себя',
  test_intro: '{n} вопросов. Чтобы открыть следующий урок, нужно минимум {k} правильных ответов.',
  question_of: 'Вопрос {i} из {n}',
  check: 'Ответить',
  next: 'Далее',
  finish: 'Показать результат',
  correct: 'Верно!',
  wrong: 'Неверно. Правильный ответ: ',
  result_pass: 'Отлично! Урок усвоен',
  result_fail: 'Пока недостаточно',
  result_score: 'Правильных ответов: {c} из {n}',
  result_need: 'Нужно минимум {k}. Перечитай урок и попробуй ещё раз.',
  retry: 'Повторить урок',
  next_lesson: 'Следующий урок',
  to_list: 'К списку уроков',
  subject_done: 'Все уроки этого предмета пройдены!',
  locked_title: 'Этот урок пока закрыт',
  locked_text: 'Уроки открываются по порядку. Пройдите тест урока {n}, чтобы открыть этот урок.',
  go_to_lesson: 'Перейти к уроку {n}',

  progress_title: 'Мой прогресс',
  progress_text: 'Прогресс сохраняется в этом браузере на этом устройстве.',
  progress_total: 'Пройдено уроков',
  progress_attempts: 'Попыток тестов',
  progress_best: 'Лучший результат',
  progress_none: 'Пока нет пройденных уроков. Начните с 1-го урока любого предмета.',
  reset: 'Сбросить прогресс',
  reset_q: 'Точно сбросить весь прогресс? Это действие нельзя отменить.',
  reset_yes: 'Да, сбросить',
  reset_no: 'Отмена',
  reset_done: 'Прогресс сброшен.',

  parents_title: 'Родителям',
  parents_lead: 'Darsim помогает ребёнку делать домашнее задание самостоятельно и закреплять каждую тему.',
  p_rule1_t: 'Уроки идут по порядку',
  p_rule1_d: 'Следующий урок открывается, только если тест предыдущего пройден на {p}% и выше.',
  p_rule2_t: 'Ошибки — часть учёбы',
  p_rule2_d: 'После каждого ответа ребёнок видит, верно ли он ответил, и почему. Тест можно пересдавать сколько угодно раз.',
  p_rule3_t: 'Прогресс на устройстве',
  p_rule3_d: 'Результаты хранятся в браузере. Если ребёнок занимается на другом устройстве, прогресс там начнётся заново.',
  p_tips_t: 'Как помогать',
  p_tips: ['Садитесь рядом на первых уроках, потом дайте ребёнку работать самому.', 'Просите пересказать правило своими словами перед тестом.', 'Хвалите за попытку, а не только за результат.', 'Смотрите страницу «Мой прогресс» раз в неделю.'],
  p_program_t: 'О программе',
  p_program_d: 'Темы уроков составлены по типичной программе русских школ Узбекистана для 1–6 классов. Сверяйте порядок тем с календарным планом учителя. Сейчас доступно по 3 урока в каждом предмете — новые уроки будут добавляться.',
  p_contact_t: 'Связаться с автором',

  footer_about: 'Уроки и тесты для самостоятельной работы дома.',
  footer_disclaimer: 'Darsim — частный образовательный проект. Не является официальным ресурсом государственных органов.',
  author: 'Автор',
  notfound_t: 'Страница не найдена',
  notfound_d: 'Возможно, ссылка устарела.',
  back_home: 'На главную',
}

const uz = {
  tagline: "Uyda o'rganamiz",
  topbar: "O'zbekistondagi rus maktablari 1–6-sinflari uchun darslar va testlar",
  nav_home: 'Bosh sahifa',
  nav_progress: 'Natijalarim',
  nav_parents: 'Ota-onalarga',
  nav_guide: "Qo'llanma",
  guide_cta_t: 'Saytga birinchi marta kirdingizmi?',
  guide_cta_d: "Qisqa qo'llanma: darslar va testlardan qanday o'tish, dars yopiq bo'lsa nima qilish kerak.",
  menu_open: 'Menyuni ochish',
  menu_close: 'Menyuni yopish',
  skip: "Asosiy qismga o'tish",
  lang_label: 'Interfeys tili',
  uz_toggle: "O'zbekcha tarjima",
  uz_on: "Ko'rsatilgan",
  uz_off: 'Yashirilgan',

  hero_title: 'Uy vazifasi — mustaqil, qadamma-qadam',
  hero_text: "Sinf va fanni tanlang, darsni o'rganing va testdan o'ting. Keyingi dars shu dars o'zlashtirilgandan keyin ochiladi.",
  hero_cta: 'Sinfni tanlash',
  hero_progress: 'Natijalarim',
  hero_card_title: "O'quvchi yo'li",

  search_label: 'Darsni qidirish',
  search_ph: 'Masalan: периметр, гласные, басня',
  search_empty: "Hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.",
  search_found: 'Topildi: {n}',

  grades_title: 'Sinfni tanlang',
  grades_text: 'Har bir sinfda 4 ta fan',
  grade: '{n}-sinf',
  subjects_count: '{n} ta fan',

  steps_title: 'Qanday ishlaydi',
  step1_t: 'Darsni tanlang',
  step1_d: 'Sinf → fan → dars. Birinchi darsdan boshlang.',
  step2_t: "Tushuntirishni o'qing",
  step2_d: 'Qoida, misollar va maslahatlar — hammasi bir sahifada.',
  step3_t: "Testdan o'ting",
  step3_d: "Savollarning kamida {p}% iga to'g'ri javob berish kerak.",
  step4_t: 'Keyingi darsni oching',
  step4_d: "Test topshirilmasa, keyingi dars yopiq bo'ladi.",

  parents_cta_t: 'Ota-onalarga',
  parents_cta_d: "Farzandingiz natijalarini qanday kuzatish va javobni aytmasdan yordam berish.",
  more: 'Batafsil',

  lessons: 'Darslar',
  lesson_n: '{n}-dars',
  passed_of: "{n} tadan {c} tasi o'tildi",
  status_done: "O'tildi",
  status_open: 'Ochiq',
  status_locked: 'Yopiq',
  locked_hint: "Avval {n}-dars testidan o'ting",
  open: 'Ochish',

  goal: 'Dars maqsadi',
  rule: 'Qoida',
  example: 'Misol',
  remember: 'Esda tuting',
  content_lang: 'Darslar rus tilida — rus maktabi dasturi asosida.',
  start_test: "Darsni o'rgandim — testni boshlash",
  test_title: "O'zingizni tekshiring",
  test_intro: "{n} ta savol. Keyingi darsni ochish uchun kamida {k} ta to'g'ri javob kerak.",
  question_of: '{n} tadan {i}-savol',
  check: 'Javob berish',
  next: 'Keyingisi',
  finish: "Natijani ko'rish",
  correct: "To'g'ri!",
  wrong: "Noto'g'ri. To'g'ri javob: ",
  result_pass: "Ajoyib! Dars o'zlashtirildi",
  result_fail: 'Hozircha yetarli emas',
  result_score: "To'g'ri javoblar: {n} tadan {c} ta",
  result_need: "Kamida {k} ta kerak. Darsni qayta o'qing va yana urinib ko'ring.",
  retry: 'Darsni takrorlash',
  next_lesson: 'Keyingi dars',
  to_list: "Darslar ro'yxatiga",
  subject_done: "Bu fanning barcha darslari o'tildi!",
  locked_title: 'Bu dars hozircha yopiq',
  locked_text: "Darslar tartib bilan ochiladi. Bu darsni ochish uchun {n}-dars testidan o'ting.",
  go_to_lesson: "{n}-darsga o'tish",

  progress_title: 'Natijalarim',
  progress_text: 'Natijalar shu qurilmadagi brauzerda saqlanadi.',
  progress_total: "O'tilgan darslar",
  progress_attempts: 'Test urinishlari',
  progress_best: 'Eng yaxshi natija',
  progress_none: "Hali o'tilgan darslar yo'q. Istalgan fanning 1-darsidan boshlang.",
  reset: 'Natijalarni tozalash',
  reset_q: "Barcha natijalar o'chirilsinmi? Buni qaytarib bo'lmaydi.",
  reset_yes: "Ha, o'chirish",
  reset_no: 'Bekor qilish',
  reset_done: "Natijalar o'chirildi.",

  parents_title: 'Ota-onalarga',
  parents_lead: "Darsim farzandingizga uy vazifasini mustaqil bajarish va har bir mavzuni mustahkamlashda yordam beradi.",
  p_rule1_t: 'Darslar tartib bilan',
  p_rule1_d: "Keyingi dars oldingi dars testi {p}% va undan yuqori natija bilan topshirilgandagina ochiladi.",
  p_rule2_t: "Xato — o'qishning bir qismi",
  p_rule2_d: "Har bir javobdan keyin bola to'g'ri yoki noto'g'ri ekanini va sababini ko'radi. Testni istalgancha qayta topshirish mumkin.",
  p_rule3_t: 'Natijalar qurilmada',
  p_rule3_d: "Natijalar brauzerda saqlanadi. Boshqa qurilmada natijalar boshidan boshlanadi.",
  p_tips_t: 'Qanday yordam berish kerak',
  p_tips: ["Dastlabki darslarda yonida o'tiring, keyin bolaga mustaqil ishlashga imkon bering.", "Testdan oldin qoidani o'z so'zlari bilan aytib berishini so'rang.", 'Faqat natija uchun emas, urinish uchun ham maqtang.', '"Natijalarim" sahifasini haftada bir marta ko\'ring.'],
  p_program_t: 'Dastur haqida',
  p_program_d: "Dars mavzulari O'zbekistondagi rus maktablarining 1–6-sinflar uchun odatiy dasturi asosida tuzilgan. Mavzular tartibini o'qituvchining kalendar rejasi bilan solishtiring. Hozir har bir fanda 3 tadan dars bor — yangi darslar qo'shib boriladi.",
  p_contact_t: "Muallif bilan bog'lanish",

  footer_about: 'Uyda mustaqil ishlash uchun darslar va testlar.',
  footer_disclaimer: 'Darsim — xususiy ta\'lim loyihasi. Davlat organlarining rasmiy resursi emas.',
  author: 'Muallif',
  notfound_t: 'Sahifa topilmadi',
  notfound_d: 'Havola eskirgan bo\'lishi mumkin.',
  back_home: 'Bosh sahifaga',
}

const dict = { ru, uz }
const LangContext = createContext(null)
const KEY = 'darsim-lang'
const UZ_KEY = 'darsim-uz-translation'

export function LangProvider({ children }) {
  // Always start in Russian (matches the pre-rendered HTML), then load the saved choice.
  const [lang, setLangState] = useState('ru')
  // Uzbek translations under Russian lesson text — on by default.
  const [showUz, setShowUzState] = useState(true)

  useEffect(() => {
    const saved = storage.get(KEY)
    if (saved === 'uz' || saved === 'ru') setLangState(saved)
    if (storage.get(UZ_KEY) === 'off') setShowUzState(false)
  }, [])

  const setShowUz = (on) => {
    setShowUzState(on)
    storage.set(UZ_KEY, on ? 'on' : 'off')
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l) => {
    setLangState(l)
    storage.set(KEY, l)
  }

  const t = (key, vars) => {
    const value = dict[lang][key] ?? dict.ru[key] ?? key
    if (!vars || typeof value !== 'string') return value
    return value.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m))
  }

  return <LangContext.Provider value={{ lang, setLang, t, showUz, setShowUz }}>{children}</LangContext.Provider>
}

export const useT = () => useContext(LangContext)

// Russian plural: 1 урок, 2 урока, 5 уроков.
export function ruPlural(n, one, few, many) {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return one
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few
  return many
}
