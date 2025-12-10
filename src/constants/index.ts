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

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=+601124194932&text=Halo+Admin%2C+saya+nak+cashout&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/cashoutby.sakinah?igsh=OWRrbWVmNWF6c3Bs";

export const HERO_CONTENT: HeroContent = {
  headline: "SPAYLATER BOOSTPAYFLEX",
  description: "CASHOUT KILAT, TAK PERLU MENUNGGU! Ada limit PayLater dalam SPayLater, Boost, dan Grab? Nak tukar jadi tunai?",
  cta: "Cairkan Sekarang!"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "ShopeePay Later (SPayLater)",
    desc: "Cairkan limit SPayLater anda pada bila-bila masa dengan proses yang pantas serta panduan lengkap daripada pasukan kami."
  },
  {
    title: "Boost PayFlex",
    desc: "Tukar limit Boost PayFlex anda kepada wang tunai dengan cara yang selamat dan efisien."
  },
  {
    title: "Grab PayLater",
    desc: "Nikmati perkhidmatan pencairan limit Grab PayLater tanpa sebarang halangan dan tanpa perlu menunggu lama."
  }
];

export const FEATURES: string[] = [
  "Proses Pantas – Wang cair hanya dalam beberapa minit.",
  "Selamat & Dipercayai – Sistem transaksi yang jelas tanpa caj tersembunyi.",
  "Panduan Langkah demi Langkah – Dibantu oleh CS sehingga transaksi berjaya.",
  "Kadar Terbaik – Kadar yang kompetitif dan mesra pelanggan.",
  "Privasi Terpelihara – Data anda selamat dan tidak dikongsi kepada pihak lain.",
  "Perkhidmatan 24/7 – Kami sedia membantu pada bila-bila masa anda perlukan."
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
