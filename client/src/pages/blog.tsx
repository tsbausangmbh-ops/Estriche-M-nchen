import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { ChevronRight, Clock, Calendar, BookOpen } from "lucide-react";
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

  const scrollToContact = () => {
    window.location.href = "/#kontakt";
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

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-6 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Haben Sie eine Frage zu Ihrem Projekt?
          </h2>
          <p className="text-muted-foreground mb-6">
            Unsere Experten beraten Sie gerne persönlich und kostenlos.
          </p>
          <Button size="lg" onClick={scrollToContact} data-testid="button-blog-cta">
            Kostenlose Beratung anfordern
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
