import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Layers,
  Thermometer,
  Droplets,
  Shield,
  Wrench,
  Zap,
  Building2,
  Home as HomeIcon,
  Users,
  Timer,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
import { ThemeToggle } from "@/components/theme-toggle";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  project: z.string().min(1, "Bitte wählen Sie ein Projekt aus"),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Projekt kurz"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  {
    icon: Layers,
    title: "Zementestrich",
    description: "Der Klassiker: robust, universell einsetzbar, ideal für Wohn- und Gewerbeflächen. Auf Wunsch mit Beschleuniger oder als Verbundestrich.",
    features: ["Neubau & Sanierung", "Hohe Belastbarkeit", "Perfekte Grundlage für Beläge"],
  },
  {
    icon: Droplets,
    title: "Anhydritestrich",
    description: "Besonders beliebt im Innenbereich: sehr gute Ebenheit, angenehmes Laufgefühl, ideal in Kombination mit Fußbodenheizung.",
    features: ["Sehr plan & glatt", "Top für Fußbodenheizung", "Schnelle Verarbeitung"],
  },
  {
    icon: Thermometer,
    title: "Heizestrich",
    description: "Estrich auf Fußbodenheizung braucht Erfahrung: richtige Überdeckung, Randzonen, Aufheizprotokoll und koordinierte Trocknung.",
    features: ["Aufheiz-/Funktionsheizen", "Risse vermeiden", "Gewerkeabstimmung"],
  },
  {
    icon: Shield,
    title: "Dämmung & Bodenaufbau",
    description: "Trittschalldämmung, Wärmedämmung, PE-Folie, Randdämmstreifen – normgerechter Aufbau inklusive Höhenausgleich.",
    features: ["Trittschall reduzieren", "Wärmeverluste minimieren", "Saubere Anschlüsse"],
  },
  {
    icon: Wrench,
    title: "Sanierung & Reparatur",
    description: "Hohllagen, Risse, Höhenprobleme oder beschädigte Stellen: Wir prüfen den Untergrund und reparieren zielgerichtet.",
    features: ["Untergrundprüfung", "Teilflächen-Reparatur", "Vorbereitung für neue Beläge"],
  },
  {
    icon: Zap,
    title: "Schnellestrich",
    description: "Wenn's schnell gehen muss: mit abgestimmten Zusatzmitteln und sauberer Dokumentation schneller zur Belegreife.",
    features: ["Beschleuniger nach Bedarf", "Koordination mit Folgegewerken", "Planung statt Risiko"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Kurzanfrage & Rückruf",
    description: "Sie senden kurz Fläche, Aufbauwunsch und Terminfenster. Wir klären die wichtigsten Eckdaten telefonisch.",
  },
  {
    number: "02",
    title: "Aufmaß & Aufbau-Check",
    description: "Wir prüfen Höhen, Türen, Anschlüsse, Dämmung, Randdämmung, Fugen – und vermeiden spätere Überraschungen.",
  },
  {
    number: "03",
    title: "Ausführung",
    description: "Saubere Vorbereitung, Abkleben/Schutz und fachgerechter Einbau. Sie bekommen ein ordentliches Ergebnis – plan & tragfähig.",
  },
  {
    number: "04",
    title: "Trocknung & Übergabe",
    description: "Wir geben Hinweise zu Lüftung/Begehbarkeit und koordinieren bei Bedarf das Funktionsheizen. Danach: Übergabe.",
  },
];

const pricingItems = [
  {
    title: "Zementestrich",
    price: "25–35",
    note: "Je nach Stärke, Aufbau und Baustellenlogistik.",
  },
  {
    title: "Anhydrit / Fließestrich",
    price: "28–40",
    note: "Ideal innen, sehr gute Ebenheit.",
  },
  {
    title: "Heizestrich",
    price: "32–45",
    note: "Inkl. Abstimmung und Aufheizprotokoll.",
  },
];

