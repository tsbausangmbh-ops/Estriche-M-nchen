import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, Phone, Clock, Calendar, FileText, Truck, Users, Ruler, Shield, ThumbsUp } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const processSteps = [
  {
    number: "01",
    title: "Kontaktaufnahme",
    duration: "60 Sekunden",
    description: "Sie füllen unser einfaches Kontaktformular aus oder rufen uns direkt an. Beschreiben Sie kurz Ihr Projekt – wir brauchen nur die wichtigsten Eckdaten.",
    details: [
      "Formular in unter 60 Sekunden ausfüllen",
      "Alternativ: Direkter Anruf unter +49 89 123 456 789",
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
  const scrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 lg:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Unser Ablauf</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              In 7 Schritten zum perfekten Estrich
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Kein Rätselraten, keine Überraschungen. Wir zeigen Ihnen genau, wie der Weg 
              zu Ihrem neuen Boden aussieht – transparent und nachvollziehbar.
            </p>
            <Button size="lg" onClick={scrollToContact} data-testid="button-ablauf-cta">
              Jetzt Projekt starten
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-6 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Unsere Garantien für Sie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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

      <section className="py-6 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bereit, den ersten Schritt zu machen?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
            Starten Sie jetzt Ihr Projekt. In nur 60 Sekunden erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-ablauf-footer-cta">
            Kostenloses Angebot anfordern
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
