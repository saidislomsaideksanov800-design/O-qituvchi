import { useState } from 'react'
import { contactInfo, contactSection, form as copy, socials } from '../data/contact.js'
import Button from './ui/Button.jsx'
import { Glyph, Icon3D } from './ui/Icon.jsx'
import { Blob, Eyebrow, Reveal } from './ui/Bits.jsx'
import { cx, isPlaceholder, linkProps } from '../lib/utils.js'

// Simple checks for each field. Empty string = valid.
const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : copy.errors.name),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : copy.errors.email),
  message: (v) => (v.trim().length >= 10 ? '' : copy.errors.message),
}

function Field({ id, label, error, textarea, ...input }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold">{label}</label>
      <Tag
        id={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(
          'w-full rounded-btn border bg-white/75 px-4 text-base placeholder:text-slate transition',
          'hover:border-ink/30 hover:bg-white focus:border-ink focus:bg-white focus:shadow-focus focus:outline-none',
          textarea ? 'min-h-[152px] resize-y py-4 leading-[1.6]' : 'h-14',
          error ? 'border-error shadow-[0_0_0_4px_rgba(180,35,24,.12)]' : 'border-ink/15',
        )}
        {...input}
      />
      {error && <span id={`${id}-error`} className="text-[13px] text-error">{error}</span>}
    </div>
  )
}

function ContactRow({ icon, label, value, href }) {
  return (
    <a {...linkProps(href, { external: href.startsWith('http') })} className="glass card-hover group flex items-center gap-4 !rounded-tile p-3 no-underline">
      <Icon3D name={icon} />
      <span>
        <small className="block text-[13px] text-slate">{label}</small>
        <b className="block font-head text-base font-semibold">{value}</b>
      </span>
      <Glyph name="arrow" className="ml-auto h-5 w-5 text-slate transition group-hover:translate-x-[3px] group-hover:text-ink" />
    </a>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: validators[name](value) }))
  }
  const onBlur = (e) => {
    const { name, value } = e.target
    if (value) setErrors((er) => ({ ...er, [name]: validators[name](value) }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = Object.fromEntries(Object.keys(validators).map((k) => [k, validators[k](values[k])]))
    setErrors(found)
    const firstBad = Object.keys(found).find((k) => found[k])
    if (firstBad) { document.getElementById(`f-${firstBad}`)?.focus(); return }

    // No endpoint → open the visitor's email app with the message filled in.
    if (!copy.endpoint) {
      if (isPlaceholder(contactInfo.email)) { setStatus('error'); return } // email not set yet
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(copy.title + ' — ' + values.name)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    // Endpoint (e.g. Formspree) → send in the background.
    setStatus('sending')
    try {
      const res = await fetch(copy.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const rows = [
    { icon: 'mail', label: 'Email', value: contactInfo.email, href: isPlaceholder(contactInfo.email) ? '' : `mailto:${contactInfo.email}` },
    { icon: 'phone', label: 'Telefon', value: contactInfo.phone, href: isPlaceholder(contactInfo.phone) ? '' : `tel:${contactInfo.phone.replace(/[^\d+]/g, '')}` },
    { icon: 'telegram', label: 'Telegram', value: `@${contactInfo.telegram}`, href: isPlaceholder(contactInfo.telegram) ? '' : `https://t.me/${contactInfo.telegram}` },
  ]

  const message = { sent: copy.success, mailto: copy.mailtoSuccess, error: copy.failure }[status]

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <Blob className="right-[-100px] top-[-60px] h-[560px] w-[560px]" />
      <Blob color="pink-soft" className="bottom-[-120px] left-[-120px] h-[420px] w-[420px]" />

      <div className="container-page grid gap-8 lg:grid-cols-12 lg:gap-6">
        <Reveal className="grid content-start gap-6 lg:col-span-5">
          <Eyebrow dot>{contactSection.eyebrow}</Eyebrow>
          <h2 id="contact-title" className="text-h2-m lg:text-h2">{contactSection.title}</h2>
          <p className="text-[16px] leading-[1.6] text-slate lg:text-lead">{contactSection.lead}</p>
          <div className="mt-2 grid gap-3">
            {rows.map((r) => <ContactRow key={r.icon} {...r} />)}
          </div>
          <ul className="flex gap-3" aria-label="Ijtimoiy tarmoqlar">
            {socials.map((s) => (
              <li key={s.icon}>
                <a
                  {...linkProps(s.url, { external: true })}
                  aria-label={s.label}
                  className="glass grid h-14 w-14 place-items-center !rounded-btn transition duration-200 ease-soft hover:-translate-y-1 hover:bg-white hover:shadow-lg md:h-16 md:w-16 md:!rounded-tile"
                >
                  <Icon3D name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="form" noValidate onSubmit={onSubmit} className="glass glass-strong grid content-start gap-6 p-6 md:p-10 lg:col-span-6 lg:col-start-7">
          <h3 className="text-h3-m lg:text-h3">{copy.title}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Field id="f-name" name="name" label={copy.nameLabel} placeholder={copy.namePlaceholder} autoComplete="name" required
              value={values.name} onChange={onChange} onBlur={onBlur} error={errors.name} />
            <Field id="f-email" name="email" type="email" label={copy.emailLabel} placeholder={copy.emailPlaceholder} autoComplete="email" required
              value={values.email} onChange={onChange} onBlur={onBlur} error={errors.email} />
          </div>
          <Field id="f-message" name="message" textarea label={copy.messageLabel} placeholder={copy.messagePlaceholder} required
            value={values.message} onChange={onChange} onBlur={onBlur} error={errors.message} />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[13px] text-slate">{copy.note}</span>
            <Button type="submit" className="w-full md:w-auto" disabled={status === 'sending'}>
              {status === 'sending' ? copy.sending : copy.submit}
              <Glyph name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-[3px]" />
            </Button>
          </div>

          <div role="status" aria-live="polite">
            {message && (
              <p className={cx('flex items-center gap-3 rounded-btn border p-4 font-medium', status === 'error' ? 'border-error/40 bg-error/5 text-error' : 'border-green-2/60 bg-green-1/25')}>
                <Icon3D name="mail" size={32} />
                {message}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
