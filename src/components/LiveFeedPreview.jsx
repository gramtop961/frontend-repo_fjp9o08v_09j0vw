import React from 'react';
import { Shield, Zap, Bug } from 'lucide-react';

const items = [
  {
    id: 1,
    user: 'Aisha K',
    handle: '@aishasec',
    badge: { icon: <Zap className="h-3.5 w-3.5" />, text: 'Tool Release', color: 'text-emerald-300', bg: 'bg-emerald-500/10', ring: 'ring-emerald-400/20' },
    content: 'Released a lightweight recon automation that chains subdomain discovery with DNS permutations and live port checks. CLI-first, YAML configs, async goodness.',
    time: '2m',
  },
  {
    id: 2,
    user: 'Ravi P',
    handle: '@ravipentest',
    badge: { icon: <Bug className="h-3.5 w-3.5" />, text: 'Vulnerability', color: 'text-rose-300', bg: 'bg-rose-500/10', ring: 'ring-rose-400/20' },
    content: 'Found IDOR in an invoice export endpoint; parameter tampering exposes cross-account PDFs. Mitigation: resource-level ACL + signed URLs.',
    time: '18m',
  },
  {
    id: 3,
    user: 'Mina S',
    handle: '@minasoc',
    badge: { icon: <Shield className="h-3.5 w-3.5" />, text: 'Blue Team', color: 'text-sky-300', bg: 'bg-sky-500/10', ring: 'ring-sky-400/20' },
    content: 'Sigma rules pack for common initial access patterns mapped to ATT&CK. Includes test pcap and detections for proxy abuse.',
    time: '1h',
  },
];

const LiveFeedPreview = () => {
  return (
    <section id="feed" className="mx-auto max-w-7xl px-6 mt-12 md:mt-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Live feed</h2>
          <p className="mt-2 text-white/70">A rolling stream of findings, techniques, and tool drops from the community.</p>
        </div>
        <a href="#" className="hidden md:inline-flex text-sm text-emerald-300 hover:text-emerald-200">Open full feed →</a>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium ring-1 ring-white/10">
                  {item.user.split(' ').map(p=>p[0]).join('')}
                </div>
                <div>
                  <div className="font-medium">{item.user}</div>
                  <div className="text-xs text-white/60">{item.handle}</div>
                </div>
              </div>
              <div className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] ring-1 ${item.badge.bg} ${item.badge.ring} ${item.badge.color}`}>
                {item.badge.icon}
                <span>{item.badge.text}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.content}</p>
            <div className="mt-4 text-xs text-white/50">{item.time} ago</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LiveFeedPreview;
