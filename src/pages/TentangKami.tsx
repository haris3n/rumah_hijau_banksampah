import { useEffect } from 'react';
import { Compass, Target, CheckCircle2, Award, Calendar, MapPin, Users, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';
import aboutActivityImg from '../assets/about-activity.jpg';

export default function TentangKami() {
  const visiSection = useIntersection(0.2);
  const sejarahSection = useIntersection(0.2);
  const pengurusSection = useIntersection(0.2);
  const nilaiSection = useIntersection(0.2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-850" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-200 text-xs font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
            <Users className="w-3.5 h-3.5" />
            Profil Organisasi
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            Tentang Kami
          </h1>
          <p className="text-primary-100/80 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Mengenal lebih dekat Bank Sampah Rumah Hijau Indramayu — pelopor pengelolaan sampah terintegrasi berbasis partisipasi warga di Kabupaten Indramayu.
          </p>
        </div>
      </section>

      {/* Sejarah & Cerita */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div ref={sejarahSection.ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`${sejarahSection.visible ? 'animate-slide-in-left' : ''}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5 text-primary-600" />
                Sejarah Singkat
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                Perjalanan Membangun Lingkungan Bersih{' '}
                <span className="text-primary-700 underline decoration-secondary-400 decoration-wavy decoration-2">Rumah Hijau</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Bank Sampah Rumah Hijau Indramayu didirikan sebagai respon nyata atas timbunan sampah rumah tangga di lingkungan pemukiman. Berawal dari inisiatif kelompok peduli lingkungan yang menyadari bahwa sebagian besar sampah masih bernilai ekonomis tinggi jika dipilah sejak dari sumbernya.
                </p>
                <p>
                  Melalui pendekatan edukatif dan kekeluargaan, Rumah Hijau perlahan merangkul ratusan nasabah, khususnya kalangan ibu rumah tangga dan pemuda lokal, untuk bersama-sama mengonversi sampah anorganik menjadi tabungan riil dan kerajinan bernilai guna.
                </p>
                <p>
                  Hingga kini, Rumah Hijau terus dipercaya dengan rating sempurna 5.0 dari ulasan publik Google Maps, menjadi wadah kolaboratif yang menggabungkan kesadaran ekologis dan kemandirian ekonomi masyarakat.
                </p>
              </div>

              {/* Quick stats mini */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-surface-border">
                <div className="p-4 rounded-2xl bg-surface-dim border border-surface-border">
                  <div className="font-heading text-2xl font-bold text-primary-800">5.0 / 5.0</div>
                  <div className="text-xs text-text-muted mt-0.5">Rating Kepuasan Komunitas</div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-dim border border-surface-border">
                  <div className="font-heading text-2xl font-bold text-primary-800">100%</div>
                  <div className="text-xs text-text-muted mt-0.5">Berbasis Pemberdayaan Warga</div>
                </div>
              </div>
            </div>

            <div className={`${sejarahSection.visible ? 'animate-slide-in-right delay-200' : ''}`}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-950/10 border border-primary-200/50 aspect-[4/3] bg-surface-dim">
                  <img 
                    src={aboutActivityImg} 
                    alt="Aktivitas Penimbangan dan Penyetoran di Bank Sampah Rumah Hijau" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-primary-150 animate-float hidden sm:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary-950 text-sm">Gerakan Kolaboratif</p>
                    <p className="text-xs text-text-muted">Untuk Indramayu yang Lebih Hijau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section-padding bg-surface-dim relative">
        <div ref={visiSection.ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-primary-700" />
              Visi & Misi
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              Tujuan & Arah Pengabdian Kami
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 ${visiSection.visible ? 'animate-fade-in-up' : ''}`}>
            {/* Visi */}
            <div className="bg-gradient-to-br from-primary-800 to-primary-950 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7 text-secondary-300" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">Visi Organisasi</h3>
                <p className="text-primary-100/90 text-lg leading-relaxed">
                  Menjadi pusat edukasi dan pengelolaan sampah komunitas percontohan di Indramayu yang mewujudkan lingkungan bebas timbunan liar, berbudaya daur ulang, dan mandiri secara ekonomi.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary-400" />
                <span className="text-xs text-primary-200">Komitmen Berkelanjutan untuk Masa Depan Bumi</span>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-surface-border">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-6 border border-primary-100">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">Misi Utama</h3>
              <ul className="space-y-3.5" role="list">
                {[
                  'Mengedukasi masyarakat secara konsisten mengenai pemilahan sampah organik & anorganik sejak dari rumah tangga.',
                  'Menyediakan sistem penimbangan dan tabungan sampah yang adil, transparan, dan tercatat rapi.',
                  'Mendorong ekonomi sirkular lokal melalui daur ulang kreatif serta kemitraan pengolahan resmi.',
                  'Membangun jejaring kolaborasi bersama pengurus RT/RW, pegiat lingkungan, dan pemerintah daerah.',
                  'Menumbuhkan kesadaran kolektif generasi muda demi kelestarian pesisir dan daratan Indramayu.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama */}
      <section className="section-padding bg-surface">
        <div ref={nilaiSection.ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-100 text-secondary-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-secondary-700" />
              Nilai Inti
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Prinsip yang Selalu Kami Pegang
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Fondasi yang memandu setiap layanan dan interaksi Rumah Hijau bersama masyarakat.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${nilaiSection.visible ? 'animate-fade-in-up' : ''}`}>
            {[
              { title: 'Transparansi', desc: 'Timbangan terbuka dengan catatan buku tabungan yang akurat dan jelas bagi setiap nasabah.', icon: ShieldCheck },
              { title: 'Pemberdayaan', desc: 'Mengutamakan keterlibatan ibu rumah tangga dan kelompok warga setempat.', icon: Users },
              { title: 'Dampak Nyata', desc: 'Fokus pada pengurangan volume sampah residu yang dibuang ke TPA setempat.', icon: Target },
              { title: 'Gotong Royong', desc: 'Semangat kekeluargaan dalam menjaga kebersihan lingkungan bersama.', icon: HeartHandshake },
            ].map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-surface-dim border border-surface-border hover:border-primary-300 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pengurus */}
      <section className="section-padding bg-surface-dim relative">
        <div ref={pengurusSection.ref} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-primary-700" />
              Penggerak Komunitas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Struktur Kepengurusan
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Relawan dan pengelola di balik operasional Bank Sampah Rumah Hijau Indramayu
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${pengurusSection.visible ? 'animate-fade-in-up' : ''}`}>
            {[
              { name: 'Hj. Siti Aisyah', role: 'Ketua Pengurus', initial: 'SA' },
              { name: 'Ahmad Fauzi', role: 'Wakil Ketua & Operasional', initial: 'AF' },
              { name: 'Dewi Rahayu', role: 'Sekretaris & Edukasi', initial: 'DR' },
              { name: 'Budi Santoso', role: 'Bendahara & Pemasaran', initial: 'BS' },
            ].map((person, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:shadow-primary-900/10 border border-surface-border hover:border-primary-300 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white font-heading font-black text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {person.initial}
                </div>
                <h3 className="font-heading font-bold text-text-primary mb-1">{person.name}</h3>
                <p className="text-primary-700 text-xs font-semibold">{person.role}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-xs mt-8 italic">
            * Data perwakilan kepengurusan Rumah Hijau Indramayu.
          </p>
        </div>
      </section>

      {/* Peta Lokasi */}
      <section className="section-padding bg-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-primary-700" />
              Lokasi Titik Kumpul
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Kunjungi Bank Sampah Kami
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              GLAYEM Village No.25-26, Sindang, Kec. Sindang, Kabupaten Indramayu, Jawa Barat 45222
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-surface-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.886!2d108.3232!3d-6.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb9c57a70b0ed%3A0x74f0c0e0daa94b55!2sBank%20Sampah%20Rumah%20Hijau%20Indramayu!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Bank Sampah Rumah Hijau Indramayu di Google Maps"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
