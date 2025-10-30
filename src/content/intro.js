export const intro = {
  question: 'What is a data breach?',
  definition:
    'A data breach is any security incident in which unauthorized parties access sensitive or confidential information, including personal data (Social Security numbers, bank account numbers, healthcare data) and corporate data (customer records, intellectual property, financial information). The terms “data breach” and “breach” are often used interchangeably with “cyberattack.” However, not all cyberattacks are data breaches. Data breaches include only those security breaches where someone gains unauthorized access to data.',
  impactTitle: 'How do Data Breaches happen?',
  impactContent:
    "The assumption is that a data breach is caused by an outside hacker, but that's not always true. Reasons for how data breaches happen might sometimes be traced back to intentional attacks. However, it can just as easily result from a simple oversight by individuals or flaws in a company’s infrastructure. Here’s how a data breach can occur:",
  cards: [
    {
      title: 'An Accidental Insider. ',
      text:
        'An employee uses a co-worker\'s device and views files without proper authorization. Access is unintentional and no data is shared, but because it was seen by an unauthorized person, the data is considered breached.'
    },
    {
      title: 'A Malicious Insider. ',
      text:
        'Someone with legitimate access intentionally views or shares data to cause harm to a person or company. The permissions are real, but the intent is to misuse information for nefarious purposes.'
    },
    {
      title: 'Lost or Stolen Devices. ',
      text:
        'An unencrypted, unlocked laptop or external drive containing sensitive information goes missing. Physical loss of portable media still leads to exposure if protections are weak or absent.'
    },
    {
      title: 'Malicious Outside Criminals. ',
      text:
        'External attackers use phishing, credential stuffing, or software exploits to gain entry, then move laterally to exfiltrate personal data from systems or cloud storage.'
    }
  ]
}
