import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Wrench, UserCheck, Zap, Trophy, Check, Send } from 'lucide-react';

const Home = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary-glow/30 via-secondary-glow/15 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-5">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Kelajak IT-Texnologiyalari va Kompyuter Xizmatlari Bir Joyda!
          </h1>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Professional kompyuter xizmatlari va zamonaviy Frontend hamda Kompyuter savodxonligi kurslari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary-glow to-accent-blue text-white font-semibold shadow-lg shadow-primary-glow/40 hover:shadow-primary-glow/60 hover:-translate-y-0.5 transition-all"
            >
              <GraduationCap size={20} /> Kurslarga yozilish
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-accent-blue text-white font-semibold shadow-md shadow-accent-blue/20 hover:bg-accent-blue hover:-translate-y-0.5 transition-all"
            >
              <Wrench size={20} /> Xizmat buyurish
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h2 className="text-4xl font-extrabold text-secondary-glow mb-1">100%</h2>
              <p className="text-text-muted text-sm">Sifat Kafolati</p>
            </div>
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h2 className="text-4xl font-extrabold text-accent-blue mb-1">50+</h2>
              <p className="text-text-muted text-sm">Mamnun Mijozlar</p>
            </div>
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h2 className="text-4xl font-extrabold text-primary-glow mb-1">1:1</h2>
              <p className="text-text-muted text-sm">Individual Yondashuv</p>
            </div>
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h2 className="text-4xl font-extrabold text-secondary-glow mb-1">24/7</h2>
              <p className="text-text-muted text-sm">Onlayn Muloqot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card-bg/40">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-secondary-glow to-accent-blue bg-clip-text text-transparent">
            Nima Uchun Biz?
          </h2>
          <p className="text-center text-text-muted max-w-xl mx-auto mb-12">
            Bizning xizmat va kurslarimiz sizga eng maqbul va zamonaviy yechimlarni taqdim etadi.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl hover:border-secondary-glow transition-all">
              <div className="text-secondary-glow mb-4"><UserCheck size={36} /></div>
              <h3 className="text-xl font-bold mb-2">Individual Yondashuv</h3>
              <p className="text-text-muted text-sm">Kichik guruhlar va har bir o'quvchiga alohida e'tibor qaratilishi.</p>
            </div>
            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl hover:border-accent-blue transition-all">
              <div className="text-accent-blue mb-4"><Zap size={36} /></div>
              <h3 className="text-xl font-bold mb-2">Tezkor Xizmat</h3>
              <p className="text-text-muted text-sm">Kompyuter dasturiy ta'minotlarini qisqa vaqt ichida va sifatli sozlab berish.</p>
            </div>
            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl hover:border-primary-glow transition-all">
              <div className="text-primary-glow mb-4"><Trophy size={36} /></div>
              <h3 className="text-xl font-bold mb-2">Amaliy Natija</h3>
              <p className="text-text-muted text-sm">Noldan boshlab o'z shaxsiy portfolio loyihangiz va veb-saytingizni yaratish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-secondary-glow to-accent-blue bg-clip-text text-transparent">
            Yo'nalishlarimiz
          </h2>
          <p className="text-center text-text-muted max-w-xl mx-auto mb-12">
            Ta'lim oling yoki kompyuteringizni professional darajada sozlatib oling.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 hover:border-secondary-glow transition-all">
              <div>
                <div className="w-14 h-14 bg-secondary-glow/10 text-secondary-glow rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">IT-Ta'lim Kurslari</h3>
                <p className="text-text-muted mb-6 text-sm">
                  Kompyuter savodxonligi hamda Frontend dasturlash bo'yicha amaliy darslar.
                </p>
                <ul className="space-y-3 mb-6 text-text-muted text-sm">
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> Word, Excel, PowerPoint, Google Sheets</li>
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> HTML, CSS, JavaScript, React JS</li>
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> Shaxsiy portfolio loyihasi</li>
                </ul>
              </div>
              <Link to="/courses" className="w-full text-center py-3 rounded-full border-2 border-accent-blue text-white font-semibold hover:bg-accent-blue transition-all">
                Batafsil Ko'rish
              </Link>
            </div>

            <div className="bg-card-bg border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 hover:border-accent-blue transition-all">
              <div>
                <div className="w-14 h-14 bg-accent-blue/10 text-accent-blue rounded-xl flex items-center justify-center mb-6">
                  <Wrench size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Kompyuter Servis</h3>
                <p className="text-text-muted mb-6 text-sm">
                  Windows operatsion tizimlari, drayverlar, antivirus va kerakli dasturlarni o'rnatish.
                </p>
                <ul className="space-y-3 mb-6 text-text-muted text-sm">
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> Windows 10/11 format va optimizatsiya</li>
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> MS Office va Adobe grafik dasturlari</li>
                  <li className="flex items-center gap-2"><Check size={18} className="text-secondary-glow" /> Kesh tozalash va tezlikni oshirish</li>
                </ul>
              </div>
              <Link to="/services" className="w-full text-center py-3 rounded-full border-2 border-accent-blue text-white font-semibold hover:bg-accent-blue transition-all">
                Batafsil Ko'rish
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-gradient-to-r from-card-bg to-[#1e2238] border border-white/10 p-10 md:p-14 rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Savollaringiz Bormi Yoki Maslahat Kerakmi?</h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Biz bilan aloqaga chiqing va o'zingizga kerakli xizmat yoki kurs bo'yicha to'liq ma'lumotga ega bo'ling.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-glow to-accent-blue text-white font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Send size={18} /> Biz Bilan Bog'lanish
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;