// Icon artwork exported from the design (24×24 line glyphs).
// Each glyph is drawn two ways by <IconSprite>:
//   "i-<name>"  3D gradient tile (pink → peach → green, glossy) — used at 48 and 32 px
//   "g-<name>"  flat glyph for use inside buttons (20 px, currentColor)

export const GLYPHS = {
  video: '<rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="M15.5 10.2 21 7v10l-5.5-3.2"/>',
  book: '<path d="M12 6.8C10 5.2 7 4.6 3 5v13.2c4-.4 7 .2 9 1.8 2-1.6 5-2.2 9-1.8V5c-4-.4-7 .2-9 1.8Z"/><path d="M12 6.8V20"/>',
  cap: '<path d="M2 9.5 12 4.5l10 5-10 5Z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/><path d="M22 9.5v5"/>',
  microscope: '<path d="M4 21h16"/><path d="M7 17.5h7"/><path d="M14.5 21a6.5 6.5 0 0 0 2-11.6"/><path d="M9 3.5h4v8H9Z"/><path d="M11 11.5v3"/><path d="M8.5 14.5h5"/>',
  bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1V16h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3Z"/>',
  play: '<path d="M8.5 5.8v12.4a.8.8 0 0 0 1.2.7l9.6-6.2a.8.8 0 0 0 0-1.4L9.7 5.1a.8.8 0 0 0-1.2.7Z" fill="currentColor"/>',
  document: '<path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7.5 8 5.5 8-5.5"/>',
  phone: '<path d="M5.2 3.5h2.9l1.6 4.1-2.1 1.5a11 11 0 0 0 7.3 7.3l1.5-2.1 4.1 1.6v2.9a1.9 1.9 0 0 1-2.1 1.9A16.5 16.5 0 0 1 3.3 5.6a1.9 1.9 0 0 1 1.9-2.1Z"/>',
  telegram: '<path d="M20.6 4.3 3.2 11.1c-.8.3-.8 1.4 0 1.7l4.3 1.4 1.7 5.2c.2.7 1.1.9 1.6.4l2.5-2.4 4.6 3.4c.6.4 1.4.1 1.6-.6l2.6-13.1c.2-.7-.5-1.2-1.5-.8Z"/><path d="m7.5 14.2 9.6-6.4-6.8 7.4"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.2 9.2v5.6l4.8-2.8Z" fill="currentColor"/>',
  linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/><path d="M8 10.5v6M8 7.6v.01M12 16.5v-6M12 13.2a2.6 2.6 0 0 1 5.2 0v3.3"/>',
  download: '<path d="M12 4v11"/><path d="m7 10.5 5 5 5-5"/><path d="M5 20h14"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  star: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8Z" fill="currentColor"/>',
  // UI-only glyphs (never drawn as 3D tiles)
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  'chevron-left': '<path d="m15 5-7 7 7 7"/>',
  'chevron-right': '<path d="m9 5 7 7-7 7"/>',
  external: '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
}

// The 16 icons of the 3D set.
export const ICONS_3D = ['video', 'book', 'cap', 'microscope', 'bulb', 'play', 'document', 'mail',
  'phone', 'telegram', 'instagram', 'youtube', 'linkedin', 'download', 'arrow', 'star']
