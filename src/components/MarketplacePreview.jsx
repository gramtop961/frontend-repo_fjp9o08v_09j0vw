import React from 'react';
import { Shield, TerminalSquare, Cpu, Lock, Star } from 'lucide-react';

const products = [
  {
    id: 'p1',
    title: 'Recon Orchestrator',
    author: 'by @aishasec',
    price: 39,
    tag: 'Automation',
    icon: <Cpu className="h-4 w-4" />,
    desc: 'Parallelized subdomain + HTTP probing with smart rate limits and export to JSON/HTML.',
  },
  {
    id: 'p2',
    title: 'Red Team Toolkit',
    author: 'by @ghostops',
    price: 79,
    tag: 'Post-Ex',
    icon: <TerminalSquare className="h-4 w-4" />,
    desc: 'Modular C2 helpers, payload generator, and opsec-friendly staging scripts.',
  },
  {
    id: 'p3',
    title: 'Shield Rules Pack',
    author: 'by @minasoc',
    price: 25,
    tag: 'Detection',
    icon: <Shield className="h-4 w-4" />,
    desc: 'Sigma + YARA bundle with curated queries mapped to ATT&CK tactics.',
  },
  {
    id: 'p4',
    title: 'Vault Rotate',
    author: 'by @seckit',
    price: 19,
    tag: 'Secrets',
    icon: <Lock className="h-4 w-4" />,
    desc: 'CLI to rotate credentials across providers with audit logging built-in.',
  },
];

const MarketplacePreview = () => {
  return (
    <section id="marketplace" className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Marketplace</h2>
          <p className="mt-2 text-white/70">Buy and sell custom cybersecurity tools, scripts, and automations.</p>
        </div>
        <a href="#" className="hidden md:inline-flex text-sm text-emerald-300 hover:text-emerald-200">Browse all →</a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-all">
            <div className="flex items-start justify-between">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70 ring-1 ring-white/10">
                {p.icon}
                <span>{p.tag}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-amber-300 text-xs">
                <Star className="h-3.5 w-3.5 fill-amber-300/20" />
                4.9
              </div>
            </div>
            <h3 className="mt-3 font-medium text-white group-hover:text-emerald-300 transition-colors">{p.title}</h3>
            <p className="text-xs text-white/60">{p.author}</p>
            <p className="mt-3 text-sm text-white/80">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg font-semibold">${p.price}</div>
              <button className="text-sm rounded-md bg-emerald-500 text-black px-3 py-1.5 font-medium hover:bg-emerald-400 transition-colors">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketplacePreview;
