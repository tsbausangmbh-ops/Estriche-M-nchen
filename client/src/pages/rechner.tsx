import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
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
  AlertTriangle,
  Send,
  CheckCircle2
} from "lucide-react";
import heroImage from "@assets/generated_images/worker_calculating_costs_on_tablet.png";

const budgetContactSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type BudgetContactFormData = z.infer<typeof budgetContactSchema>;

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

const speedOptions = [
  { value: "standard", label: "Standard (ca. 28 Tage)", surcharge: 0 },
  { value: "14tage", label: "Schnell verlegereif (14 Tage)", surcharge: 8 },
  { value: "7tage", label: "Express verlegereif (7 Tage)", surcharge: 15 },
];

const additionalOptions = [
  { id: "trittschall", label: "Trittschalldämmung", price: 12, icon: Volume2, description: "20-40mm Dämmung", required: false },
  { id: "waermedaemmung", label: "Wärmedämmung", price: 18, icon: Thermometer, description: "60-100mm EPS/XPS", required: false },
  { id: "heizung", label: "Fußbodenheizung-Vorbereitung", price: 8, icon: Thermometer, description: "Heizrohr-Einbettung", required: false },
  { id: "randdaemmstreifen", label: "Randdämmstreifen", price: 2.5, icon: Layers, description: "Umlaufend verlegt", required: false },
  { id: "grundierung", label: "Grundierung Untergrund", price: 4, icon: Wrench, description: "Haftvermittlung", required: false },
  { id: "folie", label: "PE-Folie/Dampfsperre", price: 2, icon: Layers, description: "Feuchtigkeitsschutz", required: false },
  { id: "baustelleneinrichtung", label: "Baustelleneinrichtung", price: 4.5, icon: Truck, description: "Immer inklusive", required: true },
  { id: "reinigung", label: "Baustellenreinigung", price: 2.8, icon: Wrench, description: "Immer inklusive", required: true },
];

