import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2, 
  ChevronRight,
  Building2,
  Ruler,
  Wrench,
  Shield,
  Thermometer,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { services } from "@/lib/services-data";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/worker_grinding_screed_floor.png";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { 
  generateLocalBusinessSchema, 
  generateFAQSchema, 
  generateHowToSchema,
  businessInfo 
} from "@/lib/seo-schemas";

const estrichTypes = [
  { value: "zementestrich", label: "Zementestrich (CT)" },
  { value: "calciumsulfat", label: "Calciumsulfatestrich / Anhydrit (CA)" },
  { value: "heizestrich", label: "Heizestrich (Fußbodenheizung)" },
  { value: "schnellestrich", label: "Schnellestrich / Schnellzement" },
  { value: "fliessestrich", label: "Fließestrich" },
  { value: "trockenestrich", label: "Trockenestrich" },
  { value: "industrieboden", label: "Industrieestrich / Hartstoffestrich" },
  { value: "unsicher", label: "Bin mir unsicher / Beratung gewünscht" },
];

const floorOptions = [
  { value: "keller", label: "Keller / UG" },
  { value: "eg", label: "Erdgeschoss" },
  { value: "1og", label: "1. Obergeschoss" },
  { value: "2og", label: "2. Obergeschoss" },
  { value: "3og", label: "3. Obergeschoss" },
  { value: "4og-plus", label: "4. OG oder höher" },
  { value: "dg", label: "Dachgeschoss" },
  { value: "mehrere", label: "Mehrere Stockwerke" },
];

const contactFormSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  estrichType: z.string().min(1, "Bitte wählen Sie einen Estrich-Typ aus"),
  squareMeters: z.string().optional(),
  floor: z.string().optional(),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const processSteps = [
  {
    number: "01",
    title: "Jetzt anfragen – sofort Klarheit",
    description: "60 Sekunden. Mehr brauchen Sie nicht. Kein Warten in der Telefonschleife, kein Stress. Innerhalb von 24 Stunden meldet sich Ihr persönlicher Ansprechpartner – nicht irgendein Callcenter. Die Nachfrage ist hoch: Wer zuerst kommt, bekommt den Termin.",
  },
  {
    number: "02",
    title: "Festpreis – garantiert, schriftlich, bindend",
    description: "Unser Meister kommt kostenlos zu Ihnen. Sie erhalten einen Festpreis – schwarz auf weiß. Keine versteckten Kosten, keine bösen Überraschungen. 97% unserer Kunden sagen: 'Endlich ein Handwerker, dem ich vertrauen kann.' Sie werden es auch sagen.",
  },
  {
    number: "03",
    title: "Pünktlich. Sauber. Professionell.",
    description: "Am vereinbarten Tag stehen wir vor Ihrer Tür – nicht eine Minute zu spät. Sie spüren die Erleichterung: saubere Baustelle, klare Kommunikation, null Chaos. Während wir arbeiten, können Sie sich endlich um die schönen Dinge kümmern.",
  },
  {
    number: "04",
    title: "Ihr Traumboden – ohne Wenn und Aber",
    description: "Stellen Sie sich vor: Der Bodenleger kommt, prüft den Untergrund – und nickt anerkennend. 'Perfekt vorbereitet.' Keine Verzögerungen, keine Nacharbeiten, keine Kopfschmerzen. Nur ein Boden, auf den Sie jeden Tag stolz sein werden.",
  },
];

const pricingItems = [
  {
    title: "Zementestrich",
    price: "25–45",
    note: "Der Klassiker. Robust, bewährt, wirtschaftlich. 85% unserer Münchner Kunden wählen diese Option – aus gutem Grund.",
    slug: "zementestrich",
  },
  {
    title: "Industrieböden",
    price: "45–95",
    note: "Für Unternehmer, die keine halben Sachen machen. Hält 15+ Jahre – belastbar wie am ersten Tag.",
    slug: "industrieboeden",
  },
  {
    title: "Fußbodenheizung",
    price: "45–75",
    note: "Barfuß im Winter. Wohlige Wärme, niedrigere Heizkosten. Inkl. Aufheizprotokoll für Ihre Versicherung.",
    slug: "fussbodenheizung",
  },
];

