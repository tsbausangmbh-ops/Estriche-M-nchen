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
  Building2,
  Phone,
  Star,
  ThumbsUp,
  Zap
} from "lucide-react";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

const milestones = [
  { year: "1994", title: "Gründung", description: "Start als kleiner Familienbetrieb in München mit einer klaren Vision: Handwerk, dem man vertrauen kann." },
  { year: "2005", title: "Meisterbetrieb", description: "Zertifizierung durch die Handwerkskammer München und Erweiterung der Firma mit zusätzlichen Fachkräften." },
  { year: "2015", title: "1.000 Projekte", description: "Ein stolzer Meilenstein – über 1.000 erfolgreich abgeschlossene Projekte in München und Umgebung." },
  { year: "2024", title: "30 Jahre", description: "Drei Jahrzehnte Qualität, Zuverlässigkeit und zufriedene Kunden. Und wir fangen gerade erst an." },
];

const customerBenefits = [
  {
    icon: Clock,
    title: "Kostbare Zeit zurückgewinnen",
    description: "Stellen Sie sich vor, wie es sich anfühlt, wenn Sie sich nicht mehr um Ihren Estrich sorgen müssen. Sie können Ihre wertvolle Zeit für die wirklich wichtigen Dinge nutzen – Ihre Familie, Ihr Geschäft, Ihre Träume. Während Sie entspannen, kümmern wir uns um alles.",
    proof: "Durchschnittlich 3 Wochen schneller bezugsfertig",
  },
  {
    icon: Shield,
    title: "Absolute finanzielle Sicherheit",
    description: "Kennen Sie das beklemmende Gefühl, wenn eine Rechnung höher ausfällt als erwartet? Bei uns erleben Sie das Gegenteil: Die beruhigende Gewissheit eines verbindlichen Festpreises. Was wir sagen, das gilt. Punkt. Keine versteckten Kosten, keine bösen Überraschungen.",
    proof: "100% Festpreis-Garantie bei jedem Projekt",
  },
  {
    icon: Target,
    title: "Ergebnisse, die Sie sehen und fühlen können",
    description: "Schließen Sie die Augen und stellen Sie sich vor: Ein perfekt ebener Boden, der sich unter Ihren Füßen solide anfühlt. Ein Boden, der jahrzehntelang hält. Ein Boden, auf den Sie stolz sind, wenn Gäste zu Besuch kommen. Das ist es, was wir Ihnen liefern.",
    proof: "282+ begeisterte Kunden in München",
  },
];

const trustReasons = [
  {
    title: "Wir kennen Ihren Frust – denn wir haben ihn selbst erlebt",
    description: "Bevor wir unser Unternehmen gründeten, waren wir selbst Bauherren. Wir kennen das frustrierende Gefühl, wenn Handwerker nicht erscheinen. Das Ärgernis, wenn Termine immer wieder verschoben werden. Die Enttäuschung, wenn die Rechnung plötzlich viel höher ist als das Angebot. Wir haben uns damals geschworen: Wenn wir es je anders machen können, dann werden wir es tun. Und genau das tun wir seit über 30 Jahren – jeden einzelnen Tag.",
  },
  {
    title: "Wir sprechen Klartext – auch wenn es unbequem ist",
    description: "Vielleicht haben Sie schon erlebt, wie manche Handwerker Ihnen erzählen, was Sie hören wollen. Wir machen das Gegenteil. Wenn etwas nicht funktioniert, sagen wir es Ihnen direkt. Wenn Ihr Zeitplan unrealistisch ist, erfahren Sie es von uns – bevor es zu spät ist. Diese Ehrlichkeit hat uns nicht immer Freunde gemacht. Aber sie hat uns etwas viel Wertvolleres eingebracht: Das Vertrauen von über 282 Münchner Familien und Unternehmen.",
  },
  {
    title: "Wir stehen zu unserer Arbeit – bedingungslos",
    description: "Was passiert, wenn etwas nicht stimmt? Bei manchen Handwerkern beginnt dann das große Versteckspiel. Bei uns ist es anders: Wenn Sie mit etwas nicht zufrieden sind, machen wir es richtig. Auf unsere Kosten. Ohne Diskussion. Das ist keine leere Marketingfloskel – das ist unser Versprechen, das wir jeden Tag einlösen. Deshalb haben uns über 282 zufriedene Kunden weiterempfohlen. Deshalb wachsen wir seit 30 Jahren nur durch Mundpropaganda.",
  },
];

const certifications = [
  "Meisterbetrieb der Handwerkskammer München und Oberbayern",
  "DIN EN ISO 9001 zertifiziertes Qualitätsmanagement",
  "Zertifizierter Estrichfachbetrieb nach DIN 18560",
  "Mitglied im Bundesverband Estrich und Belag e.V.",
];

const teamValues = [
  {
    icon: Heart,
    title: "Leidenschaft für Perfektion",
    description: "Jeder einzelne Mitarbeiter in unserem Team liebt, was er tut. Diese Leidenschaft sieht man in jedem Quadratmeter, den wir verlegen.",
  },
  {
    icon: Wrench,
    title: "Meisterliche Handwerkskunst",
    description: "Über 30 Jahre Erfahrung fließen in jedes einzelne Projekt. Dieses Wissen können Sie nicht kaufen – es muss erarbeitet werden.",
  },
  {
    icon: Users,
    title: "Echte Partnerschaft",
    description: "Wir arbeiten nicht nur für Sie – wir arbeiten mit Ihnen. Ihre Zufriedenheit ist nicht das Ende unserer Arbeit, sondern ihr Maßstab.",
  },
];

