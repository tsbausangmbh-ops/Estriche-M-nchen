import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { generateBreadcrumbSchema, generateHowToSchema, generateWebPageSchema } from "@/lib/seo-schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Phone, Clock, Calendar, FileText, Truck, Users, Ruler, Shield, ThumbsUp } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import heroImage from "@assets/generated_images/workers_checking_level_blue.webp";

const processSteps = [
  {
    number: "01",
    title: "Kontaktaufnahme",
    duration: "60 Sekunden",
    description: "Sie füllen unser einfaches Kontaktformular aus oder rufen uns direkt an. Beschreiben Sie kurz Ihr Projekt – wir brauchen nur die wichtigsten Eckdaten.",
    details: [
      "Formular in unter 60 Sekunden ausfüllen",
      "Alternativ: Direkter Anruf unter 089 444438872",
      "Keine Warteschleifen, persönliche Ansprechpartner",
      "Rückruf garantiert innerhalb von 24 Stunden"
    ],
    icon: Phone
  },
  {
    number: "02",
    title: "Kostenlose Vor-Ort-Besichtigung",
    duration: "1-2 Stunden",
    description: "Unser Experte kommt zu Ihnen und analysiert die Situation. Wir prüfen den Untergrund, messen Höhen und besprechen alle Optionen mit Ihnen.",
    details: [
      "Terminvereinbarung nach Ihrem Zeitplan",
      "Gründliche Prüfung des Untergrunds",
      "Präzise Höhen- und Flächenmessung",
      "Beratung zu Materialien und Ausführung",
      "Klärung aller Ihrer Fragen vor Ort"
    ],
    icon: Ruler
  },
  {
    number: "03",
    title: "Verbindliches Festpreis-Angebot",
    duration: "Innerhalb 48h",
    description: "Sie erhalten ein detailliertes, verbindliches Angebot mit allen Leistungen und Kosten. Keine versteckten Gebühren, keine Nachforderungen.",
    details: [
      "Detaillierte Auflistung aller Leistungen",
      "Transparente Materialkosten",
      "Verbindlicher Festpreis – was wir nennen, gilt",
      "Gültig für 30 Tage",
      "Auf Wunsch alternative Ausführungsvarianten"
    ],
    icon: FileText
  },
  {
    number: "04",
    title: "Terminplanung & Koordination",
    duration: "Nach Auftragserteilung",
    description: "Wir stimmen den optimalen Termin mit Ihrem Bauzeitplan ab und koordinieren uns mit anderen Gewerken auf Ihrer Baustelle.",
    details: [
      "Terminierung nach Ihrem Wunsch",
      "Abstimmung mit Architekt und Bauleitung",
      "Koordination mit Folgegewerken (Bodenleger, Maler)",
      "Schriftliche Terminbestätigung",
      "Erinnerung 2 Tage vor Arbeitsbeginn"
    ],
    icon: Calendar
  },
  {
    number: "05",
    title: "Ausführung der Arbeiten",
    duration: "Je nach Projektgröße",
    description: "Unsere geschulten Facharbeiter führen die Arbeiten termingerecht und sauber aus. Wir arbeiten effizient und hinterlassen eine ordentliche Baustelle.",
    details: [
      "Pünktlicher Arbeitsbeginn zum vereinbarten Termin",
      "Sauberes Arbeiten mit Staubschutz",
      "Eigene Mischfahrzeuge für optimale Materialqualität",
      "Tägliche Baustellenreinigung",
      "Ansprechpartner vor Ort für Ihre Fragen"
    ],
    icon: Truck
  },
  {
    number: "06",
    title: "Qualitätskontrolle & Trocknung",
    duration: "Je nach Estrichart",
    description: "Wir überwachen die Trocknung mit kalibrierten Messgeräten und dokumentieren alle Werte. Erst wenn alles perfekt ist, geben wir frei.",
    details: [
      "Regelmäßige Feuchtemessungen mit CM-Gerät",
      "Dokumentation aller Messwerte",
      "Schriftliche Belegreifmeldung",
      "Prüfprotokoll für Ihre Unterlagen",
      "Koordination mit dem Bodenleger"
    ],
    icon: Shield
  },
  {
    number: "07",
    title: "Abnahme & Übergabe",
    duration: "30 Minuten",
    description: "Gemeinsam mit Ihnen nehmen wir die fertige Arbeit ab. Sie erhalten alle Dokumentationen und unsere Gewährleistung beginnt.",
    details: [
      "Gemeinsame Endabnahme vor Ort",
      "Übergabe aller Dokumentationen und Messprotokolle",
      "5 Jahre Gewährleistung auf alle Arbeiten",
      "Pflegehinweise für Ihren neuen Estrich",
      "Direkter Kontakt für eventuelle Rückfragen"
    ],
    icon: ThumbsUp
  }
];

