import { useT } from '../lib/i18n.jsx'
import { href } from '../lib/router.js'
import { IconTile } from '../components/Icon.jsx'

export default function NotFound() {
  const { t } = useT()
  return (
    <div className="container-page grid justify-items-center gap-4 py-20 text-center">
      <IconTile name="search" size="lg" tone="muted" />
      <h1 className="text-h2">{t('notfound_t')}</h1>
      <p className="text-muted">{t('notfound_d')}</p>
      <a href={href.home()} className="btn-primary">{t('back_home')}</a>
    </div>
  )
}
