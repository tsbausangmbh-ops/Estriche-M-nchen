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
  Shield,
  Wrench,
  Zap,
  Building2,
  Users
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
import heroImage from "@assets/stock_images/professional_constru_6db39a97.jpg";

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
    title: "Zementestrich und Fließestrich",
    problem: "Ihr Problem: Unebene Böden, die jeden Belag ruinieren?",
    description: "Wir liefern perfekt plane Flächen – die ideale Basis für Parkett, Fliesen oder Vinyl. Kein Nacharbeiten, kein Ärger.",
    features: ["Perfekte Ebenheit garantiert", "Für jeden Bodenbelag geeignet", "Schneller als Sie denken"],
  },
  {
    icon: Building2,
    title: "Industrieböden und Sichtestrich",
    problem: "Ihr Problem: Böden, die der Belastung nicht standhalten?",
    description: "Unsere Industrieböden sind für härteste Beanspruchung gemacht. Sichtestrich vereint dabei Funktion mit modernem Design.",
    features: ["Extreme Belastbarkeit", "Optisch ein Hingucker", "Langlebig und wartungsarm"],
  },
  {
    icon: Thermometer,
    title: "Fußbodenheizung einfräsen",
    problem: "Ihr Problem: Kalte Füße, aber Angst vor dem Renovierungschaos?",
    description: "Wir fräsen Ihre Fußbodenheizung nachträglich ein – ohne den ganzen Estrich rauszureißen. Sauber, schnell, stressfrei.",
    features: ["Kein kompletter Abriss nötig", "In wenigen Tagen erledigt", "Ab 45€/m² möglich"],
  },
  {
    icon: Shield,
    title: "Wärmedämmung & Abdichtung",
    problem: "Ihr Problem: Hohe Heizkosten durch schlechte Dämmung?",
    description: "Mit professioneller Wärmedämmung senken Sie Ihre Energiekosten dauerhaft. Wir machen Ihren Boden energieeffizient.",
    features: ["Heizkosten sparen", "Trittschall reduzieren", "Normgerechter Aufbau"],
  },
  {
    icon: Wrench,
    title: "Sanierung & Reparatur",
    problem: "Ihr Problem: Risse, Hohlstellen oder unebene alte Böden?",
    description: "Wir retten Ihren bestehenden Estrich – oft ohne kompletten Austausch. Gezielt, schnell und kosteneffizient.",
    features: ["Diagnose vor Ort", "Oft günstiger als Neubau", "Schnelle Lösung"],
  },
  {
    icon: Zap,
    title: "Schnellestrich",
    problem: "Ihr Problem: Termindrückt, aber der Estrich braucht ewig zum Trocknen?",
    description: "Unser Schnellestrich ist in Rekordzeit belegreif. Perfekt, wenn jeder Tag zählt.",
    features: ["Bis zu 50% schneller", "Gleiche Qualität", "Ideal bei Zeitdruck"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Sie schildern Ihr Problem",
    description: "60 Sekunden Formular ausfüllen – fertig. Kein langes Telefonieren, kein Warten. Wir melden uns bei Ihnen.",
  },
  {
    number: "02",
    title: "Wir finden die Lösung",
    description: "Kostenlose Vor-Ort-Beratung. Wir analysieren, planen und geben Ihnen einen verbindlichen Festpreis. Keine versteckten Kosten.",
  },
  {
    number: "03",
    title: "Wir setzen um – stressfrei",
    description: "Saubere Baustelle, pünktlicher Start, professionelle Ausführung. Sie lehnen sich zurück, wir arbeiten.",
  },
  {
    number: "04",
    title: "Sie genießen das Ergebnis",
    description: "Perfekt ebener Boden, termingerecht fertig. Endlich können Sie mit dem nächsten Schritt beginnen – ohne Verzögerung.",
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
    question: "Ich habe schlechte Erfahrungen mit Handwerkern gemacht. Warum sollte ich Ihnen vertrauen?",
    answer: "Das verstehen wir – und genau deshalb arbeiten wir anders: Festpreis vorab, schriftliche Terminzusage, und wir räumen hinter uns auf. Über 282 zufriedene Kunden in München können das bestätigen. Fragen Sie uns nach Referenzen – wir haben nichts zu verbergen.",
  },
  {
    question: "Was kostet mich das Ganze? Gibt es versteckte Kosten?",
    answer: "Nein, bei uns nicht. Sie bekommen ein verbindliches Festpreis-Angebot nach der Besichtigung. Was wir nennen, gilt. Keine Nachforderungen, keine bösen Überraschungen. Richtwert: 25–45 €/m² je nach Aufbau.",
  },
  {
    question: "Wie lange dauert es, bis ich meinen Bodenbelag verlegen kann?",
    answer: "Normalerweise 3-4 Wochen bei Zementestrich. Aber: Mit unserem Schnellestrich geht's auch in der Hälfte der Zeit. Wir besprechen Ihren Zeitplan und finden die beste Lösung für Sie.",
  },
  {
    question: "Ich habe nur ein kleines Projekt (Bad, Balkon). Lohnt sich das für Sie?",
    answer: "Ja, absolut! Wir nehmen auch kleinere Projekte an. Jeder Kunde ist uns wichtig – egal ob 15 m² oder 1500 m². Fragen Sie einfach unverbindlich an.",
  },
  {
    question: "Was passiert, wenn etwas schief geht?",
    answer: "Dann machen wir es richtig – auf unsere Kosten. Wir stehen zu unserer Arbeit. Deshalb haben wir auch eine Gewährleistung auf alle unsere Leistungen. Ihr Risiko? Null.",
  },
  {
    question: "Wie schnell können Sie anfangen?",
    answer: "Oft schneller als Sie denken. Normalerweise innerhalb von 1–3 Wochen. Bei dringenden Fällen? Rufen Sie uns an – wir finden fast immer eine Lösung.",
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-3 space-y-6">
              <Badge variant="secondary" className="text-sm">
                Schluss mit Baustress und Terminproblemen
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Ihr Estrich-Problem?
                <span className="block text-primary mt-2">Wir lösen es. Garantiert.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                <strong className="text-foreground">Kennen Sie das?</strong> Handwerker, die nicht erscheinen. 
                Termine, die platzen. Böden, die nicht eben sind. <strong className="text-foreground">Das muss nicht sein.</strong> 
                Stellen Sie sich vor: Ein perfekt ebener Estrich, termingerecht geliefert, ohne Stress – 
                so dass Sie endlich mit dem Verlegen beginnen können.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-md p-4 my-4">
                <p className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span><strong>282+ zufriedene Kunden</strong> in München vertrauen uns bereits – wann dürfen wir auch Ihnen helfen?</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("kontakt")}
                  data-testid="button-hero-cta"
                >
                  Ja, ich will stressfreien Estrich
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("leistungen")}
                  data-testid="button-hero-services"
                >
                  Wie wir helfen
                </Button>
              </div>

              {/* Trust Row - Pain Points Solved */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t mt-8" data-testid="hero-trust-row">
                <div className="flex items-start gap-3" data-testid="trust-item-0">
                  <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-0">Nie wieder Terminärger</div>
                    <div className="text-xs text-muted-foreground">Wir halten, was wir versprechen</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="trust-item-1">
                  <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-1">Keine bösen Überraschungen</div>
                    <div className="text-xs text-muted-foreground">Festpreis-Garantie vorab</div>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="trust-item-2">
                  <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" data-testid="text-trust-title-2">Endlich perfekte Böden</div>
                    <div className="text-xs text-muted-foreground">Plan, eben, belegreif</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <Card className="lg:col-span-2 shadow-lg border-primary/20" data-testid="card-hero-form">
              <CardHeader className="pb-4">
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Kostenlos & Unverbindlich
                </div>
                <CardTitle className="text-xl">Ihr persönliches Angebot in 24h</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Nur 60 Sekunden – und Sie wissen, was Ihr Projekt kostet. Ohne Risiko.
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
                      size="lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-form"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Jetzt kostenloses Angebot sichern"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Kein Risiko, keine Verpflichtung – nur Klarheit über Ihre Kosten.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section - Social Proof */}
      <section className="py-16 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Warum so viele Kunden uns vertrauen</h2>
            <p className="text-muted-foreground">Während andere noch reden, liefern wir bereits Ergebnisse. Jeden Tag. Seit Jahren.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center" data-testid="stat-laufende">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">48</div>
              <div className="text-sm text-muted-foreground">Aktuelle Projekte</div>
            </div>
            <div className="text-center" data-testid="stat-abgeschlossen">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">282+</div>
              <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="text-center" data-testid="stat-partner">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Terminzuverlässigkeit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">So lösen wir Ihr Boden-Problem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Egal welche Herausforderung – wir haben die passende Lösung. Profitieren Sie von unserer 
              Erfahrung aus über 282 erfolgreich abgeschlossenen Projekten.
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
                  <p className="text-sm text-muted-foreground italic mt-2">{service.problem}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground font-medium text-sm leading-relaxed">
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

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Nicht sicher, welche Lösung die richtige ist?</p>
            <Button size="lg" onClick={() => scrollToSection("kontakt")} data-testid="button-services-cta">
              Kostenlose Beratung anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">In 4 Schritten zum perfekten Boden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kein Rätselraten, keine Überraschungen. So einfach ist der Weg zu Ihrem fertigen Estrich.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Faire Preise, keine versteckten Kosten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bei uns wissen Sie vorher, was es kostet. Keine bösen Überraschungen – versprochen.
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
            <Button size="lg" onClick={() => scrollToSection("kontakt")} data-testid="button-pricing-cta">
              Mein persönliches Angebot anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Haben Sie noch Fragen?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hier beantworten wir die häufigsten Fragen unserer Kunden. Falls Ihre Frage nicht dabei ist – fragen Sie uns einfach!
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

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Haben Sie eine andere Frage? Wir beantworten sie gerne persönlich.</p>
            <Button size="lg" onClick={() => scrollToSection("kontakt")} data-testid="button-faq-cta">
              Jetzt Kontakt aufnehmen
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Wir kommen zu Ihnen – schnell und zuverlässig</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Egal ob München-Zentrum oder Umland – wir sind in kürzester Zeit vor Ort.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit, Ihr Estrich-Problem zu lösen?</h2>
              <p className="text-muted-foreground mb-8">
                Machen Sie jetzt den ersten Schritt. In nur 60 Sekunden erfahren Sie, 
                was Ihr Projekt kostet – <strong className="text-foreground">garantiert ohne Verpflichtung</strong>.
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
            <Card className="shadow-lg border-primary/20" data-testid="card-contact-form">
              <CardHeader>
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Antwort innerhalb von 24 Stunden
                </div>
                <CardTitle>Jetzt starten – kostenlos & unverbindlich</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Beschreiben Sie Ihr Projekt – und wir zeigen Ihnen, wie wir helfen können.
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
                      {contactMutation.isPending ? "Wird gesendet..." : "Ja, ich möchte mein kostenloses Angebot"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Kein Risiko. Keine versteckten Kosten. Nur Klarheit.
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
                <li>Zementestrich & Fließestrich</li>
                <li>Industrieböden & Sichtestrich</li>
                <li>Fußbodenheizung einfräsen</li>
                <li>Wärmedämmung & Abdichtung</li>
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
