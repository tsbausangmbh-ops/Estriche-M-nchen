import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Info, Layers, Building2, Thermometer, Shield, Wrench, Zap } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/two_workers_pouring_screed_blue.png";

const priceCategories = [
  {
    id: "zementestrich",
    icon: Layers,
    title: "Zementestrich & Fließestrich",
    subtitle: "Der Klassiker für Wohnbau und Renovierung",
    priceRange: "25 - 45",
    unit: "€/m²",
    includes: [
      "Untergrundvorbereitung und Reinigung",
      "Randdämmstreifen umlaufend",
      "Estricheinbau in gewünschter Stärke",
      "Oberflächenglättung nach DIN 18560",
      "Feuchtemessung und Belegreifprotokoll"
    ],
    extras: [
      { name: "Trittschalldämmung 20-40mm", price: "8-15 €/m²" },
      { name: "Wärmedämmung 60-120mm", price: "12-25 €/m²" },
      { name: "Fußbodenheizung-Vorbereitung", price: "5-10 €/m²" },
      { name: "Höhenausgleich über 20mm", price: "3-8 €/m²" }
    ],
    note: "Mindestauftragswert 800€. Preise inkl. Material und Anfahrt München."
  },
  {
    id: "industrieboeden",
    icon: Building2,
    title: "Industrieböden & Sichtestrich",
    subtitle: "Für Gewerbe, Industrie und modernes Wohnen",
    priceRange: "45 - 95",
    unit: "€/m²",
    includes: [
      "Untergrundanalyse und -vorbereitung",
      "Kugelstrahlen oder Fräsen bei Bedarf",
      "Hochfester Industrieestrich oder Sichtestrich",
      "Oberflächenbehandlung nach Wahl",
      "Prüfprotokoll mit Belastungswerten"
    ],
    extras: [
      { name: "Epoxid-Beschichtung", price: "25-45 €/m²" },
      { name: "Polyurethan-Versiegelung", price: "20-35 €/m²" },
      { name: "Sichtestrich geschliffen", price: "35-55 €/m²" },
      { name: "Farbige Einstreuung", price: "8-15 €/m²" }
    ],
    note: "Preis abhängig von Belastungsanforderung. Wochenend-/Nachtarbeit gegen Aufpreis."
  },
  {
    id: "fussbodenheizung",
    icon: Thermometer,
    title: "Fußbodenheizung einfräsen",
    subtitle: "Nachrüstung ohne großen Umbau",
    priceRange: "45 - 75",
    unit: "€/m²",
    includes: [
      "Aufmaß und Heizlastberechnung",
      "Computergestützter Verlegeplan",
      "Fräsung der Kanäle mit Absaugung",
      "Heizrohre und Vergussmasse",
      "Druckprüfung und Dokumentation"
    ],
    extras: [
      { name: "Einzelraumregelung", price: "80-150 €/Raum" },
      { name: "Heizkreisverteiler", price: "250-450 €" },
      { name: "Anschluss an Bestandsheizung", price: "150-300 €" },
      { name: "Altbelag-Entfernung", price: "8-15 €/m²" }
    ],
    note: "Preis inkl. Rohre und Vergussmasse. Komplettservice mit Partner-Installateur möglich."
  },
  {
    id: "waermedaemmung",
    icon: Shield,
    title: "Wärme- & Trittschalldämmung",
    subtitle: "Energiesparen und Ruhe genießen",
    priceRange: "18 - 45",
    unit: "€/m²",
    includes: [
      "U-Wert-Berechnung nach GEG",
      "Dampfsperre/Feuchtigkeitssperre",
      "Dämmplatten in berechneter Stärke",
      "Fugenlose Verlegung ohne Wärmebrücken",
      "Dokumentation für Förderanträge"
    ],
    extras: [
      { name: "Vakuumdämmung (minimal)", price: "80-120 €/m²" },
      { name: "Schallschutz-Kombidämmung", price: "25-40 €/m²" },
      { name: "Kellerdeckendämmung", price: "35-55 €/m²" },
      { name: "Energieberatung für Förderung", price: "150 € pauschal" }
    ],
    note: "Förderfähig über KfW/BAFA. Wir unterstützen bei der Antragstellung."
  },
  {
    id: "sanierung",
    icon: Wrench,
    title: "Estrichsanierung & Reparatur",
    subtitle: "Rettung statt Abriss – wirtschaftlich und schnell",
    priceRange: "35 - 85",
    unit: "€/m²",
    includes: [
      "Kostenlose Schadensdiagnose vor Ort",
      "Hohlstellen-Ortung und Rissmessung",
      "Injektionsverpressung oder Risssanierung",
      "Oberflächenaufbereitung",
      "Protokoll für Versicherung"
    ],
    extras: [
      { name: "Wasserschaden-Trocknung", price: "15-25 €/m²/Tag" },
      { name: "Teilsanierung Estrich", price: "45-65 €/m²" },
      { name: "Komplett-Neuaufbau", price: "55-85 €/m²" },
      { name: "Notfall-Einsatz (24h)", price: "+50% Aufschlag" }
    ],
    note: "Direkte Versicherungsabwicklung bei Regulierungsschäden möglich."
  },
  {
    id: "schnellestrich",
    icon: Zap,
    title: "Schnellestrich",
    subtitle: "Wenn die Zeit drängt",
    priceRange: "35 - 55",
    unit: "€/m²",
    includes: [
      "Schnelltrocknende Spezialmischung",
      "Verlegung und Oberflächenglättung",
      "Tägliche Feuchtemessung",
      "Belegreif in 1-5 Tagen",
      "Garantierte Terminfreigabe"
    ],
    extras: [
      { name: "1-Tages-Estrich (24h begehbar)", price: "+15 €/m²" },
      { name: "Wochenend-Verlegung", price: "+20% Aufschlag" },
      { name: "Express-Trocknung (Geräte)", price: "5-10 €/m²/Tag" },
      { name: "Termin-Garantie schriftlich", price: "inklusive" }
    ],
    note: "Ideal bei Renovierung, Ladenbau oder zeitkritischen Projekten."
  }
];

