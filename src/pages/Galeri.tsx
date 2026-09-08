import { useEffect, useState } from 'react';
import { Camera, X, ZoomIn, Calendar, Tag, CheckCircle2 } from 'lucide-react';
import galeri1 from '../assets/galeri-1.jpg';
import galeri2 from '../assets/galeri-2.jpg';
import galeri3 from '../assets/galeri-3.jpg';
import aboutActivity from '../assets/about-activity.jpg';
import heroCommunity from '../assets/hero-community.jpg';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Kegiatan' | 'Hasil Olahan' | 'Edukasi' | 'Penimbangan';
  date: string;
  desc: string;
  image: string;
  location: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Pilah Sampah Komunitas Bersama Warga',
    category: 'Kegiatan',
    date: 'Setiap Minggu',
    desc: 'Warga secara antusias memisahkan jenis botol plastik, kertas karton, dan kaleng logam sebelum disetor ke timbangan.',
    image: heroCommunity,
    location: 'Area Terbuka Indramayu',
  },
  {
    id: 2,
    title: 'Penimbangan Digital & Pencatatan Buku Tabungan',
    category: 'Penimbangan',
    date: 'Operasional Rutin',
    desc: 'Pengukuran akurat menggunakan timbangan gantung digital bersertifikat dan langsung dicatat ke saldo tabungan nasabah.',
    image: galeri2,
    location: 'Gudang Penyetoran Rumah Hijau',
  },
  {
    id: 3,
    title: 'Kreasi Produk Daur Ulang Bernilai Tambah',
    category: 'Hasil Olahan',
    date: 'Karya Binaan',
    desc: 'Produk kerajinan tangan bernilai jual seperti tas jinjing, anyaman, wadah tanaman, dan ornamen dekoratif ramah lingkungan.',
    image: galeri3,
    location: 'Workshop Kreatif Rumah Hijau',
  },
  {
    id: 4,
    title: 'Penyortiran Presisi Berdasarkan Kategori Sampah',
    category: 'Kegiatan',
    date: 'Setiap Sesi',
    desc: 'Proses pengelompokan sampah anorganik berdasarkan jenis plastik (PET, HDPE, LDPE) demi memudahkan proses daur ulang industri.',
    image: galeri1,
    location: 'Sentra Pemilahan',
  },
  {
    id: 5,
    title: 'Sosialisasi & Edukasi Lingkungan ke Keluarga',
    category: 'Edukasi',
    date: 'Bulan Berjalan',
    desc: 'Pemberdayaan dan pelatihan pemilahan sampah mandiri dari tingkat dapur rumah tangga bersama kader PKK setempat.',
    image: aboutActivity,
    location: 'Balai Warga Sindang',
  },
];

const categories = ['Semua', 'Kegiatan', 'Penimbangan', 'Hasil Olahan', 'Edukasi'] as const;

export default function Galeri() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle ESC key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems = activeCategory === 'Semua'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

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
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-200 text-xs font-semibold uppercase tracking-wider mb-4 animate-fade-in-up">
            <Camera className="w-3.5 h-3.5" />
            Dokumentasi Kegiatan
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            Galeri Rumah Hijau
          </h1>
          <p className="text-primary-100/80 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Potret nyata kebersamaan dan aksi pelestarian lingkungan bersama masyarakat di Indramayu.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12" role="tablist" aria-label="Filter Kategori Galeri">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 min-h-[44px] cursor-pointer ${
                    isActive
                      ? 'bg-primary-700 text-white shadow-md shadow-primary-700/25 scale-105'
                      : 'bg-surface-dim text-text-secondary hover:text-primary-800 hover:bg-primary-50 border border-surface-border'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid of Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group bg-white rounded-3xl overflow-hidden border border-surface-border shadow-sm hover:shadow-xl hover:shadow-primary-950/10 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(item); }}
                aria-label={`Lihat foto ${item.title}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-surface-dim overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Klik untuk perbesar
                    </span>
                    <span className="text-xs text-white/80">{item.location}</span>
                  </div>
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-900 shadow-sm">
                      <Tag className="w-3 h-3 text-primary-600" />
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                      <Calendar className="w-3.5 h-3.5 text-primary-600" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary-700 transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-semibold text-primary-700">
                    <span>Dokumentasi Resmi</span>
                    <span className="inline-flex items-center gap-1 text-primary-600 group-hover:translate-x-1 transition-transform">
                      Detail <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-base">Belum ada foto dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          data-testid="gallery-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup pratinjau foto"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full max-h-[50vh] md:max-h-[85vh] object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-800 mb-4">
                  <Tag className="w-3 h-3" />
                  {selectedPhoto.category}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {selectedPhoto.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {selectedPhoto.desc}
                </p>

                <div className="space-y-3 py-4 border-t border-b border-surface-border text-xs text-text-muted">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-secondary">Waktu Kegiatan:</span>
                    <span>{selectedPhoto.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-secondary">Lokasi:</span>
                    <span>{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-secondary">Penyelenggara:</span>
                    <span className="text-primary-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Rumah Hijau
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="w-full py-3 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Tutup Pratinjau
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
