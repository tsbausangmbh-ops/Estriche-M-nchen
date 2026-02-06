import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accessibility, CheckCircle2, Phone, Users, Shield, ChevronRight, AlertTriangle, Mail, Info } from "lucide-react";
import { BusinessInfoCard } from "@/components/business-info-card";
import heroImage from "@assets/generated_images/workers_checking_level_blue.webp";

export default function Barrierefreiheit() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Barrierefreiheit Estriche München | BFSG & BITV 2.0 Erklärung | WCAG 2.2 konform</title>
        <meta name="description" content="Barrierefreiheit Estriche München: Erklärung zur Barrierefreiheit gemäß BFSG, BITV 2.0 & WCAG 2.2. Barrierefreie Website vom Estrichleger Fachbetrieb" />
        <meta name="keywords" content="Barrierefreiheit Estriche München, BFSG Erklärung, BITV 2.0 konform, WCAG 2.2, barrierefreie Website Estrichleger, Fachbetrieb Barrierefreiheit" />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />
        <link rel="canonical" href="https://estriche-muenchen.de/barrierefreiheit" />
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
                <Accessibility className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Barrierefreiheit
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Barrierefreiheit</strong> Estriche München – Erklärung gemäß BFSG & BITV 2.0
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Estriche München setzt sich für die Barrierefreiheit dieser Website ein –
              gemäß BFSG, BITV 2.0 und WCAG 2.2.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["BFSG konform", "WCAG 2.2", "BITV 2.0", "Tastaturnavigation"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot" data-testid="link-angebot-hero">
                <Button size="lg" data-testid="button-angebot-hero">
                  Angebot anfordern
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="backdrop-blur-sm" asChild>
                <a href="tel:+4989444438872" data-testid="link-phone-hero">
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

      <section className="py-6">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <Card className="mb-6">
            <CardContent className="p-6 space-y-8">

              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold">Rechtsgrundlagen (Stand 2026)</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Diese Erklärung zur Barrierefreiheit wurde gemäß den aktuellen gesetzlichen
                  Anforderungen erstellt und berücksichtigt insbesondere:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>Barrierefreiheitsstärkungsgesetz (BFSG) – in Kraft seit 28. Juni 2025</li>
                  <li>Barrierefreie-Informationstechnik-Verordnung (BITV 2.0)</li>
                  <li>Web Content Accessibility Guidelines (WCAG) 2.2, Konformitätsstufe AA</li>
                  <li>EN 301 549 – Europäische Norm für barrierefreie IKT</li>
                  <li>Behindertengleichstellungsgesetz (BGG)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Stand der Konformität</h2>
                <p className="text-sm text-muted-foreground">
                  Diese Website ist <strong>teilweise konform</strong> mit der BITV 2.0 und den
                  WCAG 2.2 auf Konformitätsstufe AA. Wir arbeiten kontinuierlich daran, die
                  Barrierefreiheit unserer Website zu verbessern.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Umgesetzte Maßnahmen</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Estriche München hat folgende Maßnahmen ergriffen, um die Barrierefreiheit
                  dieser Website sicherzustellen:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-bold text-sm mb-2">Semantische Struktur</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Korrekte Überschriftenhierarchie (H1–H6)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Semantische HTML5-Elemente (header, nav, main, footer)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Strukturierte Daten (Schema.org JSON-LD)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-bold text-sm mb-2">Navigation & Bedienung</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Vollständige Tastaturnavigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sichtbare Fokusanzeige bei Tastaturnutzung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>ARIA-Labels für interaktive Elemente</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-bold text-sm mb-2">Darstellung & Lesbarkeit</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Ausreichende Farbkontraste (WCAG AA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Responsive Design für alle Bildschirmgrößen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Textvergrößerung bis 200% ohne Informationsverlust</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-bold text-sm mb-2">Medien & Inhalte</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Alternativtexte für alle Bilder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Beschriftete Formularfelder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Klare und verständliche Sprache</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-xl font-bold">Bekannte Einschränkungen</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Trotz unserer Bemühungen können folgende Bereiche derzeit Einschränkungen
                  in der Barrierefreiheit aufweisen:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                  <li>
                    <strong>Bilder:</strong> Einige dekorative Bilder können möglicherweise
                    nicht vollständig durch Alternativtexte beschrieben werden.
                  </li>
                  <li>
                    <strong>PDF-Dokumente:</strong> Sofern PDF-Dokumente zum Download
                    bereitgestellt werden, sind diese möglicherweise nicht vollständig
                    barrierefrei.
                  </li>
                  <li>
                    <strong>Drittanbieter-Inhalte:</strong> Eingebettete Inhalte von
                    Drittanbietern (z.B. Google Maps) unterliegen deren eigenen
                    Barrierefreiheitsstandards.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Technische Voraussetzungen</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Die Barrierefreiheit dieser Website wurde für folgende Umgebungen optimiert:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>Aktuelle Versionen von Chrome, Firefox, Safari und Edge</li>
                  <li>Screenreader: NVDA, JAWS, VoiceOver (macOS/iOS), TalkBack (Android)</li>
                  <li>Vergrößerungssoftware und Bildschirmlupen</li>
                  <li>Sprachsteuerung: Dragon NaturallySpeaking, Sprachsteuerung (macOS)</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Feedback & Kontakt</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Wenn Sie auf Barrieren auf unserer Website stoßen oder Verbesserungsvorschläge
                  haben, kontaktieren Sie uns bitte:
                </p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>E-Mail:</strong>{" "}
                    <a href="mailto:info@estriche-muenchen.de" className="text-primary hover:underline" data-testid="link-email-feedback">
                      info@estriche-muenchen.de
                    </a>
                  </p>
                  <p><strong>Telefon:</strong>{" "}
                    <a href="tel:+4989444438872" className="text-primary hover:underline" data-testid="link-phone-feedback">
                      089 444438872
                    </a>
                  </p>
                  <p><strong>Adresse:</strong> Hardenbergstr. 4, 80992 München</p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Wir bemühen uns, Ihre Anfrage innerhalb von 14 Tagen zu beantworten und
                  etwaige Barrieren schnellstmöglich zu beseitigen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Durchsetzungsverfahren</h2>
                <p className="text-sm text-muted-foreground">
                  Sollten Sie nach einer Kontaktaufnahme mit uns keine zufriedenstellende
                  Lösung erhalten, können Sie sich an die zuständige Durchsetzungsstelle wenden:
                </p>
                <div className="mt-3 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  <p className="font-semibold">Landesamt für Digitalisierung, Breitband und Vermessung</p>
                  <p>IT-Dienstleistungszentrum des Freistaats Bayern</p>
                  <p>Durchsetzungs- und Überwachungsstelle für barrierefreie Informationstechnik</p>
                  <p className="mt-2">
                    <strong>E-Mail:</strong>{" "}
                    <a href="mailto:bitv@bayern.de" className="text-primary hover:underline" data-testid="link-email-bitv">
                      bitv@bayern.de
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="https://www.ldbv.bayern.de/digitalisierung/bitv.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-ldbv-website">
                      www.ldbv.bayern.de/digitalisierung/bitv.html
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  Stand: Februar 2026 – Diese Erklärung wurde zuletzt am 06.02.2026 überprüft und aktualisiert.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-6">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <BusinessInfoCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}
