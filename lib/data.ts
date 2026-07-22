export interface SkillNode {
  id: string;
  label: string;
  category: 'cloud' | 'core' | 'db' | 'sec' | 'dev';
  connections: string[];
}

export interface Mission {
  id: string;
  role: string;
  period: string;
  organization: string;
  highlights: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  tech: string;
  desc: string;
}

export const SKILL_GRAPH: SkillNode[] = [
  { id: 'rca', label: 'L3 Escalations & RCA', category: 'core', connections: ['apis', 'aws', 'sec', 'pay'] },
  { id: 'apis', label: 'REST APIs (Postman)', category: 'dev', connections: ['rca', 'pay', 'sec'] },
  { id: 'aws', label: 'AWS Cloud Infra', category: 'cloud', connections: ['rca'] },
  { id: 'sec', label: 'Vulnerability Validation (Burp Suite)', category: 'sec', connections: ['rca', 'apis'] },
  { id: 'pay', label: 'Global SaaS Payroll', category: 'core', connections: ['apis'] },
  { id: 'net', label: 'LAN/WAN Infrastructure', category: 'cloud', connections: ['sec'] },
];

export interface Mission {
  id: string;
  role: string;
  period: string;
  organization: string;
  highlights: string[];
  techStack: string[];
}

export const MISSIONS: Mission[] = [
  {
    id: 'M-01',
    role: 'Software Escalations Specialist (L3)',
    period: 'May 2025 - Present',
    organization: 'Orange Thunder Technologies t/a SimplePay',
    highlights: [
      'Resolved complex software exceptions and critical API failures across multi-region SaaS environments, significantly minimising customer impact and system downtime.',
      'Collaborated closely with core engineering teams to trace exception pipelines using Sentry and debug backend application logic within Ruby on Rails.',
      'Developed standalone Python scripts to automate API testing, streamline query validation, and accelerate bulk data troubleshooting.',
      'Authored comprehensive Technical Reports and Root Cause Analysis (RCA) to bridge the gap between technical support and development cycles.',
      'Conducted proactive manual vulnerability validation and penetration testing on web applications using Burp Suite.'
    ],
    techStack: ['Ruby on Rails', 'Sentry', 'Python Scripting', 'Burp Suite', 'Postman', 'REST APIs', 'RCA']
  },
  {
    id: 'M-02',
    role: 'Customer Support Specialist (L1) & Enterprise Sales',
    period: 'Sep 2024 - Aug 2025',
    organization: 'Orange Thunder Technologies t/a SimplePay',
    highlights: [
      'Delivered front-line technical and payroll software support, consistently maintaining a 96% Customer Satisfaction (CSAT) score and strict SLA adherence.',
      'Leveraged in-depth knowledge of complex tax legislation, accounting principles, and global payroll compliance to resolve high-priority user queries.',
      'Managed and troubleshot complex external accounting software integrations, including Xero and e@syFile.',
      'Drove business revenue by translating technical product capabilities into commercial value, successfully converting warm enterprise leads (100+ employees) into long-term paying customers.'
    ],
    techStack: ['SLA Management', 'B2B Technical Sales', 'Xero / e@syFile', 'SaaS Support']
  },
  {
    id: 'M-03',
    role: 'Campus Infrastructure Consultant & Guest Lecturer',
    period: 'Oct 2023 - Sep 2024',
    organization: 'Richfield Graduate Institute of Technology',
    highlights: [
      'Designed, cabled, and deployed a 100+ workstation Local Area Network (LAN), ensuring seamless connectivity and high-availability for institutional operations.',
      'Served as a technical guest lecturer, breaking down complex networking and IT concepts into accessible, practical knowledge for students.',
      'Provided direct technical mentorship and tutoring services, elevating the overall technical proficiency of the campus.',
      'Coordinated logistics and technical infrastructure for large-scale virtual events.'
    ],
    techStack: ['LAN/WAN Networking', 'Hardware Deployment', 'Technical Mentorship', 'IT Infrastructure']
  },
  {
    id: 'M-04',
    role: 'Software Engineering Intern',
    period: 'Jul 2024 - Aug 2024',
    organization: 'CodeAlpha',
    highlights: [
      'Engineered and deployed multiple hands-on applications using Python, JavaScript, and various web frameworks.',
      'Developed a custom Intrusion Detection System (IDS) and network packet sniffer, applying core cybersecurity principles to real-world threat monitoring.',
      'Strengthened problem-solving abilities by actively debugging, testing, and iterating on codebase deployments within a remote collaborative environment.'
    ],
    techStack: ['Python / JS', 'Network Sniffing', 'Cybersecurity', 'Full-Stack Dev']
  },
  {
    id: 'M-05',
    role: 'Technical Support Intern',
    period: 'Mar 2024 - Jun 2024',
    organization: 'GAO Tek Inc.',
    highlights: [
      'Provided comprehensive technical support to international stakeholders, streamlining operations across different time zones and cultures.',
      'Leveraged AI technologies to heavily optimise internal product documentation, generate highly-tuned AI prompts, and automate training material generation.',
      'Prepared detailed data reports on key SEO metrics, providing actionable architectural recommendations to improve online visibility.'
    ],
    techStack: ['International Support', 'AI Prompt Engineering', 'SEO Analytics', 'Technical Documentation']
  }
];

