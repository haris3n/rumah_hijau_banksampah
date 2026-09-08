import { useEffect } from 'react';
import { Layers, Home, Scale, Wallet, ShirtIcon, BatteryCharging, GlassWater, Newspaper, Package, Clock } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';

const jenissampah = [
  { icon: Package,        name: 'Plastik',        desc: 'Botol, gelas, kemasan, kantong plastik, dan sejenisnya.', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { icon: Newspaper,      name: 'Kertas & Kardus', desc: 'Koran, majalah, kardus bekas, buku tulis, dan sejenisnya.', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { icon: Layers,         name: 'Logam',           desc: 'Kaleng aluminium, besi, tembaga, kuningan, dan sejenisnya.', color: 'bg-slate-50 text-slate-600 border-slate-200' },
  { icon: GlassWater,     name: 'Kaca',            desc: 'Botol kaca, toples, pecahan kaca bersih, dan sejenisnya.', color: 'bg-teal-50 text-teal-600 border-teal-200' },
  { icon: BatteryCharging, name: 'Elektronik',     desc: 'Baterai bekas, kabel, komponen elektronik kecil, dan sejenisnya.', color: 'bg-red-50 text-red-600 border-red-200' },
  { icon: ShirtIcon,      name: 'Tekstil',         desc: 'Pakaian bekas layak, kain perca, sepatu, dan sejenisnya.', color: 'bg-purple-50 text-purple-600 border-purple-200' },
];

const alurSteps = [
  { icon: Layers,  step: 1, title: 'Pilah Sampah',         desc: 'Pisahkan sampah berdasarkan jenisnya: plastik, kertas, logam, kaca, dan lainnya.' },
  { icon: Home,    step: 2, title: 'Setor ke Bank Sampah', desc: 'Bawa sampah terpilah ke Bank Sampah Rumah Hijau sesuai jadwal operasional.' },
  { icon: Scale,   step: 3, title: 'Penimbangan',          desc: 'Petugas menimbang, mencatat jenis, dan menghitung berat sampah Anda.' },
  { icon: Wallet,  step: 4, title: 'Konversi Nilai',       desc: 'Sampah dikonversi menjadi saldo tabungan berdasarkan harga per kg setiap jenis.' },
];

const schedule = [
  { day: 'Senin',  time: '08.00 – 12.00', open: true },
  { day: 'Selasa', time: '08.00 – 12.00', open: true },
  { day: 'Rabu',   time: '08.00 – 12.00', open: true },
  { day: 'Kamis',  time: '08.00 – 12.00', open: true },
  { day: 'Jumat',  time: '08.00 – 11.00', open: true },
  { day: 'Sabtu',  time: '08.00 – 12.00', open: true },
  { day: 'Minggu', time: 'Tutup',          open: false },
];

const syarat = [
  'Warga Kabupaten Indramayu atau sekitarnya.',
  'Mengisi formulir pendaftaran nasabah.',
  'Menyerahkan fotokopi KTP/identitas diri.',
  'Bersedia memilah sampah sebelum menyetor.',
  'Menyetorkan sampah minimal 1 kali dalam sebulan.',
];

const caraBergabung = [
  { step: '1', title: 'Datang ke Lokasi',      desc: 'Kunjungi Bank Sampah Rumah Hijau di GLAYEM Village No.25-26, Sindang, Indramayu.' },
  { step: '2', title: 'Isi Formulir',           desc: 'Lengkapi formulir pendaftaran nasabah baru dengan data diri yang valid.' },
  { step: '3', title: 'Dapatkan Buku Tabungan', desc: 'Setelah terdaftar, Anda mendapat buku tabungan sampah sebagai bukti kepesertaan.' },
  { step: '4', title: 'Mulai Menabung',         desc: 'Kumpulkan dan setorkan sampah terpilah secara rutin sesuai jadwal.' },
];

export default function Layanan() {
  const alurSection  = useIntersection();
  const jenisSection = useIntersection();
  const syaratSection = useIntersection();
  const jadwalSection = useIntersection();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* ═══════ Page Header ═══════ */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Layanan Bank Sampah">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900" />
        {/* Mesh pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-900/30 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
            Layanan
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            Cara Kerja Bank Sampah
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Pelajari bagaimana Bank Sampah Rumah Hijau bekerja — dari penyetoran sampah hingga konversi menjadi nilai ekonomi nyata.
          </p>
        </div>
      </section>

      {/* ═══════ Alur Proses ═══════ */}
      <section className="section-padding bg-surface relative overflow-hidden" aria-label="Alur proses bank sampah">
        <div ref={alurSection.ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Alur Proses
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">Dari Sampah Menjadi Nilai</h2>
            <p className="text-text-secondary max-w-xl mx-auto">4 langkah mudah untuk mulai berkontribusi dalam pengelolaan sampah</p>
          </div>

          <div className={`relative ${alurSection.visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Connection line desktop */}
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300" aria-hidden="true" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {alurSteps.map(({ icon: Icon, step, title, desc }, i) => (
                <div key={step} className="relative group text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Step circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-heading font-black text-xl" aria-label={`Langkah ${step}`}>{step}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border-soft hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-400 card-lift">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                      <Icon size={20} aria-hidden="true" className="text-primary-600" />
                    </div>
                    <h3 className="font-heading font-bold text-text-primary mb-2">{title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Jenis Sampah ═══════ */}
      <section className="section-padding bg-surface-dim relative" aria-label="Jenis sampah yang diterima">
        <div ref={jenisSection.ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Jenis Sampah
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">Sampah yang Kami Terima</h2>
            <p className="text-text-secondary max-w-xl mx-auto">Berbagai jenis sampah yang dapat Anda setorkan ke Bank Sampah Rumah Hijau</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {jenissampah.map(({ icon: Icon, name, desc, color }, i) => (
              <div
                key={name}
                className={`group bg-white rounded-2xl p-5 shadow-sm border border-border-soft hover:border-primary-200 card-lift cursor-default ${
                  jenisSection.visible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${color}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-primary mb-1">{name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Syarat & Cara Bergabung ═══════ */}
      <section className="section-padding bg-surface relative" aria-label="Syarat dan cara menjadi nasabah">
        <div ref={syaratSection.ref} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Syarat */}
            <div className={syaratSection.visible ? 'animate-slide-in-left' : 'opacity-0'}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                Persyaratan
              </span>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Syarat Menjadi Nasabah</h2>
              <div className="space-y-3">
                {syarat.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-border-soft">
                    <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-700 font-heading font-bold text-xs">{i + 1}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cara Bergabung */}
            <div className={syaratSection.visible ? 'animate-slide-in-right delay-200' : 'opacity-0'}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                Langkah Mudah
              </span>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Cara Bergabung</h2>
              <div className="space-y-6">
                {caraBergabung.map(({ step, title, desc }, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center text-white font-heading font-bold text-sm shadow-md shadow-secondary-500/25 flex-shrink-0">
                        {step}
                      </div>
                      {i < caraBergabung.length - 1 && (
                        <div className="w-px flex-1 bg-secondary-100 mt-2" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-heading font-bold text-text-primary mb-1">{title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Jadwal Operasional ═══════ */}
      <section className="section-padding bg-surface-dim relative" aria-label="Jadwal operasional bank sampah">
        <div ref={jadwalSection.ref} className={`max-w-2xl mx-auto ${jadwalSection.visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Jadwal
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">Jadwal Operasional</h2>
            <p className="text-text-secondary max-w-xl mx-auto">Waktu penyetoran sampah di Bank Sampah Rumah Hijau</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg shadow-primary-900/5 border border-border-soft overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-5 flex items-center justify-center gap-3">
              <Clock size={20} aria-hidden="true" className="text-white/80" />
              <h3 className="text-white font-heading font-bold text-lg">Jam Operasional</h3>
            </div>
            {/* Schedule rows */}
            <div className="p-5">
              <div className="space-y-2" role="list" aria-label="Jadwal hari operasional">
                {schedule.map(({ day, time, open }) => (
                  <div
                    key={day}
                    role="listitem"
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                      open ? 'bg-primary-50/40 hover:bg-primary-50/70' : 'bg-gray-50'
                    }`}
                  >
                    <span className={`font-medium text-sm ${open ? 'text-text-primary' : 'text-text-muted'}`}>
                      {day}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${
                      open ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-600'
                    }`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-text-muted text-xs mt-5 italic">
                * Jadwal dapat berubah sewaktu-waktu. Hubungi kami untuk konfirmasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
