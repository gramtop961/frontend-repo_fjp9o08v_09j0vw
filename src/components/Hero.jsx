import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              Secure • Modern • Community
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Hackershares
              <span className="block text-white/70 font-normal mt-2">Connect, collaborate, and trade cybersecurity tools</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-prose">
              A dedicated hub for security professionals. Share insights in a real-time feed and monetize your custom scripts, automations, and utilities in a trusted marketplace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#marketplace" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 text-black px-4 py-2 font-medium hover:bg-emerald-400 transition-colors">
                Explore marketplace
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#feed" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-white/80 hover:text-white hover:border-white/20 transition-colors">
                See live feed
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <div className="text-2xl font-semibold">5k+</div>
                <div className="text-xs text-white/60">Security pros</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">1.2k+</div>
                <div className="text-xs text-white/60">Tools listed</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">99.9%</div>
                <div className="text-xs text-white/60">Uptime</div>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
