import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2, 
  ChevronRight,
  Building2
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
    title: "Sie schildern Ihr Problem",
    description: "Füllen Sie unser einfaches Formular in nur 60 Sekunden aus – kein langes Telefonieren, kein Warten in Warteschleifen. Beschreiben Sie kurz Ihr Projekt und Ihre Wünsche. Wir melden uns garantiert innerhalb von 24 Stunden bei Ihnen zurück. So sparen Sie Zeit und Nerven von Anfang an.",
  },
  {
    number: "02",
    title: "Wir finden die Lösung",
    description: "Unser Experte kommt kostenlos zu Ihnen vor Ort und analysiert die Situation. Wir besprechen alle Optionen, klären Ihre Fragen und erstellen ein maßgeschneidertes Konzept. Sie erhalten einen verbindlichen Festpreis – schwarz auf weiß, ohne versteckte Kosten oder böse Überraschungen.",
  },
  {
    number: "03",
    title: "Wir setzen um – stressfrei",
    description: "Pünktlicher Start zum vereinbarten Termin, professionelle Ausführung durch unser erfahrenes Team. Wir halten die Baustelle sauber, arbeiten effizient und kommunizieren transparent. Sie können sich entspannen – wir kümmern uns um alles und halten Sie auf dem Laufenden.",
  },
  {
    number: "04",
    title: "Sie genießen das Ergebnis",
    description: "Perfekt ebener Estrich, termingerecht fertiggestellt und qualitätsgeprüft. Endlich können Sie mit dem nächsten Schritt Ihres Projekts beginnen – Bodenbelag verlegen, einziehen, weiterbauen. Keine Verzögerungen, keine Nachbesserungen nötig. Einfach ein Boden, der hält, was wir versprechen.",
  },
];

const pricingItems = [
  {
    title: "Zementestrich",
    price: "25–45",
    note: "Je nach Stärke, Aufbau und Baustellenlogistik.",
    slug: "zementestrich",
  },
  {
    title: "Industrieböden",
    price: "45–95",
    note: "Hochbelastbar für Gewerbe und Industrie.",
    slug: "industrieboeden",
  },
  {
    title: "Fußbodenheizung",
    price: "45–75",
    note: "Inkl. Abstimmung und Aufheizprotokoll.",
    slug: "fussbodenheizung",
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
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-3 space-y-8">
              <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide">
                Estrich-Experten seit 2008
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground">
                Ihr Estrich-Problem?
                <span className="block text-primary mt-3">Wir lösen es. Garantiert.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                <strong className="text-primary-foreground">Kennen Sie das?</strong> Handwerker, die nicht erscheinen. 
                Termine, die platzen. Böden, die nicht eben sind. <strong className="text-primary-foreground">Das muss nicht sein.</strong>
              </p>
              <p className="text-lg text-primary-foreground max-w-xl leading-relaxed">
                Stellen Sie sich vor: Ein perfekt ebener Estrich, termingerecht geliefert, ohne Stress – 
                so dass Sie endlich mit dem Verlegen beginnen können.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/angebot">
                  <Button 
                    size="lg" 
                    data-testid="button-hero-cta"
                  >
                    Ja, ich will stressfreien Estrich
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
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-0">Termingarantie</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-1">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-1">Festpreis vorab</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-2">282+ Kunden</span>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <Card className="lg:col-span-2 shadow-xl border-0 bg-card/95 backdrop-blur-sm" data-testid="card-hero-form">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-3">
                  Kostenlos & Unverbindlich
                </Badge>
                <CardTitle className="text-2xl">Ihr Angebot in 24h</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  60 Sekunden ausfüllen, verbindlichen Preis erhalten. Kein Risiko, keine Verpflichtung.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center" data-testid="stat-laufende">
              <div className="text-3xl font-bold text-primary">48</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Aktuelle Projekte</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center" data-testid="stat-abgeschlossen">
              <div className="text-3xl font-bold text-primary">282+</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Zufriedene Kunden</div>
            </div>
            <div className="w-px h-10 bg-background/20 hidden sm:block" />
            <div className="text-center" data-testid="stat-partner">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-background/70 uppercase tracking-wide mt-1">Terminzuverlässigkeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="leistungen" className="py-6 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Leistungen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">So lösen wir Ihr Boden-Problem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Egal welche Herausforderung – wir haben die passende Lösung. Profitieren Sie von unserer 
              Erfahrung aus über 282 erfolgreich abgeschlossenen Projekten.
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
                      alt={service.title}
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
            <p className="text-muted-foreground mb-4">Nicht sicher, welche Lösung die richtige ist?</p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-services-cta">
                Kostenlose Beratung anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unser Ablauf</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">In 4 Schritten zum perfekten Boden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Kein Rätselraten, keine Überraschungen. So einfach ist der Weg zu Ihrem fertigen Estrich.
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
                <h3 className="font-bold text-lg mb-3 tracking-tight" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-6 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Transparente Preise</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Faire Preise, keine versteckten Kosten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Bei uns wissen Sie vorher, was es kostet. Keine bösen Überraschungen – versprochen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
            <Link href="/rechner">
              <Button size="lg" data-testid="button-pricing-cta">
                Kostenloser Budgetrechner
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Haben Sie noch Fragen?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
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

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4">Haben Sie eine andere Frage? Wir beantworten sie gerne persönlich.</p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-faq-cta">
                Jetzt Kontakt aufnehmen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-6 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unser Einsatzgebiet</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Wir kommen zu Ihnen – schnell und zuverlässig</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
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
      <section id="kontakt" className="py-6 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Bereit, Ihr Estrich-Problem zu lösen?</h2>
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
                      {contactMutation.isPending ? "Wird gesendet..." : "Ja, ich möchte mein kostenloses Angebot"}
                    </Button>
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
