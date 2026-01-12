import { Link } from "wouter";
import { services } from "@/lib/services-data";
import { CookieSettingsButton } from "@/components/cookie-consent";
import logoImage from "@assets/Logo_Universal_1768216877638.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="w-full mx-auto px-4 sm:px-16 lg:px-32">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2" data-testid="footer-brand">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Estriche München Logo" 
                className="h-10 w-auto rounded-md"
              />
              <div>
                <div className="font-bold text-lg">Estriche München</div>
                <div className="text-xs text-background/70">Estrich • Bodenaufbau • Sanierung</div>
              </div>
            </Link>
            <p className="text-background/70 text-sm max-w-md" data-testid="text-footer-description">
              Ihr zuverlässiger Partner für professionelle Estricharbeiten in München und Umgebung. 
              Termintreu, sauber und fachgerecht.
            </p>
          </div>

          <div data-testid="footer-services">
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/leistungen/${service.id}`} className="hover:text-background transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/70">
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
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-background transition-colors">Estriche München</Link>. 
            Alle Rechte vorbehalten. | Website by{" "}
            <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Extrucon GmbH</a>
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-background/60">
            <Link href="/impressum" className="hover:text-background transition-colors" data-testid="link-impressum">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-background transition-colors" data-testid="link-datenschutz">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-background transition-colors" data-testid="link-agb">
              AGB
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
