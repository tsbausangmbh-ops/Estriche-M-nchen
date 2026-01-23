import { Link } from "wouter";
import logoImage from "@assets/Logo_Universal_1768216877638.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-6" data-testid="footer">
      <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1" data-testid="footer-brand">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img 
                src={logoImage} 
                alt="Estriche München Logo" 
                className="h-5 w-auto rounded-sm"
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
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Estrich München</Link></li>
              <li><Link href="/leistungen/zementestrich" className="hover:text-blue-400 transition-colors">Zementestrich</Link></li>
              <li><Link href="/leistungen/fliessestrich" className="hover:text-blue-400 transition-colors">Fließestrich</Link></li>
              <li><Link href="/leistungen/heizestrich" className="hover:text-blue-400 transition-colors">Heizestrich</Link></li>
              <li><Link href="/leistungen/industrieboeden" className="hover:text-blue-400 transition-colors">Industrieestrich</Link></li>
              <li><Link href="/leistungen/schnellestrich" className="hover:text-blue-400 transition-colors">Schnellestrich</Link></li>
              <li><Link href="/leistungen/sanierung" className="hover:text-blue-400 transition-colors">Sanierung</Link></li>
            </ul>
          </div>

          {/* Infos */}
          <div data-testid="footer-info">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Infos & Preise</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><Link href="/preise" className="hover:text-blue-400 transition-colors">Estrich Kosten</Link></li>
              <li><Link href="/rechner" className="hover:text-blue-400 transition-colors">Kostenrechner</Link></li>
              <li><Link href="/ablauf" className="hover:text-blue-400 transition-colors">Ablauf</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-blue-400 transition-colors">Über uns</Link></li>
              <li><Link href="/angebot" className="hover:text-blue-400 transition-colors">Angebot</Link></li>
              <li><Link href="/ratgeber" className="hover:text-blue-400 transition-colors">Ratgeber</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div data-testid="footer-contact">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Kontakt</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><a href="tel:+4989444438872" className="hover:text-blue-400 transition-colors">089 444438872</a></li>
              <li><a href="mailto:info@estriche-muenchen.de" className="hover:text-blue-400 transition-colors">info@estriche-muenchen.de</a></li>
              <li><a href="https://maps.google.com/?q=Hardenbergstr.+4,+80992+München" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Hardenbergstr. 4, 80992 München</a></li>
              <li>Mo–Fr: 08:00–16:30</li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div data-testid="footer-legal">
            <h4 className="font-semibold text-background/80 mb-2" style={{fontSize: '11px'}}>Rechtliches</h4>
            <ul className="space-y-1 text-background/50" style={{fontSize: '11px'}}>
              <li><Link href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-blue-400 transition-colors">AGB</Link></li>
              <li><Link href="/cookie-einstellungen" className="hover:text-blue-400 transition-colors">Cookie-Einstellungen</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-4 pt-3 text-center">
          <p className="text-background/40" style={{fontSize: '9px'}}>
            © {new Date().getFullYear()} Estriche München · Alle Rechte vorbehalten · Website by{" "}
            <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Extrucon GmbH</a>
            {" & "}
            <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">KSHWmont d.o.o.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
