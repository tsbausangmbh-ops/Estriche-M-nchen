import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, CheckCircle2, Phone, Users, ChevronRight } from "lucide-react";
import { BusinessInfoCard } from "@/components/business-info-card";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Datenschutz Estrichleger München | Estriche München | DSGVO & TDDDG konform</title>
        <meta name="description" content="Datenschutzerklärung Estriche München: DSGVO & TDDDG konforme Informationen zur Datenverarbeitung. Estrichleger Fachbetrieb München – Ihre Daten sind bei uns sicher. Transparente Datenschutz-Richtlinien." />
        <meta name="keywords" content="Datenschutz Estriche München, DSGVO Estrichleger, Datenschutzerklärung Handwerker, Privatsphäre Baufirma Bayern, DSGVO konform Bauunternehmen" />
        <link rel="canonical" href="https://estriche-muenchen.de/datenschutz" />
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Rechtliches
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Datenschutzerklärung
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Schutz Ihrer Estrichprojekte in München. Gemäß der Datenschutz-Grundverordnung (DSGVO) 
              und dem TDDDG.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["DSGVO-konform", "TDDDG-konform", "Keine Weitergabe", "SSL-Verschlüsselung"].map((feature, index) => (
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

      <section className="py-6">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <Card className="mb-6">
            <CardContent className="p-6 space-y-8">
              
              <div>
                <h2 className="text-xl font-bold mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-semibold mt-4 mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
                  Sie persönlich identifiziert werden können.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                <p className="text-muted-foreground">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p className="text-muted-foreground">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-muted-foreground mt-2">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                  Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h3>
                <p className="text-muted-foreground">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Hinweis zu Vertragspartnern</h3>
                <p className="text-muted-foreground">
                  Vertragspartner dieses Angebots ist der im Angebot namentlich genannte Gewerbebetrieb. Rechnungsstellung, 
                  Gewährleistung und Haftung erfolgen ausschließlich über den jeweiligen Vertragspartner. Weitere 
                  Leistungen können durch rechtlich selbstständige Partnerbetriebe ausgeführt werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">2. Hosting</h2>
                <p className="text-muted-foreground">
                  Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, 
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                  es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-muted-foreground mt-3">
                  <strong>Serverstandort:</strong> EU (Rechenzentren innerhalb der Europäischen Union)<br />
                  <strong>Auftragsverarbeitung:</strong> Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit 
                  dem Hoster geschlossen. Dieser stellt sicher, dass die Daten unserer Websitebesucher nur nach unseren 
                  Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="font-semibold mt-4 mb-2">Datenschutz & Datensicherheit</h3>
                <p className="text-muted-foreground">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                  Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                  sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Weitergabe von Daten</h3>
                <p className="text-muted-foreground">
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten 
                  Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
                  <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung 
                  von Rechtsansprüchen erforderlich ist,</li>
                  <li>für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
                  <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von 
                  Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">Weitergabe an Handwerker und Subunternehmer</h3>
                <p className="text-muted-foreground">
                  Zur Erfüllung unseres Auftrags (Estricharbeiten, Koordination verschiedener Gewerke) ist es 
                  erforderlich, Ihre Kontaktdaten (Name, Anschrift, Telefonnummer, ggf. E-Mail) an von uns beauftragte 
                  Subunternehmer und Fachplaner weiterzugeben.
                </p>
                <p className="text-muted-foreground mt-2">
                  Die Weitergabe erfolgt ausschließlich zum Zweck der Terminvereinbarung, Angebotserstellung für 
                  Teilleistungen oder Durchführung der handwerklichen Tätigkeiten bei Ihnen vor Ort. Rechtsgrundlage 
                  hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen). Unsere 
                  Partner sind ebenfalls zur Einhaltung der Datenschutzbestimmungen verpflichtet.
                </p>

                <h3 className="font-semibold mt-4 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                  Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Cookies</h3>
                <p className="text-muted-foreground">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten 
                  auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <p className="text-muted-foreground mt-2">
                  Mehr Informationen finden Sie in unserer{" "}
                  <Link href="/cookie-einstellungen" className="text-primary underline hover:no-underline">
                    Cookie-Richtlinie
                  </Link>.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  <br /><br />
                  Mustafa Sakar<br />
                  Estriche München<br />
                  Hardenbergstr. 4<br />
                  80992 München<br /><br />
                  E-Mail: info@estriche-muenchen.de<br />
                  Telefon: 089 444438872
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="font-semibold mt-4 mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                  Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist.
                </p>
                <p className="text-muted-foreground mt-2">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                  Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                  Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen 
                  – bleiben unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">5. Ihre Rechte</h2>
                <p className="text-muted-foreground mb-4">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie können Informationen über Ihre von uns 
                  verarbeiteten personenbezogenen Daten verlangen.</li>
                  <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger 
                  oder Vervollständigung Ihrer bei uns gespeicherten Daten verlangen.</li>
                  <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, 
                  sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                  <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die 
                  Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
                  <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre Daten in einem 
                  strukturierten, gängigen Format erhalten.</li>
                  <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung 
                  widersprechen, sofern diese auf Grundlage eines berechtigten Interesses erfolgt.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong> Viele 
                  Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                  eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum 
                  Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong> Im Falle von Verstößen 
                  gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, 
                  insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder 
                  des Orts des mutmaßlichen Verstoßes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">6. Analyse-Tools und Werbung</h2>
                
                <h3 className="font-semibold mt-4 mb-2">Google Analytics</h3>
                <p className="text-muted-foreground">
                  Diese Website kann Funktionen des Webanalysedienstes Google Analytics nutzen. Anbieter ist die 
                  Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-muted-foreground mt-2">
                  Google Analytics verwendet so genannte „Cookies". Die durch den Cookie erzeugten Informationen 
                  über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA 
                  übertragen und dort gespeichert.
                </p>
                <p className="text-muted-foreground mt-2">
                  Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen nur 
                  auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die Funktion IP-Anonymisierung 
                  aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen 
                  Union vor der Übermittlung in die USA gekürzt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">7. Plugins und Tools</h2>
                
                <h3 className="font-semibold mt-4 mb-2">Google Web Fonts (lokales Hosting)</h3>
                <p className="text-muted-foreground">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die 
                  von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung 
                  zu Servern von Google findet dabei nicht statt.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Google Maps</h3>
                <p className="text-muted-foreground">
                  Diese Seite kann den Kartendienst Google Maps nutzen. Anbieter ist die Google Ireland Limited 
                  („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-muted-foreground mt-2">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. 
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer 
                  Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO) oder auf Grundlage Ihrer Einwilligung 
                  (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">8. Speicherdauer und Löschkonzept</h2>
                <p className="text-muted-foreground">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erreichung der hier 
                  genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen 
                  Speicherfristen vorsehen.
                </p>
                <p className="text-muted-foreground mt-2">
                  Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden 
                  Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht. 
                  Für buchhalterische Daten (Rechnungen) beträgt die gesetzliche Aufbewahrungsfrist in Deutschland 
                  10 Jahre (§ 147 AO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">9. Auftragsverarbeitung</h2>
                <p className="text-muted-foreground">
                  Wir haben mit unseren externen Dienstleistern (z. B. Webhoster, IT-Service) Verträge zur 
                  Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO abgeschlossen. Dies stellt sicher, dass diese 
                  Ihre Daten streng nach unseren Weisungen und unter Einhaltung höchster Sicherheitsstandards verarbeiten.
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026<br />
                  Diese Datenschutzerklärung wurde gemäß den aktuellen Anforderungen der DSGVO und des TDDDG erstellt.
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
