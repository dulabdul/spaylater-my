// Import tipe data yang baru kita buat
import { NavLink, HeroContent, ServiceItem, TestimonialItem } from '@/types';

export const NAVIGATION_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#services", label: "Layanan" },
  { href: "#features", label: "Keunggulan" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=+601172509994&text=Halo+Admin%2C+saya+nak+cashout&type=phone_number&app_absent=0";

export const HERO_CONTENT: HeroContent = {
  headline: "Tukar Limit ShopeePay Later Anda Jadi Tunai Dalam Beberapa Minit",
  description: "Perlu wang segera tanpa proses yang panjang? Kami sedia membantu anda mencairkan limit SPayLater, Boost PayFlex, dan Grab PayLater dengan cara yang selamat, cepat, dan telus.",
  cta: "Cairkan Sekarang!"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "ShopeePay Later (SPayLater)",
    desc: "Cairkan limit SPayLater anda pada bila-bila masa dengan proses ringkas serta panduan daripada pasukan berpengalaman."
  },
  {
    title: "Boost PayFlex",
    desc: "Tukar limit Boost PayFlex anda kepada tunai dengan sistem yang selamat dan efisien."
  },
  {
    title: "Grab PayLater",
    desc: "Pencairan limit Grab PayLater tanpa kerenah, tanpa menunggu lama, dan terus diproses."
  }
];

export const FEATURES: string[] = [
  "Proses Sangat Pantas – Tunai terus masuk dalam beberapa minit.",
  "Selamat & Telus – Transaksi jelas tanpa caj tersembunyi.",
  "Bimbingan Penuh – CS akan membantu hingga transaksi selesai.",
  "Rate Mesra Pelanggan – Kadar kompetitif dan berbaloi.",
  "Privasi Terjamin – Data anda 100% selamat dan tidak dikongsi.",
  "Sedia 24/7 – Bantuan bila-bila masa anda perlukan."
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    // Menggunakan placeholder ukuran 720x1280 (Ukuran HD Portrait HP)
    image: "/testimoni1.jpg",
    caption: "Sukses Cair Shopee PayLater"
  },
  {
    id: 2,
    image: "/testimoni2.jpg",
    caption: "Proses Cepat Boost PayFlex"
  },
  {
    id: 3,
    image: "/testimoni3.jpg",
    caption: "Dana Masuk Shoppe PayLater"
  }
];
