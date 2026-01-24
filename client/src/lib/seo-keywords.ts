// SEO Keyword Strategy für Estriche München
// Struktur: 1x H1, 4x H2, 4x H3 pro Seite
// Keywords: 1 Hauptkeyword, 7 Sub-Keywords, 10 Long-Tail Keywords

export interface PageSEO {
  slug: string;
  h1: string;
  hauptKeyword: string;
  subKeywords: string[];
  longTailKeywords: string[];
}

// Interne Verlinkungen für Keywords
export const keywordLinks: Record<string, string> = {
  // Hauptkeywords -> Seiten
  "Estriche München": "/",
  "Estrichleger München": "/",
  "Estrich verlegen München": "/",
  
  // Service Keywords
  "Zementestrich": "/leistungen/zementestrich",
  "Zementestrich München": "/leistungen/zementestrich",
  "Zementestrich verlegen": "/leistungen/zementestrich",
  
  "Fließestrich": "/leistungen/fliessestrich",
  "Fließestrich München": "/leistungen/fliessestrich",
  "Calciumsulfatestrich": "/leistungen/fliessestrich",
  
  "Heizestrich": "/leistungen/heizestrich",
  "Heizestrich München": "/leistungen/heizestrich",
  "Estrich Fußbodenheizung": "/leistungen/heizestrich",
  
  "Schnellestrich": "/leistungen/schnellestrich",
  "Schnellestrich München": "/leistungen/schnellestrich",
  "schnelltrocknender Estrich": "/leistungen/schnellestrich",
  
  "Industrieestrich": "/leistungen/industrieboeden",
  "Industrieboden München": "/leistungen/industrieboeden",
  "Sichtestrich": "/leistungen/industrieboeden",
  "Sichtestrich München": "/leistungen/industrieboeden",
  
  "Fußbodenheizung nachrüsten": "/leistungen/fussbodenheizung",
  "Fußbodenheizung einfräsen": "/leistungen/fussbodenheizung",
  "Fußbodenheizung fräsen": "/leistungen/fussbodenheizung",
  
  "Estrichsanierung": "/leistungen/sanierung",
  "Estrich reparieren": "/leistungen/sanierung",
  "Estrich Risse reparieren": "/leistungen/sanierung",
  
  "Wärmedämmung Estrich": "/leistungen/waermedaemmung",
  "Trittschalldämmung": "/leistungen/waermedaemmung",
  
  // Informationsseiten
  "Estrich Kosten": "/preise",
  "Estrich Preise": "/preise",
  "Estrich Preis pro qm": "/preise",
  "Estrich Kosten pro m²": "/preise",
  "was kostet Estrich": "/preise",
  
  "Estrich Rechner": "/rechner",
  "Estrich Kalkulator": "/rechner",
  "Estrich berechnen": "/rechner",
  
  "Estrich FAQ": "/faq",
  "häufige Fragen Estrich": "/faq",
  
  "Estrich Ablauf": "/ablauf",
  "wie wird Estrich verlegt": "/ablauf",
  
  // Kontakt
  "Estrich Angebot": "/angebot",
  "Festpreis-Angebot": "/angebot",
  "kostenlose Beratung": "/kontakt",
  "Estrichleger kontaktieren": "/kontakt",
};

