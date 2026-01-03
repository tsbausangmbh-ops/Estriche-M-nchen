import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Datenschutzerklärung</h1>
          <p className="text-muted-foreground mb-8">
            Gemäß der Datenschutz-Grundverordnung (DSGVO) und dem EU AI Act
          </p>
          
          <Card className="mb-6">
            <CardContent className="p-6 space-y-8">
              
              <div>
                <h2 className="text-xl font-bold mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-semibold mt-4 mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
                  Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                  entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
                <p className="text-muted-foreground">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">2. Verantwortliche Stelle</h2>
                <p className="text-muted-foreground">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  <br /><br />
                  Estrich München GmbH<br />
                  Musterstraße 123<br />
                  80331 München<br />
                  Deutschland<br /><br />
                  Telefon: +49 89 123 456 789<br />
                  E-Mail: datenschutz@estrich-muenchen.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">3. Ihre Rechte nach DSGVO</h2>
                <p className="text-muted-foreground mb-4">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO)</strong> – Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> – Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong> – Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung oder aus Gründen des öffentlichen Interesses erforderlich ist.</li>
                  <li><strong>Recht auf Einschränkung (Art. 18 DSGVO)</strong> – Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Sie können verlangen, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten.</li>
                  <li><strong>Recht auf Widerspruch (Art. 21 DSGVO)</strong> – Sie können jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einlegen.</li>
                  <li><strong>Recht auf Beschwerde</strong> – Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="font-semibold mt-4 mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                  <br /><br />
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                  Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">5. Einsatz von Künstlicher Intelligenz (EU AI Act)</h2>
                <p className="text-muted-foreground mb-4">
                  Gemäß der EU-Verordnung über Künstliche Intelligenz (EU AI Act, Verordnung (EU) 2024/1689) 
                  informieren wir Sie transparent über den Einsatz von KI-Systemen:
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Verwendete KI-Systeme</h3>
                <p className="text-muted-foreground">
                  Auf dieser Website werden folgende KI-gestützte Technologien eingesetzt:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                  <li><strong>Bildgenerierung:</strong> Einige Bilder auf dieser Website wurden mit Hilfe von 
                  KI-Bildgenerierungssystemen erstellt. Diese Bilder dienen der Illustration unserer Dienstleistungen 
                  und stellen keine realen Personen dar.</li>
                  <li><strong>Textunterstützung:</strong> Teile der Websiteinhalte wurden mit Unterstützung von 
                  KI-Textgenerierungssystemen erstellt und anschließend redaktionell überprüft.</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-2">Risikoklassifizierung</h3>
                <p className="text-muted-foreground">
                  Die auf dieser Website verwendeten KI-Systeme fallen gemäß EU AI Act in die Kategorie 
                  „minimales Risiko" (Art. 6, 52 EU AI Act). Es handelt sich um allgemeine KI-Anwendungen 
                  ohne hohes Risiko für Gesundheit, Sicherheit oder Grundrechte.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Transparenzpflichten</h3>
                <p className="text-muted-foreground">
                  Wir kennzeichnen KI-generierte Inhalte gemäß Art. 52 EU AI Act. Bei Fragen zum Einsatz 
                  von KI-Systemen auf unserer Website können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="font-semibold mt-4 mb-2">Keine automatisierte Entscheidungsfindung</h3>
                <p className="text-muted-foreground">
                  Es findet keine automatisierte Entscheidungsfindung gemäß Art. 22 DSGVO statt. Alle 
                  geschäftlichen Entscheidungen, insbesondere bezüglich Angebotserstellung und Auftragsannahme, 
                  werden von Menschen getroffen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
                <p className="text-muted-foreground">
                  Diese Website verwendet technisch notwendige Cookies, um die Grundfunktionen der Website 
                  zu gewährleisten. Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                  gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von technisch 
                  notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste.
                  <br /><br />
                  Wir verwenden keine Tracking-Cookies oder Cookies für Werbezwecke.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">7. Datensicherheit</h2>
                <p className="text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">8. Speicherdauer</h2>
                <p className="text-muted-foreground">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung des 
                  jeweiligen Zwecks erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen. 
                  Kontaktanfragen werden in der Regel nach 3 Jahren gelöscht, sofern keine vertraglichen 
                  oder gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">9. Änderung dieser Datenschutzerklärung</h2>
                <p className="text-muted-foreground">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                  in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
                  Datenschutzerklärung.
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026<br />
                  Rechtsgrundlagen: DSGVO (EU) 2016/679, EU AI Act (EU) 2024/1689, TTDSG, TMG
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
