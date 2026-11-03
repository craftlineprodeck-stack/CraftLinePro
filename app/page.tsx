import HomePage from './components/HomePage';

// JSON-LD Schema for SEO
const cities = [
  'Sacramento', 'Fair Oaks', 'Folsom', 'Orangevale', 'Granite Bay', 'Citrus Heights',
  'Roseville', 'Rocklin', 'El Dorado Hills', 'Auburn',
];

const services = [
  { name: 'Deck Building', description: 'Custom Redwood and Trex composite decks with railings and stairs, built on solid framing.' },
  { name: 'Redwood Deck Restoration', description: 'Deep, even sanding, fastener reset, board replacement and a penetrating oil or stain finish.' },
  { name: 'Ipe & Hardwood Deck Restoration', description: 'Restoration, board replacement and oil maintenance for Ipe, Cumaru, Tigerwood, Garapa and bamboo decks.' },
  { name: 'Deck Repair & Framing', description: 'Board replacement, rotten wood repair, joist and frame reinforcement.' },
  { name: 'Deck Railings & Stairs', description: 'Redwood, composite and aluminum railings, new and rebuilt deck stairs.' },
  { name: 'Pergola Construction', description: 'Redwood pergolas built to match your deck.' },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://craftlineprodeck.com/#organization",
  "name": "CraftLine Decking",
  "legalName": "CraftLine LLC",
  "description": "Deck builder and deck restoration company in the Sacramento area: Redwood and Trex deck building, Redwood restoration, Ipe and exotic hardwood restoration, deck repair, railings and stairs.",
  "url": "https://craftlineprodeck.com/",
  "telephone": "+1-279-237-9912",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sacramento",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": cities.map((name) => ({ "@type": "City", "name": name, "containedInPlace": { "@type": "State", "name": "California" } })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Deck Services",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.name, "description": s.description }
    }))
  },
  "priceRange": "$$",
  "image": "https://craftlineprodeck.com/hero.webp",
  "logo": "https://craftlineprodeck.com/icon.png",
  "sameAs": [
    "https://www.instagram.com/craftline.sacramento",
    "https://yelp.to/1YJwTMiSXR",
    "https://maps.app.goo.gl/x312YhivPyDcfheA8"
  ],
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00"
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HomePage />
    </>
  );
}
