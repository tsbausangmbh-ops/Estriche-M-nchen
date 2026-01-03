import { useParams, Link } from "wouter";
import { getServiceById, services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, ChevronRight, ArrowLeft, Phone, Quote, Shield, Clock, Award, AlertTriangle, Users, Star, MapPin, Ruler, Calendar, Building2, ThumbsUp } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Leistung nicht gefunden</h1>
          <Link href="/">
            <Button>Zurück zur Startseite</Button>
          </Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = "/#kontakt";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm text-muted-foreground">Fragen?</span>
              <Button size="sm" onClick={scrollToContact} data-testid="button-header-contact">
                Kostenlos beraten lassen
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs font-medium">
                  Leistung
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                {service.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={scrollToContact} data-testid="button-hero-cta">
                  Kostenloses Angebot
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" data-testid="button-hero-call">
                  <Phone className="mr-2 h-4 w-4" />
                  089 / 123 456 78
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              
              <Card>
                <CardContent className="p-5">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Users className="w-4 h-4" />
                        <span className="font-bold">280+</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Kunden</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Star className="w-4 h-4" />
                        <span className="font-bold">4.9</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Bewertung</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-bold">München</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Region</p>
                    </div>
                  </div>
                  <div className="border-t mt-4 pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Was ist {service.title}?</h2>
          <p className="text-muted-foreground leading-relaxed">
            {service.whatIsIt}
          </p>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">{service.problem}</h2>
          <div className="space-y-4">
            {service.painAgitation.map((pain, index) => (
              <div key={index} className="flex gap-4 items-start p-4 bg-card rounded-lg border">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Die Lösung</h2>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-8">
            <p className="text-lg italic leading-relaxed">
              {service.futureVision}
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {service.solution}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.differentiators.map((diff, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg leading-relaxed mb-6">
                "{service.testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">
                    {service.testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{service.testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{service.testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Welche Arten gibt es?</h2>
          <p className="text-muted-foreground mb-8">
            Je nach Projekt setzen wir unterschiedliche Varianten ein.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {service.serviceTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <p className="text-xs">
                    <span className="font-medium text-primary">Ideal für: </span>
                    <span className="text-muted-foreground">{type.bestFor}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Was ist inklusive?</h2>
          <p className="text-muted-foreground mb-8">
            Alles aus einer Hand – keine versteckten Kosten.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.included.map((item, index) => (
              <div key={index} className="p-5 bg-card rounded-lg border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-9">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Unser Ablauf</h2>
          <div className="space-y-0 mb-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-px h-12 bg-border" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="font-medium pt-2">{step}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-3">Detaillierter Ablauf</h3>
            <p className="text-muted-foreground leading-relaxed">{service.detailedProcess}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <ThumbsUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Warum Estrich München?</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Was uns von anderen Estrichlegern unterscheidet
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whyUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-lg border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Referenzprojekte</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Ausgewählte Projekte, die unsere Expertise zeigen
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {service.projectExamples.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-3">{project.title}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Ruler className="w-3 h-3" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Bildergalerie</h2>
          <p className="text-muted-foreground mb-8">
            Einblicke in unsere Arbeit
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {service.galleryImages.map((image, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-3">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Ihre Vorteile</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Richtpreis</p>
                  <p className="text-3xl font-bold text-primary mb-1">
                    ab {service.price} €/m²
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Endpreis nach Vor-Ort-Besichtigung
                  </p>
                  <Button className="w-full" onClick={scrollToContact}>
                    Angebot anfordern
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Technische Details</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.technicalDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Normgerechte Ausführung</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Wir arbeiten nach den aktuellen deutschen Industrienormen. Das garantiert Ihnen höchste Qualität und rechtssichere Ausführung.
          </p>
          <div className="grid gap-3">
            {service.dinNorms.map((norm, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border">
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="shrink-0 font-mono text-xs">
                    {norm.number}
                  </Badge>
                  <div>
                    <h3 className="font-medium text-sm mb-1">{norm.title}</h3>
                    <p className="text-sm text-muted-foreground">{norm.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border rounded-lg px-4">
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Unsere Garantien</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-5 bg-muted rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  {index === 0 && <Award className="w-5 h-5 text-primary" />}
                  {index === 1 && <Shield className="w-5 h-5 text-primary" />}
                  {index === 2 && <Clock className="w-5 h-5 text-primary" />}
                </div>
                <p className="text-sm font-medium">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-destructive/5 border-y border-destructive/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive font-medium mb-4">
            {service.urgency}
          </p>
          <Button onClick={scrollToContact} data-testid="button-urgency-cta">
            Jetzt Termin sichern
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Weitere Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.filter(s => s.id !== serviceId).slice(0, 3).map((otherService) => (
              <Link key={otherService.id} href={`/leistungen/${otherService.id}`}>
                <Card className="overflow-hidden group cursor-pointer hover-elevate h-full" data-testid={`card-related-${otherService.id}`}>
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={otherService.image} 
                      alt={otherService.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <otherService.icon className="w-4 h-4 text-primary" />
                      <h3 className="font-medium text-sm">{otherService.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{otherService.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bereit für Ihren neuen Boden?
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            Kostenlose Beratung, verbindliches Festpreis-Angebot, saubere Arbeit.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-footer-cta">
              Angebot anfordern
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground"
            >
              <Phone className="mr-2 h-4 w-4" />
              Anrufen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