const additionalServices = [
  { name: "Kostenlose Vor-Ort-Besichtigung", price: "0 €" },
  { name: "Festpreis-Angebot innerhalb 48h", price: "0 €" },
  { name: "Anfahrt im Stadtgebiet München", price: "42,50 €" },
  { name: "Anfahrt Umland (bis 30km)", price: "68,50 €" },
  { name: "Anfahrt Umland (ab 30km)", price: "98,50 €" },
  { name: "Baustelleneinrichtung", price: "600 €" },
  { name: "Baustellenendreinigung", price: "280 €" },
  { name: "Entsorgung Altmaterial (Container)", price: "ab 800 €" },
  { name: "Altestrich-Abbruch", price: "15-25 €/m²" },
  { name: "Höhenausgleich bis 20mm", price: "5-10 €/m²" },
  { name: "Grundierung Untergrund", price: "3-5 €/m²" },
  { name: "Randdämmstreifen verlegen inkl. Material", price: "2-3 €/lfm" },
  { name: "Auslegen der Folie inkl. Material", price: "1,50-2,50 €/m²" },
  { name: "Untergrunddämmung 1-5 cm inkl. Material", price: "8-18 €/m²" }
];

export default function Preise() {
  const scrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">Transparente Preise</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Faire Preise für München
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Bei uns wissen Sie vorher, was es kostet. Alle Preise sind Richtwerte für München und Umgebung. 
              Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot.
            </p>
            <Button size="lg" onClick={scrollToContact} data-testid="button-preise-cta">
              Mein persönliches Angebot anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {priceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`price-card-${index}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{category.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{category.priceRange}</div>
                      <div className="text-xs text-muted-foreground">{category.unit}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wide">Inklusive:</p>
                    <ul className="space-y-1">
                      {category.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium mb-2 text-muted-foreground uppercase tracking-wide">Optionale Extras:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {category.extras.map((extra, i) => (
                        <div key={i} className="text-xs">
                          <span className="text-muted-foreground">{extra.name}</span>
                          <span className="block font-medium">{extra.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-md">
                    <Info className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span>{category.note}</span>
                  </div>
                  <Link href={`/leistungen/${category.id}`}>
                    <Button variant="outline" className="w-full" size="sm">
                      Mehr erfahren
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-center">
            Zusätzliche Leistungen & Service
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <span className="text-sm">{service.name}</span>
                    <Badge variant={service.price === "0 €" || service.price === "inklusive" ? "default" : "secondary"}>
                      {service.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-6 text-center">
            So funktioniert unser Festpreis
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Besichtigung</h3>
                <p className="text-sm text-muted-foreground">Wir kommen kostenlos zu Ihnen und erfassen alle Details vor Ort.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Festpreis-Angebot</h3>
                <p className="text-sm text-muted-foreground">Sie erhalten ein verbindliches Angebot – was drin steht, gilt.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Keine Überraschungen</h3>
                <p className="text-sm text-muted-foreground">Sie zahlen exakt den vereinbarten Preis. Keine Nachforderungen.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Jetzt Ihr persönliches Angebot anfordern
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
            Die Richtwerte geben Ihnen eine Orientierung. Für Ihr konkretes Projekt erstellen wir 
            ein individuelles Festpreis-Angebot – kostenlos und unverbindlich.
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-preise-footer-cta">
            Kostenloses Angebot anfordern
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
