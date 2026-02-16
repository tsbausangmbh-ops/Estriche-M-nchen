import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getDistrictBySlug, districts } from "@/lib/district-data";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo-schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2, ChevronRight, Phone, MapPin, Users, Star, Shield, Building2, Ruler, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/workers_pouring_cement_screed.webp";

export default function District() {
  const params = useParams();
  const slug = params.slug as string;
  const district = getDistrictBySlug(slug);

  if (!district) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stadtteil nicht gefunden</h1>
          <Link href="/">
            <Button>Zur\u00fcck zur Startseite</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nearbyDistrictObjects = districts.filter(d => district.nearbyDistricts.includes(d.name));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estrichleger {district.name} | Estrich verlegen in M\u00fcnchen-{district.name}</title>
        <meta name="description" content={`Estrichleger in M\u00fcnchen-${district.name}: Zementestrich, Flie\u00dfestrich, Fu\u00dfbodenheizung & Sanierung vom Fachbetrieb. Festpreisgarantie. Jetzt beraten lassen!`} />
        <meta name="keywords" content={`Estrichleger ${district.name}, Estrich ${district.name} M\u00fcnchen, Estrich verlegen ${district.name}, Fu\u00dfbodenheizung ${district.name}, Estrichsanierung ${district.name}, Flie\u00dfestrich ${district.name}`} />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content={`M\u00fcnchen ${district.name}`} />
        <link rel="canonical" href={`https://estriche-muenchen.de/muenchen/${district.slug}`} />
        <meta property="og:title" content={`Estrichleger ${district.name} | Estriche M\u00fcnchen`} />
        <meta property="og:description" content={`Estrich verlegen in M\u00fcnchen-${district.name}. Fachbetrieb mit Festpreisgarantie f\u00fcr Zementestrich, Flie\u00dfestrich und Fu\u00dfbodenheizung.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://estriche-muenchen.de/muenchen/${district.slug}`} />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Estrichleger ${district.name} M\u00fcnchen`} />
        <meta name="twitter:description" content={`Professionelle Estricharbeiten in M\u00fcnchen-${district.name} vom Fachbetrieb.`} />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "M\u00fcnchen Stadtteile", url: "https://estriche-muenchen.de/muenchen" },
            { name: district.name, url: `https://estriche-muenchen.de/muenchen/${district.slug}` }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            title: `Estrichleger ${district.name} M\u00fcnchen`,
            description: `Professionelle Estricharbeiten in M\u00fcnchen-${district.name}`,
            url: `https://estriche-muenchen.de/muenchen/${district.slug}`
          }))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Estrichverlegung ${district.name}`,
            "description": district.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Estriche M\u00fcnchen",
              "telephone": "+49 89 444438872",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hardenbergstr. 4",
                "addressLocality": "M\u00fcnchen",
                "postalCode": "80992",
                "addressCountry": "DE"
              }
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": `M\u00fcnchen-${district.name}`
            },
            "serviceType": "Estrichverlegung"
          })}
        </script>
      </Helmet>
      <Header />

      <section className="relative py-6 lg:py-8 overflow-hidden">
        <img
          src={heroImage}
          alt={`Estrichleger ${district.name} M\u00fcnchen \u2013 Professionelle Estricharbeiten vom Fachbetrieb`}
          width="1920"
          height="1080"
          {...{ fetchpriority: "high" } as any}
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

        <div className="page-container relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse mb-4">
              ACHTUNG: Nur noch {getWeeklyScarcityNumber()} freie Termine diese Woche
            </Badge>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Stadtbezirk {district.bezirk}
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Estrichleger <strong>{district.name}</strong> \u2013 Ihr Fachbetrieb in M\u00fcnchen
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              {district.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {district.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-district-cta">
                  Jetzt Festpreis sichern
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
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9 Sterne Bewertung</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{district.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
                Estrich verlegen in {district.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {district.estrichInfo}
              </p>
              <div className="space-y-3">
                {district.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Referenzprojekte in {district.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {district.typicalProjects.map((project, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-accent rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">{project}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="page-container">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
            Unsere Leistungen in {district.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            Alle Estrich-Dienstleistungen f\u00fcr M\u00fcnchen-{district.name} aus einer Hand.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Zementestrich", slug: "zementestrich", price: "ab 32\u20ac/m\u00b2", desc: "Klassischer Estrich f\u00fcr Neubau und Sanierung" },
              { title: "Flie\u00dfestrich", slug: "fliessestrich", price: "ab 38\u20ac/m\u00b2", desc: "Selbstnivellierende L\u00f6sung f\u00fcr perfekte B\u00f6den" },
              { title: "Fu\u00dfbodenheizung", slug: "fussbodenheizung", price: "ab 45\u20ac/m\u00b2", desc: "Nachr\u00fcstung per Fr\u00e4sverfahren" },
              { title: "Estrichsanierung", slug: "sanierung", price: "ab 25\u20ac/m\u00b2", desc: "Risse, Hohlstellen & Wassersch\u00e4den" },
            ].map((service) => (
              <Link key={service.slug} href={`/leistungen/${service.slug}`}>
                <Card className="h-full hover-elevate cursor-pointer" data-testid={`card-service-${service.slug}`}>
                  <CardContent className="p-5">
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-primary">{service.price}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="page-container">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
            Warum Estriche M\u00fcnchen in {district.name}?
          </h2>
          <p className="text-muted-foreground mb-8">Ihr lokaler Fachbetrieb mit \u00fcber 30 Jahren Erfahrung.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Festpreisgarantie", desc: "Verbindlicher Festpreis ohne versteckte Kosten" },
              { icon: MapPin, title: `Lokal in ${district.name}`, desc: `Keine Anfahrtskosten in ${district.name} und ganz M\u00fcnchen` },
              { icon: Star, title: "4.9 Sterne Bewertung", desc: "282+ zufriedene Kunden in M\u00fcnchen" },
              { icon: Users, title: "30+ Jahre Erfahrung", desc: "Fachbetrieb mit regionalem Know-how" },
              { icon: Ruler, title: "DIN 18560 Qualit\u00e4t", desc: "Estrich nach h\u00f6chsten deutschen Normen" },
              { icon: CheckCircle2, title: "5 Jahre Gew\u00e4hrleistung", desc: "Schriftliche Garantie auf alle Arbeiten" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-muted rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearbyDistrictObjects.length > 0 && (
        <section className="py-8 bg-accent">
          <div className="page-container">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
              Estrichleger in benachbarten Stadtteilen
            </h2>
            <p className="text-muted-foreground mb-6">Wir arbeiten auch in den angrenzenden M\u00fcnchner Stadtbezirken.</p>
            <div className="flex flex-wrap gap-3">
              {nearbyDistrictObjects.map((d) => (
                <Link key={d.slug} href={`/muenchen/${d.slug}`}>
                  <Badge variant="outline" className="text-sm cursor-pointer hover-elevate px-4 py-2" data-testid={`badge-district-${d.slug}`}>
                    <MapPin className="w-3 h-3 mr-1" />
                    {d.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-8 bg-primary/5">
        <div className="page-container text-center">
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Estrich-Projekt in {district.name}?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fordern Sie jetzt Ihr kostenloses Angebot an. Wir beraten Sie pers\u00f6nlich und erstellen einen verbindlichen Festpreis f\u00fcr Ihr Projekt in {district.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-district-bottom-cta">
                <span className="sm:hidden">Angebot anfordern</span>
                <span className="hidden sm:inline">Kostenloses Angebot f\u00fcr {district.name}</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+4989444438872">
                <Phone className="mr-2 h-4 w-4" />
                089 444438872
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
