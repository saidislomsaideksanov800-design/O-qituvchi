// Publications + filter chips.
// Each publication's "topic" must match one of the topic ids below.

export const researchSection = {
  eyebrow: 'Tadqiqotlar',
  title: 'Ilmiy nashrlar',
  lead: '[RESEARCH_LEAD — tadqiqot yo\'nalishlaringiz haqida 1 gap]',
  allLabel: 'Barchasi',
  readLabel: "O'qish",
  emptyText: "Bu mavzu bo'yicha nashr topilmadi.",
  moreLabel: 'Barcha nashrlar (Google Scholar)',
  moreUrl: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]',
}

export const topics = [
  { id: 'topic1', label: '[TOPIC_1]' },
  { id: 'topic2', label: '[TOPIC_2]' },
  { id: 'topic3', label: '[TOPIC_3]' },
]

export const publications = [
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_1]', journal: '[JOURNAL_NAME]', index: '[INDEX — Scopus / WoS / OAK]', topic: 'topic1', url: '[PUBLICATION_URL]' },
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_2]', journal: '[JOURNAL_NAME]', index: '[INDEX]', topic: 'topic2', url: '[PUBLICATION_URL]' },
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_3]', journal: '[JOURNAL_NAME]', index: '[INDEX]', topic: 'topic3', url: '[PUBLICATION_URL]' },
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_4]', journal: '[JOURNAL_NAME]', index: '[INDEX]', topic: 'topic1', url: '[PUBLICATION_URL]' },
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_5]', journal: '[JOURNAL_NAME]', index: '[INDEX]', topic: 'topic2', url: '[PUBLICATION_URL]' },
  { year: '[YEAR]', title: '[PUBLICATION_TITLE_6]', journal: '[JOURNAL_NAME]', index: '[INDEX]', topic: 'topic3', url: '[PUBLICATION_URL]' },
]
