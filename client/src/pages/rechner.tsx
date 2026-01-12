import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import jsPDF from "jspdf";
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
  CheckCircle2,
  Download,
  FileText
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

const pdfDownloadSchema = z.object({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type BudgetContactFormData = z.infer<typeof budgetContactSchema>;
type PdfDownloadFormData = z.infer<typeof pdfDownloadSchema>;

const projektartOptions = [
  { value: "neubau", label: "Neubau", surcharge: -5, description: "Neubauprojekt" },
  { value: "sanierung", label: "Sanierung / Renovierung", surcharge: 0, description: "Bestandsgebäude" },
];

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
  { value: "mehrere", label: "Mehrere Stockwerke", surcharge: 0 },
];

const speedOptions = [
  { value: "standard", label: "Standard (ca. 28 Tage)", surcharge: 0 },
  { value: "14tage", label: "Schnell verlegereif (14 Tage)", surcharge: 8 },
  { value: "7tage", label: "Express verlegereif (7 Tage)", surcharge: 15 },
];

const trittschallOptions = [
  { value: "none", label: "Keine", price: 0 },
  { value: "20mm", label: "20 mm", price: 8 },
  { value: "30mm", label: "30 mm", price: 10 },
  { value: "40mm", label: "40 mm", price: 12 },
  { value: "50mm", label: "50 mm", price: 14 },
  { value: "60mm", label: "60 mm oder mehr", price: 16 },
];

const waermedaemmungOptions = [
  { value: "none", label: "Keine", price: 0 },
  { value: "60mm-eps", label: "60 mm EPS", price: 14 },
  { value: "80mm-eps", label: "80 mm EPS", price: 18 },
  { value: "100mm-eps", label: "100 mm EPS", price: 22 },
  { value: "60mm-xps", label: "60 mm XPS", price: 18 },
  { value: "80mm-xps", label: "80 mm XPS", price: 24 },
  { value: "100mm-xps", label: "100 mm XPS oder mehr", price: 30 },
];

const fussbodenheizungOptions = [
  { value: "none", label: "Keine", price: 0 },
  { value: "heizung", label: "Fußbodenheizung verlegen", price: 28.50, description: "Nur Verlegen ohne Material" },
  { value: "einbettung", label: "Nur Einbettung", price: 8, description: "Heizrohr-Einbettung" },
];

const additionalOptions = [
  { id: "randdaemmstreifen", label: "Randdämmstreifen", price: 2.5, icon: Layers, description: "Umlaufend verlegt", required: false, isFlat: false },
  { id: "folie", label: "PE-Folie/Dampfsperre", price: 2, icon: Layers, description: "Feuchtigkeitsschutz", required: false, isFlat: false },
  { id: "baustelleneinrichtung", label: "Baustelleneinrichtung", price: 450, icon: Truck, description: "Immer inklusive", required: true, isFlat: true },
  { id: "reinigung", label: "Baustellenreinigung", price: 2.8, icon: Wrench, description: "Immer inklusive", required: true, isFlat: false },
];

export default function Rechner() {
  const { toast } = useToast();
  const [projektart, setProjektart] = useState<string>("neubau");
  const [squareMeters, setSquareMeters] = useState<string>("100");
  const [estrichType, setEstrichType] = useState<string>("zementestrich");
  const [thickness, setThickness] = useState<string>("45");
  const [floor, setFloor] = useState<string>("eg");
  const [speed, setSpeed] = useState<string>("standard");
  const [trittschall, setTrittschall] = useState<string>("none");
  const [waermedaemmung, setWaermedaemmung] = useState<string>("none");
  const [fussbodenheizung, setFussbodenheizung] = useState<string>("none");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["baustelleneinrichtung", "reinigung"]);
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPdfForm, setShowPdfForm] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

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

  const pdfForm = useForm<PdfDownloadFormData>({
    resolver: zodResolver(pdfDownloadSchema),
    defaultValues: {
      email: "",
      privacyConsent: false,
    },
  });

  const generatePDF = (email: string) => {
    const result = calculatePrice();
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text("Estriche München", 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Budgetrechner - Kostenübersicht", 20, 30);
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);
    
    doc.setFontSize(11);
    doc.setTextColor(40, 40, 40);
    let y = 45;
    
    doc.setFontSize(14);
    doc.text("Projektdetails", 20, y);
    y += 10;
    
    doc.setFontSize(10);
    const details = [
      ["Projektart:", projektartOptions.find(p => p.value === projektart)?.label || projektart],
      ["Fläche:", `${squareMeters} m²`],
      ["Estrich-Typ:", estrichTypes.find(e => e.value === estrichType)?.label || estrichType],
      ["Stärke:", thicknessOptions.find(t => t.value === thickness)?.label || thickness],
      ["Stockwerk:", floorOptions.find(f => f.value === floor)?.label || floor],
      ["Trocknungszeit:", speedOptions.find(s => s.value === speed)?.label || speed],
      ["Trittschalldämmung:", trittschallOptions.find(t => t.value === trittschall)?.label || "Keine"],
      ["Wärmedämmung:", waermedaemmungOptions.find(w => w.value === waermedaemmung)?.label || "Keine"],
      ["Fußbodenheizung:", fussbodenheizungOptions.find(f => f.value === fussbodenheizung)?.label || "Keine"],
    ];
    
    details.forEach(([label, value]) => {
      doc.setTextColor(100, 100, 100);
      doc.text(label, 20, y);
      doc.setTextColor(40, 40, 40);
      doc.text(value, 70, y);
      y += 7;
    });
    
    y += 10;
    doc.setFontSize(14);
    doc.text("Kostenaufstellung", 20, y);
    y += 10;
    
    doc.setFontSize(10);
    result.breakdown.forEach((item) => {
      doc.setTextColor(100, 100, 100);
      doc.text(item.label, 20, y);
      doc.setTextColor(item.amount < 0 ? 0 : 40, item.amount < 0 ? 128 : 40, item.amount < 0 ? 0 : 40);
      doc.text(item.info || `${item.amount.toLocaleString('de-DE')} €`, 150, y, { align: 'right' });
      y += 7;
    });
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 7;
    
    doc.setFontSize(11);
    doc.text("Zwischensumme:", 20, y);
    doc.text(`${result.subtotal?.toLocaleString('de-DE')} € netto`, 150, y, { align: 'right' });
    y += 10;
    
    doc.setFontSize(14);
    doc.setTextColor(200, 100, 0);
    doc.text("Geschätzter Preisrahmen:", 20, y);
    y += 8;
    doc.setFontSize(16);
    doc.text(`${result.min.toLocaleString('de-DE')} – ${result.max.toLocaleString('de-DE')} € netto`, 20, y);
    
    y += 20;
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Hinweis: Diese Berechnung dient nur zur Orientierung.", 20, y);
    y += 5;
    doc.text("Der tatsächliche Preis wird nach einer Vor-Ort-Besichtigung ermittelt.", 20, y);
    
    y += 15;
    doc.setTextColor(100, 100, 100);
    doc.text("Kontaktieren Sie uns für ein verbindliches Angebot:", 20, y);
    y += 7;
    doc.setTextColor(40, 40, 40);
    doc.text("Tel: 089 444438872 | E-Mail: info@estriche-muenchen.de", 20, y);
    y += 7;
    doc.text("Web: www.estriche-muenchen.de", 20, y);
    
    doc.save("Estriche-Muenchen-Budgetrechner.pdf");
    
    return email;
  };

  const onPdfSubmit = async (data: PdfDownloadFormData) => {
    try {
      generatePDF(data.email);
      setPdfDownloaded(true);
      setShowPdfForm(false);
      toast({
        title: "PDF erfolgreich erstellt!",
        description: "Die Budgetübersicht wurde heruntergeladen.",
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "PDF konnte nicht erstellt werden.",
        variant: "destructive",
      });
    }
  };

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
- Projektart: ${projektartOptions.find(p => p.value === projektart)?.label || projektart}
- Fläche: ${sqm} m²
- Estrich-Typ: ${selectedEstrich?.label || estrichType}
- Stärke: ${selectedThickness?.label || thickness}
- Stockwerk: ${selectedFloor?.label || floor}
- Trocknungszeit: ${selectedSpeed?.label || speed}
- Trittschalldämmung: ${trittschallOptions.find(t => t.value === trittschall)?.label || "Keine"}
- Wärmedämmung: ${waermedaemmungOptions.find(w => w.value === waermedaemmung)?.label || "Keine"}
- Fußbodenheizung: ${fussbodenheizungOptions.find(f => f.value === fussbodenheizung)?.label || "Keine"}
- Weitere Zusatzleistungen: ${optionsList || "Keine"}