const faqItems = [
  {
    question: "Wie lange muss Estrich trocknen?",
    answer: "Die Trocknungszeit hängt von Estrichart, Stärke und Raumklima ab. Zementestrich benötigt in der Regel 1 Tag pro mm Stärke (bis 40 mm), danach 2 Tage pro mm. Anhydritestrich trocknet schneller. Wir geben Ihnen bei der Übergabe konkrete Hinweise zur Belegreife.",
  },
  {
    question: "Was kostet Estrich pro Quadratmeter?",
    answer: "Der Preis hängt von vielen Faktoren ab: Estrichart, Aufbauhöhe, Dämmung, Zugang/Pumpweg und Termin. Als grobe Orientierung: 25–45 €/m². Für ein genaues Angebot benötigen wir die Projektdetails.",
  },
  {
    question: "Welcher Estrich eignet sich für Fußbodenheizung?",
    answer: "Sowohl Zementestrich als auch Anhydritestrich funktionieren mit Fußbodenheizung. Anhydritestrich leitet Wärme etwas besser und kann dünner aufgebracht werden. Wir beraten Sie individuell zur besten Lösung.",
  },
  {
    question: "Können Sie auch kleine Flächen machen?",
    answer: "Ja, wir übernehmen auch kleinere Projekte wie Badezimmer, Balkone oder einzelne Räume. Bei sehr kleinen Flächen kann ein Mindestauftragswert gelten – sprechen Sie uns einfach an.",
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer: "Wir arbeiten in ganz München und im Umkreis von ca. 25–30 km. Das umfasst u.a. Starnberg, Dachau, Freising, Erding und Fürstenfeldbruck.",
  },
  {
    question: "Wie schnell können Sie anfangen?",
    answer: "Das hängt von unserer aktuellen Auslastung ab. In der Regel können wir innerhalb von 1–3 Wochen starten. Bei dringenden Projekten finden wir oft eine Lösung – fragen Sie uns einfach.",
  },
];

const regions = [
  "Altstadt-Lehel", "Schwabing", "Maxvorstadt", "Haidhausen", "Neuhausen-Nymphenburg",
  "Sendling", "Bogenhausen", "Moosach", "Milbertshofen", "Pasing", "Aubing", "Laim"
];