const faqItems = [
  {
    question: "Was kostet Estrich pro m² in München?",
    answer: "Die Estrich Kosten München variieren je nach Art: Zementestrich kostet 32-45€/m², Fließestrich 38-52€/m², Heizestrich 42-55€/m². Bei Estrich Neubau München erhalten Sie 5€/m² Rabatt. Estrich Sanierung München startet ab 25€/m². Alle Preise verstehen sich netto zzgl. MwSt. und beinhalten Material, Verlegung und Anfahrt im gesamten Münchner Stadtgebiet (Schwabing, Bogenhausen, Pasing, Sendling etc.).",
    link: "/preise",
    linkText: "Zur Preisübersicht",
  },
  {
    question: "Welcher Estrichleger in München ist empfehlenswert?",
    answer: "Als Estrichleger Meisterbetrieb München mit über 30 Jahren Erfahrung und 282 Google-Bewertungen (4,9 Sterne) bieten wir höchste Qualität mit Festpreis-Garantie. Wir sind Ihr zuverlässiger Estrichleger München für Zementestrich, Fließestrich, Heizestrich und Industrieböden – von Altstadt-Lehel bis Trudering-Riem.",
    link: "/ueber-uns",
    linkText: "Mehr über unseren Meisterbetrieb",
  },
  {
    question: "Was ist besser: Zementestrich oder Fließestrich?",
    answer: "Zementestrich München (DIN 18560-CT) ist der Klassiker – robust, günstig (ab 32€/m²), ideal für Neubau und Keller. Fließestrich München (Calciumsulfatestrich CA) eignet sich perfekt für Fußbodenheizungen dank besserer Wärmeleitfähigkeit (λ=1,0 W/mK). Bei großen Flächen nivelliert sich Fließestrich selbst – besonders beliebt in Münchner Altbauten. Wir beraten Sie kostenlos, welche Variante für Ihr Projekt optimal ist.",
    link: "/leistungen/zementestrich",
    linkText: "Mehr zu Zementestrich",
  },
  {
    question: "Wie lange dauert die Estrich-Trocknungszeit?",
    answer: "Zementestrich nach DIN 18560 braucht ca. 1 Tag pro mm Dicke (bei 50mm = 50 Tage, bei 65mm = 65 Tage). Schnellestrich München ist bereits nach 1-5 Tagen belegreif – ideal bei Termindruck. Calciumsulfat-Fließestrich trocknet etwas schneller (ca. 0,8 Tage/mm). Wir messen die Restfeuchte normgerecht mit CM-Gerät und dokumentieren alles für Ihre Gewährleistung.",
    link: "/leistungen/schnellestrich",
    linkText: "Schnellestrich-Optionen",
  },
  {
    question: "Macht ihr auch Estrich für Neubau und Sanierung?",
    answer: "Ja! Estrich Neubau München und Estrich Sanierung München gehören zu unseren Kernleistungen. Beim Neubau arbeiten wir eng mit Ihrem Bauträger zusammen – ob Einfamilienhaus in Pasing, Mehrfamilienhaus in Schwabing oder Gewerbebau in Garching. Bei Altbausanierungen übernehmen wir Rissreparatur, Hohlstellensanierung und Wasserschadenbehebung. 5 Jahre Gewährleistung auf alle Arbeiten nach BGB §634a.",
    link: "/leistungen/sanierung",
    linkText: "Sanierungsleistungen ansehen",
  },
  {
    question: "Wie schnell können Sie anfangen?",
    answer: "Normalerweise innerhalb von 1–3 Wochen – je nach Auftragslage. Als etablierter Estrichleger München mit Sitz in der Hardenbergstraße sind wir schnell in allen Stadtteilen: Bogenhausen, Haidhausen, Sendling, Moosach, Milbertshofen. Bei dringenden Fällen (Schnellestrich München) rufen Sie uns direkt an: 089 444438872. Wir finden fast immer eine Lösung.",
    link: "/kontakt",
    linkText: "Jetzt Termin anfragen",
  },
  {
    question: "Welche Garantien bieten Sie?",
    answer: "5 Jahre Gewährleistung auf alle Estricharbeiten (gesetzlich nur 4 Jahre!), Festpreis-Garantie ohne Nachforderungen, 100€ Gutschrift bei Verspätung durch uns. Als Estrichleger Meisterbetrieb München arbeiten wir ausschließlich nach DIN 18560 (Estriche im Bauwesen) und DIN 18202 (Toleranzen im Hochbau) – höchste Qualitätsstandards garantiert. Unser Betrieb ist bei der Handwerkskammer München eingetragen.",
    link: "/faq",
    linkText: "Alle Fragen & Antworten",
  },
  {
    question: "Welche Estricharten bieten Sie in München an?",
    answer: "Als Vollsortimenter bieten wir alle Estricharten: Zementestrich (CT) für Wohn- und Gewerbebau, Calciumsulfat-Fließestrich (CA) für Fußbodenheizungen, Heizestrich mit normgerechtem Aufheizprotokoll nach DIN EN 1264, Schnellestrich für eilige Projekte, Trockenestrich für Altbausanierung, Industrieestrich/Hartstoffestrich für Gewerbe und Sichtestrich als Design-Element. Wir sind Ihr Estrichleger München für jeden Anwendungsfall.",
    link: "/leistungen",
    linkText: "Alle Leistungen im Überblick",
  },
  {
    question: "In welchen Münchner Stadtteilen sind Sie tätig?",
    answer: "Wir arbeiten in allen 25 Münchner Stadtbezirken: Altstadt-Lehel, Ludwigsvorstadt-Isarvorstadt, Maxvorstadt, Schwabing-West, Au-Haidhausen, Sendling, Schwanthalerhöhe, Neuhausen-Nymphenburg, Moosach, Bogenhausen, Trudering-Riem, Pasing-Obermenzing und mehr. Dazu das gesamte Umland: Starnberg, Dachau, Freising, Erding, Fürstenfeldbruck bis zu 30km Radius. Keine Anfahrtskosten im Stadtgebiet München!",
    link: "/kontakt",
    linkText: "Einsatzgebiet prüfen",
  },
];

