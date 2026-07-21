'use client';

import React, { useState } from 'react';
import { Terminal, ShieldAlert, Database, Skull, Trophy, ServerCrash, Globe, Rocket, Activity, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Step = {
  text: string;
  options: { label: string; next: string | null; icon?: any }[];
};

const SCENARIOS: Record<string, Step> = {
  main_menu: {
    text: "SYSTEM DIAGNOSTIC TERMINAL.\n\n[METHODOLOGY NOTE]: This environment demonstrates my personal incident response framework. While multiple valid technical approaches exist, these scenarios highlight my specific prioritisation: isolating state boundaries quickly and preventing catastrophic business impact.\n\nSelect a scenario to begin:",
    options: [
      { label: "Scenario Alpha: SaaS API Failure", next: "api_start", icon: Database },
      { label: "Scenario Beta: Network Intrusion Alert", next: "sec_start", icon: ShieldAlert },
      { label: "Scenario Gamma: Crypto Decryption Failure", next: "crypto_start", icon: Terminal },
      { label: "Scenario Delta: Production DB Deadlock", next: "db_start", icon: ServerCrash },
      { label: "Scenario Epsilon: DNS Ghosting", next: "dns_start", icon: Globe },
      { label: "Scenario Zeta: Load Balancer Split-Brain", next: "lb_start", icon: Network },
      { label: "Scenario Eta: Botnet API Exhaustion", next: "bot_start", icon: Activity }
    ]
  },
  
  // SCENARIO ALPHA: API FAILURE
  api_start: {
    text: "[SCENARIO ALPHA] ALERT: A critical multi-region SaaS platform is returning 500 Internal Server Errors on core transactions. First move?",
    options: [
      { label: "Check the main server CPU and Memory usage.", next: "api_fail_1" },
      { label: "Isolate the issue using Postman to inspect the exact API payload.", next: "api_step_2" }
    ]
  },
  api_fail_1: {
    text: "SYSTEM FAILURE: You stared at healthy CPU metrics for 45 minutes while the company lost thousands. Always isolate the state boundary first.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  api_step_2: {
    text: "Correct. Postman reveals the response JSON is returning a TypeMismatch error on a database commit. Escalate to Engineering?",
    options: [
      { label: "Yes, open a high-priority ticket immediately.", next: "api_fail_2" },
      { label: "No, check raw DB logs to provide Root Cause Analysis (RCA).", next: "api_success" }
    ]
  },
  api_fail_2: {
    text: "SYSTEM FAILURE: Engineering rejected the ticket: 'Insufficient Evidence'. Your lack of RCA wasted a full dev cycle. The CTO is glaring at you.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  api_success: {
    text: "INCIDENT RESOLVED: Logs showed a string vs integer mismatch. Dev investigation time reduced by 40%. Hotfix deployed. You are a hero.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO BETA: SECURITY INTRUSION
  sec_start: {
    text: "[SCENARIO BETA] ALERT: The Intrusion Detection System (IDS) is flagging a massive spike in malformed packets targeting the admin portal.",
    options: [
      { label: "Take the entire network offline immediately.", next: "sec_fail_1" },
      { label: "Analyze packet headers using Wireshark to identify source IP.", next: "sec_step_2" }
    ]
  },
  sec_fail_1: {
    text: "SYSTEM FAILURE: You caused a massive business outage for a false positive. Traffic must be analyzed before executing nuclear options.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  sec_step_2: {
    text: "Good. Packet headers reveal a coordinated SQL injection attempt from a single subnet. Mitigation?",
    options: [
      { label: "Block the specific subnet at the firewall layer.", next: "sec_success" },
      { label: "Ignore it, the application has input sanitization.", next: "sec_fail_2" }
    ]
  },
  sec_fail_2: {
    text: "CRITICAL FAILURE: Assuming one layer will hold led to a data breach. Defense-in-depth requires multiple layers.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  sec_success: {
    text: "INCIDENT RESOLVED: Threat isolated at the perimeter. Zero downtime incurred, and security teams have telemetry for patching.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO GAMMA: CRYPTO 
  crypto_start: {
    text: "[SCENARIO GAMMA] ALERT: A client uploaded a secure payroll file, but the system throws a 'Padding is invalid' error during decryption.",
    options: [
      { label: "Ask the client to re-upload the file in plain text.", next: "crypto_fail_1" },
      { label: "Inspect cipher initialization vector (IV) and payload stream logs.", next: "crypto_step_2" }
    ]
  },
  crypto_fail_1: {
    text: "CRITICAL FAILURE: You just violated strict data compliance protocols by requesting payroll data in plain text. Trust is broken.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  crypto_step_2: {
    text: "Correct. The IV matches, but the payload stream was truncated during transmission.",
    options: [
      { label: "Draft a Dev Handover indicating network timeout truncated the file.", next: "crypto_success" },
      { label: "Attempt to force-decrypt the partial file to salvage data.", next: "crypto_fail_2" }
    ]
  },
  crypto_fail_2: {
    text: "SYSTEM FAILURE: Block ciphers require complete data blocks. Forcing decryption resulted in corrupted garbage data.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  crypto_success: {
    text: "INCIDENT RESOLVED: You identified a network transport issue, not a cryptographic failure. Hotfix deployed.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO DELTA: DB DEADLOCK
  db_start: {
    text: "[SCENARIO DELTA] ALERT: Production PostgreSQL database is freezing. Queries are piling up and locking the main transaction table.",
    options: [
      { label: "Force restart the entire database cluster to clear connections.", next: "db_fail_1" },
      { label: "Query pg_stat_activity to find the exact PID causing the blocking lock.", next: "db_success" }
    ]
  },
  db_fail_1: {
    text: "CRITICAL FAILURE: You just corrupted in-flight payroll transactions. The database is now in recovery mode. Please pack your desk.",
    options: [{ label: "Walk of Shame to Main Menu", next: "main_menu" }]
  },
  db_success: {
    text: "INCIDENT RESOLVED: You identified a runaway reporting query blocking write operations. You killed the specific PID. Uptime preserved.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO EPSILON: DNS
  dns_start: {
    text: "[SCENARIO EPSILON] ALERT: Users in Europe are reporting the web app is down, but monitoring says it's up. What's happening?",
    options: [
      { label: "Tell them to clear their browser cache and cookies.", next: "dns_fail_1" },
      { label: "Run a global DNS propagation check and inspect BGP routes.", next: "dns_success" }
    ]
  },
  dns_fail_1: {
    text: "SYSTEM FAILURE: It wasn't a cache issue. The European CDN node was hijacked, and you just gaslit the clients.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  dns_success: {
    text: "INCIDENT RESOLVED: You spotted a misconfigured DNS record pointing EU traffic into a blackhole. Traffic rerouted instantly.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO ZETA: SPLIT BRAIN
  lb_start: {
    text: "[SCENARIO ZETA] ALERT: Half your users see old application data, half see new data. The primary DB cluster reports healthy.",
    options: [
      { label: "The database is corrupt. Initiate a full rollback from last night's backup.", next: "lb_fail_1" },
      { label: "Check the load balancer. Traffic might be routing to a detached node.", next: "lb_success" }
    ]
  },
  lb_fail_1: {
    text: "CRITICAL FAILURE: You just wiped 12 hours of production data because you panicked. The issue wasn't the database.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  lb_success: {
    text: "INCIDENT RESOLVED: Correct. A 'split-brain' occurred where the LB was routing 50% of traffic to a severed read-replica. You killed the dead route.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  },

  // SCENARIO ETA: BOTNET
  bot_start: {
    text: "[SCENARIO ETA] ALERT: Public API traffic spiked by 10,000%. Your standard IP rate-limiting isn't working.",
    options: [
      { label: "Increase server capacity (auto-scale) to handle the load.", next: "bot_fail_1" },
      { label: "Analyze request headers for anomalies and update WAF rules.", next: "bot_success" }
    ]
  },
  bot_fail_1: {
    text: "SYSTEM FAILURE: You just auto-scaled directly into a $40,000 AWS bill for processing bot traffic. The CFO wants a word.",
    options: [{ label: "Reboot Terminal", next: "main_menu" }]
  },
  bot_success: {
    text: "INCIDENT RESOLVED: You realized the botnet was rotating IPs but sharing a single anomalous User-Agent string. WAF updated. Threat neutralized.",
    options: [{ label: "Return to Main Menu", next: "main_menu" }]
  }
};

export default function DebugSimulator() {
  const [currentStep, setCurrentStep] = useState('main_menu');
  const step = SCENARIOS[currentStep] || SCENARIOS['main_menu'];

  const isFail = currentStep.includes('fail');
  const isSuccess = currentStep.includes('success');

  return (
    <div className="w-full glass-panel border border-cyan-500/30 rounded-2xl overflow-hidden font-mono text-sm relative">
      <div className="bg-cyan-950/40 p-3 border-b border-cyan-500/30 flex items-center gap-2 text-cyan-400 text-xs z-20 relative">
        <Terminal className="w-4 h-4" /> root@vivek-os:~/simulator
      </div>
      
      <div className="p-6 space-y-6 min-h-[380px] relative overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <AnimatePresence>
            {isFail && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10, 10, 0], opacity: 0.1 }} 
                exit={{ opacity: 0 }} 
                className="text-red-500 pointer-events-none"
              >
                <Skull className="w-64 h-64" />
              </motion.div>
            )}
            {isSuccess && (
              <motion.div 
                initial={{ scale: 0, y: 50, opacity: 0 }} 
                animate={{ scale: 1, y: 0, opacity: 0.1 }} 
                exit={{ opacity: 0 }} 
                className="text-emerald-500 pointer-events-none"
              >
                <Trophy className="w-64 h-64" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6 relative z-50" 
          >
            <div className={`p-4 rounded-lg border ${isFail ? 'bg-red-950/30 border-red-500/50 text-red-400' : isSuccess ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-400' : 'bg-white/5 border-white/10 text-neutral-300'}`}>
              <p className="leading-relaxed text-base flex items-start gap-3 whitespace-pre-wrap">
                {isFail && <Skull className="w-6 h-6 flex-shrink-0 mt-0.5 animate-pulse" />}
                {isSuccess && <Rocket className="w-6 h-6 flex-shrink-0 mt-0.5" />}
                {!isFail && !isSuccess && <Terminal className="w-6 h-6 flex-shrink-0 mt-0.5 text-cyan-500" />}
                <span>{step.text}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {step.options.map((opt, i) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentStep(opt.next || 'main_menu')}
                    className="text-left p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/80 transition-colors text-neutral-400 hover:text-cyan-300 flex items-center gap-3 group relative z-50 cursor-pointer"
                  >
                    {Icon ? <Icon className="w-4 h-4 text-cyan-500" /> : <span className="text-cyan-500 font-bold">{'>'}</span>}
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}