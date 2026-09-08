import { useEffect } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink, ThumbsUp, Award } from 'lucide-react';
import { useIntersection } from '../hooks/useIntersection';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  date: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ibu Siti Nurhaliza',
    role: 'Nasabah Aktif RT 04',
    rating: 5,
    text: 'Sejak ikut bergabung di Bank Sampah Rumah Hijau, saya jadi rajin memilah sampah dari dapur. Selain lingkungan rumah jadi bersih dari bau sampah, tabungan sampah saya juga bisa dipakai untuk keperluan belanja bulanan.',
    initials: 'SN',
    date: '3 minggu lalu',
    verified: true,
  },
  {
    name: 'Bapak Hendra Wijaya',
    role: 'Nasabah Sejak 2020',
    rating: 5,
    text: 'Program bank sampah ini sangat membantu perekonomian warga. Kardus dan botol plastik yang dulunya terbuang sia-sia ternyata memiliki nilai jual yang lumayan jika dikumpulkan secara kolektif.',
    initials: 'HW',
    date: '1 bulan lalu',
    verified: true,
  },
  {
    name: 'Ibu Ratna Dewi',
    role: 'Ketua Penggerak PKK',
    rating: 5,
    text: 'Warga di lingkungan kami sangat antusias. Kolaborasi dengan tim Rumah Hijau selalu lancar, timbangannya adil dan pengurusnya selalu mengedukasi warga dengan sabar.',
    initials: 'RD',
    date: '2 bulan lalu',
    verified: true,
  },
  {
    name: 'Pak Ahmad Subari',
    role: 'Mitra Pengepul Daur Ulang',
    rating: 5,
    text: 'Kerjasama dengan Bank Sampah Rumah Hijau sangat profesional. Material yang disalurkan sudah terpilah rapi sesuai spesifikasi pabrik daur ulang, memudahkan logistik dan pengolahan lanjutan.',
    initials: 'AS',
    date: '3 bulan lalu',
    verified: true,
  },
  {
    name: 'Dina Amelia',
    role: 'Relawan Lingkungan Muda',
    rating: 5,
    text: 'Rumah Hijau adalah bukti nyata bahwa circular economy bisa berjalan nyata di tingkat desa. Sangat menginspirasi anak-anak muda Indramayu untuk lebih peduli lingkungan.',
    initials: 'DA',
    date: '3 bulan lalu',
    verified: true,
  },
  {
    name: 'Ibu Yuliana',
    role: 'Nasabah Komunitas Sindang',
    rating: 5,
    text: 'Sistem buku tabungannya jelas dan transparan. Uang tabungan bisa diambil sewaktu-waktu saat anak butuh perlengkapan sekolah. Berkah sekali ada bank sampah ini.',
    initials: 'YU',
    date: '4 bulan lalu',
    verified: true,
  },
  {
    name: 'Bapak Dedi Kurniawan',
    role: 'Tokoh Komunitas',
    rating: 5,
    text: 'Sangat mengapresiasi dedikasi pengurus Rumah Hijau. Selama bertahun-tahun konsisten tanpa lelah menggerakkan warga agar sadar kebersihan dan lingkungan sehat.',
    initials: 'DK',
    date: '5 bulan lalu',
    verified: true,
  },
  {
    name: 'Ibu Wati Suryani',
    role: 'Nasabah Aktif',
    rating: 5,
    text: 'Pelayanannya ramah, lokasi mudah dijangkau, dan jadwal penimbangan selalu teratur. Kami ibu-ibu selalu menunggu jadwal setoran dengan semangat!',
    initials: 'WS',
    date: '6 bulan lalu',
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-surface-border'}`}
        />
      ))}
    </div>
  );
}

export default function Testimoni() {
  const gridSection = useIntersection(0.1);

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
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Suara Nasabah & Mitra
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            Kata Mereka
          </h1>
          <p className="text-primary-100/80 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Pengalaman nyata nasabah, warga, dan mitra yang tumbuh bersama Bank Sampah Rumah Hijau Indramayu.
          </p>

          {/* Social Proof Badge */}
          <div className="animate-fade-in-up delay-300 mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3.5 border border-white/20 text-white">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="font-heading font-bold text-xl">5.0 / 5.0</span>
            <span className="text-white/40">|</span>
            <span className="text-white/90 text-sm font-medium">Berdasarkan ulasan terverifikasi Google Maps</span>
          </div>
        </div>
      </section>

      {/* Highlights Metric */}
      <section className="bg-surface-dim border-b border-surface-border py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="font-heading text-3xl font-black text-primary-800">100%</div>
              <div className="text-xs text-text-muted mt-1 font-medium">Ulasan Positif</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-black text-primary-800">5.0 ★</div>
              <div className="text-xs text-text-muted mt-1 font-medium">Skor Sempurna Google</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-black text-primary-800">500+</div>
              <div className="text-xs text-text-muted mt-1 font-medium">Keluarga Terlayani</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-black text-primary-800">100%</div>
              <div className="text-xs text-text-muted mt-1 font-medium">Transparansi Timbangan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div ref={gridSection.ref} className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary-600" />
              <span className="font-heading font-bold text-text-primary text-lg">Semua Ulasan</span>
            </div>
            <span className="text-xs text-text-muted font-medium">
              Menampilkan {testimonials.length} testimoni
            </span>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${gridSection.visible ? '' : 'opacity-0'}`}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-950/10 border border-surface-border hover:border-primary-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  gridSection.visible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={t.rating} />
                    <span className="text-[11px] text-text-muted">{t.date}</span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 font-heading font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-heading font-bold text-text-primary text-sm truncate">{t.name}</h4>
                      {t.verified && (
                        <span title="Nasabah Terverifikasi" className="inline-flex">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary-600 flex-shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="text-text-muted text-xs truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Google Review */}
      <section className="section-padding bg-surface-dim border-t border-surface-border relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-800 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ThumbsUp className="w-8 h-8 text-primary-700" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Punya Pengalaman Bersama Rumah Hijau?
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 leading-relaxed">
            Ulasan dan saran dari Anda sangat berarti untuk memotivasi sesama warga dan meningkatkan mutu layanan bank sampah kami.
          </p>
          <a
            href="https://g.page/r/CY9K9dqeDgBuEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-base shadow-lg shadow-primary-700/25 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer min-h-[48px]"
          >
            Tulis Ulasan di Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
