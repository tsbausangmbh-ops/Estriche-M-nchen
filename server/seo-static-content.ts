interface PageSEO {
  title: string;
  metaDescription: string;
  mainKeyword: string;
  longTailKeywords: string[];
  h1: string;
  sections: { h2: string; h3s?: string[]; content: string }[];
  faqs?: { q: string; a: string }[];
  projectExamples?: { title: string; location: string; area: string; description: string }[];
}

// Münchner Stadtteile für lokale SEO
const MUENCHNER_STADTTEILE = [
  "Altstadt-Lehel", "Ludwigsvorstadt-Isarvorstadt", "Maxvorstadt", "Schwabing-West",
  "Au-Haidhausen", "Sendling", "Sendling-Westpark", "Schwanthalerhöhe", "Neuhausen-Nymphenburg",
  "Moosach", "Milbertshofen-Am Hart", "Schwabing-Freimann", "Bogenhausen", "Berg am Laim",
  "Trudering-Riem", "Ramersdorf-Perlach", "Obergiesing-Fasangarten", "Untergiesing-Harlaching",
  "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln", "Hadern", "Pasing-Obermenzing",
  "Aubing-Lochhausen-Langwied", "Allach-Untermenzing", "Feldmoching-Hasenbergl", "Laim"
];

const BELIEBTE_STADTTEILE = ["Schwabing", "Bogenhausen", "Haidhausen", "Sendling", "Pasing", "Laim", "Neuhausen", "Maxvorstadt", "Trudering", "Moosach"];

const UMLAND_STAEDTE = ["Starnberg", "Freising", "Dachau", "Erding", "Ebersberg", "Fürstenfeldbruck", "Garching", "Unterschleißheim", "Germering", "Grünwald"];

