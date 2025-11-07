import { useMemo } from "react";
import styles from "./GDPR.module.scss";
import { gdprIntro } from "../../content/gdpr";
import Lottie from "lottie-react";
import whatToDo from "../../assets/fingerprint-scanning.json";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function GDPR() {
  const reduced = useReducedMotion();
  const { a33, a32, a34 } = useMemo(() => gdprIntro, []);

  return (
    <section id="gdpr" className={styles.gdpr}>
      {/* <div className="container"> */}
        <div className={styles.grid}>
          <Lottie
            className={styles.lottie}
            animationData={whatToDo}
            autoplay={!reduced}
            loop={!reduced}
          />

          <article className={styles.a33}>
            <h2 className={styles.question}>{a33.title}</h2>
            <p className={styles.definition}>{a33.summary}</p>
            <a
              className={styles.link}
              href={a33.href}
              target="_blank"
              rel="noreferrer"
            >
              {a33.linkText}
            </a>
          </article>

          <article className={styles.a32}>
            <h3 className={styles.question}>{a32.title}</h3>
            <p className={styles.definition}>{a32.summary}</p>
            <a
              className={styles.link}
              href={a32.href}
              target="_blank"
              rel="noreferrer"
            >
              {a32.linkText}
            </a>
          </article>

          <article className={styles.a34}>
            <h3 className={styles.question}>{a34.title}</h3>
            <p className={styles.definition}>{a34.summary}</p>
            <a
              className={styles.link}
              href={a34.href}
              target="_blank"
              rel="noreferrer"
            >
              {a34.linkText}
            </a>
          </article>
        </div>
      {/* </div> */}
    </section>
  );
}
