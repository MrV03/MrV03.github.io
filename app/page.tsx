'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import NavigationDeck from '@/components/os/NavigationDeck';
import TopologyGraph from '@/components/modules/TopologyGraph';
import CaseFileModule from '@/components/modules/CaseFileModule';
import DebugSimulator from '@/components/modules/DebugSimulator';
import { MISSIONS, PROJECTS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Cpu, Zap, Terminal, Mail, Phone, Linkedin, Github, Globe, Code2 } from 'lucide-react';

const AmbientCanvas = dynamic(
  () => import('@/components/background/AmbientCanvas'),
  { ssr: false }
);

export default function Home() {
  const [activeModule, setActiveModule] = useState('overview');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#050508] text-white relative font-sans selection:bg-cyan-500/30 pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {isMounted && <AmbientCanvas />}

      <NavigationDeck activeModule={activeModule} setActiveModule={setActiveModule} />

      <div className="relative z-10 mt-6">
        <AnimatePresence mode="wait">
          
          {/* 1. COMMAND CENTER OVERVIEW */}
          {activeModule === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Cpu className="w-96 h-96 text-cyan-500" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
                  <Zap className="w-3.5 h-3.5 animate-pulse" /> SYSTEM READY // SYSTEMS ARCHITECTURE & MULTI-DISCIPLINARY ENGINEERING
                </div>

                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-neutral-100 max-w-4xl leading-none">
                  VIVEK MAHARAJ
                </h1>
                <p className="text-xl md:text-2xl font-mono text-cyan-400 mt-2 font-light">
                  IT Specialist | Full-Stack, Networking & Client-Focused Technology
                </p>

                <p className="mt-6 text-sm md:text-base text-neutral-300 max-w-2xl leading-relaxed">
                  Engineered for end-to-end execution. Writing production code across multiple languages, architecting resilient cloud and network infrastructure, and bridging technical depth with direct enterprise client impact.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button 
                    onClick={() => setActiveModule('missions')}
                    className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    View Career Missions <ArrowRight className="w-4 h-4" />
                  </button>
                  <a 
                    href="Vivek Maharaj CV-2.pdf"
                    download
                    className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-neutral-200 font-mono text-xs tracking-wider uppercase border border-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    Download Executive CV <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct Contact Bar */}
              <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <a href="mailto:vivekmaharaj41@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/50 transition-all group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Direct Email</div>
                    <div className="text-xs font-mono text-neutral-200 truncate">vivekmaharaj41@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+27815382785" className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/50 transition-all group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Secure Line / Phone</div>
                    <div className="text-xs font-mono text-neutral-200">+27(815382785)</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/vivek-maharaj-604a49220/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/50 transition-all group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Professional Network</div>
                    <div className="text-xs font-mono text-neutral-200">Connect on LinkedIn</div>
                  </div>
                </a>

                <a href="https://github.com/MrV03" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/50 transition-all group">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">Code Repositories</div>
                    <div className="text-xs font-mono text-neutral-200">Explore GitHub</div>
                  </div>
                </a>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: '100+', label: 'Enterprise Workstations & Scale Managed' },
                  { metric: '96%+', label: 'Client Satisfaction & SLA Adherence' },
                  { metric: '4+ Years', label: 'Technical Operations Experience' },
                  { metric: 'Cum Laude', label: 'BSc IT Graduate & BSc Honours' }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-cyan-400">{item.metric}</div>
                    <div className="text-xs text-neutral-400 font-mono mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Full-Stack & Client-Focused Execution Grid */}
              <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4">
                <h3 className="text-lg font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-5 h-5" /> CAPABILITIES & MULTI-DISCIPLINARY EXECUTION
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-neutral-200">1. Polyglot Software Engineering</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Writing robust application code across Python, TypeScript, C#, and JavaScript for web platforms, automation tools, and APIs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-neutral-200">2. Network & Systems Architecture</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Configuring physical LAN/WAN environments, deploying cloud services on Azure/AWS, and maintaining strict infrastructure security.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-neutral-200">3. Client Operations & Value Delivery</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Bridging technical depth with commercial acumen—converting enterprise stakeholders, supporting international SaaS clients, and maintaining high CSAT.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. DIAGNOSTIC SIMULATOR */}
          {activeModule === 'simulator' && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-xl font-bold text-cyan-400 font-mono">Interactive Diagnostic Simulator</h2>
                <p className="text-xs text-neutral-400">
                  Step into real-world operational scenarios encountered in production. Test decision-making workflows under pressure and see how infrastructure failures are isolated and resolved.
                </p>
              </div>
              <DebugSimulator />
            </motion.div>
          )}

          {/* 3. CASE STUDIES */}
          {activeModule === 'investigations' && (
            <motion.div
              key="investigations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-xl font-bold text-cyan-400 font-mono">Case Studies & RCA Archives</h2>
                <p className="text-xs text-neutral-400">
                  Deep-dive analysis into high-impact technical incidents, security validation reports, and infrastructure hardening methodologies.
                </p>
              </div>
              <CaseFileModule />
            </motion.div>
          )}

          {/* 4. SKILL MESH */}
          {activeModule === 'topology' && (
            <motion.div
              key="topology"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-xl font-bold text-cyan-400 font-mono">Technical Skill Mesh & Competencies</h2>
                <p className="text-xs text-neutral-400">
                  A modular breakdown of core proficiencies spanning systems architecture, security validation, cloud deployment, and engineering execution.
                </p>
              </div>
              <TopologyGraph />
            </motion.div>
          )}

          {/* 5. MISSIONS */}
          {activeModule === 'missions' && (
            <motion.div
              key="missions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-xl font-bold text-cyan-400 font-mono">Operational History & Missions</h2>
                <p className="text-xs text-neutral-400">
                  Chronological breakdown of professional milestones, technical ownership, and multi-region system execution across enterprise environments.
                </p>
              </div>
              {MISSIONS.map((m) => (
                <div key={m.id} className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-2 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-100">{m.role}</h3>
                      <p className="text-xs text-neutral-400 font-mono mt-1">{m.organization}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">
                      {m.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-mono mt-1">›</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {m.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-cyan-950/40 border border-cyan-800/40 rounded text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 6. DEPLOYMENTS */}
          {activeModule === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h2 className="text-xl font-bold text-cyan-400 font-mono">Engineered Deployments & Products</h2>
                <p className="text-xs text-neutral-400">
                  Standalone systems, cloud architectures, and full-stack applications built from scratch—including this interactive portfolio itself.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-cyan-500/40 bg-cyan-950/10 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30">META_DEPLOYMENT</span>
                    <h3 className="text-2xl font-bold text-neutral-100 mt-2">vivekmaharaj.co.za Digital Identity</h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-300">Next.js 14 / Tailwind / Framer Motion</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  You are currently interacting with it. A gamified, high-end operating system portfolio engineered to replace traditional static resumes with immersive technical storytelling and interactive diagnostics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((p, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-cyan-500/50 transition-all duration-300">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">DEPLOYED_PRODUCT</span>
                      <h3 className="text-xl font-bold text-neutral-100 mt-1">{p.title}</h3>
                      <p className="text-xs text-neutral-400 mt-2">{p.desc}</p>
                    </div>
                    <div className="text-[11px] font-mono text-cyan-300/80 pt-4 border-t border-white/5">
                      {p.tech}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}
