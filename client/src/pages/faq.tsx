import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, HelpCircle, Shield, Zap, Award, CheckCircle2, Phone, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

const faqCategories = [
  {
    title: "Allgemeine Fragen",
    questions: [
      {
        question: "Was genau macht ein Estrichleger?",
        answer: "Ein Estrichleger ist ein spezialisierter Handwerker, der Estrich – die tragende Schicht zwischen Rohboden und Bodenbelag – fachgerecht einbaut. Wir bereiten den Untergrund vor, verlegen Dämmung und Heizungsrohre, bringen den Estrich ein und sorgen für eine perfekt ebene Oberfläche. So entsteht die optimale Grundlage für jeden Bodenbelag."
      },
      {
        question: "Arbeiten Sie auch am Wochenende oder abends?",
        answer: "Ja, bei Gewerbeprojekten oder dringenden Terminen arbeiten wir auch am Wochenende oder abends. Sprechen Sie uns einfach an – wir finden eine Lösung, die Ihren Betrieb oder Alltag minimal beeinträchtigt."
      },
      {
        question: "In welchen Gebieten sind Sie tätig?",
        answer: "Wir sind in ganz München und im Umkreis von etwa 50 km tätig. Das umfasst alle Münchner Stadtbezirke sowie die Landkreise München, Starnberg, Dachau, Freising, Erding und Fürstenfeldbruck. Bei größeren Projekten kommen wir auch gerne weiter."
      },
      {
        question: "Wie schnell können Sie mit den Arbeiten beginnen?",
        answer: "In der Regel können wir innerhalb von 1-3 Wochen starten. Bei dringenden Fällen – zum Beispiel Wasserschäden – sind wir oft schon am nächsten Tag da. Kontaktieren Sie uns, und wir nennen Ihnen den nächstmöglichen Termin."
      },
      {
        question: "Bieten Sie auch Notfall-Service an?",
        answer: "Ja, bei Wasserschäden oder anderen Notfällen bieten wir einen 24h-Service an. Rufen Sie uns an, und wir sind schnellstmöglich vor Ort, um den Schaden zu begutachten und erste Maßnahmen einzuleiten."
      }
    ]
  },
  {
    title: "Kosten & Preise",
    questions: [
      {
        question: "Was kostet ein neuer Estrich pro Quadratmeter?",
        answer: "Die Kosten variieren je nach Estrichart und Aufbau: Zementestrich kostet etwa 25-35 €/m², Fließestrich 28-40 €/m², Industrieböden 45-80 €/m². Dazu kommen eventuell Kosten für Dämmung, Untergrundvorbereitung und Sonderleistungen. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreis-Angebot."
      },
      {
        question: "Gibt es versteckte Kosten, die später dazukommen?",
        answer: "Nein, bei uns nicht. Unser Festpreis-Angebot enthält alle Leistungen, Materialien und Nebenkosten. Was wir anbieten, gilt – ohne Nachforderungen. Sollten während der Arbeiten unvorhergesehene Probleme auftreten (z.B. versteckte Schäden im Untergrund), besprechen wir das vorher mit Ihnen."
      },
      {
        question: "Muss ich eine Anzahlung leisten?",
        answer: "Bei Projekten bis 5.000 € arbeiten wir ohne Anzahlung. Bei größeren Projekten vereinbaren wir individuelle Zahlungsbedingungen – typischerweise 30% bei Auftragserteilung, Rest nach Abnahme. Die genauen Konditionen stehen im Angebot."
      },
      {
        question: "Kann ich die Kosten von der Steuer absetzen?",
        answer: "Ja, bei vermieteten Objekten sind Estricharbeiten als Werbungskosten oder Erhaltungsaufwand absetzbar. Bei selbstgenutztem Wohnraum können Sie die Handwerkerkosten (Arbeitsleistung) zu 20% von der Steuer absetzen, maximal 1.200 € pro Jahr. Wir stellen Ihnen eine entsprechende Rechnung aus."
      },
      {
        question: "Gibt es Fördermittel für Estricharbeiten?",
        answer: "Bei energetischer Sanierung mit Dämmung können Sie KfW- oder BAFA-Förderung beantragen. Die Zuschüsse betragen bis zu 20% der förderfähigen Kosten. Wir beraten Sie zu den Möglichkeiten und erstellen die nötigen Nachweise für Ihren Antrag."
      }
    ]
  },
  {
    title: "Estricharten & Materialien",
    questions: [
      {
        question: "Welcher Estrich ist der richtige für mein Projekt?",
        answer: "Das hängt von Nutzung, Untergrund und Zeitplan ab: Zementestrich ist der Klassiker für Wohnbau und Keller. Fließestrich eignet sich besonders bei Fußbodenheizung. Schnellestrich ist ideal bei Zeitdruck. Industrieestrich für gewerbliche Nutzung mit hoher Belastung. Wir beraten Sie kostenlos, welche Variante für Ihr Projekt optimal ist."
      },
      {
        question: "Was ist der Unterschied zwischen Zementestrich und Anhydritestrich?",
        answer: "Zementestrich (CT) ist wasserfest und für alle Bereiche geeignet, trocknet aber langsamer (4-6 Wochen). Anhydritestrich (CA/Fließestrich) ist selbstnivellierend und ideal für Fußbodenheizung, aber nicht für Feuchträume geeignet. In Bädern und Kellern verwenden wir immer Zementestrich."
      },
      {
        question: "Kann ich über dem Estrich jeden Bodenbelag verlegen?",
        answer: "Ja, auf einem fachgerecht verlegten und getrockneten Estrich können Sie jeden Bodenbelag verlegen: Parkett, Laminat, Fliesen, Vinyl, Teppich oder Naturstein. Wichtig ist nur, dass der Estrich vollständig trocken ist – wir messen das und geben schriftlich frei."
      },
      {
        question: "Was ist Sichtestrich und wann ist er sinnvoll?",
        answer: "Sichtestrich ist ein Estrich, der nicht mit einem Belag verdeckt, sondern geschliffen, poliert und versiegelt wird. Er ist modern, pflegeleicht und robust – ideal für Lofts, Büros, Showrooms oder industriellen Wohnstil. Die Kosten sind höher als bei normalem Estrich, aber Sie sparen den Bodenbelag."
      },
      {
        question: "Wie dick muss der Estrich sein?",
        answer: "Die Mindestdicke hängt von der Nutzung ab: Im Wohnbereich mindestens 45 mm über der Dämmung, bei Fußbodenheizung mindestens 45 mm über den Heizrohren. Bei Industrieböden oft 60-80 mm oder mehr. Die genaue Stärke berechnen wir nach DIN-Norm für Ihr Projekt."
      }
    ]
  },
  {
    title: "Fußbodenheizung",
    questions: [
      {
        question: "Kann ich eine Fußbodenheizung nachträglich einbauen lassen?",
        answer: "Ja, mit unserer Fräs-Technologie ist das möglich. Wir fräsen Kanäle in den vorhandenen Estrich, legen die Heizrohre ein und vergießen sie. Der große Vorteil: Kein Abriss, keine Erhöhung des Bodenaufbaus, Arbeiten in 2-4 Tagen erledigt."
      },
      {
        question: "Wie lange dauert der Einbau einer nachträglichen Fußbodenheizung?",
        answer: "In der Regel 2-4 Tage für eine durchschnittliche Wohnung (80-120 m²). Am ersten Tag werden die Kanäle gefräst, am zweiten Tag die Rohre verlegt und vergossen. Nach 24-48 Stunden kann der neue Bodenbelag verlegt werden."
      },
      {
        question: "Funktioniert die nachgerüstete Fußbodenheizung genauso gut wie eine eingebaute?",
        answer: "Ja, die Leistung ist vergleichbar. Die gefrästen Kanäle haben eine optimale Wärmeabgabe, da die Rohre nah an der Oberfläche liegen. Die Aufheizzeit ist sogar oft kürzer als bei klassisch eingebetteten Heizungen."
      },
      {
        question: "Kann ich während der Arbeiten in der Wohnung bleiben?",
        answer: "Ja, wir arbeiten Raum für Raum. Sie können die nicht betroffenen Räume weiter nutzen. Unsere Fräsmaschinen haben eine integrierte Absaugung, sodass kaum Staub entsteht. Abends ist der bearbeitete Raum wieder begehbar."
      },
      {
        question: "Welche Bodenbeläge eignen sich für eine Fußbodenheizung?",
        answer: "Grundsätzlich alle Beläge, aber mit unterschiedlicher Eignung: Fliesen und Naturstein leiten die Wärme am besten. Parkett und Laminat eignen sich ebenfalls gut, wenn sie als 'für Fußbodenheizung geeignet' gekennzeichnet sind. Teppich ist möglich, reduziert aber die Effizienz. Wir beraten Sie zur optimalen Kombination."
      }
    ]
  },
  {
    title: "Ablauf & Zeitplan",
    questions: [
      {
        question: "Wie lange dauert es, bis der Estrich fertig ist?",
        answer: "Die Verlegung selbst dauert je nach Fläche 1-3 Tage. Danach muss der Estrich trocknen: Zementestrich 4-6 Wochen, Anhydritestrich 2-3 Wochen, Schnellestrich 1-5 Tage. Erst nach der Trocknung kann der Bodenbelag verlegt werden."
      },
      {
        question: "Wann kann ich den Raum nach der Estrichverlegung wieder betreten?",
        answer: "Begehbar ist der Estrich nach 24-48 Stunden. Belastbar (Möbel, Materiallagerung) nach etwa einer Woche. Belegreif (Bodenbelag verlegen) erst nach vollständiger Trocknung – je nach Estrichart 1-6 Wochen. Wir messen die Feuchtigkeit und geben schriftlich frei."
      },
      {
        question: "Was muss ich vor der Estrichverlegung vorbereiten?",
        answer: "Der Raum sollte geschlossen sein (Fenster, Türen eingebaut), die Elektro- und Sanitärinstallationen abgeschlossen. Der Untergrund muss tragfähig und sauber sein. Wir prüfen alles bei der Besichtigung und sagen Ihnen genau, was noch zu tun ist."
      },
      {
        question: "Wie läuft die Zusammenarbeit mit anderen Handwerkern?",
        answer: "Wir koordinieren uns mit Ihrem Architekt, Bauleiter und anderen Gewerken. Vor unseren Arbeiten stimmen wir mit Elektrikern und Sanitärinstallateuren ab, danach mit Bodenlegern und Malern. So passt alles nahtlos in den Bauzeitplan."
      }
    ]
  },
  {
    title: "Qualität & Garantie",
    questions: [
      {
        question: "Welche Gewährleistung geben Sie auf Ihre Arbeiten?",
        answer: "Wir geben 5 Jahre Gewährleistung auf alle Estricharbeiten, bei Industrieböden sogar 10 Jahre. Das geht über die gesetzliche Gewährleistung hinaus. Bei Mängeln bessern wir kostenlos nach – ohne Diskussion."
      },
      {
        question: "Was passiert, wenn nach der Verlegung Risse entstehen?",
        answer: "Kleine Schwindrisse sind bei Zementestrich normal und beeinträchtigen die Funktion nicht. Bei größeren Rissen oder Hohlstellen, die auf unsere Arbeit zurückzuführen sind, reparieren wir kostenlos. Deshalb dokumentieren wir jeden Auftrag sorgfältig mit Fotos und Protokollen."
      },
      {
        question: "Wie stellen Sie sicher, dass der Estrich eben genug ist?",
        answer: "Wir arbeiten nach DIN 18202 und messen die Ebenheit mit Laser-Nivelliergeräten. Die zulässigen Toleranzen hängen vom späteren Bodenbelag ab – für Parkett gelten strengere Werte als für Fliesen. Sie erhalten ein Messprotokoll mit allen Werten."
      },
      {
        question: "Woher weiß ich, dass der Estrich trocken genug für den Bodenbelag ist?",
        answer: "Wir messen die Restfeuchtigkeit mit einem kalibrierten CM-Gerät (Calciumcarbid-Methode) an mehreren Stellen. Bei Zementestrich darf die Feuchtigkeit max. 2,0 CM-% betragen, bei Anhydritestrich max. 0,5 CM-%. Sie erhalten eine schriftliche Belegreifmeldung mit allen Messwerten."
      },
      {
        question: "Sind Sie versichert für Schäden während der Arbeiten?",
        answer: "Ja, wir haben eine umfassende Betriebshaftpflichtversicherung mit einer Deckungssumme von 5 Mio. Euro. Sollte während unserer Arbeiten etwas beschädigt werden, sind Sie vollständig abgesichert."
      }
    ]
  }
];

