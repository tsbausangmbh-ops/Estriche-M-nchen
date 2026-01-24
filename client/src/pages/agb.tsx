import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Scale, CheckCircle2, Phone, Users, Shield, ChevronRight } from "lucide-react";
import { BusinessInfoCard } from "@/components/business-info-card";
import heroImage from "@assets/generated_images/two_workers_pouring_screed_blue.png";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AGB | Allgemeine Geschäftsbedingungen | Estriche München</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen von Estriche München für Estrich- und Bodenarbeiten gemäß BGB Bauvertragsrecht (§§ 650a–650o BGB)." />
        <meta name="keywords" content="AGB Estriche München, Allgemeine Geschäftsbedingungen Estrichleger, Bauvertrag München, Estrichvertrag AGB, Handwerker AGB Bayern" />
        <link rel="canonical" href="https://estriche-muenchen.de/agb" />
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
                <Scale className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Rechtliches
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Allgemeine Geschäftsbedingungen
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Von Estriche München für Estrich- und Bodenarbeiten. 
              Gemäß BGB Bauvertragsrecht (§§ 650a–650o BGB).
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["BGB-konform", "Verbraucherschutz", "VOB/B 2019", "Faire Bedingungen"].map((feature, index) => (
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

              <div className="p-4 bg-muted/50 rounded-lg">
                <h2 className="text-lg font-bold mb-3">Rechtsgrundlagen dieser AGB (Stand 2026)</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Diese AGB wurden gemäß den aktuellen gesetzlichen Anforderungen für das Baugewerbe erstellt 
                  und berücksichtigen insbesondere:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>BGB §§ 631-651 (Werkvertragsrecht) – Grundlagen des Werkvertrags</li>
                  <li>BGB §§ 650a-650h (Bauvertragsrecht) – Spezielle Regelungen für Bauverträge seit 01.01.2018</li>
                  <li>BGB §§ 650i-650n (Verbraucherbauvertrag) – Besonderer Schutz für Verbraucher</li>
                  <li>BGB §§ 305-310 (AGB-Recht) – Inhaltskontrolle und Einbeziehung</li>
                  <li>DSGVO & BDSG – Datenschutzrechtliche Anforderungen</li>
                  <li>VOB/B 2019 – Vergabe- und Vertragsordnung für Bauleistungen (bei B2B-Verträgen)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">1. Allgemeines und Vertragsschluss</h2>
                
                <h3 className="font-semibold mt-4 mb-2">§ 1 Geltungsbereich</h3>
                <p className="text-muted-foreground">
                  (1) Die nachstehenden Allgemeinen Geschäftsbedingungen gelten für alle Rechtsgeschäfte der 
                  Estriche München, Mustafa Sakar, Hardenbergstr. 4, 80992 München (nachfolgend "Auftragnehmer" 
                  genannt) mit ihren Vertragspartnern (nachfolgend "Auftraggeber" genannt).
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Diese AGB gelten für Werkverträge im Sinne der §§ 631 ff. BGB sowie für Bauverträge im 
                  Sinne des § 650a BGB. Bei Verträgen mit Verbrauchern (§ 13 BGB) gelten ergänzend die 
                  Bestimmungen zum Verbraucherbauvertrag (§§ 650i-650n BGB).
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des 
                  Auftraggebers werden nur dann Vertragsbestandteil, wenn und soweit der Auftragnehmer ihrer 
                  Geltung ausdrücklich schriftlich zugestimmt hat.
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Diese AGB gelten gegenüber Unternehmern (§ 14 BGB) auch für alle zukünftigen 
                  Geschäftsbeziehungen.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 2 Vertragsgegenstand (Bauvertrag § 650a BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftragnehmer erbringt Werkleistungen im Bereich Estricharbeiten, Bodenarbeiten und 
                  Wärmedämmung. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot und der 
                  Leistungsbeschreibung.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Der Vertrag ist ein Bauvertrag im Sinne des § 650a Abs. 1 BGB, wenn er die Herstellung, 
                  die Wiederherstellung, die Beseitigung oder den Umbau eines Bauwerks, einer Außenanlage oder 
                  eines Teils davon zum Gegenstand hat.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Der Auftragnehmer ist berechtigt, zur Ausführung des Auftrags qualifizierte Subunternehmer 
                  und Partnerbetriebe heranzuziehen.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 3 Zustandekommen des Vertrages</h3>
                <p className="text-muted-foreground">
                  (1) Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht 
                  ausdrücklich als verbindlich gekennzeichnet sind. Die Angebotserstellung kann kostenpflichtig 
                  sein, wenn dies vorher vereinbart wurde.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Ein Vertrag kommt durch schriftliche Auftragserteilung (Brief, E-Mail, Fax) oder durch 
                  ausdrückliche mündliche Beauftragung mit schriftlicher Bestätigung zustande.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Bei Verbraucherbauverträgen (§ 650i BGB) erhält der Auftraggeber vor Vertragsschluss eine 
                  detaillierte Baubeschreibung gemäß § 650j BGB, die Gegenstand des Vertrages wird.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 4 Getrennte Gewerbebetriebe / Vertragspartner</h3>
                <p className="text-muted-foreground">
                  (1) Die auf dieser Website dargestellten Leistungen werden von rechtlich selbstständigen 
                  Einzelgewerbebetrieben erbracht.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Vertragspartner des Kunden ist ausschließlich der im jeweiligen Angebot, Auftrag und in 
                  der Rechnung ausdrücklich benannte Gewerbebetrieb.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Eine gemeinschaftliche Leistungserbringung im Sinne einer Gesellschaft bürgerlichen Rechts 
                  (GbR) oder eine gesamtschuldnerische Haftung mehrerer Gewerbebetriebe ist nicht vereinbart und 
                  wird ausdrücklich ausgeschlossen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Soweit Leistungen durch weitere, rechtlich selbstständige Partnerbetriebe ausgeführt werden, 
                  erfolgt dies im Auftrag und unter Verantwortung des jeweiligen Vertragspartners.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">2. Besondere Bestimmungen für Verbraucher</h2>

                <h3 className="font-semibold mt-4 mb-2">§ 5 Widerrufsrecht bei außerhalb von Geschäftsräumen geschlossenen Verträgen</h3>
                <p className="text-muted-foreground font-semibold">Widerrufsbelehrung (§§ 312g, 355 BGB)</p>
                <p className="text-muted-foreground mt-2">
                  <strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von 
                  Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des 
                  Vertragsabschlusses.
                </p>
                <p className="text-muted-foreground mt-2">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Estriche München, Hardenbergstr. 4, 80992 
                  München, E-Mail: info@estriche-muenchen.de, Tel: 089 444438872) mittels einer eindeutigen 
                  Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen 
                  Vertrag zu widerrufen, informieren.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle 
                  Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen 
                  ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
                </p>
                <p className="text-muted-foreground mt-2">
                  (1) Das Widerrufsrecht gilt nur für Verbraucher bei Verträgen, die außerhalb unserer 
                  Geschäftsräume geschlossen wurden (z.B. beim Kunden vor Ort).
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn der 
                  Auftragnehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung erst begonnen 
                  hat, nachdem der Verbraucher ausdrücklich zugestimmt hat.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 6 Baubeschreibung (§ 650j BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Bei Verbraucherbauverträgen erhält der Auftraggeber rechtzeitig vor Abgabe seiner 
                  Vertragserklärung eine Baubeschreibung in Textform.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Die Baubeschreibung enthält die wesentlichen Eigenschaften des Bauwerks, insbesondere: Art 
                  und Umfang der Bauleistungen, Gebäudedaten, Beschreibung der Baukonstruktion, Ausbaustandards 
                  und technische Angaben.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Soweit die Baubeschreibung unvollständig oder unklar ist, ist der Vertrag zugunsten des 
                  Verbrauchers auszulegen (§ 650k Abs. 2 BGB).
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 7 Abschlagszahlungen bei Verbraucherverträgen (§ 650m BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Bei Verbraucherbauverträgen dürfen Abschlagszahlungen insgesamt maximal 90 % der vereinbarten 
                  Gesamtvergütung nicht übersteigen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Der Auftragnehmer kann eine Abschlagszahlung in Höhe des Wertes der von ihm erbrachten und 
                  nach dem Vertrag geschuldeten Leistungen verlangen (§ 632a Abs. 1 BGB).
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Die Schlusszahlung (mindestens 10 %) wird nach erfolgter Abnahme fällig.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">3. Ausführung und Vergütung</h2>

                <h3 className="font-semibold mt-4 mb-2">§ 8 Vergütung & Zahlungsbedingungen</h3>
                <p className="text-muted-foreground">
                  (1) Es gelten die im Angebot vereinbarten Preise. Alle Preise verstehen sich in Euro netto 
                  zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Zahlungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung 
                  ohne Abzug fällig.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten 
                  über dem Basiszinssatz (bei Verbrauchern) bzw. 9 Prozentpunkten über dem Basiszinssatz (bei 
                  Unternehmern) zu verlangen (§§ 288, 247 BGB).
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Abschlagszahlungen werden gemäß § 632a BGB nach Baufortschritt in Rechnung gestellt. Die Höhe 
                  der Abschläge richtet sich nach dem Wert der erbrachten Leistung.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 9 Anordnungsrecht des Auftraggebers (§ 650b BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftraggeber kann Änderungen des vereinbarten Werkerfolgs oder Änderungen, die zur 
                  Erreichung des vereinbarten Werkerfolgs notwendig sind, verlangen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Streben die Parteien Einvernehmen über die Änderung an, trifft den Auftragnehmer eine 
                  Mitwirkungspflicht. Nach Ablauf einer 30-Tage-Frist kann der Auftraggeber die Änderung in 
                  Textform anordnen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Der Auftragnehmer ist nur dann zur Ausführung der Änderung verpflichtet, wenn ihm die 
                  Ausführung zumutbar ist.
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Für die Vergütungsanpassung gilt § 650c BGB.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 10 Vergütungsanpassung (§ 650c BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Bei Anordnungen nach § 650b BGB hat der Auftragnehmer Anspruch auf Anpassung der Vergütung.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Die Höhe des Vergütungsanspruchs bemisst sich nach den tatsächlich erforderlichen Kosten mit 
                  angemessenen Zuschlägen für allgemeine Geschäftskosten, Wagnis und Gewinn.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Der Auftragnehmer kann zur Berechnung auf die Ansätze einer vereinbarten Urkalkulation 
                  zurückgreifen.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 11 Mitwirkungspflichten des Auftraggebers</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftraggeber ist verpflichtet, alle notwendigen Mitwirkungshandlungen zu erbringen 
                  (z.B. Zugang zur Baustelle, Bereitstellung von Strom/Wasser, Vorlage erforderlicher Unterlagen 
                  und Genehmigungen, Räumung der Arbeitsbereiche).
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Verzögerungen, die durch fehlende Mitwirkung entstehen, gehen nicht zu Lasten des 
                  Auftragnehmers. Entstehende Mehrkosten können dem Auftraggeber in Rechnung gestellt werden.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Der Auftraggeber hat den Auftragnehmer über alle ihm bekannten Umstände zu informieren, 
                  die für die Ausführung relevant sind (z.B. Asbest, Altlasten, besondere Gebäudebedingungen).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">4. Abnahme und Gewährleistung</h2>

                <h3 className="font-semibold mt-4 mb-2">§ 12 Abnahme (§ 640 BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftraggeber ist verpflichtet, das vertragsmäßig hergestellte Werk abzunehmen, sofern 
                  nicht nach der Beschaffenheit des Werkes die Abnahme ausgeschlossen ist.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Wegen unwesentlicher Mängel kann die Abnahme nicht verweigert werden.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Als abgenommen gilt ein Werk auch, wenn der Auftragnehmer dem Auftraggeber nach 
                  Fertigstellung eine angemessene Frist zur Abnahme gesetzt hat und der Auftraggeber die 
                  Abnahme nicht innerhalb dieser Frist unter Angabe mindestens eines Mangels verweigert hat 
                  (fiktive Abnahme gemäß § 640 Abs. 2 BGB).
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Mit der Abnahme gehen die Gefahr und die Beweislast auf den Auftraggeber über. Zudem 
                  werden die Gewährleistungsfristen in Gang gesetzt und die Schlussrechnung wird fällig.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 13 Gewährleistung (§§ 633, 634 BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftragnehmer gewährleistet, dass das Werk bei Abnahme frei von Sach- und Rechtsmängeln ist.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Die Gewährleistungsfrist beträgt gemäß § 634a Abs. 1 Nr. 2 BGB fünf (5) Jahre bei Bauwerken 
                  und Arbeiten an Bauwerken, beginnend mit der Abnahme.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Offensichtliche Mängel sind dem Auftragnehmer unverzüglich, spätestens jedoch innerhalb von 
                  zwei Wochen nach Abnahme schriftlich anzuzeigen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Bei Mängeln stehen dem Auftraggeber folgende Rechte zu (§ 634 BGB): Nacherfüllung verlangen, 
                  selbst beseitigen und Ersatz der erforderlichen Aufwendungen verlangen, vom Vertrag zurücktreten 
                  oder die Vergütung mindern, sowie Schadensersatz oder Ersatz vergeblicher Aufwendungen verlangen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (5) Der Auftraggeber hat dem Auftragnehmer zunächst Gelegenheit zur Nacherfüllung zu geben. Erst 
                  nach erfolglosem Fristablauf oder Verweigerung stehen dem Auftraggeber die weiteren Rechte zu.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 14 Haftung</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers 
                  oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Der Auftragnehmer haftet unbeschränkt für sonstige Schäden, die auf einer vorsätzlichen oder 
                  grob fahrlässigen Pflichtverletzung beruhen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die 
                  Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p className="text-muted-foreground mt-2">
                  (4) Die Haftung nach dem Produkthaftungsgesetz sowie aufgrund von Garantiezusagen bleibt unberührt.
                </p>
                <p className="text-muted-foreground mt-2">
                  (5) Der Auftragnehmer verfügt über eine Betriebshaftpflichtversicherung. Details zur Deckungssumme 
                  können auf Anfrage mitgeteilt werden.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">5. Kündigung und Beendigung</h2>

                <h3 className="font-semibold mt-4 mb-2">§ 15 Kündigung durch den Auftraggeber (§ 648 BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftraggeber kann den Vertrag jederzeit bis zur Vollendung des Werkes kündigen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Bei Kündigung ist der Auftragnehmer berechtigt, die vereinbarte Vergütung zu verlangen, muss 
                  sich jedoch dasjenige anrechnen lassen, was er infolge der Aufhebung an Aufwendungen erspart oder 
                  durch anderweitige Verwendung seiner Arbeitskraft erwirbt.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 16 Kündigung aus wichtigem Grund (§ 648a BGB)</h3>
                <p className="text-muted-foreground">
                  (1) Beide Vertragsparteien können den Vertrag aus wichtigem Grund ohne Einhaltung einer 
                  Kündigungsfrist kündigen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Ein wichtiger Grund liegt vor, wenn dem kündigenden Teil unter Berücksichtigung aller 
                  Umstände und unter Abwägung der beiderseitigen Interessen die Fortsetzung des Vertragsverhältnisses 
                  nicht zugemutet werden kann.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Nach der Kündigung können beide Parteien verlangen, dass der Zustand des Werkes gemeinsam 
                  festgestellt wird.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">6. Sonstige Bestimmungen</h2>

                <h3 className="font-semibold mt-4 mb-2">§ 17 Eigentumsvorbehalt</h3>
                <p className="text-muted-foreground">
                  (1) Bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsverbindung verbleiben 
                  gelieferte Materialien und Waren im Eigentum des Auftragnehmers.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Bei vertragswidrigem Verhalten des Auftraggebers, insbesondere bei Zahlungsverzug, ist der 
                  Auftragnehmer berechtigt, die Vorbehaltsware zurückzufordern.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 18 Datenschutz</h3>
                <p className="text-muted-foreground">
                  (1) Der Auftragnehmer erhebt und verarbeitet personenbezogene Daten des Auftraggebers im Rahmen 
                  der Vertragserfüllung gemäß Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Weitere Informationen zur Datenverarbeitung finden sich in unserer{" "}
                  <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                    Datenschutzerklärung
                  </Link>.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 19 Streitschlichtung</h3>
                <p className="text-muted-foreground">
                  (1) Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" 
                     className="text-primary underline hover:no-underline">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Der Auftragnehmer ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                <p className="text-muted-foreground mt-2">
                  (3) Bei Streitigkeiten aus Bauverträgen kann die Schlichtungsstelle der Handwerkskammer München 
                  angerufen werden.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 20 Schriftform und Textform</h3>
                <p className="text-muted-foreground">
                  (1) Änderungen und Ergänzungen dieses Vertrages bedürfen zu ihrer Wirksamkeit der Textform 
                  (§ 126b BGB). Dies gilt auch für die Abbedingung dieser Schriftformklausel.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Mündliche Nebenabreden sind nur wirksam, wenn sie schriftlich bestätigt werden.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 21 Anwendbares Recht und Gerichtsstand</h3>
                <p className="text-muted-foreground">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist, soweit gesetzlich 
                  zulässig, München. Bei Verbrauchern gilt der gesetzliche Gerichtsstand.
                </p>

                <h3 className="font-semibold mt-4 mb-2">§ 22 Salvatorische Klausel</h3>
                <p className="text-muted-foreground">
                  (1) Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so bleibt der Vertrag im 
                  Übrigen wirksam.
                </p>
                <p className="text-muted-foreground mt-2">
                  (2) Anstelle der unwirksamen Bestimmung gilt eine dem wirtschaftlichen Zweck der unwirksamen 
                  Bestimmung möglichst nahekommende wirksame Regelung als vereinbart.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">7. Wichtige gesetzliche Hinweise</h2>
                <p className="text-muted-foreground font-semibold">Zusammenfassung der relevanten Gesetze (Stand 2026)</p>

                <div className="mt-4 space-y-3 text-muted-foreground">
                  <p>
                    <strong>Werkvertragsrecht (§§ 631-651 BGB):</strong> Grundlagen für alle Werkverträge: Vergütung, 
                    Abnahme, Gewährleistung, Kündigung.
                  </p>
                  <p>
                    <strong>Bauvertragsrecht (§§ 650a-650h BGB) – seit 01.01.2018:</strong> Spezielle Regelungen für 
                    Bauverträge: Anordnungsrecht (§ 650b), Vergütungsanpassung (§ 650c), Kündigung aus wichtigem Grund 
                    (§ 648a), Zustandsfeststellung (§ 650g).
                  </p>
                  <p>
                    <strong>Verbraucherbauvertrag (§§ 650i-650n BGB):</strong> Besonderer Schutz für Verbraucher: 
                    Baubeschreibung (§ 650j), 14-Tage-Widerrufsrecht (§ 650h), max. 90% Abschlagszahlungen (§ 650m), 
                    Unterlagenzugang (§ 650n).
                  </p>
                  <p>
                    <strong>AGB-Recht (§§ 305-310 BGB):</strong> Einbeziehung, Inhaltskontrolle, Klauselverbote. 
                    Transparenzgebot und Verbot überraschender Klauseln.
                  </p>
                  <p>
                    <strong>Gewährleistungsfristen (§ 634a BGB):</strong> 5 Jahre bei Bauwerken (ab Abnahme), 2 Jahre 
                    bei sonstigen Werken.
                  </p>
                  <p>
                    <strong>Datenschutz (DSGVO, BDSG):</strong> Datenschutzerklärung, Einwilligung, Betroffenenrechte, 
                    Auftragsverarbeitung.
                  </p>
                  <p>
                    <strong>Fernabsatzrecht (§§ 312-312k BGB):</strong> Widerrufsrecht bei außerhalb von Geschäftsräumen 
                    geschlossenen Verträgen.
                  </p>
                  <p>
                    <strong>VOB/B 2019:</strong> Vergabe- und Vertragsordnung für Bauleistungen – bei B2B-Verträgen 
                    als Ergänzung vereinbar.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026<br />
                  Diese AGB wurden gemäß den aktuellen Anforderungen für das Baugewerbe und Verbraucherschutzrecht 2026 erstellt.
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
