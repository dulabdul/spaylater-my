import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'] });

// GANTI URL INI dengan domain asli Anda nanti saat sudah deploy (misal: https://cashoutspaylater.my)
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://cashoutspaylater.my';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EE4D2D', // Warna Shopee
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      'Tukar Limit PayLater Jadi Tunai (Cairkan SPayLater) | Terpantas & Selamat',
    template: '%s | Cashout SPayLater Malaysia',
  },
  description:
    'Perkhidmatan cashout no.1 di Malaysia. Tukar limit Shopee PayLater, GrabPay & Boost PayFlex jadi wang tunai segera. Proses mudah, trusted, dan duit masuk akaun dalam 5 minit.',
  keywords: [
    'cashout shopee paylater malaysia',
    'tukar limit spaylater jadi tunai',
    'cairkan grab paylater',
    'gestun malaysia',
    'boost payflex cashout',
    'pinjaman wang segera online',
    'tukar paylater ke cash',
  ],
  authors: [{ name: 'Admin Cashout', url: BASE_URL }],
  creator: 'Cashout SPayLater Team',
  publisher: 'Cashout SPayLater Malaysia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Konfigurasi Open Graph (Tampilan saat share link di WA/FB)
  openGraph: {
    title: 'Perlukan Tunai Segera? Tukar Limit PayLater Anda Sekarang!',
    description:
      'Cairkan limit SPayLater, Grab, dan Boost anda menjadi wang tunai. Proses pantas, selamat, dan trusted. Klik untuk info lanjut!',
    url: BASE_URL,
    siteName: 'Cashout SPayLater Malaysia',
    locale: 'ms_MY', // Penting untuk target Malaysia
    type: 'website',
    images: [
      {
        url: '/og-image.webp', // Pastikan Anda punya gambar ini di folder public nanti
        width: 1200,
        height: 630,
        alt: 'Cashout Service Malaysia',
      },
    ],
  },
  // Konfigurasi Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Tukar Limit PayLater Jadi Tunai | Malaysia',
    description:
      'Servis tukar limit Shopee, Grab & Boost jadi cash. Pantas & Selamat.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'ms' adalah kode bahasa untuk Melayu
    <html
      lang='ms'
      className='scroll-smooth'>
      <body className={inter.className}>
        {/* Structured Data untuk Google Search Rich Results */}
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
