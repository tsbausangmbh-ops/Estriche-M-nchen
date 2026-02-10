import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { getWeeklyScarcityNumber } from "@/lib/utils";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo-schemas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { ChevronRight, Clock, Calendar, BookOpen, CheckCircle2, Shield, Award, Zap, Phone, Users } from "lucide-react";
import { blogArticles } from "@/lib/blog-data";
import heroImage from "@assets/generated_images/workers_pouring_cement_screed.webp";

const categories = [
  { id: "alle", label: "Alle Artikel" },
  { id: "grundwissen", label: "Grundwissen" },
  { id: "fussbodenheizung", label: "Fußbodenheizung" },
  { id: "sanierung", label: "Sanierung" },
  { id: "industrieboeden", label: "Industrieböden" },
  { id: "estricharten", label: "Estricharten" },
  { id: "waermedaemmung", label: "Wärmedämmung" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("alle");

  const filteredArticles = activeCategory === "alle" 
    ? blogArticles 
    : blogArticles.filter(article => 
        article.category.toLowerCase().replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ä/g, 'a') === activeCategory ||
        article.category === categories.find(c => c.id === activeCategory)?.label
      );

  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Estrich Ratgeber München 2026 | Tipps & Fachwissen vom Estrichleger Experten</title>
        <meta name="description" content="Estrich Ratgeber München: Fachwissen und Tipps zu Zementestrich, Fließestrich, Heizestrich & Fußbodenheizung. Expertenwissen vom Estrichleger Fachbetrieb" />
        <meta name="keywords" content="Estrich Ratgeber München, Estrich Tipps, Estrich Fachwissen, Zementestrich Wissen, Fließestrich Guide, Estrichleger Experten, Fußbodenheizung Ratgeber" />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />
        <link rel="canonical" href="https://estriche-muenchen.de/ratgeber" />
        <meta property="og:title" content="Estrich Ratgeber München 2026 | Tipps & Fachwissen" />
        <meta property="og:description" content="Estrich Ratgeber München: Fachwissen und Tipps zu Zementestrich, Fließestrich, Heizestrich & Fußbodenheizung. Expertenwissen vom Estrichleger Fachbetrieb" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://estriche-muenchen.de/ratgeber" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estrich Ratgeber München | Fachwissen & Tipps" />
        <meta name="twitter:description" content="Estrich Ratgeber: Fachwissen und Tipps zu Estricharbeiten in München vom Fachbetrieb." />
        <meta name="twitter:image" content="https://estriche-muenchen.de/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { name: "Startseite", url: "https://estriche-muenchen.de/" },
            { name: "Estrich Ratgeber", url: "https://estriche-muenchen.de/ratgeber" }
          ]))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            title: "Estrich Ratgeber München",
            description: "Fachwissen und Tipps zu Zementestrich, Fließestrich, Heizestrich & Fußbodenheizung vom Estrichleger Fachbetrieb.",
            url: "https://estriche-muenchen.de/ratgeber"
          }))}
        </script>
      </Helmet>
      <Header />
      
      <section className="relative py-6 lg:py-8 overflow-hidden">
        <img
          src={heroImage}
          alt="Estrich Blog München – Ratgeber und Tipps vom Estrichleger Fachbetrieb"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="page-container relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="text-sm border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground font-medium tracking-wide animate-pulse mb-4">
              ACHTUNG: Nur noch {getWeeklyScarcityNumber()} freie Termine diese Woche
            </Badge>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Ratgeber & Blog
              </Badge>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              <strong>Estrich Ratgeber München</strong> – Fachwissen & Tipps vom Estrichleger Experten
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Praxisnahe Tipps, Anleitungen und Expertenwissen rund um Estrich, Bodenaufbau und Sanierung. 
              Damit Sie informierte Entscheidungen treffen können.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Expertenwissen", "Praxistipps", "Kostenlose Beratung", "Aktuelle Themen"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg" data-testid="button-blog-cta">
                  Beratung anfordern
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

      <section className="py-8 bg-accent border-b">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Warum Sie bei Estriche München richtig sind
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Stellen Sie sich vor:</strong> Ihr Estrich wird 
                termingerecht verlegt, die Qualität stimmt, und Sie können sich auf das konzentrieren, 
                was wirklich wichtig ist – Ihr Bauprojekt voranzubringen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mit über 30 Jahren Erfahrung in München wissen wir genau, worauf es ankommt. 
                Kein Rätselraten, keine bösen Überraschungen – nur professionelle Arbeit, 
                auf die Sie sich verlassen können.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Festpreis-Garantie</h3>
                  <p className="text-xs text-muted-foreground">Was wir anbieten, gilt – keine versteckten Kosten.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Termingarantie</h3>
                  <p className="text-xs text-muted-foreground">Pünktlich fertig, damit Ihr Projekt nicht stockt.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">30+ Jahre Erfahrung</h3>
                  <p className="text-xs text-muted-foreground">Fachbetrieb mit regionalem Know-how.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">5 Jahre Gewährleistung</h3>
                  <p className="text-xs text-muted-foreground">Wir stehen zu unserer Arbeit – schriftlich.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/angebot">
              <Button size="lg" data-testid="button-ratgeber-benefits-cta">
                <span className="sm:hidden">Angebot anfordern</span>
                <span className="hidden sm:inline">Jetzt kostenloses Angebot anfordern</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="page-container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="text-sm cursor-pointer transition-colors"
                onClick={() => setActiveCategory(category.id)}
                data-testid={`badge-category-${category.id}`}
              >
                {category.label}
              </Badge>
            ))}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-muted-foreground">
                Noch keine Artikel in dieser Kategorie. Schauen Sie bald wieder vorbei!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <Link key={article.slug} href={`/ratgeber/${article.slug}`}>
                  <Card className="h-full hover-elevate cursor-pointer" data-testid={`card-article-${index}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight" data-testid={`text-article-title-${index}`}>
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString('de-DE', { 
                            day: '2-digit', 
                            month: '2-digit', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="text-sm font-medium text-primary flex items-center gap-1">
                          Lesen
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="page-container text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Haben Sie eine Frage zu Ihrem Projekt?
          </h2>
          <p className="text-muted-foreground mb-6">
            Unsere Experten beraten Sie gerne persönlich und kostenlos.
          </p>
          <Link href="/angebot">
            <Button size="lg" data-testid="button-blog-cta">
              <span className="sm:hidden">Beratung anfordern</span>
              <span className="hidden sm:inline">Kostenlose Beratung anfordern</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
