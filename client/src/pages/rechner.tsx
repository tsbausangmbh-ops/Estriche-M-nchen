import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { 
  Calculator, 
  ChevronRight, 
  Info, 
  Phone,
  Layers,
  Thermometer,
  Volume2,
  Truck,
  Wrench,
  AlertTriangle
} from "lucide-react";
import heroImage from "@assets/generated_images/workers_checking_level_blue.png";

const estrichTypes = [
  { value: "zementestrich", label: "Zementestrich (CT)", basePrice: 32, description: "Klassiker für Wohnbau" },
  { value: "calciumsulfat", label: "Calciumsulfatestrich (CA)", basePrice: 38, description: "Ideal für Fußbodenheizung" },
  { value: "fliessestrich", label: "Fließestrich", basePrice: 42, description: "Selbstnivellierend" },
  { value: "schnellestrich", label: "Schnellestrich", basePrice: 48, description: "Schnell belegreif" },
  { value: "industrieestrich", label: "Industrieestrich", basePrice: 65, description: "Hochbelastbar" },
];

const thicknessOptions = [
  { value: "45", label: "45 mm (Standard)", multiplier: 1.0 },
  { value: "55", label: "55 mm", multiplier: 1.15 },
  { value: "65", label: "65 mm", multiplier: 1.30 },
  { value: "75", label: "75 mm", multiplier: 1.45 },
  { value: "85", label: "85 mm und mehr", multiplier: 1.60 },
];

const floorOptions = [
  { value: "eg", label: "Erdgeschoss", surcharge: 0 },
  { value: "1og", label: "1. Obergeschoss", surcharge: 2 },
  { value: "2og", label: "2. Obergeschoss", surcharge: 4 },
  { value: "3og", label: "3. Obergeschoss", surcharge: 6 },
  { value: "4og", label: "4. OG oder höher", surcharge: 10 },
  { value: "keller", label: "Keller", surcharge: 3 },
];

const additionalOptions = [
  { id: "trittschall", label: "Trittschalldämmung", price: 12, icon: Volume2, description: "20-40mm Dämmung" },
  { id: "waermedaemmung", label: "Wärmedämmung", price: 18, icon: Thermometer, description: "60-100mm EPS/XPS" },
  { id: "heizung", label: "Fußbodenheizung-Vorbereitung", price: 8, icon: Thermometer, description: "Heizrohr-Einbettung" },
  { id: "randdaemmstreifen", label: "Randdämmstreifen", price: 2.5, icon: Layers, description: "Umlaufend verlegt" },
  { id: "grundierung", label: "Grundierung Untergrund", price: 4, icon: Wrench, description: "Haftvermittlung" },
  { id: "folie", label: "PE-Folie/Dampfsperre", price: 2, icon: Layers, description: "Feuchtigkeitsschutz" },
];

