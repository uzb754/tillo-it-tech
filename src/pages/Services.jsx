import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  FileText, 
  Palette, 
  Broom, 
  ShieldCheck, 
  Sliders, 
  Gamepad2, 
  AlertTriangle, 
  CheckCircle, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  Clock,
  Shield,
  Cpu
} from 'lucide-react';

const Services = () => {
  return (
    <main className="py-16 flex-1 font-poppins text-slate-100">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Sarlavha qismi */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-semibold mb-4">
            <Sparkles size={14} /> Professional Dasturiy Servis
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-secondary-glow to-accent-blue bg-clip-text text-transparent">
            Kompyuter Servis Xizmatlari
          </h1>
          <p className="text-text-muted text-base md:text-lg">
            Tezkor, sifatli va kafolatlangan dasturiy (soft) kompyuter xizmatlari. Kompyuteringiz ish faoliyatini yanada tezkor va qulay holatga keltirib beramiz.
          </p>
        </div>

        {/* Xizmatlar Grid qismi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* 1-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Windows 10 / 11 Format</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Operatsion tizimlarni noldan sifatli qayta oʻrnatish, barcha kerakli sozlamalarni kiritish va toʻliq optimizatsiya qilish.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> Tezkor va toza o'rnatish
            </div>
          </div>

          {/* 2-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Microsoft Office</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Word, Excel, PowerPoint va boshqa ofis dasturlarini oʻrnatish hamda umrbod barqaror faollashtirish (aktivatsiya).
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> Barqaror versiyalar
            </div>
          </div>

          {/* 3-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Dasturlar</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Adobe Photoshop, Premiere Pro, Illustrator, AutoCAD, CorelDraw va boshqa ixtisoslashgan dasturlarni o'rnatish.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> Mutaxassislar uchun
            </div>
          </div>

          {/* 4-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Broom size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Chiqindilardan Tozalash</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Keraksiz kesh fayllarni oʻchirish, tizimni tartibga solish va kompyuter tezligini 2 baravargacha oshirish.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> Tezlikni oshirish
            </div>
          </div>

          {/* 5-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Antivirus O'rnatish</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Ishonchli antiviruslarni o'rnatish, kompyuterni zararli viruslardan tozalash va xavfsizlikni ta'minlash.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> To'liq xavfsizlik
            </div>
          </div>

          {/* 6-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sliders size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Drayverlarni Sozlash</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Barcha turdagi qurilmalar uchun eng so'nggi va mos keluvchi drayverlarni topib, muammosiz to'g'rilash.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> To'liq moslashuv
            </div>
          </div>

          {/* 7-Xizmat */}
          <div className="bg-card-bg border border-white/10 p-7 rounded-3xl hover:border-accent-blue hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gamepad2 size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">O'yinlarni Sozlash</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Kompyuter oʻyinlarini oʻrnatish va ularning qotmaydigan, maroqli ishlashi uchun maxsus optimizatsiya qilish.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-secondary-glow font-medium">
              <CheckCircle2 size={14} /> Yuqori FPS sozlamalari
            </div>
          </div>

        </div>

        {/* Muhim Eslatma va Kafolat bloklari */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-2xl flex items-start gap-4 text-sm">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={24} />
            <div>
              <strong className="text-white block mb-1">Muhim Eslatma:</strong> 
              Faqat dasturiy (soft) xizmatlar ko'rsatiladi. Kompyuter ta'mirlash (temir/ichki qismlari, zapchast almashtirish, qismlarga ajratish) bilan shug'ullanmayman.
            </div>
          </div>

          <div className="bg-secondary-glow/10 border-l-4 border-secondary-glow p-6 rounded-r-2xl flex items-start gap-4 text-sm">
            <CheckCircle className="text-secondary-glow shrink-0 mt-0.5" size={24} />
            <div>
              <strong className="text-white block mb-1">Xavfsizlik va Kafolat:</strong> 
              Ko'rsatilgan xizmatlar sifatiga va shaxsiy ma'lumotlaringiz maxfiyligiga to'liq javob beramiz.
            </div>
          </div>
        </div>

        {/* Nima uchun aynan bizning servis? */}
        <div className="bg-gradient-to-br from-card-bg to-[#1e2238] border border-white/10 p-8 md:p-12 rounded-3xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Bizning Afzalliklarimiz</h2>
            <p className="text-text-muted text-sm">Har bir mijozga sifatli va tezkor yechim taqdim etamiz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary-glow/15 text-secondary-glow flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Tezkor Xizmat</h3>
              <p className="text-text-muted text-sm">Barcha dasturiy muammolar qisqa vaqt ichida o'z vaqtida bartaraf etiladi.</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/15 text-accent-blue flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ishonchlilik</h3>
              <p className="text-text-muted text-sm">Faqatgina sinovdan o'tgan, barqaror va xavfsiz dasturiy ta'minotlardan foydalaniladi.</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary-glow/15 text-primary-glow flex items-center justify-center mb-4">
                <Cpu size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Optimizatsiya</h3>
              <p className="text-text-muted text-sm">Kompyuteringiz imkoniyatlaridan kelib chiqib maksimal tezlikka erishish uchun sozlaymiz.</p>
            </div>
          </div>
        </div>

        {/* Tez-tez beriladigan savollar (FAQ) */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="text-secondary-glow" size={28} /> Servis bo'yicha savollar
            </h2>
            <p className="text-text-muted text-sm">Dasturiy xizmatlarimiz haqida ko'p beriladigan savollar.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Xizmatlarni uyingizga borib qilib berasizmi?</h3>
              <p className="text-text-muted text-sm">Ha, kelishuvga ko'ra joyiga borib ham barcha kerakli dasturiy xizmatlarni ko'rsatib berishim mumkin.</p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Format qilinganda fayllarim o'chib ketadimi?</h3>
              <p className="text-text-muted text-sm">Faqatgina Windows o'rnatiladigan asosiy disk (C disk) tozalanadi. Qolgan disklardagi muhim ma'lumotlaringiz saqlanib qoladi.</p>
            </div>

            <div className="bg-card-bg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold text-base mb-2 text-white">Buyurtmani qanday berish mumkin?</h3>
              <p className="text-text-muted text-sm">Saytimizdagi "Aloqa va Manzil" bo'limi orqali anketa qoldirishingiz yoki telefon raqamimizga qo'ng'iroq qilishingiz mumkin.</p>
            </div>
          </div>
        </div>

        {/* Tugma */}
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-glow to-accent-blue text-white font-semibold shadow-lg hover:shadow-primary-glow/40 hover:-translate-y-0.5 transition-all"
          >
            <Wrench size={18} /> Xizmat Buyurish <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Services;