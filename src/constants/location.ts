/**
 * Konfigurasi Lokasi & Koordinat Resmi Bank Sampah Rumah Hijau Indramayu
 * Single Source of Truth (SSOT) untuk peta, link profil Google Maps, dan rute navigasi.
 */

export const LOCATION_CONFIG = {
  name: 'BANK SAMPAH RUMAH HIJAU INDRAMAYU',
  fullAddress: 'GLAYEM VILLAGE No.25-26, Sindang, Kec. Sindang, Kabupaten Indramayu, Jawa Barat 45222',
  shortAddress: 'GLAYEM Village No.25-26, Sindang, Indramayu, Jawa Barat',
  // Titik koordinat presisi resmi Google Maps
  coordinates: {
    lat: -6.3274202,
    lng: 108.3141167,
  },
  // Link langsung membuka profil Bank Sampah Rumah Hijau di Google Maps
  mapsDirectUrl: 'https://www.google.com/maps/place/BANK+SAMPAH+RUMAH+HIJAU+INDRAMAYU/@-6.3274202,108.3141167,17z/data=!4m6!3m5!1s0x2e6ebd301900383b:0xb9609cb897e0d821!8m2!3d-6.3274202!4d108.3141167!16s%2Fg%2F11yr88337h',
  // Link langsung rute navigasi (Directions) ke titik lokasi Bank Sampah Rumah Hijau
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=BANK+SAMPAH+RUMAH+HIJAU+INDRAMAYU&destination_place_id=0x2e6ebd301900383b:0xb9609cb897e0d821',
  // URL iframe embed resmi Google Maps untuk profil tempat terverifikasi
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.013!2d108.3141167!3d-6.3274202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ebd301900383b%3A0xb9609cb897e0d821!2sBANK%20SAMPAH%20RUMAH%20HIJAU%20INDRAMAYU!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid',
  // Link untuk melihat / menulis ulasan Google Maps
  mapsReviewsUrl: 'https://www.google.com/maps/place/BANK+SAMPAH+RUMAH+HIJAU+INDRAMAYU/@-6.3274202,108.3141167,17z/data=!4m8!3m7!1s0x2e6ebd301900383b:0xb9609cb897e0d821!8m2!3d-6.3274202!4d108.3141167!9m1!1b1!16s%2Fg%2F11yr88337h',
};
