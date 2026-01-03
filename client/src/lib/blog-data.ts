export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
  tips?: string[];
  conclusion?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "estrich-trocknungszeit-richtig-berechnen",
    title: "Estrich Trocknungszeit richtig berechnen",
    excerpt: "Wie lange muss Estrich trocknen? Die wichtigsten Faktoren und Richtwerte für eine sichere Bodenverlegung.",
    category: "Grundwissen",
    readTime: "5 Min.",
    date: "2025-01-03",
    content: [
      "Die Trocknungszeit von Estrich ist einer der wichtigsten Faktoren bei jedem Bauprojekt. Wird der Bodenbelag zu früh verlegt, drohen Schäden wie Schimmelbildung, Blasenbildung oder Ablösungen. Doch wie lange dauert die Trocknung wirklich?",
      "## Die Faustregel: 1 cm = 1 Woche",
      "Als grobe Orientierung gilt: Pro Zentimeter Estrichdicke sollten Sie etwa eine Woche Trocknungszeit einplanen. Bei einem 5 cm dicken Zementestrich wären das also mindestens 5 Wochen. Ab einer Dicke von 4 cm verlängert sich die Zeit überproportional.",
      "## Faktoren, die die Trocknungszeit beeinflussen",
      "Die tatsächliche Trocknungsdauer hängt von mehreren Faktoren ab: Raumtemperatur (ideal 15-20°C), Luftfeuchtigkeit (unter 65%), Belüftung, Estrichart (Zement- oder Anhydritestrich) und die Schichtdicke.",
      "## Zementestrich vs. Anhydritestrich",
      "Zementestrich benötigt in der Regel länger zum Trocknen als Anhydritestrich. Während Zementestrich nach etwa 28 Tagen seine Nennfestigkeit erreicht, ist Anhydritestrich oft schon nach 7-14 Tagen begehbar. Die Belegreife kann jedoch bei beiden Arten mehrere Wochen dauern.",
      "## Die CM-Messung: Sicherheit geht vor",
      "Verlassen Sie sich nie nur auf Richtwerte. Vor der Bodenverlegung sollte immer eine CM-Messung (Calciumcarbid-Messung) durchgeführt werden. Für Zementestrich gilt ein Grenzwert von unter 2,0 CM-%, für Anhydritestrich unter 0,5 CM-%. Wir führen diese Messung standardmäßig durch und dokumentieren die Ergebnisse.",
      "## Heizestrich: Besondere Aufheizphase",
      "Bei Fußbodenheizungen muss nach der Trocknungszeit noch ein spezielles Aufheizprotokoll durchgeführt werden. Die Heizung wird schrittweise hochgefahren, um Spannungsrisse zu vermeiden. Dies verlängert die Gesamtzeit um weitere 2-3 Wochen."
    ],
    tips: [
      "Planen Sie die Trocknungszeit von Anfang an in Ihren Bauzeitplan ein",
      "Sorgen Sie für gute Belüftung, aber vermeiden Sie Zugluft",
      "Bestehen Sie auf einer CM-Messung vor der Bodenverlegung",
      "Bei Zeitdruck: Fragen Sie nach Schnellestrich-Alternativen"
    ],
    conclusion: "Eine ausreichende Trocknungszeit ist keine Verzögerung, sondern eine Investition in die Qualität Ihres Bodens. Wer hier spart, zahlt später oft doppelt."
  },
  {
    slug: "fussbodenheizung-estrich-was-beachten",
    title: "Fußbodenheizung und Estrich: Was Sie beachten müssen",
    excerpt: "Die richtige Estrichart, Aufheizprotokoll und häufige Fehler bei Heizestrich vermeiden.",
    category: "Fußbodenheizung",
    readTime: "6 Min.",
    date: "2025-01-02",
    content: [
      "Eine Fußbodenheizung sorgt für angenehme Wärme und spart Heizkosten. Doch damit das System optimal funktioniert, muss der Estrich perfekt abgestimmt sein. Hier erfahren Sie, worauf es ankommt.",
      "## Die richtige Estrichart für Fußbodenheizungen",
      "Grundsätzlich eignen sich sowohl Zementestrich als auch Anhydritestrich für Fußbodenheizungen. Anhydritestrich hat jedoch Vorteile: Er leitet Wärme besser, neigt weniger zu Rissbildung und ermöglicht dünnere Schichten über den Heizrohren.",
      "## Mindestüberdeckung der Heizrohre",
      "Die Heizrohre müssen ausreichend mit Estrich überdeckt sein. Die Mindestüberdeckung beträgt in der Regel 45 mm bei Zementestrich und 35 mm bei Anhydritestrich. Diese Schicht sorgt für gleichmäßige Wärmeverteilung und schützt die Rohre.",
      "## Das Aufheizprotokoll: Pflicht, keine Kür",
      "Nach der Trocknungszeit muss ein normgerechtes Aufheizprotokoll durchgeführt werden. Bei Zementestrich frühestens nach 21 Tagen, bei Anhydritestrich nach 7 Tagen. Die Vorlauftemperatur wird täglich um 5°C erhöht, bis zur maximalen Betriebstemperatur gehalten und dann wieder schrittweise abgesenkt.",
      "## Warum ist das Aufheizprotokoll so wichtig?",
      "Das kontrollierte Aufheizen dient dazu, Restfeuchte aus dem Estrich zu entfernen und Spannungen abzubauen. Ohne diesen Prozess können Risse entstehen, der Bodenbelag kann sich lösen, oder Feuchteschäden treten auf.",
      "## Häufige Fehler vermeiden",
      "Der größte Fehler: Die Heizung zu früh oder zu schnell hochfahren. Auch das Auslassen der CM-Messung vor der Bodenverlegung ist riskant. Außerdem wichtig: Die Dehnungsfugen müssen korrekt angelegt sein, um Spannungsrisse zu vermeiden.",
      "## Die Abstimmung mit dem Heizungsbauer",
      "Eine enge Abstimmung zwischen Estrichleger und Heizungsbauer ist unerlässlich. Wir koordinieren uns direkt mit Ihrem Heizungsinstallateur, um optimale Ergebnisse zu erzielen."
    ],
    tips: [
      "Wählen Sie einen erfahrenen Fachbetrieb für Heizestrich",
      "Lassen Sie sich das Aufheizprotokoll schriftlich dokumentieren",
      "Planen Sie mindestens 4-6 Wochen für Trocknung und Aufheizen ein",
      "Achten Sie auf korrekt verlegte Randdämmstreifen"
    ],
    conclusion: "Ein perfekt abgestimmter Heizestrich ist die Basis für jahrelange Freude an Ihrer Fußbodenheizung. Die Investition in professionelle Ausführung zahlt sich langfristig aus."
  },
  {
    slug: "estrich-sanierung-wann-notwendig",
    title: "Estrich-Sanierung: Wann ist sie notwendig?",
    excerpt: "Risse, Hohlstellen, Feuchteschäden: So erkennen Sie, ob Ihr Estrich saniert werden muss.",
    category: "Sanierung",
    readTime: "4 Min.",
    date: "2024-12-28",
    content: [
      "Estrich ist robust, aber nicht unzerstörbar. Nach Jahren oder durch äußere Einflüsse können Schäden auftreten. Wir erklären, wann eine Sanierung nötig ist und welche Optionen Sie haben.",
      "## Typische Estrichschäden erkennen",
      "Die häufigsten Probleme sind Risse, Hohlstellen (der Estrich klingt beim Klopfen hohl), Ausbrüche an Kanten, aufsteigende Feuchtigkeit und Unebenheiten. Nicht jeder Schaden erfordert sofort eine komplette Erneuerung.",
      "## Haarrisse vs. Strukturrisse",
      "Feine Haarrisse sind bei Zementestrich normal und meist unbedenklich. Kritisch wird es bei durchgehenden Rissen, die breiter als 0,3 mm sind oder wenn der Estrich an den Risskanten unterschiedliche Höhen aufweist. Dann liegt oft ein tiefergehendes Problem vor.",
      "## Feuchteschäden: Das unsichtbare Problem",
      "Feuchtigkeit im Estrich ist tückisch, weil sie oft erst spät sichtbar wird. Anzeichen sind muffiger Geruch, Schimmel an Wänden oder sich lösender Bodenbelag. Eine Feuchtemessung bringt Klarheit.",
      "## Sanierungsmöglichkeiten im Überblick",
      "Je nach Schadensart gibt es verschiedene Lösungen: Rissverpressung bei einzelnen Rissen, Ausbesserung von Hohlstellen durch Injektion, Spachteln von Unebenheiten, partielle Erneuerung bei lokalen Schäden oder Komplettsanierung bei großflächigen Problemen.",
      "## Wann lohnt sich eine Sanierung?",
      "Eine Sanierung lohnt sich, wenn der Estrich grundsätzlich noch intakt ist und nur punktuelle Schäden vorliegen. Bei großflächigen Schäden, starker Durchfeuchtung oder wenn die Aufbauhöhe sowieso geändert werden soll, ist oft ein Neubau wirtschaftlicher.",
      "## Kosten realistisch einschätzen",
      "Die Kosten für eine Sanierung variieren stark: Von 15-25 Euro pro Quadratmeter für einfache Ausbesserungen bis zu 80 Euro oder mehr für aufwendige Arbeiten mit Altestrich-Entfernung."
    ],
    tips: [
      "Lassen Sie Schäden frühzeitig begutachten",
      "Dokumentieren Sie Risse mit Fotos und Datum",
      "Klären Sie die Ursache, bevor Sie sanieren",
      "Holen Sie mehrere Angebote ein und vergleichen Sie"
    ],
    conclusion: "Eine professionelle Begutachtung vor Ort ist der beste erste Schritt. Wir beraten Sie ehrlich, ob eine Sanierung sinnvoll ist oder ein Neubau die bessere Lösung darstellt."
  },
  {
    slug: "industrieboden-anforderungen-gewerbe",
    title: "Industrieböden: Anforderungen für Gewerbe und Industrie",
    excerpt: "Welcher Industrieboden passt zu Ihrem Betrieb? Belastbarkeit, Chemikalienbeständigkeit und mehr.",
    category: "Industrieböden",
    readTime: "5 Min.",
    date: "2024-12-20",
    content: [
      "Industrieböden müssen extremen Belastungen standhalten. Von Gabelstaplern über Chemikalien bis zu ständiger Beanspruchung: Hier erfahren Sie, welche Lösungen es gibt.",
      "## Was unterscheidet Industrieböden von normalem Estrich?",
      "Industrieböden sind speziell auf hohe mechanische und chemische Belastungen ausgelegt. Sie bestehen aus hochfestem Beton oder speziellen Harzbeschichtungen und werden nach anderen Normen gefertigt als Wohnestrich.",
      "## Belastungsklassen verstehen",
      "Industrieböden werden nach Belastungsklassen eingeteilt. Entscheidend sind: Punktlasten (z.B. Regale), Flächenlasten, Radlasten (Gabelstapler) und dynamische Belastungen. Vor der Planung muss klar sein, welche Lasten auftreten werden.",
      "## Oberflächenbehandlung: Mehr als nur Optik",
      "Die Oberflächenbehandlung bestimmt die Eigenschaften des Bodens: Hartstoffeinstreuung erhöht die Verschleißfestigkeit, Epoxidharz-Beschichtung macht den Boden chemikalienbeständig und leicht zu reinigen, Polyurethan-Beschichtungen sind elastisch und rissüberbrückend.",
      "## Fugenplanung: Oft unterschätzt",
      "Bei großen Flächen ist die korrekte Fugenplanung entscheidend. Falsch gesetzte oder fehlende Fugen führen zu unkontrollierten Rissen. Wir planen das Fugenbild gemeinsam mit Ihnen, um Funktionalität und Optik zu optimieren.",
      "## Gefälle und Entwässerung",
      "In vielen Betrieben muss der Boden Gefälle zur Entwässerung haben. Dies erfordert präzise Planung und Ausführung. Bereits kleine Fehler können dazu führen, dass Wasser nicht richtig abläuft.",
      "## Bauzeit minimieren",
      "Für produzierende Betriebe ist die Bauzeit kritisch. Wir bieten Lösungen mit schnell härtenden Systemen, die innerhalb von 24-48 Stunden begehbar sind. So minimieren wir Produktionsausfälle."
    ],
    tips: [
      "Definieren Sie alle Belastungen vor der Planung",
      "Berücksichtigen Sie zukünftige Nutzungsänderungen",
      "Achten Sie auf rutschhemmende Oberflächen wo nötig",
      "Planen Sie ausreichend Budget für Qualität ein"
    ],
    conclusion: "Ein Industrieboden ist eine langfristige Investition. Die richtige Planung und Ausführung spart langfristig Kosten für Reparaturen und Ausfallzeiten."
  },
  {
    slug: "schnellestrich-vorteile-einsatzgebiete",
    title: "Schnellestrich: Vorteile und Einsatzgebiete",
    excerpt: "Wenn es schnell gehen muss: So funktioniert Schnellestrich und wann er sich lohnt.",
    category: "Estricharten",
    readTime: "4 Min.",
    date: "2024-12-15",
    content: [
      "Zeit ist Geld, besonders auf der Baustelle. Schnellestrich bietet eine Lösung, wenn die üblichen Trocknungszeiten nicht ins Zeitfenster passen.",
      "## Was ist Schnellestrich?",
      "Schnellestrich ist ein speziell modifizierter Estrich, der deutlich schneller trocknet und belastbar wird als herkömmlicher Zement- oder Anhydritestrich. Je nach System kann die Belegreife schon nach 1-3 Tagen erreicht sein statt nach mehreren Wochen.",
      "## Wie funktioniert die Schnelltrocknung?",
      "Schnellestriche nutzen spezielle Bindemittel oder Zusätze, die den Hydratationsprozess beschleunigen. Einige Systeme arbeiten mit Schnellzement, andere mit reaktiven Harzen. Das Ergebnis: schnellere Festigkeitsentwicklung und geringere Restfeuchte.",
      "## Typische Einsatzgebiete",
      "Schnellestrich lohnt sich bei: Sanierungen mit engem Zeitplan, Ladenumbauten die schnell fertig sein müssen, Wasserschadensanierung, Bauvorhaben mit Verzögerung und überall dort, wo Zeit kritisch ist.",
      "## Kosten-Nutzen-Abwägung",
      "Schnellestrich ist teurer als herkömmlicher Estrich, meist 30-50% mehr. Dem stehen aber Einsparungen gegenüber: kürzere Bauzeit, frühere Nutzbarkeit, weniger Bautrocknungskosten. Bei gewerblichen Projekten rechnet sich das oft schnell.",
      "## Qualität trotz Geschwindigkeit",
      "Ein verbreiteter Irrtum: Schnellestrich bedeutet nicht schlechtere Qualität. Bei fachgerechter Verarbeitung erreichen moderne Schnellestriche die gleichen Festigkeiten und Eigenschaften wie konventionelle Systeme.",
      "## Grenzen des Schnellestriches",
      "Nicht jedes Projekt eignet sich für Schnellestrich. Bei sehr großen Flächen, besonderen statischen Anforderungen oder wenn die Kosten das Hauptkriterium sind, kann konventioneller Estrich die bessere Wahl sein."
    ],
    tips: [
      "Prüfen Sie, ob die Zeitersparnis die Mehrkosten rechtfertigt",
      "Planen Sie Schnellestrich von Anfang an ein",
      "Achten Sie auf erfahrene Verarbeiter",
      "Lassen Sie trotzdem eine Feuchtemessung durchführen"
    ],
    conclusion: "Schnellestrich ist die ideale Lösung, wenn Zeit der kritische Faktor ist. Mit professioneller Planung und Ausführung erreichen Sie Qualität ohne Kompromisse."
  },
  {
    slug: "waermedaemmung-estrich-energiesparen",
    title: "Wärmedämmung unter Estrich: So sparen Sie Energie",
    excerpt: "Die richtige Dämmung unter dem Estrich senkt Heizkosten und erhöht den Wohnkomfort.",
    category: "Wärmedämmung",
    readTime: "5 Min.",
    date: "2024-12-10",
    content: [
      "Eine gute Wärmedämmung unter dem Estrich ist wie eine warme Jacke für Ihr Haus. Sie hält die Wärme dort, wo sie hingehört: in Ihren Räumen.",
      "## Warum Bodendämmung so wichtig ist",
      "Über einen ungedämmten Boden gehen bis zu 10% der Heizenergie verloren. Bei Kellerdecken oder Böden über unbeheizten Räumen ist dieser Verlust besonders hoch. Eine Dämmung senkt nicht nur die Heizkosten, sondern erhöht auch den Fußkomfort.",
      "## Dämmmaterialien im Vergleich",
      "Es gibt verschiedene Dämmstoffe für unter den Estrich: EPS (Styropor) ist günstig und weit verbreitet, XPS hat bessere Druckfestigkeit für höhere Belastungen, Mineralwolle bietet guten Schallschutz, PIR/PUR hat die beste Dämmleistung bei geringer Dicke.",
      "## Die richtige Dämmstärke wählen",
      "Die erforderliche Dämmstärke hängt von der Situation ab. Bei Neubauten gibt die EnEV/GEG Mindestanforderungen vor. Bei Sanierungen muss oft die verfügbare Aufbauhöhe berücksichtigt werden. Wir beraten Sie, welche Dämmung in Ihrem Fall sinnvoll und möglich ist.",
      "## Trittschalldämmung nicht vergessen",
      "Neben der Wärmedämmung ist bei Geschossdecken auch die Trittschalldämmung wichtig. Moderne Dämmplatten kombinieren beide Funktionen. Bei Einfamilienhäusern ist dies weniger kritisch, bei Mehrfamilienhäusern jedoch Pflicht.",
      "## Der schwimmende Estrich",
      "Bei gedämmten Böden spricht man vom 'schwimmenden Estrich', weil er auf der Dämmschicht 'schwimmt' und keinen direkten Kontakt zu den Wänden hat. Randdämmstreifen verhindern Schallbrücken und ermöglichen die Ausdehnung.",
      "## Förderungen nutzen",
      "Energetische Sanierungen werden oft gefördert. Die KfW und BAFA bieten Zuschüsse oder günstige Kredite. Eine verbesserte Bodendämmung kann Teil eines Förderprogramms sein."
    ],
    tips: [
      "Lassen Sie den Wärmebedarf vor der Dämmung berechnen",
      "Kombinieren Sie Wärme- und Trittschalldämmung wo sinnvoll",
      "Achten Sie auf druckfeste Dämmstoffe unter Estrich",
      "Prüfen Sie Fördermöglichkeiten vor Baubeginn"
    ],
    conclusion: "Eine gute Bodendämmung ist eine Investition, die sich über Jahre durch niedrigere Heizkosten und besseren Komfort auszahlt. Wir helfen Ihnen, die optimale Lösung zu finden."
  }
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter(article => article.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogArticles.map(article => article.category)));
}
