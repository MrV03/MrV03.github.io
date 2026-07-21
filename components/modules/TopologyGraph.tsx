'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShieldAlert, Network, TerminalSquare, Briefcase, Cpu, Bot } from 'lucide-react';

const SKILL_DOMAINS = [
  {
    id: 'engineering',
    title: 'Software Engineering',
    icon: Cpu,
    skills: ['Python', 'TypeScript', 'Next.js', 'C# / ASP.NET', 'TailwindCSS', 'RESTful Design'],
    description: 'Writing robust, polyglot application code. From cloud-hosted web platforms to internal tooling, I engineer solutions that are scalable and maintainable.'
  },
  {
    id: 'architecture',
    title: 'Systems & Cloud Architecture',
    icon: Network,
    skills: ['Azure', 'AWS EC2/S3', 'Docker', 'Load Balancing', 'Microservices', 'BGP Routing'],
    description: 'Designing high-availability environments. I build the structural backbones that allow enterprise applications to scale across multiple regions without dropping packets.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & DB',
    icon: Database,
    skills: ['PostgreSQL', 'SQLite', 'Redis', 'LAN/WAN Design', 'QoS Configuration', 'VLAN Segmentation'],
    description: 'Maintaining the physical and logical layers of data. Expert in complex relational database querying, data desync resolution, and physical 100+ node network environments.'
  },
  {
    id: 'escalations',
    title: 'L3 Escalations & RCA',
    icon: TerminalSquare,
    skills: ['Postman', 'REST APIs', 'Log Telemetry', 'JSON Debugging', 'Heap Dump Analysis'],
    description: 'The last line of defense. Translating catastrophic system failures into actionable telemetry. I isolate state boundaries so developers spend time fixing, not finding.'
  },
  {
    id: 'security',
    title: 'Security & Validation',
    icon: ShieldAlert,
    skills: ['Burp Suite', 'Penetration Testing', 'Traffic Interception', 'Auth Validation', 'OAuth 2.0'],
    description: 'Proactive vulnerability assessment. I manually manipulate payloads to validate secure session handling and data integrity before bad actors do.'
  },
  {
    id: 'automation',
    title: 'Automation & AI Tooling',
    icon: Bot,
    skills: ['Python Scripting', 'OpenCV', 'AI Prompt Engineering', 'CI/CD Pipelines', 'Cron Jobs'],
    description: 'Eliminating manual overhead. Developing standalone automation scripts, computer vision tools, and AI-optimized support workflows to accelerate resolution times.'
  },
  {
    id: 'client_operations',
    title: 'Client Operations & Enterprise',
    icon: Briefcase,
    skills: ['B2B Solutions', 'Executive Comm.', 'Lead Conversion', 'SLA Management', 'Technical Mentorship'],
    description: 'Bridging technical reality with business value. I translate complex architectural limitations into strategic timelines for enterprise stakeholders and international clients.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function TopologyGraph() {
  const [activeDomain, setActiveDomain] = useState(SKILL_DOMAINS[0].id);
  const selectedData = SKILL_DOMAINS.find(d => d.id === activeDomain);

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      
      {/* Sidebar Selector */}
      <div className="w-full md:w-1/3 flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {SKILL_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isActive = activeDomain === domain.id;
          return (
            <button
              key={domain.id}
              onClick={() => setActiveDomain(domain.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden ${
                isActive 
                  ? 'border-cyan-500 bg-cyan-950/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                  : 'border-white/10 hover:border-white/30 glass-panel'
              }`}
            >
              {/* STABLE CSS INDICATOR (Fixes Crash) */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] transition-transform duration-300 origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />
              
              <div className={`p-2 rounded-lg z-10 transition-colors ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-neutral-400'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`font-mono text-sm tracking-wide z-10 ${isActive ? 'text-cyan-300 font-bold' : 'text-neutral-300'}`}>
                {domain.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail View */}
      <div className="w-full md:w-2/3 glass-panel rounded-2xl border border-white/10 relative overflow-hidden p-8 flex flex-col justify-center min-h-[350px]">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 60%)' }} />
        
        <AnimatePresence mode="wait">
          {selectedData && (
            <motion.div
              key={selectedData.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 relative z-10"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                  <selectedData.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-extrabold text-neutral-100 tracking-tight">{selectedData.title}</h3>
              </div>
              
              <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
                {selectedData.description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-mono text-cyan-500/70 uppercase tracking-widest mb-4">Core Technology Stack</h4>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2"
                >
                  {selectedData.skills.map((skill, idx) => (
                    <motion.span 
                      variants={itemVariants}
                      key={idx} 
                      className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-sm font-mono text-cyan-100 hover:border-cyan-400 hover:text-white transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}