export default function Rechner() {
  const { toast } = useToast();
  const [squareMeters, setSquareMeters] = useState<string>("100");
  const [estrichType, setEstrichType] = useState<string>("zementestrich");
  const [thickness, setThickness] = useState<string>("45");
  const [floor, setFloor] = useState<string>("eg");
  const [speed, setSpeed] = useState<string>("standard");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["baustelleneinrichtung", "reinigung"]);
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<BudgetContactFormData>({
    resolver: zodResolver(budgetContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      privacyConsent: false,
    },
  });

  const generateBudgetSummary = () => {
    const selectedEstrich = estrichTypes.find(e => e.value === estrichType);
    const selectedThickness = thicknessOptions.find(t => t.value === thickness);
    const selectedFloor = floorOptions.find(f => f.value === floor);
    const selectedSpeed = speedOptions.find(s => s.value === speed);
    const sqm = parseFloat(squareMeters) || 0;
    const result = calculatePrice();

    const optionsList = selectedOptions
      .map(id => additionalOptions.find(o => o.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    return `
BUDGETRECHNER-ERGEBNIS
======================
Geschätzter Preisrahmen: ${result.min.toLocaleString('de-DE')} – ${result.max.toLocaleString('de-DE')} € netto

PROJEKTDETAILS:
- Fläche: ${sqm} m²
- Estrich-Typ: ${selectedEstrich?.label || estrichType}
- Stärke: ${selectedThickness?.label || thickness}
- Stockwerk: ${selectedFloor?.label || floor}
- Trocknungszeit: ${selectedSpeed?.label || speed}
- Zusatzleistungen: ${optionsList || "Keine"}

KOSTENAUFSTELLUNG:
${result.breakdown.map(item => `- ${item.label}: ${item.amount.toLocaleString('de-DE')} €`).join('\n')}

Zwischensumme: ${result.subtotal?.toLocaleString('de-DE')} € netto
Preisrahmen: ${result.min.toLocaleString('de-DE')} – ${result.max.toLocaleString('de-DE')} € netto

Hinweis: Diese Berechnung dient nur zur Orientierung. Der tatsächliche Preis wird nach einer Vor-Ort-Besichtigung ermittelt.
    `.trim();
  };

  const contactMutation = useMutation({
    mutationFn: async (data: BudgetContactFormData) => {
      const selectedEstrich = estrichTypes.find(e => e.value === estrichType);
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        projectType: "Budgetrechner-Anfrage",
        estrichType: selectedEstrich?.label || estrichType,
        squareMeters: parseInt(squareMeters) || null,
        floor: floor,
        message: data.message || "Anfrage über Budgetrechner",
        budgetSummary: generateBudgetSummary(),
      };
      return apiRequest("POST", "/api/contact", payload);
    },
    onSuccess: () => {
      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir haben Ihre Budgetberechnung erhalten und melden uns innerhalb von 24 Stunden.",
      });
      form.reset();
      setFormSubmitted(true);
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BudgetContactFormData) => {
    contactMutation.mutate(data);
  };

  const calculatePrice = () => {
    const sqm = parseFloat(squareMeters) || 0;
    if (sqm <= 0) return { min: 0, max: 0, breakdown: [] };

    const selectedEstrich = estrichTypes.find(e => e.value === estrichType);
    const selectedThickness = thicknessOptions.find(t => t.value === thickness);
    const selectedFloor = floorOptions.find(f => f.value === floor);
    const selectedSpeed = speedOptions.find(s => s.value === speed);

    if (!selectedEstrich || !selectedThickness || !selectedFloor || !selectedSpeed) {
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

    const speedSurcharge = sqm * selectedSpeed.surcharge;
    if (speedSurcharge > 0) {
      breakdown.push({ label: `Schnellzuschlag (${selectedSpeed.label})`, amount: speedSurcharge });
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

    const subtotal = estrichCost + floorSurcharge + speedSurcharge + optionsCost + anfahrt;
    
    const minTotal = Math.round(subtotal * 0.85);
    const maxTotal = Math.round(subtotal * 1.15);

    return { min: minTotal, max: maxTotal, breakdown, subtotal: Math.round(subtotal) };
  };

  const result = calculatePrice();

  const toggleOption = (optionId: string) => {
    const option = additionalOptions.find(o => o.id === optionId);
    if (option?.required) return;
    
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

      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Budgetrechner</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Wissen Sie vorher, was Ihr Estrich kostet
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Stellen Sie sich vor, wie beruhigend es ist, schon vor dem ersten Gespräch zu wissen, 
                in welchem Rahmen sich Ihr Projekt bewegt. <strong>Keine bösen Überraschungen, keine 
                versteckten Kosten.</strong> Einfach Klarheit von Anfang an.
              </p>

              <p>
                Unser Budgetrechner gibt Ihnen in wenigen Klicks eine realistische Einschätzung. 
                Wählen Sie Ihren Estrich-Typ, die Fläche und die gewünschten Zusatzleistungen – 
                und sehen Sie sofort, was Sie erwartet.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Warum diese Transparenz?</h3>

              <p>
                Wir glauben: Wer informiert entscheidet, entscheidet besser. Mit über 30 Jahren 
                Erfahrung und mehr als 1.200 Projekten in München wissen wir genau, was Estrich 
                kostet. <strong>Dieses Wissen teilen wir gerne mit Ihnen.</strong>
              </p>

              <p>
                Die Berechnung ist unverbindlich und kostenlos. Für Ihr verbindliches Festpreis-Angebot 
                kommen wir gerne zu Ihnen – ebenfalls kostenlos. Nutzen Sie jetzt den Rechner und 
                verschaffen Sie sich Klarheit.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/rechner">
                <Button size="lg" data-testid="button-nlp-rechner">
                  Kostenloser Budgetrechner
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

                  <div>
                    <Label>Verlegereife / Trocknungszeit</Label>
                    <Select value={speed} onValueChange={setSpeed}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-speed">
                        <SelectValue placeholder="Trocknungszeit wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {speedOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label} {option.surcharge > 0 && `(+${option.surcharge} €/m² netto)`}
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
                        className={`flex items-start space-x-3 p-3 rounded-md border transition-colors ${option.required ? 'bg-accent/30 cursor-not-allowed' : 'hover:bg-accent/50 cursor-pointer'}`}
                        onClick={() => toggleOption(option.id)}
                      >
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onCheckedChange={() => toggleOption(option.id)}
                          disabled={option.required}
                          data-testid={`checkbox-${option.id}`}
                        />
                        <div className="flex-1">
                          <Label htmlFor={option.id} className={`font-medium ${option.required ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            {option.label}
                            {option.required && <span className="ml-2 text-xs text-muted-foreground">(immer dabei)</span>}
                          </Label>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                          <p className="text-xs font-medium text-primary mt-1">+{option.price} €/m² netto</p>
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
                          <p className="text-xs text-muted-foreground mt-1">netto zzgl. MwSt.</p>
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

                {showResult && parseFloat(squareMeters) > 0 && !formSubmitted && (
                  <Card className="border-primary">
                    <CardContent className="p-5 space-y-4">
                      <h3 className="font-bold flex items-center gap-2">
                        <Send className="w-4 h-4 text-primary" />
                        Budget per E-Mail erhalten
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Erhalten Sie Ihre Budgetberechnung per E-Mail und wir kontaktieren Sie für ein verbindliches Angebot.
                      </p>
                      
                      {!showContactForm ? (
                        <Button 
                          className="w-full" 
                          onClick={() => setShowContactForm(true)}
                          data-testid="button-show-budget-form"
                        >
                          Budget mit Kontaktdaten senden
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                              <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs">Vorname*</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder="Max" 
                                        {...field} 
                                        data-testid="input-budget-firstname"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-xs">Nachname*</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder="Mustermann" 
                                        {...field} 
                                        data-testid="input-budget-lastname"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs">E-Mail*</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="max@beispiel.de" 
                                      type="email"
                                      {...field} 
                                      data-testid="input-budget-email"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs">Telefon*</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="+49 ..." 
                                      type="tel"
                                      {...field} 
                                      data-testid="input-budget-phone"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs">Nachricht (optional)</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Weitere Infos zu Ihrem Projekt..."
                                      className="resize-none text-sm"
                                      rows={2}
                                      {...field} 
                                      data-testid="input-budget-message"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="privacyConsent"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                      data-testid="checkbox-budget-privacy"
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs font-normal">
                                      Ich habe die{" "}
                                      <Link href="/datenschutz" className="underline text-primary">
                                        Datenschutzerklärung
                                      </Link>{" "}
                                      gelesen und stimme zu.*
                                    </FormLabel>
                                    <FormMessage />
                                  </div>
                                </FormItem>
                              )}
                            />
                            
                            <Button 
                              type="submit" 
                              className="w-full"
                              disabled={contactMutation.isPending}
                              data-testid="button-submit-budget"
                            >
                              {contactMutation.isPending ? (
                                "Wird gesendet..."
                              ) : (
                                <>
                                  <Send className="mr-2 h-4 w-4" />
                                  Budgetberechnung senden
                                </>
                              )}
                            </Button>
                          </form>
                        </Form>
                      )}
                    </CardContent>
                  </Card>
                )}

                {formSubmitted && (
                  <Card className="border-green-500 bg-green-50 dark:bg-green-950/20">
                    <CardContent className="p-5 text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                      <h3 className="font-bold text-green-800 dark:text-green-200">Anfrage erfolgreich gesendet!</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Wir haben Ihre Budgetberechnung erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                      </p>
                    </CardContent>
                  </Card>
                )}

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
