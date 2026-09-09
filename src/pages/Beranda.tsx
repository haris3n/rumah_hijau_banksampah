import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Home, Scale, Wallet, MessageCircle, Users, Leaf, Recycle, Globe } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import heroCommunity from '../assets/hero-community.jpg';
import aboutActivity from '../assets/about-activity.jpg';

function Counter({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(end);
  const { ref, visible } = useIntersection();

  useEffect(() => {
    if (!visible) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCount(end); return; }
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block">
        <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white">
          {count.toLocaleString('id-ID')}{suffix}
        </span>
      </div>
      <p className="text-primary-200/80 text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}

const steps = [
  { icon: Package, step: '01', title: 'Kumpulkan Sampah', desc: 'Pisahkan sampah rumah tangga berdasarkan jenisnya: plastik, kertas, logam, kaca, dan lainnya.' },
  { icon: Home,    step: '02', title: 'Setor ke Bank Sampah', desc: 'Bawa sampah yang sudah dipilah ke Bank Sampah Rumah Hijau sesuai jadwal operasional.' },
  { icon: Scale,   step: '03', title: 'Timbang & Catat', desc: 'Petugas akan menimbang, mencatat jenis, dan menghitung berat sampah yang Anda setor.' },
  { icon: Wallet,  step: '04', title: 'Dapatkan Nilai', desc: 'Sampah dikonversi menjadi saldo tabungan yang bisa diambil kapan saja sesuai harga pasaran.' },
];

const impacts = [
  { icon: Users,   end: 500, suffix: '+', label: 'Nasabah Aktif' },
  { icon: Recycle, end: 12,  suffix: 'T', label: 'Sampah Terkelola' },
  { icon: Leaf,    end: 8,   suffix: '',  label: 'Tahun Berdiri' },
  { icon: Globe,   end: 50,  suffix: '+', label: 'Jenis Sampah' },
];

export default function Beranda() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutSection = useIntersection();
  const stepsSection = useIntersection();
  const ctaSection   = useIntersection();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Selamat datang di Bank Sampah Rumah Hijau"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroCommunity}
            alt="Komunitas Bank Sampah Rumah Hijau Indramayu sedang memilah sampah bersama"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-secondary-950/70" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/15 rounded-full blur-3xl animate-float pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" aria-hidden="true" />
            <span className="text-white/90 text-sm font-medium">Pelopor Bank Sampah di Indramayu</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Ubah Sampah Jadi{' '}
            <span className="relative inline-block">
              <span className="gradient-text-gold">Berkah</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                <path d="M2 9C30 4 70 2 100 5C130 8 170 10 198 6" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bank Sampah Rumah Hijau Indramayu hadir untuk membantu masyarakat mengelola sampah
            secara berkelanjutan, menciptakan nilai ekonomi, dan menjaga kelestarian lingkungan.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontak"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary-800 font-bold text-lg shadow-2xl shadow-black/20 hover:shadow-primary-400/30 transition-all duration-400 hover:scale-105 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Gabung Jadi Nasabah
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" aria-hidden="true" />
            </Link>
            <Link
              to="/layanan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-400 hover:scale-105 cursor-pointer"
            >
              Cara Kerja
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in delay-600 mt-16" aria-hidden="true">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT BRIEF
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-surface relative overflow-hidden" aria-label="Tentang Bank Sampah Rumah Hijau">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 organic-blob blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" aria-hidden="true" />
        <div ref={aboutSection.ref} className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className={aboutSection.visible ? 'animate-slide-in-left' : ''}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                Tentang Kami
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Apa Itu{' '}
                <span className="text-primary-600">Bank Sampah</span>{' '}
                Rumah Hijau?
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
                Bank Sampah Rumah Hijau Indramayu adalah inisiatif masyarakat yang bergerak di bidang
                pengelolaan sampah berbasis komunitas. Kami membantu warga mengubah sampah menjadi barang
                bernilai ekonomi sekaligus mengurangi penumpukan sampah di lingkungan.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                Dengan sistem tabungan sampah, setiap warga dapat menyetor sampah yang telah dipilah
                dan mendapatkan nilai tukar berupa saldo tabungan. Bersama-sama, kita jaga kebersihan
                lingkungan dan tingkatkan kesejahteraan masyarakat Indramayu.
              </p>
              <Link
                to="/tentang"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 cursor-pointer"
              >
                Selengkapnya
                <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className={aboutSection.visible ? 'animate-slide-in-right delay-200' : ''}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 border border-primary-100/50">
                  <img
                    src={aboutActivity}
                    alt="Staff Bank Sampah Rumah Hijau sedang melayani nasabah dengan timbangan sampah"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-primary-900/10 border border-primary-100/50 animate-float cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center">
                      <span className="text-accent-600 font-heading font-black text-lg">5.0</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-primary-800 text-sm">Rating Sempurna</p>
                      <p className="text-xs text-text-muted">13 Ulasan Google</p>
                    </div>
                  </div>
                </div>
                {/* Eco badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true">
                  <Leaf size={28} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT NUMBERS
          ═══════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" aria-label="Dampak nyata Bank Sampah Rumah Hijau">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-secondary-800" />
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")` }}
        />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Dampak Nyata Kami</h2>
            <p className="text-primary-200/70">Kontribusi nyata untuk lingkungan yang lebih bersih dan masyarakat yang sejahtera</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map(({ icon: Icon, end, suffix, label }) => (
              <div key={label} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon size={22} aria-hidden="true" className="text-white" />
                </div>
                <Counter end={end} suffix={suffix} label={label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-surface-dim relative overflow-hidden" aria-label="Cara kerja Bank Sampah">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100/30 organic-blob blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" aria-hidden="true" />
        <div ref={stepsSection.ref} className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Cara Kerja
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">Mudah &amp; Bermanfaat</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Hanya 4 langkah sederhana untuk mulai berkontribusi pada lingkungan yang lebih baik
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <div
                key={step}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-border-soft hover:border-primary-300 card-lift cursor-default ${
                  stepsSection.visible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 text-5xl font-heading font-black text-primary-50 group-hover:text-primary-100 transition-colors duration-300 select-none" aria-hidden="true">
                  {step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} aria-hidden="true" className="text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/layanan"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 cursor-pointer"
            >
              Pelajari Selengkapnya
              <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden" aria-label="Bergabung bersama Bank Sampah Rumah Hijau">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200/20 organic-blob blur-3xl pointer-events-none" aria-hidden="true" />

        <div ref={ctaSection.ref} className={`relative max-w-4xl mx-auto text-center ${ctaSection.visible ? 'animate-scale-in' : ''}`}>
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-xl shadow-primary-900/5 border border-primary-100/60">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
              <Globe size={32} aria-hidden="true" className="text-white" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Siap Bergabung Bersama Kami?
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
              Jadilah bagian dari gerakan peduli lingkungan. Daftarkan diri Anda sebagai nasabah
              Bank Sampah Rumah Hijau dan mulai berkontribusi hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontak"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-400 hover:scale-105 cursor-pointer"
              >
                Daftar Sekarang
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi kami via WhatsApp"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-lg shadow-lg shadow-green-500/25 hover:bg-[#1ebe5d] hover:shadow-xl transition-all duration-400 hover:scale-105 cursor-pointer"
              >
                <MessageCircle size={20} aria-hidden="true" className="group-hover:rotate-12 transition-transform" />
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
