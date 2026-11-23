import { LangProvider } from './lib/i18n.jsx'
import { useRoute } from './lib/router.js'
import { IconSprite } from './components/Icon.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Grade from './pages/Grade.jsx'
import Subject from './pages/Subject.jsx'
import Lesson from './pages/Lesson.jsx'
import Progress from './pages/Progress.jsx'
import Parents from './pages/Parents.jsx'
import Guide from './pages/Guide.jsx'
import NotFound from './pages/NotFound.jsx'

function Page({ route }) {
  switch (route.name) {
    case 'home': return <Home />
    case 'grade': return <Grade g={route.g} />
    case 'subject': return <Subject g={route.g} s={route.s} />
    case 'lesson': return <Lesson g={route.g} s={route.s} i={route.i} />
    case 'progress': return <Progress />
    case 'parents': return <Parents />
    case 'guide': return <Guide />
    default: return <NotFound />
  }
}

export default function App() {
  const route = useRoute()
  return (
    <LangProvider>
      <IconSprite />
      <Header route={route} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Page route={route} />
      </main>
      <Footer />
    </LangProvider>
  )
}
