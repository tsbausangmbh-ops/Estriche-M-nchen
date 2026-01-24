import { Helmet } from "react-helmet-async";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo-schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Info, Layers, Building2, Thermometer, Shield, Wrench, Zap, Phone, Euro, Users } from "lucide-react";
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
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estrich Preise München | Kosten pro m² | Transparente Festpreise</title>
        <meta name="description" content="Estrich Preise München 2026: Zementestrich ab 32€/m², Fließestrich ab 42€/m², Schnellestrich ab 48€/m². Transparente Festpreise." />
        <meta name="keywords" content="Estrich Preise München, Estrich Kosten pro qm, Zementestrich Preis München, Fließestrich Kosten, Heizestrich Preise, Estrich verlegen Kosten, Schnellestrich Preis, Industrieboden Kosten, Estrich Preisliste 2026" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="München" />
        <link rel="canonical" href="https://estriche-muenchen.de/preise" />
        <meta property="og:title" content="Estrich Preise München | Transparente Kosten" />
        <meta property="og:description" content="Faire Estrich-Preise in München. Zementestrich ab 25€/m², Festpreis-Garantie ohne versteckte Kosten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/preise" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.png" />
        <meta name="twitter:image" content="https://estriche-muenchen.de/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "Estrich Preise", url: "https://estriche-muenchen.de/preise" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            title: "Estrich Preise München",
            description: "Transparente Estrich-Preise in München. Zementestrich ab 25€/m², Fließestrich ab 28€/m².",
            url: "https://estriche-muenchen.de/preise"
          }))}
        </script>
      </Helmet>
      <Header />

      <section className="relative py-6 lg:py-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Euro className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Transparente Preise
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Estrich Preise München</strong> – Was andere verschweigen
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              <strong>Kennen Sie das?</strong> Der Handwerker nennt einen Preis – und am Ende zahlen Sie 40% mehr. 
              <strong>Bei uns nicht.</strong> Hier sehen Sie transparent, was Estrich wirklich kostet. <strong>Keine Spielchen. Keine Nachforderungen.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Keine versteckten Kosten", "Festpreis-Garantie", "Kostenlose Beratung", "Faire Konditionen"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-lg px-4 py-2 mb-6 inline-block">
              <span className="text-amber-200 text-sm font-medium">
                <strong>Preisgarantie:</strong> Aktuelle Preise nur noch bis Monatsende gültig
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/rechner">
                <Button size="lg" data-testid="button-preise-cta">
                  Jetzt Budget berechnen
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800" asChild>
                <a href="tel:+4989444438872">
                  <Phone className="mr-2 h-4 w-4" />
                  089 444438872
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>280+ zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100€ bei Verspätung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Festpreis-Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30 border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight">
              <strong>Estrich Kosten</strong> – Was hält Sie wirklich zurück?
            </h2>
            <p className="text-muted-foreground text-sm"><strong className="text-foreground">Diese Ängste hören wir täglich</strong> – und so nehmen wir sie Ihnen:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { q: "Wie viel kostet mein Projekt?", a: "→ Nutzen Sie unseren Rechner" },
              { q: "Welcher Estrich ist der richtige?", a: "→ Wir beraten Sie kostenlos" },
              { q: "Kann ich dem Preis vertrauen?", a: "→ Festpreis-Garantie" },
              { q: "Wann ist der Estrich fertig?", a: "→ Klare Terminzusage" }
            ].map((item, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium mb-2">{item.q}</p>
                  <p className="text-xs text-primary">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Preistransparenz</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              <strong>Estrich Festpreis</strong> – Warum Sie keine bösen Überraschungen erleben
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Kennen Sie das? Sie beauftragen einen Handwerker, er nennt einen Preis – und am Ende zahlen 
                Sie plötzlich 30% oder mehr. „Unvorhergesehene Mehrarbeiten" heißt es dann. 
                <strong>Wir haben uns geschworen, dass Ihnen das bei uns niemals passiert.</strong>
              </p>

              <p>
                Stellen Sie sich vor, wie es sich anfühlt, wenn Sie ein Angebot in der Hand halten und 
                absolut sicher wissen: Das ist der Preis. Nicht ungefähr. Sondern exakt. Sie können planen, 
                budgetieren und ruhig schlafen.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4"><strong>Estrich Preisgarantie</strong> – Unser Festpreis-Versprechen</h3>

              <p>
                Bevor wir Ihnen einen Preis nennen, kommen wir zu Ihnen. Wir prüfen den Untergrund, die 
                Zugänge, alle Gegebenheiten. Erst dann erstellen wir Ihr Angebot. <strong>Und dieser Preis 
                steht – egal was passiert.</strong> Das Risiko tragen wir, nicht Sie.
              </p>

              <p>
                Warum können wir das anbieten? Weil wir seit über 30 Jahren <Link href="/" className="text-primary hover:underline"><strong>Estrich in München</strong></Link> verlegen. 
                Über 1.200 Projekte haben uns gezeigt, was uns erwartet und was es kostet. Diese Erfahrung 
                gibt uns die Sicherheit für verbindliche Preise. Berechnen Sie Ihre <Link href="/rechner" className="text-primary hover:underline"><strong>Estrich Kosten</strong></Link> vorab mit unserem Online-Rechner.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4"><strong>Estrich Qualität</strong> statt Billigangebot</h3>

              <p>
                Der billigste Anbieter ist selten der günstigste. Ein schlecht gemachter Estrich kostet Sie 
                am Ende mehr – durch Risse, Unebenheiten und Verzögerungen. Bei uns bekommen Sie vom ersten 
                Tag an Qualität: Ein Boden, der jahrzehntelang hält. Bei Fragen hilft unser <Link href="/faq" className="text-primary hover:underline"><strong>Estrich FAQ</strong></Link>.
              </p>

              <p>
                <strong>Lassen Sie uns sprechen.</strong> Wir kommen zu Ihnen, schauen uns alles an und 
                erstellen ein verbindliches Festpreis-Angebot. Kostenlos und unverbindlich.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-nlp-section-cta">
                Jetzt Festpreis-Angebot anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800" asChild>
              <a href="tel:+4989444438872">
                <Phone className="mr-2 h-4 w-4" />
                089 444438872
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Preisvergleich</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              <strong>Estrich Kosten pro qm</strong> München 2026 im Überblick
            </h2>
            <p className="text-xs text-muted-foreground">Stand: Januar 2026 | Letzte Aktualisierung: 22.01.2026</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg overflow-hidden text-sm" data-testid="price-comparison-table">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Estrichart</th>
                  <th className="px-4 py-3 text-left font-semibold">Preis pro m²</th>
                  <th className="px-4 py-3 text-left font-semibold">Trocknungszeit</th>
                  <th className="px-4 py-3 text-left font-semibold">Empfohlen für</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium">Zementestrich (CT)</td>
                  <td className="px-4 py-3 text-primary font-semibold">25–35 €</td>
                  <td className="px-4 py-3">28–42 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Wohnbau, Keller, Feuchträume</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Fließestrich (CA)</td>
                  <td className="px-4 py-3 text-primary font-semibold">28–40 €</td>
                  <td className="px-4 py-3">21–35 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Fußbodenheizung, große Flächen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Heizestrich</td>
                  <td className="px-4 py-3 text-primary font-semibold">35–50 €</td>
                  <td className="px-4 py-3">21–35 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Neubau mit Fußbodenheizung</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Schnellestrich</td>
                  <td className="px-4 py-3 text-primary font-semibold">40–55 €</td>
                  <td className="px-4 py-3">1–7 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Renovierung, Zeitdruck</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Industrieestrich</td>
                  <td className="px-4 py-3 text-primary font-semibold">45–80 €</td>
                  <td className="px-4 py-3">14–28 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Gewerbe, Hallen, Garagen</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Sichtestrich</td>
                  <td className="px-4 py-3 text-primary font-semibold">65–120 €</td>
                  <td className="px-4 py-3">28–42 Tage</td>
                  <td className="px-4 py-3 text-muted-foreground">Lofts, Showrooms, Design</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Alle Preise verstehen sich als Richtwerte inkl. Material und Einbau. Exakter Festpreis nach kostenloser Vor-Ort-Besichtigung.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
            <h3 className="text-2xl font-extrabold tracking-tight mb-6 text-center">
              Zusätzliche <strong>Estrich-Leistungen</strong> & Service
            </h3>
          <Card>
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <span className="text-sm text-muted-foreground">{service.name}</span>
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

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
            <h3 className="text-2xl font-extrabold tracking-tight mb-6 text-center">
              So funktioniert unser <strong>Estrich Festpreis-Angebot</strong>
            </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">1</div>
                <p className="font-bold mb-2">Besichtigung</p>
                <p className="text-sm text-muted-foreground">Wir kommen kostenlos zu Ihnen und erfassen alle Details vor Ort.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">2</div>
                <p className="font-bold mb-2">Festpreis-Angebot</p>
                <p className="text-sm text-muted-foreground">Sie erhalten ein verbindliches Angebot – was drin steht, gilt.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">3</div>
                <p className="font-bold mb-2">Keine Überraschungen</p>
                <p className="text-sm text-muted-foreground">Sie zahlen exakt den vereinbarten Preis. Keine Nachforderungen.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 bg-foreground text-primary-foreground">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Jetzt Ihr persönliches <strong>Estrich Angebot</strong> anfordern
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Die Richtwerte geben Ihnen eine Orientierung. Für Ihr konkretes Projekt erstellen wir 
            ein individuelles Festpreis-Angebot – kostenlos und unverbindlich.
          </p>
          <Link href="/angebot">
            <Button size="lg" variant="secondary" data-testid="button-preise-footer-cta">
              Kostenloses Angebot anfordern
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
