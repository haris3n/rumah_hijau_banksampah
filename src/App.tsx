import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import TentangKami from './pages/TentangKami';
import Layanan from './pages/Layanan';
import Galeri from './pages/Galeri';
import Testimoni from './pages/Testimoni';
import Kontak from './pages/Kontak';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fafdf7] text-[#1a2e12] font-body selection:bg-emerald-200 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<TentangKami />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/testimoni" element={<Testimoni />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="*" element={<Beranda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
