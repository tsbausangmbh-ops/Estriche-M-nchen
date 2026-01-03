import { 
  Layers,
  Thermometer,
  Shield,
  Wrench,
  Zap,
  Building2,
  LucideIcon
} from "lucide-react";
import serviceImage1 from "@assets/generated_images/three_workers_laying_screed.png";
import serviceImage2 from "@assets/generated_images/polished_industrial_floor_warehouse.png";
import serviceImage3 from "@assets/generated_images/two_workers_milling_and_pipes.png";
import serviceImage4 from "@assets/generated_images/three_workers_installing_insulation.png";
import serviceImage5 from "@assets/generated_images/repairing_floor_cracks.png";
import serviceImage6 from "@assets/generated_images/two_workers_pouring_screed.png";

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  project: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  heroTagline: string;
  problem: string;
  description: string;
  longDescription: string;
  painAgitation: string[];
  futureVision: string;
  solution: string;
  differentiators: string[];
  features: string[];
  benefits: string[];
  process: string[];
  testimonial: Testimonial;
  guarantees: string[];
  urgency: string;
  image: string;
  price: string;
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
    benefits: ["Hohe Druckfestigkeit", "Feuchtigkeitsbeständig", "Wirtschaftlich bei großen Flächen", "Lange Lebensdauer"],
    process: ["Untergrund prüfen und vorbereiten", "Randdämmstreifen anbringen", "Estrich fachgerecht einbringen", "Oberfläche glätten und abreiben", "Kontrollierte Trocknung"],
    testimonial: {
      name: "Familie Huber",
      location: "München-Bogenhausen",
      text: "Wir hatten bei anderen Firmen schlechte Erfahrungen gemacht. Estrich München hat alles anders gemacht: pünktlich, sauber, und der Boden ist perfekt eben. Unser Parkettleger war begeistert!",
      project: "Neubau Einfamilienhaus, 180 m²"
    },
    guarantees: [
      "5 Jahre Gewährleistung auf alle Arbeiten",
      "Festpreis – was wir anbieten, gilt",
      "Pünktlichkeitsgarantie oder 100€ Gutschrift"
    ],
    urgency: "Aktuell haben wir noch 3 freie Termine im Januar. Sichern Sie sich jetzt Ihren Wunschtermin, bevor die Auftragsbücher voll sind.",
    image: serviceImage1,
    price: "25-35",
  },
  {
    id: "industrieboeden",
    icon: Building2,
    title: "Industrieböden und Sichtestrich",
    heroTagline: "Böden für härteste Ansprüche mit edlem Design",
    problem: "Ihr Problem: Böden, die der Belastung nicht standhalten?",
    description: "Unsere Industrieböden sind für härteste Beanspruchung gemacht. Sichtestrich vereint dabei Funktion mit modernem Design.",
    longDescription: "Industrieböden müssen extremen Belastungen standhalten – von Gabelstaplern bis zu chemischen Einflüssen. Sichtestrich ist dabei nicht nur funktional, sondern ein echtes Design-Statement.",
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
    benefits: ["Hohe Abriebfestigkeit", "Chemikalienbeständig", "Fugenlose große Flächen möglich", "Pflegeleicht"],
    process: ["Anforderungsanalyse vor Ort", "Untergrundvorbereitung", "Spezialestrich einbringen", "Oberflächenbehandlung", "Versiegelung und Finish"],
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
    price: "45-80",
  },
  {
    id: "fussbodenheizung",
    icon: Thermometer,
    title: "Fußbodenheizung einfräsen",
    heroTagline: "Warme Füße ohne großen Umbau",
    problem: "Ihr Problem: Kalte Füße, aber Angst vor dem Renovierungschaos?",
    description: "Wir fräsen Ihre Fußbodenheizung nachträglich ein – ohne den ganzen Estrich rauszureißen. Sauber, schnell, stressfrei.",
    longDescription: "Eine Fußbodenheizung nachträglich einzubauen muss kein Albtraum sein. Mit unserer Fräsmethode schneiden wir präzise Kanäle in Ihren bestehenden Estrich – ohne Abriss, ohne wochenlange Baustelle.",
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
    benefits: ["Gleichmäßige Wärmeverteilung", "Energieeffizienter als Heizkörper", "Mehr Platz im Raum", "Allergikerfreundlich"],
    process: ["Bestandsaufnahme des Estrichs", "Heizkreisplanung", "Fräsen der Kanäle", "Rohrverlegung", "Verfüllen und Abschleifen"],
    testimonial: {
      name: "Martina & Klaus Schmidt",
      location: "München-Sendling",
      text: "Wir dachten, Fußbodenheizung nachrüsten wäre unmöglich in unserer Altbauwohnung. Estrich München hat es in 3 Tagen geschafft – wir konnten die ganze Zeit wohnen bleiben. Jetzt genießen wir jeden Morgen warme Füße!",
      project: "Altbau-Nachrüstung, 85 m²"
    },
    guarantees: [
      "Funktionsgarantie auf das komplette Heizsystem",
      "Saubere Baustelle – wir räumen jeden Abend auf",
      "Festpreis inklusive aller Nebenarbeiten"
    ],
    urgency: "Die Heizperiode hat begonnen – und unsere Fräs-Teams sind gefragt. Sichern Sie sich jetzt Ihren Termin für diesen Winter.",
    image: serviceImage3,
    price: "45-65",
  },
  {
    id: "waermedaemmung",
    icon: Shield,
    title: "Wärmedämmung & Abdichtung",
    heroTagline: "Energie sparen ab dem ersten Tag",
    problem: "Ihr Problem: Hohe Heizkosten durch schlechte Dämmung?",
    description: "Mit professioneller Wärmedämmung senken Sie Ihre Energiekosten dauerhaft. Wir machen Ihren Boden energieeffizient.",
    longDescription: "Eine gute Wärmedämmung unter dem Estrich ist die Grundlage für ein energieeffizientes Zuhause. Wir verbauen hochwertige Dämmmaterialien, die Wärme halten und Schall isolieren.",
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
    benefits: ["Bis zu 30% Energieeinsparung", "Verbesserter Wohnkomfort", "Schallschutz inklusive", "Feuchtigkeitsschutz"],
    process: ["Untergrund reinigen", "Dampfsperre verlegen", "Dämmmaterial einbauen", "Trennlage aufbringen", "Estrich einbringen"],
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
    price: "15-25",
  },
  {
    id: "sanierung",
    icon: Wrench,
    title: "Sanierung & Reparatur",
    heroTagline: "Wir retten Ihren Estrich",
    problem: "Ihr Problem: Risse, Hohlstellen oder unebene alte Böden?",
    description: "Wir retten Ihren bestehenden Estrich – oft ohne kompletten Austausch. Gezielt, schnell und kosteneffizient.",
    longDescription: "Nicht jeder beschädigte Estrich muss komplett raus. Mit modernen Sanierungsmethoden reparieren wir Risse, verfüllen Hohlstellen und gleichen unebene Stellen aus.",
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
    benefits: ["Kein Komplettabriss nötig", "Kürzere Bauzeit", "Kostengünstiger", "Weniger Schmutz"],
    process: ["Schadensanalyse", "Ursachenermittlung", "Reparaturkonzept erstellen", "Sanierung durchführen", "Qualitätskontrolle"],
    testimonial: {
      name: "Hausverwaltung Immobilien GmbH",
      location: "München-Maxvorstadt",
      text: "In einer unserer Mietwohnungen gab es massive Estrichprobleme. Andere Firmen wollten komplett erneuern – Kosten: über 15.000€. Estrich München hat es für einen Bruchteil repariert. Nach 2 Jahren: Keinerlei Probleme.",
      project: "Estrichsanierung Altbau, 72 m²"
    },
    guarantees: [
      "Transparente Kostenaufstellung vor Arbeitsbeginn",
      "5 Jahre Gewährleistung auf Reparaturen",
      "Wenn Reparatur nicht möglich: Ehrliche Empfehlung"
    ],
    urgency: "Je früher Sie handeln, desto geringer der Schaden. Vereinbaren Sie jetzt Ihre kostenlose Schadensanalyse.",
    image: serviceImage5,
    price: "20-40",
  },
  {
    id: "schnellestrich",
    icon: Zap,
    title: "Schnellestrich",
    heroTagline: "Belegreif in Rekordzeit",
    problem: "Ihr Problem: Termindrückt, aber der Estrich braucht ewig zum Trocknen?",
    description: "Unser Schnellestrich ist in Rekordzeit belegreif. Perfekt, wenn jeder Tag zählt.",
    longDescription: "Wenn die Zeit drängt, ist Schnellestrich die Lösung. Durch spezielle Bindemittel ist der Estrich deutlich schneller belegreif – ohne Abstriche bei der Qualität.",
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
    benefits: ["Belegreif in 1-3 Tagen", "Keine Qualitätseinbußen", "Planungssicherheit", "Frühere Nutzung möglich"],
    process: ["Terminplanung", "Schnelltrocknenden Estrich einbringen", "Optimale Trocknung gewährleisten", "Belegreifprüfung", "Freigabe für Bodenbelag"],
    testimonial: {
      name: "Bauträger Alpenhäuser GmbH",
      location: "Starnberg",
      text: "Bei unserem Projekt hing alles am Zeitplan. Mit dem Schnellestrich von Estrich München konnten wir 2 Wochen früher mit den Bodenarbeiten beginnen. Das hat uns nicht nur Geld gespart, sondern auch zufriedenere Käufer gebracht.",
      project: "Mehrfamilienhaus-Neubau, 12 Einheiten"
    },
    guarantees: [
      "Garantierte Belegreife zum vereinbarten Termin",
      "Messprotokoll der Restfeuchte",
      "Expresszuschlag nur bei echtem Notfall nötig"
    ],
    urgency: "Zeitkritisches Projekt? Rufen Sie jetzt an – wir haben oft kurzfristig freie Kapazitäten für Schnellestrich-Aufträge.",
    image: serviceImage6,
    price: "35-50",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
