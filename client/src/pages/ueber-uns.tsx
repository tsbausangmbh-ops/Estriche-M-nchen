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

      <section className="py-6 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Geschichte</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Wie alles begann – Eine Geschichte von Frustration und Entschlossenheit
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Es war 1994, als Mustafa Sakar zum ersten Mal das frustrierende Gefühl erlebte, das so viele Bauherren kennen. Er stand in seinem 
                eigenen Neubau, und der Estrichleger war wieder einmal nicht erschienen. Zum dritten Mal in Folge. Die Verzögerung kostete 
                ihn nicht nur Zeit und Nerven – sie kostete ihn bares Geld, weil der Fliesenleger, der schon bereitstand, unverrichteter 
                Dinge wieder abziehen musste.
              </p>

              <p>
                In diesem Moment fasste er einen Entschluss, der sein Leben verändern sollte: <strong>„Wenn ich es nicht besser machen kann 
                als diese Leute, dann werde ich es überhaupt nicht machen. Aber wenn ich es besser machen kann – dann schulde ich es jedem 
                Bauherrn, der das gleiche erlebt wie ich gerade."</strong>
              </p>

              <p>
                Diese Worte sind auch heute noch das Fundament unseres Unternehmens. Sie erklären, warum wir bei jedem einzelnen Projekt 
                so handeln, als wäre es unser eigenes Zuhause. Sie erklären, warum wir Termine heilig halten. Und sie erklären, warum wir 
                niemals einen Preis nennen, den wir später erhöhen.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Der steinige Weg zum Erfolg</h3>

              <p>
                Die ersten Jahre waren nicht einfach. Mustafa Sakar arbeitete oft 14-Stunden-Tage, manchmal sogar länger. Er lernte jedes 
                Detail seines Handwerks, machte seine Meisterprüfung und bildete sich ständig weiter. Schon früh erkannte er: <strong>Qualität 
                allein reicht nicht aus. Die Kunden brauchen auch Zuverlässigkeit, Ehrlichkeit und vor allem – Vertrauen.</strong>
              </p>

              <p>
                Genau dieses Vertrauen aufzubauen, wurde zur Mission. Während andere Betriebe mit niedrigen Preisen lockten und später 
                Nachforderungen stellten, ging die Estrich München GmbH einen anderen Weg. Einen Weg, der anfangs schwieriger war, aber 
                langfristig zum Erfolg führte: absolute Ehrlichkeit, verbindliche Festpreise und das Einhalten von Zusagen – ohne Ausnahme.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Was Sie wirklich bekommen, wenn Sie uns beauftragen</h3>

              <p>
                Vielleicht fragen Sie sich jetzt: „Was unterscheidet die Estrich München GmbH wirklich von anderen Anbietern?" Die Antwort 
                ist einfacher, als Sie vielleicht denken – und gleichzeitig tiefgreifender, als Sie sich vorstellen können.
              </p>

              <p>
                <strong>Sie bekommen Ruhe.</strong> Die Ruhe zu wissen, dass Ihr Projekt in erfahrenen Händen liegt. Die Ruhe, sich nicht 
                täglich fragen zu müssen, ob die Handwerker wohl pünktlich erscheinen. Die Ruhe, nachts gut zu schlafen, weil Sie wissen: 
                Der Preis steht fest, der Termin steht fest, und die Qualität wird stimmen.
              </p>

              <p>
                <strong>Sie bekommen Zeit zurück.</strong> Zeit, die Sie sonst damit verbringen würden, hinter Handwerkern herzutelefonieren. 
                Zeit, die Sie sonst für stressige Diskussionen über Nachforderungen opfern würden. Diese Zeit gehört jetzt wieder Ihnen – 
                für Ihre Familie, Ihr Geschäft, Ihre Leidenschaften.
              </p>

              <p>
                <strong>Sie bekommen einen Partner.</strong> Keinen bloßen Dienstleister, der nach getaner Arbeit verschwindet. Sondern einen 
                Partner, der auch nach der Fertigstellung für Sie da ist. Der auf Ihre Fragen antwortet. Der Probleme löst, falls welche 
                auftreten sollten. Der zu seinem Wort steht – fünf Jahre Gewährleistung sind bei uns kein Marketingversprechen, sondern 
                gelebte Realität.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Die Menschen hinter dem Unternehmen</h3>

              <p>
                Ein Unternehmen ist immer nur so gut wie die Menschen, die es ausmachen. Bei der Estrich München GmbH arbeiten keine 
                austauschbaren Arbeitskräfte – bei uns arbeiten Fachleute, die ihr Handwerk lieben und leben.
              </p>

              <p>
                Jeder einzelne Mitarbeiter hat eine umfassende Ausbildung durchlaufen und bildet sich kontinuierlich weiter. Aber was noch 
                wichtiger ist: Jeder teilt unsere Werte. Die Überzeugung, dass Ehrlichkeit nicht verhandelbar ist. Der Anspruch, dass ein 
                Versprechen ein Versprechen bleibt. Die Leidenschaft für Perfektion, die sich in jedem Quadratmeter zeigt, den wir verlegen.
              </p>

              <p>
                Wenn Sie unsere Mitarbeiter auf Ihrer Baustelle erleben, werden Sie den Unterschied spüren. Sie werden sehen, wie konzentriert 
                und sorgfältig gearbeitet wird. Sie werden hören, wie respektvoll miteinander und mit Ihnen kommuniziert wird. Und Sie werden 
                fühlen, dass hier Menschen am Werk sind, die stolz auf ihre Arbeit sind.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Warum Münchner Bauherren immer wieder zu uns kommen</h3>

              <p>
                In über 30 Jahren haben wir eines gelernt: <strong>Der beste Maßstab für Qualität sind nicht Zertifikate oder Auszeichnungen – 
                es sind zufriedene Kunden, die wiederkommen.</strong> Und genau das passiert bei uns. Immer wieder.
              </p>

              <p>
                Familien, die vor Jahren ihren ersten Estrich bei uns verlegen ließen, kommen heute wieder – für die Renovierung, für den 
                Anbau, für die Garage. Bauträger, die einmal mit uns gearbeitet haben, rufen uns für jedes weitere Projekt an. Architekten, 
                die unsere Arbeit kennen, empfehlen uns ihren Kunden mit vollem Vertrauen.
              </p>

              <p>
                Das geschieht nicht durch Zufall. Es geschieht, weil wir jeden einzelnen Kunden so behandeln, wie wir selbst behandelt 
                werden möchten. Mit Respekt, mit Ehrlichkeit, mit dem aufrichtigen Wunsch, das bestmögliche Ergebnis zu liefern. Diese 
                Haltung lässt sich nicht vorspielen – sie muss echt sein. Und bei uns ist sie das.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Unsere Philosophie: Weniger versprechen, mehr liefern</h3>

              <p>
                In einer Branche, die leider oft von übertriebenen Versprechen und enttäuschten Erwartungen geprägt ist, haben wir uns für 
                einen anderen Ansatz entschieden. <strong>Wir versprechen nur das, was wir sicher halten können. Und dann liefern wir mehr.</strong>
              </p>

              <p>
                Wenn wir sagen, dass wir am Montag um 8 Uhr beginnen, dann stehen wir um 7:45 Uhr vor Ihrer Tür. Wenn wir einen Preis nennen, 
                dann ist das der Preis – nicht der „ungefähre" Preis, nicht der „voraussichtliche" Preis, sondern der endgültige, verbindliche 
                Preis. Wenn wir ein Fertigstellungsdatum zusagen, dann können Sie den Fliesenleger für den Tag danach bestellen.
              </p>

              <p>
                Diese Verlässlichkeit ist keine Selbstverständlichkeit – wir wissen das. Aber für uns ist sie es. Weil wir glauben, dass 
                Handwerk nicht nur aus technischen Fähigkeiten besteht, sondern vor allem aus Charakter und Werten.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Was die Zukunft bringt</h3>

              <p>
                Nach über 30 erfolgreichen Jahren könnten wir uns zufrieden zurücklehnen. Aber genau das tun wir nicht. Denn wir wissen: 
                Stillstand bedeutet Rückschritt. Deshalb investieren wir kontinuierlich in Weiterbildung, in modernste Technik und in 
                innovative Verfahren.
              </p>

              <p>
                Gleichzeitig bleiben wir unseren Wurzeln treu. Die Werte, die Mustafa Sakar 1994 in dieses Unternehmen eingebracht hat, 
                sind auch heute noch unser Kompass. Ehrlichkeit, Zuverlässigkeit, Qualität, Respekt. Diese Werte werden auch in 30 Jahren 
                noch das Fundament unserer Arbeit sein.
              </p>

              <p>
                <strong>Denn am Ende des Tages geht es nicht um Estrich. Es geht um Vertrauen. Es geht um Sicherheit. Es geht darum, dass 
                Sie sich auf jemanden verlassen können.</strong> Und genau das ist unser Versprechen an Sie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