const servicesData: Record<string, PageSEO> = {
  fliessestrich: {
    title: "Fließestrich München | CAF-Estrich vom Fachbetrieb",
    metaDescription: "Fließestrich verlegen in München. Calciumsulfat-Fließestrich (CAF) perfekt für Fußbodenheizung. Fachbetrieb mit Festpreisgarantie. Jetzt beraten lassen!",
    mainKeyword: "Fließestrich München",
    longTailKeywords: [
      "Calciumsulfat-Fließestrich München",
      "CAF Estrich verlegen lassen",
      "Fließestrich für Fußbodenheizung",
      "Anhydritestrich München",
      "Selbstnivellierender Estrich",
      "Fließestrich Kosten pro qm",
      "Fließestrich Trocknungszeit",
      "Fließestrich vs Zementestrich"
    ],
    h1: "Fließestrich München - Calciumsulfat-Fließestrich vom Fachbetrieb",
    sections: [
      {
        h2: "Fließestrich verlegen - Perfekt eben ohne Nacharbeit",
        h3s: ["Selbstnivellierende Verlegung", "Ideal für Fußbodenheizung"],
        content: `Calciumsulfat-Fließestrich (CAF) ist die moderne Lösung für perfekt ebene Böden. Der selbstnivellierende Estrich verteilt sich gleichmäßig und schafft eine absolut plane Oberfläche - ideal als Untergrund für Fliesen, Parkett oder Vinyl. Seine hervorragende Wärmeleitfähigkeit macht ihn zum perfekten Partner für Fußbodenheizungen.`
      },
      {
        h2: "Vorteile von Fließestrich gegenüber Zementestrich",
        h3s: ["Bessere Wärmeleitfähigkeit", "Schnellere Verlegung"],
        content: `Fließestrich bietet bis zu 40% bessere Wärmeleitfähigkeit als Zementestrich - Ihre Fußbodenheizung reagiert schneller und spart Energie. Die Verlegung erfolgt zügig: Große Flächen lassen sich in einem Arbeitsgang nivellieren. Die Trocknungszeit beträgt etwa 1 Tag pro mm Stärke.`
      },
      {
        h2: "Fließestrich Kosten und Preise in München",
        content: `Die Kosten für Fließestrich liegen bei 38-52 €/m² netto zzgl. MwSt., abhängig von Fläche und Estrichstärke. Im Vergleich zu Zementestrich ist der Materialpreis etwas höher, dafür sparen Sie bei der Verlegung und profitieren von besserer Wärmeleitfähigkeit.`
      }
    ],
    faqs: [
      { q: "Ist Fließestrich besser als Zementestrich?", a: "Für Fußbodenheizungen ja - Fließestrich hat bessere Wärmeleitfähigkeit. Zementestrich ist feuchtigkeitsbeständiger für Nassräume." },
      { q: "Wie lange muss Fließestrich trocknen?", a: "Etwa 1 Tag pro mm Estrichstärke. Ein 45 mm starker Fließestrich braucht ca. 45 Tage bis zur Belegreife." },
      { q: "Was kostet Fließestrich pro m²?", a: "In München kostet Fließestrich zwischen 38-52 €/m² netto zzgl. MwSt., inklusive Material und Verlegung." }
    ]
  },
  heizestrich: {
    title: "Heizestrich München | Estrich für Fußbodenheizung",
    metaDescription: "Heizestrich für Fußbodenheizung in München verlegen lassen. Optimale Wärmeübertragung, schnellere Aufheizzeit. Fachbetrieb mit Festpreisgarantie!",
    mainKeyword: "Heizestrich München",
    longTailKeywords: [
      "Estrich Fußbodenheizung München",
      "Heizestrich verlegen lassen",
      "Fußbodenheizung Estrich Aufbau",
      "Heizestrich Kosten pro qm",
      "Zementestrich Fußbodenheizung",
      "Fließestrich Fußbodenheizung",
      "Heizestrich Trocknungszeit",
      "Funktionsheizen Estrich"
    ],
    h1: "Heizestrich München - Optimaler Estrich für Ihre Fußbodenheizung",
    sections: [
      {
        h2: "Heizestrich - Der perfekte Partner für Fußbodenheizungen",
        h3s: ["Optimale Wärmeübertragung", "Schnellere Reaktionszeit"],
        content: `Heizestrich ist speziell für die Kombination mit Fußbodenheizungen konzipiert. Die optimale Einbettung der Heizrohre und die richtige Estrichmischung sorgen für maximale Wärmeübertragung und schnelle Reaktionszeiten. Ob Zementestrich oder Calciumsulfat-Fließestrich - wir wählen das ideale System für Ihr Projekt.`
      },
      {
        h2: "Aufbau und Verlegung von Heizestrich",
        h3s: ["Dämmschicht und Randdämmstreifen", "Heizrohrverlegung und Estricheinbau"],
        content: `Der fachgerechte Aufbau beginnt mit der Dämmschicht und Randdämmstreifen. Nach der Heizrohrverlegung durch Ihren Heizungsbauer bringen wir den Heizestrich ein - mindestens 45 mm über der Heizrohr-Oberkante. Nach dem Funktionsheizen ist der Boden bereit für den Oberbelag.`
      },
      {
        h2: "Funktionsheizen - Wichtig für langlebige Böden",
        content: `Das Funktionsheizen ist unverzichtbar: 21 Tage nach Estricheinbau wird die Heizung langsam hochgefahren. Wir dokumentieren den gesamten Prozess und erstellen das Aufheizprotokoll für Ihren Bodenleger.`
      }
    ],
    faqs: [
      { q: "Welcher Estrich ist am besten für Fußbodenheizung?", a: "Calciumsulfat-Fließestrich hat die beste Wärmeleitfähigkeit. Zementestrich ist robuster und feuchtigkeitsbeständig." },
      { q: "Wie dick muss Heizestrich über der Heizung sein?", a: "Mindestens 45 mm Überdeckung über den Heizrohren. Die Gesamtstärke liegt meist bei 65-85 mm." },
      { q: "Wann kann ich nach dem Heizestrich heizen?", a: "Das Funktionsheizen beginnt frühestens 21 Tage nach Estricheinbau, dann wird langsam hochgefahren." }
    ]
  },
  zementestrich: {
    title: "Zementestrich München | Estrichverlegung vom Fachbetrieb",
    metaDescription: "Zementestrich verlegen lassen in München. Fachbetrieb mit 30+ Jahren Erfahrung, Festpreisgarantie, DIN 18560. Jetzt kostenlose Beratung!",
    mainKeyword: "Zementestrich München",
    longTailKeywords: [
      "Zementestrich verlegen lassen München",
      "Estrich Kosten pro qm München",
      "Zementestrich Trocknungszeit berechnen",
      "Estrichleger München Festpreis",
      "CT-Estrich verlegen Neubau",
      "Estrich für Fußbodenheizung München",
      "Zementestrich Fließestrich Unterschied",
      "Estrich DIN 18560 München",
      "Zementestrich Schwabing Bogenhausen",
      "Estrichleger Pasing Sendling Laim",
      "Zementestrich Neubau Altbau München"
    ],
    h1: "Zementestrich München - Professionelle Estrichverlegung vom Fachbetrieb",
    sections: [
      {
        h2: "Zementestrich verlegen lassen - Ihr Fachbetrieb in München",
        h3s: ["CT-Estrich nach DIN 18560", "Estrich für Fußbodenheizung", "Zementestrich in allen Münchner Stadtteilen"],
        content: `Als erfahrener Estrichleger in München bieten wir professionelle Zementestrich-Verlegung für Neubau und Sanierung. Mit über 30 Jahren Erfahrung und 2.500+ erfolgreich abgeschlossenen Projekten garantieren wir höchste Qualität nach DIN 18560. Unsere Estrich Kosten pro qm sind transparent und verbindlich - Sie erhalten einen Festpreis ohne versteckte Nachforderungen. Ob CT-Estrich für den klassischen Neubau oder spezieller Heizestrich für Ihre Fußbodenheizung - wir liefern perfekte Ergebnisse in ganz München: Schwabing, Bogenhausen, Pasing, Sendling, Laim, Haidhausen, Neuhausen, Maxvorstadt, Trudering und Moosach.`
      },
      {
        h2: "Zementestrich Trocknungszeit und Belegreife",
        h3s: ["Wann ist Zementestrich begehbar?", "CM-Messung für Belegreife", "Dokumentation für Bodenleger"],
        content: `Die Zementestrich Trocknungszeit beträgt als Faustregel 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht etwa 50 Tage bis zur Belegreife. Wir führen professionelle CM-Messungen durch und dokumentieren die Ergebnisse für Ihren Bodenleger. Bei Zeitdruck bieten wir auch Schnellestrich-Lösungen an.`
      },
      {
        h2: "Zementestrich vs. Fließestrich - Der Unterschied",
        h3s: ["Vorteile Zementestrich", "Vorteile Fließestrich", "Welcher Estrich für welches Projekt?"],
        content: `Zementestrich (CT) wird konventionell eingebracht und abgezogen, während Calciumsulfat-Fließestrich (CAF) selbstnivellierend ist. Fließestrich hat bessere Wärmeleitfähigkeit für Fußbodenheizungen, Zementestrich ist feuchtigkeitsbeständiger und für Nassräume geeignet. Wir beraten Sie, welche Lösung für Ihr Projekt optimal ist.`
      },
      {
        h2: "Zementestrich Kosten München - Transparente Preise",
        h3s: ["Zementestrich ab 32€/m²", "Neubau-Rabatt 5€/m²", "Festpreisgarantie"],
        content: `Zementestrich kostet in München zwischen 32-45€/m² netto zzgl. MwSt. Bei Neubauprojekten erhalten Sie 5€/m² Rabatt. Die Preise gelten für alle Münchner Stadtteile ohne Aufpreis: Schwabing-West, Bogenhausen, Au-Haidhausen, Sendling, Laim, Pasing-Obermenzing, Neuhausen-Nymphenburg, Maxvorstadt, Trudering-Riem und Moosach.`
      },
      {
        h2: "Zementestrich in Münchner Stadtteilen",
        content: `Wir verlegen Zementestrich in allen 25 Münchner Stadtbezirken: Altstadt-Lehel, Ludwigsvorstadt-Isarvorstadt, Maxvorstadt, Schwabing-West, Au-Haidhausen, Sendling, Schwanthalerhöhe, Neuhausen-Nymphenburg, Moosach, Bogenhausen, Trudering-Riem, Pasing-Obermenzing, Laim und mehr. Keine Anfahrtskosten im Stadtgebiet!`
      }
    ],
    projectExamples: [
      { title: "Neubau Einfamilienhaus", location: "München-Pasing", area: "185 m²", description: "Zementestrich C25 mit Fußbodenheizung nach DIN 18560. Belegreif nach 6 Wochen, anschließend Eichenparkett verlegt." },
      { title: "Altbausanierung Jugendstil", location: "München-Schwabing", area: "120 m²", description: "Estrich-Sanierung im denkmalgeschützten Altbau. Höhenausgleich 35mm, Trittschalldämmung nach DIN 4109." },
      { title: "Mehrfamilienhaus Neubau", location: "München-Bogenhausen", area: "480 m²", description: "6 Wohneinheiten mit Fußbodenheizung. Zementestrich C30, Funktionsheizen nach DIN EN 1264 dokumentiert." }
    ],
    faqs: [
      { q: "Wie lange muss Zementestrich trocknen?", a: "Als Faustregel gilt: 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht etwa 50 Tage bis zur Belegreife." },
      { q: "Was kostet Zementestrich pro qm in München?", a: "Die Kosten liegen zwischen 32-45 €/m² netto zzgl. MwSt., abhängig von Fläche und Anforderungen. Wir erstellen verbindliche Festpreise." },
      { q: "Ist Zementestrich für Fußbodenheizung geeignet?", a: "Ja, Zementestrich eignet sich hervorragend für Fußbodenheizungen. Als Heizestrich wird er mit speziellen Zusätzen verarbeitet." },
      { q: "In welchen Stadtteilen verlegt ihr Zementestrich?", a: "Wir verlegen Zementestrich in ganz München: Schwabing, Bogenhausen, Haidhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering, Moosach und alle anderen Stadtteile." },
      { q: "Wie schnell könnt ihr starten?", a: "In der Regel innerhalb von 1-2 Wochen nach Auftragserteilung. Bei dringendem Bedarf auch kurzfristiger - rufen Sie uns an: 089 444438872." }
    ]
  },
  industrieboeden: {
    title: "Industrieböden München | Hallenböden & Sichtestrich",
    metaDescription: "Industrieböden in München: Hartstoffestrich, Epoxidbeschichtung, geschliffener Betonboden & Sichtestrich. 10 Jahre Garantie. Jetzt beraten!",
    mainKeyword: "Industrieböden München",
    longTailKeywords: [
      "Industrieboden verlegen München",
      "Sichtestrich geschliffen München",
      "Hartstoffestrich Produktionshalle",
      "Epoxidbeschichtung Industrieboden",
      "Betonboden schleifen München",
      "Industrieboden Kosten pro qm",
      "Garagenboden Beschichtung München",
      "Hallenboden sanieren München",
      "Industrieboden Garching Unterschleißheim",
      "Sichtestrich Schwabing Maxvorstadt Loft",
      "Gewerbeboden München Nord Freimann"
    ],
    h1: "Industrieböden München - Hochbelastbare Böden für Gewerbe und Industrie",
    sections: [
      {
        h2: "Industrieboden verlegen - Lösungen für extreme Anforderungen",
        h3s: ["Hartstoffestrich für Produktionshallen", "Epoxidbeschichtung für Chemiebeständigkeit", "Industrieböden im Münchner Umland"],
        content: `Unsere Industrieböden erreichen Druckfestigkeiten von C30 bis C50 und sind für Gabelstaplerverkehr, schwere Maschinen und aggressive Chemikalien ausgelegt. Von Hartstoffestrich für Produktionshallen über chemikalienbeständige Epoxidbeschichtung bis hin zu rutschfesten Beschichtungen - wir realisieren Ihr Projekt nach DIN EN 13892. Besonders aktiv in Garching, Unterschleißheim, Freising, Dachau und dem gesamten Münchner Norden.`
      },
      {
        h2: "Sichtestrich geschliffen - Ästhetik trifft Funktionalität",
        h3s: ["Polierter Betonboden für Showrooms", "Terrazzo-Optik für moderne Architektur", "Sichtestrich in Schwabing und Maxvorstadt"],
        content: `Geschliffener Sichtestrich verbindet industriellen Charme mit höchster Belastbarkeit. Ideal für Showrooms, Lofts, Restaurants und moderne Büros. Besonders beliebt in Schwabing, Maxvorstadt, Haidhausen und anderen trendigen Münchner Stadtteilen. Wir schleifen und polieren Betonböden auf Hochglanz und versiegeln sie dauerhaft. Die Kosten für Sichtestrich liegen bei 65-120 €/m² je nach Schliffgrad.`
      },
      {
        h2: "Garagenboden und Hallenboden Beschichtung",
        h3s: ["Garagenboden München", "Hallenboden-Sanierung", "Ausführung am Wochenende"],
        content: `Professionelle Garagenboden Beschichtung schützt vor Öl, Benzin und Streusalz. Unsere Hallenboden-Sanierung bringt verschlissene Industrieböden wieder in Topzustand. Ausführung auch nachts und am Wochenende möglich, um Ihren Betrieb nicht zu stören.`
      },
      {
        h2: "Industrieböden in München und Umland",
        content: `Wir verlegen Industrieböden in ganz München und Umland: Industriegebiete in Moosach, Freimann, Milbertshofen, Garching, Unterschleißheim, Freising, Dachau, Fürstenfeldbruck und Germering. Ob Produktionshalle, Lagerhalle, Werkstatt oder Showroom - wir finden die passende Lösung.`
      }
    ],
    projectExamples: [
      { title: "Autohaus Showroom", location: "Unterschleißheim", area: "1.200 m²", description: "Hochglanz-Sichtestrich mit Anti-Rutsch-Versiegelung. Befahrbar mit Fahrzeugen bis 3,5t." },
      { title: "Brauerei Lagerhalle", location: "Freising", area: "2.800 m²", description: "Säurebeständiger Industrieboden für Getränkeproduktion. HACCP-konform." },
      { title: "Loft-Umbau", location: "München-Schwabing", area: "180 m²", description: "Geschliffener Sichtestrich für Wohn-Loft. Hochglanzpolitur mit Fußbodenheizung." }
    ],
    faqs: [
      { q: "Wie lange hält ein Industrieboden?", a: "Bei fachgerechter Ausführung halten Industrieböden 15-25 Jahre oder länger, je nach Belastung." },
      { q: "Was kostet ein Industrieboden pro qm?", a: "Je nach Ausführung zwischen 45-120 €/m² netto. Hartstoffestrich ab 45 €/m², Epoxidbeschichtung ab 65 €/m²." },
      { q: "Kann Sichtestrich mit Fußbodenheizung kombiniert werden?", a: "Ja, Sichtestrich eignet sich hervorragend für Fußbodenheizungen und leitet Wärme sehr gut." },
      { q: "Wo verlegt ihr Industrieböden?", a: "In ganz München und Umland: Garching, Unterschleißheim, Freising, Dachau, Fürstenfeldbruck und weitere Gewerbegebiete." }
    ]
  },
  fussbodenheizung: {
    title: "Fußbodenheizung nachrüsten München | Einfräsen",
    metaDescription: "Fußbodenheizung nachträglich einfräsen in München. Installation in bewohnten Räumen, nur 2-4 Tage. 500+ Nachrüstungen. Jetzt beraten!",
    mainKeyword: "Fußbodenheizung nachrüsten München",
    longTailKeywords: [
      "Fußbodenheizung einfräsen München",
      "Fußbodenheizung nachträglich einbauen Altbau",
      "Heizungsrohre in Estrich fräsen",
      "Fußbodenheizung nachrüsten Kosten",
      "Fußbodenheizung ohne Estrich entfernen",
      "Altbau Fußbodenheizung nachrüsten München",
      "Fräsverfahren Fußbodenheizung",
      "Fußbodenheizung in bewohntem Haus einbauen",
      "Fußbodenheizung Schwabing Haidhausen",
      "Fußbodenheizung nachrüsten Bogenhausen Sendling",
      "Fußbodenheizung Altbau München Pasing Laim"
    ],
    h1: "Fußbodenheizung nachrüsten München - Einfräsen in bestehenden Estrich",
    sections: [
      {
        h2: "Fußbodenheizung einfräsen - Nachrüstung ohne großen Umbau",
        h3s: ["Heizungsrohre direkt in Estrich fräsen", "Staubarme Installation mit Absaugung", "Alle Münchner Stadtteile"],
        content: `Mit unserer speziellen Frästechnik können wir Heizungsrohre direkt in Ihren bestehenden Estrich einbringen - ohne den alten Boden zu entfernen. Über 500 erfolgreiche Nachrüstungen in Münchner Altbauten beweisen unsere Kompetenz. Die Installation dauert nur 2-4 Tage für eine durchschnittliche Wohnung. Wir arbeiten in ganz München: Schwabing, Haidhausen, Bogenhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering und Moosach.`
      },
      {
        h2: "Fußbodenheizung nachträglich einbauen im Altbau",
        h3s: ["Installation in bewohnten Räumen möglich", "Minimale Aufbauhöhe von nur 15 mm", "Wärmepumpe kompatibel"],
        content: `Fußbodenheizung nachträglich einbauen war noch nie so einfach. Unser Fräsverfahren ermöglicht die Installation in bewohnten Räumen - Sie müssen nicht ausziehen. Die Vergussmasse ist nach 24 Stunden begehbar, die Heizung nach 7 Tagen betriebsbereit. Ideal für Altbauten in Schwabing-West, Haidhausen, Bogenhausen und anderen beliebten Münchner Stadtteilen.`
      },
      {
        h2: "Fußbodenheizung nachrüsten Kosten transparent kalkuliert",
        h3s: ["45-75€/m² inklusive Material", "30-50% günstiger als Neuaufbau", "Förderung durch BAFA möglich"],
        content: `Die Kosten für Fußbodenheizung nachrüsten liegen bei 45-75 €/m² netto zzgl. MwSt., inklusive Material, Fräsung und Verguss. Im Vergleich zum kompletten Neuaufbau sparen Sie 30-50% der Kosten und vermeiden wochenlangen Baulärm. Bei Kombination mit Wärmepumpe sind BAFA-Förderungen möglich.`
      },
      {
        h2: "Fußbodenheizung in Münchner Altbauten",
        content: `Besonders gefragt ist die Fußbodenheizung-Nachrüstung in den Altbau-Stadtteilen: Schwabing-West mit Jugendstil-Wohnungen, Au-Haidhausen mit Gründerzeit-Häusern, Bogenhausen mit Villen und Maxvorstadt mit historischen Gebäuden. Wir kennen die Besonderheiten Münchner Altbauten und finden für jede Situation die passende Lösung.`
      }
    ],
    projectExamples: [
      { title: "Altbau-Nachrüstung Jugendstil", location: "München-Schwabing", area: "92 m²", description: "Fußbodenheizung in bewohnter Altbauwohnung. Fräsung ohne Auszug, Vergussmasse nach 24h begehbar. Wärmepumpe-Anschluss inklusive." },
      { title: "Gründerzeit-Wohnung", location: "München-Haidhausen", area: "78 m²", description: "Nachrüstung in 3-Zimmer-Wohnung. Besonderheit: Holzbalkendecke erforderte Gewichtsoptimierung. Erfolgreiche Umsetzung in 3 Tagen." },
      { title: "Einfamilienhaus Komplett", location: "München-Pasing", area: "145 m²", description: "Erdgeschoss komplett mit Fußbodenheizung nachgerüstet. Anschluss an bestehende Wärmepumpe, Vorlauftemperatur optimiert." }
    ],
    faqs: [
      { q: "Kann jeder Estrich gefräst werden?", a: "Fast jeder. Zementestrich, Anhydritestrich und Gussasphalt eignen sich hervorragend für das Fräsverfahren." },
      { q: "Wie lange dauert die Nachrüstung einer Fußbodenheizung?", a: "Für eine durchschnittliche Wohnung (80-100 m²) benötigen wir 2-4 Arbeitstage." },
      { q: "Ist eine nachgerüstete Fußbodenheizung genauso effizient?", a: "Ja, gefräste Systeme erreichen die gleiche Effizienz wie Fußbodenheizungen im Neubau." },
      { q: "In welchen Münchner Stadtteilen rüstet ihr Fußbodenheizungen nach?", a: "Wir arbeiten in ganz München: Schwabing, Haidhausen, Bogenhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering, Moosach und alle anderen Stadtteile." },
      { q: "Kann ich während der Installation wohnen bleiben?", a: "Ja, bei unserem Fräsverfahren können Sie in der Wohnung bleiben. Die Arbeiten sind staubarm und der Verguss nach 24h begehbar." }
    ]
  },
  waermedaemmung: {
    title: "Wärmedämmung Boden München | Dämmung & Trittschall",
    metaDescription: "Professionelle Bodendämmung und Trittschalldämmung in München. KfW/BAFA-Förderung möglich. Bis 30% Heizkosten sparen. Kostenlose Beratung!",
    mainKeyword: "Wärmedämmung Boden München",
    longTailKeywords: [
      "Estrichdämmung verlegen München",
      "Trittschalldämmung unter Estrich",
      "Bodendämmung Altbau nachrüsten",
      "Dämmung unter Estrich Kosten",
      "Perimeterdämmung Bodenplatte München",
      "Wärmedämmung Fußboden Neubau",
      "KfW Förderung Bodendämmung",
      "Schallschutz Estrich DIN 4109"
    ],
    h1: "Wärmedämmung Boden München - Professionelle Estrichdämmung vom Fachbetrieb",
    sections: [
      {
        h2: "Estrichdämmung verlegen - Wärme- und Schallschutz kombiniert",
        h3s: ["Trittschalldämmung nach DIN 4109", "Wärmedämmung nach GEG-Standard"],
        content: `Professionelle Bodendämmung kombiniert Wärmeschutz und Trittschalldämmung in einem System. Wir berechnen die optimale Dämmstärke nach dem aktuellen Gebäudeenergiegesetz (GEG) und erfüllen alle Anforderungen der DIN 4109 für Schallschutz. Bis zu 30% Heizkosten-Einsparung sind möglich.`
      },
      {
        h2: "Bodendämmung Altbau nachrüsten - Förderung nutzen",
        h3s: ["KfW-Förderung für energetische Sanierung", "BAFA-Zuschüsse für Dämmmaßnahmen"],
        content: `Bei der energetischen Sanierung im Altbau unterstützen wir Sie bei KfW- und BAFA-Förderanträgen. Die Dämmung unter Estrich wird gefördert - wir dokumentieren alle U-Werte für Ihren Förderantrag. Die Investition amortisiert sich oft in 5-10 Jahren durch eingesparte Heizkosten.`
      },
      {
        h2: "Dämmung unter Estrich Kosten und Materialien",
        content: `Von EPS-Dämmung über XPS für Feuchträume bis hin zu ökologischer Holzfaserdämmung - wir bieten das passende Material. Die Kosten für Bodendämmung liegen bei 15-35 €/m² netto je nach Dämmstärke und Material. Perimeterdämmung für Bodenplatten ist unsere Spezialität.`
      }
    ],
    faqs: [
      { q: "Welche Dämmstärke brauche ich unter dem Estrich?", a: "Für Neubauten nach GEG sind meist 80-120 mm nötig, bei Sanierungen oft 40-60 mm. Wir berechnen die optimale Stärke." },
      { q: "Gibt es Förderungen für Bodendämmung?", a: "Ja, bei energetischen Sanierungen gibt es Zuschüsse von KfW (bis 15%) und BAFA. Wir unterstützen beim Antrag." },
      { q: "Wie viel Heizkosten kann ich durch Bodendämmung sparen?", a: "Je nach Ausgangssituation sind 15-30% Energieeinsparung möglich." }
    ]
  },
  sanierung: {
    title: "Estrichsanierung München | Risse & Wasserschaden",
    metaDescription: "Estrichsanierung in München: Rissinjection, Hohlstellen verpresse, Wasserschaden-Trocknung. 24h-Notfall-Service. Kostenlose Schadensanalyse!",
    mainKeyword: "Estrichsanierung München",
    longTailKeywords: [
      "Estrich Risse reparieren München",
      "Hohlstellen im Estrich verpressen",
      "Wasserschaden Estrich trocknen",
      "Estrich sanieren oder neu",
      "Estrichschaden Gutachter München",
      "Estrich Notfall Reparatur München",
      "Versicherung Estrichschaden abwickeln",
      "Estrich ausbessern Kosten"
    ],
    h1: "Estrichsanierung München - Professionelle Reparatur und Wasserschaden-Sanierung",
    sections: [
      {
        h2: "Estrich Risse reparieren - Injection statt Neuaufbau",
        h3s: ["Rissinjection mit Epoxidharz", "Kraftschlüssige Risssanierung nach DIN"],
        content: `Estrich retten statt ersetzen - wir sind spezialisiert auf wirtschaftliche Sanierungslösungen. Unsere Rissinjection mit Epoxidharz stellt die Tragfähigkeit kraftschlüssig wieder her. Die Kosten für Estrich Risse reparieren liegen bei 15-30 €/laufender Meter - deutlich günstiger als ein Neuaufbau.`
      },
      {
        h2: "Hohlstellen im Estrich verpressen - Professionelle Sanierung",
        h3s: ["Hohlstellenortung mit Klangprobe", "Niederdruckverpressung mit Spezialmörtel"],
        content: `Hohlstellen unter dem Estrich führen zu Knarzen und Bruchgefahr. Mit unserer Niederdruckverpressung füllen wir Hohlräume dauerhaft und stellen den Verbund zum Untergrund wieder her. Die kostenlose Erstdiagnose zeigt, ob Reparatur oder Neuaufbau sinnvoller ist.`
      },
      {
        h2: "Wasserschaden Estrich - 24h-Notfall-Service München",
        h3s: ["Technische Trocknung nach Wasserschaden", "Versicherungsabwicklung inklusive"],
        content: `Bei Wasserschäden ist schnelles Handeln entscheidend. Unser 24h-Notfall-Service ist innerhalb von 24 Stunden vor Ort. Wir übernehmen die technische Trocknung und die direkte Abwicklung mit Ihrer Gebäudeversicherung. Als Estrichschaden-Gutachter erstellen wir auch Schadensdokumentationen.`
      }
    ],
    faqs: [
      { q: "Wann lohnt sich Estrich sanieren statt neu verlegen?", a: "Bei lokalen Schäden (einzelne Risse, begrenzte Hohlstellen) ist Reparatur fast immer 50-70% günstiger als Neuaufbau." },
      { q: "Kann ich nach Wasserschaden den Estrich retten?", a: "Oft ja, wenn schnell gehandelt wird. Je länger Wasser im Estrich steht, desto größer der Schaden." },
      { q: "Übernimmt die Versicherung die Estrichsanierung?", a: "Bei versicherten Wasserschäden übernimmt die Gebäudeversicherung in der Regel alle Kosten. Wir wickeln direkt ab." }
    ]
  },
  schnellestrich: {
    title: "Schnellestrich München | Belegreif in 1-5 Tagen",
    metaDescription: "Schnellestrich in München: Belegreif in 1-5 Tagen statt 4-8 Wochen. Termindruck? Wir liefern! Garantierte Belegreife. Jetzt Termin sichern!",
    mainKeyword: "Schnellestrich München",
    longTailKeywords: [
      "Schnellestrich belegreif 24 Stunden",
      "Estrich schnell trocknen München",
      "Schnellzement Estrich verlegen",
      "Estrich für eilige Baustelle",
      "Schnellbinder Estrich Kosten",
      "Estrich in 3 Tagen belegreif",
      "Termindruck Estrich München",
      "1-Tages-Estrich verlegen"
    ],
    h1: "Schnellestrich München - Belegreif in 1-5 Tagen statt Wochen",
    sections: [
      {
        h2: "Schnellestrich verlegen - Zeit sparen bei gleichbleibender Qualität",
        h3s: ["Belegreif in 24 Stunden möglich", "Gleiche Endfestigkeit wie Standardestrich"],
        content: `Zeit ist Geld - mit Schnellestrich verkürzen Sie die Bauzeit um Wochen. Während normaler Zementestrich 4-8 Wochen zum Trocknen braucht, ist unser Schnellestrich in nur 1-5 Tagen belegreif. Die Endfestigkeit entspricht dem konventionellen Estrich - Sie sparen nur Zeit, nicht Qualität.`
      },
      {
        h2: "Schnellestrich Kosten vs. eingesparte Bauzeit",
        h3s: ["Materialkosten 20-40% höher", "ROI durch verkürzte Bauzeit"],
        content: `Die Materialkosten für Schnellestrich sind etwa 20-40% höher als bei Standardestrich. Aber: Keine verlängerte Miete, pünktlicher Einzug, keine Handwerker-Umplanung. Bei gewerblichen Projekten rechnet sich Schnellestrich fast immer durch frühere Nutzung.`
      },
      {
        h2: "Schnellestrich-Systeme im Vergleich",
        h3s: ["Schnellzementestrich (3-5 Tage)", "1-Tages-Estrich für extreme Eile"],
        content: `Wir bieten verschiedene Systeme: Schnellzementestrich ist belegreif in 3-5 Tagen, Calciumsulfat-Schnellestrich in 1-3 Tagen, und unser 1-Tages-Estrich für extreme Terminanforderungen. Alle Systeme eignen sich für Fußbodenheizung.`
      }
    ],
    faqs: [
      { q: "Wie viel teurer ist Schnellestrich?", a: "Die Materialkosten sind 20-40% höher. Bei 100 m² bedeutet das ca. 800-1.500 € Mehrkosten - die eingesparte Zeit ist oft mehr wert." },
      { q: "Ist Schnellestrich genauso belastbar?", a: "Ja, Schnellestrich erreicht die gleiche Endfestigkeit wie konventioneller Estrich. Nur die Trocknungszeit ist verkürzt." },
      { q: "Eignet sich Schnellestrich für Fußbodenheizung?", a: "Ja, alle unsere Schnellestrich-Systeme sind für Fußbodenheizung geeignet und freigegeben." }
    ]
  },
  sichtestrich: {
    title: "Sichtestrich München | Geschliffener Designestrich",
    metaDescription: "Sichtestrich München: Geschliffener Betonboden & Designestrich ab 65€/m². Fachbetrieb für Lofts, Showrooms & moderne Architektur. Jetzt beraten lassen!",
    mainKeyword: "Sichtestrich München",
    longTailKeywords: [
      "Sichtestrich schleifen München",
      "Geschliffener Betonboden München",
      "Designestrich verlegen lassen",
      "Polierter Estrich Kosten München",
      "Sichtestrich für Fußbodenheizung",
      "Terrazzo Estrich München",
      "Sichtestrich Loft München",
      "Betonboden geschliffen Kosten pro qm",
      "Sichtestrich Schwabing Maxvorstadt Haidhausen"
    ],
    h1: "Sichtestrich München - Geschliffener Betonboden & Designestrich vom Fachbetrieb",
    sections: [
      {
        h2: "Sichtestrich - Wenn der Boden zum Design-Element wird",
        h3s: ["Geschliffener Betonboden für moderne Räume", "Polierter Estrich als Endboden"],
        content: `Sichtestrich ist kein gewöhnlicher Estrich - er ist der fertige Boden. Geschliffen, poliert und versiegelt wird der Estrich selbst zur Oberfläche. Besonders beliebt in Lofts, Showrooms, Restaurants, Büros und modernen Wohnungen in München. Wir verlegen und schleifen Sichtestrich in allen Münchner Stadtteilen: Schwabing, Maxvorstadt, Haidhausen, Bogenhausen, Sendling und Umgebung.`
      },
      {
        h2: "Sichtestrich Kosten München - Was kostet geschliffener Beton?",
        h3s: ["Ab 65€/m² für Standard-Schliff", "Hochglanz-Politur ab 90€/m²"],
        content: `Die Kosten für Sichtestrich in München liegen zwischen 65-120 €/m² je nach Schliffgrad und Versiegelung. Standard-Schliff ab 65€/m², Feinschliff ab 80€/m², Hochglanz-Politur ab 90€/m². Terrazzo-Optik und Spezialeffekte ab 100€/m². Im Vergleich zu hochwertigem Naturstein oder Designfliesen ist Sichtestrich eine wirtschaftliche Alternative mit einzigartigem Charakter.`
      },
      {
        h2: "Sichtestrich-Varianten für Ihr Projekt",
        h3s: ["Zement-Sichtestrich geschliffen", "Terrazzo-Optik mit Zuschlägen", "Farbiger Designestrich"],
        content: `Wir bieten verschiedene Sichtestrich-Varianten: Klassisch geschliffener Zementestrich in natürlichem Betongrau, Terrazzo-Optik mit farbigen Zuschlägen aus Marmor oder Granit, eingefärbter Designestrich in Wunschfarben, und Mikrozement-Beschichtung für bestehende Böden. Alle Varianten sind mit Fußbodenheizung kombinierbar und extrem pflegeleicht.`
      }
    ],
    faqs: [
      { q: "Kann Sichtestrich mit Fußbodenheizung kombiniert werden?", a: "Ja, Sichtestrich eignet sich hervorragend für Fußbodenheizungen und leitet Wärme sehr effizient weiter." },
      { q: "Wie pflegt man Sichtestrich?", a: "Sichtestrich ist extrem pflegeleicht. Regelmäßiges Wischen mit pH-neutralem Reiniger genügt. Die Versiegelung schützt vor Flecken und Abrieb." },
      { q: "Ist Sichtestrich auch für Wohnräume geeignet?", a: "Absolut. Sichtestrich schafft eine warme, moderne Atmosphäre und ist in Münchner Lofts und Altbauwohnungen sehr beliebt." }
    ]
  }
};

