'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FolderOpen, AlertOctagon, CheckCircle2, ChevronRight, Activity, AlertTriangle } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/data';

// Framer Motion variants for the staggered typing effect
const logContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const logItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export default function CaseFileModule() {
  const [activeCaseId, setActiveCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find(c => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">

      {/* Sidebar: Case Directory */}
      <div className="w-full md:w-1/3 flex flex-col gap-3">
        {CASE_STUDIES.map((c) => {
          const isActive = activeCaseId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col gap-2 ${isActive
                  ? 'border-cyan-500 bg-cyan-950/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'border-white/10 hover:border-white/30 glass-panel'
                }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${c.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : c.severity === 'SEV-1' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                  {c.severity}
                </span>
                <FolderOpen className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
              </div>
              <span className={`font-mono text-sm tracking-wide ${isActive ? 'text-cyan-300 font-bold' : 'text-neutral-300'}`}>
                {c.code}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Terminal Window */}
      <div className="w-full md:w-2/3 glass-panel rounded-2xl border border-white/10 relative overflow-hidden flex flex-col min-h-[450px]">

        {/* Terminal Header */}
        <div className="bg-black/60 p-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono">
            <Terminal className="w-4 h-4 text-cyan-500" />
            <span>viewing_log: {activeCase.code}.log</span>
          </div>
          <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
        </div>

        {/* Terminal Output Area */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-sm bg-[#0a0a0c]">

          {/* REAL-WORLD DISCLAIMER BANNER */}
          <div className="mb-6 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded flex items-start gap-3 text-yellow-500/80">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed uppercase tracking-widest">
              <strong>Security Clearance Verified:</strong> The following logs are sanitized reconstructions of real-world production incidents I have personally isolated and resolved. Client identifiable data has been redacted.
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              variants={logContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="space-y-6"
            >
              {/* Init Block */}
              <motion.div variants={logItem} className="space-y-2 border-b border-white/5 pb-4">
                <div className="text-cyan-500 font-bold text-lg">{activeCase.title}</div>
                <div className="text-neutral-400 text-xs leading-relaxed">{activeCase.summary}</div>
              </motion.div>

              {/* Timeline Array */}
              <motion.div variants={logItem} className="space-y-3">
                <div className="text-neutral-500 uppercase text-[10px] tracking-widest">-- Incident Timeline --</div>
                <div className="space-y-2">
                  {activeCase.timeline.map((event, idx) => (
                    <motion.div variants={logItem} key={idx} className="flex gap-4 items-start">
                      <span className="text-cyan-600 shrink-0">[{event.time}]</span>
                      <span className="text-neutral-300">{event.event}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Findings Array */}
              <motion.div variants={logItem} className="space-y-3 pt-2">
                <div className="text-neutral-500 uppercase text-[10px] tracking-widest">-- Root Cause Findings --</div>
                <div className="space-y-2 text-red-300/80">
                  {activeCase.findings.map((finding, idx) => (
                    <motion.div variants={logItem} key={idx} className="flex gap-2 items-start">
                      <AlertOctagon className="w-4 h-4 shrink-0 mt-0.5 text-red-500/70" />
                      <span>{finding}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Impact Resolution */}
              <motion.div variants={logItem} className="mt-4 p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-lg flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-emerald-500 text-xs uppercase tracking-widest mb-1">Resolution & Impact</div>
                  <div className="text-emerald-100/70 leading-relaxed">{activeCase.impact}</div>
                </div>
              </motion.div>

              {/* Blinking Cursor */}
              <motion.div variants={logItem} className="text-cyan-500 animate-pulse pt-4">
                _
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}