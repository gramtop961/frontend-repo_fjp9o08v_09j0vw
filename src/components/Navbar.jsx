import React from 'react';
import { Shield, Users, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <Shield className="h-4 w-4 text-emerald-400" />
            </span>
            <span className="font-semibold tracking-tight text-white">Hackershares</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#feed" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
              <Users className="h-4 w-4" />
              Live Feed
            </a>
            <a href="#marketplace" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Marketplace
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm rounded-md border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-colors">Sign in</button>
            <button className="px-3 py-1.5 text-sm rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition-colors">Join now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
