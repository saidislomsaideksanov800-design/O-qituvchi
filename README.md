# Portfolio — Educator · Videographer · Researcher

A one-page portfolio site built with **React + Vite + Tailwind CSS** and **Framer Motion**.
Light glassmorphism design, 3D gradient icons, works on phones (390px) up to large screens (1440px+).

---

## 1. Install and run

You need **Node.js 18 or newer** (https://nodejs.org).

```bash
npm install        # first time only — downloads the libraries
npm run dev        # starts the site at http://localhost:5173 (auto-reloads when you edit)
```

Other commands:

```bash
npm run build      # makes the final site in the "dist" folder
npm run preview    # shows the final "dist" site at http://localhost:4173
```

---

## 2. Edit the content

**All text lives in `src/data/`.** You never need to touch the components to change words.
Anything written like `[THIS]` is a placeholder — replace it.

| File | What it controls |
| --- | --- |
| `src/data/site.js` | Your name, logo letters, page title / description (SEO), menu labels, CV file |
| `src/data/profile.js` | Hero (headline, subtitle, buttons, badges, portrait) and About (bio, photo, 3 stats) |
| `src/data/skills.js` | Three skill groups, skill notes, tools |
| `src/data/videos.js` | Videos — the **first** one is shown large. Add the YouTube ID |
| `src/data/research.js` | Publications and the filter topics |
| `src/data/resources.js` | Books, lesson plans, video lessons, tools (carousel) |
| `src/data/experience.js` | Timeline of jobs and education |
| `src/data/testimonials.js` | 3 quotes |
| `src/data/contact.js` | Email, phone, Telegram, social links, contact form texts, footer |

**Placeholder links are safe:** a link that still contains `[...]` is shown slightly faded and does nothing when clicked.
It starts working as soon as you put a real URL in.

### Photos
1. Save photos as **WebP**, under ~200 KB each (use https://squoosh.app).
2. Put them in `src/assets/images/`.
3. Write the file name in the data file, e.g. in `profile.js`: `portrait: 'portrait.webp'`.

Sizes are listed in `src/assets/images/README.md`. Until a photo is added, a soft pink placeholder is shown.

### Videos
In `src/data/videos.js`, set `youtubeId`. For `https://www.youtube.com/watch?v=abc123XYZ` the ID is `abc123XYZ`.
The thumbnail is taken from YouTube automatically; clicking opens the video in a pop-up player.

### CV
Replace `public/cv.pdf` with your real CV (keep the same name).

### Contact form
By default, **Send** opens the visitor's email app with the message filled in (needs your real email in `contact.js`).
To receive messages directly instead: make a free form at https://formspree.io, copy its URL
(like `https://formspree.io/f/abcdwxyz`) into `form.endpoint` in `src/data/contact.js`.

### Colors, fonts, sizes
All design tokens are in **`tailwind.config.js`** (colors, fonts, font sizes, radius, shadows, spacing).
Glass, placeholders and a few special styles are in `src/index.css`.

---

## 3. Deploy (put it online for free)

### Vercel
1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → **Add New → Project** → pick the repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.

### Netlify
1. Push this folder to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project** → pick the repository.
3. Build command: `npm run build` · Publish directory: `dist` → **Deploy**.

(Or run `npm run build` and drag the `dist` folder onto https://app.netlify.com/drop.)

After deploying, put your real address in `seo.url` and `seo.ogImage` in `src/data/site.js` and deploy again.

---

## 4. Project structure

```
public/            favicon.svg, cv.pdf, robots.txt (copied as-is)
scripts/           prerender.js — writes the page HTML at build time (fast first paint, SEO)
src/
  assets/icons/    glyphs.js — the 16 icons from the design
  assets/images/   your photos
  components/      Navbar, Hero, About, Skills, Videos, VideoModal, Research,
                   Resources, Experience, Testimonials, Contact, Footer
  components/ui/   Button, GlassCard, Chip, Icon (3D + flat), IconSprite, Bits (Eyebrow, Tag, Reveal, Photo…)
  data/            ALL text content
  hooks/           useActiveSection — highlights the current menu item
  lib/utils.js     small helpers (placeholder links, image lookup)
tailwind.config.js design tokens
```

---

## 5. Checklist — what you must replace

Search the project for `[` to find every placeholder. In order of importance:

- [ ] **Name** — `site.js`: `fullName`, `monogram` (2 letters)
- [ ] **SEO** — `site.js`: `seo.description`, `seo.url`, `seo.ogImage` + add `public/og-image.jpg` (1200×630)
- [ ] **Portrait photo** — `src/assets/images/portrait.webp` → `profile.js` `hero.portrait`
- [ ] **About photo** — `src/assets/images/about.webp` → `profile.js` `about.photo`, `photoAlt`, `photoCaption`
- [ ] **Hero subtitle** — `profile.js` `hero.subtitle`
- [ ] **Hero badges** — check `10+ yil / 50+ / 20+` in `profile.js` (taken from the design brief)
- [ ] **Bio** — `profile.js` `about.paragraphs`
- [ ] **3 stats** — `profile.js` `about.stats` (number + label)
- [ ] **Skills** — `skills.js`: group descriptions, skill notes, tools
- [ ] **Videos** — `videos.js`: 6 × `youtubeId`, title, category, duration, year; `channelUrl`
- [ ] **Publications** — `research.js`: 6 × title, year, journal, index, URL; 3 topic names; `lead`; Google Scholar link
- [ ] **Resources** — `resources.js`: titles, descriptions, file links (put files in `public/resources/`)
- [ ] **Timeline** — `experience.js`: periods, roles, organisations, details; `lead`
- [ ] **Testimonials** — `testimonials.js`: quotes, names, roles, rating (with permission)
- [ ] **Contact** — `contact.js`: email, phone, Telegram username, 4 social URLs, `lead`
- [ ] **CV** — replace `public/cv.pdf`
- [ ] (optional) Formspree endpoint in `contact.js`

Design text that was kept from the mock-up (section titles, button labels, "Hamkorlik uchun ochiqman")
is also in the data files — change it if you like.
