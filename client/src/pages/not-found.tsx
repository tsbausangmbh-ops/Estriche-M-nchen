import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Phone, Wrench, Info, Calculator, FileText } from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
      <main className="flex-1 flex items-center justify-center bg-background py-12 px-4">
        <Card className="w-full max-w-lg">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4 gap-3">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <h1 className="text-2xl font-bold">Seite nicht gefunden</h1>
            </div>

            <p className="text-muted-foreground mb-6">
              Die angeforderte Seite existiert nicht. Hier finden Sie unsere verfügbaren Seiten:
            </p>

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

            <div className="mt-6 pt-4 border-t text-center">
              <Link href="/">
                <Button data-testid="button-404-home">
                  <Home className="h-4 w-4 mr-2" />
                  Zur Startseite
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
