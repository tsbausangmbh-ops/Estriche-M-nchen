import { Link } from "wouter";
import logoImage from "@assets/Estriche_München_Logo_1770192134778.webp";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-6" data-testid="footer">
      <style>{`
        .footer-link:hover {
          color: #60a5fa !important;
        }
      `}</style>
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" data-testid="footer-brand">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img 
                src={logoImage} 
                alt="Estriche München Logo - Estrichleger Fachbetrieb Schwabing Bogenhausen Haidhausen Laim Bayern" 
                className="h-10 w-auto rounded-sm"
                width="49"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="block font-bold" style={{fontSize: '12px'}}>Estriche München</span>
                <span className="block text-background/50" style={{fontSize: '10px'}}>Estrich • Bodenaufbau • Sanierung</span>
              </div>
            </Link>
            <p className="text-background/50" style={{fontSize: '10px'}} data-testid="text-footer-description">
              Ihr zuverlässiger Partner für professionelle Estricharbeiten in München.
            </p>
          </div>

          {/* Leistungen */}
          <div data-testid="footer-services">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Leistungen</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><Link href="/" className="footer-link">Estriche München</Link></li>
              <li><Link href="/leistungen/zementestrich" className="footer-link">Zementestrich</Link></li>
              <li><Link href="/leistungen/fliessestrich" className="footer-link">Fließestrich</Link></li>
              <li><Link href="/leistungen/heizestrich" className="footer-link">Heizestrich</Link></li>
              <li><Link href="/leistungen/industrieboeden" className="footer-link">Industrieestrich</Link></li>
              <li><Link href="/leistungen/schnellestrich" className="footer-link">Schnellestrich</Link></li>
              <li><Link href="/leistungen/sanierung" className="footer-link">Sanierung</Link></li>
            </ul>
          </div>

          {/* Infos */}
          <div data-testid="footer-info">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Infos & Preise</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><Link href="/preise" className="footer-link">Estrich Kosten</Link></li>
              <li><Link href="/rechner" className="footer-link">Kostenrechner</Link></li>
              <li><Link href="/ablauf" className="footer-link">Ablauf</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/ueber-uns" className="footer-link">Über uns</Link></li>
              <li><Link href="/angebot" className="footer-link">Angebot</Link></li>
              <li><Link href="/ratgeber" className="footer-link">Ratgeber</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div data-testid="footer-contact">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Kontakt</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><a href="tel:+4989444438872" className="footer-link">089 444438872</a></li>
              <li><a href="mailto:info@estriche-muenchen.de" className="footer-link">info@estriche-muenchen.de</a></li>
              <li><a href="https://maps.google.com/?q=Hardenbergstr.+4,+80992+München" target="_blank" rel="noopener noreferrer" className="footer-link">Hardenbergstr. 4, 80992 München</a></li>
              <li>Mo–Fr: 08:00–16:30</li>
            </ul>
          </div>

          {/* Partnernetzwerk */}
          <div data-testid="footer-partners">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Partnernetzwerk</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><a href="https://089-sanierer.de" target="_blank" rel="noopener noreferrer" className="footer-link">089-Sanierer</a></li>
              <li><a href="https://kshw-muenchen.de" target="_blank" rel="noopener noreferrer" className="footer-link">KSHW München</a></li>
              <li><a href="https://089dach.de" target="_blank" rel="noopener noreferrer" className="footer-link">089Dach GmbH</a></li>
              <li><a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="footer-link">Extrucon GmbH</a></li>
              <li><a href="https://sanitär-muenchen.de" target="_blank" rel="noopener noreferrer" className="footer-link">Sanitär München</a></li>
              <li><a href="https://aquapro24.de" target="_blank" rel="noopener noreferrer" className="footer-link">Aquapro24</a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div data-testid="footer-legal">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Rechtliches</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><Link href="/impressum" className="footer-link">Impressum</Link></li>
              <li><Link href="/datenschutz" className="footer-link">Datenschutz</Link></li>
              <li><Link href="/agb" className="footer-link">AGB</Link></li>
              <li><Link href="/barrierefreiheit" className="footer-link">Barrierefreiheit</Link></li>
              <li><Link href="/cookie-einstellungen" className="footer-link">Cookie-Einstellungen</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-4 pt-3">
          <div className="mb-3" data-testid="footer-legal-disclaimer">
            <h4 className="font-semibold text-background/80 mb-1" style={{fontSize: '10px'}}>Hinweis zum Vertragsabschluss</h4>
            <p className="text-background/40" style={{fontSize: '9px', lineHeight: '1.4' }}>
              Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar.
              Ein Vertragsabschluss über diese Website findet nicht statt.
              Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung.
              Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande.
              Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-3 text-center">
          <p className="text-background/40" style={{fontSize: '9px'}}>
            © {new Date().getFullYear()} Estriche München · Alle Rechte vorbehalten · Website by{" "}
            <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="footer-link">Extrucon GmbH</a>
            {" & "}
            <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="footer-link">KSHWmont d.o.o.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
