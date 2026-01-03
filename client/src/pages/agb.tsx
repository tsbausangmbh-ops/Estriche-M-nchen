import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="text-muted-foreground mb-8">
            der Estrich München GmbH für Estrich- und Bodenarbeiten<br />
            <span className="text-sm">Gemäß BGB Bauvertragsrecht (§§ 650a–650o BGB) in der aktuellen Fassung</span>
          </p>
          
          <Card className="mb-6">
            <CardContent className="p-6 space-y-8">
              
              <div>
                <h2 className="text-xl font-bold mb-3">§ 1 Geltungsbereich und Vertragsart</h2>
                <p className="text-muted-foreground">
                  (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der 
                  Estrich München GmbH (nachfolgend „Auftragnehmer") und dem Kunden (nachfolgend „Auftraggeber") 
                  über Estrich-, Boden- und Dämmarbeiten sowie damit verbundene Leistungen.
                  <br /><br />
                  (2) Bei den von uns erbrachten Leistungen handelt es sich um Bauverträge im Sinne des 
                  § 650a BGB. Es gelten daher die besonderen Vorschriften des Bauvertragsrechts 
                  (§§ 650a–650o BGB) in der jeweils aktuellen Fassung.
                  <br /><br />
                  (3) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der 
                  Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                  <br /><br />
                  (4) Diese AGB gelten sowohl gegenüber Verbrauchern als auch gegenüber Unternehmern, 
                  es sei denn, in der jeweiligen Klausel wird eine Differenzierung vorgenommen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 2 Vertragsschluss und Angebot</h2>
                <p className="text-muted-foreground">
                  (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                  als verbindlich gekennzeichnet sind.
                  <br /><br />
                  (2) Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch 
                  Beginn der Ausführung der Arbeiten zustande.
                  <br /><br />
                  (3) Festpreisangebote sind bindend für den angegebenen Zeitraum, in der Regel 30 Tage 
                  ab Angebotsdatum. Sie basieren auf den bei der Besichtigung festgestellten Gegebenheiten.
                  <br /><br />
                  (4) Ändern sich die Gegebenheiten zwischen Besichtigung und Ausführung wesentlich, 
                  behalten wir uns eine Anpassung des Angebots vor.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 3 Leistungsumfang</h2>
                <p className="text-muted-foreground">
                  (1) Der Umfang der Leistungen ergibt sich aus dem schriftlichen Angebot bzw. der 
                  Auftragsbestätigung. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
                  <br /><br />
                  (2) Zusätzliche Leistungen, die während der Ausführung erforderlich werden und nicht 
                  im ursprünglichen Angebot enthalten sind, werden gesondert berechnet. Der Auftraggeber 
                  wird hierüber vorab informiert.
                  <br /><br />
                  (3) Die Ausführung erfolgt nach den anerkannten Regeln der Technik, insbesondere nach 
                  den einschlägigen DIN-Normen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 3a Änderungen und Anordnungsrecht (§§ 650b, 650c BGB)</h2>
                <p className="text-muted-foreground">
                  (1) <strong>Änderungswünsche des Auftraggebers:</strong> Wünscht der Auftraggeber eine 
                  Änderung des vereinbarten Leistungsumfangs oder eine Anpassung zur Erreichung des 
                  vereinbarten Werkerfolgs (§ 650b Abs. 1 BGB), unterbreiten wir nach Prüfung ein 
                  entsprechendes Angebot über die Mehr- oder Mindervergütung.
                  <br /><br />
                  (2) <strong>Anordnungsrecht:</strong> Sofern keine Einigung zustande kommt, kann der 
                  Auftraggeber die Änderung in Textform anordnen (§ 650b Abs. 2 BGB), soweit die 
                  Änderung zumutbar ist. Wir sind an die Anordnung gebunden.
                  <br /><br />
                  (3) <strong>Vergütungsanpassung nach § 650c BGB:</strong> Im Fall einer Anordnung nach 
                  § 650b Abs. 2 BGB wird die Vergütung für den vermehrten oder verminderten Aufwand 
                  nach den tatsächlich erforderlichen Kosten mit angemessenen Zuschlägen für 
                  allgemeine Geschäftskosten, Wagnis und Gewinn ermittelt. Alternativ kann die 
                  Vergütung auf Grundlage der ursprünglichen Preisvereinbarung (Urkalkulation) 
                  fortgeschrieben werden.
                  <br /><br />
                  (4) <strong>80%-Abschlagszahlung:</strong> Für den infolge einer Anordnung vermehrten 
                  Aufwand kann der Auftragnehmer gemäß § 650c Abs. 3 BGB eine Abschlagszahlung in 
                  Höhe von 80% einer nach den Grundsätzen des Absatzes 1 erstellten Aufstellung 
                  verlangen.
                  <br /><br />
                  (5) <strong>Einstweilige Verfügung:</strong> Der Auftragnehmer kann zur Durchsetzung 
                  des Vergütungsanspruchs gemäß § 650d BGB eine einstweilige Verfügung auch ohne 
                  Glaubhaftmachung der Eilbedürftigkeit beantragen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
                <p className="text-muted-foreground">
                  (1) Der Auftraggeber hat sicherzustellen, dass:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>der Untergrund für die Estricharbeiten ordnungsgemäß vorbereitet ist</li>
                  <li>erforderliche Anschlüsse für Wasser und Strom vorhanden sind</li>
                  <li>die Arbeitsflächen frei zugänglich und geräumt sind</li>
                  <li>witterungsbedingte Voraussetzungen (Temperatur, Feuchtigkeit) gegeben sind</li>
                  <li>notwendige Genehmigungen vorliegen</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  (2) Verzögerungen durch mangelhafte Mitwirkung des Auftraggebers berechtigen den 
                  Auftragnehmer zur Terminverschiebung und ggf. zur Geltendmachung von Mehrkosten.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 5 Preise und Zahlungsbedingungen</h2>
                <p className="text-muted-foreground">
                  (1) Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer, 
                  sofern nicht anders angegeben.
                  <br /><br />
                  (2) Bei Aufträgen über 5.000 € netto kann eine Anzahlung von bis zu 30% des 
                  Auftragswertes vereinbart werden.
                  <br /><br />
                  (3) Die Schlusszahlung ist innerhalb von 14 Tagen nach Rechnungsstellung ohne 
                  Abzug fällig, sofern nicht anders vereinbart.
                  <br /><br />
                  (4) Bei Zahlungsverzug werden Verzugszinsen in gesetzlicher Höhe berechnet 
                  (Verbraucher: 5 Prozentpunkte über Basiszins, Unternehmer: 9 Prozentpunkte über Basiszins).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 6 Ausführungsfristen</h2>
                <p className="text-muted-foreground">
                  (1) Vereinbarte Termine und Fristen sind verbindlich. Termine für den Arbeitsbeginn 
                  werden nach Auftragserteilung abgestimmt.
                  <br /><br />
                  (2) Bei Verzögerungen durch höhere Gewalt, unvorhersehbare Hindernisse oder durch 
                  den Auftraggeber zu vertretende Umstände verlängern sich die Fristen entsprechend.
                  <br /><br />
                  (3) Der Auftragnehmer informiert den Auftraggeber unverzüglich über absehbare 
                  Verzögerungen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 7 Abnahme (§ 640 BGB)</h2>
                <p className="text-muted-foreground">
                  (1) Nach Fertigstellung der Arbeiten erfolgt eine gemeinsame Abnahme gemäß § 640 BGB. 
                  Der Auftraggeber ist verpflichtet, innerhalb von 12 Werktagen nach Fertigstellungsanzeige 
                  die Abnahme durchzuführen.
                  <br /><br />
                  (2) <strong>Fiktive Abnahme:</strong> Erklärt der Auftraggeber nicht innerhalb einer vom 
                  Auftragnehmer gesetzten angemessenen Frist, ob er das Werk abnimmt, und liegt kein 
                  wesentlicher Mangel vor, gilt das Werk als abgenommen (§ 640 Abs. 2 BGB).
                  <br /><br />
                  (3) Die Abnahme gilt auch als erfolgt, wenn der Auftraggeber die Leistung nutzt oder den 
                  Bodenbelag verlegen lässt, ohne wesentliche Mängel gerügt zu haben.
                  <br /><br />
                  (4) <strong>Zustandsfeststellung bei Verweigerung:</strong> Verweigert der Auftraggeber 
                  die Abnahme unter Angabe von Mängeln, kann auf Verlangen einer Partei eine gemeinsame 
                  Zustandsfeststellung durchgeführt werden (§ 650g BGB).
                  <br /><br />
                  (5) Etwaige Mängel sind bei der Abnahme schriftlich festzuhalten. Dem Auftraggeber 
                  steht bei einem wesentlichen Mangel ein Leistungsverweigerungsrecht zu, dessen Höhe 
                  in der Regel dem Doppelten der voraussichtlichen Mängelbeseitigungskosten entspricht.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 8 Gewährleistung</h2>
                <p className="text-muted-foreground">
                  (1) Die Gewährleistungsfrist beträgt 5 Jahre ab Abnahme (§ 634a BGB).
                  <br /><br />
                  (2) Mängelansprüche setzen voraus, dass der Auftraggeber seiner Untersuchungs- und 
                  Rügepflicht ordnungsgemäß nachgekommen ist. Erkennbare Mängel sind unverzüglich, 
                  spätestens bei der Abnahme, zu rügen.
                  <br /><br />
                  (3) Bei berechtigten Mängelrügen wird der Auftragnehmer nach seiner Wahl nachbessern 
                  oder Ersatzleistung erbringen.
                  <br /><br />
                  (4) Die Gewährleistung erstreckt sich nicht auf Schäden durch:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
                  <li>unsachgemäße Behandlung oder Nutzung durch den Auftraggeber</li>
                  <li>Einwirkungen Dritter</li>
                  <li>Nichteinhaltung der Trocknungszeiten</li>
                  <li>vorzeitige Belastung oder Beheizung</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 9 Haftung</h2>
                <p className="text-muted-foreground">
                  (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, 
                  des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
                  <br /><br />
                  (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung 
                  auf den vertragstypisch vorhersehbaren Schaden begrenzt.
                  <br /><br />
                  (3) Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen, soweit 
                  gesetzlich zulässig.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 10 Eigentumsvorbehalt</h2>
                <p className="text-muted-foreground">
                  Bis zur vollständigen Bezahlung aller Forderungen aus dem Vertragsverhältnis behält 
                  sich der Auftragnehmer das Eigentum an den gelieferten Materialien vor, soweit diese 
                  noch nicht mit dem Bauwerk verbunden sind.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 11 Datenschutz</h2>
                <p className="text-muted-foreground">
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung 
                  und im Einklang mit der DSGVO (EU) 2016/679. Die Datenschutzerklärung ist auf unserer 
                  Website abrufbar.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 12 Schlussbestimmungen</h2>
                <p className="text-muted-foreground">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                  <br /><br />
                  (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist, soweit 
                  gesetzlich zulässig, München.
                  <br /><br />
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die 
                  Wirksamkeit der übrigen Bestimmungen unberührt.
                  <br /><br />
                  (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 13 Hinweise für Verbraucher</h2>
                <p className="text-muted-foreground">
                  (1) Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag 
                  zu widerrufen, sofern die Arbeiten noch nicht begonnen haben.
                  <br /><br />
                  (2) Das Widerrufsrecht erlischt bei Verträgen über Dienstleistungen vorzeitig, wenn 
                  wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der 
                  Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung 
                  gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr 
                  Widerrufsrecht bei vollständiger Vertragserfüllung verlieren.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">§ 14 Besondere Bestimmungen für Verbraucherbauverträge (§ 650i–650o BGB)</h2>
                <p className="text-muted-foreground">
                  (1) <strong>Anwendungsbereich:</strong> Ist der Auftraggeber Verbraucher und umfassen die 
                  beauftragten Arbeiten erhebliche Umbaumaßnahmen an einem bestehenden Gebäude, gelten 
                  zusätzlich die §§ 650i–650o BGB (Verbraucherbauvertrag).
                  <br /><br />
                  (2) <strong>Baubeschreibung:</strong> Bei Verbraucherbauverträgen erhält der Auftraggeber 
                  rechtzeitig vor Vertragsschluss eine Baubeschreibung gemäß § 650j BGB mit den wesentlichen 
                  Eigenschaften der Bauleistung.
                  <br /><br />
                  (3) <strong>Widerrufsrecht:</strong> Dem Verbraucher steht ein Widerrufsrecht nach 
                  § 650l BGB zu. Die Widerrufsfrist beträgt vierzehn Tage ab Vertragsschluss. Bei 
                  Fernabsatzverträgen beginnt die Frist nicht vor Erfüllung der Informationspflichten.
                  <br /><br />
                  (4) <strong>Abschlagszahlungen:</strong> Abschlagszahlungen dürfen gemäß § 650m BGB 
                  maximal 90% der Gesamtvergütung betragen. Zudem kann der Auftragnehmer bei der 
                  ersten Abschlagszahlung eine Sicherheit für die rechtzeitige Zahlung verlangen.
                  <br /><br />
                  (5) <strong>Fertigstellungssicherheit:</strong> Der Auftraggeber kann bei einem 
                  Verbraucherbauvertrag gemäß § 650m Abs. 2 BGB eine Sicherheit in Höhe von 5% der 
                  Vergütung für die rechtzeitige Herstellung des Werks ohne wesentliche Mängel verlangen.
                  <br /><br />
                  (6) <strong>Erstellung von Unterlagen:</strong> Der Auftragnehmer erstellt und übergibt 
                  dem Auftraggeber gemäß § 650n BGB rechtzeitig vor Beginn der Ausführung die Unterlagen, 
                  die dieser benötigt, um gegenüber Behörden den Nachweis führen zu können.
                </p>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026<br />
                  Rechtsgrundlagen: BGB Bauvertragsrecht (§§ 650a–650o BGB) in der Fassung vom 01.01.2018, 
                  zuletzt geändert durch Gesetz vom 10.08.2021, VOB/B, DSGVO
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
