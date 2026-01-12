import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
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
import { CheckCircle2, Clock, Shield, Award, FileText, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/workers_pouring_cement_screed.png";

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
      <Header />
      
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              <FileText className="w-3 h-3 mr-1" />
              Kostenloses Angebot
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ihr Festpreis-Angebot in 24 Stunden
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Beschreiben Sie Ihr Projekt – und wir erstellen Ihnen ein verbindliches Angebot, 
              auf das Sie sich verlassen können. Kostenlos und ohne Verpflichtung.
            </p>
            <Link href="/rechner">
              <Button size="lg" data-testid="button-angebot-rechner">
                Kostenloser Budgetrechner
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-primary/20" data-testid="card-angebot-form">
            <CardHeader className="text-center pb-6">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mx-auto mb-3">
                Antwort innerhalb von 24 Stunden garantiert
              </div>
              <CardTitle className="text-2xl">Jetzt Ihr kostenloses Angebot anfordern</CardTitle>
              <p className="text-muted-foreground">
                Füllen Sie das Formular aus – je genauer Ihre Angaben, desto präziser Ihr Angebot.
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
