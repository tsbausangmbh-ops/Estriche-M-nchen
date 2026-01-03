import { useParams, Link } from "wouter";
import { getServiceById, services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, ArrowLeft, Phone, Quote, Shield, Clock, Award, AlertTriangle } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <Link href="/">
              <Button variant="ghost" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
            <Button onClick={scrollToContact} data-testid="button-header-contact">
              Jetzt Angebot anfragen
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide">
                Unsere Leistungen
              </Badge>
            </div>
            <p className="text-lg text-primary font-semibold uppercase tracking-wider mb-3">
              {service.heroTagline}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" onClick={scrollToContact} data-testid="button-hero-cta">
                Kostenloses Angebot anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 backdrop-blur-sm"
                data-testid="button-hero-call"
              >
                <Phone className="mr-2 h-4 w-4" />
                089 / 123 456 78
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-primary-foreground/80">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Das Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{service.problem}</h2>
          </div>
          <div className="space-y-6">
            {service.painAgitation.map((pain, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Die Lösung</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Stellen Sie sich vor...</h2>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
            <p className="text-xl leading-relaxed italic">
              {service.futureVision}
            </p>
          </div>
          <div className="text-center mb-8">
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              {service.solution}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {service.differentiators.map((diff, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihre Vorteile</p>
              <h2 className="text-3xl font-bold mb-8">Warum Sie sich für uns entscheiden sollten</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-card rounded-xl border">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Richtpreis</p>
                <p className="text-4xl font-bold text-primary mb-2">
                  ab {service.price} <span className="text-lg font-normal text-muted-foreground">€/m²</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Endpreis abhängig von Aufbau, Fläche und Baustellenlogistik.
                </p>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">Kundenstimme</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg italic leading-relaxed">
                  "{service.testimonial.text}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{service.testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{service.testimonial.location}</p>
                  <p className="text-sm text-muted-foreground">{service.testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unser Ablauf</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">So einfach funktioniert es</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kein Rätselraten, keine bösen Überraschungen. Wir führen Sie transparent durch jeden Schritt.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-border" />
                )}
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihre Sicherheit</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Garantien für Sie</h2>
            <p className="text-muted-foreground">
              Wir stehen zu unserer Arbeit – mit handfesten Zusagen, nicht nur leeren Versprechen.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.guarantees.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Award className="w-6 h-6 text-primary" />}
                  {index === 1 && <Shield className="w-6 h-6 text-primary" />}
                  {index === 2 && <Clock className="w-6 h-6 text-primary" />}
                </div>
                <p className="font-medium">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-destructive/5 border-y border-destructive/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-destructive uppercase tracking-widest mb-3">Wichtig</p>
          <p className="text-lg font-medium text-destructive/90 mb-6">
            {service.urgency}
          </p>
          <Button size="lg" onClick={scrollToContact} data-testid="button-urgency-cta">
            Jetzt Termin sichern
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Weitere Leistungen</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Das bieten wir auch</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.filter(s => s.id !== serviceId).slice(0, 3).map((otherService) => (
              <Link key={otherService.id} href={`/leistungen/${otherService.id}`}>
                <Card className="overflow-hidden group cursor-pointer hover-elevate h-full" data-testid={`card-related-${otherService.id}`}>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={otherService.image} 
                      alt={otherService.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <otherService.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{otherService.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{otherService.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bereit, Ihr Boden-Problem zu lösen?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-4">
            Kein Risiko für Sie: Kostenlose Beratung, unverbindliches Festpreis-Angebot, und wir räumen hinter uns auf.
          </p>
          <p className="text-lg text-primary-foreground/60 mb-8">
            Über 280 Münchner Bauherren vertrauen uns bereits. Werden Sie der Nächste?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-footer-cta">
              Jetzt kostenloses Angebot anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground"
            >
              <Phone className="mr-2 h-4 w-4" />
              089 / 123 456 78
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
