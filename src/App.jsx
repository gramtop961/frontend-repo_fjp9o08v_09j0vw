import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LiveFeedPreview from './components/LiveFeedPreview.jsx';
import MarketplacePreview from './components/MarketplacePreview.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <LiveFeedPreview />
        <MarketplacePreview />
      </main>
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Hackershares. Built for security professionals.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
