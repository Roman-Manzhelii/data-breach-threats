export const cases = [
  {
    id: '23andme-2023',
    title: '23andMe',
    year: 2023,
    vector: 'Credential stuffing and sharing feature abuse',
    enforcement: { amount: 30000000, currency: 'USD', year: 2024 },
    dataTypes: ['Ancestry estimates', 'Family relationships'],
    timeline: [
      { date: 'Oct 2023', note: 'Incident disclosed' },
      { date: 'Dec 2023', note: 'Scale confirmed' },
      { date: 'Sep 2024', note: 'Settlement reached' }
    ],
    story:
      'Attackers logged into accounts using reused passwords and then leveraged sharing features to retrieve connected profiles at scale. The incident highlighted weak password hygiene and permissive defaults in social discovery.'
  },
  {
    id: 'linkedin-2024',
    title: 'LinkedIn',
    year: 2024,
    vector: 'Insufficient lawful basis and transparency for ads',
    enforcement: { amount: 310000000, currency: 'EUR', year: 2024 },
    dataTypes: ['Profile data', 'Inferences for ads'],
    timeline: [{ date: 'Oct 2024', note: 'DPC decision published' }],
    story:
      'Regulators found that advertising uses of personal data were not grounded in a clear lawful basis and lacked layered transparency. The decision forced changes to user choice and disclosures.'
  },
  {
    id: 'meta-2018',
    title: 'Meta',
    year: 2018,
    vector: 'Access token exposure via View As',
    enforcement: { amount: 251000000, currency: 'EUR', year: 2024 },
    dataTypes: ['Profile data', 'Contact info'],
    timeline: [
      { date: 'Sep 2018', note: 'Attack disclosed and tokens invalidated' },
      { date: 'Oct 2018', note: 'Details updated' },
      { date: 'Dec 2024', note: 'Fine decision issued' }
    ],
    story:
      'A flaw in the “View As” feature allowed attackers to obtain access tokens for other users. Tokens were reset, and later enforcement followed due to the scale and impact.'
  }
]
