import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo-schemas";
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
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle2, MessageSquare, Users, Shield } from "lucide-react";
import { BusinessInfoCard } from "@/components/business-info-card";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/workers_milling_and_pipes_blue.png";

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
  reason: z.string().min(10, "Bitte beschreiben Sie kurz Ihr Anliegen"),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const benefits = [
  "Kostenlose Vor-Ort-Besichtigung",
  "Verbindliches Festpreis-Angebot",
  "Antwort innerhalb 24 Stunden",
  "Keine versteckten Kosten",
];

export default function Kontakt() {
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
      reason: "",
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
        projectType: "Kontaktanfrage",
        estrichType: data.estrichType,
        squareMeters: data.squareMeters ? parseInt(data.squareMeters) : null,
        floor: data.floor || null,
        message: data.reason,
      };
      return apiRequest("POST", "/api/contact", payload);
    },
    onSuccess: () => {
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kontakt Estrichleger München | Kostenlose Beratung | Estriche München ☎ 089 444438872</title>
        <meta name="description" content="Estrichleger München kontaktieren: Kostenlose Vor-Ort-Beratung, verbindlicher Festpreis in 24h. ☎ 089 444438872 | Mo-Fr 08:00-16:30. Meisterbetrieb mit 30+ Jahren Erfahrung für Zementestrich, Fließestrich & Heizestrich." />
        <meta name="keywords" content="Estriche München Kontakt, Estrichleger anrufen, Estrich Angebot München, kostenlose Beratung Estrich, Estrich Telefon, Estrich Termin buchen, Estricharbeiten anfragen" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="München" />
        <link rel="canonical" href="https://estriche-muenchen.de/kontakt" />
        <meta property="og:title" content="Kontakt | Estriche München" />
        <meta property="og:description" content="Kostenlose Beratung für Ihr Estrich-Projekt. Festpreis-Angebot innerhalb 24h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/kontakt" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.png" />
        <meta name="twitter:image" content="https://estriche-muenchen.de/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "Kontakt", url: "https://estriche-muenchen.de/kontakt" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
      </Helmet>
      <Header />
      
      <section className="relative py-6 lg:py-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse mb-4">
              ACHTUNG: Nur noch {getWeeklyScarcityNumber()} freie Termine diese Woche
            </Badge>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Kontakt
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Estrichleger München kontaktieren</strong> – Schluss mit der Ungewissheit
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              <strong>Jeder Tag Warten kostet Sie Zeit und Nerven.</strong> Erzählen Sie uns von Ihrem <strong>Estrich-Projekt</strong> – und Sie wissen innerhalb von 24h, 
              was es kostet. <strong>Kein Rätselraten. Kein Risiko. Nur Klarheit.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Kostenlose Beratung", "Antwort in 24h", "Festpreis-Garantie", "Vor-Ort-Besichtigung"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-2 mb-6 inline-block">
              <span className="text-red-200 text-sm font-medium">
                <strong>Achtung:</strong> Nur noch {getWeeklyScarcityNumber()} freie Beratungstermine diese Woche in München
              </span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" asChild>
                <a href="tel:+4989444438872">
                  <Phone className="mr-2 h-4 w-4" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/90" asChild>
                <a href="mailto:info@estriche-muenchen.de">
                  <Mail className="mr-2 h-4 w-4" />
                  E-Mail schreiben
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

      <section className="py-8 bg-accent border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
              <strong>Estrich-Beratung</strong> – Kommt Ihnen das bekannt vor?
            </h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">So ging es 90% unserer Kunden</strong> – bevor sie uns gefunden haben:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Sie brauchen einen zuverlässigen Estrich, aber haben schlechte Erfahrungen mit Handwerkern gemacht?",
              "Sie wissen nicht, welcher Estrich für Ihr Projekt der richtige ist?",
              "Sie haben Angst vor versteckten Kosten und bösen Überraschungen?",
              "Ihr Bauprojekt hat einen festen Zeitplan und Sie brauchen Terminsicherheit?",
              "Sie planen eine Fußbodenheizung und wissen nicht, welcher Estrich sich eignet?",
              "Sie sanieren und der alte Estrich muss raus – aber wie geht es weiter?"
            ].map((question, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Wenn Sie sich wiedererkennen – dann sind Sie hier richtig.</strong> Ein Anruf genügt, und Sie wissen, woran Sie sind. <strong className="text-foreground">Die Frage ist nur: Wie lange wollen Sie noch warten?</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
                <strong>Estrich Anfrage</strong> – So erreichen Sie uns
              </h2>
              <p className="text-muted-foreground mb-8">
                Ob per Telefon, E-Mail oder Kontaktformular – wir sind für Sie da und 
                beantworten Ihre Fragen schnell und kompetent.
              </p>

              <div className="space-y-6 mb-8">
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
                    <p className="text-sm text-muted-foreground mt-1">
                      Rufen Sie uns an – wir beraten Sie gerne persönlich.
                    </p>
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
                    <p className="text-sm text-muted-foreground mt-1">
                      Schreiben Sie uns – Antwort meist noch am selben Tag.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-region-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Einsatzgebiet</div>
                    <div className="text-muted-foreground" data-testid="text-service-region">
                      München & Umgebung (ca. 25 km)
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schnelle Anfahrt in ganz München und dem Umland.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-hours-info">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Erreichbarkeit</div>
                    <div className="text-muted-foreground" data-testid="text-business-hours">
                      Mo–Fr: 08:00–16:30 Uhr
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Außerhalb der Zeiten: Nachricht hinterlassen, wir rufen zurück.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-accent">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Das erwartet Sie bei Ihrer <strong>Estrich-Anfrage</strong>:</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <BusinessInfoCard />
              </div>

              <Card className="mt-6 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 border-b">
                    <h3 className="font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <strong>Estriche München</strong> – Unser Standort
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hardenbergstr. 4, 80992 München
                    </p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8!2d11.4989!3d48.1803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e76ffffffff%3A0x0!2sHardenbergstra%C3%9Fe%204%2C%2080992%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1704067200000!5m2!1sde!2sde"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Estriche München Standort"
                    className="w-full"
                    data-testid="map-google-embed"
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-primary/20" data-testid="card-contact-form">
              <CardHeader>
                <div className="bg-green-600 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Persönliche Antwort in unter 24h
                </div>
                <CardTitle>Ihr erster Schritt zur Lösung</CardTitle>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">60 Sekunden ausfüllen</strong> – und das Warten hat ein Ende. <strong className="text-foreground">Wir melden uns, bevor Sie es erwarten.</strong>
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

                    <div className="border-t pt-4">
                      <h3 className="font-semibold mb-3 text-sm"><strong>Estrich-Projekt</strong> Details</h3>
                      <div className="grid sm:grid-cols-3 gap-4">
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
                    </div>

                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grund Ihrer Anfrage*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                              className="min-h-[100px] resize-none"
                              {...field}
                              data-testid="textarea-contact-reason"
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
                              data-testid="checkbox-privacy-consent"
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
                      disabled={contactMutation.isPending}
                      data-testid="button-contact-submit"
                    >
                      {contactMutation.isPending ? "Wird gesendet..." : "Anfrage senden"}
                      <ChevronRight className="ml-2 h-4 w-4" />
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
