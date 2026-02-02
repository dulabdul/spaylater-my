const JsonLd = () => {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Cashout SPayLater Malaysia',
    image: 'https://nakcashoutservice.my.my/og-image.jpg', // Ganti dengan domain asli nanti
    description:
      'Perkhidmatan menukar limit PayLater (Shopee, Grab, Boost) kepada wang tunai segera di Malaysia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Wilayah Persekutuan',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.140853,
      longitude: 101.693207,
    },
    url: 'https://nakcashoutservice.my.my',
    telephone: '+60123456789', // Ganti dengan nomor WA Anda (format +60)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLd;
