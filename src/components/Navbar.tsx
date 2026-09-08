import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/tentang', label: 'Tentang Kami' },
  { path: '/layanan', label: 'Layanan' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/testimoni', label: 'Testimoni' },
  { path: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigasi utama"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary-900/8 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group cursor-pointer"
              aria-label="Bank Sampah Rumah Hijau — Beranda"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                scrolled
                  ? 'bg-gradient-to-br from-primary-600 to-secondary-600 shadow-md shadow-primary-500/30'
                  : 'bg-white/15 backdrop-blur-sm border border-white/25'
              }`}>
                <Recycle
                  size={20}
                  aria-hidden="true"
                  className={`transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`font-heading font-bold text-lg transition-colors duration-300 ${
                  scrolled ? 'text-primary-900' : 'text-white'
                }`}>
                  Rumah Hijau
                </span>
                <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-primary-600' : 'text-white/65'
                }`}>
                  Bank Sampah Indramayu
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive(path)
                      ? scrolled
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-white bg-white/15'
                      : scrolled
                        ? 'text-text-secondary hover:text-primary-700 hover:bg-primary-50/70'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary-500" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/kontak"
                className={`group flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-105 ${
                  scrolled
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md shadow-primary-500/25 hover:shadow-lg hover:shadow-primary-500/35'
                    : 'bg-white text-primary-800 shadow-md hover:shadow-lg'
                }`}
              >
                Hubungi Kami
                <ChevronRight size={14} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger — min 44×44px touch target */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
              className={`md:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
                scrolled
                  ? 'text-primary-800 hover:bg-primary-50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen
                ? <X size={22} aria-hidden="true" />
                : <Menu size={22} aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-primary-100">
            <span className="font-heading font-bold text-primary-900">Menu</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup menu"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <nav className="px-4 py-4 space-y-1">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive(path)
                    ? 'bg-primary-50 text-primary-700 font-semibold'
                    : 'text-text-secondary hover:bg-primary-50/60 hover:text-primary-700'
                }`}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {label}
                {isActive(path) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />}
              </Link>
            ))}
          </nav>

          <div className="px-6 pt-4 mt-2 border-t border-primary-100">
            <Link
              to="/kontak"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold text-sm shadow-md shadow-primary-500/25 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Hubungi Kami
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
