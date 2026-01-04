import { Link } from "wouter";
import { services } from "@/lib/services-data";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2" data-testid="footer-brand">
            <Link href="/">
              <a className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">E</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Estrich München</div>
                  <div className="text-xs text-background/70">Estrich • Bodenaufbau • Sanierung</div>
                </div>
              </a>
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
                  <Link href={`/leistungen/${service.id}`}>
                    <a className="hover:text-background transition-colors">
                      {service.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li data-testid="text-footer-phone">089 444438872</li>
              <li data-testid="text-footer-email">info@estrich-muenchen.de</li>
              <li>München & Umgebung</li>
              <li>Mo–Fr: 7:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Estrich München. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-background/60">
            <Link href="/impressum">
              <a className="hover:text-background transition-colors" data-testid="link-impressum">
                Impressum
              </a>
            </Link>
            <Link href="/datenschutz">
              <a className="hover:text-background transition-colors" data-testid="link-datenschutz">
                Datenschutz
              </a>
            </Link>
            <Link href="/agb">
              <a className="hover:text-background transition-colors" data-testid="link-agb">
                AGB
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
