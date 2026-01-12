interface PageSEO {
  title: string;
  metaDescription: string;
  mainKeyword: string;
  longTailKeywords: string[];
  h1: string;
  sections: { h2: string; h3s?: string[]; content: string }[];
  faqs?: { q: string; a: string }[];
}

const servicesData: Record<string, PageSEO> = {
  zementestrich: {
    title: "Zementestrich München - Professionelle Estrichverlegung vom Meister | Estrich München",
    metaDescription: "Zementestrich verlegen lassen in München. Meisterbetrieb mit 30+ Jahren Erfahrung, Festpreisgarantie, DIN-konforme Ausführung. Jetzt kostenlose Beratung!",
    mainKeyword: "Zementestrich München",
    longTailKeywords: [
      "Zementestrich verlegen lassen München",
      "Estrich Kosten pro qm München",
      "Zementestrich Trocknungszeit berechnen",
      "Estrichleger München Festpreis",
      "CT-Estrich verlegen Neubau",
      "Estrich für Fußbodenheizung München",
      "Zementestrich Fließestrich Unterschied",
      "Estrich DIN 18560 München"
    ],
    h1: "Zementestrich München - Professionelle Estrichverlegung vom Meisterbetrieb",
    sections: [
      {
        h2: "Zementestrich verlegen lassen - Ihr Meisterbetrieb in München",
        h3s: ["CT-Estrich nach DIN 18560", "Estrich für Fußbodenheizung"],
        content: `Als erfahrener Estrichleger in München bieten wir professionelle Zementestrich-Verlegung für Neubau und Sanierung. Mit über 30 Jahren Erfahrung und 2.500+ erfolgreich abgeschlossenen Projekten garantieren wir höchste Qualität nach DIN 18560. Unsere Estrich Kosten pro qm sind transparent und verbindlich - Sie erhalten einen Festpreis ohne versteckte Nachforderungen. Ob CT-Estrich für den klassischen Neubau oder spezieller Heizestrich für Ihre Fußbodenheizung - wir liefern perfekte Ergebnisse.`
      },
      {
        h2: "Zementestrich Trocknungszeit und Belegreife",
        h3s: ["Wann ist Zementestrich begehbar?", "CM-Messung für Belegreife"],
        content: `Die Zementestrich Trocknungszeit beträgt als Faustregel 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht etwa 50 Tage bis zur Belegreife. Wir führen professionelle CM-Messungen durch und dokumentieren die Ergebnisse für Ihren Bodenleger. Bei Zeitdruck bieten wir auch Schnellestrich-Lösungen an.`
      },
      {
        h2: "Zementestrich vs. Fließestrich - Der Unterschied",
        content: `Zementestrich (CT) wird konventionell eingebracht und abgezogen, während Calciumsulfat-Fließestrich (CAF) selbstnivellierend ist. Fließestrich hat bessere Wärmeleitfähigkeit für Fußbodenheizungen, Zementestrich ist feuchtigkeitsbeständiger. Wir beraten Sie, welche Lösung für Ihr Projekt optimal ist.`
      }
    ],
    faqs: [
      { q: "Wie lange muss Zementestrich trocknen?", a: "Als Faustregel gilt: 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht etwa 50 Tage bis zur Belegreife." },
      { q: "Was kostet Zementestrich pro qm in München?", a: "Die Kosten liegen zwischen 32-45 €/m² netto zzgl. MwSt., abhängig von Fläche und Anforderungen. Wir erstellen verbindliche Festpreise." },
      { q: "Ist Zementestrich für Fußbodenheizung geeignet?", a: "Ja, Zementestrich eignet sich hervorragend für Fußbodenheizungen. Als Heizestrich wird er mit speziellen Zusätzen verarbeitet." }
    ]
  },
  industrieboeden: {
    title: "Industrieböden München - Belastbare Hallenböden & Sichtestrich | Estrich München",
    metaDescription: "Industrieböden und Sichtestrich in München. Hartstoffestrich, Epoxidbeschichtung, geschliffener Betonboden. 10 Jahre Garantie. Jetzt beraten lassen!",
    mainKeyword: "Industrieböden München",
    longTailKeywords: [
      "Industrieboden verlegen München",
      "Sichtestrich geschliffen München",
      "Hartstoffestrich Produktionshalle",
      "Epoxidbeschichtung Industrieboden",
      "Betonboden schleifen München",
      "Industrieboden Kosten pro qm",
      "Garagenboden Beschichtung München",
      "Hallenboden sanieren München"
    ],
    h1: "Industrieböden München - Hochbelastbare Böden für Gewerbe und Industrie",
    sections: [
      {
        h2: "Industrieboden verlegen - Lösungen für extreme Anforderungen",
        h3s: ["Hartstoffestrich für Produktionshallen", "Epoxidbeschichtung für Chemiebeständigkeit"],
        content: `Unsere Industrieböden erreichen Druckfestigkeiten von C30 bis C50 und sind für Gabelstaplerverkehr, schwere Maschinen und aggressive Chemikalien ausgelegt. Von Hartstoffestrich für Produktionshallen über chemikalienbeständige Epoxidbeschichtung bis hin zu rutschfesten Beschichtungen - wir realisieren Ihr Projekt nach DIN EN 13892.`
      },
      {
        h2: "Sichtestrich geschliffen - Ästhetik trifft Funktionalität",
        h3s: ["Polierter Betonboden für Showrooms", "Terrazzo-Optik für moderne Architektur"],
        content: `Geschliffener Sichtestrich verbindet industriellen Charme mit höchster Belastbarkeit. Ideal für Showrooms, Lofts, Restaurants und moderne Büros. Wir schleifen und polieren Betonböden auf Hochglanz und versiegeln sie dauerhaft. Die Kosten für Sichtestrich liegen bei 65-120 €/m² je nach Schliffgrad.`
      },
      {
        h2: "Garagenboden und Hallenboden Beschichtung",
        content: `Professionelle Garagenboden Beschichtung schützt vor Öl, Benzin und Streusalz. Unsere Hallenboden-Sanierung bringt verschlissene Industrieböden wieder in Topzustand. Ausführung auch nachts und am Wochenende möglich, um Ihren Betrieb nicht zu stören.`
      }
    ],
    faqs: [
      { q: "Wie lange hält ein Industrieboden?", a: "Bei fachgerechter Ausführung halten Industrieböden 15-25 Jahre oder länger, je nach Belastung." },
      { q: "Was kostet ein Industrieboden pro qm?", a: "Je nach Ausführung zwischen 45-120 €/m² netto. Hartstoffestrich ab 45 €/m², Epoxidbeschichtung ab 65 €/m²." },
      { q: "Kann Sichtestrich mit Fußbodenheizung kombiniert werden?", a: "Ja, Sichtestrich eignet sich hervorragend für Fußbodenheizungen und leitet Wärme sehr gut." }
    ]
  },
  fussbodenheizung: {
    title: "Fußbodenheizung nachrüsten München - Einfräsen ohne Umbau | Estrich München",
    metaDescription: "Fußbodenheizung nachträglich einfräsen in München. Installation in bewohnten Räumen, nur 2-4 Tage. 500+ Nachrüstungen. Jetzt beraten lassen!",
    mainKeyword: "Fußbodenheizung nachrüsten München",
    longTailKeywords: [
      "Fußbodenheizung einfräsen München",
      "Fußbodenheizung nachträglich einbauen Altbau",
      "Heizungsrohre in Estrich fräsen",
      "Fußbodenheizung nachrüsten Kosten",
      "Fußbodenheizung ohne Estrich entfernen",
      "Altbau Fußbodenheizung nachrüsten München",
      "Fräsverfahren Fußbodenheizung",
      "Fußbodenheizung in bewohntem Haus einbauen"
    ],
    h1: "Fußbodenheizung nachrüsten München - Einfräsen in bestehenden Estrich",
    sections: [
      {
        h2: "Fußbodenheizung einfräsen - Nachrüstung ohne großen Umbau",
        h3s: ["Heizungsrohre direkt in Estrich fräsen", "Staubarme Installation mit Absaugung"],
        content: `Mit unserer speziellen Frästechnik können wir Heizungsrohre direkt in Ihren bestehenden Estrich einbringen - ohne den alten Boden zu entfernen. Über 500 erfolgreiche Nachrüstungen in Münchner Altbauten beweisen unsere Kompetenz. Die Installation dauert nur 2-4 Tage für eine durchschnittliche Wohnung.`
      },
      {
        h2: "Fußbodenheizung nachträglich einbauen im Altbau",
        h3s: ["Installation in bewohnten Räumen möglich", "Minimale Aufbauhöhe von nur 15 mm"],
        content: `Fußbodenheizung nachträglich einbauen war noch nie so einfach. Unser Fräsverfahren ermöglicht die Installation in bewohnten Räumen - Sie müssen nicht ausziehen. Die Vergussmasse ist nach 24 Stunden begehbar, die Heizung nach 7 Tagen betriebsbereit.`
      },
      {
        h2: "Fußbodenheizung nachrüsten Kosten transparent kalkuliert",
        content: `Die Kosten für Fußbodenheizung nachrüsten liegen bei 45-75 €/m² netto zzgl. MwSt., inklusive Material, Fräsung und Verguss. Im Vergleich zum kompletten Neuaufbau sparen Sie 30-50% der Kosten und vermeiden wochenlangen Baulärm.`
      }
    ],
    faqs: [
      { q: "Kann jeder Estrich gefräst werden?", a: "Fast jeder. Zementestrich, Anhydritestrich und Gussasphalt eignen sich hervorragend für das Fräsverfahren." },
      { q: "Wie lange dauert die Nachrüstung einer Fußbodenheizung?", a: "Für eine durchschnittliche Wohnung (80-100 m²) benötigen wir 2-4 Arbeitstage." },
      { q: "Ist eine nachgerüstete Fußbodenheizung genauso effizient?", a: "Ja, gefräste Systeme erreichen die gleiche Effizienz wie Fußbodenheizungen im Neubau." }
    ]
  },
  waermedaemmung: {
    title: "Wärmedämmung Boden München - Estrichdämmung & Trittschall | Estrich München",
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
    h1: "Wärmedämmung Boden München - Professionelle Estrichdämmung vom Meister",
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
    title: "Estrichsanierung München - Risse reparieren & Wasserschaden | Estrich München",
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
    title: "Schnellestrich München - Belegreif in 1-5 Tagen | Estrich München",
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
  }
};

