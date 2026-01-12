import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
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
    title: "Sichern Sie sich Ihren Termin",
    description: "Füllen Sie das Formular in nur 60 Sekunden aus – keine Warteschleife, kein Stress. Innerhalb von 24 Stunden meldet sich Ihr persönlicher Ansprechpartner. Jeder Tag, den Sie warten, schiebt Ihr Projekt weiter nach hinten. Handeln Sie jetzt.",
  },
  {
    number: "02",
    title: "Ihr Festpreis – schwarz auf weiß",
    description: "Unser Experte kommt kostenlos zu Ihnen. Sie sehen genau, was gemacht wird und was es kostet – ohne Kleingedrucktes, ohne versteckte Nachforderungen. 97% unserer Kunden sagen: 'Endlich mal ein Handwerker, der Wort hält.'",
  },
  {
    number: "03",
    title: "Wir arbeiten – Sie entspannen",
    description: "Am vereinbarten Tag sind wir pünktlich da. Sie spüren die Professionalität: saubere Baustelle, klare Kommunikation, keine Überraschungen. Während wir arbeiten, können Sie sich um Wichtigeres kümmern.",
  },
  {
    number: "04",
    title: "Ihr perfekter Boden – garantiert",
    description: "Stellen Sie sich vor: Der Bodenleger kommt, prüft den Untergrund – und nickt anerkennend. 'Perfekt vorbereitet.' Keine Verzögerungen, keine Nacharbeiten. Einfach ein Boden, auf den Sie stolz sein können.",
  },
];

const pricingItems = [
  {
    title: "Zementestrich",
    price: "25–45",
    note: "Der Klassiker. Robust, bewährt, wirtschaftlich. 85% unserer Kunden wählen diese Option.",
    slug: "zementestrich",
  },
  {
    title: "Industrieböden",
    price: "45–95",
    note: "Für Betriebe, die keine Kompromisse machen. Hält 15+ Jahre problemlos.",
    slug: "industrieboeden",
  },
  {
    title: "Fußbodenheizung",
    price: "45–75",
    note: "Wohlige Wärme unter den Füßen. Inkl. Aufheizprotokoll für die Versicherung.",
    slug: "fussbodenheizung",
  },
];

