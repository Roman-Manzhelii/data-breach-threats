import { useMemo, useState, useCallback, useEffect } from "react";
import styles from "./Playbook.module.scss";
import Stepper, { Step } from "../../components/Stepper/Stepper";
import DecryptedText from "../../components/DecryptedText/DecryptedText";
import { individuals } from "../../content/individuals";
import { playbookOrg } from "../../content/playbook_org";

export default function Playbook() {
  const IND = useMemo(() => individuals, []);
  const ORG = useMemo(() => playbookOrg, []);
  const [tab, setTab] = useState("ind");
  const [stepInd, setStepInd] = useState(1);
  const [stepOrg, setStepOrg] = useState(1);
  const [minH, setMinH] = useState(0);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const mh = w >= 1024 ? 320 : Math.max(200, Math.round(h * 0.32));
    setMinH(mh);
  }, []);

  const data = tab === "ind" ? IND : ORG;
  const currentForTab = tab === "ind" ? stepInd : stepOrg;

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
          animateOn="view"
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
          For Individuals
        </button>
        <button
          role="tab"
          aria-selected={tab === "org"}
          aria-controls="panel-org"
          id="tab-org"
          className={`${styles.tab} ${tab === "org" ? styles.tabActive : ""}`}
          onClick={() => setTab("org")}
        >
          For Organisations
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
            controlledStep={currentForTab}
            externalDirection={0}
            onStepChange={(s) =>
              tab === "ind" ? setStepInd(s) : setStepOrg(s)
            }
            backButtonText="Previous"
            nextButtonText="Next"
            contentMinHeight={minH}
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
