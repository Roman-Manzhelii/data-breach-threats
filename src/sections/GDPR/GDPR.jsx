import { useMemo, useRef, useEffect, useState } from "react";
import styles from "./GDPR.module.scss";
import { gdprIntro } from "../../content/gdpr";
import Lottie from "lottie-react";
import whatToDo from "../../assets/email-sent.json";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function GDPR() {
  const reduced = useReducedMotion();
  const { a33, a32, a34 } = useMemo(() => gdprIntro, []);
  const lottieRef = useRef(null);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => () => {
    if (t1.current) clearTimeout(t1.current);
    if (t2.current) clearTimeout(t2.current);
  }, []);

  const handleComplete = () => {
    if (reduced) return;
    const inst = lottieRef.current;
    if (!inst) return;
    setVisible(false);
    t1.current = setTimeout(() => {
      inst.goToAndStop(0, true);
      t2.current = setTimeout(() => {
        setVisible(true);
        inst.play();
      }, 3000);
    }, 300);
  };

  return (
    <section id="gdpr" className={styles.gdpr}>
      <div className={styles.grid}>
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms ease" }}>
          <Lottie
            lottieRef={lottieRef}
            className={styles.lottie}
            animationData={whatToDo}
            autoplay={!reduced}
            loop={false}
            onComplete={handleComplete}
          />
        </div>

        <article className={styles.a33}>
          <h2 className={styles.question}>{a33.title}</h2>
          <p className={styles.definition}>{a33.summary}</p>
          <a className={styles.link} href={a33.href} target="_blank" rel="noreferrer">{a33.linkText}</a>
        </article>

        <article className={styles.a32}>
          <h3 className={styles.question}>{a32.title}</h3>
          <p className={styles.definition}>{a32.summary}</p>
          <a className={styles.link} href={a32.href} target="_blank" rel="noreferrer">{a32.linkText}</a>
        </article>

        <article className={styles.a34}>
          <h3 className={styles.question}>{a34.title}</h3>
          <p className={styles.definition}>{a34.summary}</p>
          <a className={styles.link} href={a34.href} target="_blank" rel="noreferrer">{a34.linkText}</a>
        </article>
      </div>
    </section>
  );
}
