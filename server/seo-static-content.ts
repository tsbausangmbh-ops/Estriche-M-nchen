interface ServiceSEO {
  title: string;
  metaDescription: string;
  h1: string;
  content: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceSEO> = {
  zementestrich: {
    title: "Zementestrich München - Professionelle Estrichverlegung | Estrich München",
    metaDescription: "Zementestrich vom Meisterbetrieb in München. 15+ Jahre Erfahrung, Festpreisgarantie, DIN-konforme Ausführung. Jetzt kostenlose Beratung anfordern!",
    h1: "Zementestrich & Fließestrich in München",
    content: `Estrich München ist Ihr Spezialist für professionelle Estrichverlegung in München und Umgebung. Mit über 15 Jahren Erfahrung und mehr als 1.200 erfolgreich abgeschlossenen Projekten garantieren wir höchste Qualität bei Zementestrich, Calciumsulfat-Fließestrich und Heizestrich.

Unser Meisterbetrieb arbeitet strikt nach DIN 18560 und DIN 18202 für dokumentierte Qualität. Wir bieten transparente Festpreise nach kostenloser Vor-Ort-Besichtigung ohne versteckte Kosten.

Die Trocknungszeit für Zementestrich beträgt etwa 1 Tag pro Millimeter Estrichstärke. Mit unserem Schnellestrich können wir diese Zeit auf 1-3 Tage verkürzen.`,
    benefits: [
      "Über 15 Jahre Erfahrung mit 1.200+ Projekten",
      "Eigener Fuhrpark für gleichbleibende Materialqualität",
      "Meisterbetrieb mit regelmäßigen Schulungen",
      "Transparente Festpreise ohne versteckte Kosten",
      "5 Jahre Gewährleistung auf alle Arbeiten",
      "Pünktlichkeitsgarantie oder 100€ Gutschrift"
    ],
    faqs: [
      { q: "Wie lange muss Estrich trocknen?", a: "Die Trocknungszeit hängt von der Estrichart und -stärke ab. Als Faustregel gilt: 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht etwa 50 Tage bis zur Belegreife." },
      { q: "Welcher Estrich ist für Fußbodenheizung geeignet?", a: "Sowohl Zementestrich als auch Calciumsulfat-Fließestrich eignen sich für Fußbodenheizungen. Fließestrich hat eine bessere Wärmeleitfähigkeit." },
      { q: "Was kostet ein neuer Estrich?", a: "Die Kosten liegen je nach Estrichart zwischen 25-50 €/m². Wir erstellen Ihnen ein verbindliches Festpreisangebot nach kostenloser Vor-Ort-Besichtigung." }
    ]
  },
  industrieboeden: {
    title: "Industrieböden & Sichtestrich München - Belastbare Böden | Estrich München",
    metaDescription: "Industrieböden und Sichtestrich in München. Hartstoffestrich, Epoxidbeschichtung, geschliffener Terrazzo. 10 Jahre Garantie. Jetzt beraten lassen!",
    h1: "Industrieböden und Sichtestrich in München",
    content: `Hochbelastbare Industrieböden und eleganter Sichtestrich für Gewerbe, Industrie und anspruchsvolle Wohnprojekte. Estrich München bietet maßgeschneiderte Lösungen für extreme Anforderungen.

Von Hartstoffestrich für Produktionshallen über chemikalienbeständige Epoxidbeschichtungen bis hin zu geschliffenem Sichtestrich für Showrooms und Lofts - wir realisieren Ihr Projekt nach DIN EN 13892.

Unsere Industrieböden erreichen Druckfestigkeiten von C30 bis C50 und sind für Gabelstaplerverkehr, schwere Maschinen und aggressive Chemikalien ausgelegt.`,
    benefits: [
      "Spezialisiert auf Industrie- und Gewerbeprojekte",
      "Druckfestigkeit C30 bis C50",
      "Chemikalien- und säurebeständige Beschichtungen",
      "Ausführung nachts und am Wochenende möglich",
      "10 Jahre Gewährleistung auf Industrieböden",
      "Referenzen von DAX-Unternehmen"
    ],
    faqs: [
      { q: "Wie lange hält ein Industrieboden?", a: "Bei fachgerechter Ausführung halten Industrieböden 15-25 Jahre oder länger." },
      { q: "Kann Sichtestrich mit Fußbodenheizung kombiniert werden?", a: "Ja, Sichtestrich eignet sich hervorragend für Fußbodenheizungen und leitet Wärme sehr gut." },
      { q: "Welche Farben sind bei Industrieböden möglich?", a: "Bei Beschichtungen ist fast jede RAL-Farbe möglich. Sichtestrich kann eingefärbt werden." }
    ]
  },
  fussbodenheizung: {
    title: "Fußbodenheizung einfräsen München - Nachrüstung ohne Chaos | Estrich München",
    metaDescription: "Fußbodenheizung nachträglich einfräsen in München. Ohne großen Umbau, in bewohnten Räumen möglich. 500+ erfolgreiche Nachrüstungen. Jetzt beraten lassen!",
    h1: "Fußbodenheizung einfräsen in München",
    content: `Fußbodenheizung nachrüsten ohne großen Umbau - Estrich München macht es möglich. Mit unserer speziellen Frästechnik können wir Heizungsrohre direkt in Ihren bestehenden Estrich einbringen.

Über 500 erfolgreiche Nachrüstungen in Münchner Altbauten beweisen unsere Kompetenz. Die Installation dauert nur 2-4 Tage für eine durchschnittliche Wohnung, und Sie können während der Arbeiten wohnen bleiben.

Unsere staubarmen Fräsmaschinen mit integrierter Absaugung sorgen für minimale Belastung. Die Vergussmasse ist nach 24 Stunden begehbar.`,
    benefits: [
      "500+ erfolgreiche Nachrüstungen in München",
      "Installation in bewohnten Objekten möglich",
      "Staubarme Fräsmaschinen mit Absaugung",
      "Nur 2-4 Tage Installationszeit",
      "Funktionsgarantie auf das Heizsystem",
      "Festpreis inklusive aller Nebenarbeiten"
    ],
    faqs: [
      { q: "Kann jeder Estrich gefräst werden?", a: "Fast jeder. Zementestrich, Anhydritestrich und Gussasphalt eignen sich hervorragend." },
      { q: "Wie lange dauert die Installation?", a: "Für eine durchschnittliche Wohnung (80-100 m²) benötigen wir 2-4 Arbeitstage." },
      { q: "Ist eine nachgerüstete Fußbodenheizung effizient?", a: "Ja, gefräste Systeme erreichen die gleiche Effizienz wie Neubauten." }
    ]
  },
  waermedaemmung: {
    title: "Wärmedämmung & Bodendämmung München - Energie sparen | Estrich München",
    metaDescription: "Professionelle Wärmedämmung und Trittschalldämmung in München. KfW/BAFA-Förderung möglich. Bis 30% Energieeinsparung. Kostenlose Beratung!",
    h1: "Wärmedämmung und Abdichtung in München",
    content: `Energiekosten senken mit professioneller Bodendämmung von Estrich München. Wir berechnen die optimale Dämmstärke nach dem aktuellen Gebäudeenergiegesetz (GEG) und unterstützen Sie bei KfW- und BAFA-Förderanträgen.

Von EPS-Dämmung über XPS für Feuchträume bis hin zu ökologischer Holzfaserdämmung - wir bieten das passende Material für Ihr Projekt. Kombiniert mit Trittschalldämmung nach DIN 4109 für maximalen Wohnkomfort.

Bei energetischen Sanierungen sind 15-30% Energieeinsparung möglich. Die Investition amortisiert sich oft in 5-10 Jahren.`,
    benefits: [
      "Zertifizierte Energieberatung",
      "KfW/BAFA-Fördermittel-Expertise",
      "Bis 30% Energieeinsparung möglich",
      "10 Jahre Garantie auf Abdichtungsarbeiten",
      "Dokumentierte U-Werte für Förderanträge",
      "Wärme-, Schall- und Feuchtigkeitsschutz"
    ],
    faqs: [
      { q: "Welche Dämmstärke brauche ich?", a: "Für Neubauten nach GEG sind meist 80-120 mm nötig, bei Sanierungen oft weniger." },
      { q: "Gibt es Förderungen für Bodendämmung?", a: "Ja, bei energetischen Sanierungen gibt es Zuschüsse von KfW und BAFA." },
      { q: "Wie viel Energie kann ich sparen?", a: "Je nach Ausgangssituation sind 15-30% Energieeinsparung möglich." }
    ]
  },
  sanierung: {
    title: "Estrichsanierung & Reparatur München - Risse & Hohlstellen | Estrich München",
    metaDescription: "Estrichsanierung in München: Rissinjection, Hohlstellenverpressung, Wasserschaden-Sanierung. 24h-Notfall-Service. Kostenlose Schadensanalyse!",
    h1: "Estrichsanierung und Reparatur in München",
    content: `Estrich retten statt ersetzen - Estrich München ist spezialisiert auf wirtschaftliche Sanierungslösungen. Unsere kostenlose Erstdiagnose zeigt, ob Reparatur oder Neuaufbau sinnvoller ist.

Von Rissinjection mit Epoxidharz über Hohlstellenverpressung bis zur technischen Trocknung nach Wasserschäden - wir bieten alle Sanierungsverfahren nach DIN EN 1504.

Bei Wasserschäden ist schnelles Handeln entscheidend. Unser 24h-Notfall-Service ist innerhalb von 24 Stunden bei Ihnen vor Ort. Wir übernehmen auch die direkte Abwicklung mit Ihrer Versicherung.`,
    benefits: [
      "Kostenlose Erstdiagnose vor Ort",
      "24h-Notfall-Service bei Wasserschäden",
      "Direkte Versicherungsabwicklung",
      "5 Jahre Gewährleistung auf Reparaturen",
      "Retten statt Abriss - wirtschaftlichste Lösung",
      "Dokumentierte Schadensaufnahme"
    ],
    faqs: [
      { q: "Wann lohnt sich Reparatur statt Neuaufbau?", a: "Bei lokalen Schäden (einzelne Risse, begrenzte Hohlstellen) ist Reparatur fast immer günstiger." },
      { q: "Kann ich nach Wasserschaden den Estrich retten?", a: "Oft ja, wenn schnell gehandelt wird. Je länger das Wasser steht, desto größer der Schaden." },
      { q: "Übernimmt die Versicherung die Kosten?", a: "Bei versicherten Wasserschäden übernimmt die Gebäudeversicherung in der Regel die Kosten." }
    ]
  },
  schnellestrich: {
    title: "Schnellestrich München - Belegreif in 1-5 Tagen | Estrich München",
    metaDescription: "Schnellestrich in München: Belegreif in 1-5 Tagen statt 4-8 Wochen. Ideal für Termindrück. Garantierte Belegreife. Jetzt Termin sichern!",
    h1: "Schnellestrich in München",
    content: `Zeit ist Geld - mit Schnellestrich von Estrich München verkürzen Sie die Bauzeit um Wochen. Während normaler Zementestrich 4-8 Wochen zum Trocknen braucht, ist unser Schnellestrich in nur 1-5 Tagen belegreif.

Die Materialkosten sind etwa 20-40% höher, aber die eingesparte Zeit kann viel wertvoller sein: keine verlängerte Miete, pünktlicher Einzug, keine Handwerker-Umplanung.

Wir bieten verschiedene Systeme: Schnellzementestrich (belegreif in 3-5 Tagen), Calciumsulfat-Schnellestrich und 1-Tages-Estrich für extreme Zeitanforderungen.`,
    benefits: [
      "Belegreif in 1-5 Tagen",
      "Gleiche Qualität wie Standardestrich",
      "Ideal für Fußbodenheizung",
      "Flexible Terminierung - auch Wochenende",
      "Garantierte Belegreife zum Termin",
      "Dokumentierte CM-Messung"
    ],
    faqs: [
      { q: "Ist Schnellestrich teurer?", a: "Ja, die Materialkosten sind 20-40% höher. Die eingesparte Zeit rechnet sich aber oft mehrfach." },
      { q: "Ist die Qualität gleich gut?", a: "Ja, Schnellestrich erreicht die gleiche Endfestigkeit wie konventioneller Estrich." },
      { q: "Wie schnell ist Schnellestrich belegreif?", a: "Je nach System zwischen 1 und 5 Tagen. Normaler Zementestrich braucht 4-8 Wochen." }
    ]
  }
};

const homeSEO = {
  title: "Estrich München - Ihr Meisterbetrieb für Estricharbeiten | Estrich München",
  metaDescription: "Estrich München: Professionelle Estrichverlegung, Fußbodenheizung nachrüsten, Industrieböden. 15+ Jahre Erfahrung, 1.200+ Projekte. Kostenlose Beratung!",
  h1: "Estrich München - Ihr Partner für perfekte Böden",
  content: `Willkommen bei Estrich München, Ihrem Meisterbetrieb für professionelle Estricharbeiten in München und Umgebung. Mit über 15 Jahren Erfahrung und mehr als 1.200 erfolgreich abgeschlossenen Projekten sind wir Ihr verlässlicher Partner für:

• Zementestrich und Fließestrich - für Neubau und Sanierung
• Industrieböden und Sichtestrich - für Gewerbe und anspruchsvolle Wohnprojekte  
• Fußbodenheizung nachrüsten - ohne großen Umbau
• Wärmedämmung und Trittschalldämmung - für Energieeffizienz
• Estrichsanierung und Reparatur - Risse und Hohlstellen beheben
• Schnellestrich - belegreif in 1-5 Tagen

Wir arbeiten strikt nach deutschen Industrienormen (DIN 18560, DIN 18202) und bieten transparente Festpreise nach kostenloser Vor-Ort-Besichtigung. Unsere Kunden schätzen unsere Zuverlässigkeit, Pünktlichkeit und die saubere Arbeitsweise.

Kontaktieren Sie uns für ein unverbindliches Angebot: 089 / 123 456 78`,
  services: [
    { name: "Zementestrich & Fließestrich", price: "25-35 €/m²" },
    { name: "Industrieböden & Sichtestrich", price: "45-80 €/m²" },
    { name: "Fußbodenheizung einfräsen", price: "45-65 €/m²" },
    { name: "Wärmedämmung & Abdichtung", price: "15-25 €/m²" },
    { name: "Sanierung & Reparatur", price: "20-40 €/m²" },
    { name: "Schnellestrich", price: "35-50 €/m²" }
  ]
};

function generateBaseHTML(title: string, metaDescription: string, content: string, canonicalPath: string): string {
  const baseUrl = "https://estrich-muenchen.replit.app";
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${metaDescription}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonicalUrl}">
  
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${metaDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="de_DE">
  
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${metaDescription}">
  
  <meta name="geo.region" content="DE-BY">
  <meta name="geo.placename" content="München">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Estrich München",
    "description": "${metaDescription}",
    "url": "${baseUrl}",
    "telephone": "+49-89-123-456-78",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 1",
      "addressLocality": "München",
      "postalCode": "80331",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00"
  }
  </script>
</head>
<body>
  <header>
    <nav>
      <a href="/">Estrich München</a>
      <a href="/leistungen/zementestrich">Zementestrich</a>
      <a href="/leistungen/industrieboeden">Industrieböden</a>
      <a href="/leistungen/fussbodenheizung">Fußbodenheizung</a>
      <a href="/leistungen/waermedaemmung">Wärmedämmung</a>
      <a href="/leistungen/sanierung">Sanierung</a>
      <a href="/leistungen/schnellestrich">Schnellestrich</a>
    </nav>
  </header>
  <main>
    ${content}
  </main>
  <footer>
    <p>© 2025 Estrich München - Ihr Meisterbetrieb für Estricharbeiten</p>
    <p>Telefon: 089 / 123 456 78 | München und Umgebung</p>
  </footer>
</body>
</html>`;
}

function generateServicePage(serviceId: string): string {
  const service = servicesData[serviceId];
  if (!service) {
    return generateHomePage();
  }
  
  const benefitsList = service.benefits.map(b => `<li>${b}</li>`).join('\n');
  const faqsHTML = service.faqs.map(faq => `
    <article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">${faq.q}</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">${faq.a}</p>
      </div>
    </article>
  `).join('\n');
  
  const content = `
    <article>
      <h1>${service.h1}</h1>
      <section>
        ${service.content.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}
      </section>
      <section>
        <h2>Ihre Vorteile</h2>
        <ul>
          ${benefitsList}
        </ul>
      </section>
      <section itemscope itemtype="https://schema.org/FAQPage">
        <h2>Häufig gestellte Fragen</h2>
        ${faqsHTML}
      </section>
      <section>
        <h2>Jetzt kostenloses Angebot anfordern</h2>
        <p>Rufen Sie uns an: <a href="tel:+498912345678">089 / 123 456 78</a></p>
        <p>Oder nutzen Sie unser Kontaktformular für eine unverbindliche Anfrage.</p>
      </section>
    </article>
  `;
  
  return generateBaseHTML(service.title, service.metaDescription, content, `/leistungen/${serviceId}`);
}

function generateHomePage(): string {
  const servicesHTML = homeSEO.services.map(s => `
    <li><strong>${s.name}</strong>: ab ${s.price}</li>
  `).join('\n');
  
  const content = `
    <article>
      <h1>${homeSEO.h1}</h1>
      <section>
        ${homeSEO.content.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('\n')}
      </section>
      <section>
        <h2>Unsere Leistungen und Preise</h2>
        <ul>
          ${servicesHTML}
        </ul>
      </section>
      <section>
        <h2>Warum Estrich München?</h2>
        <ul>
          <li>Über 15 Jahre Erfahrung</li>
          <li>1.200+ erfolgreich abgeschlossene Projekte</li>
          <li>Meisterbetrieb mit Qualitätsgarantie</li>
          <li>Transparente Festpreise</li>
          <li>Kostenlose Vor-Ort-Beratung</li>
          <li>Pünktlichkeitsgarantie</li>
        </ul>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>Telefon: <a href="tel:+498912345678">089 / 123 456 78</a></p>
        <p>E-Mail: info@estrich-muenchen.de</p>
        <p>Servicegebiet: München, Starnberg, Freising, Dachau, Erding, Ebersberg, Fürstenfeldbruck</p>
      </section>
    </article>
  `;
  
  return generateBaseHTML(homeSEO.title, homeSEO.metaDescription, content, '/');
}

export function generateStaticSEOContent(path: string): string {
  if (path === '/' || path === '') {
    return generateHomePage();
  }
  
  const serviceMatch = path.match(/^\/leistungen\/([a-z-]+)/);
  if (serviceMatch) {
    return generateServicePage(serviceMatch[1]);
  }
  
  return generateHomePage();
}