const pagesSEO: Record<string, PageSEO> = {
  home: {
    title: "Estrichleger München | Fachbetrieb seit 1994",
    metaDescription: "Estrichleger München – Fachbetrieb für Estricharbeiten: Zementestrich ab 32€/m², Fließestrich, Heizestrich verlegen. 30+ Jahre Erfahrung, Festpreis-Garantie ✓",
    mainKeyword: "Estrich München",
    longTailKeywords: [
      "Estrichleger München",
      "Zementestrich München",
      "Fließestrich München",
      "Estrich Kosten München",
      "Estrich Neubau München",
      "Estrich Sanierung München",
      "Estrichleger Fachbetrieb München",
      "Estrich Schwabing Bogenhausen",
      "Estrichleger Pasing Sendling Laim",
      "Estrich Haidhausen Neuhausen Maxvorstadt"
    ],
    h1: "Estrichleger München – Zementestrich, Fließestrich & Estricharbeiten vom Fachbetrieb",
    sections: [
      {
        h2: "Estrichleger München - Fachbetrieb mit 30+ Jahren Erfahrung",
        h3s: ["Zementestrich München ab 32€/m²", "Fließestrich München für Fußbodenheizung", "Estrich Neubau und Estrich Sanierung München", "Alle Münchner Stadtteile"],
        content: `Sie suchen einen zuverlässigen Estrichleger in München? Als Estrichleger Fachbetrieb München liefern wir professionelle Estricharbeiten in ganz München und Umgebung. Mit über 30 Jahren Erfahrung und mehr als 2.500 erfolgreich abgeschlossenen Projekten sind wir Ihr verlässlicher Partner für Zementestrich München, Fließestrich München und Heizestrich München. Wir arbeiten in allen Stadtteilen: Schwabing, Bogenhausen, Haidhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering und Moosach.`
      },
      {
        h2: "Estrich München - Alle Leistungen aus einer Hand",
        h3s: ["Zementestrich München", "Fließestrich München", "Fußbodenheizung nachrüsten", "Industrieböden und Sichtestrich"],
        content: `Unsere Estrich-Leistungen in München: Zementestrich München ab 32€/m², Fließestrich München ab 38€/m², Heizestrich München für Fußbodenheizung, Fußbodenheizung nachrüsten durch Einfräsen, Industrieböden München für Gewerbe, Sichtestrich geschliffen für moderne Architektur, Schnellestrich München bei Termindruck, Estrichsanierung München für Altbauten. Alle Estrich Kosten München transparent und als Festpreis.`
      },
      {
        h2: "Estrich Kosten München - Transparente Preise pro m²",
        h3s: ["Estrich Neubau München ab 32€/m²", "Estrich Sanierung München ab 25€/m²", "Neubau-Rabatt 5€/m²"],
        content: `Was kostet Estrich in München? Estrich Kosten München: Zementestrich 32-45€/m², Fließestrich 38-52€/m², Heizestrich 42-55€/m², Schnellestrich 48-65€/m². Ob Estrich Neubau München oder Estrich Sanierung München - Sie erhalten verbindliche Festpreise ohne versteckte Kosten. Bei Neubauprojekten erhalten Sie 5€/m² Rabatt. Rufen Sie jetzt an: 089 444438872.`
      },
      {
        h2: "Estrichleger Fachbetrieb München - Ihre Vorteile",
        h3s: ["Festpreisgarantie München", "5 Jahre Gewährleistung", "Termingarantie oder 100€"],
        content: `Als Estrichleger Fachbetrieb München arbeiten wir nach DIN 18560 mit Festpreisgarantie. Bei Terminverzug erhalten Sie 100€ Gutschrift. Estrich München mit 5 Jahren Gewährleistung. Qualitätsarbeit in allen Münchner Stadtteilen.`
      },
      {
        h2: "Estrich in allen Münchner Stadtteilen",
        h3s: ["Schwabing & Bogenhausen", "Haidhausen & Sendling", "Pasing & Laim", "Neuhausen & Maxvorstadt"],
        content: `Wir verlegen Estrich in allen 25 Münchner Stadtbezirken: Altstadt-Lehel, Ludwigsvorstadt-Isarvorstadt, Maxvorstadt, Schwabing-West, Au-Haidhausen, Sendling, Sendling-Westpark, Schwanthalerhöhe, Neuhausen-Nymphenburg, Moosach, Milbertshofen-Am Hart, Schwabing-Freimann, Bogenhausen, Berg am Laim, Trudering-Riem, Ramersdorf-Perlach, Obergiesing-Fasangarten, Untergiesing-Harlaching, Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln, Hadern, Pasing-Obermenzing, Aubing-Lochhausen-Langwied, Allach-Untermenzing, Feldmoching-Hasenbergl, Laim. Keine Anfahrtskosten im Stadtgebiet München!`
      },
      {
        h2: "Estrich im Münchner Umland",
        content: `Unser Servicegebiet umfasst neben München auch das gesamte Umland bis 30 km Radius: Starnberg, Freising, Dachau, Erding, Ebersberg, Fürstenfeldbruck, Garching, Unterschleißheim, Germering, Grünwald, Pullach, Unterhaching, Ottobrunn, Haar und viele weitere Gemeinden. Faire Anfahrtskosten von 55€ pauschal für das Umland.`
      }
    ],
    projectExamples: [
      { title: "Neubau Einfamilienhaus", location: "München-Pasing", area: "185 m²", description: "Kompletter Bodenaufbau mit 100mm EPS-Dämmung und 65mm Zementestrich nach DIN 18560. Belegreif nach 6 Wochen." },
      { title: "Altbausanierung Jugendstil", location: "München-Schwabing", area: "120 m²", description: "Estrichsanierung in 1920er Jugendstil-Altbau mit nachträglicher Fußbodenheizung. Nur 45mm Aufbauhöhe." },
      { title: "Mehrfamilienhaus Neubau", location: "München-Bogenhausen", area: "480 m²", description: "6 Wohneinheiten mit Fußbodenheizung. Normgerechtes Aufheizprotokoll nach DIN EN 1264." },
      { title: "Fußbodenheizung Nachrüstung", location: "München-Haidhausen", area: "92 m²", description: "Fußbodenheizung einfräsen in bewohnter Altbauwohnung. Installation ohne Auszug in 3 Tagen." }
    ],
    faqs: [
      { q: "Was kostet Estrich verlegen in München?", a: "Estrich Kosten München: Zementestrich ab 32€/m², Fließestrich ab 38€/m², Heizestrich ab 42€/m². Verbindliche Festpreise nach Vor-Ort-Besichtigung." },
      { q: "Welcher Estrichleger in München ist empfehlenswert?", a: "Als Estrichleger Fachbetrieb München mit 30+ Jahren Erfahrung und 282 Google-Bewertungen bieten wir höchste Qualität mit Festpreisgarantie." },
      { q: "Macht ihr auch Estrich Sanierung München?", a: "Ja, Estrich Sanierung München gehört zu unseren Kernleistungen. Altbausanierung, Rissreparatur, Estrichausbesserung - alles aus einer Hand." },
      { q: "In welchen Münchner Stadtteilen arbeitet ihr?", a: "Wir arbeiten in allen 25 Münchner Stadtbezirken: Schwabing, Bogenhausen, Haidhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering, Moosach und alle anderen. Keine Anfahrtskosten im Stadtgebiet!" },
      { q: "Wie schnell könnt ihr starten?", a: "In der Regel innerhalb von 1-2 Wochen nach Auftragserteilung. Bei dringendem Bedarf auch kurzfristiger - rufen Sie uns an: 089 444438872." },
      { q: "Bietet ihr auch Fußbodenheizung nachrüsten an?", a: "Ja, wir fräsen Fußbodenheizungen nachträglich in bestehenden Estrich ein. 500+ erfolgreiche Nachrüstungen in Münchner Altbauten, 2-4 Tage Installationszeit." }
    ]
  },
  ablauf: {
    title: "Estrich verlegen Ablauf München | 7 Schritte",
    metaDescription: "Estrich verlegen Ablauf München: Estrichverlegung in 7 Schritten von Beratung bis Abnahme. Kostenlose Planung, Festpreis & Termingarantie vom Estrichleger Fachbetrieb",
    mainKeyword: "Ablauf Estrichverlegung",
    longTailKeywords: [
      "Estrichverlegung Schritt für Schritt",
      "Estrich verlegen Ablauf Neubau",
      "Wie läuft Estrichverlegung ab",
      "Estrich Bauablauf Planung",
      "Estrichleger beauftragen Ablauf",
      "Estrich Terminplanung München",
      "Estrich Vor-Ort-Beratung kostenlos",
      "Estrich Angebot einholen München"
    ],
    h1: "Estrich verlegen Ablauf München – Estrichverlegung in 7 Schritten zum perfekten Boden",
    sections: [
      {
        h2: "Schritt 1: Kostenlose Vor-Ort-Beratung und Aufmaß",
        h3s: ["Terminvereinbarung innerhalb 48 Stunden", "Baustellenbegehung durch Estrichmeister"],
        content: `Ihre Estrichverlegung beginnt mit einer kostenlosen Vor-Ort-Beratung. Unser Estrichmeister besichtigt Ihre Baustelle, nimmt das genaue Aufmaß und bespricht Ihre Anforderungen. Innerhalb von 48 Stunden nach Ihrer Anfrage sind wir vor Ort.`
      },
      {
        h2: "Schritt 2: Verbindliches Festpreisangebot",
        h3s: ["Transparente Kostenaufstellung", "Keine versteckten Nachforderungen"],
        content: `Nach der Begehung erhalten Sie ein detailliertes Festpreisangebot - verbindlich und ohne Nachforderungen. Sie sehen genau, was Sie bekommen und was es kostet. Bei Fragen erreichen Sie uns jederzeit telefonisch.`
      },
      {
        h2: "Schritt 3: Terminplanung und Bauablauf-Koordination",
        content: `Wir stimmen den Termin mit Ihrem Bauablauf ab. Bei Neubau koordinieren wir mit anderen Gewerken, bei Sanierung planen wir die Arbeiten so, dass Sie möglichst wenig gestört werden. Den vereinbarten Termin halten wir - garantiert.`
      },
      {
        h2: "Schritt 4: Professionelle Estrichverlegung",
        h3s: ["Eigener Fuhrpark für Materialanlieferung", "Saubere Arbeitsweise ohne Chaos"],
        content: `Am Verlegungstag liefern wir mit eigenem Fuhrpark alle Materialien an. Unsere Facharbeiter verlegen den Estrich präzise nach DIN-Normen. Nach Abschluss wird die Baustelle besenrein übergeben.`
      },
      {
        h2: "Schritt 5: Qualitätskontrolle und Übergabe",
        content: `Nach der Trocknungszeit führen wir eine CM-Messung durch und dokumentieren die Belegreife. Sie erhalten alle Protokolle für Ihren Bodenleger. Bei Fragen sind wir auch nach Projektabschluss für Sie da - 5 Jahre Gewährleistung inklusive.`
      }
    ],
    faqs: [
      { q: "Wie schnell können Sie mit der Estrichverlegung beginnen?", a: "In der Regel können wir innerhalb von 1-2 Wochen nach Auftragserteilung starten, bei dringendem Bedarf auch schneller." },
      { q: "Muss ich bei der Estrichverlegung anwesend sein?", a: "Nicht unbedingt. Nach der Baustellenübergabe können wir selbstständig arbeiten. Sie erhalten regelmäßige Updates." },
      { q: "Was passiert, wenn Sie den Termin nicht einhalten?", a: "Bei Verzug durch uns erhalten Sie 100€ Gutschrift. Das ist unsere Termingarantie." }
    ]
  },
  preise: {
    title: "Estrich Preise München 2026 | Kosten pro m² ab 32€",
    metaDescription: "Estrich Preise München 2026: Zementestrich ab 32€/m², Fließestrich ab 42€/m², Heizestrich ab 45€/m². Transparente Estrich Kosten pro m² mit Festpreis vom Fachbetrieb",
    mainKeyword: "Estrich Preise München",
    longTailKeywords: [
      "Estrich Kosten pro qm München",
      "Zementestrich Preis pro m²",
      "Fließestrich Kosten berechnen",
      "Estrich verlegen Kosten Neubau",
      "Estrich Preisvergleich München",
      "Was kostet Estrich pro Quadratmeter",
      "Estrich Festpreis Angebot München",
      "Günstig Estrich verlegen München"
    ],
    h1: "Estrich Preise München – Transparente Kosten pro m² mit Festpreis-Garantie",
    sections: [
      {
        h2: "Estrich Kosten pro m² - Übersicht aller Estricharten",
        h3s: ["Zementestrich ab 32 €/m² netto", "Calciumsulfat-Fließestrich ab 38 €/m² netto"],
        content: `Unsere Estrich Preise sind transparent und verbindlich. Zementestrich (CT) kostet ab 32 €/m² netto, Calciumsulfat-Fließestrich (CAF) ab 38 €/m² netto. Alle Preise verstehen sich zzgl. 19% MwSt. und beinhalten Material, Verlegung und Nachbetreuung.`
      },
      {
        h2: "Was beeinflusst die Estrich Kosten?",
        h3s: ["Estrichstärke und Estrichart", "Untergrund und Vorarbeiten", "Fläche und Zugänglichkeit"],
        content: `Die finalen Kosten hängen von mehreren Faktoren ab: Estrichart, Schichtstärke, Untergrund, Fläche und Zugänglichkeit. Bei größeren Flächen sinkt der Preis pro m². Vorarbeiten wie Dämmung werden separat kalkuliert.`
      },
      {
        h2: "Estrich Preisliste nach Leistung",
        content: `Zementestrich: 32-45 €/m² | Fließestrich: 38-52 €/m² | Heizestrich: 42-55 €/m² | Schnellestrich: 48-65 €/m² | Industrieboden: 55-85 €/m² | Sichtestrich: 75-120 €/m² | Fußbodenheizung nachrüsten: 55-75 €/m² | Estrichsanierung: ab 25 €/m². Alle Preise netto zzgl. MwSt.`
      },
      {
        h2: "Festpreisgarantie ohne versteckte Kosten",
        content: `Nach der kostenlosen Vor-Ort-Besichtigung erhalten Sie ein verbindliches Festpreisangebot. Der genannte Preis ist der Endpreis - keine Nachforderungen, keine versteckten Kosten. Das unterscheidet uns von vielen Wettbewerbern.`
      }
    ],
    faqs: [
      { q: "Was kostet Estrich verlegen pro m² in München?", a: "Je nach Estrichart zwischen 32-65 €/m² netto zzgl. MwSt. Zementestrich ab 32 €/m², Schnellestrich ab 48 €/m²." },
      { q: "Sind die Preise Festpreise?", a: "Ja, nach der Vor-Ort-Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne Nachforderungen." },
      { q: "Was ist im Preis enthalten?", a: "Material, Verlegung, Anfahrt München (55 €), Baustelleneinrichtung und Reinigung sind inklusive." }
    ]
  },
  rechner: {
    title: "Estrich Kostenrechner München 2026 | Kosten pro m²",
    metaDescription: "Estrich Kostenrechner München: Estrich Kosten pro m² online berechnen. Zementestrich ab 32€/m², Fließestrich ab 42€/m². Kostenloser Estrich Preisrechner mit Festpreis",
    mainKeyword: "Estrich Kostenrechner München",
    longTailKeywords: [
      "estrich kosten rechner",
      "estrich preis pro m2",
      "estrich kosten münchen",
      "zementestrich kosten berechnen",
      "fließestrich preis rechner",
      "estrich verlegen kosten kalkulator",
      "estrich münchen preis pro qm",
      "estrich kalkulator online kostenlos",
      "was kostet estrich pro quadratmeter",
      "estrich preisrechner 2026"
    ],
    h1: "Estrich Kostenrechner München – Estrich Kosten pro m² sofort berechnen",
    sections: [
      {
        h2: "Estrich Kosten pro m² sofort berechnen - Kostenloser Online-Rechner",
        h3s: ["Zementestrich ab 32€/m²", "Fließestrich ab 42€/m²", "Schnellestrich ab 48€/m²"],
        content: `Mit unserem kostenlosen Estrich Kostenrechner München berechnen Sie in nur 30 Sekunden Ihre Estrich Kosten pro Quadratmeter. Der Rechner kalkuliert präzise: Zementestrich ab 32€/m², Calciumsulfat-Fließestrich ab 42€/m², Schnellestrich ab 48€/m² und Industrieestrich ab 65€/m². Alle Preise gelten für München und Umgebung mit Festpreis-Garantie.`
      },
      {
        h2: "Estrich Preis berechnen - So funktioniert der Kalkulator",
        h3s: ["Schritt 1: Fläche in m² eingeben", "Schritt 2: Estrichart wählen", "Schritt 3: Optionen auswählen", "Sofort-Ergebnis erhalten"],
        content: `Der Estrich Preisrechner ist einfach zu bedienen: Geben Sie Ihre Fläche in Quadratmetern ein, wählen Sie die gewünschte Estrichart (Zementestrich, Fließestrich, Heizestrich oder Schnellestrich) und fügen Sie optionale Zusatzleistungen wie Trittschalldämmung, Wärmedämmung oder Fußbodenheizung hinzu. Der Rechner zeigt Ihnen sofort den geschätzten Gesamtpreis - transparent aufgeschlüsselt nach Position.`
      },
      {
        h2: "Was kostet Estrich verlegen in München 2026?",
        h3s: ["Aktuelle Estrich Preise pro m²", "Faktoren die den Preis beeinflussen"],
        content: `Die Estrich Kosten in München 2026 liegen zwischen 32-65€ pro m² je nach Estrichart. Faktoren die den Preis beeinflussen: Estrichstärke (45-85mm), Stockwerk (EG bis 4.OG), Projektart (Neubau oder Sanierung), Trocknungszeit und gewählte Zusatzleistungen. Bei Neubau erhalten Sie 5€/m² Rabatt. Größere Flächen ab 100m² reduzieren den Preis pro m² zusätzlich.`
      },
      {
        h2: "Vom Kostenrechner zum verbindlichen Festpreis-Angebot",
        content: `Der Estrich Kostenrechner liefert realistische Richtwerte für Ihr Budget. Für ein verbindliches Festpreis-Angebot vereinbaren Sie eine kostenlose Vor-Ort-Besichtigung. Unser Estrichmeister nimmt das genaue Aufmaß und erstellt Ihr persönliches Angebot - ohne versteckte Kosten. Die Beratung ist 100% kostenlos und unverbindlich.`
      }
    ],
    faqs: [
      { q: "Was kostet Estrich pro m² in München?", a: "Estrich kostet in München zwischen 25-65€ pro m² je nach Art: Zementestrich ab 32€/m², Fließestrich ab 42€/m², Schnellestrich ab 48€/m². Der genaue Preis hängt von Stärke, Stockwerk und Zusatzleistungen ab." },
      { q: "Wie berechne ich meine Estrich-Kosten?", a: "Mit unserem kostenlosen Online-Rechner: Geben Sie Ihre Fläche in m² ein, wählen Sie Estrichart und Stärke, und erhalten Sie sofort eine unverbindliche Kosteneinschätzung mit Festpreis-Option." },
      { q: "Ist der Estrich-Kostenrechner kostenlos?", a: "Ja, unser Estrich-Kostenrechner ist 100% kostenlos und unverbindlich. Sie erhalten sofort eine Budgeteinschätzung ohne Registrierung." },
      { q: "Wie genau ist der Estrich Kostenrechner?", a: "Der Rechner liefert realistische Richtwerte basierend auf aktuellen München-Preisen 2026. Das verbindliche Angebot erstellen wir nach Vor-Ort-Besichtigung - meist liegt es nahe am Rechner-Ergebnis." },
      { q: "Welche Kosten sind im Estrich-Preis enthalten?", a: "Material, fachgerechte Verlegung, Anfahrt München (55€ pauschal), Baustelleneinrichtung und Endreinigung. Dämmung, Fußbodenheizung und Express-Trocknung werden separat kalkuliert." }
    ]
  },
  kontakt: {
    title: "Estrichleger München kontaktieren | Beratung gratis",
    metaDescription: "Estrichleger München kontaktieren: Kostenlose Vor-Ort-Beratung, Estrich Angebot in 24h. ☎ 089 444438872. Fachbetrieb für Zementestrich & Fließestrich anfragen!",
    mainKeyword: "Kontakt Estrich München",
    longTailKeywords: [
      "Estrichleger München kontaktieren",
      "Estrich Angebot anfordern München",
      "Estrich Beratung kostenlos München",
      "Estrichfirma München anrufen",
      "Estrich Termin vereinbaren",
      "Estrich München Telefonnummer",
      "Estrich Anfrage München",
      "Estrich Vor-Ort-Termin buchen"
    ],
    h1: "Estrichleger München kontaktieren – Kostenlose Beratung & Estrich Angebot anfordern",
    sections: [
      {
        h2: "So erreichen Sie uns",
        h3s: ["Telefon: 089 / 444 43 887 2", "E-Mail: info@estriche-muenchen.de"],
        content: `Rufen Sie uns an oder schreiben Sie uns - wir melden uns schnell zurück. Montag bis Freitag sind wir von 08:00 bis 16:30 Uhr erreichbar. Außerhalb der Geschäftszeiten hinterlassen Sie eine Nachricht, wir rufen am nächsten Werktag zurück.`
      },
      {
        h2: "Kostenlose Vor-Ort-Beratung anfragen",
        content: `Nutzen Sie unser Kontaktformular für eine unverbindliche Anfrage. Beschreiben Sie kurz Ihr Projekt und wir melden uns innerhalb von 24 Stunden. Die Vor-Ort-Beratung ist kostenlos und ohne Verpflichtung.`
      },
      {
        h2: "Unser Einzugsgebiet in Oberbayern",
        content: `Wir sind in München und dem gesamten Münchner Umland tätig: Starnberg, Freising, Dachau, Erding, Ebersberg, Fürstenfeldbruck, Landsberg, Bad Aibling und weitere. Die Anfahrt innerhalb Münchens ist im Preis enthalten.`
      }
    ],
    faqs: [
      { q: "Wie schnell kann ich einen Beratungstermin bekommen?", a: "In der Regel innerhalb von 48 Stunden nach Anfrage. Bei dringendem Bedarf oft auch am selben oder nächsten Tag." },
      { q: "Ist die Vor-Ort-Beratung wirklich kostenlos?", a: "Ja, die Beratung und das Angebot sind komplett kostenlos und unverbindlich." },
      { q: "Wie weit fahren Sie für Estricharbeiten?", a: "Wir arbeiten in ganz Oberbayern. Anfahrt München Stadt ist inklusive, Umland nach Aufwand (55 € pauschal)." }
    ]
  },
  faq: {
    title: "Estrich FAQ München 2026 | Kosten & Trocknungszeit",
    metaDescription: "Estrich FAQ München: Häufige Fragen zu Estrich Kosten pro m², Trocknungszeit, Estricharten & Fußbodenheizung. 25+ Experten-Antworten vom Estrichleger Fachbetrieb",
    mainKeyword: "FAQ Estrich München",
    longTailKeywords: [
      "Estrich Fragen und Antworten",
      "Häufige Fragen Estrichverlegung",
      "Estrich Wissen Ratgeber",
      "Estrich Tipps vom Profi",
      "Estrich Beratung München",
      "Was muss ich über Estrich wissen",
      "Estrich Experte erklärt",
      "Estrich Lexikon Begriffe"
    ],
    h1: "Estrich FAQ München – Häufige Fragen zu Kosten, Trocknungszeit & Estricharten",
    sections: [
      {
        h2: "Allgemeine Fragen zu Estrich",
        h3s: ["Was ist Estrich?", "Welche Estricharten gibt es?"],
        content: `Estrich ist eine glatte Schicht auf dem Rohboden, die als Untergrund für den Bodenbelag dient. Die häufigsten Estricharten sind Zementestrich (CT), Calciumsulfat-Fließestrich (CAF), Gussasphaltestrich und Kunstharzestrich. Jede Art hat spezifische Vor- und Nachteile.`
      },
      {
        h2: "Fragen zu Kosten und Preisen",
        h3s: ["Was kostet Estrich pro m²?", "Was beeinflusst den Estrichpreis?"],
        content: `Estrich kostet je nach Art zwischen 32-65 €/m² netto. Der Preis hängt von Estrichart, Schichtstärke, Fläche und Untergrund ab. Wir bieten verbindliche Festpreise nach kostenloser Vor-Ort-Besichtigung.`
      },
      {
        h2: "Fragen zur Trocknungszeit",
        h3s: ["Wie lange muss Estrich trocknen?", "Wann kann ich auf dem Estrich laufen?"],
        content: `Die Trocknungszeit beträgt bei Zementestrich etwa 1 Tag pro mm Stärke (50 mm = 50 Tage). Begehbar ist Estrich meist nach 2-3 Tagen. Schnellestrich ist in 1-5 Tagen belegreif. Wir messen die Restfeuchte und dokumentieren die Belegreife.`
      },
      {
        h2: "Fragen zu Fußbodenheizung",
        h3s: ["Welcher Estrich für Fußbodenheizung?", "Kann man Fußbodenheizung nachrüsten?"],
        content: `Sowohl Zementestrich als auch Calciumsulfat-Fließestrich eignen sich für Fußbodenheizung. Fließestrich hat bessere Wärmeleitfähigkeit. Nachrüstung ist durch Einfräsen in bestehenden Estrich möglich - ohne den alten Boden zu entfernen.`
      }
    ]
  },
  ueberuns: {
    title: "Estrichleger München | Fachbetrieb 30+ Jahre",
    metaDescription: "Estrichleger München Fachbetrieb seit 1994: 2.500+ Projekte, 282+ zufriedene Kunden. Estricharbeiten mit Festpreis-Garantie & 5 Jahre Gewährleistung vom Experten",
    mainKeyword: "Estrich München Fachbetrieb",
    longTailKeywords: [
      "Estrichfirma München Geschichte",
      "Estrichleger München Team",
      "Estrich Meister München Erfahrung",
      "Familienunternehmen Estrich München",
      "Estrich München seit 1994",
      "Estrich Fachbetrieb Oberbayern",
      "Qualität Estrich München",
      "Zertifizierter Estrichleger München"
    ],
    h1: "Estrichleger München Fachbetrieb – 30+ Jahre Erfahrung für perfekte Estricharbeiten",
    sections: [
      {
        h2: "30 Jahre Handwerkskunst und Leidenschaft",
        h3s: ["Gründung 1994 aus Überzeugung", "Fachbetrieb mit Tradition"],
        content: `1994 gründete Mustafa Sakar Estriche München aus einer einfachen Überzeugung: Bauherren verdienen Handwerker, auf die sie sich verlassen können. Nach einer frustrierenden Erfahrung mit unzuverlässigen Estrichlegern beschloss er, es selbst besser zu machen.`
      },
      {
        h2: "Unsere Werte - Was uns antreibt",
        h3s: ["Ehrlichkeit und Transparenz", "Zuverlässigkeit und Pünktlichkeit"],
        content: `Ehrlichkeit, Zuverlässigkeit, Qualität, Respekt. Diese Werte sind seit 30 Jahren unser Kompass. Wir versprechen nur, was wir halten können - und dann liefern wir mehr. Deshalb kommen 85% unserer Aufträge durch Empfehlungen.`
      },
      {
        h2: "Das Team hinter Estrich München",
        content: `Unser Team besteht aus 12 Facharbeitern, die ihr Handwerk lieben und leben. Jeder Mitarbeiter hat eine umfassende Ausbildung durchlaufen und bildet sich kontinuierlich weiter. Sie werden den Unterschied spüren, wenn Sie unsere Mitarbeiter auf Ihrer Baustelle erleben.`
      },
      {
        h2: "Zahlen und Fakten",
        h3s: ["2.500+ abgeschlossene Projekte", "98% Kundenzufriedenheit"],
        content: `Über 2.500 erfolgreich abgeschlossene Projekte in 30 Jahren. 98% Kundenzufriedenheit in Umfragen. 85% Weiterempfehlungsrate. Diese Zahlen sind kein Marketing - sie sind das Ergebnis harter Arbeit und konsequenter Qualität.`
      }
    ],
    faqs: [
      { q: "Seit wann gibt es Estrich München?", a: "Estrich München wurde 1994 von Mustafa Sakar gegründet und ist seit über 30 Jahren im Großraum München tätig." },
      { q: "Wie viele Mitarbeiter hat Estrich München?", a: "Unser Team besteht aus 12 erfahrenen Facharbeitern plus Meister und Büro-Team." },
      { q: "Ist Estrich München ein Fachbetrieb?", a: "Ja, Estrich München ist ein eingetragener Fachbetrieb nach Handwerksordnung." }
    ]
  },
  angebot: {
    title: "Estrich Angebot München kostenlos | Festpreis 24h",
    metaDescription: "Estrich Angebot München kostenlos anfordern: Kostenvoranschlag mit Festpreis in 24h. Zementestrich ab 32€/m², Fließestrich ab 42€/m². Vor-Ort-Beratung vom Fachbetrieb",
    mainKeyword: "Estrich Angebot anfordern",
    longTailKeywords: [
      "Estrich Kostenvoranschlag München",
      "Estrich Angebot kostenlos",
      "Estrich Festpreis Angebot",
      "Estrich Beratung anfordern",
      "Estrichleger Angebot einholen",
      "Estrich Projekt anfragen",
      "Unverbindliches Estrich Angebot",
      "Estrich Vor-Ort-Besichtigung buchen"
    ],
    h1: "Estrich Angebot München – Kostenloser Kostenvoranschlag mit Festpreis in 24h",
    sections: [
      {
        h2: "Jetzt unverbindlich anfragen",
        h3s: ["Kostenlose Vor-Ort-Besichtigung", "Verbindliches Festpreisangebot"],
        content: `Beschreiben Sie Ihr Projekt und wir melden uns innerhalb von 24 Stunden. Nach einer kostenlosen Vor-Ort-Besichtigung erhalten Sie ein verbindliches Festpreisangebot - ohne versteckte Kosten und ohne Verpflichtung.`
      },
      {
        h2: "Was wir für Ihr Angebot benötigen",
        content: `Für eine erste Einschätzung nennen Sie uns: Art des Projekts (Neubau, Sanierung, Nachrüstung), ungefähre Fläche in m², gewünschte Estrichart falls bekannt, und Ihr Wunschtermin. Bei der Vor-Ort-Besichtigung klären wir alle Details.`
      },
      {
        h2: "Von der Anfrage zum fertigen Boden",
        h3s: ["48 Stunden Reaktionszeit", "Festpreis ohne Nachforderungen"],
        content: `Innerhalb von 48 Stunden nach Ihrer Anfrage sind wir vor Ort. Nach der Besichtigung erhalten Sie Ihr Festpreisangebot per E-Mail. Bei Beauftragung stimmen wir den Termin ab und starten innerhalb von 1-2 Wochen.`
      }
    ],
    faqs: [
      { q: "Ist das Angebot wirklich kostenlos?", a: "Ja, die Vor-Ort-Besichtigung und das Angebot sind komplett kostenlos und unverbindlich." },
      { q: "Wie schnell bekomme ich ein Angebot?", a: "Nach der Vor-Ort-Besichtigung erhalten Sie das Angebot innerhalb von 24-48 Stunden per E-Mail." },
      { q: "Kann der Preis sich nachträglich ändern?", a: "Nein, unser Festpreis ist verbindlich. Nachforderungen gibt es bei uns nicht - es sei denn, Sie beauftragen Zusatzleistungen." }
    ]
  },
  impressum: {
    title: "Impressum | Estriche München Firmenkontakt § 5 TMG",
    metaDescription: "Impressum Estrichleger München: Mustafa Sakar, Hardenbergstr. 4, 80992 München. ☎ 089 444438872. Angaben gemäß § 5 TMG für Estriche München Fachbetrieb",
    mainKeyword: "Impressum Estrich München",
    longTailKeywords: ["Estrich München Kontakt", "Estrichleger München Adresse", "Estriche München Inhaber"],
    h1: "Impressum Estrichleger München – Estriche München Firmenkontakt",
    sections: [
      {
        h2: "Angaben gemäß § 5 TMG",
        content: `Mustafa Sakar - Estriche München, Hardenbergstr. 4, 80992 München, Deutschland. Telefon: 089 444438872, E-Mail: info@estriche-muenchen.de. Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz wird auf Anfrage mitgeteilt.`
      },
      {
        h2: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
        content: `Mustafa Sakar, Hardenbergstr. 4, 80992 München`
      },
      {
        h2: "Streitschlichtung",
        content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`
      },
      {
        h2: "Hinweis zum Vertragsabschluss",
        content: `Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt. Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande. Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.`
      }
    ]
  },
  datenschutz: {
    title: "Datenschutz | Estriche München DSGVO & TDDDG",
    metaDescription: "Datenschutzerklärung Estrichleger München: DSGVO & TDDDG konforme Datenverarbeitung. Ihre Daten sind sicher beim Estrich Fachbetrieb Estriche München",
    mainKeyword: "Datenschutz Estrich München",
    longTailKeywords: ["DSGVO Estrich München", "Datenschutzerklärung Handwerker", "Cookies Estrich Website"],
    h1: "Datenschutzerklärung Estrichleger München – DSGVO & TDDDG konform",
    sections: [
      {
        h2: "Datenschutz auf einen Blick",
        content: `Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.`
      },
      {
        h2: "Verantwortliche Stelle",
        content: `Mustafa Sakar - Estriche München, Hardenbergstr. 4, 80992 München. Telefon: 089 444438872, E-Mail: info@estriche-muenchen.de`
      },
      {
        h2: "Ihre Rechte",
        content: `Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und Widerspruch.`
      }
    ]
  },
  agb: {
    title: "AGB Estrichleger München | Geschäftsbedingungen",
    metaDescription: "AGB Estrichleger München: Allgemeine Geschäftsbedingungen für Estricharbeiten gemäß BGB Bauvertragsrecht. Faire Vertragsbedingungen & 5 Jahre Gewährleistung",
    mainKeyword: "AGB Estrich München",
    longTailKeywords: ["Geschäftsbedingungen Estrichleger", "Gewährleistung Estrich", "Zahlungsbedingungen Handwerker"],
    h1: "AGB Estrichleger München – Geschäftsbedingungen für Estricharbeiten",
    sections: [
      {
        h2: "Geltungsbereich",
        content: `Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Mustafa Sakar - Estriche München und dem Auftraggeber über Estricharbeiten und damit verbundene Leistungen.`
      },
      {
        h2: "Gewährleistung",
        content: `Wir gewähren auf alle Estricharbeiten eine Gewährleistung von 5 Jahren gemäß BGB § 634a Abs. 1 Nr. 2. Die Gewährleistung umfasst Material- und Ausführungsmängel.`
      },
      {
        h2: "Zahlungsbedingungen",
        content: `Die Zahlung erfolgt nach Fertigstellung und Abnahme der Arbeiten. Bei größeren Projekten können Abschlagszahlungen vereinbart werden.`
      },
      {
        h2: "Hinweis zum Vertragsabschluss",
        content: `Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt. Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande. Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.`
      }
    ]
  },
  cookieeinstellungen: {
    title: "Cookie-Einstellungen | Estriche München DSGVO",
    metaDescription: "Cookie-Einstellungen Estriche München: Verwalten Sie Ihre Cookie-Präferenzen gemäß DSGVO und TDDDG. Transparente Datenschutz-Einstellungen vom Fachbetrieb",
    mainKeyword: "Cookie Einstellungen Estrich München",
    longTailKeywords: ["Cookie Präferenzen", "Datenschutz Einstellungen", "Cookie Verwaltung"],
    h1: "Cookie-Einstellungen Estriche München – Datenschutz nach DSGVO verwalten",
    sections: [
      {
        h2: "Cookie-Präferenzen verwalten",
        content: `Hier können Sie Ihre Cookie-Präferenzen verwalten. Wir respektieren Ihre Privatsphäre und geben Ihnen volle Kontrolle über Ihre Daten.`
      },
      {
        h2: "Arten von Cookies",
        h3s: ["Notwendige Cookies", "Analyse-Cookies", "Marketing-Cookies"],
        content: `Notwendige Cookies sind für den Betrieb der Website unerlässlich. Analyse-Cookies helfen uns, die Website zu verbessern. Marketing-Cookies werden für personalisierte Werbung verwendet.`
      }
    ]
  },
  barrierefreiheit: {
    title: "Barrierefreiheit | Estriche München BFSG & WCAG",
    metaDescription: "Barrierefreiheit Estriche München: Erklärung zur Barrierefreiheit gemäß BFSG, BITV 2.0 & WCAG 2.2. Barrierefreie Website vom Estrichleger Fachbetrieb",
    mainKeyword: "Barrierefreiheit Estriche München",
    longTailKeywords: ["BFSG Handwerker München", "BITV 2.0 Estrichleger", "WCAG 2.2 Bauunternehmen", "barrierefreie Website"],
    h1: "Barrierefreiheit Estriche München – Erklärung gemäß BFSG & BITV 2.0",
    sections: [
      {
        h2: "Stand der Konformität",
        content: `Diese Website ist teilweise konform mit der BITV 2.0 und den WCAG 2.2 auf Konformitätsstufe AA. Wir arbeiten kontinuierlich daran, die Barrierefreiheit unserer Website zu verbessern.`
      },
      {
        h2: "Umgesetzte Maßnahmen",
        h3s: ["Semantische Struktur", "Navigation & Bedienung", "Darstellung & Lesbarkeit", "Medien & Inhalte"],
        content: `Estriche München hat folgende Maßnahmen ergriffen: Korrekte Überschriftenhierarchie, semantische HTML5-Elemente, vollständige Tastaturnavigation, sichtbare Fokusanzeige, ARIA-Labels, ausreichende Farbkontraste, responsive Design, Alternativtexte für Bilder, beschriftete Formularfelder.`
      },
      {
        h2: "Feedback & Kontakt",
        content: `Wenn Sie auf Barrieren stoßen, kontaktieren Sie uns: E-Mail info@estriche-muenchen.de, Telefon 089 444438872, Hardenbergstr. 4, 80992 München. Wir bemühen uns, Ihre Anfrage innerhalb von 14 Tagen zu beantworten.`
      }
    ]
  },
  ratgeber: {
    title: "Estrich Ratgeber München 2026 | Tipps vom Experten",
    metaDescription: "Estrich Ratgeber München: Fachwissen und Tipps zu Zementestrich, Fließestrich, Heizestrich & Fußbodenheizung. Expertenwissen vom Estrichleger Fachbetrieb",
    mainKeyword: "Estrich Ratgeber",
    longTailKeywords: ["Estrich Tipps", "Estrich Wissen", "Estrich Beratung", "Estrich FAQ"],
    h1: "Estrich Ratgeber München – Fachwissen & Tipps vom Estrichleger Experten",
    sections: [
      {
        h2: "Alles über Estrich",
        content: `In unserem Ratgeber finden Sie umfassende Informationen zu allen Estricharten, Trocknungszeiten, Kosten und praktische Tipps für Ihr Bauprojekt.`
      },
      {
        h2: "Beliebte Themen",
        h3s: ["Estricharten im Vergleich", "Trocknungszeiten berechnen", "Kosten kalkulieren"],
        content: `Erfahren Sie mehr über die Unterschiede zwischen Zementestrich und Fließestrich, wie Sie die Trocknungszeit berechnen und was Estrich in München kostet.`
      }
    ]
  }
};

function generateBaseHTML(page: PageSEO, canonicalPath: string): string {
  const baseUrl = "https://estriche-muenchen.de";
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const isRechnerPage = canonicalPath === '/rechner';
  
  const sectionsHTML = page.sections.map(section => {
    let sectionContent = `<section>\n<h2>${section.h2}</h2>\n`;
    if (section.h3s && section.h3s.length > 0) {
      section.h3s.forEach(h3 => {
        sectionContent += `<h3>${h3}</h3>\n`;
      });
    }
    sectionContent += `<p>${section.content}</p>\n</section>`;
    return sectionContent;
  }).join('\n');

  const faqsHTML = page.faqs ? `
    <section itemscope itemtype="https://schema.org/FAQPage">
      <h2>Häufig gestellte Fragen</h2>
      ${page.faqs.map(faq => `
        <article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">${faq.q}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">${faq.a}</p>
          </div>
        </article>
      `).join('\n')}
    </section>
  ` : '';

  const projectExamplesHTML = page.projectExamples ? `
    <section>
      <h2>Referenzprojekte in München</h2>
      ${page.projectExamples.map(project => `
        <article itemscope itemtype="https://schema.org/CreativeWork">
          <h3 itemprop="name">${project.title} - ${project.location}</h3>
          <p><strong>Fläche:</strong> ${project.area}</p>
          <p itemprop="description">${project.description}</p>
        </article>
      `).join('\n')}
    </section>
  ` : '';

  const keywordsContent = page.longTailKeywords.join(', ');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.metaDescription}">
  <meta name="keywords" content="${page.mainKeyword}, ${keywordsContent}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="de" href="${canonicalUrl}">
  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
  
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.metaDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="de_DE">
  <meta property="og:site_name" content="Estrich München">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.metaDescription}">
  
  <meta name="geo.region" content="DE-BY">
  <meta name="geo.placename" content="München">
  <meta name="geo.position" content="48.1351;11.5820">
  <meta name="ICBM" content="48.1351, 11.5820">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mustafa Sakar - Estriche München",
    "description": "${page.metaDescription}",
    "url": "${baseUrl}",
    "telephone": "+49-89-444-438-872",
    "email": "info@estriche-muenchen.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hardenbergstr. 4",
      "addressLocality": "München",
      "postalCode": "80992",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "areaServed": [
      {"@type": "City", "name": "München"},
      {"@type": "AdministrativeArea", "name": "München-Schwabing"},
      {"@type": "AdministrativeArea", "name": "München-Bogenhausen"},
      {"@type": "AdministrativeArea", "name": "München-Haidhausen"},
      {"@type": "AdministrativeArea", "name": "München-Sendling"},
      {"@type": "AdministrativeArea", "name": "München-Pasing"},
      {"@type": "AdministrativeArea", "name": "München-Laim"},
      {"@type": "AdministrativeArea", "name": "München-Neuhausen"},
      {"@type": "AdministrativeArea", "name": "München-Maxvorstadt"},
      {"@type": "AdministrativeArea", "name": "München-Trudering"},
      {"@type": "AdministrativeArea", "name": "München-Moosach"},
      {"@type": "City", "name": "Starnberg"},
      {"@type": "City", "name": "Freising"},
      {"@type": "City", "name": "Dachau"},
      {"@type": "City", "name": "Erding"},
      {"@type": "City", "name": "Ebersberg"},
      {"@type": "City", "name": "Fürstenfeldbruck"},
      {"@type": "City", "name": "Garching"},
      {"@type": "City", "name": "Unterschleißheim"},
      {"@type": "City", "name": "Grünwald"}
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:30"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "282",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Estrich-Dienstleistungen",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Zementestrich"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fließestrich"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fußbodenheizung nachrüsten"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrieböden"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Schnellestrich"}}
      ]
    }
  }
  </script>
  ${isRechnerPage ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Estrich Kostenrechner München",
    "description": "Kostenloser Online-Rechner zur Kalkulation von Estrich-Kosten in München und Umgebung",
    "url": "${baseUrl}/rechner",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Kostenlose Nutzung des Estrich-Kostenrechners"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Estriche München",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hardenbergstr. 4",
        "addressLocality": "München",
        "postalCode": "80992",
        "addressCountry": "DE"
      }
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "${baseUrl}"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Estrich Kostenrechner",
        "item": "${baseUrl}/rechner"
      }
    ]
  }
  </script>
  ` : ''}
</head>
<body>
  <header>
    <nav aria-label="Hauptnavigation">
      <a href="/" title="Estrich München Startseite">Estrich München</a>
      <a href="/leistungen/zementestrich" title="Zementestrich verlegen München">Zementestrich</a>
      <a href="/leistungen/industrieboeden" title="Industrieböden München">Industrieböden</a>
      <a href="/leistungen/fussbodenheizung" title="Fußbodenheizung nachrüsten München">Fußbodenheizung</a>
      <a href="/leistungen/waermedaemmung" title="Wärmedämmung Boden München">Wärmedämmung</a>
      <a href="/leistungen/sanierung" title="Estrichsanierung München">Sanierung</a>
      <a href="/leistungen/schnellestrich" title="Schnellestrich München">Schnellestrich</a>
      <a href="/preise" title="Estrich Preise München">Preise</a>
      <a href="/rechner" title="Estrich Kostenrechner München">Kostenrechner</a>
      <a href="/kontakt" title="Kontakt Estrich München">Kontakt</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>${page.h1}</h1>
      ${sectionsHTML}
      ${projectExamplesHTML}
      ${faqsHTML}
      <section>
        <h2>Jetzt kostenlos beraten lassen</h2>
        <p>Telefon: <a href="tel:+4989444438872">089 / 444 43 887 2</a></p>
        <p>E-Mail: <a href="mailto:info@estriche-muenchen.de">info@estriche-muenchen.de</a></p>
        <p>Oder nutzen Sie unser <a href="/angebot" title="Kostenloses Estrich Angebot anfordern">Kontaktformular</a> für eine unverbindliche Anfrage.</p>
      </section>
    </article>
  </main>
  <footer>
    <section>
      <h4>Estrich-Leistungen München</h4>
      <nav aria-label="Estrich Leistungen">
        <a href="/leistungen/zementestrich" title="Zementestrich München">Zementestrich München</a>
        <a href="/leistungen/fliessestrich" title="Fließestrich München">Fließestrich München</a>
        <a href="/leistungen/heizestrich" title="Heizestrich München">Heizestrich München</a>
        <a href="/leistungen/industrieboeden" title="Industrieböden München">Industrieböden München</a>
        <a href="/leistungen/fussbodenheizung" title="Fußbodenheizung nachrüsten">Fußbodenheizung nachrüsten</a>
        <a href="/leistungen/schnellestrich" title="Schnellestrich München">Schnellestrich München</a>
        <a href="/leistungen/waermedaemmung" title="Wärmedämmung Boden">Wärmedämmung Boden</a>
        <a href="/leistungen/sanierung" title="Estrichsanierung München">Estrichsanierung München</a>
      </nav>
    </section>
    <section>
      <h4>Estrichleger Fachbetrieb München</h4>
      <nav aria-label="Informationen">
        <a href="/preise" title="Estrich Preise München">Estrich Preise München</a>
        <a href="/rechner" title="Estrich Kosten berechnen">Estrich Kosten berechnen</a>
        <a href="/ablauf" title="Estrich verlegen Ablauf">Estrich verlegen Ablauf</a>
        <a href="/faq" title="Estrich FAQ München">Estrich FAQ München</a>
        <a href="/ueber-uns" title="Estrichleger Fachbetrieb München">Estrichleger Fachbetrieb München</a>
        <a href="/angebot" title="Kostenloses Angebot">Kostenloses Angebot</a>
      </nav>
    </section>
    <section>
      <h4>Estrichleger in Münchner Stadtteilen</h4>
      <p>Wir verlegen Estrich in allen Münchner Stadtteilen: Schwabing, Bogenhausen, Haidhausen, Sendling, Pasing, Laim, Neuhausen, Maxvorstadt, Trudering, Moosach, Altstadt-Lehel, Berg am Laim, Ramersdorf-Perlach, Milbertshofen, Feldmoching, Aubing, Allach, Hadern, Solln und das gesamte Umland.</p>
    </section>
    <p>© 2026 Mustafa Sakar - Estriche München - Ihr Fachbetrieb für Estricharbeiten</p>
    <p>Telefon: <a href="tel:+4989444438872">089 / 444 43 887 2</a> | Hardenbergstr. 4, 80992 München</p>
    <p>Servicegebiet: München, Starnberg, Freising, Dachau, Erding, Fürstenfeldbruck, Garching, Grünwald</p>
    <nav aria-label="Rechtliches">
      <a href="/impressum" title="Impressum">Impressum</a>
      <a href="/datenschutz" title="Datenschutzerklärung">Datenschutz</a>
      <a href="/agb" title="AGB">AGB</a>
      <a href="/barrierefreiheit" title="Barrierefreiheit">Barrierefreiheit</a>
    </nav>
    <section>
      <h4>Hinweis zum Vertragsabschluss</h4>
      <p>Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt. Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande. Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.</p>
    </section>
  </footer>
</body>
</html>`;
}

function generateServicePage(serviceId: string): string | null {
  const service = servicesData[serviceId];
  if (!service) {
    return null;
  }
  return generateBaseHTML(service, `/leistungen/${serviceId}`);
}

function generateHomePage(): string {
  return generateBaseHTML(pagesSEO.home, '/');
}

function generatePage(pageId: string): string {
  const page = pagesSEO[pageId];
  if (!page) {
    return generateHomePage();
  }
  
  const pathMap: Record<string, string> = {
    home: '/',
    ablauf: '/ablauf',
    preise: '/preise',
    rechner: '/rechner',
    kontakt: '/kontakt',
    faq: '/faq',
    ueberuns: '/ueber-uns',
    angebot: '/angebot',
    impressum: '/impressum',
    datenschutz: '/datenschutz',
    agb: '/agb',
    cookieeinstellungen: '/cookie-einstellungen',
    barrierefreiheit: '/barrierefreiheit',
    ratgeber: '/ratgeber'
  };
  
  return generateBaseHTML(page, pathMap[pageId] || '/');
}

// Münchner Stadtteile für Stadtteil-Seiten
const districtPages: Record<string, { name: string; bezirk: number; description: string; highlights: string[] }> = {
  'altstadt-lehel': { name: 'Altstadt-Lehel', bezirk: 1, description: 'Estrichleger im Herzen Münchens. Denkmalschutz-Sanierungen, Altbau-Estrich und Fußbodenheizung nachrüsten in historischen Gebäuden rund um Marienplatz und Maximilianstraße.', highlights: ['Denkmalschutz-Sanierungen', 'Altbau-Estrich mit Höhenausgleich', 'Fußbodenheizung nachrüsten'] },
  'ludwigsvorstadt-isarvorstadt': { name: 'Ludwigsvorstadt-Isarvorstadt', bezirk: 2, description: 'Estrich verlegen von Theresienwiese bis Gärtnerplatzviertel. Gründerzeit-Altbau Sanierung, Gastronomieböden und Trittschalldämmung.', highlights: ['Gründerzeit-Altbau Sanierung', 'Gastronomieböden', 'Trittschalldämmung'] },
  'maxvorstadt': { name: 'Maxvorstadt', bezirk: 3, description: 'Sichtestrich für Galerien und Ateliers, Büroestrich für Start-ups. Estrichleger im Universitätsviertel mit Pinakotheken und TU München.', highlights: ['Sichtestrich für Galerien', 'Büroestrich Start-ups', 'Uni-Gebäude Sanierung'] },
  'schwabing-west': { name: 'Schwabing-West', bezirk: 4, description: 'Premium-Estrich in Schwabings eleganten Altbauwohnungen und hochwertigen Neubauten. Fußbodenheizungs-Nachrüstung in Jugendstil-Wohnungen.', highlights: ['Jugendstil-Fußbodenheizung', 'Premium-Neubauestrich', 'Schallschutz'] },
  'au-haidhausen': { name: 'Au-Haidhausen', bezirk: 5, description: 'Gründerzeit-Sanierung im Franzosenviertel, Loft-Umbauten mit Sichtestrich. Estrichleger für charmante Altbauten und moderne Lofts.', highlights: ['Gründerzeit-Sanierung', 'Loft-Sichtestrich', 'Fußbodenheizung Altbau'] },
  'sendling': { name: 'Sendling', bezirk: 6, description: 'Estrich in Sendling: Von Altbauwohnungen bis moderne Reihenhäuser. Altbau-Trittschalldämmung und Neubauprojekte am Südpark.', highlights: ['Altbau-Trittschalldämmung', 'Neubauprojekte Südpark', 'Gewerbeboden'] },
  'sendling-westpark': { name: 'Sendling-Westpark', bezirk: 7, description: 'Estrichsanierung in 70er/80er Wohnanlagen rund um den Westpark. Energetische Bodendämmung und Fußbodenheizung nachrüsten.', highlights: ['70er/80er Sanierung', 'Energetische Dämmung', 'Fußbodenheizung'] },
  'schwanthalerhoehe': { name: 'Schwanthalerhöhe', bezirk: 8, description: 'Loft-Umbauten mit Sichtestrich, Gewerbeestrich und moderne Wohnkomplexe an der Theresienhöhe und im Westend.', highlights: ['Loft-Umbauten', 'Gewerbeestrich', 'Wohnkomplexe'] },
  'neuhausen-nymphenburg': { name: 'Neuhausen-Nymphenburg', bezirk: 9, description: 'Villen-Sanierung in Nymphenburg, Premium-Estrich am Rotkreuzplatz. Fließestrich mit Fußbodenheizung für anspruchsvolle Kunden.', highlights: ['Villen-Sanierung', 'Premium-Heizestrich', 'Altbau Neuhausen'] },
  'moosach': { name: 'Moosach', bezirk: 10, description: 'Neubaugebiet Luitpoldkaserne, Gewerbeestrich und Bestandssanierung. Estrichleger für Moosachs wachsende Wohnviertel.', highlights: ['Neubaugebiet Luitpoldkaserne', 'Gewerbeestrich', 'Bestandssanierung'] },
  'milbertshofen-am-hart': { name: 'Milbertshofen-Am Hart', bezirk: 11, description: 'Industrieböden rund um BMW und Allianz Arena. Gewerbeestrich und Wohnestrich im Olympiadorf.', highlights: ['Industrieböden BMW-Umfeld', 'Gewerbeestrich', 'Wohnestrich Olympiadorf'] },
  'schwabing-freimann': { name: 'Schwabing-Freimann', bezirk: 12, description: 'Neubaugebiet Bayernkaserne und Altbau-Sanierung in Schwabing. Estrich vom Großprojekt bis zur Jugendstil-Wohnung.', highlights: ['Bayernkaserne Neubau', 'Altbau Schwabing', 'Gewerbepark Freimann'] },
  'bogenhausen': { name: 'Bogenhausen', bezirk: 13, description: 'Premium-Estrich für Villen im Herzogpark und Luxuswohnungen an der Prinzregentenstraße. Münchens nobelster Bezirk.', highlights: ['Villen Herzogpark', 'Premium-Sichtestrich', 'Luxuswohnungen'] },
  'berg-am-laim': { name: 'Berg am Laim', bezirk: 14, description: 'Neubaugebiet Werksviertel-Mitte und Bestandssanierung. Fließestrich für neue Wohnquartiere am Ostbahnhof.', highlights: ['Werksviertel-Mitte', 'Bestandssanierung', 'Gewerbeestrich'] },
  'trudering-riem': { name: 'Trudering-Riem', bezirk: 15, description: 'Einfamilienhaus-Estrich in Trudering, Neubauten Messestadt Riem und Gewerbeböden rund um die Neue Messe München.', highlights: ['Einfamilienhaus-Estrich', 'Messestadt Neubauten', 'Gewerbeböden Messe'] },
  'ramersdorf-perlach': { name: 'Ramersdorf-Perlach', bezirk: 16, description: 'Großsanierung Neuperlach-Wohnblöcke und Neubaugebiet Zamilapark. Estricharbeiten im einwohnerstärksten Bezirk Münchens.', highlights: ['Großsanierung Neuperlach', 'Neubaugebiet Zamilapark', 'Eigentümergemeinschaften'] },
  'obergiesing-fasangarten': { name: 'Obergiesing-Fasangarten', bezirk: 17, description: 'Altbausanierung in Giesing und neue Wohnprojekte am Candidplatz. Fußbodenheizung nachrüsten und Estrichsanierung.', highlights: ['Altbausanierung Giesing', 'Wohnbauprojekte', 'Fußbodenheizung nachrüsten'] },
  'untergiesing-harlaching': { name: 'Untergiesing-Harlaching', bezirk: 18, description: 'Villen-Estrich in Harlaching, Altbau-Sanierung Untergiesing. Zwischen Isar und Tierpark Hellabrunn.', highlights: ['Villen Harlaching', 'Altbau Untergiesing', 'Energetische Dämmung'] },
  'thalkirchen-obersendling-forstenried-fuerstenried-solln': { name: 'Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln', bezirk: 19, description: 'Premium-Villen in Solln, Siemens-Campus Gewerbeböden und Einfamilienhäuser in Forstenried.', highlights: ['Villen Solln', 'Siemens-Campus', 'Einfamilienhäuser Forstenried'] },
  'hadern': { name: 'Hadern', bezirk: 20, description: 'Einfamilienhaus-Estrich und Klinikum-Umfeld Gewerbeböden. Estrichsanierung in Wohnanlagen am Haderner Stern.', highlights: ['Einfamilienhaus-Estrich', 'Klinikum Gewerbeböden', 'Wohnanlagen-Sanierung'] },
  'pasing-obermenzing': { name: 'Pasing-Obermenzing', bezirk: 21, description: 'Villen-Estrich in Obermenzing, Neubauprojekte am Pasinger Bahnhof. Premium-Heizestrich und Gewerbeestrich.', highlights: ['Villen Obermenzing', 'Neubauten Pasing', 'Gewerbeestrich'] },
  'aubing-lochhausen-langwied': { name: 'Aubing-Lochhausen-Langwied', bezirk: 22, description: 'Freiham Großprojekt – eines der größten Neubauprojekte Bayerns. Estrich in Serie für neue Wohnanlagen.', highlights: ['Freiham Großprojekt', 'Neubau-Estrich', 'Einfamilienhäuser Aubing'] },
  'allach-untermenzing': { name: 'Allach-Untermenzing', bezirk: 23, description: 'Einfamilienhaus-Estrich und Industrieböden im MAN-Umfeld. Dörflicher Charme am Stadtrand.', highlights: ['Einfamilienhaus-Estrich', 'Industrieböden MAN', 'Bestandssanierung'] },
  'feldmoching-hasenbergl': { name: 'Feldmoching-Hasenbergl', bezirk: 24, description: 'Neubaugebiet Feldmoching-Nord und Großsanierung Hasenbergl. Estrich in großem Maßstab.', highlights: ['Neubaugebiet Feldmoching', 'Großsanierung Hasenbergl', 'Gewerbeestrich'] },
  'laim': { name: 'Laim', bezirk: 25, description: 'Altbau-Estrich und Neubauprojekte Landsberger Straße. Kompaktes Wohnviertel mit vielfältigen Estrichprojekten.', highlights: ['Altbau-Estrich', 'Neubauten Landsberger Straße', 'Trittschalldämmung'] }
};

function generateDistrictPage(slug: string): string | null {
  const district = districtPages[slug];
  if (!district) return null;

  const baseUrl = 'https://estriche-muenchen.de';
  const path = `/muenchen/${slug}`;
  const highlightsHTML = district.highlights.map(h => `<li>${h}</li>`).join('\n        ');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Estrichleger ${district.name} | Estrich verlegen in München-${district.name}</title>
  <meta name="description" content="Estrichleger in München-${district.name}: Zementestrich, Fließestrich, Fußbodenheizung & Sanierung vom Fachbetrieb. Festpreisgarantie. Jetzt beraten lassen!">
  <meta name="keywords" content="Estrichleger ${district.name}, Estrich ${district.name} München, Estrich verlegen ${district.name}, Fußbodenheizung ${district.name}, Estrichsanierung ${district.name}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="geo.region" content="DE-BY">
  <meta name="geo.placename" content="München ${district.name}">
  <link rel="canonical" href="${baseUrl}${path}">
  <meta property="og:title" content="Estrichleger ${district.name} | Estriche München">
  <meta property="og:description" content="Estrich verlegen in München-${district.name}. Fachbetrieb mit Festpreisgarantie.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${baseUrl}${path}">
  <meta property="og:locale" content="de_DE">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Estrichverlegung ${district.name}",
    "description": "${district.description.replace(/"/g, '\\"')}",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Estriche München",
      "telephone": "+49 89 444438872",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hardenbergstr. 4",
        "addressLocality": "München",
        "postalCode": "80992",
        "addressCountry": "DE"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "München-${district.name}"
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "${baseUrl}"},
      {"@type": "ListItem", "position": 2, "name": "München Stadtteile", "item": "${baseUrl}/muenchen"},
      {"@type": "ListItem", "position": 3, "name": "${district.name}", "item": "${baseUrl}${path}"}
    ]
  }
  </script>
</head>
<body>
  <header>
    <nav aria-label="Hauptnavigation">
      <a href="/">Estrich München</a>
      <a href="/leistungen/zementestrich">Zementestrich</a>
      <a href="/leistungen/fussbodenheizung">Fußbodenheizung</a>
      <a href="/preise">Preise</a>
      <a href="/kontakt">Kontakt</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Estrichleger ${district.name} – Ihr Fachbetrieb in München</h1>
      <p>${district.description}</p>
      <section>
        <h2>Estrich verlegen in ${district.name}</h2>
        <ul>
        ${highlightsHTML}
        </ul>
      </section>
      <section>
        <h2>Unsere Leistungen in ${district.name}</h2>
        <ul>
          <li><a href="/leistungen/zementestrich">Zementestrich ${district.name}</a> – ab 32€/m²</li>
          <li><a href="/leistungen/fliessestrich">Fließestrich ${district.name}</a> – ab 38€/m²</li>
          <li><a href="/leistungen/fussbodenheizung">Fußbodenheizung nachrüsten ${district.name}</a> – ab 45€/m²</li>
          <li><a href="/leistungen/sanierung">Estrichsanierung ${district.name}</a> – ab 25€/m²</li>
          <li><a href="/leistungen/industrieboeden">Industrieböden ${district.name}</a> – ab 45€/m²</li>
          <li><a href="/leistungen/waermedaemmung">Wärmedämmung ${district.name}</a> – ab 15€/m²</li>
        </ul>
      </section>
      <section>
        <h2>Jetzt kostenlos beraten lassen</h2>
        <p>Telefon: <a href="tel:+4989444438872">089 / 444 43 887 2</a></p>
        <p><a href="/angebot">Kostenloses Angebot für ${district.name} anfordern</a></p>
      </section>
    </article>
  </main>
  <footer>
    <p>© 2026 Mustafa Sakar - Estriche München - Fachbetrieb für Estricharbeiten</p>
    <p>Hardenbergstr. 4, 80992 München | <a href="tel:+4989444438872">089 / 444 43 887 2</a></p>
  </footer>
</body>
</html>`;
}

// Blog-Artikel SSR content
const blogArticleSEO: Record<string, { title: string; description: string }> = {
  'estrich-trocknungszeit-richtig-berechnen': { title: 'Estrich Trocknungszeit richtig berechnen', description: 'Wie lange muss Estrich trocknen? Die wichtigsten Faktoren und Richtwerte für eine sichere Bodenverlegung.' },
  'fussbodenheizung-estrich-was-beachten': { title: 'Fußbodenheizung und Estrich: Was Sie beachten müssen', description: 'Die richtige Estrichart, Aufheizprotokoll und häufige Fehler bei Heizestrich vermeiden.' },
  'estrich-sanierung-wann-notwendig': { title: 'Estrichsanierung: Wann ist sie notwendig?', description: 'Risse, Hohlstellen, Wasserschaden – wann Sie Ihren Estrich sanieren sollten.' },
  'industrieboden-anforderungen-gewerbe': { title: 'Industrieboden: Anforderungen im Gewerbe', description: 'Anforderungen an Industrieböden für Produktion, Lager und Showrooms.' },
  'schnellestrich-vorteile-einsatzgebiete': { title: 'Schnellestrich: Vorteile und Einsatzgebiete', description: 'Schnellestrich für termingebundene Projekte – begehbar in wenigen Stunden.' },
  'waermedaemmung-estrich-energiesparen': { title: 'Wärmedämmung unter Estrich: Energie sparen', description: 'Wie Bodendämmung Heizkosten senkt und welche Förderungen es gibt.' },
  'zementestrich-oder-fliessestrich': { title: 'Zementestrich oder Fließestrich?', description: 'Der große Vergleich: Vor- und Nachteile beider Estricharten.' },
  'estrich-kosten-berechnen-preisfaktoren': { title: 'Estrich Kosten berechnen: Alle Preisfaktoren', description: 'Was Estrich pro m² kostet und welche Faktoren den Preis beeinflussen.' },
  'fehler-estricharbeiten-vermeiden': { title: 'Häufige Fehler bei Estricharbeiten vermeiden', description: 'Die 10 häufigsten Fehler beim Estrich verlegen und wie Sie sie vermeiden.' },
  'estrich-aufbau-schichten-erklaert': { title: 'Estrich Aufbau: Schichten und Materialien erklärt', description: 'Der komplette Bodenaufbau erklärt: Von der Rohdecke bis zum fertigen Estrich.' },
  'estrich-schleifen-polieren-anleitung': { title: 'Estrich schleifen und polieren: Anleitung & Kosten', description: 'So wird aus rohem Estrich ein glänzender Sichtestrich. Kosten und Verfahren.' },
  'estrich-grundierung-wann-notwendig': { title: 'Estrich Grundierung: Wann ist sie notwendig?', description: 'Wann Estrich grundiert werden muss und welche Grundierung die richtige ist.' },
  'schwimmender-estrich-vorteile-aufbau': { title: 'Schwimmender Estrich: Vorteile und Aufbau', description: 'Warum schwimmender Estrich Standard ist und wie er aufgebaut wird.' },
  'estrich-dicke-berechnen-empfehlung': { title: 'Estrich Dicke berechnen: Empfehlungen nach DIN', description: 'Die richtige Estrichdicke nach DIN 18560 für Ihr Projekt.' },
  'estrich-feuchtigkeit-messen-cm-methode': { title: 'Estrich Feuchtigkeit messen: Die CM-Methode', description: 'CM-Messung erklärt: So prüfen Sie die Belegreife Ihres Estrichs.' },
  'aufheizprotokoll-fussbodenheizung-anleitung': { title: 'Aufheizprotokoll Fußbodenheizung: Anleitung', description: 'Schritt-für-Schritt Anleitung zum Funktionsheizen nach DIN EN 1264.' },
  'estrich-daemmung-pflicht-geg-2026': { title: 'Estrichdämmung Pflicht: Was das GEG 2026 fordert', description: 'Aktuelle GEG-Anforderungen für Bodendämmung bei Neubau und Sanierung.' },
  'estrich-gefaelle-bad-dusche': { title: 'Estrich Gefälle Bad & Dusche richtig planen', description: 'Das richtige Gefälle im Nassbereich: Normen, Maße und Ausführung.' },
  'estrich-risse-ursachen-reparatur': { title: 'Estrich Risse: Ursachen und Reparaturmethoden', description: 'Warum Estrich reißt und wie Risse professionell repariert werden.' },
  'estrich-altbau-sanierung-tipps': { title: 'Estrich im Altbau sanieren: Praktische Tipps', description: 'Besonderheiten bei der Estrichsanierung in Münchner Altbauten.' },
  'sichtestrich-kosten-vorteile-nachteile': { title: 'Sichtestrich: Kosten, Vorteile & Nachteile', description: 'Alles über Sichtestrich als Bodenbelag: Kosten, Pflege und Eignung.' },
  'gussasphaltestrich-einsatzgebiete': { title: 'Gussasphaltestrich: Einsatzgebiete und Vorteile', description: 'Gussasphalt als Estrichlösung: Wo er eingesetzt wird und was er kostet.' },
  'estrich-garage-belastbar-beschichtung': { title: 'Estrich in der Garage: Belastbar & beschichtet', description: 'Der richtige Garagenboden: Estricharten, Beschichtungen und Kosten.' },
  'trittschalldaemmung-estrich-din4109': { title: 'Trittschalldämmung unter Estrich nach DIN 4109', description: 'Trittschallschutz richtig planen: Normen, Materialien und Aufbau.' },
  'estrich-nachbesserung-maengel-rechte': { title: 'Estrich Nachbesserung: Mängel und Ihre Rechte', description: 'Ihre Rechte bei Estrichmängeln: Gewährleistung, Nachbesserung und Schadensersatz.' },
  'estrich-neubau-planung-zeitplan': { title: 'Estrich im Neubau: Planung und Zeitplan', description: 'So planen Sie Estricharbeiten im Neubau: Zeitpunkt, Dauer und Koordination.' },
  'waermepumpe-fussbodenheizung-estrich': { title: 'Wärmepumpe & Fußbodenheizung: Welcher Estrich?', description: 'Der optimale Estrich für Wärmepumpen mit Fußbodenheizung.' },
  'estrich-keller-feuchtigkeit-abdichtung': { title: 'Estrich im Keller: Feuchtigkeit und Abdichtung', description: 'Estrich im Kellerbereich: Feuchtigkeitsschutz, Abdichtung und Materialwahl.' },
  'epoxidharz-beschichtung-industrieboden': { title: 'Epoxidharz Beschichtung für Industrieböden', description: 'Epoxidharzbeschichtung: Vorteile, Kosten und Anwendungen für Gewerbeböden.' }
};

function generateBlogArticlePage(slug: string): string | null {
  const article = blogArticleSEO[slug];
  if (!article) return null;

  const baseUrl = 'https://estriche-muenchen.de';
  const path = `/ratgeber/${slug}`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.title} | Estrich Ratgeber München</title>
  <meta name="description" content="${article.description}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${baseUrl}${path}">
  <meta property="og:title" content="${article.title} | Estrich Ratgeber München">
  <meta property="og:description" content="${article.description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${baseUrl}${path}">
  <meta property="og:locale" content="de_DE">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${article.title}",
    "description": "${article.description}",
    "url": "${baseUrl}${path}",
    "author": {
      "@type": "Organization",
      "name": "Estriche München"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estriche München",
      "url": "${baseUrl}"
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "${baseUrl}"},
      {"@type": "ListItem", "position": 2, "name": "Estrich Ratgeber", "item": "${baseUrl}/ratgeber"},
      {"@type": "ListItem", "position": 3, "name": "${article.title}", "item": "${baseUrl}${path}"}
    ]
  }
  </script>
