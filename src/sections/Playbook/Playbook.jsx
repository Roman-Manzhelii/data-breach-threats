import { useMemo } from "react";
import styles from "./Playbook.module.scss";
import Stepper, { Step } from "../../components/Stepper/Stepper";
import { playbook } from "../../content/playbooks";

export default function Playbook() {
    const data = useMemo(() => playbook, []);
    return (
        <section id="playbook" className={styles.wrap}>
            <div className={styles.header}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.lead}>{data.subtitle}</p>
            </div>

            <div className={styles.stepper}>
                <Stepper
                    initialStep={1}
                    backButtonText="Previous"
                    nextButtonText="Next"
                >
                    {data.steps.map((s) => (
                        <Step key={s.t}>
                            <h3 className={styles.stepTitle}>{s.t}</h3>
                            <p className={styles.stepText}>{s.p}</p>
                            <ul className={styles.list}>
                                {s.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </section>
    );
}