export default function Rechner() {
  const [squareMeters, setSquareMeters] = useState<string>("100");
  const [estrichType, setEstrichType] = useState<string>("zementestrich");
  const [thickness, setThickness] = useState<string>("45");
  const [floor, setFloor] = useState<string>("eg");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const sqm = parseFloat(squareMeters) || 0;
    if (sqm <= 0) return { min: 0, max: 0, breakdown: [] };

    const selectedEstrich = estrichTypes.find(e => e.value === estrichType);
    const selectedThickness = thicknessOptions.find(t => t.value === thickness);
    const selectedFloor = floorOptions.find(f => f.value === floor);

    if (!selectedEstrich || !selectedThickness || !selectedFloor) {
      return { min: 0, max: 0, breakdown: [] };
    }

    const breakdown: { label: string; amount: number }[] = [];

    const basePrice = selectedEstrich.basePrice * selectedThickness.multiplier;
    const estrichCost = sqm * basePrice;
    breakdown.push({ label: `${selectedEstrich.label} (${sqm} m²)`, amount: estrichCost });

    const floorSurcharge = sqm * selectedFloor.surcharge;
    if (floorSurcharge > 0) {
      breakdown.push({ label: `Stockwerkzuschlag (${selectedFloor.label})`, amount: floorSurcharge });
    }

    let optionsCost = 0;
    selectedOptions.forEach(optionId => {
      const option = additionalOptions.find(o => o.id === optionId);
      if (option) {
        const cost = sqm * option.price;
        optionsCost += cost;
        breakdown.push({ label: option.label, amount: cost });
      }
    });

    const anfahrt = 55;
    breakdown.push({ label: "Anfahrt München", amount: anfahrt });

    const baustelleneinrichtung = sqm >= 50 ? 450 : 280;
    breakdown.push({ label: "Baustelleneinrichtung", amount: baustelleneinrichtung });

    const subtotal = estrichCost + floorSurcharge + optionsCost + anfahrt + baustelleneinrichtung;
    
    const minTotal = Math.round(subtotal * 0.85);
    const maxTotal = Math.round(subtotal * 1.15);

    return { min: minTotal, max: maxTotal, breakdown, subtotal: Math.round(subtotal) };
  };

  const result = calculatePrice();

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 border-white/30 text-white">
              <Calculator className="w-3 h-3 mr-1" />
              Kostenrechner
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Estrich-Kostenrechner
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Berechnen Sie unverbindlich die ungefähren Kosten für Ihr Estrich-Projekt. 
              Für ein verbindliches Angebot kontaktieren Sie uns – kostenlos und ohne Verpflichtung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Grunddaten
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="sqm">Fläche in Quadratmetern (m²)</Label>
                    <Input
                      id="sqm"
                      type="number"
                      min="1"
                      placeholder="z.B. 100"
                      value={squareMeters}
                      onChange={(e) => setSquareMeters(e.target.value)}
                      className="mt-1"
                      data-testid="input-calculator-sqm"
                    />
                  </div>

                  <div>
                    <Label>Estrich-Typ</Label>
                    <Select value={estrichType} onValueChange={setEstrichType}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-estrich">
                        <SelectValue placeholder="Estrich-Typ wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {estrichTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{type.label}</span>
                              <span className="text-xs text-muted-foreground ml-2">ab {type.basePrice} €/m²</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Estrichstärke</Label>
                    <Select value={thickness} onValueChange={setThickness}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-thickness">
                        <SelectValue placeholder="Stärke wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {thicknessOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Stockwerk</Label>
                    <Select value={floor} onValueChange={setFloor}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-floor">
                        <SelectValue placeholder="Stockwerk wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {floorOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label} {option.surcharge > 0 && `(+${option.surcharge} €/m²)`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Zusatzleistungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {additionalOptions.map((option) => (
                      <div 
                        key={option.id} 
                        className="flex items-start space-x-3 p-3 rounded-md border hover:bg-accent/50 transition-colors cursor-pointer"
                        onClick={() => toggleOption(option.id)}
                      >
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onCheckedChange={() => toggleOption(option.id)}
                          data-testid={`checkbox-${option.id}`}
                        />
                        <div className="flex-1">
                          <Label htmlFor={option.id} className="font-medium cursor-pointer">
                            {option.label}
                          </Label>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                          <p className="text-xs font-medium text-primary mt-1">+{option.price} €/m²</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="w-full"
                onClick={handleCalculate}
                data-testid="button-calculate"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Kosten berechnen
              </Button>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-4 space-y-4">
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Geschätzte Kosten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showResult && parseFloat(squareMeters) > 0 ? (
                      <div className="space-y-4">
                        <div className="text-center py-4 bg-primary/5 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Preisrahmen (ca.)</p>
                          <p className="text-3xl font-bold text-primary" data-testid="text-price-range">
                            {result.min.toLocaleString('de-DE')} – {result.max.toLocaleString('de-DE')} €
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">inkl. MwSt.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium">Kostenaufstellung:</p>
                          {result.breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.label}</span>
                              <span>{item.amount.toLocaleString('de-DE')} €</span>
                            </div>
                          ))}
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-medium">
                              <span>Zwischensumme</span>
                              <span>{result.subtotal?.toLocaleString('de-DE')} €</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-md text-amber-800 dark:text-amber-200">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <p className="text-xs">
                            Diese Berechnung dient nur zur Orientierung. Der tatsächliche Preis kann je nach 
                            Untergrund, Zugänglichkeit und weiteren Faktoren abweichen.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">
                          Geben Sie Ihre Projektdaten ein und klicken Sie auf "Kosten berechnen"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-foreground text-primary-foreground">
                  <CardContent className="p-5 space-y-4">
                    <h3 className="font-bold">Verbindliches Angebot gewünscht?</h3>
                    <p className="text-sm text-primary-foreground/70">
                      Für einen verbindlichen Festpreis kommen wir kostenlos zu Ihnen und erstellen 
                      ein individuelles Angebot – ohne Verpflichtung.
                    </p>
                    <div className="space-y-2">
                      <Link href="/angebot">
                        <Button variant="secondary" className="w-full" data-testid="button-request-quote">
                          Kostenloses Angebot anfordern
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                        asChild
                      >
                        <a href="tel:+4989444438872" data-testid="button-calculator-call">
                          <Phone className="mr-2 h-4 w-4" />
                          089 444438872
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex items-start gap-2 p-4 bg-muted rounded-lg">
                  <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p><strong>Hinweis:</strong> Alle Preise verstehen sich als unverbindliche Richtwerte ohne Gewähr.</p>
                    <p>Der tatsächliche Preis wird nach einer kostenlosen Vor-Ort-Besichtigung ermittelt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Kostenrechner</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Warum nur ein Richtwert? – Ehrlichkeit statt falscher Versprechen
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Sie haben gerade unseren Kostenrechner genutzt – und vielleicht fragen Sie sich: „Warum kann 
                mir niemand einfach einen festen Preis sagen?" Diese Frage ist berechtigt, und Sie verdienen 
                eine ehrliche Antwort.
              </p>

              <p>
                <strong>Die Wahrheit ist: Jedes Bauprojekt ist einzigartig.</strong> Selbst wenn zwei Räume 
                exakt gleich groß sind, können die Kosten völlig unterschiedlich ausfallen. Der Untergrund 
                spielt eine Rolle, die Zugänglichkeit, die vorhandene Bausubstanz, die Jahreszeit, und 
                dutzende weitere Faktoren, die man aus der Ferne nicht beurteilen kann.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Was der Rechner kann – und was nicht</h3>

              <p>
                Unser Kostenrechner gibt Ihnen eine erste Orientierung. Er basiert auf unseren durchschnittlichen 
                Preisen für Projekte in München und Umgebung. Wenn Sie 100 Quadratmeter Zementestrich im 
                Erdgeschoss verlegen lassen möchten, zeigt er Ihnen einen realistischen Preisrahmen.
              </p>

              <p>
                Was er nicht kann: Er kennt Ihren Untergrund nicht. Er weiß nicht, ob der Zugang zur Baustelle 
                einfach oder schwierig ist. Er kann nicht sehen, ob Höhenunterschiede ausgeglichen werden müssen. 
                Er berücksichtigt keine besonderen Anforderungen, die Sie vielleicht haben.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Warum wir keinen Online-Festpreis nennen</h3>

              <p>
                Manche Anbieter werben mit Online-Festpreisen. Das klingt verlockend – aber seien Sie vorsichtig. 
                Entweder sind diese Preise so hoch angesetzt, dass sie jeden Untergrund und jede Schwierigkeit 
                abdecken (und Sie zahlen für Probleme, die Sie gar nicht haben). Oder sie sind zu niedrig – 
                und dann kommen die Nachforderungen, sobald die Arbeiter auf der Baustelle stehen.
              </p>

              <p>
                <strong>Wir wählen einen anderen Weg: Ehrlichkeit von Anfang an.</strong> Der Rechner gibt 
                Ihnen eine realistische Spanne. Für einen verbindlichen Preis kommen wir zu Ihnen – kostenlos 
                und unverbindlich. Wir schauen uns alles an, stellen Fragen, verstehen Ihr Projekt. Und dann 
                bekommen Sie einen Preis, der steht.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Die Vorteile einer Vor-Ort-Besichtigung</h3>

              <p>
                Bei der kostenlosen Besichtigung passiert mehr als nur Messen. Wir beraten Sie, welche 
                Estrich-Art für Ihren Zweck am besten geeignet ist. Wir erkennen potenzielle Probleme, 
                bevor sie teuer werden. Wir sprechen über Ihren Zeitplan und wie er mit unserem harmoniert.
              </p>

              <p>
                Und am Ende haben Sie etwas Wertvolles: Einen verbindlichen Festpreis, schwarz auf weiß, 
                ohne Hintertürchen. Einen Preis, der sich nicht ändert – egal was passiert. 
                <strong>Das ist unser Versprechen.</strong>
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Der nächste Schritt</h3>

              <p>
                Sie haben jetzt eine Orientierung, was Ihr Projekt ungefähr kosten könnte. Der Rechner hat 
                seinen Zweck erfüllt. Wenn Sie es genau wissen möchten – und wenn Sie einen Partner suchen, 
                der zu seinem Wort steht – dann sprechen Sie mit uns.
              </p>

              <p>
                Ein Anruf, eine E-Mail, ein Formular – mehr braucht es nicht. Wir melden uns schnell zurück, 
                vereinbaren einen Termin nach Ihrem Zeitplan, und schon bald halten Sie ein Angebot in der 
                Hand, auf das Sie sich verlassen können.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-nlp-cta">
                  Jetzt verbindliches Angebot anfordern
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

      <Footer />
    </div>
  );
}
