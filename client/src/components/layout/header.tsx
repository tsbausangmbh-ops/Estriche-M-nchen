import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { MapPin, Clock, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-foreground text-background py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-background/10 text-background border-0">
              <MapPin className="w-3 h-3 mr-1" />
              München & 25 km
            </Badge>
            <Badge variant="secondary" className="bg-background/10 text-background border-0 hidden sm:flex">
              <Clock className="w-3 h-3 mr-1" />
              Antwort i.d.R. innerhalb 24h
            </Badge>
          </div>
          <a 
            href="#kontakt" 
            onClick={(e) => { e.preventDefault(); scrollToSection("kontakt"); }}
            className="text-background/90 hover:text-background transition-colors font-medium"
            data-testid="link-topbar-contact"
          >
            Angebot anfragen
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="flex items-center gap-3" data-testid="link-logo">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">E</span>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-lg leading-tight">Estrich München</div>
                  <div className="text-xs text-muted-foreground">Estrich • Bodenaufbau • Sanierung</div>
                </div>
              </a>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection("leistungen")}
                data-testid="nav-leistungen"
              >
                Leistungen
              </Button>
              <Link href="/ablauf">
                <Button 
                  variant="ghost" 
                  data-testid="nav-ablauf"
                >
                  Ablauf
                </Button>
              </Link>
              <Link href="/preise">
                <Button 
                  variant="ghost" 
                  data-testid="nav-preise"
                >
                  Preise
                </Button>
              </Link>
              <Link href="/faq">
                <Button 
                  variant="ghost" 
                  data-testid="nav-faq"
                >
                  FAQ
                </Button>
              </Link>
              <Button 
                onClick={() => scrollToSection("kontakt")}
                data-testid="nav-kontakt"
              >
                Kontakt
              </Button>
              <ThemeToggle />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => scrollToSection("leistungen")}
                data-testid="mobile-nav-leistungen"
              >
                Leistungen
              </Button>
              <Link href="/ablauf" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  data-testid="mobile-nav-ablauf"
                >
                  Ablauf
                </Button>
              </Link>
              <Link href="/preise" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  data-testid="mobile-nav-preise"
                >
                  Preise
                </Button>
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  data-testid="mobile-nav-faq"
                >
                  FAQ
                </Button>
              </Link>
              <Button 
                className="w-full"
                onClick={() => scrollToSection("kontakt")}
                data-testid="mobile-nav-kontakt"
              >
                Jetzt Angebot anfragen
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