KOSTENAUFSTELLUNG:
${result.breakdown.map(item => `- ${item.label}: ${item.info || item.amount.toLocaleString('de-DE') + ' €'}`).join('\n')}

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

    const breakdown: { label: string; amount: number; info?: string }[] = [];

    breakdown.push({ 
      label: `Flächenberechnung`, 
      amount: 0,
      info: `${sqm} m²`
    });

    const baseEstrichCost = sqm * selectedEstrich.basePrice;
    breakdown.push({ label: `${selectedEstrich.label}`, amount: baseEstrichCost });

    const thicknessSurcharge = (selectedThickness.multiplier > 1) 
      ? sqm * selectedEstrich.basePrice * (selectedThickness.multiplier - 1) 
      : 0;
    breakdown.push({ 
      label: `Estrichstärke (${selectedThickness.label})`, 
      amount: thicknessSurcharge,
      info: thicknessSurcharge === 0 ? 'inkl.' : undefined
    });

    const estrichCost = baseEstrichCost + thicknessSurcharge;

    const selectedProjektart = projektartOptions.find(p => p.value === projektart);
    const projektartSurcharge = sqm * (selectedProjektart?.surcharge || 0);
    breakdown.push({ 
      label: `Projektart (${selectedProjektart?.label || projektart})`, 
      amount: projektartSurcharge,
      info: projektartSurcharge === 0 ? 'inkl.' : undefined
    });

    const floorSurcharge = sqm * selectedFloor.surcharge;
    breakdown.push({ 
      label: `Stockwerk (${selectedFloor.label})`, 
      amount: floorSurcharge,
      info: floorSurcharge === 0 ? 'inkl.' : undefined
    });

    const speedSurcharge = sqm * selectedSpeed.surcharge;
    breakdown.push({ 
      label: `Trocknungszeit (${selectedSpeed.label})`, 
      amount: speedSurcharge,
      info: speedSurcharge === 0 ? 'inkl.' : undefined
    });

    const selectedTrittschall = trittschallOptions.find(t => t.value === trittschall);
    const trittschallCost = (selectedTrittschall && selectedTrittschall.price > 0) ? sqm * selectedTrittschall.price : 0;
    breakdown.push({ 
      label: `Trittschalldämmung (${selectedTrittschall?.label || 'Keine'})`, 
      amount: trittschallCost,
      info: trittschallCost === 0 ? 'inkl.' : undefined
    });

    const selectedWaermedaemmung = waermedaemmungOptions.find(w => w.value === waermedaemmung);
    const waermedaemmungCost = (selectedWaermedaemmung && selectedWaermedaemmung.price > 0) ? sqm * selectedWaermedaemmung.price : 0;
    breakdown.push({ 
      label: `Wärmedämmung (${selectedWaermedaemmung?.label || 'Keine'})`, 
      amount: waermedaemmungCost,
      info: waermedaemmungCost === 0 ? 'inkl.' : undefined
    });

    const selectedFussbodenheizung = fussbodenheizungOptions.find(f => f.value === fussbodenheizung);
    const fussbodenheizungCost = (selectedFussbodenheizung && selectedFussbodenheizung.price > 0) ? sqm * selectedFussbodenheizung.price : 0;
    breakdown.push({ 
      label: `Fußbodenheizung (${selectedFussbodenheizung?.label || 'Keine'})`, 
      amount: fussbodenheizungCost,
      info: fussbodenheizungCost === 0 ? 'inkl.' : undefined
    });

    let optionsCost = 0;
    selectedOptions.forEach(optionId => {
      const option = additionalOptions.find(o => o.id === optionId);
      if (option) {
        const cost = option.isFlat ? option.price : sqm * option.price;
        optionsCost += cost;
        breakdown.push({ label: option.isFlat ? `${option.label} (Pauschal)` : option.label, amount: cost });
      }
    });

    const anfahrt = 55;
    breakdown.push({ label: "Anfahrt München", amount: anfahrt });

    const subtotal = estrichCost + projektartSurcharge + floorSurcharge + speedSurcharge + trittschallCost + waermedaemmungCost + fussbodenheizungCost + optionsCost + anfahrt;
    
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
      <Helmet>
        <title>Estrich Kostenrechner München 2025 | Preis pro m² sofort berechnen</title>
        <meta name="description" content="Estrich Kosten München sofort berechnen: Zementestrich ab 32€/m², Fließestrich ab 42€/m². Kostenloser Online-Rechner mit Festpreis-Garantie. Jetzt Budget kalkulieren!" />
        <meta name="keywords" content="estrich kosten rechner, estrich preis pro m2, estrich kosten münchen, zementestrich kosten, fließestrich preis, estrich verlegen kosten, estrich münchen preis, estrich kalkulator" />
        <link rel="canonical" href="https://estriche-muenchen.de/rechner" />
        
        <meta property="og:title" content="Estrich Kostenrechner München 2025 | Preis pro m² berechnen" />
        <meta property="og:description" content="Kostenloser Estrich-Kostenrechner für München. Berechnen Sie jetzt Ihre Estrich-Kosten pro m² – Zementestrich, Fließestrich, Heizestrich. Festpreis-Garantie!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/rechner" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="Estriche München" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estrich Kostenrechner München | Preis sofort berechnen" />
        <meta name="twitter:description" content="Berechnen Sie Ihre Estrich-Kosten in München kostenlos. Online-Rechner mit Sofort-Ergebnis." />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="author" content="Estriche München - Mustafa Sakar" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="München" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Estrich Kostenrechner München",
            "description": "Kostenloser Online-Rechner zur Kalkulation von Estrich-Kosten in München und Umgebung",
            "url": "https://estriche-muenchen.de/rechner",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Kostenlose Nutzung des Estrich-Kostenrechners"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Estriche München",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hardenbergstr. 4",
                "addressLocality": "München",
                "postalCode": "80992",
                "addressCountry": "DE"
              },
              "telephone": "+49 89 444438872",
              "email": "info@estriche-muenchen.de",
              "areaServed": {
                "@type": "City",
                "name": "München"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "282",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was kostet Estrich pro m² in München?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Estrich kostet in München zwischen 25-65€ pro m² je nach Art: Zementestrich ab 32€/m², Fließestrich ab 42€/m², Schnellestrich ab 48€/m². Der genaue Preis hängt von Stärke, Stockwerk und Zusatzleistungen ab."
                }
              },
              {
                "@type": "Question",
                "name": "Wie berechne ich meine Estrich-Kosten?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mit unserem kostenlosen Online-Rechner: Geben Sie Ihre Fläche in m² ein, wählen Sie Estrichart und Stärke, und erhalten Sie sofort eine unverbindliche Kosteneinschätzung mit Festpreis-Option."
                }
              },
              {
                "@type": "Question",
                "name": "Ist der Estrich-Kostenrechner kostenlos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, unser Estrich-Kostenrechner ist 100% kostenlos und unverbindlich. Sie erhalten sofort eine Budgeteinschätzung ohne Registrierung."
                }
              }
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://estriche-muenchen.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Estrich Kostenrechner",
                "item": "https://estriche-muenchen.de/rechner"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />

      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="relative w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center">
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

      <section className="py-8 bg-muted/30 border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center max-w-4xl mx-auto mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight">
              Warum berechnen Kunden hier ihr Budget?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              { reason: "Ich will wissen, ob mein Budget reicht", benefit: "Klarheit in 2 Minuten" },
              { reason: "Ich brauche Zahlen für meine Bank", benefit: "PDF-Export möglich" },
              { reason: "Ich will Angebote vergleichen können", benefit: "Realistische Richtwerte" }
            ].map((item, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-4 text-center">
                  <p className="text-sm italic mb-2">{item.reason}</p>
                  <Badge variant="secondary" className="text-xs">{item.benefit}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="max-w-6xl mx-auto">
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
                  Jetzt Ihre Anfrage stellen
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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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
                    <Label className="mb-2 block">Um welche Art von Projekt handelt es sich?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {projektartOptions.map((option) => (
                        <div 
                          key={option.value}
                          onClick={() => setProjektart(option.value)}
                          className={`p-4 rounded-md border cursor-pointer transition-colors text-center ${
                            projektart === option.value 
                              ? 'border-primary bg-primary/10' 
                              : 'hover:bg-accent/50'
                          }`}
                          data-testid={`projektart-${option.value}`}
                        >
                          <span className="font-medium block">{option.label}</span>
                          <span className="text-xs text-muted-foreground">{option.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

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

                  <div>
                    <Label>Fußbodenheizung</Label>
                    <Select value={fussbodenheizung} onValueChange={setFussbodenheizung}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-fussbodenheizung">
                        <SelectValue placeholder="Fußbodenheizung wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {fussbodenheizungOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label} {option.price > 0 && `(+${option.price} €/m²)`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Trittschalldämmung</Label>
                    <Select value={trittschall} onValueChange={setTrittschall}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-trittschall">
                        <SelectValue placeholder="Trittschalldämmung wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {trittschallOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label} {option.price > 0 && `(+${option.price} €/m²)`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Wärmedämmung</Label>
                    <Select value={waermedaemmung} onValueChange={setWaermedaemmung}>
                      <SelectTrigger className="mt-1" data-testid="select-calculator-waermedaemmung">
                        <SelectValue placeholder="Wärmedämmung wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {waermedaemmungOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label} {option.price > 0 && `(+${option.price} €/m²)`}
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
                    Weitere Zusatzleistungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {additionalOptions.map((option) => (
                      <div 
                        key={option.id} 
                        className={`flex items-start space-x-3 p-3 rounded-md border transition-colors ${option.required ? 'bg-accent/30 cursor-not-allowed' : 'hover:bg-accent/50 cursor-pointer'}`}
                        onClick={() => !option.required && toggleOption(option.id)}
                      >
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.includes(option.id)}
                          disabled={option.required}
                          data-testid={`checkbox-${option.id}`}
                          className="pointer-events-none"
                        />
                        <div className="flex-1">
                          <span className={`font-medium ${option.required ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            {option.label}
                            {option.required && <span className="ml-2 text-xs text-muted-foreground">(immer dabei)</span>}
                          </span>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                          <p className="text-xs font-medium text-primary mt-1">
                            {option.isFlat ? `Pauschal: ${option.price} € netto` : `+${option.price} €/m² netto`}
                          </p>
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
                              <span className={item.amount < 0 ? 'text-green-600 dark:text-green-400' : ''}>
                                {item.info || `${item.amount.toLocaleString('de-DE')} €`}
                              </span>
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

                {showResult && parseFloat(squareMeters) > 0 && (
                  <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
                    <CardContent className="p-5 space-y-4">
                      <h3 className="font-bold flex items-center gap-2">
                        <FileText className="w-4 h-4 text-green-600" />
                        PDF-Angebot herunterladen
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Laden Sie Ihre Kostenübersicht als PDF herunter.
                      </p>
                      
                      {pdfDownloaded ? (
                        <div className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/30 rounded-md text-green-800 dark:text-green-200">
                          <CheckCircle2 className="w-4 h-4" />
                          <p className="text-sm">PDF wurde erfolgreich heruntergeladen!</p>
                        </div>
                      ) : !showPdfForm ? (
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700" 
                          onClick={() => setShowPdfForm(true)}
                          data-testid="button-show-pdf-form"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Kostenlos als PDF herunterladen
                        </Button>
                      ) : (
                        <Form {...pdfForm}>
                          <form onSubmit={pdfForm.handleSubmit(onPdfSubmit)} className="space-y-4">
                            <FormField
                              control={pdfForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs">E-Mail-Adresse*</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="email"
                                      placeholder="ihre@email.de" 
                                      {...field} 
                                      data-testid="input-pdf-email"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={pdfForm.control}
                              name="privacyConsent"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                      data-testid="checkbox-pdf-privacy"
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="text-xs font-normal">
                                      Ich stimme der{" "}
                                      <Link href="/datenschutz" className="text-primary underline">
                                        Datenschutzerklärung
                                      </Link>{" "}
                                      zu.*
                                    </FormLabel>
                                    <FormMessage />
                                  </div>
                                </FormItem>
                              )}
                            />
                            
                            <Button 
                              type="submit" 
                              className="w-full bg-green-600 hover:bg-green-700"
                              data-testid="button-download-pdf"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              PDF jetzt herunterladen
                            </Button>
                          </form>
                        </Form>
                      )}
                    </CardContent>
                  </Card>
                )}

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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="max-w-6xl mx-auto">
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
