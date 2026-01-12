import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Cookie, Shield, BarChart3, Megaphone } from "lucide-react";
import { Link } from "wouter";

const COOKIE_CONSENT_KEY = "estrich-cookie-consent";
const COOKIE_CONSENT_VERSION = "1.0";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
}

interface CookieConsentProps {
  onPreferencesChange?: (preferences: CookiePreferences) => void;
}

// Global state for opening cookie settings from anywhere
let globalOpenSettings: (() => void) | null = null;

export function openCookieSettingsGlobal() {
  if (globalOpenSettings) {
    globalOpenSettings();
  }
}

export function CookieConsent({ onPreferencesChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: "",
    version: COOKIE_CONSENT_VERSION,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
    
    // Register global open function
    globalOpenSettings = () => setShowSettings(true);
    return () => { globalOpenSettings = null; };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const updatedPrefs = {
      ...prefs,
      timestamp: new Date().toISOString(),
      version: COOKIE_CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedPrefs));
    setPreferences(updatedPrefs);
    setShowBanner(false);
    setShowSettings(false);
    onPreferencesChange?.(updatedPrefs);
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

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  // Always render the dialog for settings, even if banner is hidden
  return (
    <>
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg" data-testid="cookie-banner">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">Cookie-Einstellungen</h3>
                  <p className="text-sm text-muted-foreground max-w-2xl">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige Cookies sind für den Betrieb der Website unerlässlich, während andere uns helfen, 
                    die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. 
                    Weitere Informationen finden Sie in unserer{" "}
                    <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                      Datenschutzerklärung
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 flex-shrink-0 w-full lg:w-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={openSettings}
                  data-testid="button-cookie-settings-open"
                >
                  Einstellungen
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={acceptEssential}
                  data-testid="button-cookie-essential"
                >
                  Nur notwendige
                </Button>
                <Button 
                  size="sm"
                  onClick={acceptAll}
                  data-testid="button-cookie-accept-all"
                >
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-cookie-settings">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              Cookie-Einstellungen
            </DialogTitle>
            <DialogDescription>
              Hier können Sie Ihre Cookie-Präferenzen verwalten. Notwendige Cookies sind für den 
              Betrieb der Website erforderlich und können nicht deaktiviert werden.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">Notwendige Cookies</CardTitle>
                      <p className="text-xs text-muted-foreground">Immer aktiv</p>
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
                <p className="text-xs text-muted-foreground">
                  Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende 
                  Funktionen wie die Seitennavigation und den Zugang zu geschützten Bereichen. Die Website 
                  kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">Analyse-Cookies</CardTitle>
                      <p className="text-xs text-muted-foreground">Optional</p>
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
                <p className="text-xs text-muted-foreground">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                  Die gesammelten Informationen werden anonymisiert und helfen uns, die Website zu 
                  verbessern und benutzerfreundlicher zu gestalten.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Megaphone className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">Marketing-Cookies</CardTitle>
                      <p className="text-xs text-muted-foreground">Optional</p>
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
                <p className="text-xs text-muted-foreground">
                  Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Sie können 
                  auch dazu dienen, die Wirksamkeit von Werbekampagnen zu messen. Diese Cookies werden 
                  von Drittanbietern gesetzt.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={acceptEssential}
              data-testid="button-cookie-reject-optional"
            >
              Nur notwendige
            </Button>
            <Button 
              variant="outline"
              className="flex-1"
              onClick={saveCustomPreferences}
              data-testid="button-cookie-save-custom"
            >
              Auswahl speichern
            </Button>
            <Button 
              className="flex-1"
              onClick={acceptAll}
              data-testid="button-cookie-accept-all-dialog"
            >
              Alle akzeptieren
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="text-primary underline hover:no-underline">
              Datenschutzerklärung
            </Link>.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function useCookiePreferences() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch {
        setPreferences(null);
      }
    }
  }, []);

  return { preferences, openCookieSettings: openCookieSettingsGlobal };
}

export function CookieSettingsButton() {
  return (
    <button
      onClick={openCookieSettingsGlobal}
      className="hover:text-background transition-colors text-sm"
      data-testid="button-cookie-settings"
    >
      Cookie-Einstellungen
    </button>
  );
}
