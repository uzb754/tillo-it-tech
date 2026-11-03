import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Code, 
  Check, 
  Clock, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Award, 
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <main className="py-16 flex-1 font-poppins text-slate-100">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Sarlavha qismi */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-glow/10 border border-secondary-glow/30 text-secondary-glow text-xs font-semibold mb-4">
            <Sparkles size={14} /> Zamonaviy IT Ta'lim Markazi
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-secondary-glow to-accent-blue bg-clip-text text-transparent">
            Kelajagingizni Biz Bilan Quring
          </h1>
          <p className="text-text-muted text-base md:text-lg">
            Noldan boshlab professional darajagacha bo'lgan amaliy kurslar. Kichik guruhlar va real loyihalar asosida ta'lim oling.
          </p>
        </div>

        {/* Filtr tugmalari */}
        <div className="flex justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'all' 
                ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30' 
                : 'bg-card-bg border border-white/10 text-text-muted hover:text-white'
            }`}
          >
            Barcha Kurslar
          </button>
          <button 
            onClick={() => setActiveTab('it')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'it' 
                ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30' 
                : 'bg-card-bg border border-white/10 text-text-muted hover:text-white'
            }`}
          >
            Dasturlash
          </button>
          <button 
            onClick={() => setActiveTab('office')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'office' 
                ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30' 
                : 'bg-card-bg border border-white/10 text-text-muted hover:text-white'
            }`}
          >
            Savodxonlik
          </button>
        </div>

        {/* Kurslar Grid qismi */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* 1-Karta: Kompyuter savodxonligi */}
          {(activeTab === 'all' || activeTab === 'office') && (
            <div className="bg-card-bg border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-secondary-glow hover:-translate-y-2 transition-all duration-300 relative group">
              <div>
                <div className="w-16 h-16 bg-secondary-glow/10 text-secondary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor size={34} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Kompyuter Savodxonligi</h3>
                <p className="text-accent-blue font-medium text-sm mb-6 flex items-center gap-2">
                  <Users size={16} /> Kimlar uchun: Ofis xodimlari va talabalar
                </p>

                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  Kompyuterda erkin ishlashni o'rganish, hujjatlar tayyorlash va zamonaviy onlayn vositalardan professional tarzda foydalanish ko'nikmalarini egallang.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-semibold text-sm">Kursda o'rganiladigan dasturlar:</h4>
                  <ul className="space-y-2.5 text-text-muted text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Kompyuterdan professional va xavfsiz foydalanish</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>MS Office: Word (matnlar), Excel (jadvallar), PowerPoint (taqdimotlar)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Google Sheets bilan onlayn va jamoaviy ishlash</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Zoom meeting va boshqa onlayn muloqot dasturlari</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="border-t border-white/10 pt-4 mb-6 flex items-center justify-between text-text-muted text-sm">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-secondary-glow" /> Haftada 3 kun / 1.5 soat</span>
                  <span className="flex items-center gap-2"><BookOpen size={16} className="text-accent-blue" /> 2 Oy</span>
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-4 rounded-2xl border-2 border-accent-blue text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent-blue transition-all"
                >
                  Kursga Yozilish <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          )}

          {/* 2-Karta: Frontend dasturlash */}
          {(activeTab === 'all' || activeTab === 'it') && (
            <div className="bg-card-bg border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:border-secondary-glow hover:-translate-y-2 transition-all duration-300 relative group">
              <span className="absolute top-6 right-6 bg-red-500/15 border border-red-500/50 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <Flame size={14} /> Joylar cheklangan
              </span>

              <div>
                <div className="w-16 h-16 bg-primary-glow/15 text-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code size={34} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Frontend Dasturlash</h3>
                <p className="text-accent-blue font-medium text-sm mb-6">
                  Farzandingiz zamonaviy veb-dasturlashni noldan o'rganib, o'z veb-saytini yaratishni xohlaydimi? Unda sizni kutamiz!
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium">HTML5</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium">CSS3 / SCSS</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium">JavaScript</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium">React JS</span>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-semibold text-sm">Kurs afzalliklari va natija:</h4>
                  <ul className="space-y-2.5 text-text-muted text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Har bir o'quvchi o'zining shaxsiy portfolio-saytini yaratadi</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Real loyihalar ustida ishlash tajribasi</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check size={18} className="text-secondary-glow shrink-0 mt-0.5" /> 
                      <span>Kichik guruhlar — har bir o'quvchiga individual e'tibor</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="border-t border-white/10 pt-4 mb-6 flex items-center justify-between text-text-muted text-sm">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-secondary-glow" /> Haftada 3 kun / 1.5 soat</span>
                  <span className="flex items-center gap-2"><BookOpen size={16} className="text-accent-blue" /> 5-6 Oy</span>
                </div>

                <Link 
                  to="/contact" 
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-glow to-accent-blue text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-glow/40 transition-all"
                >
                  Kursga Yozilish <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Nima uchun bizning kurslar? (Afzalliklar bloki) */}
        <div className="bg-gradient-to-br from-card-bg to-[#1e2238] border border-white/10 p-8 md:p-12 rounded-3xl mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Bizning Ta'lim Tizimimiz Afzalliklari</h2>
            <p className="text-text-muted text-sm">O'quvchilarimizga eng qulay va samarali muhitni yaratib beramiz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary-glow/15 text-secondary-glow flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Kichik Guruhlar</h3>
              <p className="text-text-muted text-sm">Har bir o'quvchiga ustoz tomonidan alohida vaqt ajratiladi va savollariga javob beriladi.</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/15 text-accent-blue flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Amaliy Mashg'ulotlar</h3>
              <p className="text-text-muted text-sm">Nazariya bilan birga dars davomida amaliy vazifalar bajarilib, real ko'nikma hosil qilinadi.</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary-glow/15 text-primary-glow flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Natija va Portfolio</h3>
              <p className="text-text-muted text-sm">Kurs yakunida qo'lingizda tayyor amaliy natijangiz (shaxsiy veb-sayt yoki ofis loyihalari) bo'ladi.</p>
            </div>
          </div>
        </div>

        {/* Tez-tez beriladigan savollar (FAQ) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="text-secondary-glow" size={28} /> Ko'p beriladigan savollar
            </h2>
            <p className="text-text-muted text-sm">Kurslarimiz bo'yicha eng ko'p beriladigan savollarga javoblar.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Darslar qanday formatda o'tqaziladi?</h3>
              <p className="text-text-muted text-sm">Darslar amaliy tarzda, qulay jihozlangan o'quv xonalarida kichik guruhlarda olib boriladi.</p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Kompyuterim bo'lmasa nima qilaman?</h3>
              <p className="text-text-muted text-sm">O'quv markazimizda dars vaqti amaliyot qilish uchun sharoitlar yaratilgan.</p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Kursga qanday yozilish mumkin?</h3>
              <p className="text-text-muted text-sm">Saytimizdagi "Aloqa va Manzil" bo'limiga o'tib anketa to'ldirishingiz yoki telegram orqali bog'lanishingiz mumkin.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Courses;