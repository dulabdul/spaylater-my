// Definisi tipe data untuk Menu Navigasi
export interface NavLink {
  href: string;
  label: string;
}

// Definisi tipe data untuk konten Hero
export interface HeroContent {
  headline: string;
  description: string;
  cta: string;
}

// Definisi tipe data untuk Layanan (Service)
export interface ServiceItem {
  title: string;
  desc: string;
}

export interface TestimonialItem {
  id: number;
  image: string; // URL gambar screenshot WA
  caption?: string; // (Opsional) Keterangan singkat, misal: "Cair 5 Juta via SPayLater"
}