const caseStudies = [
  {
    title: "Einfamilienhaus Neubau München-Pasing",
    type: "Estrich Neubau München",
    area: "180 m² Zementestrich CT-F4",
    duration: "2 Tage Verlegung",
    description: "Kompletter Bodenaufbau mit 100mm EPS-Dämmung und 65mm Zementestrich nach DIN 18560 für ein Einfamilienhaus im Stadtteil Pasing-Obermenzing. Der Bauherr war begeistert von der termingerechten Fertigstellung und der Ebenheit nach DIN 18202.",
    link: "/leistungen/zementestrich",
  },
  {
    title: "Altbausanierung München-Schwabing",
    type: "Estrich Sanierung München",
    area: "95 m² Fließestrich CA + Fußbodenheizung",
    duration: "3 Tage komplett",
    description: "Estrichsanierung in einem 1920er Jugendstil-Altbau in Schwabing-West mit nachträglicher Fußbodenheizung. Besondere Herausforderung: nur 45mm Aufbauhöhe. Lösung: Calciumsulfat-Fließestrich mit optimaler Wärmeleitfähigkeit.",
    link: "/leistungen/fliessestrich",
  },
  {
    title: "Gewerbehalle Garching bei München",
    type: "Industrieboden München",
    area: "650 m² Hartstoffestrich",
    duration: "4 Tage Ausführung",
    description: "Hochbelastbarer Industrieboden für einen Logistikbetrieb in Garching. Gabelstaplertauglich, staubfrei versiegelt, mit Oberflächenhärte nach DIN EN 13813 und 15 Jahren Belastungsgarantie.",
    link: "/leistungen/industrieboeden",
  },
  {
    title: "Mehrfamilienhaus Bogenhausen",
    type: "Heizestrich München",
    area: "420 m² Heizestrich mit Aufheizprotokoll",
    duration: "5 Tage für 6 Wohnungen",
    description: "Neubau-Wohnanlage in München-Bogenhausen mit Fußbodenheizung. Alle 6 Wohneinheiten mit normgerechtem Aufheizprotokoll nach DIN EN 1264, CM-Feuchtemessung dokumentiert für Bodenleger.",
    link: "/leistungen/heizestrich",
  },
  {
    title: "Schnellestrich Haidhausen",
    type: "Schnellestrich München",
    area: "75 m² Schnellzement",
    duration: "1 Tag + 3 Tage Trocknung",
    description: "Wasserschaden-Sanierung in Au-Haidhausen mit extremem Termindruck. Lösung: Schnellestrich mit Belegreife nach nur 3 Tagen. Parkett konnte termingerecht verlegt werden.",
    link: "/leistungen/schnellestrich",
  },
];

const regions = [
  "Altstadt-Lehel", "Ludwigsvorstadt-Isarvorstadt", "Maxvorstadt", "Schwabing-West", 
  "Au-Haidhausen", "Sendling", "Sendling-Westpark", "Schwanthalerhöhe", "Neuhausen-Nymphenburg",
  "Moosach", "Milbertshofen-Am Hart", "Schwabing-Freimann", "Bogenhausen", "Berg am Laim",
  "Trudering-Riem", "Ramersdorf-Perlach", "Obergiesing-Fasangarten", "Untergiesing-Harlaching",
  "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln", "Hadern", "Pasing-Obermenzing",
  "Aubing-Lochhausen-Langwied", "Allach-Untermenzing", "Feldmoching-Hasenbergl", "Laim"
];

const surroundingAreas = [
  "Starnberg", "Dachau", "Freising", "Erding", "Fürstenfeldbruck", "Germering",
  "Unterschleißheim", "Garching", "Unterhaching", "Ottobrunn", "Haar", "Grünwald",
  "Planegg", "Pullach", "Ismaning", "Vaterstetten", "Grasbrunn", "Neubiberg",
  "Taufkirchen", "Oberschleißheim", "Gröbenzell", "Olching", "Gilching", "Puchheim"
];

