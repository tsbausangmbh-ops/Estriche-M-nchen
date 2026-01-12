import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Phone, Clock, Calendar, FileText, Truck, Users, Ruler, Shield, ThumbsUp } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import heroImage from "@assets/generated_images/workers_checking_level_blue.png";

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
        <title>Ablauf Estricharbeiten München | 7 Schritte zum perfekten Boden</title>
        <meta name="description" content="So läuft Ihr Estrich-Projekt ab: Von der Kontaktaufnahme über die Vor-Ort-Besichtigung bis zur Abnahme. Transparenter Ablauf mit Festpreis-Garantie." />
        <link rel="canonical" href="https://estriche-muenchen.de/ablauf" />
      </Helmet>
      <Header />

      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="relative w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">Unser Ablauf</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              In 7 Schritten zum perfekten Estrich
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Kein Rätselraten, keine Überraschungen. Wir zeigen Ihnen genau, wie der Weg 
              zu Ihrem neuen Boden aussieht – transparent und nachvollziehbar.
            </p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-ablauf-cta">
                Jetzt Projekt starten
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Weg zum perfekten Boden</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Warum ein klarer Ablauf Ihnen Stress erspart
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

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Transparenz als Grundlage</h3>

              <p>
                In der Baubranche herrscht oft Intransparenz. Termine werden verschoben, Kosten steigen. 
                Wir haben unseren Ablauf so gestaltet, dass Sie zu jedem Zeitpunkt genau wissen, wo Ihr 
                Projekt steht. <strong>Keine Überraschungen. Keine Fragezeichen. Nur Klarheit.</strong>
              </p>

              <p>
                Jeder unserer sieben Schritte ist durchdacht und erprobt. Über 30 Jahre Erfahrung und 
                mehr als 1.200 Projekte haben uns gezeigt, was funktioniert. Von der kostenlosen 
                Besichtigung bis zur gemeinsamen Abnahme – alles läuft reibungslos.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Ihr Festpreis-Angebot</h3>

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

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Qualität und Gewährleistung</h3>

              <p>
                Mit kalibrierten Messgeräten prüfen wir die Restfeuchte. Erst wenn der Estrich wirklich 
                belegreif ist – nachweislich dokumentiert – geben wir ihn frei. Am Ende erhalten Sie alle 
                Unterlagen und fünf Jahre Gewährleistung.
              </p>

              <p>
                <strong>Über 282 zufriedene Kunden in München haben diesen Ablauf erlebt.</strong> 
                Sind Sie bereit, den Unterschied selbst zu erleben?
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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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
                      <h2 className="text-xl font-bold tracking-tight">{step.title}</h2>
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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Unsere Garantien für Sie</h2>
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
                      <h3 className="font-bold mb-1">{guarantee.title}</h3>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-foreground text-primary-foreground">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bereit, den ersten Schritt zu machen?
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Starten Sie jetzt Ihr Projekt. In nur 60 Sekunden erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Link href="/angebot">
            <Button size="lg" variant="secondary" data-testid="button-ablauf-footer-cta">
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
