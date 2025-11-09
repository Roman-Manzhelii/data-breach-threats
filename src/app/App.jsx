import { useState } from 'react'
import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'
import Anchor from '../components/Anchor/Anchor.jsx'
import Intro from '../sections/Intro/Intro.jsx'
import Cases from '../sections/Cases/Cases.jsx'
import GDPR from '../sections/GDPR/GDPR.jsx'
import Playbook from '../sections/Playbook/Playbook.jsx'

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

        <Anchor id="playbook" />
        <Playbook />
      </main>
    </>
  )
}
