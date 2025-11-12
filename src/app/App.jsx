import { useState } from 'react'
import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'
import Anchor from '../components/Anchor/Anchor.jsx'
import Intro from '../sections/Intro/Intro.jsx'
import Cases from '../sections/Cases/Cases.jsx'
import GDPR from '../sections/GDPR/GDPR.jsx'
import Playbook from '../sections/Playbook/Playbook.jsx'
import Footer from '../sections/Footer/Footer.jsx'

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <>
      <TopNav items={routes} />
      <main>
        <Anchor id="intro" />
        <Intro />

        <Anchor id="cases" />
        <section className="section snapSection">
          <Cases />
        </section>

        <Anchor id="gdpr" />
        <section className="section snapSection">
          <GDPR />
        </section>

        <Anchor id="playbook" />
        <section className="section snapSection">
          <Playbook />
        </section>

        <Anchor id="references" />
          <Footer />
      </main>
    </>
  )
}
