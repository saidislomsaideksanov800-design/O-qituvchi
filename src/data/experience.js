// Experience & education timeline (newest first).
// type: 'work' or 'education'. current: true shows the green "now" dot.

export const experienceSection = {
  eyebrow: "Tajriba va ta'lim",
  title: "Mening yo'lim",
  lead: '[EXPERIENCE_LEAD — 1 gap]',
  typeLabels: { work: 'Ish', education: "Ta'lim" },
}

export const timeline = [
  { period: '[YEAR] — hozir', type: 'work', role: '[ROLE_1]', org: '[ORGANIZATION_1]', text: '[ACHIEVEMENT_1]', current: true },
  { period: '[YEAR] — [YEAR]', type: 'education', role: '[DEGREE_1]', org: '[UNIVERSITY_1]', text: '[DETAIL_1]' },
  { period: '[YEAR] — [YEAR]', type: 'work', role: '[ROLE_2]', org: '[ORGANIZATION_2]', text: '[ACHIEVEMENT_2]' },
  { period: '[YEAR] — [YEAR]', type: 'work', role: '[ROLE_3]', org: '[ORGANIZATION_3]', text: '[ACHIEVEMENT_3]' },
  { period: '[YEAR] — [YEAR]', type: 'education', role: '[DEGREE_2]', org: '[UNIVERSITY_2]', text: '[DETAIL_2]' },
]
