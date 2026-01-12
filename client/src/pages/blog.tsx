import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { ChevronRight, Clock, Calendar, BookOpen, CheckCircle2, Shield, Award, Zap } from "lucide-react";
import { blogArticles } from "@/lib/blog-data";
import heroImage from "@assets/generated_images/workers_pouring_cement_screed.png";

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
        <title>Estrich Ratgeber München | Tipps & Fachwissen vom Experten</title>
        <meta name="description" content="Estrich-Ratgeber: Fachartikel zu Zementestrich, Fließestrich, Fußbodenheizung und mehr. Expertenwissen vom Münchner Meisterbetrieb." />
        <link rel="canonical" href="https://estriche-muenchen.de/blog" />
      </Helmet>
      <Header />
      
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        <div className="relative w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              <BookOpen className="w-3 h-3 mr-1" />
              Ratgeber & Blog
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Estrich-Wissen für Bauherren
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Praxisnahe Tipps, Anleitungen und Expertenwissen rund um Estrich, Bodenaufbau und Sanierung. 
              Damit Sie informierte Entscheidungen treffen können.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Warum Sie bei Estrich München richtig sind
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
                  <p className="text-xs text-muted-foreground">Meisterbetrieb mit regionalem Know-how.</p>
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
                Jetzt kostenloses Angebot anfordern
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
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
            <div className="text-center py-12">
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
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Haben Sie eine Frage zu Ihrem Projekt?
          </h2>
          <p className="text-muted-foreground mb-6">
            Unsere Experten beraten Sie gerne persönlich und kostenlos.
          </p>
          <Link href="/angebot">
            <Button size="lg" data-testid="button-blog-cta">
              Kostenlose Beratung anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
