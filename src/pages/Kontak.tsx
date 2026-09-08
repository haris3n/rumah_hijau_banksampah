import { useEffect, useState, type FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  ArrowRight 
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/SocialIcons';
import { useIntersection } from '../hooks/useIntersection';

export default function Kontak() {
  const formSection = useIntersection(0.15);
  const [formData, setFormData] = useState({ nama: '', hp: '', pesan: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check for spam
    if (formData.honeypot) return;

    // Compose WhatsApp message
    const message = encodeURIComponent(
      `Halo Bank Sampah Rumah Hijau Indramayu! 🌿\n\nNama: ${formData.nama}\nNo. HP: ${formData.hp}\nPesan: ${formData.pesan}`
    );
    const waUrl = `https://wa.me/6281234567890?text=${message}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({ nama: '', hp: '', pesan: '', honeypot: '' });
      setSubmitted(false);
    }, 4000);
  };

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
            <MessageCircle className="w-3.5 h-3.5" />
            Layanan Komunikasi
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            Hubungi Kami
          </h1>
          <p className="text-primary-100/80 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
            Ingin mendaftar nasabah baru, mengundang sosialisasi pemilahan sampah, atau berkunjung? Tim pengurus Rumah Hijau siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-surface relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Alamat Posko',
                content: 'GLAYEM Village No.25-26, Sindang, Kab. Indramayu, Jawa Barat 45222',
                link: 'https://maps.google.com/?q=Bank+Sampah+Rumah+Hijau+Indramayu',
                linkText: 'Buka Petunjuk Arah',
              },
              {
                icon: Phone,
                title: 'Telepon Langsung',
                content: '+62 812-3456-7890 (Pengurus)',
                link: 'tel:+6281234567890',
                linkText: 'Panggil Sekarang',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Center',
                content: '+62 812-3456-7890 (Respon Cepat)',
                link: 'https://wa.me/6281234567890',
                linkText: 'Kirim WhatsApp',
              },
              {
                icon: Mail,
                title: 'Surat Elektronik',
                content: 'info@rumahhijau.id',
                link: 'mailto:info@rumahhijau.id',
                linkText: 'Kirim Email',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary-950/10 border border-surface-border hover:border-primary-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-primary-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-text-primary mb-2 text-base">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.content}</p>
                  </div>
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-primary-700 hover:text-primary-900 text-xs font-bold pt-3 border-t border-surface-border transition-colors group-hover:gap-2"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Form + Map */}
          <div ref={formSection.ref} className={`grid lg:grid-cols-2 gap-12 items-start ${formSection.visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-surface-border">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-800 border border-primary-200/60 text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageCircle className="w-3.5 h-3.5 text-primary-600" />
                Formulir Cepat
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-2">
                Kirim Pesan ke Pengurus
              </h2>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                Tulis nama, nomor telepon, dan kebutuhan Anda. Formulir ini otomatis menyiapkan pesan WhatsApp untuk direspons cepat oleh pengurus.
              </p>

              {submitted ? (
                <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-200 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-900 text-xl mb-2">WhatsApp Dibuka!</h3>
                  <p className="text-primary-700 text-sm">
                    Silakan selesaikan pengiriman pesan di aplikasi WhatsApp Anda. Pengurus kami akan merespons sesegera mungkin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for anti-spam */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Jangan isi bagian ini</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="nama" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="nama"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-dim border border-surface-border focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-text-primary placeholder:text-text-muted text-sm"
                      placeholder="Contoh: Ibu Rina Permata"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                      Nomor HP / WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      id="hp"
                      required
                      value={formData.hp}
                      onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-dim border border-surface-border focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-text-primary placeholder:text-text-muted text-sm"
                      placeholder="0812xxxxxxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="pesan" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                      Isi Pesan atau Pertanyaan *
                    </label>
                    <textarea
                      id="pesan"
                      required
                      rows={4}
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-dim border border-surface-border focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-text-primary placeholder:text-text-muted text-sm resize-none"
                      placeholder="Saya ingin mendaftar menjadi nasabah bank sampah..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] px-6 py-3.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm shadow-md shadow-primary-700/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Kirim Pesan Sekarang</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-text-muted text-[11px] text-center leading-relaxed">
                    Data Anda aman dan hanya digunakan untuk keperluan layanan Bank Sampah Rumah Hijau Indramayu.
                  </p>
                </form>
              )}
            </div>

            {/* Map & Operating Hours */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-primary-800 font-heading font-bold text-base">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>Peta Lokasi Google Maps</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Bank+Sampah+Rumah+Hijau+Indramayu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary-700 hover:underline flex items-center gap-1"
                  >
                    Buka App Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-inner border border-surface-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.886!2d108.3232!3d-6.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb9c57a70b0ed%3A0x74f0c0e0daa94b55!2sBank%20Sampah%20Rumah%20Hijau%20Indramayu!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi Bank Sampah Rumah Hijau Indramayu"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-border">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2 text-base">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span>Jadwal Jam Operasional Pelayanan</span>
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-surface-dim border border-surface-border flex justify-between items-center">
                    <span className="font-medium text-text-secondary">Senin - Kamis</span>
                    <span className="font-bold text-primary-800">08:00 - 12:00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-dim border border-surface-border flex justify-between items-center">
                    <span className="font-medium text-text-secondary">Jumat</span>
                    <span className="font-bold text-primary-800">08:00 - 11:00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-dim border border-surface-border flex justify-between items-center">
                    <span className="font-medium text-text-secondary">Sabtu</span>
                    <span className="font-bold text-primary-800">08:00 - 12:00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex justify-between items-center">
                    <span className="font-medium text-red-700">Minggu & Libur</span>
                    <span className="font-bold text-red-700">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-surface-dim border-t border-surface-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            Media Sosial
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Terhubung Bersama Komunitas Kami
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Dapatkan liputan kegiatan terbaru, info jadwal sosialisasi, dan edukasi lingkungan terkini di kanal resmi kami.
          </p>
          <div className="flex justify-center items-center gap-4">
            {[
              { icon: FacebookIcon, name: 'Facebook', url: 'https://facebook.com' },
              { icon: InstagramIcon, name: 'Instagram', url: 'https://instagram.com' },
              { icon: YoutubeIcon, name: 'YouTube', url: 'https://youtube.com' },
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white hover:bg-primary-700 text-primary-800 hover:text-white border border-surface-border hover:border-primary-700 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-108 transition-all duration-300"
                  aria-label={`Kunjungi halaman ${social.name} Bank Sampah Rumah Hijau`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
