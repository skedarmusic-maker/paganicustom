import Hero from "@/components/blocks/Hero";
import Authority from "@/components/blocks/Authority";
import Services from "@/components/blocks/Services";
import Portfolio from "@/components/blocks/Portfolio";
import Testimonials from "@/components/blocks/Testimonials";
import FAQ from "@/components/blocks/FAQ";
import Contact from "@/components/blocks/Contact";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop", // Highly specific schema for automotive customization
    "name": "Pagani Custom Floripa",
    "image": "https://paganicustom.com.br/images/logo.png",
    "@id": "https://paganicustom.com.br",
    "url": "https://paganicustom.com.br",
    "telephone": "+554832495596",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Marcelino Cândido Machado, 79 - Costeira do Pirajubaé",
      "addressLocality": "Florianópolis",
      "addressRegion": "SC",
      "postalCode": "88048-005",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.6517222,
      "longitude": -48.5166013
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Hero />
      <Authority />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