export default function UeberUns() {
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide">
              <Building2 className="w-3 h-3 mr-1" />
              Über uns
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 tracking-tight">
              Von Estrich-Stress zu Sorgenfreiheit in München
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-6">
              Seit über 30 Jahren verwandeln wir Baustellen-Chaos in perfekte Böden – 
              termingerecht, zum Festpreis, ohne Ausreden. Stellen Sie sich vor, wie es sich anfühlt, 
              wenn Ihr Projekt einfach läuft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-hero-cta">
                  Kostenloses Angebot anfordern
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
        </div>
      </section>

      <section className="py-8 bg-foreground">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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

      <section className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6 pb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Festpreis-Garantie</h3>
                <p className="text-sm text-muted-foreground">Was wir nennen, gilt. Immer.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6 pb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Termingarantie</h3>
                <p className="text-sm text-muted-foreground">Pünktlich wie versprochen.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6 pb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">30+ Jahre Erfahrung</h3>
                <p className="text-sm text-muted-foreground">Meisterbetrieb seit 1994.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6 pb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">5 Jahre Gewährleistung</h3>
                <p className="text-sm text-muted-foreground">Volle Absicherung nach BGB.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Geschichte</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Wie alles begann
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                1994 stand Mustafa Sakar in seinem eigenen Neubau – und der Estrichleger war zum dritten Mal nicht erschienen. 
                Der Fliesenleger musste unverrichteter Dinge wieder abziehen. Frustration, Zeit und Geld verloren.
              </p>

              <p>
                In diesem Moment fasste er einen Entschluss: <strong>„Wenn ich es besser machen kann als diese Leute, dann 
                schulde ich es jedem Bauherrn, der das gleiche erlebt wie ich."</strong> Diese Worte sind bis heute das 
                Fundament unseres Unternehmens.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Was Sie bei uns bekommen</h3>

              <p>
                <strong>Ruhe.</strong> Ihr Projekt liegt in erfahrenen Händen. Der Preis steht fest, der Termin steht fest, 
                die Qualität wird stimmen. Nachts schlafen Sie gut.
              </p>

              <p>
                <strong>Zeit zurück.</strong> Keine Telefonate, um Handwerkern hinterherzulaufen. Keine Diskussionen über 
                Nachforderungen. Diese Zeit gehört wieder Ihnen.
              </p>

              <p>
                <strong>Einen echten Partner.</strong> Wir verschwinden nicht nach der Fertigstellung. Fünf Jahre 
                Gewährleistung – bei uns gelebte Realität, kein Marketingversprechen.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Unser Team</h3>

              <p>
                Bei uns arbeiten Fachleute, die ihr Handwerk lieben. Jeder Mitarbeiter teilt unsere Werte: Ehrlichkeit ist 
                nicht verhandelbar. Ein Versprechen bleibt ein Versprechen. Wenn Sie unser Team auf Ihrer Baustelle erleben, 
                werden Sie den Unterschied spüren.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Unsere Philosophie</h3>

              <p>
                <strong>Wir versprechen nur, was wir halten können. Und dann liefern wir mehr.</strong> Wenn wir Montag 
                8 Uhr sagen, stehen wir 7:45 Uhr vor Ihrer Tür. Der genannte Preis ist der Endpreis. Bei Terminverzug 
                durch uns: 100 Euro Gutschrift.
              </p>

              <p>
                Nach 30 Jahren könnten wir uns zurücklehnen. Stattdessen investieren wir weiter in Weiterbildung und 
                modernste Technik. Die Werte von 1994 bleiben unser Kompass: Ehrlichkeit, Zuverlässigkeit, Qualität, Respekt.
              </p>

              <p>
                <strong>Am Ende geht es nicht um Estrich. Es geht um Vertrauen.</strong> Und genau das ist unser 
              Versprechen an Sie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Mehrwert</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Was Sie durch uns gewinnen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sie werden spüren, wie sich Ihr Bauprojekt verändert – von Unsicherheit zu Vertrauen, 
              von Stress zu Entspannung, von Sorgen zu Vorfreude.
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

      <section className="py-12">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Meilensteine</p>
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

      <section className="py-12 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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
                      <p className="text-sm text-muted-foreground">Der genannte Preis gilt – ohne Wenn und Aber. Keine versteckten Kosten, keine Nachforderungen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Termingarantie</div>
                      <p className="text-sm text-muted-foreground">Wir halten unsere Zusagen – pünktlich und zuverlässig. Darauf können Sie Ihr nächstes Gewerk planen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">5 Jahre Gewährleistung</div>
                      <p className="text-sm text-muted-foreground">Volle Gewährleistung nach BGB auf alle unsere Arbeiten. Ihre Sicherheit ist unser Versprechen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Sauberkeitsgarantie</div>
                      <p className="text-sm text-muted-foreground">Wir räumen auf, als wären wir nie da gewesen. Ihr Zuhause verdient Respekt.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Werte</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Das treibt uns an – jeden einzelnen Tag
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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Bereit für einen Boden, der hält was wir versprechen?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
            Sprechen Sie mit uns über Ihr Projekt. Wir beraten Sie kostenlos und 
            erstellen Ihnen ein verbindliches Festpreis-Angebot – ohne Verpflichtung.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/angebot">
              <Button size="lg" variant="secondary" data-testid="button-footer-cta">
                Jetzt Beratung anfordern
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

      <Footer />
    </div>
  );
}