// Seiten-spezifische Keywords
export const pageSEO: Record<string, PageSEO> = {
  home: {
    slug: "/",
    h1: "Estriche München – Ihr Fachbetrieb für perfekte Böden mit 30+ Jahren Erfahrung",
    hauptKeyword: "Estriche München",
    subKeywords: [
      "Estrichleger München",
      "Estrich verlegen lassen",
      "Zementestrich München",
      "Fließestrich München",
      "Heizestrich München",
      "Estrich Fachbetrieb",
      "Estrich Festpreis"
    ],
    longTailKeywords: [
      "Estrich verlegen lassen München Kosten",
      "Estrichleger in meiner Nähe München",
      "professioneller Estrich für Neubau München",
      "Estrich für Fußbodenheizung München",
      "günstiger Estrichleger München Angebot",
      "Estrich verlegen Altbau München",
      "Zementestrich Wohnhaus München",
      "Estrich Firma München Empfehlung",
      "Estrich verlegen wie lange dauert es",
      "Estrich Kosten pro qm München 2026"
    ]
  },
  preise: {
    slug: "/preise",
    h1: "Estrich Preise München – Transparente Kosten pro m²",
    hauptKeyword: "Estrich Preise München",
    subKeywords: [
      "Estrich Kosten pro qm",
      "Zementestrich Preis",
      "Fließestrich Kosten",
      "Heizestrich Preis",
      "Estrich verlegen Kosten",
      "Estrich Festpreis",
      "Estrich Angebot"
    ],
    longTailKeywords: [
      "was kostet Estrich verlegen pro m² München",
      "Zementestrich Kosten pro Quadratmeter 2026",
      "Fließestrich Preis mit Fußbodenheizung",
      "Estrich Kosten Neubau München kalkulieren",
      "Industrieestrich Preis pro qm München",
      "Schnellestrich Kosten im Vergleich",
      "Estrich verlegen lassen Kosten Altbau",
      "Heizestrich Kosten inkl Material",
      "Estrich Preisvergleich München Umland",
      "günstig Estrich verlegen lassen München"
    ]
  },
  kontakt: {
    slug: "/kontakt",
    h1: "Kontakt – Estrichleger München kostenlos anfragen",
    hauptKeyword: "Estrichleger kontaktieren",
    subKeywords: [
      "Estrich Anfrage München",
      "Estrich Beratung kostenlos",
      "Estrich Termin vereinbaren",
      "Estrichleger Angebot anfordern",
      "Estrich Firma München kontaktieren",
      "Estrich Vor-Ort-Beratung",
      "Estrich schnelle Antwort"
    ],
    longTailKeywords: [
      "Estrichleger München kostenlos anfragen",
      "Estrich Beratung vor Ort München",
      "Estrich Angebot innerhalb 24 Stunden",
      "Estrichleger für Privathaus kontaktieren",
      "Estrich Firma München Telefonnummer",
      "Estrich kostenloser Kostenvoranschlag München",
      "Estrich Terminvereinbarung online München",
      "Estrichleger Angebot ohne Wartezeit",
      "Estrich Beratungsgespräch vereinbaren München",
      "Estrich Aufmaß kostenlos München"
    ]
  },
  faq: {
    slug: "/faq",
    h1: "Häufige Fragen zu Estrich – Expertenantworten",
    hauptKeyword: "Estrich FAQ",
    subKeywords: [
      "Estrich Fragen",
      "Estrich Trocknungszeit",
      "welcher Estrich für Fußbodenheizung",
      "Estrich Dicke",
      "Estrich trocknen",
      "Estrich Arten",
      "Estrich belegen"
    ],
    longTailKeywords: [
      "wie lange muss Estrich trocknen bis Fliesen",
      "welcher Estrich ist der beste für Neubau",
      "Estrich auf Fußbodenheizung wie dick",
      "wann kann ich auf Estrich laufen",
      "Unterschied Zementestrich und Fließestrich",
      "Estrich Risse normal oder Mangel",
      "kann man Estrich im Winter verlegen",
      "Estrich wann heizen nach Verlegung",
      "Estrich selbst verlegen oder Profi",
      "Estrich Belegreife prüfen wie"
    ]
  },
  ablauf: {
    slug: "/ablauf",
    h1: "Estrich Ablauf – Von der Anfrage bis zum fertigen Boden",
    hauptKeyword: "Estrich verlegen Ablauf",
    subKeywords: [
      "Estrich Arbeitsschritte",
      "Estrich Bauphasen",
      "Estrich Vorbereitung",
      "Estrich Einbau",
      "Estrich Nachbehandlung",
      "Estrich Zeitplan",
      "Estrich Projektablauf"
    ],
    longTailKeywords: [
      "wie wird Estrich fachgerecht verlegt",
      "Estrich verlegen Schritt für Schritt Anleitung",
      "Ablauf Estricharbeiten im Neubau",
      "Estrich Vorbereitung Untergrund",
      "nach Estrich was kommt als nächstes",
      "Estrich aushärten und trocknen lassen",
      "Estrich Qualitätskontrolle was wird geprüft",
      "Estrich Bauzeitenplan typisch München",
      "wann Bodenbelag nach Estrich verlegen",
      "Estrich Abnahme was beachten"
    ]
  },
  rechner: {
    slug: "/rechner",
    h1: "Estrich Rechner München – Kosten sofort berechnen",
    hauptKeyword: "Estrich Rechner",
    subKeywords: [
      "Estrich Kalkulator",
      "Estrich Kosten berechnen",
      "Estrich Budget planen",
      "Estrich Preisrechner",
      "Estrich Kostenvoranschlag",
      "Estrich Quadratmeter Rechner",
      "Estrich online kalkulieren"
    ],
    longTailKeywords: [
      "Estrich Kosten online berechnen kostenlos",
      "Estrich Kalkulator für Neubau München",
      "was kostet mein Estrich Projekt berechnen",
      "Estrich Preis Rechner mit Fußbodenheizung",
      "Estrich Fläche berechnen Kosten ermitteln",
      "Estrich Budget kalkulieren Renovierung",
      "Estrich Kostenvoranschlag online anfordern",
      "Estrich Rechner Quadratmeterpreis München",
      "Estrich Gesamtkosten ermitteln online",
      "Estrich Preisschätzung sofort erhalten"
    ]
  },
  ueberUns: {
    slug: "/ueber-uns",
    h1: "Über uns – 30 Jahre Estrich-Erfahrung in München",
    hauptKeyword: "Estrich Fachbetrieb München",
    subKeywords: [
      "Estrich Firma München",
      "Estrichleger Erfahrung",
      "Estrich Qualität",
      "Estrich Referenzen",
      "Estrich Team München",
      "Estrich Handwerk",
      "Estrich Tradition"
    ],
    longTailKeywords: [
      "erfahrener Estrichleger München seit 1994",
      "Estrich Fachbetrieb mit Referenzen München",
      "Estrich Firma mit Festpreis-Garantie",
      "Estrichleger München Bewertungen",
      "familiengeführter Estrich Betrieb München",
      "Estrich Spezialist für Wohnbau München",
      "Estrich Unternehmen mit Gewährleistung",
      "Estrich Handwerksbetrieb München Empfehlung",
      "Estrich Profi München 2500 Projekte",
      "Estrichleger München mit Termingarantie"
    ]
  }
};

