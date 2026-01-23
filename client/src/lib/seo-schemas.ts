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
  openingHours: "Mo-Fr 08:00-16:30"
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

export function generateLocalBusinessSchema(logoUrl?: string, imageUrl?: string) {
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
    ...(imageUrl && { "image": imageUrl }),
    ...(logoUrl && { "logo": logoUrl }),
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
        "opens": "08:00",
        "closes": "16:30"
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

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${businessInfo.url}/#professionalservice`,
    "name": businessInfo.name,
    "alternateName": ["Estrich München", "Estrichleger München", "Estriche München"],
    "description": "Professionelle Estricharbeiten in München und Umgebung. Zementestrich, Fließestrich, Heizestrich, Industrieböden vom Meisterbetrieb mit 30+ Jahren Erfahrung.",
    "url": businessInfo.url,
    "telephone": businessInfo.telephone,
    "email": businessInfo.email,
    "foundingDate": businessInfo.foundingDate,
    "priceRange": businessInfo.priceRange,
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Überweisung", "Bar", "Rechnung"],
    "address": {
      "@type": "PostalAddress",
      ...businessInfo.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "areaServed": [
      ...serviceAreas.map(city => ({
        "@type": "City",
        "name": city
      })),
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 48.1351,
          "longitude": 11.5820
        },
        "geoRadius": "50000"
      }
    ],
    "knowsAbout": [
      "Zementestrich",
      "Fließestrich",
      "Calciumsulfatestrich",
      "Heizestrich",
      "Industrieestrich",
      "Fußbodenheizung",
      "Estrichsanierung",
      "Schnellestrich",
      "Wärmedämmung",
      "DIN 18560"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Meisterbrief",
        "name": "Estrichleger Meister"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Mustafa Sakar",
      "jobTitle": "Geschäftsführer und Estrichlegermeister",
      "knowsAbout": ["Estricharbeiten", "Fußbodenbau", "Bauhandwerk"]
    },
    "slogan": "Festpreis-Garantie. Termingarantie. 5 Jahre Gewährleistung.",
    "award": "30+ Jahre Erfahrung mit über 2.500 Projekten"
  };
}

export function generateReviewSchema() {
  const reviews = [
    {
      author: "Thomas M.",
      date: "2025-11-15",
      rating: 5,
      text: "Absolut zuverlässig! Termin wurde eingehalten, Preis war fix, Qualität top. So muss Handwerk sein."
    },
    {
      author: "Sandra K.",
      date: "2025-10-22",
      rating: 5,
      text: "Fließestrich im ganzen EG, perfekt eben. Das Team war super freundlich und hat alles sauber hinterlassen."
    },
    {
      author: "Michael B.",
      date: "2025-09-08",
      rating: 5,
      text: "Fußbodenheizung nachgerüstet ohne großen Umbau. Ging schneller als gedacht. Klare Empfehlung!"
    },
    {
      author: "Christine H.",
      date: "2025-08-14",
      rating: 5,
      text: "Nach Wasserschaden komplette Estrichsanierung. Schnell, professionell, faire Abrechnung."
    },
    {
      author: "Peter W.",
      date: "2025-07-20",
      rating: 5,
      text: "Industrieboden für unsere Werkstatt - extrem belastbar und nach einer Woche belegreif."
    }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#reviews`,
    "name": businessInfo.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "282",
      "reviewCount": "282"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "datePublished": r.date,
      "reviewBody": r.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1
      }
    }))
  };
}

export function generateSpeakableSchema(page: { url: string; headline: string; summary: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": page.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-text", ".key-benefits"]
    },
    "name": page.headline,
    "description": page.summary
  };
}

export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    ...(video.contentUrl && { "contentUrl": video.contentUrl }),
    "publisher": {
      "@type": "Organization",
      "name": businessInfo.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${businessInfo.url}/logo.png`
      }
    }
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "url": article.url,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author || "Mustafa Sakar"
    },
    "publisher": {
      "@type": "Organization",
      "name": businessInfo.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${businessInfo.url}/logo.png`
      }
    },
    ...(article.image && {
      "image": {
        "@type": "ImageObject",
        "url": article.image
      }
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

export function generateOfferCatalogSchema() {
  const services = [
    { name: "Zementestrich", price: "32", description: "Klassischer Zementestrich nach DIN 18560" },
    { name: "Fließestrich", price: "42", description: "Selbstnivellierender Calciumsulfat-Fließestrich" },
    { name: "Heizestrich", price: "45", description: "Optimiert für Fußbodenheizungen" },
    { name: "Schnellestrich", price: "48", description: "Belegreif in 1-5 Tagen" },
    { name: "Industrieestrich", price: "65", description: "Hochbelastbare Böden für Gewerbe" }
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estrich-Preise München 2026",
    "description": "Aktuelle Estrich-Preise pro Quadratmeter in München",
    "numberOfItems": services.length,
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Offer",
        "name": s.name,
        "description": s.description,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": s.price,
          "priceCurrency": "EUR",
          "unitText": "QM",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "MTK"
          }
        },
        "seller": {
          "@type": "LocalBusiness",
          "@id": `${businessInfo.url}/#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": "München"
        }
      }
    }))
  };
}