const guarantees = [
  {
    title: "Termingarantie",
    description: "Wir halten unsere Termine. Bei Verzögerung durch uns erhalten Sie 100€ Gutschrift.",
    icon: Clock
  },
  {
    title: "Festpreis-Garantie",
    description: "Was im Angebot steht, gilt. Keine versteckten Kosten, keine Nachforderungen.",
    icon: FileText
  },
  {
    title: "Qualitäts-Garantie",
    description: "5 Jahre Gewährleistung auf alle Arbeiten. Bei Mängeln kostenlose Nachbesserung.",
    icon: Shield
  },
  {
    title: "Sauberkeits-Garantie",
    description: "Wir hinterlassen Ihre Baustelle so sauber, wie wir sie vorgefunden haben.",
    icon: ThumbsUp
  },
  {
    title: "Erreichbarkeits-Garantie",
    description: "Persönlicher Ansprechpartner während des gesamten Projekts. Keine Warteschleifen.",
    icon: Users
  },
  {
    title: "Zufriedenheits-Garantie",
    description: "Sollten Sie nicht zufrieden sein, finden wir gemeinsam eine Lösung.",
    icon: CheckCircle2
  }
];

export default function Ablauf() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estrich verlegen Ablauf München | Estrichverlegung in 7 Schritten | Fachbetrieb</title>
        <meta name="description" content="Estrich verlegen Ablauf München: Estrichverlegung in 7 Schritten von Beratung bis Abnahme. Kostenlose Planung, Festpreis & Termingarantie vom Estrichleger Fachbetrieb" />
        <meta name="keywords" content="Estrich verlegen Ablauf München, Estrichverlegung Schritte, Estrich Bauablauf, Estrich Planung, Estrich Termingarantie, Estricharbeiten Ablauf Fachbetrieb" />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />
        <link rel="canonical" href="https://estriche-muenchen.de/ablauf" />
        <meta property="og:title" content="Ablauf Estricharbeiten München | 7 Schritte" />
        <meta property="og:description" content="Transparenter Projektablauf: Von Anfrage bis Abnahme in 7 Schritten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/ablauf" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "Ablauf", url: "https://estriche-muenchen.de/ablauf" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateHowToSchema([
            { name: "Kontaktaufnahme", text: "Rufen Sie uns an oder schreiben Sie uns online." },
            { name: "Vor-Ort-Besichtigung", text: "Wir kommen kostenlos zu Ihnen und nehmen alles auf." },
            { name: "Festpreis-Angebot", text: "Sie erhalten ein verbindliches Angebot innerhalb von 48h." },
            { name: "Terminvereinbarung", text: "Wir koordinieren den optimalen Termin für Ihr Projekt." },
            { name: "Ausführung", text: "Professionelle Verlegung durch unser erfahrenes Team." },
            { name: "Trocknungsphase", text: "Kontrollierte Trocknung mit Dokumentation." },
            { name: "Abnahme", text: "Gemeinsame Endkontrolle und Übergabe der Unterlagen." }
          ]))}
        </script>
      </Helmet>
      <Header />

      <section className="relative py-6 lg:py-8 overflow-hidden">
        <img
          src={heroImage}
          alt="Estrich verlegen Ablauf München – Estrichverlegung in 7 Schritten"
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="page-container relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse mb-4">
              ACHTUNG: Nur noch {getWeeklyScarcityNumber()} freie Termine diese Woche
            </Badge>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Unser Ablauf
              </Badge>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Estrich verlegen Ablauf München</strong> – Estrichverlegung in 7 Schritten zum perfekten Boden
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Kein Rätselraten, keine Überraschungen. Wir zeigen Ihnen genau, wie der Weg 
              zu Ihrem neuen <strong>Estrich</strong> aussieht – transparent und nachvollziehbar.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Transparenter Prozess", "Festpreis-Garantie", "Termingerechte Ausführung", "Persönlicher Ansprechpartner"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-ablauf-cta">
                  Jetzt Projekt starten
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

      <section className="py-6 bg-accent">
        <div className="page-container">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Weg zum perfekten Boden</p>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
              <strong>Estrich Ablauf</strong> – Warum Klarheit Ihnen Stress erspart
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Kennen Sie das Gefühl, wenn Sie einen Handwerker beauftragen und nicht wissen, was als 
                Nächstes passiert? Wann kommt er? Was macht er genau? Was kostet das am Ende wirklich? 
                Diese Ungewissheit raubt vielen Bauherren den Schlaf. <strong>Aber das muss nicht sein.</strong>
              </p>

              <p>
                Stellen Sie sich vor, wie es sich anfühlt, wenn Sie bei jedem Schritt genau wissen, was 
                passiert. Wenn Sie sich entspannt zurücklehnen können, weil alles nach Plan läuft. 
                Genau dieses Gefühl möchten wir Ihnen geben.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4"><strong>Estrich-Projekt</strong> – Transparenz als Grundlage</h3>

              <p>
                In der Baubranche herrscht oft Intransparenz. Termine werden verschoben, Kosten steigen. 
                Wir haben unseren Ablauf so gestaltet, dass Sie zu jedem Zeitpunkt genau wissen, wo Ihr 
                Projekt steht. <strong>Keine Überraschungen. Keine Fragezeichen. Nur Klarheit.</strong>
              </p>

              <p>
                Jeder unserer sieben Schritte ist durchdacht und erprobt. Über 30 Jahre Erfahrung und 
                mehr als 1.200 Projekte haben uns gezeigt, was funktioniert. Von der <Link href="/kontakt" className="text-primary hover:underline"><strong>kostenlosen Beratung</strong></Link> bis 
                zur gemeinsamen Abnahme – alles läuft reibungslos. Informieren Sie sich über unsere <Link href="/preise" className="text-primary hover:underline"><strong>Estrich Preise</strong></Link>.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4"><strong>Estrich Festpreis</strong> – Ihr verbindliches Angebot</h3>

              <p>
                Innerhalb von 48 Stunden nach der Besichtigung erhalten Sie unser verbindliches Angebot. 
                <strong>Dieser Preis steht. Er wird nicht nachverhandelt, nicht erhöht.</strong> Das 
                Risiko tragen wir – nicht Sie.
              </p>

              <p>
                Wir koordinieren uns mit allen anderen Gewerken und stellen sicher, dass unser Zeitplan 
                mit Ihrem Gesamtplan harmoniert. So vermeiden wir Verzögerungen und die berühmten 
                „Wir warten noch auf den Estrichleger"-Situationen.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4"><strong>Estrich Qualität</strong> und Gewährleistung</h3>

              <p>
                Mit kalibrierten Messgeräten prüfen wir die Restfeuchte. Erst wenn der Estrich wirklich 
                belegreif ist – nachweislich dokumentiert – geben wir ihn frei. Am Ende erhalten Sie alle 
                Unterlagen und fünf Jahre Gewährleistung.
              </p>

              <p>
                <strong>Über 282 zufriedene Kunden in München haben diesen Ablauf erlebt.</strong> 
                Sind Sie bereit, den Unterschied selbst zu erleben? Erfahren Sie mehr <Link href="/ueber-uns" className="text-primary hover:underline"><strong>über unser Team</strong></Link>.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-nlp-ablauf-cta">
                Jetzt Projekt starten
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

      <section className="py-8">
        <div className="page-container">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`process-step-${index}`}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-xl">{step.number}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 min-h-8 bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="text-xl font-bold tracking-tight">{step.title}</p>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <step.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Was in diesem Schritt passiert:</span>
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="page-container">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4"><strong>Estrich Garantie</strong> – Unsere Sicherheit für Sie</h2>
            <p className="text-muted-foreground">
              Wir stehen zu unserer Arbeit – mit schriftlichen Garantien, die Sie absichern.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <Card key={index} data-testid={`guarantee-${index}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <guarantee.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">{guarantee.title}</p>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-foreground text-primary-foreground">
        <div className="page-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bereit, den ersten Schritt zu machen?
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Starten Sie jetzt Ihr Projekt. In nur 60 Sekunden erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Link href="/angebot">
            <Button size="lg" variant="secondary" data-testid="button-ablauf-footer-cta">
              <span className="sm:hidden">Angebot anfordern</span>
              <span className="hidden sm:inline">Kostenloses Angebot anfordern</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
