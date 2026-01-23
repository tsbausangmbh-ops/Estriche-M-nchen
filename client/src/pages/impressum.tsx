import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, CheckCircle2, Phone, Users, Shield, ChevronRight, Building2 } from "lucide-react";
import heroImage from "@assets/generated_images/workers_checking_level_blue.png";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Impressum | Estriche München | Mustafa Sakar & Ali Kemal Kurt</title>
        <meta name="description" content="Impressum von Estriche München – Estrichleger Meisterbetrieb. Inhaber: Mustafa Sakar & Ali Kemal Kurt. ☎ 089 444438872. Angaben gemäß § 5 TMG." />
        <meta name="keywords" content="Impressum Estriche München, Estrichleger Kontakt, Mustafa Sakar München, Ali Kemal Kurt München, Estrich Firma Impressum" />
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
            <CardContent className="p-6 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Die Website Estriche München wird gemeinschaftlich betrieben von zwei rechtlich selbstständigen Einzelgewerben:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-sm">Gewerbebetrieb 1</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Name:</strong> Mustafa Sakar<br />
                    <strong>Rechtsform:</strong> Einzelunternehmen<br />
                    <strong>Firmenauftritt:</strong> Estriche München<br /><br />
                    <strong>Anschrift:</strong><br />
                    Hardenbergstr. 4<br />
                    80992 München<br />
                    Deutschland<br /><br />
                    <strong>Telefon:</strong> 089 444438872<br />
                    <strong>E-Mail:</strong> info@estriche-muenchen.de<br /><br />
                    <strong>Tätigkeitsbereich:</strong><br />
                    Bauleitung, Projektsteuerung, Kundenberatung, Koordination der Gewerke, Angebots- und Auftragsabwicklung
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-sm">Gewerbebetrieb 2</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Name:</strong> Ali Kemal Kurt<br />
                    <strong>Rechtsform:</strong> Einzelunternehmen<br />
                    <strong>Firmenauftritt:</strong> Estriche München<br /><br />
                    <strong>Anschrift:</strong><br />
                    Zielstattstr. 9<br />
                    81379 München<br />
                    Deutschland<br /><br />
                    <strong>Telefon:</strong> 0152 122 740 43<br />
                    <strong>E-Mail:</strong> info@komplettsanierungen-haus-wohnung.de<br /><br />
                    <strong>Tätigkeitsbereich:</strong><br />
                    Ausführende Bau-, Sanierungs- und Renovierungsleistungen sowie handwerkliche Tätigkeiten
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Umsatzsteuer-ID</h2>
                <p className="text-sm text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <strong>DE356852204</strong>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Rechtlicher Hinweis zur Gewerbetrennung</h2>
                <p className="text-sm text-muted-foreground">
                  Die genannten Gewerbebetriebe sind rechtlich, wirtschaftlich und steuerlich eigenständig.<br /><br />
                  Der jeweilige Vertragspartner, Rechnungssteller und Leistungserbringer wird im Angebot, Auftrag und auf der Rechnung eindeutig benannt.<br /><br />
                  <strong>Es besteht keine gemeinsame Haftung.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Vertragspartner je Auftrag</h2>
                <p className="text-sm text-muted-foreground">
                  Vertragspartner dieses Angebots ist der im Angebot namentlich genannte Gewerbebetrieb.<br /><br />
                  Rechnungsstellung, Gewährleistung und Haftung erfolgen ausschließlich über den jeweiligen Vertragspartner.<br /><br />
                  Weitere Leistungen können durch rechtlich selbstständige Partnerbetriebe ausgeführt werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Verantwortlich für den Inhalt gemäß § 18 MStV</h2>
                <p className="text-sm text-muted-foreground">
                  Mustafa Sakar<br />
                  Hardenbergstr. 4, 80992 München<br /><br />
                  Ali Kemal Kurt<br />
                  Zielstattstr. 9, 81379 München
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p className="text-sm text-muted-foreground">
                  <strong>Berufsbezeichnung:</strong> Generalübernehmer<br />
                  <strong>Zuständige Kammer:</strong> Handwerkskammer für München und Oberbayern<br /><br />
                  Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)<br />
                  Regelungen einsehbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gesetze-im-internet.de/hwo/</a><br /><br />
                  <strong>Wichtiger Hinweis:</strong> Alle meisterpflichtigen Gewerke werden durch unser Partnernetzwerk ausgeführt, die als eingetragene Meisterfirmen in der Handwerkskammer gelistet sind.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Partnernetzwerk</h2>
                <p className="text-sm text-muted-foreground">
                  Wir arbeiten mit rechtlich selbstständigen Einzelgewerbebetrieben und ausgewählten Partnerfirmen.<br /><br />
                  Der jeweilige Vertragspartner wird im Angebot und in der Rechnung eindeutig ausgewiesen. Sämtliche meisterpflichtigen Gewerke (u.a. Elektro, Sanitär, Heizung) werden durch unser Partnernetzwerk ausgeführt. Hierbei handelt es sich ausnahmslos um eingetragene Meisterfirmen der Handwerkskammer München.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Außergerichtliche Streitschlichtung (Handwerk)</h2>
                <p className="text-sm text-muted-foreground">
                  Hinweis gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz) für Handwerksbetriebe:<br /><br />
                  Wir sind bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br /><br />
                  <strong>Zuständige Schlichtungsstelle:</strong><br />
                  Schlichtungsstelle für den Bereich Handwerk<br />
                  Bayerische Handwerkskammern / ZDH<br />
                  Geschäftsstelle: Max-Joseph-Straße 4, 80333 München<br />
                  Website: <a href="https://www.zdh.de/fachbereiche/recht/schlichtung/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.zdh.de/fachbereiche/recht/schlichtung/</a><br /><br />
                  <em>Hinweis: Die EU-Online-Streitbeilegungsplattform (OS) wurde gemäß Verordnung (EU) 2024/3228 zum 20. Juli 2025 eingestellt.</em>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Haftung für Inhalte</h2>
                <p className="text-sm text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Haftung für Links</h2>
                <p className="text-sm text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Urheberrecht</h2>
                <p className="text-sm text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">KI-Hinweis gemäß EU AI Act (Art. 50)</h2>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparenzhinweis:</strong> Estriche München setzt zur Unterstützung der Geschäftsprozesse KI-basierte Systeme ein. Diese werden u.a. bei der Angebotserstellung, Kommunikation und Dokumentenverarbeitung genutzt. Alle endgültigen Entscheidungen werden von qualifizierten Mitarbeitern getroffen und verantwortet.<br /><br />
                  <em>Rechtsgrundlage: Verordnung (EU) 2024/1689 (EU AI Act), Art. 22 DSGVO</em>
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  Stand: Januar 2026 – Angaben gemäß den aktuellen Anforderungen für Handwerksbetriebe ab Februar 2025.
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
