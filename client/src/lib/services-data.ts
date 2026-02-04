import { 
  Layers,
  Thermometer,
  Shield,
  Wrench,
  Zap,
  Building2,
  LucideIcon
} from "lucide-react";
import serviceImage1 from "@assets/generated_images/three_workers_laying_screed_blue.jpg";
import serviceImage2 from "@assets/generated_images/polished_industrial_floor_warehouse.jpg";
import serviceImage3 from "@assets/generated_images/workers_milling_and_pipes_blue.jpg";
import serviceImage4 from "@assets/generated_images/three_workers_insulation_blue.jpg";
import serviceImage5 from "@assets/generated_images/worker_repairing_cracks_blue.jpg";
import serviceImage6 from "@assets/generated_images/two_workers_pouring_screed_blue.jpg";
import galleryQuality from "@assets/generated_images/workers_checking_level_blue.jpg";
import galleryBeforeAfter from "@assets/generated_images/before_after_floor_renovation.jpg";
import galleryHeating from "@assets/generated_images/heating_pipes_install_blue.jpg";
import galleryLiving from "@assets/generated_images/modern_living_room_polished_floor.jpg";
import galleryIndustrial from "@assets/generated_images/industrial_coating_work_blue.jpg";
import galleryInsulation from "@assets/generated_images/floor_insulation_install_blue.jpg";
import galleryCementPour from "@assets/generated_images/three_workers_laying_screed_blue.jpg";
import galleryIndustrialCoating from "@assets/generated_images/industrial_floor_coating_blue_polos.jpg";
import galleryHeatingPipes from "@assets/generated_images/heating_pipes_install_blue.jpg";
import galleryInsulationWork from "@assets/generated_images/floor_insulation_install_blue.jpg";
import galleryRenovation from "@assets/generated_images/worker_repairing_cracks_blue.jpg";
import galleryQuickScreed from "@assets/generated_images/quick_screed_apply_blue.jpg";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  project: string;
}