export const PROJECTS: Project[] = [
  { 
    title: 'Campus Cart',
    tech: 'Cloud-Native Platform',
    desc: 'Designed and built a scalable, cloud-ready student commerce platform focused on security, access control, and data privacy.'
    <a href = https://campus-cart-lite.onrender.com><a/> 
  },
  { 
    title: 'Hand Gesture Recognition',
    tech: 'Python, OpenCV',
    desc: 'Developed a real-time hand gesture recognition system mapping gestures to predefined system actions.'
  },
  { 
    title: 'Network Sniffer',
    tech: 'Packet Inspection',
    desc: 'Traffic analysis tool built for network security monitoring and packet inspection.'
  },
  { 
    title: 'File Encryption System',
    tech: 'Cryptography',
    desc: 'Cryptographic system designed for secure data encryption and decryption.'
  }
];

export interface CaseStudy {
  id: string;
  code: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'SEV-1';
  summary: string;
  timeline: { time: string; event: string }[];
  findings: string[];
  impact: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'RCA-8092',
    code: 'INC-2025-API-DESYNC',
    title: 'Cross-Jurisdiction API Payload Exception',
    severity: 'CRITICAL',
    summary: 'Investigated and resolved an L3 escalation where API calculation logic was failing across specific international microservices, causing transaction failures.',
    timeline: [
      { time: '09:15', event: 'Escalation received regarding localised service outages.' },
      { time: '09:45', event: 'Replicated issue using Postman; identified malformed JSON in API response.' },
      { time: '10:30', event: 'Compiled Root Cause Analysis (RCA) with stack traces for Developer Handover.' },
      { time: '11:15', event: 'Collaborated with engineering to push hotfix; validated resolution.' }
    ],
    findings: [
      'Exception management failure in regional data parser.',
      'API error handling did not gracefully catch missing optional fields.'
    ],
    impact: 'Restored API stability globally and implemented stricter payload validation standards.'
  },
  {
    id: 'SEC-4011',
    code: 'VAL-2024-AUTH-BYPASS',
    title: 'Session Management Vulnerability Validation',
    severity: 'HIGH',
    summary: 'Conducted manual vulnerability validation on client-facing portals, identifying and documenting potential session token leakage.',
    timeline: [
      { time: 'Day 1', event: 'Intercepted and modified web traffic using Burp Suite.' },
      { time: 'Day 2', event: 'Successfully replicated token manipulation leading to privilege escalation.' },
      { time: 'Day 3', event: 'Authored comprehensive technical documentation for the security team.' }
    ],
    findings: [
      'OAuth token refresh cycle lacked secondary validation layers.',
      'Rate limit headers were bypassed under specific load conditions.'
    ],
    impact: 'Prevented potential data exposure and accelerated the deployment of fortified session architecture.'
  },
  {
    id: 'INF-1092',
    code: 'DEP-2023-LAN-SCALER',
    title: 'High-Availability LAN Infrastructure Deployment',
    severity: 'HIGH',
    summary: 'Architected and deployed a 100+ workstation network environment requiring strict segregation between administrative and public access zones.',
    timeline: [
      { time: 'Phase 1', event: 'Mapped topology and IP subnet allocation.' },
      { time: 'Phase 2', event: 'Configured managed switches and stateful firewalls.' },
      { time: 'Phase 3', event: 'Conducted load testing and established fallback protocols.' }
    ],
    findings: [
      'Identified and mitigated broadcast storms through VLAN segmentation.',
      'Optimised QoS settings to prioritise critical administrative traffic.'
    ],
    impact: 'Achieved 99.9% uptime for institutional operations and established scalable infrastructure.'
  },
  {
    id: 'SEC-2024',
    code: 'PROJ-IDS-THREAT-DETECTION',
    title: 'Intrusion Detection System Architecture',
    severity: 'HIGH',
    summary: 'Engineered a network traffic monitoring solution to identify anomalous packet behaviors and potential perimeter breaches.',
    timeline: [
      { time: 'Phase 1', event: 'Defined threat signatures and standard baseline traffic parameters.' },
      { time: 'Phase 2', event: 'Implemented packet sniffing and automated alert mechanisms.' },
      { time: 'Phase 3', event: 'Conducted simulated attacks to validate threat detection latency.' }
    ],
    findings: [
      'Identified critical zero-day simulation patterns through traffic payload analysis.',
      'Optimised alerting logic to reduce false-positive incident triggers.'
    ],
    impact: 'Demonstrated proactive cybersecurity capabilities and incident response readiness.'
  },
  {
    id: 'DEV-2026',
    code: 'PROJ-AZURE-EVENT-EASE',
    title: 'EventEase: Cloud-Hosted Venue Booking System',
    severity: 'SEV-1',
    summary: 'Architected and deployed a comprehensive venue booking platform utilising ASP.NET Core MVC and Azure cloud infrastructure.',
    timeline: [
      { time: 'Sprint 1', event: 'Designed relational database schema and MVC architecture.' },
      { time: 'Sprint 2', event: 'Integrated user authentication and secure booking workflows.' },
      { time: 'Sprint 3', event: 'Deployed application layer to Azure, configuring environment variables.' }
    ],
    findings: [
      'Overcame cloud environment configuration hurdles during continuous integration.',
      'Ensured database connection pooling was optimised for high concurrent user loads.'
    ],
    impact: 'Successfully delivered a scalable, production-ready web application showcasing full-stack capabilities.'
  },
  {
    id: 'SEC-3044',
    code: 'PROJ-CRYPTO-FILE-SYS',
    title: 'Cryptographic File Encryption/Decryption System',
    severity: 'HIGH',
    summary: 'Engineered a standalone file security system to ensure data integrity and confidentiality for sensitive payloads.',
    timeline: [
      { time: 'Phase 1', event: 'Evaluated symmetric vs. asymmetric cryptographic algorithms.' },
      { time: 'Phase 2', event: 'Implemented secure key generation and cipher block chaining.' },
      { time: 'Phase 3', event: 'Tested system resilience against data corruption and unauthorised decryption attempts.' }
    ],
    findings: [
      'Successfully mitigated padding oracle vulnerabilities during the decryption phase.',
      'Optimised file stream handling to ensure large data sets are encrypted without memory heap exhaustion.'
    ],
    impact: 'Demonstrated applied understanding of data security, cryptography, and secure software development lifecycles.'
  }
];
[
  {
    id: 'DB-9022',
    code: 'INC-2026-MULTI-TENANT-DESYNC',
    title: 'Multi-Tenant Database Deadlock Isolation',
    severity: 'CRITICAL',
    summary: 'A runaway reporting query locked the primary transaction table in a production PostgreSQL cluster, halting write operations for 40% of tenants.',
    timeline: [
      { time: '14:02', event: 'Alert: Transaction commit latency spiked by 800%.' },
      { time: '14:08', event: 'Queried pg_stat_activity to isolate the blocking PID.' },
      { time: '14:12', event: 'Terminated rogue background worker process, freeing locks.' },
      { time: '15:30', event: 'Implemented query timeouts and read-replica routing for heavy reports.' }
    ],
    findings: [
      'Reporting module was bypassing the read-replica and hitting the primary master DB.',
      'Lack of statement_timeout allowed a single heavy JOIN to monopolise table locks.'
    ],
    impact: 'Restored write availability instantly. Prevented future desyncs by enforcing strict read/write separation at the ORM level.'
  },
  {
    id: 'SEC-8819',
    code: 'VAL-2025-RATE-LIMIT-BYPASS',
    title: 'API Rate Limit Exhaustion / Botnet Mitigation',
    severity: 'HIGH',
    summary: 'Identified a distributed botnet aggressively crawling public endpoints, bypassing standard IP-based rate limiting by rotating proxy servers.',
    timeline: [
      { time: '02:15', event: 'Telemetry showed a 400% spike in traffic to open GET endpoints.' },
      { time: '02:30', event: 'Analysed traffic in Wireshark; noted missing standard browser headers.' },
      { time: '03:00', event: 'Configured WAF (Web Application Firewall) to block missing header signatures.' }
    ],
    findings: [
      'Standard rate limits were purely IP-based, making them useless against rotating proxies.',
      'Malicious payload was attempting to scrape sensitive pricing tier data.'
    ],
    impact: 'Blocked 99.9% of malicious traffic without impacting legitimate users. Transitioned rate-limiting logic to utilise token-bucket algorithms based on session fingerprinting.'
  }
];
