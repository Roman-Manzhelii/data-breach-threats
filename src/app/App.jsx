import { useState } from 'react'
import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'
import Anchor from '../components/Anchor/Anchor.jsx'
import Intro from '../sections/Intro/Intro.jsx'
import Cases from '../sections/Cases/Cases.jsx'
import GDPR from '../sections/GDPR/GDPR.jsx'

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <>
      <TopNav items={routes} />
      <main>
        <Anchor id="intro" />
        <Intro />

        <Anchor id="cases" />
        <Cases />

        <Anchor id="gdpr" />
        <GDPR />

        {/* <Anchor id="playbook" />
        <section className="section container">
          <h2>Breach playbook</h2>
        </section>

        <Anchor id="quiz" />
        <section className="section container">
          <h2>Quiz</h2>
        </section> */}
      </main>
    </>
  )
}
