import { Link } from "wouter";
import { services } from "@/lib/services-data";
import logoImage from "@assets/Logo_Universal_1768216877638.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8" data-testid="footer">
      <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2" data-testid="footer-brand">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img 
                src={logoImage} 
                alt="Estriche München Logo" 
                className="h-8 w-auto rounded-md"
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="font-bold text-sm">Estriche München</div>
                <div className="text-[10px] text-background/60">Estrich • Bodenaufbau • Sanierung</div>
              </div>
            </Link>
            <p className="text-background/60 text-xs max-w-md" data-testid="text-footer-description">
              Ihr zuverlässiger Partner für professionelle Estricharbeiten in München und Umgebung. 
              Termintreu, sauber und fachgerecht.
            </p>
          </div>

          <div data-testid="footer-services">
            <h4 className="font-semibold text-xs mb-3">Estrichleger München – Leistungen</h4>
            <ul className="space-y-1.5 text-xs text-background/60">
              <li>
                <Link href="/" className="hover:text-background transition-colors font-medium">
                  Estrich München
                </Link>
              </li>
              <li>
                <Link href="/leistungen/zementestrich" className="hover:text-background transition-colors">
                  Zementestrich München verlegen
                </Link>
              </li>
              <li>
                <Link href="/leistungen/fliessestrich" className="hover:text-background transition-colors">
                  Fließestrich München verlegen
                </Link>
              </li>
              <li>
                <Link href="/leistungen/heizestrich" className="hover:text-background transition-colors">
                  Heizestrich München Fußbodenheizung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/industrieboeden" className="hover:text-background transition-colors">
                  Industrieestrich München Gewerbe
                </Link>
              </li>
              <li>
                <Link href="/leistungen/fussbodenheizung" className="hover:text-background transition-colors">
                  Fußbodenheizung nachrüsten München
                </Link>
              </li>
              <li>
                <Link href="/leistungen/schnellestrich" className="hover:text-background transition-colors">
                  Schnellestrich München belegreif
                </Link>
              </li>
              <li>
                <Link href="/leistungen/sanierung" className="hover:text-background transition-colors">
                  Estrich Sanierung München Altbau
                </Link>
              </li>
            </ul>
          </div>

          <div data-testid="footer-info">
            <h4 className="font-semibold text-xs mb-3">Estrich Kosten & Beratung</h4>
            <ul className="space-y-1.5 text-xs text-background/60">
              <li>
                <Link href="/preise" className="hover:text-background transition-colors font-medium">Estrich Kosten München pro m²</Link>
              </li>
              <li>
                <Link href="/rechner" className="hover:text-background transition-colors">Estrich Preise berechnen Rechner</Link>
              </li>
              <li>
                <Link href="/ablauf" className="hover:text-background transition-colors">Estrich verlegen Ablauf München</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-background transition-colors">Estrich FAQ häufige Fragen</Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-background transition-colors">Estrichleger Meisterbetrieb München</Link>
              </li>
              <li>
                <Link href="/angebot" className="hover:text-background transition-colors">Estrich Angebot kostenlos anfordern</Link>
              </li>
              <li>
                <Link href="/ratgeber" className="hover:text-background transition-colors">Estrich Ratgeber Tipps</Link>
              </li>
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h4 className="font-semibold text-xs mb-3">Kontakt</h4>
            <ul className="space-y-1.5 text-xs text-background/60">
              <li data-testid="text-footer-phone">
                <a href="tel:+4989444438872" className="hover:text-background transition-colors">089 444438872</a>
              </li>
              <li data-testid="text-footer-email">
                <a href="mailto:info@estriche-muenchen.de" className="hover:text-background transition-colors">info@estriche-muenchen.de</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Hardenbergstr.+4,+80992+München" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Hardenbergstr. 4, 80992 München</a>
              </li>
              <li>Mo–Fr: 7:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-background transition-colors">Estriche München</Link>. 
            Alle Rechte vorbehalten. | Website by{" "}
            <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Extrucon GmbH</a>
            {" "}und{" "}
            <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">KSHWmont d.o.o.</a>
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-background/50">
            <Link href="/impressum" className="hover:text-background transition-colors" data-testid="link-impressum">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-background transition-colors" data-testid="link-datenschutz">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-background transition-colors" data-testid="link-agb">
              AGB
            </Link>
            <Link href="/cookie-einstellungen" className="hover:text-background transition-colors" data-testid="link-cookie-settings">
              Cookie-Einstellungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