const technicalSpecs = [
  {
    title: "Zementestrich CT nach DIN 18560",
    specs: ["Mindestdicke: 45-65mm", "Biegezugfestigkeit: F4-F7", "Trocknungszeit: 1 Tag/mm", "Belastbar nach: 28 Tagen"],
    description: "Der robuste Klassiker für Wohn- und Gewerbebau in München. Geeignet für alle Bodenbeläge.",
  },
  {
    title: "Calciumsulfat-Fließestrich CA",
    specs: ["Mindestdicke: 35-45mm", "Selbstnivellierend", "Schnellere Trocknung", "Ideal für Fußbodenheizung"],
    description: "Perfekte Wärmeleitfähigkeit für Fußbodenheizungen. Besonders eben durch Selbstnivellierung.",
  },
  {
    title: "Heizestrich für Fußbodenheizung",
    specs: ["Überdeckung Heizrohre: min. 45mm", "Aufheizprotokoll nach DIN EN 1264", "Wärmeleitgruppe 045-065", "Belegreif nach Aufheizprotokoll"],
    description: "Optimierte Wärmeverteilung für maximale Energieeffizienz. Inkl. normgerechtem Aufheizprotokoll.",
  },
  {
    title: "Schnellestrich / Schnellzement",
    specs: ["Begehbar nach: 24h", "Belegreif nach: 1-5 Tagen", "Höhere Frühfestigkeit", "Ideal bei Termindruck"],
    description: "Die schnelle Lösung bei Zeitmangel. Ideal für Sanierungen und enge Bautermine in München.",
  },
];

