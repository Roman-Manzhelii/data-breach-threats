export const playbook = {
    title: "Incident Response Playbook",
    subtitle:
        "Follow these steps when you suspect a personal data breach.",
    steps: [
        {
            t: "Detect & Triage",
            p: "Verify whether personal data might be involved. Open an incident ticket. Assign an incident lead.",
            bullets: [
                "Record discovery time, vector, and initial facts",
                "Quick severity tag: low | medium | high",
                "Decide whether to trigger on-call"
            ]
        },
        {
            t: "Contain & Preserve Evidence",
            p: "Stop the exposure without destroying traces.",
            bullets: [
                "Isolate compromised accounts/systems",
                "Snapshot logs and artifacts with timestamps",
                "Increase logging if needed"
            ]
        },
        {
            t: "Scope & Risk Assessment",
            p: "Determine what was accessible, to whom, and for how long.",
            bullets: [
                "Data categories: identifiers, contact, financial, health, etc.",
                "Number of data subjects and geography",
                "Likelihood of harm and potential impact"
            ]
        },
        {
            t: "Notify DPA within 72h (GDPR Art.33)",
            p: "If it is a personal data breach with risk to rights and freedoms, prepare the supervisory authority notification.",
            bullets: [
                "What happened, discovery time, current status",
                "Categories and approximate counts of data/subjects",
                "DPO contact and mitigation plan"
            ]
        },
        {
            t: "Inform Data Subjects (GDPR Art.34)",
            p: "If risk is high, communicate clearly and without undue delay.",
            bullets: [
                "Plain description of the incident and possible consequences",
                "Concrete actions: password reset, monitoring, support",
                "Channels: email, in-app, site banner as appropriate"
            ]
        },
        {
            t: "Remediate & Recover",
            p: "Return the service to a known-good state and reduce recurrence risk.",
            bullets: [
                "Fix code/config, rotate secrets",
                "Restore from backups and verify integrity",
                "Apply temporary compensating controls"
            ]
        },
        {
            t: "Lessons Learned & Prevent",
            p: "Close with a retrospective and long-term improvements (GDPR Art.32).",
            bullets: [
                "Post-mortem with timeline and root cause",
                "Action plan: testing, monitoring, training, data minimization",
                "Update playbooks and contacts, run drills"
            ]
        }
    ]
};
