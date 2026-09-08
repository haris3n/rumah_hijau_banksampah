import { Link } from 'react-router-dom';
import { Recycle, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

const quickLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/tentang', label: 'Tentang Kami' },
  { path: '/layanan', label: 'Layanan' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/testimoni', label: 'Testimoni' },
  { path: '/kontak', label: 'Kontak' },
];

const socials = [
  { label: 'Instagram Bank Sampah Rumah Hijau', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Facebook Bank Sampah Rumah Hijau', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'YouTube Bank Sampah Rumah Hijau', href: 'https://youtube.com', icon: YoutubeIcon },
];

const contactItems = [
  {
    icon: MapPin,
    label: 'Alamat',
    text: 'GLAYEM Village No.25-26, Sindang, Indramayu, Jawa Barat',
  },
  {
    icon: Phone,
    label: 'Telepon / WhatsApp',
    text: '+62 812-3456-7890',
  },
  {
    icon: Mail,
    label: 'Email',
    text: 'info@rumahhijau-indramayu.id',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-primary-900 via-primary-950 to-[#021a12] text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Organic wave separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 56L60 49C120 42 240 28 360 21C480 14 600 14 720 18.7C840 23.3 960 32.7 1080 36.2C1200 39.7 1320 37.3 1380 36.2L1440 35V56H0Z" fill="#064e3b"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group cursor-pointer" aria-label="Beranda Bank Sampah Rumah Hijau">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                <Recycle size={24} aria-hidden="true" className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">Rumah Hijau</h3>
                <p className="text-xs text-primary-300 tracking-widest uppercase">Bank Sampah Indramayu</p>
              </div>
            </Link>
            <p className="text-primary-300/80 text-sm leading-relaxed mb-6">
              Pelopor bank sampah berbasis komunitas di Kabupaten Indramayu. Ubah sampah menjadi berkah untuk lingkungan dan kesejahteraan.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-primary-800/60 border border-primary-700/40 flex items-center justify-center text-primary-300 hover:text-white hover:bg-primary-700 hover:border-primary-500 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-primary-300/80 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500 group-hover:w-2 transition-all duration-200" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Hours */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Jam Operasional</h4>
            <ul className="space-y-2">
              {[
                { day: 'Senin – Jumat', time: '08.00 – 12.00' },
                { day: 'Sabtu', time: '08.00 – 12.00' },
                { day: 'Minggu', time: 'Tutup', closed: true },
              ].map(({ day, time, closed }) => (
                <li key={day} className="flex justify-between items-center text-sm py-2 border-b border-primary-800/50">
                  <span className="text-primary-300/80">{day}</span>
                  <span className={`font-medium text-xs px-2.5 py-1 rounded-full ${
                    closed
                      ? 'bg-red-900/40 text-red-300'
                      : 'bg-primary-800/50 text-primary-200'
                  }`}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, text }) => (
                <li key={label} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary-800/50 border border-primary-700/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-700/50 transition-colors duration-200">
                    <Icon size={14} aria-hidden="true" className="text-primary-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-primary-500 uppercase tracking-wider font-medium block">{label}</span>
                    <span className="text-primary-200/80 text-sm leading-snug">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-400/70 text-xs text-center sm:text-left">
            &copy; {year} Bank Sampah Rumah Hijau Indramayu. Semua hak dilindungi.
          </p>
          <p className="text-primary-400/70 text-xs flex items-center gap-1.5">
            Dibuat dengan <Heart size={12} aria-hidden="true" className="text-red-400 fill-red-400" /> untuk lingkungan yang lebih bersih
          </p>
        </div>
      </div>
    </footer>
  );
}