export default function Home() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      estrichType: "",
      squareMeters: "",
      floor: "",
      message: "",
      privacyConsent: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        projectType: "Startseite-Anfrage",
        estrichType: data.estrichType,
        squareMeters: data.squareMeters ? parseInt(data.squareMeters) : null,
        floor: data.floor || null,
        message: data.message || "",
      };
      return apiRequest("POST", "/api/contact", payload);
    },
    onSuccess: () => {
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estriche München | Estrichleger Meisterbetrieb | Zement- & Fließestrich | Festpreis 2026</title>
        <meta name="description" content="Estriche München – Ihr Estrichleger Meisterbetrieb: Zementestrich ab 32€/m², Fließestrich, Heizestrich & Industrieestrich. 30+ Jahre Erfahrung, Festpreis-Garantie, 5 Jahre Gewährleistung. Jetzt kostenloses Angebot sichern!" />
        <meta name="keywords" content="Estriche München, Estrichleger München, Zementestrich München, Fließestrich München, Heizestrich München, Industrieboden München, Fußbodenheizung nachrüsten, Estrichsanierung München, Estrich Kosten pro qm, Schnellestrich München" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="München" />
        <meta name="geo.position" content="48.1779;11.5193" />
        <meta name="ICBM" content="48.1779, 11.5193" />
        <link rel="canonical" href="https://estriche-muenchen.de/" />
        <meta property="og:title" content="Estriche München | Estrichleger Meisterbetrieb | Zement- & Fließestrich | Festpreis 2026" />
        <meta property="og:description" content="Estriche München – Ihr Estrichleger Meisterbetrieb: Zementestrich ab 32€/m², Fließestrich, Heizestrich & Industrieestrich. 30+ Jahre Erfahrung, Festpreis-Garantie. Jetzt Angebot sichern!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estriche München | Estrichleger Meisterbetrieb | Zement- & Fließestrich | Festpreis 2026" />
        <meta name="twitter:description" content="Estriche München – Ihr Estrichleger Meisterbetrieb: Zementestrich ab 32€/m², Fließestrich, Heizestrich & Industrieestrich. 30+ Jahre Erfahrung, Festpreis-Garantie. Jetzt Angebot sichern!" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://estriche-muenchen.de/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema("https://estriche-muenchen.de/logo.png", "https://estriche-muenchen.de/og-image.png"))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema(faqItems.map(f => ({ question: f.question, answer: f.answer }))))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateHowToSchema(processSteps.map(s => ({ name: s.title, text: s.description }))))}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-3 space-y-8">
              <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse">
                ACHTUNG: Nur noch {getWeeklyScarcityNumber()} freie Termine diese Woche
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground">
                <strong>Estriche München</strong> – Schluss mit Baustellen-Chaos. <span className="text-primary">Endlich Ruhe im Kopf.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                <strong className="text-primary-foreground">Kennen Sie das?</strong> Handwerker, die nicht erscheinen. Termine, die platzen. 
                Rechnungen, die explodieren. <strong className="text-primary-foreground">Das frustriert. Das kostet Nerven. Und das muss nicht sein.</strong>
              </p>
              <p className="text-lg text-primary-foreground max-w-xl leading-relaxed">
                Als <strong className="text-primary-foreground">Estrichleger Meisterbetrieb in München</strong> mit über 2.500 zufriedenen Kunden liefern wir <strong className="text-primary-foreground">Zementestrich</strong>, <strong className="text-primary-foreground">Fließestrich</strong> und <strong className="text-primary-foreground">Heizestrich</strong> – 
                pünktlich, zum garantierten Festpreis. <strong className="text-primary-foreground">Stellen Sie sich vor:</strong> Ihr Boden ist fertig, der Bodenleger nickt anerkennend, 
                und Sie können endlich einziehen. <strong className="text-primary-foreground">Dieses Gefühl der Erleichterung – das liefern wir mit.</strong>
              </p>

              <div className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2 mt-4 inline-block">
                <span className="text-red-200 text-sm font-medium">
                  <strong>Achtung:</strong> Diese Woche nur noch {getWeeklyScarcityNumber()} freie Termine für München – Festpreis-Garantie sichern!
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/angebot">
                  <Button 
                    size="lg" 
                    data-testid="button-hero-cta"
                  >
                    Jetzt Termin sichern – bevor es zu spät ist
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="bg-zinc-900 text-white hover:bg-zinc-800"
                  asChild
                  data-testid="button-hero-call"
                >
                  <a href="tel:+4989444438872">
                    <Phone className="mr-2 h-4 w-4" />
                    089 444438872
                  </a>
                </Button>
              </div>

              {/* Trust Row - Pain Points Solved */}
              <div className="flex flex-wrap gap-6 pt-8" data-testid="hero-trust-row">
                <div className="flex items-center gap-2" data-testid="trust-item-0">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-0">100€ Entschädigung bei Verspätung</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-1">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-1">Festpreis – ohne versteckte Kosten</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-2">4,9 Sterne bei 282 Bewertungen</span>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <Card className="lg:col-span-2 shadow-xl border-0 bg-card/95 backdrop-blur-sm" data-testid="card-hero-form">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-3 bg-green-600 hover:bg-green-700">
                  Persönliche Antwort in unter 24h
                </Badge>
                <CardTitle className="text-2xl">Ihr Festpreis-Angebot – in 60 Sekunden angefordert</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Warum warten?</strong> Jeder Tag Verzögerung kostet Sie Zeit und Nerven. 
                  <span className="text-foreground"> Jetzt ausfüllen – Sie erhalten einen verbindlichen Preis. <strong>Kein Risiko.</strong></span>
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vorname*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Max" 
                                {...field} 
                                data-testid="input-firstname"
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
                            <FormLabel>Nachname*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Mustermann" 
                                {...field} 
                                data-testid="input-lastname"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+49 ..." 
                                type="tel"
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="mail@beispiel.de" 
                                type="email"
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="estrichType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estrich-Typ*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-estrich-type">
                                <SelectValue placeholder="Bitte auswählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {estrichTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="squareMeters"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fläche (m²)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="z.B. 120" 
                                type="number"
                                {...field} 
                                data-testid="input-sqm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="floor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stockwerk</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-floor">
                                  <SelectValue placeholder="Auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {floorOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachricht (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Weitere Infos, Terminwunsch..." 
                              rows={2}
                              {...field} 
                              data-testid="input-message"
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
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-hero-privacy"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Ich habe die{" "}
                              <Link href="/datenschutz" className="text-primary underline hover:no-underline">
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
                      size="lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-form"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Jetzt kostenloses Angebot sichern"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Banner - Social Proof */}
      <div className="bg-foreground py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center" data-testid="stat-laufende">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Jahre Erfahrung</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center" data-testid="stat-abgeschlossen">
              <div className="text-3xl font-bold text-primary">282</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Begeisterte Kunden</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center" data-testid="stat-partner">
              <div className="text-3xl font-bold text-primary">100€</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Bei Verspätung</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center" data-testid="stat-guarantee">
              <div className="text-3xl font-bold text-primary">5 Jahre</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Gewährleistung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="leistungen" className="py-6 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Die richtige Lösung für Ihr Projekt</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"><strong>Estrich-Leistungen München</strong> – Welcher Boden passt zu Ihnen?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Von <Link href="/leistungen/zementestrich" className="text-primary hover:underline"><strong>Zementestrich München</strong></Link> über{" "}
              <Link href="/leistungen/fliessestrich" className="text-primary hover:underline"><strong>Fließestrich München</strong></Link> bis{" "}
              <Link href="/leistungen/heizestrich" className="text-primary hover:underline"><strong>Heizestrich München</strong></Link>:{" "}
              <strong className="text-foreground">Über 2.500 zufriedene Kunden</strong> haben uns bereits ihr Vertrauen geschenkt. <strong className="text-foreground">Sie könnten der nächste sein.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.id} href={`/leistungen/${service.id}`}>
                <Card 
                  className="overflow-visible group cursor-pointer hover-elevate h-full"
                  data-testid={`card-service-${index}`}
                >
                  <div className="relative h-52 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={`${service.title} München - Estricharbeiten vom Meisterbetrieb`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3 pt-5">
                    <CardTitle className="text-lg" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-sm text-muted-foreground italic">{service.problem}</p>
                    <p className="text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4"><strong className="text-foreground">Nicht sicher, welcher Estrich der richtige ist?</strong> Wir beraten Sie ehrlich – und empfehlen nur, was Sie wirklich brauchen. Kein Upselling.</p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-services-cta">
                Kostenlose Beratung – Jetzt Termin sichern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-6">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">In 4 Schritten zum Traumboden</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">So einfach geht's – <strong>Estrich verlegen in München</strong></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              <strong className="text-foreground">Kein Stress. Keine Überraschungen. Keine schlaflosen Nächte.</strong> Als erfahrener <strong className="text-foreground">Estrichleger München</strong> nehmen wir Ihnen die Last ab – Sie lehnen sich zurück.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
                data-testid={`step-${index}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-xl" data-testid={`text-step-number-${index}`}>{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-border" />
                  )}
                </div>
                <h3 className="font-bold text-lg mb-3 tracking-tight" data-testid={`text-step-title-${index}`}><strong>{step.title}</strong></h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-6 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ehrliche Preise – keine bösen Überraschungen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"><strong>Estrich Kosten München</strong> – Was andere verschweigen, sagen wir Ihnen vorher</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              <strong className="text-foreground">Kennen Sie das?</strong> Die Rechnung kommt – und ist plötzlich 40% höher als das Angebot. <strong className="text-foreground">Bei uns nicht.</strong> Der Preis im Angebot ist der Preis, den Sie zahlen. Punkt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingItems.map((item, index) => (
              <Link key={index} href={`/leistungen/${item.slug}`}>
                <Card className="text-center relative overflow-visible hover-elevate cursor-pointer h-full" data-testid={`card-pricing-${index}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg" data-testid={`text-pricing-title-${index}`}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-2">
                    <div className="text-4xl font-bold text-primary" data-testid={`text-pricing-value-${index}`}>
                      ab {item.price}
                    </div>
                    <div className="text-sm text-muted-foreground">Euro pro m²</div>
                    <p className="text-xs text-muted-foreground pt-2 border-t">{item.note}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4"><strong className="text-foreground">Die Nachfrage steigt – die Termine werden knapper.</strong> Sichern Sie sich jetzt Ihren Festpreis, bevor die Preise anziehen.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" data-testid="button-pricing-cta">
                  Jetzt Festpreis sichern
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/preise">
                <Button size="lg" variant="outline" data-testid="button-full-price-list">
                  Alle Preise im Detail
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-6">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihre Fragen – unsere ehrlichen Antworten</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Das fragen uns 9 von 10 Kunden – <strong>bevor sie uns vertrauen</strong></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              <strong className="text-foreground">Skepsis ist gesund.</strong> Wir verstehen das. Lesen Sie, was andere Kunden gefragt haben – und warum sie heute sagen: <strong className="text-foreground">"Endlich ein Handwerker, dem ich vertrauen kann."</strong>
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-md border px-6"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left font-medium py-4 hover:no-underline"
                    data-testid={`button-faq-trigger-${index}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4" data-testid={`text-faq-answer-${index}`}>
                    <p className="mb-2">{item.answer}</p>
                    {item.link && (
                      <Link href={item.link} className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                        {item.linkText} <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4"><strong className="text-foreground">Immer noch unsicher?</strong> Ein Gespräch kostet Sie nichts – außer 5 Minuten. <strong className="text-foreground">Aber es könnte Ihnen Wochen Ärger ersparen.</strong></p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-faq-cta">
                  Jetzt kostenlos beraten lassen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" data-testid="button-more-faq">
                  Weitere Fragen ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section - Deep Content */}
      <section id="estrich-wissen" className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Fachwissen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              <strong>Estrich-Fachwissen</strong> – DIN-Normen & technische Spezifikationen
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Als <strong className="text-foreground">Estrichleger Meisterbetrieb München</strong> arbeiten wir ausschließlich nach 
              <strong className="text-foreground"> DIN 18560</strong> (Estriche im Bauwesen) und <strong className="text-foreground">DIN 18202</strong> (Toleranzen im Hochbau). 
              Hier finden Sie die wichtigsten technischen Daten für Ihre Planung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="overflow-visible" data-testid={`card-tech-spec-${index}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {index === 0 && <Wrench className="w-5 h-5 text-primary" />}
                    {index === 1 && <Thermometer className="w-5 h-5 text-primary" />}
                    {index === 2 && <Zap className="w-5 h-5 text-primary" />}
                    {index === 3 && <Clock className="w-5 h-5 text-primary" />}
                    {spec.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {spec.specs.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              <strong>Estriche München</strong> – Qualitätsstandards unseres Meisterbetriebs
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <strong>DIN-konforme Ausführung</strong>
                </div>
                <p className="text-sm text-muted-foreground">
                  Alle <Link href="/leistungen/zementestrich" className="text-primary hover:underline">Zementestrich-Arbeiten</Link> und{" "}
                  <Link href="/leistungen/fliessestrich" className="text-primary hover:underline">Fließestrich-Verlegungen</Link> erfolgen 
                  nach DIN 18560 mit dokumentierter Qualitätssicherung. Ebenheitstoleranzen nach DIN 18202 garantiert.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <strong>Normgerechte Aufheizprotokolle</strong>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bei <Link href="/leistungen/heizestrich" className="text-primary hover:underline">Heizestrich für Fußbodenheizung</Link> erstellen wir 
                  Aufheizprotokolle nach DIN EN 1264. Dokumentation für Versicherung und Gewährleistung inklusive. 
                  Besonders wichtig bei <strong>Estrich Neubau München</strong>.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <strong>CM-Feuchtemessung</strong>
                </div>
                <p className="text-sm text-muted-foreground">
                  Vor der Bodenbelagsverlegung messen wir die Restfeuchte mit der CM-Methode (Calciumcarbid). 
                  Grenzwerte: Zementestrich ≤2,0 CM-%, Calciumsulfatestrich ≤0,5 CM-%. Messprotokoll für Ihren Bodenleger.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Haben Sie technische Fragen?</strong> Unsere Meister beraten Sie kostenlos zu 
              <Link href="/leistungen" className="text-primary hover:underline"> allen Estricharten</Link>,{" "}
              <Link href="/preise" className="text-primary hover:underline">Estrich Kosten München</Link> und optimalen Aufbauhöhen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-tech-cta">
                  Kostenlose Fachberatung anfordern
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/rechner">
                <Button size="lg" variant="outline" data-testid="button-tech-calculator">
                  Estrich-Kostenrechner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="referenzen" className="py-8 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Referenzen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Aktuelle <strong>Estrich-Projekte in München</strong></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Von <strong className="text-foreground">Estrich Neubau München</strong> bis <strong className="text-foreground">Estrich Sanierung München</strong>: 
              Sehen Sie, wie wir <Link href="/leistungen/zementestrich" className="text-primary hover:underline"><strong>Zementestrich</strong></Link> und{" "}
              <Link href="/leistungen/fliessestrich" className="text-primary hover:underline"><strong>Fließestrich</strong></Link> für unsere Kunden realisieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 6).map((study, index) => (
              <Card key={index} className="overflow-visible hover-elevate" data-testid={`card-case-study-${index}`}>
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">{study.type}</Badge>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      <span>{study.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{study.description}</p>
                  {study.link && (
                    <Link href={study.link} className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
                      Mehr erfahren <ChevronRight className="w-3 h-3" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Ihr Projekt könnte das nächste sein.</strong> Ob <Link href="/leistungen/zementestrich" className="text-primary hover:underline">Zementestrich München</Link>, 
              <Link href="/leistungen/fliessestrich" className="text-primary hover:underline"> Fließestrich München</Link> oder{" "}
              <Link href="/leistungen/sanierung" className="text-primary hover:underline">Estrichsanierung</Link> – wir beraten Sie kostenlos.
            </p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-case-studies-cta">
                Kostenloses Angebot anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Estrich-Ratgeber Section - SEO Content */}
      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">
                <strong>Estriche München</strong> – Ihr Ratgeber für den perfekten Boden
              </h2>
              <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Estrich ist mehr als nur eine Bodenschicht</strong> – er ist das Fundament für jeden Bodenbelag. 
                  Als erfahrener <strong className="text-foreground">Estrichleger München</strong> wissen wir: Die richtige Estrichart entscheidet über 
                  Langlebigkeit, Wärmeleitfähigkeit und Belastbarkeit Ihres Bodens.
                </p>
                <p>
                  <strong className="text-foreground">Zementestrich</strong> ist der Klassiker im deutschen Hausbau. Robust, wirtschaftlich und vielseitig einsetzbar – 
                  vom Keller bis zum Dachboden. Die <Link href="/preise" className="text-primary hover:underline">Estrich Kosten München</Link> für Zementestrich 
                  starten bei 32€/m² und bieten das beste Preis-Leistungs-Verhältnis für <strong className="text-foreground">Estrich Neubau München</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Fließestrich (Calciumsulfat)</strong> überzeugt durch selbstnivellierende Eigenschaften und eignet sich ideal 
                  für Fußbodenheizungen. Die bessere Wärmeleitfähigkeit bedeutet schnelleres Aufheizen und niedrigere Heizkosten. 
                  Besonders bei <strong className="text-foreground">Estrich Sanierung München</strong> in Altbauten mit nachträglicher Fußbodenheizung ist 
                  Fließestrich oft die optimale Wahl.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">Warum Kunden uns als <strong>Estrichleger München</strong> wählen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Meisterbetrieb mit Erfahrung:</strong>
                    <p className="text-sm text-muted-foreground">30+ Jahre Erfahrung als Estrichleger in München. Über 2.500 Projekte erfolgreich abgeschlossen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Festpreis ohne Überraschungen:</strong>
                    <p className="text-sm text-muted-foreground">Transparente Estrich Kosten München. Der Preis im Angebot ist der Endpreis – garantiert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Neubau & Sanierung:</strong>
                    <p className="text-sm text-muted-foreground">Ob Estrich Neubau München oder Estrich Sanierung München – wir liefern für jeden Bedarf.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Alle Estricharten:</strong>
                    <p className="text-sm text-muted-foreground">Zementestrich, Fließestrich, Heizestrich, Schnellestrich, Industrieböden – alles aus einer Hand.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/rechner">
                  <Button variant="outline" data-testid="button-ratgeber-rechner">
                    Estrich Kosten berechnen
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Vorteil: Lokale Nähe</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"><strong>Estrichleger München</strong> – In Ihrer Nachbarschaft vor Ort</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Keine langen Anfahrtswege, keine Verzögerungen. <strong className="text-foreground">Wir kennen München</strong> – und sind schneller bei Ihnen, als Sie denken. Erfahren Sie mehr <Link href="/ueber-uns" className="text-primary hover:underline"><strong>über unser Team</strong></Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card data-testid="card-munich-districts">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  München Stadtbezirke
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region, index) => (
                    <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-region-${index}`}>
                      {region}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-surrounding-areas">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Landkreise & Umland
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {surroundingAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-area-${index}`}>
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-6 bg-muted/30">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight"><strong>Estrich Angebot</strong> anfordern – Ihr erster Schritt aus dem Baustellen-Chaos</h2>
              <p className="text-muted-foreground mb-8">
                <strong className="text-foreground">Jeder Tag, den Sie warten, kostet Sie:</strong> Zeit, Nerven, und möglicherweise Geld. 
                Machen Sie jetzt den ersten Schritt – in 60 Sekunden. <strong className="text-foreground">100% kostenlos. 0% Risiko. 100% Klarheit.</strong>
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-phone-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <a 
                      href="tel:+4989444438872" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      089 444438872
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-email-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">E-Mail</div>
                    <a 
                      href="mailto:info@estriche-muenchen.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@estriche-muenchen.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-region-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Einsatzgebiet</div>
                    <div className="text-muted-foreground" data-testid="text-service-region">München & Umgebung (ca. 25 km)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-hours-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Erreichbarkeit</div>
                    <div className="text-muted-foreground" data-testid="text-business-hours">Mo–Fr: 08:00–16:30 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-primary/20" data-testid="card-contact-form">
              <CardHeader>
                <div className="bg-green-600 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Persönliche Antwort in unter 24h
                </div>
                <CardTitle>Schluss mit der Ungewissheit – Festpreis jetzt anfordern</CardTitle>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">60 Sekunden ausfüllen</strong> – und Sie wissen endlich, was Ihr Boden wirklich kostet. <strong className="text-foreground">Keine Überraschungen. Versprochen.</strong>
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vorname*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Max" 
                                {...field} 
                                data-testid="input-contact-firstname"
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
                            <FormLabel>Nachname*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Mustermann" 
                                {...field} 
                                data-testid="input-contact-lastname"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+49 ..." 
                                type="tel"
                                {...field} 
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="mail@beispiel.de" 
                                type="email"
                                {...field} 
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="estrichType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estrich-Typ*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-contact-estrich-type">
                                <SelectValue placeholder="Bitte auswählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {estrichTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="squareMeters"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Fläche (m²)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="z.B. 120" 
                                type="number"
                                {...field} 
                                data-testid="input-contact-sqm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="floor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stockwerk</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-floor">
                                  <SelectValue placeholder="Auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {floorOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachricht (optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Weitere Infos, Terminwunsch..." 
                              rows={3}
                              {...field} 
                              data-testid="input-contact-message"
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
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-contact-privacy"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Ich habe die{" "}
                              <Link href="/datenschutz" className="text-primary underline hover:no-underline">
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
                      size="lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-contact-submit"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Jetzt meinen Festpreis erfahren →"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Kein Spam. Keine Weitergabe Ihrer Daten. Nur Ihr persönliches Angebot – ehrlich und verbindlich.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
