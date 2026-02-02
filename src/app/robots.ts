import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.nakcashoutservice.my.my';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada halaman admin
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
