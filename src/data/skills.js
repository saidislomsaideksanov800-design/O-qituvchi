// Skills section. Groups and skill names come from the design brief.
// icon: one of the 3D icon names in src/assets/icons/glyphs.js

export const skillsSection = {
  eyebrow: "Ko'nikmalar",
  title: "Uch yo'nalish — bitta maqsad",
  lead: "Har bir loyihada o'qitish, tasvir va tadqiqot bir-birini to'ldiradi.",
}

export const skillGroups = [
  {
    icon: 'cap',
    title: "O'qitish",
    description: '[GROUP_DESCRIPTION_TEACHING]',
    skills: [
      { icon: 'document', name: 'Dars loyihalash', note: '[SHORT_NOTE]' },
      { icon: 'book', name: 'Pedagogika', note: '[SHORT_NOTE]' },
      { icon: 'star', name: 'Mentorlik', note: '[SHORT_NOTE]' },
    ],
    tools: ['[TOOL_1]', '[TOOL_2]', '[TOOL_3]'],
  },
  {
    icon: 'video',
    title: 'Videografiya',
    description: '[GROUP_DESCRIPTION_VIDEO]',
    skills: [
      { icon: 'video', name: 'Suratga olish', note: '[SHORT_NOTE]' },
      { icon: 'play', name: 'Montaj', note: '[SHORT_NOTE]' },
      { icon: 'bulb', name: 'Hikoya qilish', note: '[SHORT_NOTE]' },
    ],
    tools: ['[TOOL_1]', '[TOOL_2]', '[TOOL_3]'],
  },
  {
    icon: 'microscope',
    title: 'Tadqiqot',
    description: '[GROUP_DESCRIPTION_RESEARCH]',
    skills: [
      { icon: 'microscope', name: 'Tahlil', note: '[SHORT_NOTE]' },
      { icon: 'document', name: 'Ilmiy yozuv', note: '[SHORT_NOTE]' },
      { icon: 'bulb', name: "Ma'lumotlar", note: '[SHORT_NOTE]' },
    ],
    tools: ['[TOOL_1]', '[TOOL_2]', '[TOOL_3]'],
  },
]
