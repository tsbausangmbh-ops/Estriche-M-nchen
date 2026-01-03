import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle2, MessageSquare } from "lucide-react";
import heroImage from "@assets/generated_images/workers_milling_and_pipes_blue.png";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  project: z.string().min(1, "Bitte wählen Sie ein Projekt aus"),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Projekt kurz"),
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
      <Header />
      
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              <MessageSquare className="w-3 h-3 mr-1" />
              Kontakt
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Sprechen Sie mit uns
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Erzählen Sie uns von Ihrem Projekt. Wir beraten Sie kostenlos und erstellen Ihnen 
              ein verbindliches Festpreis-Angebot – ohne Verpflichtung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight">
                So erreichen Sie uns
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
                      href="tel:+4989123456789" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +49 89 123 456 789
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
                      href="mailto:info@estrich-muenchen.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@estrich-muenchen.de
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
                      Mo–Fr: 7:00–18:00 Uhr
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Außerhalb der Zeiten: Nachricht hinterlassen, wir rufen zurück.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-accent">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Das erwartet Sie bei uns:</h3>
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
            </div>

            <Card className="shadow-lg border-primary/20" data-testid="card-contact-form">
              <CardHeader>
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md w-fit mb-2">
                  Antwort innerhalb von 24 Stunden
                </div>
                <CardTitle>Jetzt Projekt beschreiben</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Füllen Sie das Formular aus – wir melden uns schnellstmöglich bei Ihnen.
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
                              <SelectItem value="industrieboden">Industrieboden / Gewerbe</SelectItem>
                              <SelectItem value="daemmung">Wärmedämmung</SelectItem>
                              <SelectItem value="schnellestrich">Schnellestrich</SelectItem>
                              <SelectItem value="sonstiges">Sonstiges</SelectItem>
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
                          <FormLabel>Ihr Projekt*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie kurz Ihr Vorhaben: Fläche in m², Zeitrahmen, besondere Anforderungen..."
                              className="min-h-[120px] resize-none"
                              {...field}
                              data-testid="textarea-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
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
                      {contactMutation.isPending ? "Wird gesendet..." : "Kostenlos anfragen"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
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
