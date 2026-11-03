import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Laptop, Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors hover:text-secondary-glow relative py-1 ${
      isActive ? 'text-secondary-glow after:w-full' : 'text-slate-200'
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary-glow after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0d0f17]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-extrabold flex items-center gap-2 text-white">
          <Laptop className="text-secondary-glow" size={30} /> Tillo <span className="text-secondary-glow">IT Tech</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>Bosh sahifa</NavLink>
          <NavLink to="/courses" className={linkClass}>Kurslar</NavLink>
          <NavLink to="/services" className={linkClass}>Xizmatlar</NavLink>
          <NavLink to="/contact" className={linkClass}>Aloqa va Manzil</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://t.me/tillo56"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-accent-blue text-white font-semibold transition-all hover:bg-accent-blue hover:shadow-[0_0_20px_rgba(0,112,243,0.5)] hover:-translate-y-0.5"
          >
            <Send size={18} /> Bog'lanish
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-6 py-8 bg-dark-bg border-b border-white/10">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Bosh sahifa</NavLink>
          <NavLink to="/courses" onClick={() => setIsOpen(false)} className={linkClass}>Kurslar</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={linkClass}>Xizmatlar</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>Aloqa va Manzil</NavLink>
          <a
            href="https://t.me/tillo56"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-accent-blue text-white font-semibold"
          >
            <Send size={18} /> Bog'lanish
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;