const pagesSEO: Record<string, PageSEO> = {
  home: {
    title: "Estrich München - Ihr Meisterbetrieb für Estricharbeiten | 30+ Jahre Erfahrung",
    metaDescription: "Estrich verlegen lassen in München vom Meisterbetrieb. Zementestrich, Fußbodenheizung nachrüsten, Industrieböden. 30+ Jahre Erfahrung, Festpreisgarantie. Jetzt beraten!",
    mainKeyword: "Estrich München",
    longTailKeywords: [
      "Estrich verlegen lassen München",
      "Estrichleger München Meisterbetrieb",
      "Estricharbeiten München Festpreis",
      "Estrich Kosten München berechnen",
      "Estrichfirma München Empfehlung",
      "Estrich für Neubau München",
      "Estrich Altbausanierung München",
      "Professioneller Estrichleger Oberbayern"
    ],
    h1: "Estrich München - Ihr Meisterbetrieb für perfekte Böden",
    sections: [
      {
        h2: "Estrich verlegen lassen vom Meisterbetrieb mit 30+ Jahren Erfahrung",
        h3s: ["Zementestrich und Fließestrich", "Industrieböden und Sichtestrich", "Fußbodenheizung nachrüsten"],
        content: `Willkommen bei Estrich München, Ihrem Meisterbetrieb für professionelle Estricharbeiten in München und Umgebung. Mit über 30 Jahren Erfahrung und mehr als 2.500 erfolgreich abgeschlossenen Projekten sind wir Ihr verlässlicher Partner für alle Estricharbeiten - von Zementestrich im Neubau bis zur Fußbodenheizung-Nachrüstung im Altbau.`
      },
      {
        h2: "Unsere Estrich-Leistungen in München",
        content: `Ob Zementestrich, Calciumsulfat-Fließestrich, belastbare Industrieböden, eleganter Sichtestrich, nachträgliche Fußbodenheizung, professionelle Wärmedämmung, Estrichsanierung oder zeitsparender Schnellestrich - wir liefern höchste Qualität zu transparenten Festpreisen.`
      },
      {
        h2: "Warum Estrich München Ihr bester Partner ist",
        h3s: ["Festpreisgarantie ohne Nachforderungen", "5 Jahre Gewährleistung nach BGB", "Termingarantie oder 100€ Gutschrift"],
        content: `Wir arbeiten strikt nach deutschen Industrienormen (DIN 18560, DIN 18202) und bieten transparente Festpreise nach kostenloser Vor-Ort-Besichtigung. Unsere Kunden schätzen Zuverlässigkeit, Pünktlichkeit und saubere Arbeitsweise. Bei Terminverzug durch uns erhalten Sie 100€ Gutschrift.`
      }
    ],
    faqs: [
      { q: "Was kostet Estrich verlegen in München?", a: "Je nach Estrichart zwischen 32-65 €/m² netto zzgl. MwSt. Wir erstellen verbindliche Festpreise nach kostenloser Vor-Ort-Besichtigung." },
      { q: "Wie lange dauert die Estrichverlegung?", a: "Die reine Verlegung dauert bei 100 m² ca. 1 Tag. Die Trocknungszeit beträgt bei Zementestrich ca. 1 Tag pro mm Stärke." },
      { q: "Arbeiten Sie auch im Münchner Umland?", a: "Ja, wir sind in ganz Oberbayern tätig: München, Starnberg, Freising, Dachau, Erding, Ebersberg, Fürstenfeldbruck." }
    ]
  },
  ablauf: {
    title: "Ablauf Estrichverlegung München - Von Anfrage bis Fertigstellung | Estrich München",
    metaDescription: "So läuft Ihre Estrichverlegung ab: Kostenlose Beratung, verbindliches Angebot, professionelle Ausführung. 5 Schritte zum perfekten Boden. Jetzt informieren!",
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
    h1: "Ablauf Estrichverlegung - Von der Anfrage bis zum perfekten Boden",
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
    title: "Estrich Preise München - Kosten pro m² transparent | Estrich München",
    metaDescription: "Estrich Kosten transparent: Zementestrich ab 32 €/m², Fließestrich ab 38 €/m², Schnellestrich ab 48 €/m². Alle Preise netto. Jetzt Budget berechnen!",
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
    h1: "Estrich Preise München - Transparente Kosten pro Quadratmeter",
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
    title: "Estrich Kostenrechner München - Budget online berechnen | Estrich München",
    metaDescription: "Estrich Kosten online berechnen: Geben Sie Ihre Fläche ein und erhalten Sie sofort eine Preisschätzung. Kostenloser Budgetrechner für Ihr Projekt!",
    mainKeyword: "Estrich Kostenrechner",
    longTailKeywords: [
      "Estrich Kosten berechnen online",
      "Estrich Preis Kalkulator",
      "Was kostet mein Estrich Rechner",
      "Estrich Budget planen München",
      "Estrichkosten schätzen Quadratmeter",
      "Estrich Preisrechner kostenlos",
      "Estrich Kalkulation online",
      "Estrich Kostenvoranschlag berechnen"
    ],
    h1: "Estrich Kostenrechner - Berechnen Sie Ihr Budget in 30 Sekunden",
    sections: [
      {
        h2: "Kostenloser Estrich-Budgetrechner",
        h3s: ["Sofortige Preisschätzung", "Alle Estricharten verfügbar"],
        content: `Mit unserem kostenlosen Estrich Kostenrechner erhalten Sie in nur 30 Sekunden eine realistische Preisschätzung für Ihr Projekt. Wählen Sie Estrichart, Fläche und gewünschte Optionen - der Rechner kalkuliert sofort Ihre geschätzten Kosten.`
      },
      {
        h2: "So nutzen Sie den Estrich Preisrechner",
        h3s: ["Schritt 1: Estrichart wählen", "Schritt 2: Fläche eingeben", "Schritt 3: Optionen auswählen"],
        content: `Geben Sie Ihre Fläche in Quadratmetern ein, wählen Sie die gewünschte Estrichart und optionale Zusatzleistungen. Der Rechner zeigt Ihnen sofort die geschätzten Kosten - transparent aufgeschlüsselt nach Position.`
      },
      {
        h2: "Vom Richtwert zum verbindlichen Festpreis",
        content: `Der Kostenrechner liefert einen realistischen Richtwert. Für ein verbindliches Festpreisangebot vereinbaren Sie eine kostenlose Vor-Ort-Besichtigung. Unser Estrichmeister nimmt das genaue Aufmaß und erstellt Ihr persönliches Angebot.`
      }
    ],
    faqs: [
      { q: "Wie genau ist der Estrich Kostenrechner?", a: "Der Rechner liefert realistische Richtwerte. Das verbindliche Angebot erstellen wir nach Vor-Ort-Besichtigung - meist liegt es nahe am Rechner-Ergebnis." },
      { q: "Welche Kosten sind im Rechner enthalten?", a: "Material, Verlegung, Anfahrt München, Baustelleneinrichtung und Reinigung. Bei Expresszuschlag kommen die gewählten Aufpreise dazu." },
      { q: "Kann ich direkt über den Rechner beauftragen?", a: "Der Rechner dient zur Orientierung. Für die Beauftragung vereinbaren Sie eine kostenlose Vor-Ort-Beratung." }
    ]
  },
  kontakt: {
    title: "Kontakt Estrich München - Jetzt kostenlose Beratung anfordern | Estrich München",
    metaDescription: "Kontaktieren Sie Estrich München: Telefon 089 / 444 43 887 2, kostenlose Vor-Ort-Beratung, schnelle Terminvergabe. Ihr Meisterbetrieb in München!",
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
    h1: "Kontakt - Jetzt kostenlose Beratung anfordern",
    sections: [
      {
        h2: "So erreichen Sie uns",
        h3s: ["Telefon: 089 / 444 43 887 2", "E-Mail: info@estriche-muenchen.de"],
        content: `Rufen Sie uns an oder schreiben Sie uns - wir melden uns schnell zurück. Montag bis Freitag sind wir von 7:00 bis 18:00 Uhr erreichbar. Außerhalb der Geschäftszeiten hinterlassen Sie eine Nachricht, wir rufen am nächsten Werktag zurück.`
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
    title: "FAQ Estrich München - Häufige Fragen zu Estricharbeiten | Estrich München",
    metaDescription: "Alle Fragen zu Estrich beantwortet: Kosten, Trocknungszeit, Estricharten, Fußbodenheizung, Sanierung. Expertenwissen von Ihrem Münchner Meisterbetrieb!",
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
    h1: "FAQ - Häufige Fragen zu Estrich und Estricharbeiten",
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
    title: "Über uns - Estrich München Meisterbetrieb seit 1994 | Estrich München",
    metaDescription: "Lernen Sie Estrich München kennen: Meisterbetrieb seit 1994, 30+ Jahre Erfahrung, 2.500+ Projekte. Familie Sakar - Ihr Partner für perfekte Böden!",
    mainKeyword: "Estrich München Meisterbetrieb",
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
    h1: "Über uns - Ihr Münchner Meisterbetrieb seit 1994",
    sections: [
      {
        h2: "30 Jahre Handwerkskunst und Leidenschaft",
        h3s: ["Gründung 1994 aus Überzeugung", "Meisterbetrieb mit Tradition"],
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
      { q: "Ist Estrich München ein Meisterbetrieb?", a: "Ja, Estrich München ist ein eingetragener Meisterbetrieb nach Handwerksordnung." }
    ]
  },
  angebot: {
    title: "Kostenloses Angebot anfordern - Estrich München | Estrich München",
    metaDescription: "Jetzt kostenloses Estrich-Angebot anfordern. Verbindlicher Festpreis nach Vor-Ort-Besichtigung. Keine versteckten Kosten. Schnelle Terminvergabe!",
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
    h1: "Kostenloses Angebot anfordern - Ihr Projekt, unser Festpreis",
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
  }
};

function generateBaseHTML(page: PageSEO, canonicalPath: string): string {
  const baseUrl = "https://estrich-muenchen.de";
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  
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
      {"@type": "City", "name": "Starnberg"},
      {"@type": "City", "name": "Freising"},
      {"@type": "City", "name": "Dachau"},
      {"@type": "City", "name": "Erding"},
      {"@type": "City", "name": "Ebersberg"},
      {"@type": "City", "name": "Fürstenfeldbruck"}
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
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
      <a href="/kontakt" title="Kontakt Estrich München">Kontakt</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>${page.h1}</h1>
      ${sectionsHTML}
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
    <p>© 2025 Mustafa Sakar - Estriche München - Ihr Fachbetrieb für Estricharbeiten</p>
    <p>Telefon: <a href="tel:+4989444438872">089 / 444 43 887 2</a> | München und Umgebung</p>
    <nav aria-label="Fußzeilen-Navigation">
      <a href="/impressum" title="Impressum">Impressum</a>
      <a href="/datenschutz" title="Datenschutzerklärung">Datenschutz</a>
      <a href="/agb" title="AGB">AGB</a>
    </nav>
  </footer>
</body>
</html>`;
}

function generateServicePage(serviceId: string): string {
  const service = servicesData[serviceId];
  if (!service) {
    return generateHomePage();
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
    angebot: '/angebot'
  };
  
  return generateBaseHTML(page, pathMap[pageId] || '/');
}

export function generateStaticSEOContent(path: string): string {
  if (path === '/' || path === '') {
    return generateHomePage();
  }
  
  const serviceMatch = path.match(/^\/leistungen\/([a-z-]+)/);
  if (serviceMatch) {
    return generateServicePage(serviceMatch[1]);
  }
  
  const pageMap: Record<string, string> = {
    '/ablauf': 'ablauf',
    '/preise': 'preise',
    '/rechner': 'rechner',
    '/kontakt': 'kontakt',
    '/faq': 'faq',
    '/ueber-uns': 'ueberuns',
    '/angebot': 'angebot'
  };
  
  const pageId = pageMap[path];
  if (pageId) {
    return generatePage(pageId);
  }
  
  return generateHomePage();
}
