import React from 'react';
import { Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Telegram Floating Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        href="https://t.me/tillo56"
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 p-3.5 bg-accent-blue rounded-full shadow-lg shadow-accent-blue/40 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
        title="Telegram orqali bog'lanish"
      >
        <Send size={22} />
      </motion.a>

      {/* Phone Floating Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+998932509377"
        className="w-13 h-13 p-3.5 bg-gradient-to-r from-primary-glow to-secondary-glow rounded-full shadow-lg shadow-primary-glow/40 flex items-center justify-center text-white transition-colors"
        title="Qo'ng'iroq qilish"
      >
        <Phone size={22} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;