// Service-Detail Keywords
export const serviceSEO: Record<string, PageSEO> = {
  zementestrich: {
    slug: "/leistungen/zementestrich",
    h1: "Zementestrich München – Der robuste Klassiker",
    hauptKeyword: "Zementestrich München",
    subKeywords: [
      "Zementestrich verlegen",
      "CT Estrich",
      "Zementestrich Kosten",
      "Zementestrich Dicke",
      "Zementestrich Trocknungszeit",
      "Zementestrich Wohnhaus",
      "Zementestrich Keller"
    ],
    longTailKeywords: [
      "Zementestrich verlegen lassen München Preis",
      "Zementestrich für Einfamilienhaus München",
      "Zementestrich Dicke nach DIN Norm",
      "Zementestrich wie lange trocknen lassen",
      "Zementestrich vs Fließestrich Vergleich",
      "Zementestrich für feuchte Räume Keller",
      "Zementestrich Kosten pro qm München 2026",
      "Zementestrich mit Fußbodenheizung kombinieren",
      "Zementestrich Festigkeit und Belastbarkeit",
      "Zementestrich professionell verlegen München"
    ]
  },
  fliessestrich: {
    slug: "/leistungen/fliessestrich",
    h1: "Fließestrich München – Perfekt für Fußbodenheizung",
    hauptKeyword: "Fließestrich München",
    subKeywords: [
      "Calciumsulfatestrich",
      "Anhydritestrich",
      "CA Estrich",
      "Fließestrich Kosten",
      "Fließestrich Fußbodenheizung",
      "Fließestrich selbstnivellierend",
      "Fließestrich Vorteile"
    ],
    longTailKeywords: [
      "Fließestrich für Fußbodenheizung optimal München",
      "Calciumsulfatestrich verlegen München Preis",
      "Fließestrich vs Zementestrich was ist besser",
      "Fließestrich Vorteile bei großen Flächen",
      "Anhydritestrich Kosten pro Quadratmeter",
      "Fließestrich selbstnivellierend wie funktioniert",
      "Fließestrich Trocknungszeit verkürzen",
      "Fließestrich für Altbausanierung München",
      "Calciumsulfatestrich wärmeleitfähig Heizung",
      "Fließestrich professionell verlegen lassen München"
    ]
  },
  heizestrich: {
    slug: "/leistungen/heizestrich",
    h1: "Heizestrich München – Optimiert für Fußbodenheizung",
    hauptKeyword: "Heizestrich München",
    subKeywords: [
      "Estrich Fußbodenheizung",
      "Heizestrich verlegen",
      "Heizestrich Aufbau",
      "Heizestrich Kosten",
      "Heizestrich Aufheizprotokoll",
      "Heizestrich Dicke",
      "Heizestrich Wärmeleitfähigkeit"
    ],
    longTailKeywords: [
      "Heizestrich für Fußbodenheizung München verlegen",
      "Heizestrich richtig aufheizen Protokoll",
      "Heizestrich Dicke über Heizrohren DIN",
      "Estrich für Fußbodenheizung welcher der beste",
      "Heizestrich Kosten inkl Aufheizen München",
      "Heizestrich Trocknungszeit beschleunigen",
      "Heizestrich Neubau München professionell",
      "Fußbodenheizung Estrich Aufbau Schichten",
      "Heizestrich schneller begehbar wann",
      "Heizestrich Temperaturprogramm richtig"
    ]
  },
  schnellestrich: {
    slug: "/leistungen/schnellestrich",
    h1: "Schnellestrich München – Belegreif in wenigen Tagen",
    hauptKeyword: "Schnellestrich München",
    subKeywords: [
      "Schnellzement Estrich",
      "Estrich schnell trocknen",
      "Schnellestrich Kosten",
      "Schnellestrich Renovierung",
      "Schnellestrich 24h begehbar",
      "Schnellestrich Trocknungszeit",
      "Expresestrich"
    ],
    longTailKeywords: [
      "Schnellestrich in 3 Tagen belegreif München",
      "Schnellestrich bei Renovierung Zeitmangel",
      "schnelltrocknender Estrich Kosten pro qm",
      "Schnellestrich für Gewerbe München",
      "Schnellestrich 24 Stunden begehbar möglich",
      "Expresestrich München kurzfristig verlegen",
      "Schnellestrich vs normaler Estrich Unterschied",
      "Schnellestrich für Ladenbau München",
      "Estrich schnell trocknen lassen Methoden",
      "Schnellestrich Termingarantie München"
    ]
  },
  industrieboeden: {
    slug: "/leistungen/industrieboeden",
    h1: "Industrieboden & Sichtestrich München",
    hauptKeyword: "Industrieboden München",
    subKeywords: [
      "Sichtestrich München",
      "Industrieestrich",
      "Betonboden geschliffen",
      "Hartstoffestrich",
      "Hallenboden",
      "Gewerbeboden",
      "Garagenestrich"
    ],
    longTailKeywords: [
      "Industrieboden für Lagerhalle München",
      "Sichtestrich geschliffen poliert München",
      "Industrieestrich hochbelastbar Gabelstapler",
      "Betonboden Design Wohnung Loft München",
      "Hartstoffestrich für Werkstatt verlegen",
      "Hallenboden beschichten Epoxid München",
      "Gewerbeboden strapazierfähig München Preis",
      "Garagenboden Estrich beschichten München",
      "Sichtestrich Kosten pro qm Designer Look",
      "Industrieboden chemiebeständig verlegen München"
    ]
  },
  fussbodenheizung: {
    slug: "/leistungen/fussbodenheizung",
    h1: "Fußbodenheizung nachrüsten München – Einfräsen in Estrich",
    hauptKeyword: "Fußbodenheizung nachrüsten München",
    subKeywords: [
      "Fußbodenheizung einfräsen",
      "Fußbodenheizung fräsen",
      "Heizung nachträglich",
      "Fußbodenheizung Altbau",
      "Fußbodenheizung Renovierung",
      "Fräsmethode Heizung",
      "Fußbodenheizung ohne Estrich"
    ],
    longTailKeywords: [
      "Fußbodenheizung nachträglich einfräsen München",
      "Fußbodenheizung in bestehenden Estrich München",
      "Heizung nachrüsten ohne Boden aufbauen",
      "Fußbodenheizung Altbau nachrüsten Kosten",
      "Fußbodenheizung fräsen statt neu Estrich",
      "Fußbodenheizung Renovierung München schnell",
      "Fräsmethode Fußbodenheizung Vorteile",
      "Fußbodenheizung nachrüsten Kosten pro qm",
      "Fußbodenheizung ohne kompletten Bodenaufbau",
      "Heizung in Estrich einfräsen München Profi"
    ]
  },
  sanierung: {
    slug: "/leistungen/sanierung",
    h1: "Estrichsanierung München – Reparatur statt Abriss",
    hauptKeyword: "Estrichsanierung München",
    subKeywords: [
      "Estrich reparieren",
      "Estrich Risse",
      "Estrich Hohlstellen",
      "Estrich Wasserschaden",
      "Estrich ausbessern",
      "Estrich Teilsanierung",
      "Estrich Instandsetzung"
    ],
    longTailKeywords: [
      "Estrich Risse reparieren München Kosten",
      "Estrich Hohlstellen verpressen Injektion",
      "Estrich nach Wasserschaden sanieren München",
      "Estrich ausbessern ohne komplett erneuern",
      "Estrich Teilsanierung günstiger als Abriss",
      "Estrich Instandsetzung Altbau München",
      "Estrich Schaden reparieren lassen München",
      "Estrich sanieren oder neu verlegen was besser",
      "Estrich Risse gefährlich wann sanieren",
      "Estrich Wasserschaden Versicherung München"
    ]
  },
  waermedaemmung: {
    slug: "/leistungen/waermedaemmung",
    h1: "Wärme- und Trittschalldämmung München",
    hauptKeyword: "Wärmedämmung Estrich München",
    subKeywords: [
      "Trittschalldämmung",
      "Estrich Dämmung",
      "Bodendämmung",
      "Schallschutz Estrich",
      "Estrich Wärmeschutz",
      "GEG Dämmung",
      "Estrich Energiesparen"
    ],
    longTailKeywords: [
      "Trittschalldämmung unter Estrich München",
      "Wärmedämmung Boden GEG konform München",
      "Estrich Dämmung welche Stärke richtig",
      "Bodendämmung für Fußbodenheizung optimal",
      "Schallschutz Estrich Mehrfamilienhaus DIN",
      "Estrich Wärmeschutz Förderung KfW BAFA",
      "Dämmung Estrich Altbau nachrüsten München",
      "Estrich mit Dämmung Kosten pro qm",
      "Trittschalldämmung verlegen München Profi",
      "Bodendämmung Energieausweis verbessern München"
    ]
  }
};

// Helper function to create linked keyword HTML
export function createLinkedKeyword(keyword: string, currentPath: string): string {
  const link = keywordLinks[keyword];
  if (link && link !== currentPath) {
    return `<a href="${link}" class="text-primary hover:underline">${keyword}</a>`;
  }
  return keyword;
}

// Export last updated date for freshness signals
export const lastUpdated = "22. Januar 2026";
