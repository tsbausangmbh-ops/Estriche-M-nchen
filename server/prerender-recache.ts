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

const RECACHE_DELAY_MS = 15000;
const BATCH_SIZE = 5;

export async function recachePrerenderPages(): Promise<void> {
  const token = process.env.PRERENDER_TOKEN;

  if (!token) {
    console.log('[Prerender.io Recache] Kein PRERENDER_TOKEN gesetzt – übersprungen');
    return;
  }

  console.log(`[Prerender.io Recache] Warte ${RECACHE_DELAY_MS / 1000}s bis Server stabil läuft...`);
  await new Promise(resolve => setTimeout(resolve, RECACHE_DELAY_MS));

  const urls = ALL_ROUTES.map(route => `${SITE_BASE}${route}`);
  console.log(`[Prerender.io Recache] Starte Cache-Erneuerung für ${urls.length} Seiten in Batches à ${BATCH_SIZE}...`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    try {
      const response = await fetch('https://api.prerender.io/recache', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prerenderToken: token,
          urls: batch,
        }),
      });

      if (response.ok) {
        success += batch.length;
        console.log(`[Prerender.io Recache] Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} Seiten in Warteschlange`);
      } else {
        failed += batch.length;
        const errorText = await response.text();
        console.log(`[Prerender.io Recache] Batch ${Math.floor(i / BATCH_SIZE) + 1} Fehler ${response.status}: ${errorText}`);
      }
    } catch (error) {
      failed += batch.length;
      console.log(`[Prerender.io Recache] Batch-Fehler: ${error instanceof Error ? error.message : 'Unbekannt'}`);
    }

    if (i + BATCH_SIZE < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`[Prerender.io Recache] Fertig: ${success} erfolgreich, ${failed} fehlgeschlagen`);
}
