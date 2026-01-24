import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { Cookie, Shield, BarChart3, Sparkles, CheckCircle2, Phone, Users, ChevronRight, Settings } from "lucide-react";
import { BusinessInfoCard } from "@/components/business-info-card";
import heroImage from "@assets/generated_images/three_workers_laying_screed_blue.png";

const COOKIE_CONSENT_KEY = "estrich-cookie-consent";
const COOKIE_CONSENT_VERSION = "1.0";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  personalization: boolean;
  timestamp: string;
  version: string;
  consentId: string;
}

function generateConsentId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function CookieEinstellungen() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    personalization: false,
    timestamp: "",
    version: COOKIE_CONSENT_VERSION,
    consentId: "",
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
      consentId: prefs.consentId || generateConsentId(),
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
      personalization: true,
      timestamp: "",
      version: COOKIE_CONSENT_VERSION,
      consentId: preferences.consentId || generateConsentId(),
    });
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      personalization: false,
      timestamp: "",
      version: COOKIE_CONSENT_VERSION,
      consentId: preferences.consentId || generateConsentId(),
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const formatDate = (isoString: string) => {
    if (!isoString) return "-";
    const date = new Date(isoString);
    return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cookies-Einstellungen verwalten | Estriche München Fachbetrieb | DSGVO TDDDG konform 2026</title>
        <meta name="description" content="Cookie-Richtlinie Estriche München: Verwalten Sie Ihre Cookie-Einstellungen gemäß DSGVO und TDDDG. Transparente Datenschutz-Informationen Fachbetrieb" />
        <meta name="keywords" content="Cookie Richtlinie Estrich, Cookies Estrichleger München, TDDDG Handwerker Website, Tracking Baufirma Bayern, Cookie Einstellungen Bauunternehmen" />
        <link rel="canonical" href="https://estriche-muenchen.de/cookie-einstellungen" />
      </Helmet>
      <Header />
      
      <section className="relative py-6 lg:py-8 overflow-hidden">
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
              Cookie-Richtlinie
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Diese Webseite verwendet Cookies. Wir verwenden Cookies, um Inhalte zu personalisieren 
              und die Zugriffe auf unsere Website zu analysieren.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["DSGVO-konform", "TDDDG-konform", "Volle Kontrolle", "Jederzeit änderbar"].map((feature, index) => (
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

      <section className="py-6">
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
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Was sind Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies sind kleine Textdateien, die von Webseiten verwendet werden, um die Benutzererfahrung 
                  effizienter zu gestalten.
                </p>
                <p className="text-muted-foreground mt-3">
                  Laut Gesetz können wir Cookies auf Ihrem Gerät speichern, wenn diese für den Betrieb dieser 
                  Seite unbedingt notwendig sind. Für alle anderen Cookie-Typen benötigen wir Ihre Erlaubnis.
                </p>
                <p className="text-muted-foreground mt-3">
                  Diese Seite verwendet unterschiedliche Cookie-Typen. Einige Cookies werden von Drittparteien 
                  platziert, die auf unseren Seiten erscheinen.
                </p>
                <p className="text-muted-foreground mt-3">
                  Sie können Ihre Einwilligung jederzeit von der Cookie-Erklärung auf unserer Website ändern 
                  oder widerrufen.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Erfahren Sie in unserer{" "}
                  <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                    Datenschutzrichtlinie
                  </Link>{" "}
                  mehr darüber, wer wir sind, wie Sie uns kontaktieren können und wie wir personenbezogene 
                  Daten verarbeiten.
                </p>
              </div>

              {preferences.consentId && preferences.timestamp && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Ihre Einwilligungs-ID:</strong> {preferences.consentId}<br />
                    <strong>Datum:</strong> {formatDate(preferences.timestamp)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Bitte geben Sie diese Daten an, wenn Sie uns bezüglich Ihrer Einwilligung kontaktieren.
                  </p>
                </div>
              )}

              <div>
                <p className="text-sm text-muted-foreground">
                  Ihre Einwilligung trifft auf die folgenden Domains zu: <strong>www.estriche-muenchen.de</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Die Cookie-Erklärung wurde das letzte Mal am 21.1.2026 aktualisiert.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-primary" />
                <CardTitle>Individuelle Cookie-Konfiguration</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Verwalten Sie Ihre Präferenzen direkt hier auf der Seite.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Essenziell</CardTitle>
                        <p className="text-sm text-muted-foreground">Notwendig für die Grundfunktionen (immer aktiv)</p>
                      </div>
                    </div>
                    <Switch 
                      checked={true} 
                      disabled 
                      data-testid="switch-cookie-essential"
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Analyse & Statistik</CardTitle>
                        <p className="text-sm text-muted-foreground">Helfen uns, die Nutzung der Website zu verstehen</p>
                      </div>
                    </div>
                    <Switch 
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                      data-testid="switch-cookie-analytics"
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Personalisierung</CardTitle>
                        <p className="text-sm text-muted-foreground">Optimiert Ihr Erlebnis durch relevante Inhalte</p>
                      </div>
                    </div>
                    <Switch 
                      checked={preferences.personalization}
                      onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, personalization: checked }))}
                      data-testid="switch-cookie-personalization"
                    />
                  </div>
                </CardHeader>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
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

          <Card className="mb-6">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Notwendig (2)</h2>
                <p className="text-muted-foreground mb-4">
                  Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen 
                  wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite 
                  kann ohne diese Cookies nicht richtig funktionieren.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 text-left border-b border-border font-semibold">Name</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Anbieter</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Zweck</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Dauer</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Typ</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="p-3 border-b border-border">CookieConsent</td>
                        <td className="p-3 border-b border-border">Estriche München</td>
                        <td className="p-3 border-b border-border">Speichert den Zustimmungsstatus des Benutzers für Cookies auf der aktuellen Domäne.</td>
                        <td className="p-3 border-b border-border">1 Jahr</td>
                        <td className="p-3 border-b border-border">HTTP-Cookie</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">session_id</td>
                        <td className="p-3 border-b border-border">Estriche München</td>
                        <td className="p-3 border-b border-border">Wird verwendet, um Server-Anfragen an das Webseitenbackend zu managen.</td>
                        <td className="p-3 border-b border-border">Sitzung</td>
                        <td className="p-3 border-b border-border">HTTP-Cookie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Statistiken (3)</h2>
                <p className="text-muted-foreground mb-4">
                  Statistik-Cookies helfen Webseiten-Besitzern zu verstehen, wie Besucher mit Webseiten 
                  interagieren, indem Informationen anonym gesammelt und gemeldet werden.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-3 text-left border-b border-border font-semibold">Name</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Anbieter</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Zweck</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Dauer</th>
                        <th className="p-3 text-left border-b border-border font-semibold">Typ</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="p-3 border-b border-border">_ga</td>
                        <td className="p-3 border-b border-border">Google</td>
                        <td className="p-3 border-b border-border">Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Website nutzt, zu generieren.</td>
                        <td className="p-3 border-b border-border">2 Jahre</td>
                        <td className="p-3 border-b border-border">HTTP-Cookie</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">_gat</td>
                        <td className="p-3 border-b border-border">Google</td>
                        <td className="p-3 border-b border-border">Wird von Google Analytics verwendet, um die Anforderungsrate einzuschränken</td>
                        <td className="p-3 border-b border-border">1 Tag</td>
                        <td className="p-3 border-b border-border">HTTP-Cookie</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">_gid</td>
                        <td className="p-3 border-b border-border">Google</td>
                        <td className="p-3 border-b border-border">Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Website nutzt, zu generieren.</td>
                        <td className="p-3 border-b border-border">1 Tag</td>
                        <td className="p-3 border-b border-border">HTTP-Cookie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          <BusinessInfoCard />

          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026<br />
                  Diese Cookie-Richtlinie wurde gemäß den Anforderungen des TDDDG und der DSGVO erstellt.
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
