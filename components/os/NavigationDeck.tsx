'use client';

import React from 'react';
import { Activity, Cpu, FolderGit2, ShieldCheck, Terminal } from 'lucide-react';

interface NavProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export default function NavigationDeck({ activeModule, setActiveModule }: NavProps) {
  const modules = [
    { id: 'overview', label: 'Command Center', icon: Terminal },
    { id: 'simulator', label: 'Simulator', icon: Activity },
    { id: 'investigations', label: 'Case Studies', icon: ShieldCheck },
    { id: 'topology', label: 'Skill Mesh', icon: Cpu },
    { id: 'missions', label: 'Missions', icon: Activity },
    { id: 'projects', label: 'Deployments', icon: FolderGit2 },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl border border-white/10">
        <div className="flex items-center gap-3 pl-3">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-widest text-neutral-200">
            VM_Portfolio <span className="text-cyan-400">v4.2</span>
          </span>
        </div>

        <nav className="flex items-center gap-1">
          {modules.map((m) => {
            const Icon = m.icon;
            const active = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  active
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{m.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
