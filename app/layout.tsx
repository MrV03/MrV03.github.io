declare module "./globals.css";
import type { Metadata } from "next";
import "./globals.css";
 
export const metadata = {
  title: 'Vivek Maharaj | IT Specialist',
  description: 'Portfolio of Vivek Maharaj, an IT Specialist and L3 Software Escalations Specialist specialising in networking, cloud architecture, and high-stakes troubleshooting.',
  keywords: [
    'Vivek', 'Maharaj', 'Vivek Maharaj', 'IT Specialist', 'L3',
    'Software Escalations', 'Systems Engineer', 'Cloud Architecture', 
    'Network Infrastructure', 'High-Stakes Troubleshooting', 'Customer',
    'Customer Success', 'Technical Support', 'Incident Response',
    'Root Cause Analysis', 'Problem Solving', 'Software Engineering',
    'Systems Design', 'Cloud Computing', 'Network Security',
    'Infrastructure Management', 'DevOps', 'Automation',
    'Monitoring & Logging', 'Performance Optimization', 'Disaster Recovery',
    'Business Continuity', 'IT Operations', 'Technical Leadership',
    'Mentorship & Training', 'Cross-Functional Collaboration',
    'Stakeholder Communication', 'Project Management', 'Agile Methodologies',
    'Continuous Improvement', 'Technical Documentation', 'Knowledge Sharing',
    'Process Optimization', 'Risk Management', 'Escalations', 
    'Software Support', 'Durban', 'Pietermaritzburg', 'KwaZulu-Natal', 'South Africa'
  ],
  openGraph: {
    title: 'Vivek Maharaj | IT Specialist',
    description: 'L3 Escalations, Infrastructure & Technical Operations Portfolio',
    url: 'https://www.vivekmaharaj.co.za',
    siteName: 'Vivek Maharaj Portfolio',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: 'https://www.vivekmaharaj.co.za/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vivek Maharaj - IT Specialist Portfolio',
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
