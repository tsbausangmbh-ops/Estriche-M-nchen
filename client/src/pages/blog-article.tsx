import { useParams, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChevronRight, ChevronLeft, Clock, Calendar, BookOpen, Lightbulb, CheckCircle2 } from "lucide-react";
import { getArticleBySlug, blogArticles } from "@/lib/blog-data";
import heroImage from "@assets/generated_images/worker_leveling_cement_screed.png";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
          <p className="text-muted-foreground mb-6">Der gesuchte Artikel existiert nicht.</p>
          <Link href="/ratgeber">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Zurück zum Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        <div className="relative w-full mx-auto px-4 sm:px-20 lg:px-48">
          <Link href="/ratgeber">
            <Button variant="ghost" className="mb-4 text-white/80 hover:text-white hover:bg-white/10">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Alle Artikel
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              {article.category}
            </Badge>
            <span className="text-sm text-gray-300 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} Lesezeit
            </span>
            <span className="text-sm text-gray-300 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString('de-DE', { 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight" data-testid="text-article-title">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <article className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl font-bold mt-8 mb-4 tracking-tight">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {article.tips && article.tips.length > 0 && (
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Unsere Tipps</h3>
                </div>
                <ul className="space-y-3">
                  {article.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {article.conclusion && (
            <Card className="mt-6 bg-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Fazit</h3>
                <p className="text-muted-foreground leading-relaxed">{article.conclusion}</p>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {prevArticle ? (
                <Link href={`/ratgeber/${prevArticle.slug}`}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    {prevArticle.title.length > 30 
                      ? prevArticle.title.substring(0, 30) + "..." 
                      : prevArticle.title}
                  </Button>
                </Link>
              ) : <div />}
              {nextArticle && (
                <Link href={`/ratgeber/${nextArticle.slug}`}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    {nextArticle.title.length > 30 
                      ? nextArticle.title.substring(0, 30) + "..." 
                      : nextArticle.title}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">
            Bereit für Ihr Estrich-Projekt?
          </h2>
          <p className="text-muted-foreground mb-6">
            Wir beraten Sie gerne und erstellen Ihnen ein unverbindliches Angebot.
          </p>
          <Link href="/angebot">
            <Button size="lg" data-testid="button-article-cta">
              Jetzt Beratung anfordern
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
