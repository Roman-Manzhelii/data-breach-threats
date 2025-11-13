import { routes } from './routes.jsx'
import TopNav from '../components/TopNav/TopNav.jsx'
import Anchor from '../components/Anchor/Anchor.jsx'
import Intro from '../sections/Intro/Intro.jsx'
import Cases from '../sections/Cases/Cases.jsx'
import GDPR from '../sections/GDPR/GDPR.jsx'
import Playbook from '../sections/Playbook/Playbook.jsx'
import Footer from '../sections/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <TopNav items={routes} />
      <main>
        <Anchor id="intro" />
        <Intro />

        <Anchor id="cases" label="Case Studies" />
        <section className="section snapSection">
          <div className="snapInner">
            <Cases />
          </div>
        </section>

        <Anchor id="gdpr" label="GDPR" />
        <section className="section snapSection">
          <div className="snapInner">
            <GDPR />
          </div>
        </section>

        <Anchor id="playbook" label="Playbook" />
        <section className="section snapSection">
          <div className="snapInner">
            <Playbook />
          </div>
        </section>

        <Anchor id="references" />
        <Footer />
      </main>
    </>
  )
}
