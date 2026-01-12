import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, CheckCircle2, Phone, Users, Shield, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/workers_checking_level_blue.png";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Impressum | Estriche München | Mustafa Sakar</title>
        <meta name="description" content="Impressum von Estriche München. Angaben gemäß § 5 TMG. Inhaber: Mustafa Sakar, Hardenbergstr. 4, 80992 München." />
        <link rel="canonical" href="https://estriche-muenchen.de/impressum" />
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
                <FileText className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Rechtliches
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Impressum
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Angaben gemäß § 5 TMG und rechtliche Informationen über Estriche München.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Meisterbetrieb", "30+ Jahre Erfahrung", "München & Umgebung", "Qualitätsgarantie"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg">
                  Angebot anfordern
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

      <section className="py-12">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <Card className="mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  Mustafa Sakar<br />
                  Estriche München<br />
                  Hardenbergstr. 4<br />
                  80992 München<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: 089 444438872<br />
                  E-Mail: info@estriche-muenchen.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p className="text-muted-foreground">
                  Berufsbezeichnung: Estrichleger / Bauunternehmen<br />
                  Zuständige Kammer: Handwerkskammer für München und Oberbayern<br />
                  Verliehen in: Deutschland<br />
                  Ausführende Firma: Hüseyin Türker (Estrich T.H. UG)
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Partnernetzwerk</h2>
                <p className="text-muted-foreground">
                  Die Ausführung aller Estricharbeiten erfolgt durch unser Netzwerk qualifizierter 
                  Meisterbetriebe und Fachfirmen. Estriche München vermittelt und koordiniert diese 
                  Leistungen. Unsere Partnerbetriebe arbeiten nach höchsten Qualitätsstandards und 
                  sind für die fachgerechte Ausführung verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-muted-foreground">
                  Mustafa Sakar<br />
                  Hardenbergstr. 4<br />
                  80992 München
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">EU-Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://consumer-redress.ec.europa.eu/index_de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://consumer-redress.ec.europa.eu/index_de
                  </a>
                  <br /><br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Haftung für Inhalte</h2>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  <br /><br />
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                  der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Haftung für Links</h2>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  <br /><br />
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Urheberrecht</h2>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  <br /><br />
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
