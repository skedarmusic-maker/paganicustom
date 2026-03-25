export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Pagani Custom Floripa",
    "image": "https://paganicustom.com.br/images/logo.png",
    "@id": "https://paganicustom.com.br",
    "url": "https://paganicustom.com.br",
    "telephone": "+554832495596",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Marcelino Cândido Machado, 79",
      "addressLocality": "Florianópolis",
      "addressRegion": "SC",
      "postalCode": "88048-005",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.6518696,
      "longitude": -48.5166121
    },
    "aggregateRating": {
      "@id": "https://paganicustom.com.br/#rating",
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "40",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/paganicustomfloripa/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Iluminação Automotiva",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de Projetores Bi-LED"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restauração de Faróis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aplicação de Máscara Negra"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação de DRL e Angel Eyes"
          }
        }
      ]
    },
    "description": "Especialistas em iluminação automotiva em Florianópolis. Restauração de faróis, aplicação de máscara negra, LEDs, Projetores Bi-LED e Estética de Faróis Premium."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
