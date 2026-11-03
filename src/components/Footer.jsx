import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Send, 
  Phone, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Code2
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090a10] text-slate-300 font-poppins relative overflow-hidden mt-auto">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-glow/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* About */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" onClick={scrollToTop} className="text-2xl font-extrabold flex items-center gap-2 text-white">
              <Laptop className="text-secondary-glow" size={32} />
              Tillo <span className="text-secondary-glow">IT Tech</span>
            </Link>
            
            <p className="text-text-muted text-sm leading-relaxed pr-4">
              Professional kompyuter xizmatlari va zamonaviy Frontend hamda Kompyuter savodxonligi kurslari. 
              Sifatli ta'lim va ishonchli texnik xizmat bir joyda.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                <ShieldCheck className="text-secondary-glow shrink-0" size={24} />
                <div>
                  <h5 className="text-xs font-bold text-white">100% Kafolat</h5>
                  <p className="text-[11px] text-text-muted">Sifatli xizmat</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                <Code2 className="text-accent-blue shrink-0" size={24} />
                <div>
                  <h5 className="text-xs font-bold text-white">Amaliy Portfolio</h5>
                  <p className="text-[11px] text-text-muted">Real loyihalar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2 inline-block">
              Tezkor Havolalar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-text-muted hover:text-secondary-glow flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-secondary-glow" /> Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={scrollToTop} className="text-text-muted hover:text-secondary-glow flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-secondary-glow" /> IT Kurslar
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-text-muted hover:text-secondary-glow flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-secondary-glow" /> Kompyuter Servis
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-text-muted hover:text-secondary-glow flex items-center gap-1.5 transition-colors">
                  <ChevronRight size={14} className="text-secondary-glow" /> Aloqa va Manzil
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2 inline-block">
              Xizmatlarimiz
            </h4>
            <ul className="space-y-2.5 text-sm text-text-muted">
              <li>Windows 10 / 11 Format</li>
              <li>MS Office Aktivatsiya</li>
              <li>Grafik Dasturlar O'rnatish</li>
              <li>Antivirus Sozlash</li>
              <li>Frontend Dasturlash Kursi</li>
              <li>Kompyuter Savodxonligi</li>
            </ul>
          </div>

          {/* Contact with Google Maps Link */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-b border-white/10 pb-2 inline-block">
              Bog'lanish
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin size={18} className="text-secondary-glow shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Alisher+Navoiy+shoh+kochasi+43+Shayxontohur+Tashkent" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Shayxontohur tumani, Alisher Navoiy shoh ko'chasi, 43 / 44-uy.
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Phone size={18} className="text-secondary-glow shrink-0" />
                <a href="tel:+998932509377" className="hover:text-white transition-colors">
                  +998 93 250 93 77
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Send size={18} className="text-secondary-glow shrink-0" />
                <a href="https://t.me/tillo56" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  @tillo56
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Clock size={18} className="text-secondary-glow shrink-0" />
                <span>Har kuni: 09:00 - 20:00</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-secondary-glow" />
            <span>&copy; 2026 Tillo IT Tech. Barcha huquqlar himoyalangan.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/tillo56"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all"
            >
              <Send size={16} />
            </a>
            <a
              href="tel:+998932509377"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;