export interface ServiceIncluded {
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description: string;
  bestFor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DINNorm {
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectExample {
  title: string;
  location: string;
  area: string;
  duration: string;
  description: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  heroTagline: string;
  problem: string;
  description: string;
  longDescription: string;
  whatIsIt: string;
  painAgitation: string[];
  futureVision: string;
  solution: string;
  differentiators: string[];
  features: string[];
  benefits: string[];
  included: ServiceIncluded[];
  serviceTypes: ServiceType[];
  process: string[];
  technicalDetails: string[];
  dinNorms: DINNorm[];
  faqs: FAQ[];
  testimonial: Testimonial;
  guarantees: string[];
  urgency: string;
  image: string;
  price: string;
  galleryImages: GalleryImage[];
  projectExamples: ProjectExample[];
  whyUs: string[];
  detailedProcess: string;
}

export const services: Service[] = [
  {
    id: "zementestrich",
    icon: Layers,
    title: "Zementestrich und Fließestrich",
    heroTagline: "Die perfekte Grundlage für Ihren Traumboden",
    problem: "Ihr Problem: Unebene Böden, die jeden Belag ruinieren?",
    description: "Wir liefern perfekt plane Flächen – die ideale Basis für Parkett, Fliesen oder Vinyl. Kein Nacharbeiten, kein Ärger.",
    longDescription: "Zementestrich ist der Klassiker unter den Estricharten und bietet eine robuste, langlebige Grundlage für nahezu jeden Bodenbelag. Unser Team sorgt für eine präzise Verlegung mit perfekter Ebenheit, die höchsten Ansprüchen gerecht wird.",
    whatIsIt: "Estrich ist eine Schicht aus Mörtel, die auf den Rohboden aufgetragen wird und als Untergrund für den eigentlichen Bodenbelag dient. Er gleicht Unebenheiten aus, verteilt Lasten gleichmäßig und kann Heizungsrohre oder Dämmschichten aufnehmen. Zementestrich besteht aus Zement, Sand und Wasser – ein bewährtes Material, das seit Jahrzehnten im Baugewerbe eingesetzt wird. Fließestrich (auch Calciumsulfatestrich oder Anhydritestrich genannt) ist eine modernere Variante, die sich selbst nivelliert und besonders glatte Oberflächen ermöglicht.",
    painAgitation: [
      "Kennen Sie das? Der Bodenleger kommt, schaut auf den Untergrund – und schüttelt den Kopf. 'Da kann ich nichts machen. Der Estrich ist uneben.'",
      "Plötzlich stehen Sie da: Terminverzögerung. Zusatzkosten für Ausgleichsmasse. Und das mulmige Gefühl, dass selbst danach nicht alles perfekt sein wird.",
      "Jeder Tag Verzögerung kostet Sie Geld und Nerven. Die Handwerker warten. Der Einzugstermin rückt näher. Und Sie fragen sich: Warum hat das niemand vorher richtig gemacht?"
    ],
    futureVision: "Stellen Sie sich vor: Der Bodenleger kommt, prüft den Untergrund – und nickt anerkennend. 'Perfekt vorbereitet. Da kann ich sofort loslegen.' Sie spüren die Erleichterung. Keine Überraschungen, keine Nacharbeiten. In wenigen Tagen liegt Ihr Traumboden genau so, wie Sie ihn sich vorgestellt haben. Glatt, eben, makellos.",
    solution: "Mit unserem Präzisions-Estrich schaffen wir die Grundlage, die Ihr Projekt verdient. Millimetergenau. Termingerecht. Ohne Kompromisse.",
    differentiators: [
      "Laser-Nivellierung für dokumentierte Ebenheit nach DIN 18202",
      "Eigene Mischfahrzeuge für gleichbleibende Qualität",
      "Festpreis-Garantie ohne versteckte Nachforderungen",
      "Persönlicher Projektleiter von Anfang bis Ende"
    ],
    features: ["Perfekte Ebenheit garantiert", "Für jeden Bodenbelag geeignet", "Schneller als Sie denken"],
    benefits: ["Hohe Druckfestigkeit", "Feuchtigkeitsbeständig", "Wirtschaftlich bei großen Flächen", "Lange Lebensdauer", "Für jeden Bodenbelag geeignet", "Optimale Lastabtragung"],
    included: [
      { title: "Untergrundvorbereitung", description: "Reinigung und Prüfung des Rohbodens, Ausbesserung von Rissen und Unebenheiten, Grundierung bei Bedarf" },
      { title: "Randdämmstreifen", description: "Umlaufende Dämmstreifen an allen Wänden zur Schallentopllung und als Dehnungsfuge" },
      { title: "Estrichverlegung", description: "Fachgerechtes Einbringen des Estrichs mit präziser Nivellierung und Verdichtung" },
      { title: "Oberflächenbearbeitung", description: "Glätten, Abreiben und Nachbearbeiten für eine perfekt ebene Oberfläche" },
      { title: "Trocknungsüberwachung", description: "Kontrolle der Restfeuchte und Dokumentation der Belegreife" },
      { title: "Endreinigung", description: "Saubere Übergabe der Baustelle an Sie oder den nächsten Gewerk" }
    ],
    serviceTypes: [
      { name: "Zementestrich CT", description: "Der klassische Estrich aus Zement, Sand und Wasser. Extrem robust, feuchtigkeitsbeständig und vielseitig einsetzbar. Geeignet für Innen- und Außenbereiche, Keller, Garagen und Nassräume.", bestFor: "Keller, Garagen, Balkone, Terrassen, Nassräume" },
      { name: "Calciumsulfat-Fließestrich CAF", description: "Selbstnivellierender Estrich auf Basis von Calciumsulfat (Anhydrit). Fließt in alle Ecken, bildet eine besonders glatte Oberfläche und eignet sich hervorragend für Fußbodenheizungen.", bestFor: "Wohnräume, Büros, Fußbodenheizung, große Flächen" },
      { name: "Zement-Fließestrich", description: "Kombiniert die Vorteile von Zementestrich (Feuchtigkeitsbeständigkeit) mit der Selbstnivellierung von Fließestrich. Ideal für Räume mit hoher Belastung und Feuchtigkeitsanforderung.", bestFor: "Großküchen, Wellnessbereiche, Industrieflächen" },
      { name: "Heizestrich", description: "Speziell für die Kombination mit Fußbodenheizungen konzipierter Estrich. Optimale Wärmeleitfähigkeit und gleichmäßige Wärmeverteilung.", bestFor: "Neubauten mit Fußbodenheizung" }
    ],
    process: ["Untergrund prüfen und vorbereiten", "Randdämmstreifen anbringen", "Estrich fachgerecht einbringen", "Oberfläche glätten und abreiben", "Kontrollierte Trocknung"],
    technicalDetails: [
      "Estrichstärke: 45-80 mm je nach Anforderung und Heizungsart",
      "Trocknungszeit: 1 Tag pro mm Estrichstärke (Faustregel) – ca. 4-8 Wochen",
      "Belegreif bei: Restfeuchte unter 2,0 CM% (Zementestrich) bzw. 0,5 CM% (Anhydrit)",
      "Druckfestigkeit: C20 bis C35 je nach Nutzungsklasse",
      "Ebenheitstoleranz: gemäß DIN 18202, Tabelle 3, Zeile 3 oder besser",
      "Wärmeleitfähigkeit: Lambda 1,0-1,4 W/mK für Heizestrich"
    ],
    dinNorms: [
      { number: "DIN 18560", title: "Estriche im Bauwesen", description: "Regelt die Anforderungen an Estrichkonstruktionen, Ausführung, Prüfung und Dicken für verschiedene Nutzungsarten." },
      { number: "DIN 18202", title: "Toleranzen im Hochbau", description: "Definiert die zulässigen Ebenheitsabweichungen für Estrichoberflächen. Tabelle 3 ist maßgebend für die Belegreife." },
      { number: "DIN EN 13813", title: "Estrichmörtel und Estrichmassen", description: "Europäische Norm für Eigenschaften und Anforderungen an Estrichmörtel und Estriche." },
      { number: "DIN 18353", title: "VOB Teil C: Estricharbeiten", description: "Allgemeine Technische Vertragsbedingungen für Estricharbeiten nach der Vergabe- und Vertragsordnung für Bauleistungen." },
      { number: "DIN 4109", title: "Schallschutz im Hochbau", description: "Mindestanforderungen an den Schallschutz, relevant für schwimmenden Estrich und Trittschalldämmung." }
    ],
    faqs: [
      { question: "Wie lange muss Estrich trocknen, bevor ich den Boden verlegen kann?", answer: "Die Trocknungszeit hängt von der Estrichart und -stärke ab. Als Faustregel gilt: 1 Tag pro Millimeter Estrichstärke. Ein 50 mm starker Zementestrich braucht also etwa 50 Tage bis zur Belegreife. Mit Schnellestrich können wir diese Zeit auf 1-3 Tage verkürzen." },
      { question: "Welcher Estrich ist für Fußbodenheizung geeignet?", answer: "Grundsätzlich eignen sich sowohl Zementestrich als auch Calciumsulfat-Fließestrich für Fußbodenheizungen. Fließestrich hat den Vorteil einer besseren Wärmeleitfähigkeit und umschließt die Heizungsrohre optimal. Wir beraten Sie gerne, welche Variante für Ihr Projekt ideal ist." },
      { question: "Kann ich den Estrich selbst verlegen?", answer: "Estrichverlegung erfordert Fachwissen, spezielle Ausrüstung und viel Erfahrung. Fehler bei der Mischung, Verlegung oder Nachbehandlung führen zu Rissen, Hohlstellen oder unebenen Flächen. Das Geld, das Sie beim Selbermachen sparen, geben Sie später für Reparaturen aus. Vertrauen Sie lieber auf Profis." },
      { question: "Was kostet ein neuer Estrich?", answer: "Die Kosten liegen je nach Estrichart zwischen 25-50 €/m². Faktoren wie Untergrundvorbereitung, Estrichstärke, Dämmung und Zugänglichkeit beeinflussen den Preis. Wir erstellen Ihnen ein verbindliches Festpreisangebot nach einer kostenlosen Vor-Ort-Besichtigung." },
      { question: "Wie bereite ich den Raum vor der Estrichverlegung vor?", answer: "Der Raum sollte geschlossen sein, alle Fenster und Türen eingebaut. Der Untergrund muss sauber und tragfähig sein. Elektro- und Sanitärinstallationen sollten abgeschlossen sein. Wir prüfen alles bei der Vor-Ort-Besichtigung und informieren Sie, was noch zu tun ist." },
      { question: "Wann kann ich nach der Estrichverlegung einziehen?", answer: "Nach der vollständigen Trocknung und Verlegung des Bodenbelags können Sie einziehen. Bei Zementestrich dauert das etwa 6-8 Wochen, bei Schnellestrich nur 1-2 Wochen. Wir geben Ihnen einen verbindlichen Zeitplan für Ihr Projekt." }
    ],
    testimonial: {
      name: "Familie Huber",
      location: "München-Bogenhausen",
      text: "Wir hatten bei anderen Firmen schlechte Erfahrungen gemacht. Estriche München hat alles anders gemacht: pünktlich, sauber, und der Boden ist perfekt eben. Unser Parkettleger war begeistert!",
      project: "Neubau Einfamilienhaus, 180 m²"
    },
    guarantees: [
      "5 Jahre Gewährleistung auf alle Arbeiten",
      "Festpreis – was wir anbieten, gilt",
      "Pünktlichkeitsgarantie oder 100€ Gutschrift"
    ],
    urgency: "Hohe Nachfrage – sichern Sie sich jetzt Ihren Wunschtermin, bevor die Auftragsbücher voll sind.",
    image: serviceImage1,
    price: "25-45",
    galleryImages: [
      { src: galleryCementPour, alt: "Zementestrich verlegen München Schwabing Bogenhausen Pasing - Estrichleger Fachbetrieb DIN 18560", caption: "Unsere Facharbeiter beim fachgerechten Einbringen des Zementestrichs" },
      { src: galleryQuality, alt: "Estrich Ebenheitsprüfung München Sendling Laim Haidhausen - Laser-Nivellierung DIN 18202", caption: "Präzise Ebenheitsmessung mit modernster Laser-Technik" },
      { src: galleryLiving, alt: "Fertiger Estrichboden München Neuhausen Maxvorstadt - Grundlage Parkett Fliesen Vinyl", caption: "Das Ergebnis: Ein Boden, der jeden Belag perfekt trägt" }
    ],
    projectExamples: [
      { title: "Neubau Einfamilienhaus", location: "München-Solln", area: "185 m²", duration: "2 Tage", description: "Kompletter Fließestrich für Wohnbereich mit Fußbodenheizung. Belegreife nach 4 Wochen, anschließend Eichenparkett verlegt." },
      { title: "Dachgeschoss-Ausbau", location: "Schwabing", area: "68 m²", duration: "1 Tag", description: "Leichtestrich auf Holzbalkendecke mit Trittschalldämmung. Gewichtsoptimierte Lösung für den Altbau." },
      { title: "Gewerbeeinheit Sanierung", location: "München-Laim", area: "320 m²", duration: "3 Tage", description: "Zementestrich C25 für Büroflächen. Ausgleich der Altsubstanz und Höhenanpassung an Bestandsböden." }
    ],
    whyUs: [
      "Über 15 Jahre Erfahrung mit mehr als 1.200 erfolgreich abgeschlossenen Projekten in München und Umgebung",
      "Eigener Fuhrpark mit Mischfahrzeugen für gleichbleibende Materialqualität direkt auf Ihrer Baustelle",
      "Fachbetrieb mit regelmäßigen Schulungen zu den neuesten Verlegetechniken und Materialien",
      "Transparente Festpreise nach kostenloser Vor-Ort-Besichtigung – keine versteckten Kosten",
      "Koordination mit anderen Gewerken: Wir stimmen uns mit Ihrem Architekt, Bauleiter und den Folgegewerken ab",
      "Saubere Baustelle garantiert: Wir hinterlassen Ihren Raum so, wie wir ihn vorgefunden haben"
    ],
    detailedProcess: "Der Ablauf Ihres Estrichprojekts beginnt mit einer kostenlosen Vor-Ort-Besichtigung, bei der wir den Untergrund prüfen, Höhen messen und Ihre Anforderungen besprechen. Wir nehmen uns Zeit, um Ihre Wünsche zu verstehen und alle technischen Details zu klären. Innerhalb von 48 Stunden erhalten Sie ein detailliertes Festpreisangebot ohne versteckte Kosten.\n\nNach Auftragserteilung koordinieren wir den Termin mit Ihrem Bauzeitplan und stimmen uns mit anderen Gewerken ab. Wir sorgen dafür, dass alle Vorarbeiten abgeschlossen sind und der Untergrund bereit ist für die Estrichverlegung.\n\nAm Verlegetag bereiten unsere Facharbeiter zunächst den Untergrund sorgfältig vor: Reinigung von Staub und losen Teilen, Ausbesserung von Rissen und Hohlstellen, Anbringung der umlaufenden Randdämmstreifen als Dehnungsfuge. Diese Vorarbeit ist entscheidend für die Qualität des fertigen Estrichs.\n\nDann wird der Estrich mit unseren eigenen Mischfahrzeugen angeliefert und fachgerecht eingebracht. Die gleichbleibende Materialqualität garantiert optimale Ergebnisse. Die Oberfläche wird mit Präzision geglättet und abgerieben, bis die gewünschte Ebenheit erreicht ist.\n\nNach der Verlegung kontrollieren wir regelmäßig die Trocknung und dokumentieren die Restfeuchte mit kalibrierten Messgeräten. Erst wenn der Estrich nachweislich belegreif ist – mit Messwerten unter den Grenzwerten – geben wir ihn für den Bodenbelag frei und übergeben Ihnen das Prüfprotokoll.",
  },
  {
    id: "industrieboeden",
    icon: Building2,
    title: "Industrieböden und Sichtestrich",
    heroTagline: "Böden für härteste Ansprüche mit edlem Design",
    problem: "Ihr Problem: Böden, die der Belastung nicht standhalten?",
    description: "Unsere Industrieböden sind für härteste Beanspruchung gemacht. Sichtestrich vereint dabei Funktion mit modernem Design.",
    longDescription: "Industrieböden müssen extremen Belastungen standhalten – von Gabelstaplern bis zu chemischen Einflüssen. Sichtestrich ist dabei nicht nur funktional, sondern ein echtes Design-Statement.",
    whatIsIt: "Industrieböden sind speziell verstärkte Bodenbeläge, die für gewerbliche und industrielle Nutzung konzipiert sind. Sie müssen hohen mechanischen Belastungen, chemischen Einflüssen und intensiver Nutzung standhalten. Sichtestrich hingegen ist ein Estrich, der nicht verdeckt wird, sondern als fertiger Bodenbelag sichtbar bleibt. Er wird geschliffen, poliert und versiegelt – das Ergebnis ist eine moderne, puristische Oberfläche, die in Lofts, Büros und Showrooms immer beliebter wird.",
    painAgitation: [
      "Ein Boden, der nach wenigen Monaten Risse zeigt. Absandungen, die jeden Tag schlimmer werden. Kunden, die über unebene Stellen stolpern.",
      "Sie haben einmal gespart – und zahlen jetzt doppelt: Für Reparaturen, für Produktionsausfälle, für den Imageschaden bei Kunden.",
      "Jede Woche, die Sie warten, verschlechtert sich der Zustand. Was heute eine Reparatur ist, wird morgen zum Komplett-Austausch."
    ],
    futureVision: "Stellen Sie sich vor: Ihre Produktionshalle mit einem Boden, der alles aushält. Gabelstapler fahren drüber, schwere Maschinen stehen darauf – und nach Jahren sieht er aus wie am ersten Tag. Ihre Mitarbeiter arbeiten sicher, Ihre Kunden sind beeindruckt. Ein Boden, auf den Sie stolz sein können.",
    solution: "Wir bauen Böden, die extremen Belastungen standhalten und dabei noch gut aussehen. Mit Materialien und Techniken, die sich in tausenden Industrieprojekten bewährt haben.",
    differentiators: [
      "Spezialrezepturen für jede Belastungsart",
      "Fugenlose Flächen bis zu 2.000 m² möglich",
      "Chemikalien- und ölbeständige Versiegelungen",
      "Ausführung auch am Wochenende möglich"
    ],
    features: ["Extreme Belastbarkeit", "Optisch ein Hingucker", "Langlebig und wartungsarm"],
    benefits: ["Hohe Abriebfestigkeit", "Chemikalienbeständig", "Fugenlose große Flächen möglich", "Pflegeleicht", "Staubfrei und hygienisch", "Schlagfest und belastbar"],
    included: [
      { title: "Belastungsanalyse", description: "Ermittlung der Anforderungen: Radlasten, Chemikalien, Temperaturwechsel, Hygiene" },
      { title: "Untergrundvorbereitung", description: "Kugelstrahlen, Fräsen oder Schleifen des Untergrunds für optimale Haftung" },
      { title: "Spezialbeton/-estrich", description: "Hochfester Beton oder Hartstoffestrich mit angepasster Rezeptur" },
      { title: "Oberflächenbehandlung", description: "Schleifen, Polieren, Beschichten oder Versiegeln je nach Anforderung" },
      { title: "Fugenerstellung", description: "Saubere Schnitt- und Dehnungsfugen für große Flächen ohne Rissbildung" },
      { title: "Abnahme und Dokumentation", description: "Prüfprotokoll mit Druckfestigkeit, Abriebwerten und Ebenheit" }
    ],
    serviceTypes: [
      { name: "Hartstoffestrich", description: "Estrich mit eingestreuten Hartstoffen (Korund, Quarz) für extreme Abriebfestigkeit. Die Hartstoffe werden in den noch frischen Estrich eingearbeitet.", bestFor: "Werkstätten, Produktionshallen, Logistikzentren" },
      { name: "Industriebeschichtung", description: "Kunststoffbeschichtung (Epoxidharz, Polyurethan) auf Betonboden. Nahtlos, chemikalienbeständig und in vielen Farben erhältlich.", bestFor: "Lebensmittelindustrie, Pharmaindustrie, Reinräume" },
      { name: "Geschliffener Sichtestrich", description: "Zement- oder Gussasphaltestrich, der nach dem Aushärten geschliffen und poliert wird. Zeigt die natürliche Struktur des Materials.", bestFor: "Lofts, Showrooms, Büros, Restaurants" },
      { name: "Terrazzo", description: "Klassischer Terrazzo aus Zement mit eingestreuten Marmor- oder Glassplittern. Nach dem Schleifen entsteht eine einzigartige Oberfläche.", bestFor: "Eingangsbereiche, Hotels, hochwertige Gewerbeflächen" }
    ],
    process: ["Anforderungsanalyse vor Ort", "Untergrundvorbereitung", "Spezialestrich einbringen", "Oberflächenbehandlung", "Versiegelung und Finish"],
    technicalDetails: [
      "Druckfestigkeit: C30 bis C50 für Industrieböden",
      "Abriebfestigkeit: Klasse AR1 oder besser nach DIN EN 13892-4",
      "Schichtdicke Beschichtung: 2-5 mm je nach System",
      "Rutschfestigkeit: R9 bis R13 nach BGR 181",
      "Chemikalienbeständigkeit: Prüfung nach DIN EN ISO 2812",
      "Fugenabstand: 4-6 m im Raster bei großen Flächen"
    ],
    dinNorms: [
      { number: "DIN EN 13892", title: "Prüfverfahren für Estrichmörtel", description: "Teil 1-8 regelt alle Prüfverfahren für Druckfestigkeit, Biegezugfestigkeit, Verschleißwiderstand und Oberflächenhärte von Industrieböden." },
      { number: "DIN 18560-7", title: "Hochbeanspruchbare Estriche", description: "Spezielle Anforderungen an Estriche mit erhöhter Beanspruchung durch Fahrzeuge, Maschinen oder Chemikalien." },
      { number: "BGR 181 / ASR A1.5", title: "Rutschfestigkeit", description: "Berufsgenossenschaftliche Regeln für Fußböden in Arbeitsbereichen mit Rutschgefahr. Klassifizierung R9-R13." },
      { number: "DIN EN 1504", title: "Oberflächenschutzsysteme", description: "Anforderungen an Produkte und Systeme zum Schutz und zur Instandsetzung von Betonoberflächen." },
      { number: "DIN 18202", title: "Toleranzen im Hochbau", description: "Ebenheitsanforderungen für Industrieböden, besonders relevant für Hochregallager und Fahrbahnen." }
    ],
    faqs: [
      { question: "Wie lange hält ein Industrieboden?", answer: "Bei fachgerechter Ausführung und Nutzung halten Industrieböden 15-25 Jahre oder länger. Regelmäßige Reinigung und gelegentliche Auffrischung der Versiegelung verlängern die Lebensdauer erheblich." },
      { question: "Kann ein bestehender Boden saniert werden?", answer: "In vielen Fällen ja. Beschädigte Beschichtungen können abgetragen und erneuert werden. Bei strukturellen Schäden im Untergrund ist manchmal ein Neuaufbau sinnvoller. Wir beraten Sie ehrlich, welche Lösung wirtschaftlicher ist." },
      { question: "Wie pflege ich Sichtestrich richtig?", answer: "Sichtestrich ist pflegeleicht. Regelmäßiges Kehren und gelegentliches Wischen mit pH-neutralem Reiniger genügt. Einmal jährlich sollte die Versiegelung überprüft und bei Bedarf aufgefrischt werden." },
      { question: "Kann Sichtestrich auch mit Fußbodenheizung kombiniert werden?", answer: "Absolut. Sichtestrich eignet sich hervorragend für Fußbodenheizungen, da er die Wärme gut leitet und speichert. Die Oberfläche ist angenehm fußwarm." },
      { question: "Welche Farben sind bei Industrieböden möglich?", answer: "Bei Beschichtungen ist fast jede RAL-Farbe möglich. Sichtestrich zeigt die natürliche Grau-Tönung des Materials, kann aber auch eingefärbt oder mit farbigen Zuschlagstoffen gestaltet werden. Wir zeigen Ihnen Muster." },
      { question: "Kann der Betrieb während der Arbeiten weiterlaufen?", answer: "Teilweise ja. Wir können Hallen und Gewerbeflächen abschnittsweise bearbeiten, sodass der Betrieb in anderen Bereichen weiterlaufen kann. Auch Nacht- und Wochenendarbeit ist möglich." }
    ],
    testimonial: {
      name: "Thomas Meier, Geschäftsführer",
      location: "Autohaus Meier, Unterschleißheim",
      text: "Der neue Sichtestrich in unserem Showroom ist das Erste, was Kunden sehen – und sie sind jedes Mal beeindruckt. Robust genug für unsere Fahrzeuge, elegant genug für Premium-Marken.",
      project: "Showroom Neubau, 450 m²"
    },
    guarantees: [
      "10 Jahre Gewährleistung auf Industrieböden",
      "Dokumentierte Druckfestigkeit und Abriebwerte",
      "Kostenlose Nachbesserung bei Mängeln"
    ],
    urgency: "Industrieboden-Projekte erfordern Vorlauf. Kontaktieren Sie uns jetzt für eine Terminierung in den nächsten 4-6 Wochen.",
    image: serviceImage2,
    price: "45-95",
    galleryImages: [
      { src: galleryIndustrialCoating, alt: "Industrieboden Epoxid-Beschichtung München Moosach Garching Ismaning - Gewerbeflächen Fachbetrieb", caption: "Facharbeiter bei der Epoxid-Beschichtung" },
      { src: galleryIndustrial, alt: "Industrieboden München Freimann Milbertshofen - nahtlose Kunststoffbeschichtung befahrbar", caption: "Nahtlose Beschichtung in einer Produktionshalle" },
      { src: galleryLiving, alt: "Sichtestrich München Schwabing Maxvorstadt Lehel - Loft geschliffen poliert Designboden", caption: "Geschliffener Sichtestrich im modernen Loft-Design" }
    ],
    projectExamples: [
      { title: "Autohaus Showroom", location: "Unterschleißheim", area: "1.200 m²", duration: "2 Wochen", description: "Hochglanz-Sichtestrich mit Anti-Rutsch-Versiegelung. Befahrbar mit Fahrzeugen bis 3,5t, repräsentativ genug für Premium-Marken." },
      { title: "Brauerei Lagerhalle", location: "Freising", area: "2.800 m²", duration: "3 Wochen", description: "Säurebeständiger Industrieboden für Getränkeproduktion. Chemikalienbeständig, leicht zu reinigen, HACCP-konform." },
      { title: "Architekturbüro Loft", location: "Maxvorstadt", area: "340 m²", duration: "1 Woche", description: "Designorientierter Sichtestrich mit sichtbaren Zuschlagstoffen. Minimalistisch, robust und pflegeleicht." }
    ],
    whyUs: [
      "Spezialisiert auf anspruchsvolle Industrie- und Gewerbeprojekte seit über 15 Jahren",
      "Eigenes Labor für Materialprüfungen und Rezepturanpassungen",
      "Ausführung auch nachts und am Wochenende, um Produktionsausfälle zu minimieren",
      "Referenzen von DAX-Unternehmen und mittelständischen Betrieben in ganz Bayern",
      "Garantierte Einhaltung aller BGR/ASR-Vorschriften für Arbeitssicherheit",
      "10 Jahre Gewährleistung auf alle Industrieboden-Projekte mit dokumentierten Prüfwerten"
    ],
    detailedProcess: "Bei Industrieboden-Projekten beginnen wir mit einer umfassenden Belastungsanalyse. Wir erfassen systematisch alle Anforderungen: Welche Fahrzeuge fahren über den Boden und mit welchen Radlasten? Welche Chemikalien werden verwendet und müssen abgewehrt werden? Gibt es besondere Hygieneanforderungen wie HACCP oder Reinraumstandards? Diese Analyse bildet die Grundlage für unser maßgeschneidertes Konzept.\n\nBasierend auf dieser Analyse erstellen wir ein detailliertes Angebot mit genauer Spezifikation der Materialien, Schichtaufbauten und Oberflächenbehandlungen. Sie wissen genau, was Sie bekommen – keine Überraschungen.\n\nDie Untergrundvorbereitung ist entscheidend für die Langlebigkeit des Bodens. Wir kugelstrahlen, fräsen oder schleifen den Altbeton, um eine optimal vorbereitete Oberfläche zu schaffen. Lose Teile, Verunreinigungen und schwache Schichten werden restlos entfernt. Nur so kann die neue Beschichtung dauerhaft haften.\n\nDer Spezialestrich wird dann in einer oder mehreren Schichten aufgebracht – je nach Belastungsanforderung. Bei Industrieböden folgt die Beschichtung mit Epoxid- oder Polyurethan-Systemen. Bei Sichtestrich schleifen und polieren wir die Oberfläche, bis die gewünschte Optik erreicht ist.\n\nZum Abschluss erstellen wir ein vollständiges Prüfprotokoll mit allen relevanten Werten: Druckfestigkeit, Abriebbeständigkeit, Ebenheitstoleranz und Schichtdicken. Dieses Dokument dient als Qualitätsnachweis und Grundlage für die Gewährleistung.",
  },
  {
    id: "fussbodenheizung",
    icon: Thermometer,
    title: "Fußbodenheizung einfräsen",
    heroTagline: "Warme Füße ohne großen Umbau",
    problem: "Ihr Problem: Kalte Füße, aber Angst vor dem Renovierungschaos?",
    description: "Wir fräsen Ihre Fußbodenheizung nachträglich ein – ohne den ganzen Estrich rauszureißen. Sauber, schnell, stressfrei.",
    longDescription: "Eine Fußbodenheizung nachträglich einzubauen muss kein Albtraum sein. Mit unserer Fräsmethode schneiden wir präzise Kanäle in Ihren bestehenden Estrich – ohne Abriss, ohne wochenlange Baustelle.",
    whatIsIt: "Beim Einfräsen einer Fußbodenheizung werden mit einer speziellen Fräsmaschine Kanäle in den bestehenden Estrich geschnitten. In diese Kanäle werden dann die Heizungsrohre eingelegt und mit Vergussmasse verschlossen. Der große Vorteil: Der vorhandene Estrich bleibt erhalten, die Aufbauhöhe erhöht sich nicht und die Arbeiten dauern nur wenige Tage. Diese Methode ist ideal für Renovierungen und Altbausanierungen, bei denen ein kompletter Neuaufbau zu aufwendig oder zu teuer wäre.",
    painAgitation: [
      "Kalte Fliesen im Winter. Sie laufen auf Socken durch die Wohnung und spüren trotzdem die Kälte durch die Füße hochkriechen.",
      "Die Heizung läuft und läuft – aber die Wärme kommt nicht dort an, wo Sie sie brauchen. Die Heizkörper nehmen Platz weg. Die Energierechnung steigt.",
      "Sie haben sich informiert: Fußbodenheizung nachrüsten. Und dann der Schock – kompletter Abriss? Wochenlange Baustelle? Unbewohnbar während der Arbeiten?"
    ],
    futureVision: "Stellen Sie sich vor: Sie stehen morgens auf und Ihre Füße berühren angenehm warmen Boden. Keine Socken nötig. Die Wärme verteilt sich gleichmäßig im ganzen Raum – von unten nach oben, genau wie es sein soll. Und das Beste: Die Installation hat nur wenige Tage gedauert, Sie mussten nicht ausziehen.",
    solution: "Mit unserer Fräs-Technologie schneiden wir die Kanäle für die Heizungsrohre direkt in Ihren bestehenden Estrich. Kein Abriss, kein Schutt, kein Chaos. In 2-4 Tagen ist alles fertig.",
    differentiators: [
      "Keine Erhöhung des Fußbodenaufbaus",
      "Installation bei bewohnten Räumen möglich",
      "Präzise computergesteuerte Fräsung",
      "Kompatibel mit allen gängigen Wärmepumpen"
    ],
    features: ["Kein kompletter Abriss nötig", "In wenigen Tagen erledigt", "Ab 45€/m² möglich"],
    benefits: ["Gleichmäßige Wärmeverteilung", "Energieeffizienter als Heizkörper", "Mehr Platz im Raum", "Allergikerfreundlich", "Fußwarmer Wohnkomfort", "Unsichtbare Heiztechnik"],
    included: [
      { title: "Heizlastberechnung", description: "Präzise Ermittlung des Wärmebedarfs für jeden Raum als Basis für die Planung" },
      { title: "Verlegungsplan", description: "Computergestützter Verlegungsplan mit optimaler Rohranordnung und Heizkreisen" },
      { title: "Fräsarbeiten", description: "Präzise Fräsung der Kanäle mit staubarmem Verfahren und Absaugung" },
      { title: "Rohrverlegung", description: "Einlegen der Heizungsrohre (PE-RT oder PE-Xa) in die gefrästen Kanäle" },
      { title: "Verfüllung", description: "Verschließen der Kanäle mit spezieller Vergussmasse für optimale Wärmeübertragung" },
      { title: "Druckprüfung", description: "Abdrücken des Systems und Erstellen eines Prüfprotokolls" }
    ],
    serviceTypes: [
      { name: "Nassverlegung im Fräskanal", description: "Klassische Methode: Rohre werden in gefräste Kanäle gelegt und mit Vergussmasse verschlossen. Beste Wärmeübertragung.", bestFor: "Alle Estricharten, beste Effizienz" },
      { name: "Trockenverlegung mit Trockenbauplatten", description: "Rohre werden in vorgefertigte Platten mit Kanälen eingelegt. Keine Trocknungszeit nötig, sofort belegreif.", bestFor: "Holzdecken, schnelle Renovierung" },
      { name: "Dünnbett-Fußbodenheizung", description: "Ultradünne Systeme mit nur 15-20 mm Aufbauhöhe. Ideal bei begrenzter Aufbauhöhe.", bestFor: "Altbauten mit niedrigen Türen, Sanierungen" },
      { name: "Elektro-Fußbodenheizung", description: "Heizmatten oder -kabel unter dem Bodenbelag. Schnelle Installation, ideal als Zusatzheizung.", bestFor: "Bäder, einzelne Räume, Ergänzung" }
    ],
    process: ["Bestandsaufnahme des Estrichs", "Heizkreisplanung", "Fräsen der Kanäle", "Rohrverlegung", "Verfüllen und Abschleifen"],
    technicalDetails: [
      "Fräskanäle: 12-16 mm breit, 20-25 mm tief",
      "Rohrabstand: 10-20 cm je nach Wärmebedarf",
      "Rohrtyp: PE-RT oder PE-Xa, 12-17 mm Durchmesser",
      "Vorlauftemperatur: 30-40°C (ideal für Wärmepumpen)",
      "Aufheizprotokoll: Nach DIN EN 1264 vorgeschrieben",
      "Systemleistung: 40-100 W/m² je nach Auslegung"
    ],
    dinNorms: [
      { number: "DIN EN 1264", title: "Fußbodenheizung", description: "Teile 1-5 regeln Planung, Dimensionierung, Einbau und Betrieb von Warmwasser-Fußbodenheizungen. Enthält das vorgeschriebene Aufheizprotokoll." },
      { number: "DIN 18560-2", title: "Heizestriche", description: "Spezifische Anforderungen an Estriche auf Heizungsanlagen, Mindestüberdeckung der Rohre und Aufheizvorschriften." },
      { number: "DIN 4725", title: "Warmwasser-Fußbodenheizungen", description: "Berechnung der Heizleistung und Dimensionierung der Heizkreise für unterschiedliche Raumarten." },
      { number: "DIN EN 12831", title: "Heizlastberechnung", description: "Verfahren zur Berechnung der Norm-Heizlast für die korrekte Auslegung der Fußbodenheizung." },
      { number: "DIN 18380", title: "VOB Teil C: Heizanlagen", description: "Allgemeine Technische Vertragsbedingungen für Heizungsarbeiten nach der Vergabe- und Vertragsordnung für Bauleistungen." }
    ],
    faqs: [
      { question: "Kann jeder Estrich gefräst werden?", answer: "Fast jeder. Zementestrich, Anhydritestrich und Gussasphalt eignen sich hervorragend. Wir prüfen vor Ort die Estrichstärke und den Zustand. Bei zu dünnem oder beschädigtem Estrich beraten wir Sie zu Alternativen." },
      { question: "Wie lange dauert die Installation?", answer: "Für eine durchschnittliche Wohnung (80-100 m²) benötigen wir 2-4 Arbeitstage. Sie können während der Arbeiten in der Wohnung bleiben – wir arbeiten Raum für Raum." },
      { question: "Was passiert mit meinem bestehenden Bodenbelag?", answer: "Der muss vorher entfernt werden. Nach unseren Arbeiten kann der Boden sofort neu belegt werden – mit Fliesen, Parkett, Vinyl oder jedem anderen Belag. Die Vergussmasse ist nach 24 Stunden begehbar." },
      { question: "Ist eine nachgerüstete Fußbodenheizung genauso effizient wie eine neue?", answer: "Ja, bei fachgerechter Ausführung erreichen gefräste Systeme die gleiche Effizienz wie Neubauten. Durch die direkte Integration in den Estrich ist die Wärmeübertragung sogar besonders gut." },
      { question: "Wie hoch sind die Betriebskosten einer Fußbodenheizung?", answer: "Fußbodenheizungen arbeiten mit niedrigen Vorlauftemperaturen (30-40°C) und sind daher sehr effizient. In Kombination mit einer Wärmepumpe können Sie bis zu 30% Heizkosten sparen im Vergleich zu Heizkörpern." },
      { question: "Kann ich die Fußbodenheizung selbst regulieren?", answer: "Ja, jeder Raum erhält einen eigenen Heizkreis mit Raumthermostat. Sie können die Temperatur individuell einstellen. Moderne Systeme lassen sich auch per Smart-Home-App steuern." }
    ],
    testimonial: {
      name: "Martina & Klaus Schmidt",
      location: "München-Sendling",
      text: "Wir dachten, Fußbodenheizung nachrüsten wäre unmöglich in unserer Altbauwohnung. Estriche München hat es in 3 Tagen geschafft – wir konnten die ganze Zeit wohnen bleiben. Jetzt genießen wir jeden Morgen warme Füße!",
      project: "Altbau-Nachrüstung, 85 m²"
    },
    guarantees: [
      "Funktionsgarantie auf das komplette Heizsystem",
      "Saubere Baustelle – wir räumen jeden Abend auf",
      "Festpreis inklusive aller Nebenarbeiten"
    ],
    urgency: "Die Heizperiode hat begonnen – und unsere Fräs-Teams sind gefragt. Sichern Sie sich jetzt Ihren Termin für diesen Winter.",
    image: serviceImage3,
    price: "45-75",
    galleryImages: [
      { src: galleryHeatingPipes, alt: "Fußbodenheizung nachrüsten München Pasing Sendling Trudering - Altbau ohne Abriss Fachbetrieb", caption: "Präzise Verlegung der Heizungsrohre im Schlangenverband" },
      { src: galleryHeating, alt: "Fußbodenheizung verlegen München Bogenhausen Haidhausen - Rohrverlegung DIN EN 1264", caption: "Fachgerechte Rohrverlegung in der Dämmschicht" },
      { src: galleryLiving, alt: "Fußbodenheizung München Solln Hadern Gräfelfing - Wärmepumpe kompatibel Energieeffizienz", caption: "Das Ergebnis: Angenehme Wärme von unten" }
    ],
    projectExamples: [
      { title: "Altbau-Nachrüstung", location: "München-Haidhausen", area: "92 m²", duration: "3 Tage", description: "Komplette Fußbodenheizung in bewohnter Altbauwohnung. Bewohner konnten während der Arbeiten in der Wohnung bleiben." },
      { title: "Einfamilienhaus Erdgeschoss", location: "Pasing", area: "145 m²", duration: "4 Tage", description: "Nachrüstung im Bestand mit Anschluss an bestehende Wärmepumpe. Vorlauftemperatur optimiert für maximale Effizienz." },
      { title: "Praxisräume", location: "Schwabing", area: "78 m²", duration: "2 Tage", description: "Schnelle Installation in einer Arztpraxis. Arbeiten am Wochenende, um den Praxisbetrieb nicht zu stören." }
    ],
    whyUs: [
      "Spezialisiert auf nachträglichen Einbau von Fußbodenheizungen – unsere Kernkompetenz",
      "Eigene, staubarme Fräsmaschinen mit integrierter Absaugung",
      "Zusammenarbeit mit lokalen Heizungsinstallateuren für Komplettservice",
      "Über 500 erfolgreiche Nachrüstungen in Münchner Altbauten",
      "Installation auch in bewohnten Objekten – Raum für Raum",
      "Energieberatung inklusive: Wir zeigen Ihnen, wie Sie mit der Fußbodenheizung Heizkosten sparen"
    ],
    detailedProcess: "Ihr Weg zur Fußbodenheizung beginnt mit einer gründlichen Bestandsaufnahme. Wir prüfen den vorhandenen Estrich auf Eignung: Ist er stark genug für die Fräsung? Gibt es Hohlstellen oder Risse, die vorher behandelt werden müssen? Wir messen die exakte Stärke und analysieren den Zustand an mehreren Stellen.\n\nAuf Basis dieser Analyse erstellen wir einen detaillierten Heizkreisplan mit computergestützter Wärmebedarfsberechnung. Jeder Raum bekommt die optimale Rohrverlegung für gleichmäßige Wärmeverteilung. Sie sehen genau, wo welche Rohre verlaufen werden.\n\nAm ersten Arbeitstag entfernen wir den alten Bodenbelag und beginnen mit den Fräsarbeiten. Unsere Fräsmaschine ist mit einer leistungsstarken Absaugung ausgestattet, sodass kaum Staub entsteht. Die Kanäle werden präzise nach dem Verlegeplan gefräst – millimetergenau für perfekten Rohrsitz.\n\nAm zweiten Tag legen wir die Heizungsrohre in die gefrästen Kanäle ein und sichern sie mit Spezialklammern. Die Rohrenden werden fachgerecht an Ihren Heizkreisverteiler angeschlossen. Dann verfüllen wir die Kanäle mit Spezialmörtel, der optimale Wärmeleitfähigkeit garantiert.\n\nNach dem Aushärten des Mörtels (ca. 24 Stunden) führen wir eine Druckprüfung durch, um die Dichtigkeit des Systems zu bestätigen. Dann können Sie den neuen Bodenbelag verlegen lassen. Das vollständige Aufheizprotokoll und alle Dokumentationen erhalten Sie für Ihre Unterlagen.",
  },
  {
    id: "waermedaemmung",
    icon: Shield,
    title: "Wärmedämmung & Abdichtung",
    heroTagline: "Energie sparen ab dem ersten Tag",
    problem: "Ihr Problem: Hohe Heizkosten durch schlechte Dämmung?",
    description: "Mit professioneller Wärmedämmung senken Sie Ihre Energiekosten dauerhaft. Wir machen Ihren Boden energieeffizient.",
    longDescription: "Eine gute Wärmedämmung unter dem Estrich ist die Grundlage für ein energieeffizientes Zuhause. Wir verbauen hochwertige Dämmmaterialien, die Wärme halten und Schall isolieren.",
    whatIsIt: "Die Bodendämmung ist eine Schicht aus isolierenden Materialien, die unter dem Estrich verlegt wird. Sie verhindert, dass Wärme nach unten entweicht – besonders wichtig über unbeheizten Kellern, Garagen oder dem Erdreich. Gleichzeitig reduziert sie Trittschall und erfüllt die Anforderungen der Energieeinsparverordnung (EnEV). Die Abdichtung schützt zusätzlich gegen aufsteigende Feuchtigkeit, die sonst den Estrich und Bodenbelag schädigen und zu Schimmelbildung führen kann.",
    painAgitation: [
      "Jeden Winter das gleiche Spiel: Die Heizung läuft auf Hochtouren, aber es wird einfach nicht richtig warm. Die Wärme verschwindet – durch den Boden, in den Keller, ins Nichts.",
      "Die Energierechnung macht Ihnen Sorgen. Jedes Jahr steigt sie weiter. Und Sie ahnen: Das Problem sitzt tiefer – buchstäblich unter Ihren Füßen.",
      "Feuchte Ecken, Schimmelgeruch, kalte Füße trotz Heizung. Das sind keine Kleinigkeiten – das sind Warnsignale eines Bodens ohne richtige Dämmung."
    ],
    futureVision: "Stellen Sie sich vor: Der nächste Winter kommt – und Sie drehen die Heizung ein bisschen runter, weil es auch so warm genug ist. Die Energierechnung? Deutlich niedriger. Ihre Füße? Warm. Das Raumklima? Angenehm. Und das gute Gefühl, etwas Sinnvolles für Ihr Zuhause und die Umwelt getan zu haben.",
    solution: "Wir dämmen Ihren Boden mit hochwertigen Materialien, die bis zu 30% Ihrer Heizkosten einsparen können. Normgerecht, effizient und mit sofort spürbarem Unterschied.",
    differentiators: [
      "Berechnung der optimalen Dämmstärke für Ihr Gebäude",
      "Kombination aus Wärme- und Trittschalldämmung",
      "Professionelle Abdichtung gegen aufsteigende Feuchtigkeit",
      "Fördermittel-Beratung für KfW und BAFA"
    ],
    features: ["Heizkosten sparen", "Trittschall reduzieren", "Normgerechter Aufbau"],
    benefits: ["Bis zu 30% Energieeinsparung", "Verbesserter Wohnkomfort", "Schallschutz inklusive", "Feuchtigkeitsschutz", "Reduzierte Heizkosten", "Nachhaltige Bauweise"],
    included: [
      { title: "Wärmebedarfsanalyse", description: "Berechnung des U-Werts und der erforderlichen Dämmstärke nach EnEV/GEG" },
      { title: "Untergrundvorbereitung", description: "Reinigung, Ausgleich von Unebenheiten und Grundierung" },
      { title: "Dampfsperre/Abdichtung", description: "Verlegen von PE-Folie oder Bitumenbahnen gegen aufsteigende Feuchtigkeit" },
      { title: "Dämmschicht", description: "Verlegung der Wärme- und Trittschalldämmung in der berechneten Stärke" },
      { title: "Randdämmstreifen", description: "Umlaufende Dämmung an Wänden für Schallschutz und Dehnungsfugen" },
      { title: "Trennlage", description: "Abdeckung der Dämmung vor dem Estricheinbau" }
    ],
    serviceTypes: [
      { name: "EPS-Dämmung (Styropor)", description: "Bewährte Hartschaumplatten aus expandiertem Polystyrol. Gutes Preis-Leistungs-Verhältnis, druckfest und feuchtigkeitsbeständig.", bestFor: "Standardanwendungen, Keller, Erdgeschoss" },
      { name: "XPS-Dämmung", description: "Extrudiertes Polystyrol mit geschlossenzelliger Struktur. Besonders hohe Druckfestigkeit und Feuchtebeständigkeit.", bestFor: "Feuchträume, hohe Belastung, Perimeterdämmung" },
      { name: "Mineralwolle-Dämmung", description: "Nicht brennbare Dämmung aus Stein- oder Glaswolle. Hervorragender Schallschutz und Brandschutz.", bestFor: "Brandschutzanforderungen, Schallschutz" },
      { name: "Holzfaser-Dämmung", description: "Ökologische Dämmung aus natürlichen Holzfasern. Guter sommerlicher Wärmeschutz und nachhaltig.", bestFor: "Ökologisches Bauen, Passivhäuser" },
      { name: "Vakuum-Isolationspaneele", description: "Hochleistungsdämmung mit minimaler Aufbauhöhe. Bis zu 10x besser dämmend als konventionelle Materialien.", bestFor: "Altbausanierung bei begrenzter Aufbauhöhe" }
    ],
    process: ["Untergrund reinigen", "Dampfsperre verlegen", "Dämmmaterial einbauen", "Trennlage aufbringen", "Estrich einbringen"],
    technicalDetails: [
      "Dämmstärke: 30-120 mm je nach Anforderung und U-Wert-Ziel",
      "Wärmeleitfähigkeit: Lambda 0,032-0,045 W/mK (je nach Material)",
      "Trittschallverbesserung: 18-30 dB je nach System",
      "Druckfestigkeit: mind. 100 kPa für Wohnnutzung",
      "EnEV/GEG-Anforderung: U-Wert mind. 0,50 W/m²K (Bodenplatte)",
      "Dampfsperre: sd-Wert mind. 100 m"
    ],
    dinNorms: [
      { number: "DIN 4108", title: "Wärmeschutz im Hochbau", description: "Grundlegende Anforderungen an den Wärmeschutz von Gebäuden, U-Wert-Berechnung und Mindestanforderungen." },
      { number: "DIN 4109", title: "Schallschutz im Hochbau", description: "Mindestanforderungen an den Trittschallschutz bei schwimmendem Estrich und zwischen Wohnungen." },
      { number: "DIN 18560-2", title: "Estriche auf Dämmschichten", description: "Schwimmender Estrich – Anforderungen an Dämmschichten, Randdämmstreifen und Aufbau." },
      { number: "GEG 2024", title: "Gebäudeenergiegesetz", description: "Aktuelle gesetzliche Anforderungen an die energetische Qualität von Gebäuden, ersetzt EnEV." },
      { number: "DIN 18195", title: "Bauwerksabdichtung", description: "Anforderungen an Abdichtungen gegen Bodenfeuchte und nichtdrückendes Wasser." }
    ],
    faqs: [
      { question: "Welche Dämmstärke brauche ich?", answer: "Das hängt vom Gebäude und den Anforderungen ab. Für Neubauten nach GEG sind meist 80-120 mm nötig, bei Sanierungen oft weniger. Wir berechnen die optimale Stärke für Ihr Projekt." },
      { question: "Kann ich die Dämmung auch ohne neuen Estrich machen?", answer: "Nein, die Dämmung muss unter dem Estrich liegen. Bei einer Sanierung muss der alte Estrich entfernt werden. Alternativ gibt es dünne Aufdopplungssysteme, die auf den bestehenden Boden kommen." },
      { question: "Gibt es Förderungen für Bodendämmung?", answer: "Ja! Bei energetischen Sanierungen gibt es Zuschüsse von KfW und BAFA. Wir beraten Sie gerne zu den aktuellen Förderprogrammen und helfen bei der Antragstellung." },
      { question: "Ist Trittschalldämmung Pflicht?", answer: "In Mehrfamilienhäusern ja – die DIN 4109 schreibt Mindestanforderungen vor. Auch in Einfamilienhäusern ist Trittschalldämmung sinnvoll für mehr Wohnkomfort, besonders über bewohnten Räumen." },
      { question: "Welches Dämmmaterial ist das beste?", answer: "Das hängt von Ihren Anforderungen ab. EPS ist kostengünstig und vielseitig, XPS ist feuchtebeständiger, Mineralwolle bietet besten Brandschutz, Holzfaser ist ökologisch. Wir empfehlen das passende Material für Ihr Projekt." },
      { question: "Wie viel Energie kann ich durch Bodendämmung sparen?", answer: "Je nach Ausgangssituation sind 15-30% Energieeinsparung möglich. Besonders bei ungedämmten Kellerdecken oder Bodenplatten ist das Einsparpotenzial enorm. Die Investition amortisiert sich oft in 5-10 Jahren." }
    ],
    testimonial: {
      name: "Dr. Andrea Bauer",
      location: "Grünwald",
      text: "Nach der Kellersanierung mit Dämmung ist der Unterschied dramatisch. Vorher war der Keller kalt und feucht – jetzt nutzen wir ihn als Homeoffice. Die Heizkosten sind um fast ein Drittel gesunken!",
      project: "Kellersanierung mit Vollwärmeschutz, 65 m²"
    },
    guarantees: [
      "Dokumentierte Dämmwerte nach EnEV",
      "10 Jahre Garantie auf Abdichtungsarbeiten",
      "Kostenlose energetische Erstberatung"
    ],
    urgency: "Fördergelder sind begrenzt – handeln Sie jetzt, um von aktuellen BAFA-Zuschüssen zu profitieren.",
    image: serviceImage4,
    price: "18-45",
    galleryImages: [
      { src: galleryInsulationWork, alt: "Wärmedämmung Estrich München Neuhausen Laim Berg am Laim - Trittschalldämmung GEG Fachbetrieb", caption: "Unsere Facharbeiter bei der fachgerechten Dämmung" },
      { src: galleryInsulation, alt: "Bodendämmung München Aubing Pasing Allach - Dämmplatten KfW Förderung professionell", caption: "Professionelle Verlegung hochwertiger Dämmplatten" },
      { src: galleryBeforeAfter, alt: "Estrichdämmung München Schwabing Bogenhausen - Heizkosten sparen 30% Energieberatung", caption: "Deutliche Verbesserung der Energieeffizienz" }
    ],
    projectExamples: [
      { title: "Kellerdeckendämmung", location: "Grünwald", area: "85 m²", duration: "2 Tage", description: "80 mm XPS-Dämmung unter dem Erdgeschoss. Energieeinsparung von 28% bereits im ersten Winter messbar." },
      { title: "Bodenplattendämmung Neubau", location: "Garching", area: "165 m²", duration: "1 Tag", description: "120 mm EPS-Dämmung mit Feuchtigkeitssperre nach GEG. Grundlage für KfW-55-Standard." },
      { title: "Altbausanierung mit Trittschall", location: "Lehel", area: "72 m²", duration: "2 Tage", description: "Kombidämmung für Wärme- und Schallschutz in denkmalgeschütztem Gebäude. Minimalste Aufbauhöhe mit Vakuumdämmung." }
    ],
    whyUs: [
      "Zertifizierte Energieberatung mit Fördermittel-Expertise (KfW, BAFA)",
      "Berechnung der optimalen Dämmstärke nach aktuellem GEG",
      "Partnerschaft mit führenden Dämmstoff-Herstellern für beste Materialqualität",
      "Dokumentation aller U-Werte für Ihre Unterlagen und Fördermittelanträge",
      "Kombination aus Wärme-, Schall- und Feuchtigkeitsschutz aus einer Hand",
      "Bis zu 20% Energieeinsparung durch professionelle Dämmung nach aktuellen Standards"
    ],
    detailedProcess: "Energetische Dämmung beginnt bei uns mit einer professionellen Wärmebedarfsanalyse. Wir berechnen den aktuellen U-Wert Ihres Bodens und ermitteln die erforderliche Dämmstärke nach dem aktuellen Gebäudeenergiegesetz (GEG). Diese Berechnung ist die Grundlage für eine effektive und normgerechte Dämmung.\n\nBei Förderfähigkeit unterstützen wir Sie aktiv beim Antrag für KfW- oder BAFA-Zuschüsse. Oft können bis zu 20% der Kosten gefördert werden. Wir erstellen die erforderlichen Nachweise und Dokumentationen für Ihren Antrag.\n\nDie Ausführung startet mit der sorgfältigen Untergrundvorbereitung. Unebenheiten werden ausgeglichen, lose Teile entfernt. Dann verlegen wir die Dampfsperre gegen aufsteigende Feuchtigkeit – lückenlos und mit überlappenden Stößen.\n\nIm nächsten Schritt bringen wir die Dämmplatten in der berechneten Stärke ein. Jede Platte wird präzise zugeschnitten und fugenlos verlegt. Wärmebrücken werden konsequent vermieden. Die Randdämmstreifen an allen Wänden sorgen für Schallschutz und dienen als Dehnungsfuge.\n\nNach dem Verlegen der Trennlage (PE-Folie) folgt der Estricheinbau durch unser Team. Zum Abschluss dokumentieren wir alle erreichten Dämmwerte und stellen Ihnen die Unterlagen für Ihre Akten, den Energieausweis und eventuelle Förderanträge zusammen.",
  },
  {
    id: "sanierung",
    icon: Wrench,
    title: "Sanierung & Reparatur",
    heroTagline: "Wir retten Ihren Estrich",
    problem: "Ihr Problem: Risse, Hohlstellen oder unebene alte Böden?",
    description: "Wir retten Ihren bestehenden Estrich – oft ohne kompletten Austausch. Gezielt, schnell und kosteneffizient.",
    longDescription: "Nicht jeder beschädigte Estrich muss komplett raus. Mit modernen Sanierungsmethoden reparieren wir Risse, verfüllen Hohlstellen und gleichen unebene Stellen aus.",
    whatIsIt: "Die Estrichsanierung umfasst alle Maßnahmen, um beschädigte Estriche wieder funktionstüchtig zu machen. Dazu gehören die Reparatur von Rissen, das Verfüllen von Hohlstellen, das Ausgleichen von Unebenheiten und die Behandlung von Feuchtigkeitsschäden. Eine fachgerechte Sanierung kann die Lebensdauer eines Estrichs um viele Jahre verlängern und ist oft deutlich günstiger als ein kompletter Neuaufbau. Wichtig ist eine genaue Schadensanalyse, um die Ursachen zu beheben und nicht nur die Symptome.",
    painAgitation: [
      "Sie sehen die Risse im Boden. Erst waren es kleine Linien, jetzt werden sie breiter. Sie spüren, wie sich einzelne Stellen unter Ihren Füßen bewegen – Hohlräume darunter.",
      "Ein Gutachter war da. Seine Empfehlung: Alles raus, alles neu. Kosten im fünfstelligen Bereich. Wochenlange Baustelle. Sie können es nicht glauben.",
      "Aber was ist die Alternative? Ignorieren? Und riskieren, dass der Schaden sich ausbreitet, dass der Bodenbelag Schaden nimmt, dass aus einem lokalen Problem ein flächendeckendes wird?"
    ],
    futureVision: "Stellen Sie sich vor: Ein Experte kommt, analysiert den Schaden – und sagt Ihnen, dass es eine Lösung gibt. Keine komplette Sanierung. Gezielte Reparatur. In wenigen Tagen ist alles erledigt. Der Boden ist wieder stabil, die Risse verschwunden. Und Sie haben tausende Euro gespart.",
    solution: "Bevor wir abreißen, prüfen wir, ob Rettung möglich ist. Mit Injektionsharzen, Reprofilierung und gezielten Ausbesserungen reparieren wir, was zu reparieren ist – schneller und günstiger als ein Komplettaustausch.",
    differentiators: [
      "Kostenlose Schadensanalyse vor Ort",
      "Ehrliche Beratung – auch wenn Neubau nötig ist",
      "Spezialharze für dauerhafte Rissverfüllung",
      "Garantie auch auf Reparaturarbeiten"
    ],
    features: ["Diagnose vor Ort", "Oft günstiger als Neubau", "Schnelle Lösung"],
    benefits: ["Kein Komplettabriss nötig", "Kürzere Bauzeit", "Kostengünstiger", "Weniger Schmutz", "Bestandsschutz erhalten", "Schnelle Wiedernutzung"],
    included: [
      { title: "Schadensanalyse", description: "Visuelle Inspektion, Klopfprobe, Feuchtemessung und Rissmusteranalyse" },
      { title: "Ursachenermittlung", description: "Untersuchung der Schadensursache (Feuchtigkeit, Bewegung, Materialfehler)" },
      { title: "Reparaturkonzept", description: "Individuelle Lösung mit Kostenvergleich: Reparatur vs. Austausch" },
      { title: "Rissbehandlung", description: "Fräsen, Reinigen und Verfüllen mit Epoxid- oder PU-Harz" },
      { title: "Hohlstellensanierung", description: "Injizieren von Kunstharz unter abgehobene Bereiche" },
      { title: "Ausgleichsarbeiten", description: "Spachteln und Schleifen für eine ebene Oberfläche" }
    ],
    serviceTypes: [
      { name: "Rissinjection", description: "Risse werden mit Epoxid- oder Polyurethanharz verfüllt. Das Harz dringt tief ein und verbindet die Rissflanken dauerhaft.", bestFor: "Setzrisse, Spannungsrisse, statische Risse" },
      { name: "Hohlstellenverpressung", description: "Kunstharz wird unter Druck unter abgehobene Estrichbereiche injiziert. Der Hohlraum wird gefüllt, der Estrich wieder mit dem Untergrund verbunden.", bestFor: "Trommelgeräusche, bewegliche Stellen, Ablösungen" },
      { name: "Reprofilierung", description: "Beschädigte Oberflächenbereiche werden abgetragen und mit Reparaturmörtel neu aufgebaut.", bestFor: "Abplatzungen, Ausbrüche, lokale Schäden" },
      { name: "Ausgleichsestrich", description: "Dünne Schicht (5-20 mm) zum Ausgleich von Unebenheiten. Geht schneller als ein kompletter Neuaufbau.", bestFor: "Unebene Altböden, wellige Oberflächen" },
      { name: "Estrichtrocknung", description: "Technische Trocknung durchfeuchteter Estriche mit Kondenstrocknern und Warmluftgebläsen.", bestFor: "Wasserschäden, Feuchteschäden" }
    ],
    process: ["Schadensanalyse", "Ursachenermittlung", "Reparaturkonzept erstellen", "Sanierung durchführen", "Qualitätskontrolle"],
    technicalDetails: [
      "Injektionsharz: Epoxid (EP) oder Polyurethan (PU) je nach Rissart",
      "Injektionsdruck: 2-6 bar für Hohlstellensanierung",
      "Mindestestrichstärke für Sanierung: 30 mm",
      "Haftzugfestigkeit nach Reparatur: mind. 1,0 N/mm²",
      "Trocknungszeit Reparaturmörtel: 24-48 Stunden",
      "Restfeuchte vor Belagsarbeiten: unter 2,0 CM%"
    ],
    dinNorms: [
      { number: "DIN 18560", title: "Estriche im Bauwesen", description: "Grundlegende Norm für Estricharbeiten, auch relevant für Sanierung und Reparatur bestehender Estriche." },
      { number: "DIN EN 1504", title: "Instandsetzung von Betonbauwerken", description: "Teile 1-10 regeln Produkte und Systeme zur Reparatur und Verstärkung von Beton und Estrich." },
      { number: "ZTV-ING", title: "Zusätzliche Technische Vertragsbedingungen", description: "Richtlinien für Instandsetzungsarbeiten an Betonbauwerken, anwendbar auf Estrichsanierung." },
      { number: "WTA-Merkblatt", title: "Sanierung von Feuchteschäden", description: "Wissenschaftlich-Technische Arbeitsgemeinschaft für Bauwerkserhaltung – Richtlinien für Trocknungsmaßnahmen." },
      { number: "DIN 18202", title: "Toleranzen im Hochbau", description: "Ebenheitsanforderungen, die auch bei der Sanierung einzuhalten sind." }
    ],
    faqs: [
      { question: "Wann lohnt sich Reparatur statt Neuaufbau?", answer: "Bei lokalen Schäden (einzelne Risse, begrenzte Hohlstellen) ist eine Reparatur fast immer günstiger. Bei flächendeckenden Problemen oder strukturellen Mängeln kann ein Neuaufbau sinnvoller sein. Wir beraten Sie ehrlich." },
      { question: "Wie lange hält eine Estrichreparatur?", answer: "Bei fachgerechter Ausführung genauso lang wie der ursprüngliche Estrich – viele Jahre oder Jahrzehnte. Wichtig ist, dass die Ursache behoben wird, nicht nur das Symptom." },
      { question: "Kann ich nach einem Wasserschaden den Estrich retten?", answer: "Oft ja. Mit professioneller Bautrocknung kann durchfeuchteter Estrich gerettet werden, wenn schnell gehandelt wird. Je länger das Wasser steht, desto größer der Schaden. Rufen Sie uns sofort an!" },
      { question: "Übernimmt die Versicherung die Kosten?", answer: "Bei Wasserschäden durch einen versicherten Schaden (Rohrbruch, Hochwasser) übernimmt die Gebäudeversicherung in der Regel die Kosten. Wir erstellen Ihnen eine dokumentierte Schadensaufnahme für Ihre Versicherung." },
      { question: "Wie erkenne ich Hohlstellen im Estrich?", answer: "Hohlstellen erkennen Sie am dumpfen, trommelnden Klang beim Draufklopfen. Auch wenn der Boden an manchen Stellen leicht federt oder Risse sternförmig von einem Punkt ausgehen, sind Hohlstellen wahrscheinlich." },
      { question: "Können Risse im Estrich wiederkommen?", answer: "Wenn nur der Riss gefüllt wird, ohne die Ursache zu beheben, ja. Deshalb analysieren wir immer zuerst, warum der Riss entstanden ist, und behandeln beides – Symptom und Ursache." }
    ],
    testimonial: {
      name: "Hausverwaltung Immobilien GmbH",
      location: "München-Maxvorstadt",
      text: "In einer unserer Mietwohnungen gab es massive Estrichprobleme. Andere Firmen wollten komplett erneuern – Kosten: über 15.000€. Estriche München hat es für einen Bruchteil repariert. Nach 2 Jahren: Keinerlei Probleme.",
      project: "Estrichsanierung Altbau, 72 m²"
    },
    guarantees: [
      "Transparente Kostenaufstellung vor Arbeitsbeginn",
      "5 Jahre Gewährleistung auf Reparaturen",
      "Wenn Reparatur nicht möglich: Ehrliche Empfehlung"
    ],
    urgency: "Je früher Sie handeln, desto geringer der Schaden. Vereinbaren Sie jetzt Ihre kostenlose Schadensanalyse.",
    image: serviceImage5,
    price: "35-85",
    galleryImages: [
      { src: galleryRenovation, alt: "Estrichsanierung München Sendling Haidhausen Giesing - Risse reparieren Hohlstellen Fachbetrieb", caption: "Dramatische Transformation: Von gerissen zu makellos" },
      { src: galleryBeforeAfter, alt: "Estrich Reparatur München Schwabing Maxvorstadt Lehel - Rissinjection Epoxidharz professionell", caption: "Professionelle Schadensanalyse und Reparatur" },
      { src: galleryQuality, alt: "Estrich Sanierung München Bogenhausen Trudering Riem - CM-Messung Restfeuchte dokumentiert", caption: "Prüfung des sanierten Estrichs" }
    ],
    projectExamples: [
      { title: "Wasserschaden-Sanierung", location: "Bogenhausen", area: "45 m²", duration: "1 Woche", description: "Technische Trocknung nach Rohrbruch, anschließend Hohlstellen-Verpressung. Versicherungsschaden dokumentiert und reguliert." },
      { title: "Rissanierung Gewerbe", location: "Trudering", area: "280 m²", duration: "3 Tage", description: "Großflächige Rissinjection mit Epoxidharz in Lagerhalle. Ursache: Setzrisse nach Umbau. Belastbar nach 48 Stunden." },
      { title: "Altbau-Estrich rettung", location: "Sendling", area: "68 m²", duration: "2 Tage", description: "Hohlstellen unter 30% der Fläche. Verpressung statt Neuaufbau – Ersparnis von über 8.000€." }
    ],
    whyUs: [
      "Kostenlose Erstdiagnose vor Ort – ehrliche Einschätzung garantiert",
      "Spezialisiert auf Rettung statt Abriss – wirtschaftlichste Lösung",
      "24h-Notfall-Service bei Wasserschäden",
      "Direkte Abwicklung mit Versicherungen bei regulierbaren Schäden",
      "5 Jahre Gewährleistung auch auf Reparaturen",
      "Über 800 erfolgreich sanierte Böden allein in den letzten 3 Jahren"
    ],
    detailedProcess: "Bei Estrichschäden zählt schnelles Handeln – je früher die Reparatur, desto geringer der Gesamtschaden. Unser Notfall-Team ist innerhalb von 24 Stunden bei Ihnen vor Ort. Bei Wasserschäden koordinieren wir auch die technische Trocknung.\n\nWir beginnen mit einer systematischen Schadensanalyse: Klopfprobe für Hohlstellen über die gesamte Fläche, Rissmusteranalyse zur Ursachenermittlung und Feuchtemessung mit kalibrierten CM-Geräten. Diese Diagnose ist kostenlos und unverbindlich.\n\nDann ermitteln wir die Ursache des Schadens. Nur wenn die Ursache behoben wird, hält die Reparatur dauerhaft. Risse durch Bewegung erfordern andere Maßnahmen als Risse durch Schwund oder Feuchtigkeit. Wir erklären Ihnen genau, was passiert ist und wie wir vorgehen.\n\nBei Hohlstellen bohren wir gezielt Injektionslöcher im optimalen Raster und pressen Kunstharz unter kontrolliertem Druck ein. Das Harz füllt den Hohlraum und verbindet den Estrich wieder fest mit dem Untergrund. Risse werden mit einer Diamantfräse aufgeweitet, gründlich gereinigt und mit Spezialharz verfüllt.\n\nNach der Aushärtung (24-48 Stunden je nach System) schleifen wir die Oberfläche plan und bereiten sie für den Bodenbelag vor. Sie erhalten ein vollständiges Protokoll mit Fotos, Messwerten und Materialangaben – wichtig für Ihre Unterlagen, die Versicherung oder spätere Gewährleistungsfragen.",
  },
  {
    id: "schnellestrich",
    icon: Zap,
    title: "Schnellestrich",
    heroTagline: "Belegreif in Rekordzeit",
    problem: "Ihr Problem: Termindrückt, aber der Estrich braucht ewig zum Trocknen?",
    description: "Unser Schnellestrich ist in Rekordzeit belegreif. Perfekt, wenn jeder Tag zählt.",
    longDescription: "Wenn die Zeit drängt, ist Schnellestrich die Lösung. Durch spezielle Bindemittel ist der Estrich deutlich schneller belegreif – ohne Abstriche bei der Qualität.",
    whatIsIt: "Schnellestrich (auch Schnellzementestrich oder Rapid-Estrich genannt) enthält spezielle Bindemittel und Beschleuniger, die die Aushärtung und Trocknung drastisch verkürzen. Während normaler Zementestrich 3-4 Wochen zum Trocknen braucht, ist Schnellestrich bereits nach 1-3 Tagen belegreif. Die Qualität und Festigkeit entsprechen dabei konventionellem Estrich. Schnellestrich ist ideal für Projekte mit knappen Zeitplänen, bei Renovierungen oder wenn der Bauherr schnell einziehen muss.",
    painAgitation: [
      "Der Zeitplan steht. Der Einzugstermin ist fix. Der Bodenleger ist gebucht. Und dann sagt Ihnen jemand: 'Der Estrich braucht 4 Wochen zum Trocknen.' Ihr Plan? Zerstört.",
      "Jeder Tag Verzögerung kostet Geld. Verlängerte Miete für die alte Wohnung. Verschobene Handwerker. Strafgebühren für geplatzte Termine. Der Stress wird unerträglich.",
      "Sie haben alles durchgeplant – aber an diesen einen Faktor haben Sie nicht gedacht: Estrich-Trocknungszeit. Und jetzt stecken Sie fest."
    ],
    futureVision: "Stellen Sie sich vor: Der Estrich wird eingebracht – und schon nach 1-3 Tagen können die Bodenleger kommen. Ihr Zeitplan hält. Der Einzugstermin ist sicher. Sie können entspannt planen, weil Sie wissen: Hier verzögert nichts mehr.",
    solution: "Unser Schnellestrich mit Spezialbindemitteln erreicht die Belegreife bis zu 50% schneller als konventioneller Estrich. Gleiche Qualität, gleiche Festigkeit – nur viel, viel schneller.",
    differentiators: [
      "Belegreif in nur 1-3 Tagen statt 3-4 Wochen",
      "Dokumentierte Feuchtigkeitsmessung",
      "Ideal für Renovierung bewohnter Objekte",
      "Auch kurzfristige Termine möglich"
    ],
    features: ["Bis zu 50% schneller", "Gleiche Qualität", "Ideal bei Zeitdruck"],
    benefits: ["Belegreif in 1-3 Tagen", "Keine Qualitätseinbußen", "Planungssicherheit", "Frühere Nutzung möglich", "Termingarantie für Folgegerwerke", "Ideal für Renovierungen"],
    included: [
      { title: "Terminplanung", description: "Abstimmung mit allen Gewerken für einen nahtlosen Ablauf" },
      { title: "Materialauswahl", description: "Wahl des optimalen Schnellestrichsystems für Ihre Anforderungen" },
      { title: "Estricheinbau", description: "Fachgerechte Verarbeitung des Schnellestrichs" },
      { title: "Klimasteuerung", description: "Optimale Temperatur und Luftfeuchtigkeit für schnelle Trocknung" },
      { title: "Feuchtemessung", description: "Regelmäßige Kontrolle und Dokumentation der Restfeuchte" },
      { title: "Belegreifmeldung", description: "Schriftliche Freigabe mit Messwerten für das nächste Gewerk" }
    ],
    serviceTypes: [
      { name: "Schnellzementestrich", description: "Zementestrich mit Beschleunigerzusätzen. Belegreif nach 3-5 Tagen. Für alle Standard-Bodenbeläge geeignet.", bestFor: "Wohnungsbau, Renovierungen, Gewerbe" },
      { name: "Calciumsulfat-Schnellestrich", description: "Schnell trocknender Fließestrich auf Anhydritbasis. Besonders eben, ideal für Fußbodenheizung.", bestFor: "Große Flächen, Fußbodenheizung, hohe Ebenheit" },
      { name: "1-Tages-Estrich", description: "Spezialsystem für extreme Zeitanforderungen. Begehbar nach wenigen Stunden, belegreif nach 24 Stunden.", bestFor: "Notfälle, Ladenbau, minimale Ausfallzeiten" },
      { name: "Trockenestrich", description: "Vorgefertigte Platten, die trocken verlegt werden. Sofort belegreif, keine Trocknungszeit.", bestFor: "Altbausanierung, Holzdecken, sofortige Nutzung" }
    ],
    process: ["Terminplanung", "Schnelltrocknenden Estrich einbringen", "Optimale Trocknung gewährleisten", "Belegreifprüfung", "Freigabe für Bodenbelag"],
    technicalDetails: [
      "Trocknungszeit: 1-5 Tage je nach System (vs. 28+ Tage konventionell)",
      "Begehbarkeit: bereits nach 4-24 Stunden möglich",
      "Festigkeitsklasse: C25 bis C35 (identisch mit Standardestrich)",
      "Restfeuchte bei Belegreife: unter 2,0 CM% (Zement) / 0,5 CM% (Anhydrit)",
      "Schichtdicke: 40-65 mm je nach System und Belastung",
      "Temperaturbereich: Einbau ab +5°C, optimal bei 15-20°C"
    ],
    dinNorms: [
      { number: "DIN 18560", title: "Estriche im Bauwesen", description: "Gilt auch für Schnellestriche – Anforderungen an Festigkeit, Dicke und Ausführung bleiben identisch." },
      { number: "DIN EN 13813", title: "Estrichmörtel und Estrichmassen", description: "Eigenschaften und Konformitätsbewertung für alle Estricharten inklusive Schnellestriche." },
      { number: "DIN 18353", title: "VOB Teil C: Estricharbeiten", description: "Vertragsbedingungen und Qualitätsanforderungen für alle Estricharbeiten." },
      { number: "DIN 18365", title: "VOB Teil C: Bodenbelagsarbeiten", description: "Regelt die Anforderungen an die Belegreife und Restfeuchtemessung vor Verlegung von Bodenbelägen." },
      { number: "CM-Messung", title: "Calciumcarbid-Methode", description: "Standardverfahren zur Bestimmung der Restfeuchte im Estrich vor der Belegung." }
    ],
    faqs: [
      { question: "Ist Schnellestrich teurer als normaler Estrich?", answer: "Ja, die Materialkosten sind etwa 20-40% höher. Aber: Die eingesparte Zeit kann viel wertvoller sein – keine verlängerte Miete, pünktlicher Einzug, keine Handwerker-Umplanung. Oft rechnet sich der Aufpreis mehrfach." },
      { question: "Ist die Qualität wirklich gleich gut?", answer: "Ja. Schnellestrich erreicht die gleiche Endfestigkeit wie konventioneller Estrich. Der einzige Unterschied ist die Trocknungszeit – die Materialeigenschaften sind identisch oder sogar besser." },
      { question: "Kann Schnellestrich mit Fußbodenheizung verwendet werden?", answer: "Selbstverständlich. Schnellestrich eignet sich hervorragend für Fußbodenheizungen. Das Aufheizen kann sogar früher beginnen, was die Gesamtbauzeit weiter verkürzt." },
      { question: "Wann brauche ich wirklich Schnellestrich?", answer: "Immer wenn Zeit kritisch ist: Feste Einzugstermine, knappe Bauzeit, Renovierung bewohnter Objekte, Ladenbau mit minimaler Schließzeit. Wenn jeder Tag zählt, ist Schnellestrich die Lösung." },
      { question: "Wie schnell ist Schnellestrich wirklich belegreif?", answer: "Je nach System zwischen 1 und 5 Tagen. 1-Tages-Estrich ist nach 24 Stunden belegreif, Schnellzementestrich nach 3-5 Tagen. Zum Vergleich: Normaler Zementestrich braucht 4-8 Wochen." },
      { question: "Gibt es Einschränkungen bei Schnellestrich?", answer: "Kaum. Schnellestrich kann überall eingesetzt werden, wo normaler Estrich möglich ist. Wichtig sind die richtigen Umgebungsbedingungen: Temperatur über 5°C und geschlossene Räume für optimale Trocknung." }
    ],
    testimonial: {
      name: "Bauträger Alpenhäuser GmbH",
      location: "Starnberg",
      text: "Bei unserem Projekt hing alles am Zeitplan. Mit dem Schnellestrich von Estriche München konnten wir 2 Wochen früher mit den Bodenarbeiten beginnen. Das hat uns nicht nur Geld gespart, sondern auch zufriedenere Käufer gebracht.",
      project: "Mehrfamilienhaus-Neubau, 12 Einheiten"
    },
    guarantees: [
      "Garantierte Belegreife zum vereinbarten Termin",
      "Messprotokoll der Restfeuchte",
      "Expresszuschlag nur bei echtem Notfall nötig"
    ],
    urgency: "Zeitkritisches Projekt? Rufen Sie jetzt an – wir haben oft kurzfristig freie Kapazitäten für Schnellestrich-Aufträge.",
    image: serviceImage6,
    price: "35-55",
    galleryImages: [
      { src: galleryQuickScreed, alt: "Schnellestrich München Schwabing Pasing Laim - belegreif 24h Rapid-Estrich Fachbetrieb", caption: "Rapid-Estrich wird professionell eingebracht" },
      { src: galleryCementPour, alt: "Schnellestrich verlegen München Sendling Moosach Feldmoching - 1-3 Tage trocken professionell", caption: "Präzises Einbringen des Schnellestrichs" },
      { src: galleryQuality, alt: "Estrich CM-Messung München Bogenhausen Haidhausen - Belegreife dokumentiert Festpreis", caption: "Dokumentierte CM-Messung für garantierte Belegreife" }
    ],
    projectExamples: [
      { title: "Ladenbau Neueröffnung", location: "Maximilianstraße", area: "180 m²", duration: "1 Tag", description: "1-Tages-Estrich für Boutique-Neueröffnung. Begehbar nach 6 Stunden, Bodenbelag am nächsten Tag." },
      { title: "Wohnungsrenovierung", location: "Schwabing", area: "95 m²", duration: "1 Tag + 3 Tage Trocknung", description: "Schnellestrich für termingerechten Einzug. Familie konnte wie geplant umziehen." },
      { title: "Hotel-Renovierung", location: "Altstadt", area: "420 m²", duration: "3 Tage", description: "15 Zimmer während der Nebensaison renoviert. Minimal-invasiv, Hotelbetrieb lief weiter." }
    ],
    whyUs: [
      "Spezialisiert auf zeitkritische Projekte seit über 10 Jahren",
      "Eigene Schnellestrich-Rezepturen für optimale Ergebnisse",
      "Flexible Terminierung – auch kurzfristig und am Wochenende",
      "Garantierte Belegreife zum vereinbarten Termin",
      "Dokumentierte CM-Messung für Ihre Planungssicherheit",
      "Vertragsstrafe bei Terminüberschreitung – so sicher sind wir uns"
    ],
    detailedProcess: "Bei zeitkritischen Projekten ist Koordination alles. Wir stimmen zunächst den exakten Zeitplan mit allen beteiligten Gewerken ab – Bodenleger, Maler, Elektriker. Jeder weiß genau, wann er starten kann. So vermeiden wir Leerlauf und Verzögerungen.\n\nVor dem Verlegetag prüfen wir alle Voraussetzungen: Ist der Raum geschlossen? Sind Fenster und Türen eingebaut? Kann die Temperatur gehalten werden? Diese Faktoren sind entscheidend für die schnelle Trocknung.\n\nAm Verlegetag bringen wir den Schnellestrich mit unseren speziellen Bindemitteln ein. Die Mischung ist genau auf Ihr Projekt abgestimmt – je nach Schichtdicke, Raumtemperatur und gewünschter Trocknungszeit. Die Oberfläche wird sorgfältig geglättet und abgerieben.\n\nEntscheidend für schnelle Trocknung ist die Klimasteuerung. Wir optimieren Temperatur (idealerweise 20-25°C) und Luftfeuchtigkeit im Raum. Bei Bedarf stellen wir Trocknungsgeräte auf, um den Prozess zu beschleunigen.\n\nTäglich messen wir die Restfeuchte mit kalibriertem CM-Gerät und dokumentieren den Fortschritt. Sie werden laufend informiert, wie die Trocknung voranschreitet. Sobald der Estrich belegreif ist (je nach System 1-5 Tage), erhalten Sie eine schriftliche Freigabe mit allen Messwerten. Das nächste Gewerk kann sofort starten – garantiert zum vereinbarten Termin.",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