const surroundingAreas = [
  "Starnberg", "Dachau", "Freising", "Erding", "Fürstenfeldbruck", "Germering",
  "Unterschleißheim", "Garching", "Unterhaching", "Ottobrunn", "Haar", "Grünwald"
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      project: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
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
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="bg-foreground text-background py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-background/10 text-background border-0">
              <MapPin className="w-3 h-3 mr-1" />
              München & 25 km
            </Badge>
            <Badge variant="secondary" className="bg-background/10 text-background border-0 hidden sm:flex">
              <Clock className="w-3 h-3 mr-1" />
              Antwort i.d.R. innerhalb 24h
            </Badge>
          </div>
          <a 
            href="#kontakt" 
            onClick={(e) => { e.preventDefault(); scrollToSection("kontakt"); }}
            className="text-background/90 hover:text-background transition-colors font-medium"
            data-testid="link-topbar-contact"
          >
            Angebot anfragen
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
              className="flex items-center gap-3"
              data-testid="link-logo"
            >
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg leading-tight">Estrich München</div>
                <div className="text-xs text-muted-foreground">Estrich • Bodenaufbau • Sanierung</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("leistungen")}
                data-testid="nav-leistungen"
              >
                Leistungen
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("ablauf")}
                data-testid="nav-ablauf"
              >
                Ablauf
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("preise")}
                data-testid="nav-preise"
              >
                Preise
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("faq")}
                data-testid="nav-faq"
              >
                FAQ
              </Button>
              <Button 
                onClick={() => scrollToSection("kontakt")}
                data-testid="nav-kontakt"
              >
                Kontakt
              </Button>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection("leistungen")}
                data-testid="mobile-nav-leistungen"
              >
                Leistungen
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection("ablauf")}
                data-testid="mobile-nav-ablauf"
              >
                Ablauf
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection("preise")}
                data-testid="mobile-nav-preise"
              >
                Preise
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection("faq")}
                data-testid="mobile-nav-faq"
              >
                FAQ
              </Button>
              <Button 
                className="w-full"
                onClick={() => scrollToSection("kontakt")}
                data-testid="mobile-nav-kontakt"
              >
                Jetzt Angebot anfragen
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-3 space-y-6">
              <Badge variant="secondary" className="text-sm">
                Estricharbeiten in München
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Plan. Tragfähig. Termintreu.
                <span className="block text-primary mt-2">Estrich & Bodenaufbau vom Profi.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Ob Neubau, Sanierung oder Fußbodenheizung: Wir erstellen den passenden Estrichaufbau
                fachgerecht, sauber und mit klarer Kommunikation – vom Aufmaß bis zur Abnahme.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("kontakt")}
                  data-testid="button-hero-cta"
                >
                  Kostenlos anfragen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("leistungen")}
                  data-testid="button-hero-services"
                >
                  Leistungen ansehen
                </Button>
              </div>

              {/* Trust Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t mt-8" data-testid="hero-trust-row">
                <div className="flex items-start gap-3" data-testid="trust-item-0">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-0">Saubere Baustelle</div>
                    <div className="text-xs text-muted-foreground">Abkleben, Schutz, Ordnung</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="trust-item-1">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Timer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-1">Feste Termine</div>
                    <div className="text-xs text-muted-foreground">Planung mit Puffer</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="trust-item-2">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-2">Gerade Flächen</div>
                    <div className="text-xs text-muted-foreground">Präzise Höhen & Ebenheit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <Card className="lg:col-span-2 shadow-lg" data-testid="card-hero-form">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Schnell-Angebot</CardTitle>
                <p className="text-sm text-muted-foreground">
                  In 60 Sekunden – wir melden uns zügig zurück.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name*</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Max Mustermann" 
                              {...field} 
                              data-testid="input-name"
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
                    <FormField
                      control={form.control}
                      name="project"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Projekt*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-project">
                                <SelectValue placeholder="Bitte auswählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="neubau">Neubau</SelectItem>
                              <SelectItem value="sanierung">Sanierung / Altbau</SelectItem>
                              <SelectItem value="heizestrich">Fußbodenheizung / Heizestrich</SelectItem>
                              <SelectItem value="gewerbe">Gewerbe</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kurzbeschreibung*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="z.B. 120 m², 1. OG, Heizestrich, Terminwunsch..." 
                              rows={3}
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-form"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Anfrage senden"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Mit Absenden akzeptieren Sie die Verarbeitung Ihrer Daten zur Angebotsbearbeitung.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center" data-testid="badge-privat-gewerbe">
              <div className="w-12 h-12 mx-auto mb-3 rounded-md bg-primary/10 flex items-center justify-center">
                <HomeIcon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold">Privat & Gewerbe</div>
              <div className="text-sm text-muted-foreground">Wohnungen, Häuser, Hallen</div>
            </div>
            <div className="text-center" data-testid="badge-estriche">
              <div className="w-12 h-12 mx-auto mb-3 rounded-md bg-primary/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold">Alle gängigen Estriche</div>
              <div className="text-sm text-muted-foreground">Zement, Anhydrit, Fließestrich</div>
            </div>
            <div className="text-center" data-testid="badge-region">
              <div className="w-12 h-12 mx-auto mb-3 rounded-md bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold">Region München</div>
              <div className="text-sm text-muted-foreground">Stadt & Umland (25 km)</div>
            </div>
            <div className="text-center" data-testid="badge-beratung">
              <div className="w-12 h-12 mx-auto mb-3 rounded-md bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold">Transparente Beratung</div>
              <div className="text-sm text-muted-foreground">Aufbau, Trocknung, Belegreife</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir planen den passenden Bodenaufbau, stimmen Höhen mit angrenzenden Gewerken ab
              und liefern eine saubere, ebene Fläche als Basis für Parkett, Fliesen, Vinyl & Co.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-visible"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">So läuft's ab</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Klarer Prozess, klare Zuständigkeiten – damit Sie Planungssicherheit haben.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 items-start"
                  data-testid={`step-${index}`}
                >
                  <div className="w-14 h-14 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg" data-testid={`text-step-number-${index}`}>{step.number}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-lg mb-2" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                    <p className="text-muted-foreground" data-testid={`text-step-description-${index}`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Preis-Orientierung</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jedes Objekt ist anders (Aufbauhöhe, Dämmung, Zugang, Pumpweg, Termin). 
              Diese Werte helfen zur ersten Einordnung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingItems.map((item, index) => (
              <Card key={index} className="text-center" data-testid={`card-pricing-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg" data-testid={`text-pricing-title-${index}`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary" data-testid={`text-pricing-value-${index}`}>
                    ab {item.price} <span className="text-lg font-normal text-muted-foreground">€/m²</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => scrollToSection("kontakt")} data-testid="button-pricing-cta">
              Individuelles Angebot anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Häufige Fragen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um Estricharbeiten.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
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
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unser Einsatzgebiet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estricharbeiten in München und im Umkreis von ca. 25–30 km.
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
      <section id="kontakt" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kontakt aufnehmen</h2>
              <p className="text-muted-foreground mb-8">
                Haben Sie Fragen oder möchten ein unverbindliches Angebot? 
                Wir freuen uns auf Ihre Anfrage und melden uns schnellstmöglich.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-phone-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <a 
                      href="tel:+4989123456789" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +49 89 123 456 789
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
                      href="mailto:info@estrich-muenchen.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@estrich-muenchen.de
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
                    <div className="text-muted-foreground" data-testid="text-business-hours">Mo–Fr: 7:00–18:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg" data-testid="card-contact-form">
              <CardHeader>
                <CardTitle>Anfrage senden</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Beschreiben Sie Ihr Projekt – wir melden uns schnellstmöglich.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Max Mustermann" 
                                {...field} 
                                data-testid="input-contact-name"
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
                    </div>
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
                    <FormField
                      control={form.control}
                      name="project"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Projekt*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-contact-project">
                                <SelectValue placeholder="Bitte auswählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="neubau">Neubau</SelectItem>
                              <SelectItem value="sanierung">Sanierung / Altbau</SelectItem>
                              <SelectItem value="heizestrich">Fußbodenheizung / Heizestrich</SelectItem>
                              <SelectItem value="gewerbe">Gewerbe</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kurzbeschreibung*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="z.B. 120 m², 1. OG, Heizestrich, Terminwunsch..." 
                              rows={4}
                              {...field} 
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
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
                      {contactMutation.isPending ? "Wird gesendet..." : "Anfrage senden"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Mit Absenden akzeptieren Sie die Verarbeitung Ihrer Daten zur Angebotsbearbeitung.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2" data-testid="footer-brand">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">E</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Estrich München</div>
                  <div className="text-xs text-background/70">Estrich • Bodenaufbau • Sanierung</div>
                </div>
              </div>
              <p className="text-background/70 text-sm max-w-md" data-testid="text-footer-description">
                Ihr zuverlässiger Partner für professionelle Estricharbeiten in München und Umgebung. 
                Termintreu, sauber und fachgerecht.
              </p>
            </div>

            <div data-testid="footer-services">
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Zementestrich</li>
                <li>Anhydritestrich</li>
                <li>Heizestrich</li>
                <li>Dämmung & Bodenaufbau</li>
                <li>Sanierung & Reparatur</li>
              </ul>
            </div>

            <div data-testid="footer-contact">
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li data-testid="text-footer-phone">+49 89 123 456 789</li>
                <li data-testid="text-footer-email">info@estrich-muenchen.de</li>
                <li>München & Umgebung</li>
                <li>Mo–Fr: 7:00–18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Estrich München. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors" data-testid="link-impressum">
                Impressum
              </a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-datenschutz">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
