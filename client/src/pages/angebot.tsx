import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo-schemas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2, Clock, Shield, Award, FileText, ChevronRight, Phone, Users } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/workers_pouring_cement_screed.webp";

const angebotFormSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  projectType: z.string().min(1, "Bitte wählen Sie eine Projektart aus"),
  estrichType: z.string().min(1, "Bitte wählen Sie einen Estrich-Typ aus"),
  squareMeters: z.string().optional(),
  floor: z.string().optional(),
  timeframe: z.string().optional(),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Projekt kurz"),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type AngebotFormData = z.infer<typeof angebotFormSchema>;

const benefits = [
  {
    icon: Clock,
    title: "Antwort in 24h",
    description: "Sie erhalten Ihr persönliches Angebot innerhalb eines Werktags.",
  },
  {
    icon: Shield,
    title: "100% Festpreis",
    description: "Was wir anbieten, gilt – keine versteckten Kosten.",
  },
  {
    icon: Award,
    title: "Kostenlos & Unverbindlich",
    description: "Kein Risiko, keine Verpflichtung – nur Klarheit.",
  },
];

const projectTypes = [
  { value: "neubau-efh", label: "Neubau Einfamilienhaus" },
  { value: "neubau-mfh", label: "Neubau Mehrfamilienhaus" },
  { value: "neubau-gewerbe", label: "Neubau Gewerbe/Industrie" },
  { value: "sanierung-wohnung", label: "Sanierung Wohnung" },
  { value: "sanierung-haus", label: "Sanierung Haus" },
  { value: "sanierung-gewerbe", label: "Sanierung Gewerbe" },
  { value: "anbau-aufstockung", label: "Anbau / Aufstockung" },
  { value: "keller", label: "Keller / Souterrain" },
  { value: "garage", label: "Garage / Carport" },
  { value: "sonstiges", label: "Sonstiges Projekt" },
];

