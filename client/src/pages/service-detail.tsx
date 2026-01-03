import { useParams, Link } from "wouter";
import { getServiceById, services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <div className="px-4 sm:px-8 lg:px-12">
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

      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Leistung
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              {service.title}
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              {service.heroTagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" onClick={scrollToContact} data-testid="button-hero-cta">
                Kostenloses Angebot
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                <Phone className="mr-2 h-4 w-4" />
                089 / 123 456 78
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>280+ zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9 Sterne Bewertung</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>München & Umgebung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-t">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">Was ist {service.title}?</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.whatIsIt}
              </p>
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-destructive tracking-tight">{service.problem}</h3>
              <div className="space-y-3">
                {service.painAgitation.map((pain, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Die Lösung</h3>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  {service.futureVision}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.solution}
                </p>
              </div>
              <div className="grid gap-2">
                {service.differentiators.map((diff, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-full">
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
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">Richtpreis</p>
                  <p className="text-3xl font-bold text-primary mb-1">
                    ab {service.price} €/m²
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Endpreis nach Vor-Ort-Besichtigung
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.guarantees.map((guarantee, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{guarantee}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" onClick={scrollToContact}>
                    Angebot anfordern
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Welche Arten gibt es?</h2>
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

      <section className="py-6 bg-accent">
        <div className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Was ist inklusive?</h2>
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

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">Unser Ablauf</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-card rounded-lg border p-6 flex flex-col">
              <h3 className="text-lg font-bold mb-6 tracking-tight">Arbeitsschritte</h3>
              <div className="space-y-0 flex-1">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="w-px flex-1 min-h-8 bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="font-medium pt-2">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6 flex flex-col">
              <h3 className="text-lg font-bold mb-4 tracking-tight">Detaillierter Ablauf</h3>
              <div className="space-y-4 flex-1">
                {service.detailedProcess.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-sm">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-3">
            <ThumbsUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Warum Estrich München?</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Was uns von anderen Estrichlegern unterscheidet
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whyUs.slice(0, 6).map((reason, index) => (
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

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Unsere Arbeit</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Referenzprojekte und Einblicke in unsere Arbeitsweise
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

          <h3 className="text-lg font-semibold mb-6">Ausgewählte Projekte</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {service.projectExamples.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-5">
                  <h4 className="font-bold mb-3 tracking-tight">{project.title}</h4>
                  <div className="flex flex-wrap gap-3 mb-4 text-xs">
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

      <section className="py-6 bg-muted">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">Technik & Qualitätsstandards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Höchste Qualität durch modernste Technik und strikte Einhaltung deutscher Industrienormen
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ihre Vorteile</CardTitle>
                    <p className="text-xs text-muted-foreground">Was Sie von uns erwarten können</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  Profitieren Sie von unserer langjährigen Erfahrung und dem Einsatz modernster Materialien für ein optimales Ergebnis.
                </p>
                <ul className="space-y-3">
                  {service.benefits.slice(0, 6).map((benefit, index) => (
                    <li key={index} className={`flex items-start gap-3 p-2 rounded-lg ${index === 0 ? 'bg-primary/5 border border-primary/20' : ''}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${index === 0 ? 'font-medium' : ''}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <Ruler className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Technische Details</CardTitle>
                    <p className="text-xs text-muted-foreground">Präzise Spezifikationen</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  Unsere Arbeit basiert auf präzisen technischen Vorgaben für ein langlebiges und qualitativ hochwertiges Ergebnis.
                </p>
                <ul className="space-y-3">
                  {service.technicalDetails.slice(0, 6).map((detail, index) => (
                    <li key={index} className={`flex items-start gap-3 p-2 rounded-lg ${index === 0 ? 'bg-primary/5 border border-primary/20' : ''}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${index === 0 ? 'font-medium' : ''}`}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">DIN-Normen</CardTitle>
                    <p className="text-xs text-muted-foreground">Zertifizierte Qualität</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  Wir arbeiten strikt nach deutschen Industrienormen – für dokumentierte Qualität und rechtliche Sicherheit.
                </p>
                <div className="space-y-2">
                  {service.dinNorms.slice(0, 3).map((norm, index) => (
                    <div key={index} className={`p-3 rounded-lg ${index === 0 ? 'bg-primary/5 border border-primary/20' : 'bg-accent'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={index === 0 ? "default" : "secondary"} className="font-mono text-xs">
                          {norm.number}
                        </Badge>
                        {index === 0 && <Badge variant="outline" className="text-xs">Wichtigste Norm</Badge>}
                      </div>
                      <h4 className={`text-sm mb-1 ${index === 0 ? 'font-semibold' : 'font-medium'}`}>{norm.title}</h4>
                      <p className="text-xs text-muted-foreground">{norm.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent">
        <div className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">Häufig gestellte Fragen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.faqs.slice(0, 6).map((faq, index) => (
              <div key={index} className="bg-card border rounded-lg p-5">
                <h3 className="font-medium text-sm mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-destructive/5 border-y border-destructive/10">
        <div className="px-4 sm:px-8 lg:px-12 text-center">
          <p className="text-destructive font-medium mb-4">
            {service.urgency}
          </p>
          <Button onClick={scrollToContact} data-testid="button-urgency-cta">
            Jetzt Termin sichern
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-6 bg-muted">
        <div className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">Weitere Leistungen</h2>
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

      <section className="py-6 bg-foreground text-primary-foreground">
        <div className="px-4 sm:px-8 lg:px-12 text-center">
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
