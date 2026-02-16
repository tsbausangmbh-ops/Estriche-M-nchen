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
  '/leistungen/schnellestrich',
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
  '/ratgeber/estrich-trocknungszeit-richtig-berechnen',
  '/ratgeber/fussbodenheizung-estrich-was-beachten',
  '/ratgeber/estrich-sanierung-wann-notwendig',
  '/ratgeber/industrieboden-anforderungen-gewerbe',
  '/ratgeber/schnellestrich-vorteile-einsatzgebiete',
  '/ratgeber/waermedaemmung-estrich-energiesparen',
  '/ratgeber/zementestrich-oder-fliessestrich',
  '/ratgeber/estrich-kosten-berechnen-preisfaktoren',
  '/ratgeber/fehler-estricharbeiten-vermeiden',
  '/ratgeber/estrich-aufbau-schichten-erklaert',
  '/ratgeber/estrich-schleifen-polieren-anleitung',
  '/ratgeber/estrich-grundierung-wann-notwendig',
  '/ratgeber/schwimmender-estrich-vorteile-aufbau',
  '/ratgeber/estrich-dicke-berechnen-empfehlung',
  '/ratgeber/estrich-feuchtigkeit-messen-cm-methode',
  '/ratgeber/aufheizprotokoll-fussbodenheizung-anleitung',
  '/ratgeber/estrich-daemmung-pflicht-geg-2026',
  '/ratgeber/estrich-gefaelle-bad-dusche',
  '/ratgeber/estrich-risse-ursachen-reparatur',
  '/ratgeber/estrich-altbau-sanierung-tipps',
  '/ratgeber/sichtestrich-kosten-vorteile-nachteile',
  '/ratgeber/gussasphaltestrich-einsatzgebiete',
  '/ratgeber/estrich-garage-belastbar-beschichtung',
  '/ratgeber/trittschalldaemmung-estrich-din4109',
  '/ratgeber/estrich-nachbesserung-maengel-rechte',
  '/ratgeber/estrich-neubau-planung-zeitplan',
  '/ratgeber/waermepumpe-fussbodenheizung-estrich',
  '/ratgeber/estrich-keller-feuchtigkeit-abdichtung',
  '/ratgeber/epoxidharz-beschichtung-industrieboden',
  '/muenchen/altstadt-lehel',
  '/muenchen/ludwigsvorstadt-isarvorstadt',
  '/muenchen/maxvorstadt',
  '/muenchen/schwabing-west',
  '/muenchen/au-haidhausen',
  '/muenchen/sendling',
  '/muenchen/sendling-westpark',
  '/muenchen/schwanthalerhoehe',
  '/muenchen/neuhausen-nymphenburg',
  '/muenchen/moosach',
  '/muenchen/milbertshofen-am-hart',
  '/muenchen/schwabing-freimann',
  '/muenchen/bogenhausen',
  '/muenchen/berg-am-laim',
  '/muenchen/trudering-riem',
  '/muenchen/ramersdorf-perlach',
  '/muenchen/obergiesing-fasangarten',
  '/muenchen/untergiesing-harlaching',
  '/muenchen/thalkirchen-obersendling-forstenried-fuerstenried-solln',
  '/muenchen/hadern',
  '/muenchen/pasing-obermenzing',
  '/muenchen/aubing-lochhausen-langwied',
  '/muenchen/allach-untermenzing',
  '/muenchen/feldmoching-hasenbergl',
  '/muenchen/laim',
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