</head>
<body>
  <header>
    <nav aria-label="Hauptnavigation">
      <a href="/">Estrich München</a>
      <a href="/ratgeber">Ratgeber</a>
      <a href="/leistungen/zementestrich">Zementestrich</a>
      <a href="/preise">Preise</a>
      <a href="/kontakt">Kontakt</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>${article.title}</h1>
      <p>${article.description}</p>
      <section>
        <h2>Jetzt kostenlos beraten lassen</h2>
        <p>Telefon: <a href="tel:+4989444438872">089 / 444 43 887 2</a></p>
        <p><a href="/angebot">Kostenloses Angebot anfordern</a></p>
      </section>
    </article>
  </main>
  <footer>
    <p>© 2026 Mustafa Sakar - Estriche München - Fachbetrieb für Estricharbeiten</p>
  </footer>
</body>
</html>`;
}

export function generateStaticSEOContent(path: string): string | null {
  if (path === '/' || path === '') {
    return generateHomePage();
  }
  
  const serviceMatch = path.match(/^\/leistungen\/([a-z-]+)/);
  if (serviceMatch) {
    return generateServicePage(serviceMatch[1]);
  }

  const districtMatch = path.match(/^\/muenchen\/([a-z-]+)/);
  if (districtMatch) {
    return generateDistrictPage(districtMatch[1]);
  }

  const blogMatch = path.match(/^\/ratgeber\/([a-z0-9-]+)/);
  if (blogMatch) {
    return generateBlogArticlePage(blogMatch[1]);
  }
  
  const pageMap: Record<string, string> = {
    '/ablauf': 'ablauf',
    '/preise': 'preise',
    '/rechner': 'rechner',
    '/kontakt': 'kontakt',
    '/faq': 'faq',
    '/ueber-uns': 'ueberuns',
    '/angebot': 'angebot',
    '/impressum': 'impressum',
    '/datenschutz': 'datenschutz',
    '/agb': 'agb',
    '/cookie-einstellungen': 'cookieeinstellungen',
    '/barrierefreiheit': 'barrierefreiheit',
    '/ratgeber': 'ratgeber'
  };
  
  const pageId = pageMap[path];
  if (pageId) {
    return generatePage(pageId);
  }
  
  return null;
}
