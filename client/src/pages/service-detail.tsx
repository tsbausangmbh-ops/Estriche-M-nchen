import { useParams, Link } from "wouter";
import { getServiceById, services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, ArrowLeft, Phone } from "lucide-react";

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
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
            <Button onClick={scrollToContact} data-testid="button-header-contact">
              Angebot anfragen
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide mb-6">
              Unsere Leistungen
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} data-testid="button-hero-cta">
                Jetzt Angebot anfragen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-hero-call"
              >
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Das Problem</p>
              <h2 className="text-3xl font-bold mb-6">{service.problem}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Ihre Vorteile</p>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Richtpreis</p>
                <CardTitle className="text-4xl font-bold text-primary">
                  ab {service.price} <span className="text-lg font-normal text-muted-foreground">€/m²</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Endpreis abhängig von Aufbau, Fläche und Baustellenlogistik.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-semibold mb-3">Inklusive:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" size="lg" onClick={scrollToContact} data-testid="button-card-cta">
                  Kostenloses Angebot anfordern
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Unverbindlich und kostenlos. Antwort innerhalb 24h.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Unser Ablauf</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">So funktioniert es</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
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
                <Card className="overflow-hidden group cursor-pointer hover-elevate" data-testid={`card-related-${otherService.id}`}>
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
            Bereit für Ihren perfekten Boden?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToContact} data-testid="button-footer-cta">
            Jetzt Angebot anfragen
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
