import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { Cookie, Shield, BarChart3, Megaphone, CheckCircle2, Phone, Users, ChevronRight } from "lucide-react";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

const COOKIE_CONSENT_KEY = "estrich-cookie-consent";
const COOKIE_CONSENT_VERSION = "1.0";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

export default function CookieEinstellungen() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: "",
    version: COOKIE_CONSENT_VERSION,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
      } catch {
        // Use defaults
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const updatedPrefs = {
      ...prefs,
      timestamp: new Date().toISOString(),
      version: COOKIE_CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedPrefs));
    setPreferences(updatedPrefs);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: "",
      version: COOKIE_CONSENT_VERSION,
    });
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: "",
      version: COOKIE_CONSENT_VERSION,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookie-Einstellungen | Estriche München | Datenschutz</title>
        <meta name="description" content="Verwalten Sie Ihre Cookie-Einstellungen für Estriche München. Passen Sie Ihre Datenschutz-Präferenzen an." />
        <link rel="canonical" href="https://estriche-muenchen.de/cookie-einstellungen" />
      </Helmet>
      <Header />
      
      <section className="relative py-10 lg:py-14 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 dark:from-black/70 dark:via-black/55 dark:to-black/35" />
        
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-white/20 text-white border-white/30 text-xs font-medium">
                Datenschutz
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
              Cookie-Einstellungen
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Hier können Sie Ihre Cookie-Präferenzen verwalten. Wir respektieren Ihre Privatsphäre 
              und geben Ihnen volle Kontrolle über Ihre Daten.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["DSGVO-konform", "Volle Kontrolle", "Transparente Nutzung", "Jederzeit änderbar"].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/angebot">
                <Button size="lg">
                  Angebot anfordern
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

      <section className="py-12">
        <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
          {saved && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-800 dark:text-green-200 font-medium">
                Ihre Cookie-Einstellungen wurden erfolgreich gespeichert!
              </span>
            </div>
          )}

          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Einige Cookies sind für den Betrieb der Website unerlässlich, während andere uns helfen, 
                die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Notwendige Cookies</CardTitle>
                          <p className="text-sm text-muted-foreground">Immer aktiv</p>
                        </div>
                      </div>
                      <Switch 
                        checked={true} 
                        disabled 
                        data-testid="switch-cookie-essential"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende 
                      Funktionen wie die Seitennavigation und den Zugang zu geschützten Bereichen. Die Website 
                      kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">Session-Management</Badge>
                      <Badge variant="secondary">Sicherheit</Badge>
                      <Badge variant="secondary">CSRF-Schutz</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Analyse-Cookies</CardTitle>
                          <p className="text-sm text-muted-foreground">Optional</p>
                        </div>
                      </div>
                      <Switch 
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                        data-testid="switch-cookie-analytics"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                      Die gesammelten Informationen werden anonymisiert und helfen uns, die Website zu 
                      verbessern und benutzerfreundlicher zu gestalten.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">Besucherstatistiken</Badge>
                      <Badge variant="secondary">Seitenaufrufe</Badge>
                      <Badge variant="secondary">Verweildauer</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <Megaphone className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Marketing-Cookies</CardTitle>
                          <p className="text-sm text-muted-foreground">Optional</p>
                        </div>
                      </div>
                      <Switch 
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                        data-testid="switch-cookie-marketing"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Sie können 
                      auch dazu dienen, die Wirksamkeit von Werbekampagnen zu messen. Diese Cookies werden 
                      von Drittanbietern gesetzt.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">Personalisierte Werbung</Badge>
                      <Badge variant="secondary">Remarketing</Badge>
                      <Badge variant="secondary">Conversion-Tracking</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={acceptEssential}
                  data-testid="button-cookie-essential-only"
                >
                  Nur notwendige akzeptieren
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={saveCustomPreferences}
                  data-testid="button-cookie-save"
                >
                  Auswahl speichern
                </Button>
                <Button 
                  className="flex-1"
                  onClick={acceptAll}
                  data-testid="button-cookie-accept-all"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Weitere Informationen</h2>
                <p className="text-muted-foreground">
                  Für detaillierte Informationen zum Datenschutz und zur Verwendung Ihrer personenbezogenen 
                  Daten besuchen Sie bitte unsere{" "}
                  <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Ihre Rechte</h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Sie können Ihre Cookie-Einstellungen jederzeit ändern</li>
                  <li>Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten</li>
                  <li>Sie können die Löschung Ihrer Daten verlangen</li>
                  <li>Sie können der Datenverarbeitung widersprechen</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Kontakt</h3>
                <p className="text-muted-foreground">
                  Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:<br />
                  E-Mail: <a href="mailto:info@estriche-muenchen.de" className="text-primary underline hover:no-underline">info@estriche-muenchen.de</a><br />
                  Telefon: <a href="tel:+4989444438872" className="text-primary underline hover:no-underline">089 444438872</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
