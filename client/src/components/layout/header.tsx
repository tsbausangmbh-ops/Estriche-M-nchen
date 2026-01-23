import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin, Clock, Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import { services } from "@/lib/services-data";
import logoImage from "@assets/Logo_Universal_1768216877638.png";

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
      <div className="bg-foreground text-background py-1 text-[10px] text-center">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          Professionelle und fachgerechte Ausführung durch unser Netzwerk an qualifizierten Meisterbetrieben
        </div>
      </div>
      <div className="bg-foreground text-background py-1.5 text-xs">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 flex flex-wrap items-center justify-between gap-2">
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
            href="mailto:info@estriche-muenchen.de?subject=Angebotsanfrage%20Estrich"
            className="text-background/90 hover:text-background transition-colors font-medium"
            data-testid="link-topbar-contact"
          >
            Angebot anfragen
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              {!isHomePage && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.history.back()}
                  data-testid="button-back"
                  aria-label="Zurück"
                  className="mr-1"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
                <img 
                  src={logoImage} 
                  alt="Estriche München Logo" 
                  className="h-10 w-auto rounded-md"
                  width="48"
                  height="48"
                  {...{ fetchpriority: "high" } as any}
                />
                <div className="hidden sm:block">
                  <div className="font-extrabold text-base leading-tight">Estriche München</div>
                  <div className="text-[7px] text-muted-foreground">Estrich • Bodenaufbau • Sanierung</div>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-0.5 text-sm">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid="nav-home"
                  className={isHomePage ? "bg-accent" : ""}
                >
                  Estrich München
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" data-testid="nav-leistungen">
                    Leistungen
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {services.map((service) => (
                    <Link key={service.id} href={`/leistungen/${service.id}`}>
                      <DropdownMenuItem className="cursor-pointer" data-testid={`dropdown-service-${service.id}`}>
                        <service.icon className="mr-2 h-4 w-4 text-primary" />
                        {service.title}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/ablauf">
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid="nav-ablauf"
                >
                  Ablauf
                </Button>
              </Link>
              <Link href="/preise">
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid="nav-preise"
                >
                  Preise
                </Button>
              </Link>
              <Link href="/rechner">
                <Button 
                  size="sm"
                  data-testid="nav-rechner"
                >
                  Rechner
                </Button>
              </Link>
              <Link href="/faq">
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid="nav-faq"
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/ueber-uns">
                <Button 
                  variant="ghost" 
                  size="sm"
                  data-testid="nav-ueber-uns"
                >
                  Über uns
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button size="sm" data-testid="nav-kontakt">
                  Kontakt
                </Button>
              </Link>
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${isHomePage ? "bg-accent" : ""}`}
                  data-testid="mobile-nav-home"
                >
                  Estrich München
                </Button>
              </Link>
              <div className="text-sm font-medium text-muted-foreground px-3 py-2">Leistungen</div>
              <div className="pl-2 space-y-1 mb-2">
                {services.map((service) => (
                  <Link key={service.id} href={`/leistungen/${service.id}`} onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-start"
                      data-testid={`mobile-nav-service-${service.id}`}
                    >
                      <service.icon className="mr-2 h-4 w-4 text-primary" />
                      {service.title}
                    </Button>
                  </Link>
                ))}
              </div>
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
                  Estrich Preise
                </Button>
              </Link>
              <Link href="/rechner" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="w-full justify-start"
                  data-testid="mobile-nav-rechner"
                >
                  Kostenloser Budgetrechner
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
              <Link href="/ratgeber" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  data-testid="mobile-nav-ratgeber"
                >
                  Ratgeber
                </Button>
              </Link>
              <Link href="/ueber-uns" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  data-testid="mobile-nav-ueber-uns"
                >
                  Über uns
                </Button>
              </Link>
              <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="w-full"
                  data-testid="mobile-nav-kontakt"
                >
                  Jetzt Angebot anfragen
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
