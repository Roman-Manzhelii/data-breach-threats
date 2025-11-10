import { useMemo, useState, useCallback } from "react";
import styles from "./Playbook.module.scss";
import Stepper, { Step } from "../../components/Stepper/Stepper";
import DecryptedText from '../../components/DecryptedText/DecryptedText'
import { individuals } from "../../content/individuals";
import { playbookOrg } from "../../content/playbook_org";

export default function Playbook() {
  const IND = useMemo(() => individuals, []);
  const ORG = useMemo(() => playbookOrg, []);
  const [tab, setTab] = useState("ind");
  const data = tab === "ind" ? IND : ORG;

  const onKeyTabs = useCallback((e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setTab((t) => (t === "ind" ? "org" : "ind"));
    }
  }, []);

  return (
    <section id="playbook">
      <header className={styles.header}>
        <DecryptedText
          text={"Follow these steps when you suspect a personal data breach"}
          speed={20}
          sequential
          useOriginalCharsOnly
          animateOn="hover"
          revealDirection="start"
          className={styles.centerText}
          encryptedClassName={styles.centerText}
        />
      </header>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Choose audience"
          onKeyDown={onKeyTabs}
        >
          <button
            role="tab"
            aria-selected={tab === "ind"}
            aria-controls="panel-ind"
            id="tab-ind"
            className={`${styles.tab} ${tab === "ind" ? styles.tabActive : ""}`}
            onClick={() => setTab("ind")}
          >
            Individuals
          </button>
          <button
            role="tab"
            aria-selected={tab === "org"}
            aria-controls="panel-org"
            id="tab-org"
            className={`${styles.tab} ${tab === "org" ? styles.tabActive : ""}`}
            onClick={() => setTab("org")}
          >
            Organisations
          </button>
        </div>

        <div
          id={tab === "ind" ? "panel-ind" : "panel-org"}
          role="tabpanel"
          aria-labelledby={tab === "ind" ? "tab-ind" : "tab-org"}
          className={styles.panel}
        >
          <div className={styles.stepper}>
            <Stepper
              initialStep={1}
              backButtonText="Previous"
              nextButtonText="Next"
            >
              {data.steps.map((s) => (
                <Step key={s.t}>
                  <h4 className={styles.stepTitle}>{s.t}</h4>
                  <p className={styles.stepText}>{s.p}</p>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
    </section>
  );
}
