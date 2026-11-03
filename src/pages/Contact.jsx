import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  Car, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Navigation,
  Globe,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Frontend Dasturlash Kursi',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // .env faylidan xavfsiz tarzda o'qib olish
  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Iltimos, ism va telefon raqamingizni kiriting!");
      return;
    }

    setIsSubmitting(true);

    const text = `📬 *Yangi Ariza! (Tillo IT Tech)*\n\n` +
      `👤 *Ism:* ${formData.name}\n` +
      `📞 *Tel:* ${formData.phone}\n` +
      `🛠 *Xizmat:* ${formData.service}\n` +
      `💬 *Xabar:* ${formData.message || 'Mavjud emas'}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        toast.success("Arizangiz muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz.", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark"
        });
        setFormData({ name: '', phone: '', service: 'Frontend Dasturlash Kursi', message: '' });
      } else {
        toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring!");
      }
    } catch (error) {
      toast.error("Tarmoqda xatolik! Telegram orqali bog'laning.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Alisher+Navoiy+shoh+kochasi+43+Shayxontohur+Tashkent";

  return (
    <main className="py-16 flex-1 font-poppins text-slate-100 overflow-hidden">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-glow/15 border border-primary-glow/30 text-secondary-glow text-xs font-semibold mb-4">
            <Sparkles size={14} /> Biz Bilan Aloqa
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-secondary-glow to-accent-blue bg-clip-text text-transparent">
            Biz Bilan Bog'laning
          </h1>
          <p className="text-text-muted text-base md:text-lg">
            Savollaringiz bormi, kurslarga yozilmoqchisiz yoki kompyuter servis xizmati kerakmi? Ma'lumot qoldiring, tezda aloqaga chiqamiz.
          </p>
        </motion.div>

        {/* Main Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-card-bg border border-white/10 rounded-3xl p-6 md:p-12 mb-16 shadow-2xl"
        >
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4 flex items-center gap-3">
                  <MessageSquare className="text-secondary-glow" size={24} />
                  Bog'lanish Ma'lumotlari
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-glow/15 text-primary-glow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white">Manzil:</h4>
                      <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="text-text-muted text-sm hover:text-secondary-glow transition-colors block leading-relaxed">
                        Shayxontohur tumani, Alisher Navoiy shoh ko'chasi, 43 / 44-uy.
                      </a>
                      <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-secondary-glow mt-2 font-medium hover:underline">
                        <Navigation size={12} /> Google Maps'da ochish
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-glow/15 text-primary-glow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white">Telefon raqam:</h4>
                      <a href="tel:+998932509377" className="text-text-muted text-sm hover:text-white transition-colors block font-semibold">
                        +998 93 250 93 77
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-glow/15 text-primary-glow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Send size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white">Telegram:</h4>
                      <a href="https://t.me/tillo56" target="_blank" rel="noreferrer" className="text-text-muted text-sm hover:text-secondary-glow transition-colors block">
                        @tillo56 (t.me/tillo56)
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary-glow/15 text-primary-glow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white">Ish vaqti:</h4>
                      <p className="text-text-muted text-sm">Dushanba - Yakshanba (09:00 - 20:00)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3 mt-6">
                <Car className="text-secondary-glow shrink-0 mt-1" size={20} />
                <p className="text-xs text-text-muted leading-relaxed">
                  <strong className="text-white block mb-0.5">Joyiga borib xizmat ko'rsatish:</strong>
                  Kelishuvga ko'ra kompyuter dasturiy xizmatlarini uyingizga yoki ofisingizga borib ham bajarib berishim mumkin.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-white">Arizangizni Qoldiring</h3>
              <p className="text-text-muted text-sm mb-6">
                Ismingiz va telefon raqamingizni kiriting, biz siz bilan tez orada bog'lanamiz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Ism kiritish joyi (Faqat harflar uchun) */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-slate-200">
                    Ism va Familiyangiz <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Masalan: Azizbek Valiyev"
                      value={formData.name}
                      onChange={(e) => {
                        const regex = /^[A-Za-zА-Яа-яGʻgʻOʻoʻShshChch\s]*$/;
                        if (regex.test(e.target.value) || e.target.value === '') {
                          setFormData({ ...formData, name: e.target.value });
                        }
                      }}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors text-sm"
                    />
                    <User className="absolute left-3.5 top-3.5 text-text-muted" size={18} />
                  </div>
                </div>

                {/* Telefon nomer kiritish joyi (Faqat raqamlar va plus uchun) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-200">
                    Telefon Raqamingiz <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => {
                        const regex = /^[0-9+\s-]*$/;
                        if (regex.test(e.target.value)) {
                          setFormData({ ...formData, phone: e.target.value });
                        }
                      }}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors text-sm"
                    />
                    <Phone className="absolute left-3.5 top-3.5 text-text-muted" size={18} />
                  </div>
                </div>

                {/* Xizmat turi */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium mb-2 text-slate-200">
                    Xizmat yoki Kurs Turini Tanlang
                  </label>
                  <select
                    id="serviceType"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-card-bg border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent-blue transition-colors text-sm"
                  >
                    <option value="Frontend Dasturlash Kursi">Frontend Dasturlash Kursi</option>
                    <option value="Kompyuter Savodxonligi Kursi">Kompyuter Savodxonligi Kursi</option>
                    <option value="Windows Format / Optimizatsiya">Windows Format / Optimizatsiya</option>
                    <option value="MS Office & Aktivatsiya">MS Office & Aktivatsiya</option>
                    <option value="Professional Dasturlar O'rnatish">Professional Dasturlar O'rnatish</option>
                    <option value="Boshqa xizmatlar">Boshqa xizmatlar</option>
                  </select>
                </div>

                {/* Qo'shimcha xabar */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-200">
                    Qo'shimcha Xabar (Ixtiyoriy)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Savolingiz yoki izohingiz bo'lsa yozib qoldiring..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary-glow to-accent-blue text-white font-semibold shadow-lg hover:shadow-primary-glow/40 hover:-translate-y-0.5 transition-all text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <Send size={18} /> Arizani Yuborish
                    </>
                  )}
                </button>

                <p className="text-[11px] text-text-muted text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck size={14} className="text-secondary-glow" /> Sizning ma'lumotlaringiz maxfiy saqlanadi.
                </p>
              </form>
            </div>

          </div>
        </motion.div>

        {/* Google Maps Section */}
        <div className="bg-card-bg border border-white/10 p-6 md:p-8 rounded-3xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="text-secondary-glow" size={22} /> Joylashuvimiz Xaritada
              </h3>
              <p className="text-text-muted text-xs md:text-sm mt-1">
                Toshkent shahri, Shayxontohur tumani, Alisher Navoiy shoh ko'chasi, 43 / 44-uy.
              </p>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary-glow/50 text-secondary-glow text-xs font-semibold hover:bg-secondary-glow hover:text-black transition-all shrink-0">
              Google Maps da Ochish <ArrowRight size={14} />
            </a>
          </div>

          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10">
            <iframe 
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.883906233157!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a5a5a5a5a5a5a5!2sAlisher%20Navoiy%20Ave%2C%20Tashkent!5e0!3m2!1sen!2suz!4v1680000000000!5m2!1sen!2suz" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              className="filter grayscale contrast-125 invert-[0.9] opacity-90"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="text-secondary-glow" size={28} /> Ko'p Beriladigan Savollar
            </h2>
            <p className="text-text-muted text-sm">Mijozlarimiz tomonidan beriladigan eng muhim savollar.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary-glow shrink-0" /> 
                Arizam qancha vaqt ichida ko'rib chiqiladi?
              </h3>
              <p className="text-text-muted text-sm pl-6">
                Formani to'ldirib yuborganingizdan so'ng, 15-30 daqiqa ichida ko'rsatilgan telefon raqamingizga bog'lanamiz yoki Telegram orqali javob beramiz.
              </p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary-glow shrink-0" /> 
                Joyiga borib xizmat ko'rsatish narxi qanday belgilanadi?
              </h3>
              <p className="text-text-muted text-sm pl-6">
                Joyiga borish xizmati qilinadigan ish turi va masofaga qarab oldindan kelishilgan holda belgilanadi.
              </p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary-glow shrink-0" /> 
                Dam olish kunlari ham ishleysizmi?
              </h3>
              <p className="text-text-muted text-sm pl-6">
                Ha, haftaning barcha kunlari (Shanba va Yakshanba kunlari ham) soat 09:00 dan 20:00 gacha aloqadamiz va xizmat ko'rsatamiz.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;