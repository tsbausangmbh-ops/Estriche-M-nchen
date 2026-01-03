import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  Target,
  Heart,
  Wrench,
  Building2
} from "lucide-react";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

const milestones = [
  { year: "1994", title: "Gründung", description: "Start als kleiner Familienbetrieb in München" },
  { year: "2005", title: "Meisterbetrieb", description: "Zertifizierung und Erweiterung des Teams" },
  { year: "2015", title: "1.000 Projekte", description: "Meilenstein erreicht – München vertraut uns" },
  { year: "2024", title: "30 Jahre", description: "Drei Jahrzehnte Qualität und Zuverlässigkeit" },
];

const customerBenefits = [
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Sie sparen wertvolle Zeit, die Sie für Wichtigeres nutzen können.",
    proof: "Durchschnittlich 3 Wochen schneller bezugsfertig",
  },
  {
    icon: Shield,
    title: "Absolute Sicherheit",
    description: "Sie haben Gewissheit durch verbindliche Festpreise – ohne böse Überraschungen.",
    proof: "100% Festpreis-Garantie bei jedem Projekt",
  },
  {
    icon: Target,
    title: "Messbare Ergebnisse",
    description: "Sie erhalten einen Boden, der jahrzehntelang hält und Ihre Investition schützt.",
    proof: "282+ zufriedene Kunden in München",
  },
];

const trustReasons = [
  {
    title: "Wir kennen den Frust",
    description: "Handwerker, die nicht pünktlich sind. Angebote, die plötzlich teurer werden. Baustellen, die ewig dauern. Wir verstehen das – und haben uns geschworen, es anders zu machen.",
  },
  {
    title: "Wir sprechen Klartext",
    description: "Bei uns bekommen Sie einen Preis genannt – und der gilt. Keine versteckten Kosten, keine Nachforderungen. Was wir sagen, das halten wir.",
  },
  {
    title: "Wir stehen zu unserer Arbeit",
    description: "Falls etwas nicht stimmt, machen wir es richtig – auf unsere Kosten. Deshalb haben über 282 Münchner Kunden uns weiterempfohlen.",
  },
];

const certifications = [
  "Meisterbetrieb der Handwerkskammer München",
  "DIN EN ISO 9001 Qualitätsmanagement",
  "Zertifizierter Estrichfachbetrieb",
  "Mitglied Bundesverband Estrich und Belag",
];

const teamValues = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Wir lieben, was wir tun – und das sieht man an unserer Arbeit.",
  },
  {
    icon: Wrench,
    title: "Handwerkskunst",
    description: "30+ Jahre Erfahrung fließen in jedes einzelne Projekt.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description: "Wir arbeiten mit Ihnen, nicht nur für Sie.",
  },
];

export default function UeberUns() {
  const scrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              <Building2 className="w-3 h-3 mr-1" />
              Über uns
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Von Estrich-Stress zu Sorgenfreiheit in München
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6">
              Seit über 30 Jahren verwandeln wir Baustellen-Chaos in perfekte Böden – 
              termingerecht, zum Festpreis, ohne Ausreden. Stellen Sie sich vor, wie es sich anfühlt, 
              wenn Ihr Projekt einfach läuft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} data-testid="button-hero-cta">
                Kostenloses Angebot anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Badge className="bg-white/10 text-white border-white/20 text-sm py-2 px-4">
                <Award className="w-4 h-4 mr-2" />
                30+ Jahre Meisterbetrieb
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Jahre Erfahrung</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1.200+</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Projekte abgeschlossen</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Festpreis-Garantie</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">282+</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Mehrwert</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Was Sie durch uns gewinnen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sie werden spüren, wie sich Ihr Bauprojekt verändert – von Unsicherheit zu Vertrauen, 
              von Stress zu Entspannung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center" data-testid={`card-benefit-${index}`}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {benefit.proof}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Geschichte</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              30 Jahre Handwerkskunst aus München
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Was als kleiner Familienbetrieb begann, ist heute einer der vertrauenswürdigsten 
              Estrich-Fachbetriebe in München und Umgebung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} data-testid={`card-milestone-${index}`}>
                <CardContent className="pt-6 pb-5">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="font-bold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Warum wir?</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Warum Münchner Bauherren uns vertrauen
              </h2>
              <div className="space-y-6">
                {trustReasons.map((reason, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6">Unsere Garantien für Sie</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Festpreis-Garantie</div>
                      <p className="text-sm text-muted-foreground">Der genannte Preis gilt – ohne Wenn und Aber.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Termingarantie</div>
                      <p className="text-sm text-muted-foreground">Wir halten unsere Zusagen – pünktlich und zuverlässig.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Qualitätsgarantie</div>
                      <p className="text-sm text-muted-foreground">Volle Gewährleistung nach BGB auf alle unsere Arbeiten.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Sauberkeitsgarantie</div>
                      <p className="text-sm text-muted-foreground">Wir räumen auf, als wären wir nie da gewesen.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Werte</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Das treibt uns an
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {teamValues.map((value, index) => (
              <Card key={index} data-testid={`card-value-${index}`}>
                <CardContent className="pt-6 pb-5 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-center">Zertifizierungen & Mitgliedschaften</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Bereit für einen Boden, der hält was wir versprechen?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
            Sprechen Sie mit uns über Ihr Projekt. Wir beraten Sie kostenlos und 
            erstellen Ihnen ein verbindliches Festpreis-Angebot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-footer-cta">
              Jetzt Beratung anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Kontaktseite besuchen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
