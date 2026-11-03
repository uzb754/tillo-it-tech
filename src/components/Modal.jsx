import React from 'react';
import { Send, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 text-center bg-[#090a10] mt-auto">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">&copy; 2026 Tillo IT Tech. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-4">
          <a
            href="https://t.me/tillo56"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-blue hover:-translate-y-1 transition-all"
          >
            <Send size={18} />
          </a>
          <a
            href="tel:+998932509377"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-blue hover:-translate-y-1 transition-all"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;