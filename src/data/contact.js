// Contact section, social links and footer.

export const contactSection = {
  eyebrow: 'Aloqa',
  title: 'Keling, birga mazmunli loyiha yaratamiz',
  lead: '[CONTACT_LEAD — masalan, qancha vaqtda javob berasiz]',
}

export const contactInfo = {
  email: '[EMAIL]',
  phone: '+998 91 876 83 50',
  telegram: 'NsdXcoseA', // without @
}

// Social icons (Telegram, Instagram, YouTube, LinkedIn)
export const socials = [
  { icon: 'telegram', label: 'Telegram', url: 'https://t.me/NsdXcoseA' },
  { icon: 'instagram', label: 'Instagram', url: 'https://instagram.com/[INSTAGRAM_USERNAME]' },
  { icon: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@[CHANNEL]' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/[LINKEDIN_ID]' },
]

// Contact form.
// endpoint '' → the form opens the visitor's email app with the message filled in.
// To receive messages without an email app, create a free form at formspree.io
// and paste its URL here, e.g. 'https://formspree.io/f/abcdwxyz'.
export const form = {
  endpoint: '',
  title: 'Xabar yuborish',
  nameLabel: 'Ismingiz',
  namePlaceholder: 'Ism Familiya',
  emailLabel: 'Email',
  emailPlaceholder: 'siz@example.com',
  messageLabel: 'Xabar',
  messagePlaceholder: 'Loyiha haqida qisqacha yozing…',
  note: "Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.",
  submit: 'Yuborish',
  sending: 'Yuborilmoqda…',
  success: 'Rahmat! Xabaringiz qabul qilindi.',
  mailtoSuccess: 'Email ilovangiz ochildi — xabarni u yerdan yuboring.',
  failure: "Xatolik yuz berdi. Iltimos, to'g'ridan-to'g'ri email yozing.",
  errors: {
    name: 'Iltimos, ismingizni kiriting.',
    email: "To'g'ri email manzil kiriting.",
    message: "Xabar kamida 10 ta belgidan iborat bo'lsin.",
  },
}

export const footer = {
  rights: 'Barcha huquqlar himoyalangan.',
  backToTop: 'Yuqoriga ↑',
}
