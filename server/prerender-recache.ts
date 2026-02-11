const SITE_BASE = 'https://estriche-muenchen.de';

const ALL_ROUTES = [
  '/',
  '/leistungen/zementestrich',
  '/leistungen/fliessestrich',
  '/leistungen/heizestrich',
  '/leistungen/fussbodenheizung',
  '/leistungen/industrieboeden',
  '/leistungen/waermedaemmung',
  '/leistungen/sanierung',
  '/kontakt',
  '/preise',
  '/ueber-uns',
  '/faq',
  '/datenschutz',
  '/impressum',
  '/agb',
  '/cookie-einstellungen',
  '/barrierefreiheit',
  '/ablauf',
  '/angebot',
  '/rechner',
  '/ratgeber',
];

export async function recachePrerenderPages(): Promise<void> {
  const token = process.env.PRERENDER_TOKEN;

  if (!token) {
    console.log('[Prerender.io Recache] Kein PRERENDER_TOKEN gesetzt – übersprungen');
    return;
  }

  const urls = ALL_ROUTES.map(route => `${SITE_BASE}${route}`);

  console.log(`[Prerender.io Recache] Starte Cache-Erneuerung für ${urls.length} Seiten...`);

  try {
    const response = await fetch('https://api.prerender.io/recache', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prerenderToken: token,
        urls,
      }),
    });

    if (response.ok) {
      console.log(`[Prerender.io Recache] Erfolgreich: ${urls.length} Seiten in die Warteschlange gestellt`);
    } else {
      const errorText = await response.text();
      console.log(`[Prerender.io Recache] Fehler ${response.status}: ${errorText}`);
    }
  } catch (error) {
    console.log(`[Prerender.io Recache] Netzwerkfehler: ${error instanceof Error ? error.message : 'Unbekannt'}`);
  }
}
