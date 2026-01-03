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

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  image: string;
  price: string;
}

export const services: Service[] = [
  {
    id: "zementestrich",
    icon: Layers,
    title: "Zementestrich und Fließestrich",
    problem: "Ihr Problem: Unebene Böden, die jeden Belag ruinieren?",
    description: "Wir liefern perfekt plane Flächen – die ideale Basis für Parkett, Fliesen oder Vinyl. Kein Nacharbeiten, kein Ärger.",
    longDescription: "Zementestrich ist der Klassiker unter den Estricharten und bietet eine robuste, langlebige Grundlage für nahezu jeden Bodenbelag. Unser Team sorgt für eine präzise Verlegung mit perfekter Ebenheit, die höchsten Ansprüchen gerecht wird. Fließestrich ermöglicht dabei besonders glatte Oberflächen und eignet sich ideal für große Flächen.",
    features: ["Perfekte Ebenheit garantiert", "Für jeden Bodenbelag geeignet", "Schneller als Sie denken"],
    benefits: ["Hohe Druckfestigkeit", "Feuchtigkeitsbeständig", "Wirtschaftlich bei großen Flächen", "Lange Lebensdauer"],
    process: ["Untergrund prüfen und vorbereiten", "Randdämmstreifen anbringen", "Estrich fachgerecht einbringen", "Oberfläche glätten und abreiben", "Kontrollierte Trocknung"],
    image: serviceImage1,
    price: "25-35",
  },
  {
    id: "industrieboeden",
    icon: Building2,
    title: "Industrieböden und Sichtestrich",
    problem: "Ihr Problem: Böden, die der Belastung nicht standhalten?",
    description: "Unsere Industrieböden sind für härteste Beanspruchung gemacht. Sichtestrich vereint dabei Funktion mit modernem Design.",
    longDescription: "Industrieböden müssen extremen Belastungen standhalten – von schweren Maschinen bis hin zu chemischen Einflüssen. Wir liefern Böden, die diesen Anforderungen gewachsen sind. Sichtestrich ist dabei nicht nur funktional, sondern auch ein optisches Highlight für moderne Architektur in Lofts, Büros und Showrooms.",
    features: ["Extreme Belastbarkeit", "Optisch ein Hingucker", "Langlebig und wartungsarm"],
    benefits: ["Hohe Abriebfestigkeit", "Chemikalienbeständig", "Fugenlose große Flächen möglich", "Pflegeleicht"],
    process: ["Anforderungsanalyse vor Ort", "Untergrundvorbereitung", "Spezialestrich einbringen", "Oberflächenbehandlung", "Versiegelung und Finish"],
    image: serviceImage2,
    price: "45-80",
  },
  {
    id: "fussbodenheizung",
    icon: Thermometer,
    title: "Fußbodenheizung einfräsen",
    problem: "Ihr Problem: Kalte Füße, aber Angst vor dem Renovierungschaos?",
    description: "Wir fräsen Ihre Fußbodenheizung nachträglich ein – ohne den ganzen Estrich rauszureißen. Sauber, schnell, stressfrei.",
    longDescription: "Eine Fußbodenheizung nachträglich einzubauen muss kein Albtraum sein. Mit unserer Fräsmethode schneiden wir präzise Kanäle in Ihren bestehenden Estrich und verlegen die Heizungsrohre darin. So sparen Sie sich den kompletten Abriss und können trotzdem die Vorteile einer modernen Fußbodenheizung genießen.",
    features: ["Kein kompletter Abriss nötig", "In wenigen Tagen erledigt", "Ab 45€/m² möglich"],
    benefits: ["Gleichmäßige Wärmeverteilung", "Energieeffizienter als Heizkörper", "Mehr Platz im Raum", "Allergikerfreundlich"],
    process: ["Bestandsaufnahme des Estrichs", "Heizkreisplanung", "Fräsen der Kanäle", "Rohrverlegung", "Verfüllen und Abschleifen"],
    image: serviceImage3,
    price: "45-65",
  },
  {
    id: "waermedaemmung",
    icon: Shield,
    title: "Wärmedämmung & Abdichtung",
    problem: "Ihr Problem: Hohe Heizkosten durch schlechte Dämmung?",
    description: "Mit professioneller Wärmedämmung senken Sie Ihre Energiekosten dauerhaft. Wir machen Ihren Boden energieeffizient.",
    longDescription: "Eine gute Wärmedämmung unter dem Estrich ist die Grundlage für ein energieeffizientes Gebäude. Wir verbauen hochwertige Dämmmaterialien, die nicht nur Wärme, sondern auch Schall isolieren. Dazu gehört die fachgerechte Abdichtung gegen Feuchtigkeit – besonders wichtig bei Kellern und Erdgeschossen.",
    features: ["Heizkosten sparen", "Trittschall reduzieren", "Normgerechter Aufbau"],
    benefits: ["Bis zu 30% Energieeinsparung", "Verbesserter Wohnkomfort", "Schallschutz inklusive", "Feuchtigkeitsschutz"],
    process: ["Untergrund reinigen", "Dampfsperre verlegen", "Dämmmaterial einbauen", "Trennlage aufbringen", "Estrich einbringen"],
    image: serviceImage4,
    price: "15-25",
  },
  {
    id: "sanierung",
    icon: Wrench,
    title: "Sanierung & Reparatur",
    problem: "Ihr Problem: Risse, Hohlstellen oder unebene alte Böden?",
    description: "Wir retten Ihren bestehenden Estrich – oft ohne kompletten Austausch. Gezielt, schnell und kosteneffizient.",
    longDescription: "Nicht jeder beschädigte Estrich muss komplett raus. Mit modernen Sanierungsmethoden können wir Risse reparieren, Hohlstellen verfüllen und unebene Stellen ausgleichen. Das spart Zeit, Geld und Nerven. Unsere Experten analysieren den Schaden vor Ort und empfehlen die wirtschaftlichste Lösung.",
    features: ["Diagnose vor Ort", "Oft günstiger als Neubau", "Schnelle Lösung"],
    benefits: ["Kein Komplettabriss nötig", "Kürzere Bauzeit", "Kostengünstiger", "Weniger Schmutz"],
    process: ["Schadensanalyse", "Ursachenermittlung", "Reparaturkonzept erstellen", "Sanierung durchführen", "Qualitätskontrolle"],
    image: serviceImage5,
    price: "20-40",
  },
  {
    id: "schnellestrich",
    icon: Zap,
    title: "Schnellestrich",
    problem: "Ihr Problem: Termindrückt, aber der Estrich braucht ewig zum Trocknen?",
    description: "Unser Schnellestrich ist in Rekordzeit belegreif. Perfekt, wenn jeder Tag zählt.",
    longDescription: "Wenn die Zeit drängt, ist Schnellestrich die Lösung. Durch spezielle Bindemittel und Zusätze ist der Estrich deutlich schneller belegreif als herkömmliche Varianten. Ideal für Renovierungen, bei denen Sie schnell wieder einziehen möchten, oder Gewerbeprojekte mit straffen Zeitplänen.",
    features: ["Bis zu 50% schneller", "Gleiche Qualität", "Ideal bei Zeitdruck"],
    benefits: ["Belegreif in 1-3 Tagen", "Keine Qualitätseinbußen", "Planungssicherheit", "Frühere Nutzung möglich"],
    process: ["Terminplanung", "Schnelltrocknenden Estrich einbringen", "Optimale Trocknung gewährleisten", "Belegreifprüfung", "Freigabe für Bodenbelag"],
    image: serviceImage6,
    price: "35-50",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