const estrichTypes = [
  { value: "zementestrich", label: "Zementestrich (CT)" },
  { value: "calciumsulfat", label: "Calciumsulfatestrich / Anhydrit (CA)" },
  { value: "heizestrich", label: "Heizestrich (Fußbodenheizung)" },
  { value: "schnellestrich", label: "Schnellestrich / Schnellzement" },
  { value: "fliessestrich", label: "Fließestrich" },
  { value: "trockenestrich", label: "Trockenestrich" },
  { value: "industrieboden", label: "Industrieestrich / Hartstoffestrich" },
  { value: "daemmung", label: "Estrich mit Wärmedämmung" },
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

const timeframeOptions = [
  { value: "sofort", label: "So schnell wie möglich" },
  { value: "1-2wochen", label: "In 1-2 Wochen" },
  { value: "1monat", label: "Innerhalb eines Monats" },
  { value: "2-3monate", label: "In 2-3 Monaten" },
  { value: "flexibel", label: "Flexibel / noch unklar" },
];

export default function Angebot() {
  const { toast } = useToast();

  const form = useForm<AngebotFormData>({
    resolver: zodResolver(angebotFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      projectType: "",
      estrichType: "",
      squareMeters: "",
      floor: "",
      timeframe: "",
      message: "",
      privacyConsent: false,
    },
  });

  const angebotMutation = useMutation({
    mutationFn: async (data: AngebotFormData) => {
      const payload = {
        ...data,
        squareMeters: data.squareMeters ? parseInt(data.squareMeters) : null,
      };
      return apiRequest("POST", "/api/contact", payload);
    },
    onSuccess: () => {
      toast({
        title: "Anfrage erfolgreich gesendet!",
        description: "Wir erstellen Ihr persönliches Angebot und melden uns innerhalb von 24 Stunden.",
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

  const onSubmit = (data: AngebotFormData) => {
    angebotMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estrich Angebot München kostenlos | Kostenvoranschlag & Festpreis in 24h</title>
        <meta name="description" content="Estrich Angebot München kostenlos anfordern: Kostenvoranschlag mit Festpreis in 24h. Zementestrich ab 32€/m², Fließestrich ab 42€/m². Vor-Ort-Beratung vom Fachbetrieb" />
        <meta name="keywords" content="Estrich Angebot München, Estrich Kostenvoranschlag kostenlos, Estrich Festpreis, Estrich Vor-Ort-Beratung, Estrichleger Angebot, Estrich anfragen München" />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />
        <link rel="canonical" href="https://estriche-muenchen.de/angebot" />
        <meta property="og:title" content="Estrich Angebot München kostenlos | Festpreis in 24h" />
        <meta property="og:description" content="Estrich Angebot München kostenlos anfordern: Kostenvoranschlag mit Festpreis in 24h. Vor-Ort-Beratung vom Fachbetrieb." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/angebot" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estrich Angebot München | Kostenvoranschlag kostenlos" />
        <meta name="twitter:description" content="Estrich Angebot München kostenlos anfordern. Festpreis in 24h vom Estrichleger Fachbetrieb." />
        <meta name="twitter:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "Estrich Angebot", url: "https://estriche-muenchen.de/angebot" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            title: "Estrich Angebot München",
            description: "Kostenloser Kostenvoranschlag mit Festpreis in 24h. Zementestrich ab 32€/m², Fließestrich ab 42€/m².",
            url: "https://estriche-muenchen.de/angebot"
          }))}
        </script>
      </Helmet>
      <Header />
      
      <section className="relative py-6 lg:py-8 overflow-hidden">
        <img
          src={heroImage}
          alt="Estrich Angebot München – Kostenloses Festpreis-Angebot für Estricharbeiten anfordern"
          width="1920"
          height="1080"
          fetchpriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="page-container relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Kostenloses Angebot
              </Badge>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Estrich Angebot München</strong> – Kostenloser Kostenvoranschlag mit Festpreis in 24h
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              <strong>Wie lange wollen Sie noch im Dunkeln tappen?</strong> Beschreiben Sie Ihr Projekt – und Sie wissen morgen, 
              was es kostet. <strong>Verbindlich. Ohne böse Überraschungen. Ohne Risiko.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Antwort in 24h", "100% Festpreis", "Kostenlos & unverbindlich", "Persönliche Beratung"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2 mb-6 inline-block">
              <span className="text-red-200 text-sm font-medium">
                <strong>Diese Woche:</strong> Nur noch {getWeeklyScarcityNumber()} freie Termine für kostenlose Vor-Ort-Beratung
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/rechner">
                <Button size="lg" data-testid="button-angebot-rechner">
                  Kostenloser Budgetrechner
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

      <section className="py-8 bg-accent">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight">
              <strong>Was hält Sie nachts wach?</strong> Wir kennen diese Sorgen.
            </h2>
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Wählen Sie Ihr größtes Problem</strong> – und sehen Sie, wie wir es lösen:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-6">
            {[
              { problem: "Ich brauche Terminsicherheit", solution: "100€ bei Verspätung" },
              { problem: "Ich will keine versteckten Kosten", solution: "Festpreis-Garantie" },
              { problem: "Ich brauche schnelle Trocknung", solution: "Express-Service" },
              { problem: "Ich weiß nicht, welcher Estrich passt", solution: "Kostenlose Beratung" }
            ].map((item, index) => (
              <Card key={index} className="bg-background text-center">
                <CardContent className="p-4">
                  <p className="text-sm font-medium mb-2">{item.problem}</p>
                  <Badge variant="secondary" className="text-xs">{item.solution}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`benefit-${index}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="page-container">
          <Card className="shadow-lg border-primary/20" data-testid="card-angebot-form">
            <CardHeader className="text-center pb-6">
              <div className="bg-green-600 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mx-auto mb-3">
                Persönliche Antwort garantiert in unter 24h
              </div>
              <CardTitle className="text-2xl">Schluss mit der Ungewissheit – jetzt Klarheit schaffen</CardTitle>
              <p className="text-muted-foreground">
                <strong className="text-foreground">2 Minuten ausfüllen</strong> – und morgen wissen Sie, was Ihr Projekt kostet. <strong className="text-foreground">Keine Überraschungen. Versprochen.</strong>
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              data-testid="input-angebot-firstname"
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
                              data-testid="input-angebot-lastname"
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
                              data-testid="input-angebot-phone"
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
                              data-testid="input-angebot-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Projektdetails</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Projektart*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-angebot-project-type">
                                  <SelectValue placeholder="Bitte auswählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {projectTypes.map((type) => (
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
                      <FormField
                        control={form.control}
                        name="estrichType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estrich-Typ*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-angebot-estrich-type">
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
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="squareMeters"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fläche (ca. m²)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="z.B. 120" 
                              type="number"
                              {...field} 
                              data-testid="input-angebot-sqm"
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
                              <SelectTrigger data-testid="select-angebot-floor">
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
                    <FormField
                      control={form.control}
                      name="timeframe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Wunschtermin</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-angebot-timeframe">
                                <SelectValue placeholder="Auswählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeframeOptions.map((option) => (
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
                        <FormLabel>Projektbeschreibung*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschreiben Sie Ihr Vorhaben: Besondere Anforderungen, Fußbodenheizung, Zugänglichkeit, Zeitdruck..."
                            className="min-h-[120px] resize-none"
                            {...field}
                            data-testid="textarea-angebot-message"
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
                            data-testid="checkbox-angebot-privacy"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal cursor-pointer">
                            Ich habe die{" "}
                            <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                              Datenschutzerklärung
                            </Link>{" "}
                            gelesen und stimme der Verarbeitung meiner Daten zu.*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={angebotMutation.isPending}
                    data-testid="button-angebot-submit"
                  >
                    {angebotMutation.isPending ? "Wird gesendet..." : "Jetzt kostenloses Angebot anfordern"}
                  </Button>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Kostenlos
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Unverbindlich
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Antwort in 24h
                    </span>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
