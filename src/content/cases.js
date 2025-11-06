export const cases = [
    {
    id: 'meta-2018',
    title: 'Meta',
    year: 2018,
    vector: 'Access token exposure via "View As" button',
    enforcement: { amount: 251000000, currency: 'EUR', year: 2024 },
    dataTypes: ['Profile data', 'Contact info'],
    timeline: [
      { date: 'Sep 2018', note: 'Attack disclosed and tokens invalidated' },
      { date: 'Oct 2018', note: 'Details updated' },
      { date: 'Dec 2024', note: 'Fine decision issued' }
    ],
    story:
      'In September 2018, Facebook disclosed a breach caused by a bug in the “View As” feature that let attackers steal access tokens and take over accounts. Facebook later confirmed 30 million users were affected; contact details and other profile data were accessed for many of them, and the company disabled “View As” and reset tokens. After investigation, Ireland\'s Data Protection Commission issued a €251 million fine in December 2024 over the incident.'
  },
  {
    id: '23andme-2023',
    title: '23andMe',
    year: 2023,
    vector: 'Account takeover via credential stuffing.',
    enforcement: { amount: 30000000, currency: 'USD', year: 2024 },
    dataTypes: ['Ancestry estimates', 'Family relationships'],
    timeline: [
      { date: 'Oct 2023', note: 'Incident disclosed' },
      { date: 'Dec 2023', note: 'Scale confirmed' },
      { date: 'Sep 2024', note: 'Settlement reached' }
    ],
    story:
      'In October 2023, genetic testing company 23andMe disclosed a major data breach. Hackers did not directly compromise the company\'s servers. Instead, they exploited credential stuffing, using leaked passwords from other websites to log in to 23andMe accounts. The breach impacted approximately 6.9 million users, nearly half of the company\'s customer base. Stolen information included names, profile details, and genetic and ancestry data. Attackers later published samples online and offered the full dataset for sale on dark web forums, sometimes charging only a few dollars per profile.Sensitive emphasis was placed on profiles of Jewish and Chinese ancestry, raising concerns that genetic data could be misused for discrimination or targeted harassment.'
  },
  {
    id: 'linkedin-2024',
    title: 'LinkedIn',
    year: 2024,
    vector: 'Ad targeting without a lawful basis. Inadequate transparency',
    enforcement: { amount: 310000000, currency: 'EUR', year: 2024 },
    dataTypes: ['Profile data', 'Inferences for ads'],
    timeline: [{ date: 'Oct 2024', note: 'DPC decision published' }],
    story:
      'In October 2024, Ireland\'s Data Protection Commission fined LinkedIn €310M after finding the platform processed members\' personal data for targeted advertising without a valid legal basis and with inadequate transparency. The probe concluded LinkedIn used member data to build ad profiles and inferences, infringing GDPR principles of lawfulness, fairness, and transparency; the regulator ordered the company to bring processing into compliance. LinkedIn said it believed it had complied but would adjust its ad practices to meet the ruling. Reports note the case stemmed from complaints in the EU and ranks among the DPC\'s larger penalties.'
  }
]
