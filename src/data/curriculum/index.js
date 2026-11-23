// Curriculum: grade → subject → lessons. Lesson texts are in grade1.js … grade6.js.
//
// HOW TO ADD A LESSON: open the grade file, find the subject array and add an object:
// {
//   title: 'Название урока',
//   goal: 'Что ученик научится делать',
//   body: [                                   // explanation, shown top to bottom
//     { t: 'rule', text: 'Правило…' },          // highlighted rule
//     { t: 'p', text: 'Обычный абзац…' },
//     { t: 'ex', title: 'Пример', lines: ['строка 1', 'строка 2'] },
//     { t: 'list', items: ['пункт 1', 'пункт 2'] },
//   ],
//   quiz: [                                   // test after the lesson
//     { q: 'Вопрос?', a: ['ПРАВИЛЬНЫЙ ответ', 'неверный', 'неверный'], why: 'Пояснение' },
//   ],                                        // the FIRST answer is the correct one — options are shuffled on screen
// }

import grade1 from './grade1.js'
import grade2 from './grade2.js'
import grade3 from './grade3.js'
import grade4 from './grade4.js'
import grade5 from './grade5.js'
import grade6 from './grade6.js'

// Uzbek translations (same order as the Russian lessons). See uz/grade1.uz.js for the format.
const uzFiles = import.meta.glob('./uz/grade*.uz.js', { eager: true, import: 'default' })
const uzFor = (g) => uzFiles[`./uz/grade${g}.uz.js`] || {}

const grades = { 1: grade1, 2: grade2, 3: grade3, 4: grade4, 5: grade5, 6: grade6 }
export const GRADES = [1, 2, 3, 4, 5, 6]

// Subject names change with the grade, like in school timetables.
const SUBJECTS = [
  { id: 'math', icon: 'calc', name: () => ({ ru: 'Математика', uz: 'Matematika' }) },
  { id: 'russian', icon: 'pen', name: () => ({ ru: 'Русский язык', uz: 'Rus tili' }) },
  {
    id: 'reading',
    icon: 'book',
    name: (g) => (g <= 4 ? { ru: 'Литературное чтение', uz: "O'qish" } : { ru: 'Литература', uz: 'Adabiyot' }),
  },
  {
    id: 'nature',
    icon: 'leaf',
    name: (g) =>
      g <= 4 ? { ru: 'Окружающий мир', uz: 'Atrofimizdagi olam' }
        : g === 5 ? { ru: 'Естествознание', uz: 'Tabiatshunoslik' }
          : { ru: 'Биология', uz: 'Biologiya' },
  },
]

// All subjects of a grade, with their lessons.
export function getSubjects(g) {
  const data = grades[g]
  if (!data) return []
  const uz = uzFor(g)
  return SUBJECTS.filter((s) => data[s.id]?.length).map((s) => ({
    id: s.id,
    icon: s.icon,
    name: s.name(g),
    // Each lesson gets its Uzbek translation attached as lesson.uz (if there is one).
    lessons: data[s.id].map((lesson, i) => ({ ...lesson, uz: uz[s.id]?.[i] || null })),
  }))
}

export function getSubject(g, s) {
  return getSubjects(g).find((x) => x.id === s) || null
}

export function getLesson(g, s, i) {
  const subject = getSubject(g, s)
  const lesson = subject?.lessons[i - 1]
  return lesson ? { subject, lesson } : null
}

// Flat list of every lesson (used by search and the progress page).
export function allLessons() {
  return GRADES.flatMap((g) =>
    getSubjects(g).flatMap((s) => s.lessons.map((lesson, idx) => ({ g, subject: s, i: idx + 1, lesson }))),
  )
}
