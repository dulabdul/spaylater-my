import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {

  const baseUrl = 'https://www.cashoutspaylater.my';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada halaman admin
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}