const faqItems = [
  {
    question: "Warum sollte ich ausgerechnet Ihnen vertrauen?",
    answer: "Weil wir liefern, was wir versprechen – und das schwarz auf weiß. Festpreis vorab, 100€ bei Verspätung, 5 Jahre Gewährleistung. 282 zufriedene Kunden in München können das bestätigen. Fragen Sie uns nach Referenzen in Ihrer Nähe – wir haben nichts zu verbergen.",
  },
  {
    question: "Was kostet mich das Ganze? Gibt es versteckte Kosten?",
    answer: "Bei uns gibt es nur einen Preis – den, der im Angebot steht. Keine Nachforderungen, keine bösen Überraschungen. Richtwert: 25–45 €/m². Fordern Sie jetzt Ihr unverbindliches Festpreis-Angebot an und Sie wissen sofort, woran Sie sind.",
  },
  {
    question: "Wie lange muss ich auf meinen neuen Boden warten?",
    answer: "Zementestrich: 3-4 Wochen bis zur Belegreife. Zu lange? Unser Schnellestrich ist in 3-7 Tagen begehbar. Jede Woche, die Sie mit der Entscheidung warten, verzögert Ihren Einzug. Sichern Sie sich jetzt einen der wenigen freien Termine.",
  },
  {
    question: "Lohnt sich das auch für kleine Projekte wie Bad oder Balkon?",
    answer: "Absolut! Ob 15 m² oder 1.500 m² – jedes Projekt verdient Qualität. Viele kleine Projekte entwickeln sich zu langjährigen Kundenbeziehungen. Fragen Sie einfach unverbindlich an – Sie riskieren nichts.",
  },
  {
    question: "Was, wenn etwas schief geht?",
    answer: "Dann machen wir es richtig – auf unsere Kosten. Ohne Wenn und Aber. 5 Jahre Gewährleistung auf alle Arbeiten, 100€ Gutschrift bei Verspätung. Ihr Risiko? Null. Das können wir uns leisten, weil wir wissen, was wir tun.",
  },
  {
    question: "Wie schnell können Sie anfangen?",
    answer: "Normalerweise innerhalb von 1–3 Wochen. Aber Vorsicht: Unsere Kapazitäten sind begrenzt. Wer zuerst kommt, mahlt zuerst. Bei dringenden Fällen rufen Sie uns direkt an – wir finden fast immer eine Lösung.",
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
      <Helmet>
        <title>Estrich München | Estrichleger Meisterbetrieb | Festpreis-Garantie</title>
        <meta name="description" content="Estrich München: Zementestrich, Fließestrich, Heizestrich vom Meisterbetrieb. 30+ Jahre Erfahrung, 2.500+ Projekte, Festpreis-Garantie. ☎ 089 444438872" />
        <link rel="canonical" href="https://estriche-muenchen.de/" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Hero Content */}
            <div className="lg:col-span-3 space-y-8">
              <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse">
                Nur noch 3 Termine im Januar verfügbar
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground">
                Endlich ein Estrich, der
                <span className="block text-primary mt-3">hält, was er verspricht.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                <strong className="text-primary-foreground">Sie kennen das Gefühl:</strong> Handwerker, die nicht erscheinen. 
                Termine, die platzen. Versteckte Kosten, die plötzlich auftauchen. <strong className="text-primary-foreground">Schluss damit.</strong>
              </p>
              <p className="text-lg text-primary-foreground max-w-xl leading-relaxed">
                <em>Stellen Sie sich vor:</em> In nur wenigen Wochen haben Sie einen <strong className="text-primary-foreground">perfekt ebenen Boden</strong> – 
                termingerecht, zum Festpreis, ohne böse Überraschungen. Sie spüren die Erleichterung, 
                wenn Sie endlich mit dem Bodenbelag beginnen können.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/angebot">
                  <Button 
                    size="lg" 
                    data-testid="button-hero-cta"
                  >
                    Jetzt Festpreis-Angebot sichern
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
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-0">100€ bei Verspätung</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-1">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-1">Festpreis-Garantie</span>
                </div>
                <div className="flex items-center gap-2" data-testid="trust-item-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-foreground" data-testid="text-trust-title-2">282 zufriedene Kunden</span>
                </div>
              </div>
            </div>

            {/* Hero Form */}
            <Card className="lg:col-span-2 shadow-xl border-0 bg-card/95 backdrop-blur-sm" data-testid="card-hero-form">
              <CardHeader className="pb-4">
                <Badge className="w-fit mb-3 bg-green-600 hover:bg-green-700">
                  Antwort garantiert in 24h
                </Badge>
                <CardTitle className="text-2xl">Fordern Sie jetzt Ihr Festpreis-Angebot an</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>In nur 60 Sekunden</strong> ausfüllen – Sie erhalten einen verbindlichen Preis. 
                  <span className="text-foreground"> Kein Risiko, keine versteckten Kosten.</span>
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unsere Leistungen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Wählen Sie die Lösung, die zu Ihnen passt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              282 Münchner Kunden haben uns ihr Vertrauen geschenkt. Entdecken Sie, welche Lösung 
              <strong className="text-foreground"> Ihr Projekt zum Erfolg führt</strong>.
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
            <p className="text-muted-foreground mb-4">Nicht sicher? <strong className="text-foreground">Wir beraten Sie ehrlich</strong> – und finden die günstigste Lösung für Ihr Projekt.</p>
            <Link href="/angebot">
              <Button size="lg" data-testid="button-services-cta">
                Jetzt kostenlose Beratung sichern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-6">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unser Ablauf</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">So einfach kommen Sie zu Ihrem Traumboden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Während andere Handwerker Chaos verursachen, <strong className="text-foreground">erleben Sie bei uns Professionalität</strong>. Jeder Schritt ist durchdacht.
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Transparente Preise</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Wissen Sie genau, was es kostet – bevor Sie sich entscheiden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Andere Handwerker schicken Rechnungen mit Überraschungen. <strong className="text-foreground">Bei uns gibt es nur einen Preis: den, der im Angebot steht.</strong>
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
            <p className="text-muted-foreground mb-4">Starten Sie jetzt – <strong className="text-foreground">Ihr persönliches Angebot wartet bereits auf Sie</strong>.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" data-testid="button-pricing-cta">
                  Jetzt unverbindlich anfragen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/preise">
                <Button size="lg" variant="outline" data-testid="button-full-price-list">
                  Komplette Preisübersicht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-6">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihre Bedenken – unsere Antworten</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Das fragen uns 9 von 10 Kunden</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Sie haben Zweifel? Das ist verständlich. Lesen Sie, warum unsere Kunden ihre Skepsis überwunden haben – <strong className="text-foreground">und heute begeistert sind</strong>.
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
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-4">Noch unsicher? <strong className="text-foreground">Ein Gespräch kostet Sie nichts – außer 5 Minuten Zeit.</strong></p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-faq-cta">
                  Jetzt unverbindlich anfragen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" data-testid="button-more-faq">
                  Alle häufigen Fragen ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihr Vorteil: Lokale Nähe</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">In Ihrer Nachbarschaft – morgen schon vor Ort</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Keine langen Anfahrtswege, keine Verzögerungen. <strong className="text-foreground">Wir kennen München</strong> – und sind schneller bei Ihnen, als Sie denken.
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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Der erste Schritt zu Ihrem neuen Boden</h2>
              <p className="text-muted-foreground mb-8">
                <strong className="text-foreground">Jeder Tag Warten</strong> schiebt Ihr Projekt weiter nach hinten. 
                Machen Sie jetzt den ersten Schritt – in nur 60 Sekunden wissen Sie, woran Sie sind. <strong className="text-foreground">100% kostenlos, 0% Risiko.</strong>
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
                    <div className="text-muted-foreground" data-testid="text-business-hours">Mo–Fr: 7:00–18:00 Uhr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-primary/20" data-testid="card-contact-form">
              <CardHeader>
                <div className="bg-green-600 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Antwort garantiert in 24h
                </div>
                <CardTitle>Fordern Sie jetzt Ihr Festpreis-Angebot an</CardTitle>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">60 Sekunden</strong> – mehr brauchen Sie nicht. Dann wissen Sie, was Ihr Projekt kostet.
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
                      {contactMutation.isPending ? "Wird gesendet..." : "Jetzt Festpreis-Angebot anfordern →"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Kein Spam, keine Weitergabe Ihrer Daten. Nur Ihr persönliches Angebot.
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
