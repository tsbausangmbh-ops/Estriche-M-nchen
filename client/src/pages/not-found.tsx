import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Phone, Wrench, Info, Calculator, FileText, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import heroImage from "@assets/generated_images/worker_grinding_screed_floor.png";

export default function NotFound() {
  const pages = [
    { href: "/", label: "Startseite", icon: Home, description: "Zurück zur Hauptseite" },
    { href: "/leistungen", label: "Leistungen", icon: Wrench, description: "Unsere Estrich-Services" },
    { href: "/kostenrechner", label: "Kostenrechner", icon: Calculator, description: "Estrich-Kosten berechnen" },
    { href: "/ueber-uns", label: "Über uns", icon: Info, description: "Unser Unternehmen" },
    { href: "/kontakt", label: "Kontakt", icon: Phone, description: "Anfrage senden" },
    { href: "/impressum", label: "Impressum", icon: FileText, description: "Rechtliche Informationen" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-primary-foreground">
                <span className="text-primary">404</span> – Seite nicht gefunden
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Die angeforderte Seite existiert leider nicht. Aber keine Sorge – hier finden Sie schnell zurück zu unseren Services.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/">
                  <Button size="lg" data-testid="button-404-home-cta">
                    Zur Startseite
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="bg-zinc-900 text-white hover:bg-zinc-800"
                  asChild
                  data-testid="button-404-call"
                >
                  <a href="tel:+4989444438872">
                    <Phone className="mr-2 h-4 w-4" />
                    089 444438872
                  </a>
                </Button>
              </div>
            </div>

            <Card className="lg:col-span-2 shadow-xl border-0 bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Unsere Seiten</h2>
                <div className="grid gap-2">
                  {pages.map((page) => (
                    <Link key={page.href} href={page.href}>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start h-auto py-3 px-4"
                        data-testid={`link-404-${page.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <page.icon className="h-5 w-5 mr-3 text-primary" />
                        <div className="text-left">
                          <div className="font-medium">{page.label}</div>
                          <div className="text-xs text-muted-foreground">{page.description}</div>
                        </div>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
