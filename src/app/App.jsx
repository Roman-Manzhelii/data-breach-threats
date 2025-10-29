import { useState } from 'react'
import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <>
      <TopNav items={routes} />
      <main>
        <section id="intro" className="section container">
          <h1>Data breaches: definition and threat</h1>
        </section>

        <section id="cases" className="section container">
          <h2>Case Studies</h2>
        </section>

        <section id="gdpr" className="section container">
          <h2>GDPR essentials</h2>
        </section>

        <section id="playbook" className="section container">
          <h2>Breach playbook</h2>
        </section>

        <section id="quiz" className="section container">
          <h2>Quiz</h2>
        </section>
      </main>
    </>
  )
}