export default function FAQ() {
  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.questions.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Häufige Fragen (FAQ) | Estrich München | Beratung & Antworten</title>
        <meta name="description" content="Antworten auf häufige Fragen zu Estricharbeiten: Trocknungszeit, Kosten, Materialien, Fußbodenheizung und mehr. Expertenberatung vom Münchner Meisterbetrieb." />
        <link rel="canonical" href="https://estriche-muenchen.de/faq" />
      </Helmet>
      <Header />

      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Häufige Fragen
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              {totalQuestions} Antworten auf Ihre Fragen
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Hier finden Sie ausführliche Antworten auf die häufigsten Fragen rund um Estrich, 
              Fußbodenheizung, Kosten und unseren Ablauf. Falls Ihre Frage nicht dabei ist – fragen Sie uns!
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Expertenberatung", "Schnelle Antworten", "Kostenlose Hilfe", "Praxiswissen"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-faq-cta">
                  Ihre Frage stellen
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

      <section className="py-8 bg-accent border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Ihre Sicherheit steht bei uns an erster Stelle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Kennen Sie das Gefühl?</strong> Sie haben Fragen, 
                aber niemand nimmt sich wirklich Zeit für Sie. Bei uns ist das anders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir beantworten nicht nur Ihre Fragen – wir sorgen dafür, dass Sie sich 
                <strong className="text-foreground"> sicher und gut beraten</strong> fühlen. 
                Denn nur wer informiert ist, kann die richtigen Entscheidungen treffen.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Transparente Beratung</h3>
                  <p className="text-xs text-muted-foreground">Keine versteckten Kosten, keine bösen Überraschungen.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Schnelle Antworten</h3>
                  <p className="text-xs text-muted-foreground">Rückruf innerhalb von 24 Stunden garantiert.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Echte Expertise</h3>
                  <p className="text-xs text-muted-foreground">30+ Jahre Erfahrung – wir kennen jede Situation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Persönliche Betreuung</h3>
                  <p className="text-xs text-muted-foreground">Ein Ansprechpartner für Ihr gesamtes Projekt.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-faq-benefits-cta">
                Jetzt persönliche Beratung anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid md:grid-cols-2 gap-6">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} data-testid={`faq-category-${categoryIndex}`}>
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold tracking-tight">{category.title}</h2>
                  <Badge variant="secondary" className="text-xs">{category.questions.length} Fragen</Badge>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`cat-${categoryIndex}-item-${index}`}
                      className="bg-card rounded-md border px-4"
                      data-testid={`faq-item-${categoryIndex}-${index}`}
                    >
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline text-sm">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Ihre Frage war nicht dabei?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kein Problem! Kontaktieren Sie uns, und wir beantworten Ihre Frage persönlich – 
            schnell, kompetent und unverbindlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-faq-contact">
                Jetzt Frage stellen
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800" asChild>
              <a href="tel:+4989444438872">
                Direkt anrufen: 089 444438872
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
