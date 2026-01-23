import { Link } from "wouter";
import logoImage from "@assets/Logo_Universal_1768216877638.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10" data-testid="footer">
      <div className="w-full mx-auto px-4 sm:px-20 lg:px-48">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-2 md:col-span-1 lg:col-span-1" data-testid="footer-brand">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
                <div className="font-extrabold text-sm">Estriche München</div>
                <div className="text-[7px] text-background/50 tracking-wide">Estrich • Bodenaufbau • Sanierung</div>
              </div>
            </Link>
            <p className="text-background/50 text-[11px] leading-relaxed" data-testid="text-footer-description">
              Ihr zuverlässiger Partner für professionelle Estricharbeiten in München und Umgebung.
            </p>
          </div>

          <div data-testid="footer-services">
            <h4 className="font-semibold text-[11px] mb-4 text-background/80">Leistungen</h4>
            <ul className="space-y-2 text-[11px] text-background/50">
              <li><Link href="/" className="hover:text-background transition-colors">Estrich München</Link></li>
              <li><Link href="/leistungen/zementestrich" className="hover:text-background transition-colors">Zementestrich München</Link></li>
              <li><Link href="/leistungen/fliessestrich" className="hover:text-background transition-colors">Fließestrich München</Link></li>
              <li><Link href="/leistungen/heizestrich" className="hover:text-background transition-colors">Heizestrich München</Link></li>
              <li><Link href="/leistungen/industrieboeden" className="hover:text-background transition-colors">Industrieestrich</Link></li>
              <li><Link href="/leistungen/schnellestrich" className="hover:text-background transition-colors">Schnellestrich</Link></li>
              <li><Link href="/leistungen/sanierung" className="hover:text-background transition-colors">Estrichsanierung</Link></li>
            </ul>
          </div>

          <div data-testid="footer-info">
            <h4 className="font-semibold text-[11px] mb-4 text-background/80">Infos & Preise</h4>
            <ul className="space-y-2 text-[11px] text-background/50">
              <li><Link href="/preise" className="hover:text-background transition-colors">Estrich Kosten München</Link></li>
              <li><Link href="/rechner" className="hover:text-background transition-colors">Kostenrechner</Link></li>
              <li><Link href="/ablauf" className="hover:text-background transition-colors">Ablauf</Link></li>
              <li><Link href="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-background transition-colors">Über uns</Link></li>
              <li><Link href="/angebot" className="hover:text-background transition-colors">Angebot anfordern</Link></li>
              <li><Link href="/ratgeber" className="hover:text-background transition-colors">Ratgeber</Link></li>
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h4 className="font-semibold text-[11px] mb-4 text-background/80">Kontakt</h4>
            <ul className="space-y-2 text-[11px] text-background/50">
              <li data-testid="text-footer-phone">
                <a href="tel:+4989444438872" className="hover:text-background transition-colors">089 444438872</a>
              </li>
              <li data-testid="text-footer-email">
                <a href="mailto:info@estriche-muenchen.de" className="hover:text-background transition-colors">info@estriche-muenchen.de</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Hardenbergstr.+4,+80992+München" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Hardenbergstr. 4<br />80992 München</a>
              </li>
              <li>Mo–Fr: 08:00–16:30</li>
            </ul>
          </div>

          <div data-testid="footer-legal">
            <h4 className="font-semibold text-[11px] mb-4 text-background/80">Rechtliches</h4>
            <ul className="space-y-2 text-[11px] text-background/50">
              <li><Link href="/impressum" className="hover:text-background transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-background transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-background transition-colors">AGB</Link></li>
              <li><Link href="/cookie-einstellungen" className="hover:text-background transition-colors">Cookie-Einstellungen</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-[10px] text-background/40">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-background/60 transition-colors">Estriche München</Link>
            {" "}·{" "}Alle Rechte vorbehalten{" "}·{" "}Website by{" "}
            <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-background/60 transition-colors">Extrucon GmbH</a>
            {" "}&{" "}
            <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="hover:text-background/60 transition-colors">KSHWmont d.o.o.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
