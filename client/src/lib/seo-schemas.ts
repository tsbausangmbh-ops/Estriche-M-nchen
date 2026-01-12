export const businessInfo = {
  name: "Mustafa Sakar - Estriche München",
  legalName: "Mustafa Sakar",
  description: "Professionelle Estricharbeiten in München und Umgebung. Meisterbetrieb mit 30+ Jahren Erfahrung.",
  url: "https://estriche-muenchen.de",
  telephone: "+49-89-444-438-872",
  email: "info@estriche-muenchen.de",
  address: {
    streetAddress: "Hardenbergstr. 4",
    addressLocality: "München",
    postalCode: "80992",
    addressRegion: "Bayern",
    addressCountry: "DE"
  },
  geo: {
    latitude: 48.1779,
    longitude: 11.5193
  },
  priceRange: "€€",
  foundingDate: "1994",
  openingHours: "Mo-Fr 07:00-18:00"
};

export const serviceAreas = [
  "München",
  "Starnberg", 
  "Freising",
  "Dachau",
  "Erding",
  "Ebersberg",
  "Fürstenfeldbruck",
  "Landsberg am Lech",
  "Bad Aibling",
  "Rosenheim"
];

export const munichDistricts = [
  "Maxvorstadt",
  "Schwabing",
  "Schwabing-West",
  "Bogenhausen",
  "Haidhausen",
  "Giesing",
  "Sendling",
  "Laim",
  "Pasing",
  "Neuhausen",
  "Nymphenburg",
  "Moosach",
  "Milbertshofen",
  "Feldmoching",
  "Trudering",
  "Riem",
  "Berg am Laim",
  "Ramersdorf"
];

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#organization`,
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.telephone,
    "email": businessInfo.email,
    "foundingDate": businessInfo.foundingDate,
    "priceRange": businessInfo.priceRange,
    "image": `${businessInfo.url}/logo.png`,
    "logo": `${businessInfo.url}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      ...businessInfo.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "areaServed": serviceAreas.map(city => ({
      "@type": "City",
      "name": city
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "282",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Estrich-Dienstleistungen München",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zementestrich", "description": "Professionelle Zementestrich-Verlegung nach DIN 18560" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fließestrich", "description": "Selbstnivellierender Calciumsulfat-Fließestrich" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizestrich", "description": "Estrich für Fußbodenheizung mit optimaler Wärmeleitfähigkeit" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrieböden", "description": "Belastbare Böden für Gewerbe und Industrie" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fußbodenheizung nachrüsten", "description": "Nachträgliche Installation durch Einfräsen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estrichsanierung", "description": "Reparatur und Wasserschaden-Sanierung" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Schnellestrich", "description": "Belegreif in 1-5 Tagen" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wärmedämmung", "description": "Trittschall- und Wärmedämmung unter Estrich" } }
      ]
    },
    "sameAs": []
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#organization`,
      "name": businessInfo.name
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
    },
    ...(service.priceRange && {
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": service.priceRange,
          "priceCurrency": "EUR",
          "unitText": "pro m²"
        }
      }
    })
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": page.url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Estriche München",
      "url": businessInfo.url
    },
    "publisher": {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.url}/#organization`
    }
  };
}

export function generateHowToSchema(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Ablauf der Estrichverlegung bei Estriche München",
    "description": "So läuft Ihre Estrichverlegung in München ab - von der Anfrage bis zum fertigen Boden",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  priceRange: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "url": product.url,
    "brand": {
      "@type": "Brand",
      "name": "Estriche München"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": product.priceRange.split("–")[0],
      "highPrice": product.priceRange.split("–")[1] || product.priceRange.split("–")[0],
      "offerCount": "1",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "282"
    }
  };
}

export const seoKeywords = {
  primary: [
    "Estrich München",
    "Estrichleger München",
    "Estricharbeiten München",
    "Estrich verlegen München"
  ],
  secondary: [
    "Zementestrich München",
    "Fließestrich München",
    "Heizestrich München",
    "Industrieboden München",
    "Fußbodenheizung nachrüsten München",
    "Estrichsanierung München",
    "Schnellestrich München",
    "Wärmedämmung Boden München"
  ],
  longTail: [
    "Estrich verlegen lassen München Kosten",
    "Estrich Preis pro qm München",
    "Zementestrich Trocknungszeit berechnen",
    "Fußbodenheizung nachträglich einbauen München",
    "Estrichleger Meisterbetrieb München",
    "Estrich für Fußbodenheizung München",
    "Industrieboden Halle München",
    "Estrich Wasserschaden München",
    "Schnellestrich belegreif 24 Stunden",
    "Estrich Festpreis Angebot München"
  ],
  local: munichDistricts.map(d => `Estrich München ${d}`)
};
