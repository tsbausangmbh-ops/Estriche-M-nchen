export interface District {
  slug: string;
  name: string;
  bezirk: number;
  description: string;
  highlights: string[];
  estrichInfo: string;
  typicalProjects: string[];
  nearbyDistricts: string[];
}

export const districts: District[] = [
  {
    slug: "altstadt-lehel",
    name: "Altstadt-Lehel",
    bezirk: 1,
    description: "Im Herzen Münchens verlegen wir Estrich in historischen Gebäuden und modernen Neubauten. Altstadt-Lehel erfordert besonderes Feingefühl bei Sanierungen in denkmalgeschützten Häusern rund um den Marienplatz und die Maximilianstraße.",
    highlights: ["Denkmalschutz-Sanierungen", "Altbau-Estrich mit Höhenausgleich", "Fußbodenheizung nachrüsten in Jugendstil-Wohnungen"],
    estrichInfo: "In Altstadt-Lehel sind Estrichsanierungen und Fußbodenheizungs-Nachrüstungen besonders gefragt. Die historische Bausubstanz erfordert leichte Estrichsysteme und schonende Verlegung. Wir arbeiten eng mit Denkmalschutzbehörden zusammen.",
    typicalProjects: ["Altbausanierung Maximilianstraße – 95 m² Fließestrich", "Loft-Umbau Lehel – 120 m² Sichtestrich geschliffen", "Geschäftsräume Marienplatz – 200 m² Schnellestrich"],
    nearbyDistricts: ["Ludwigsvorstadt-Isarvorstadt", "Maxvorstadt", "Au-Haidhausen", "Bogenhausen"]
  },
  {
    slug: "ludwigsvorstadt-isarvorstadt",
    name: "Ludwigsvorstadt-Isarvorstadt",
    bezirk: 2,
    description: "Von der Theresienwiese bis zum Gärtnerplatzviertel – wir verlegen Estrich in einem der lebendigsten Viertel Münchens. Altbauten aus der Gründerzeit treffen auf moderne Neubauprojekte rund um den Hauptbahnhof.",
    highlights: ["Gründerzeit-Altbau Sanierung", "Estrich für Gastronomiebetriebe", "Trittschalldämmung in Mehrfamilienhäusern"],
    estrichInfo: "Ludwigsvorstadt-Isarvorstadt ist geprägt von Gründerzeit-Altbauten und gastronomischen Betrieben. Hier verlegen wir häufig Trittschalldämmung nach DIN 4109 und Heizestrich für nachgerüstete Fußbodenheizungen. Gastronomie-Böden erfordern chemiebeständige Beschichtungen.",
    typicalProjects: ["Gastronomie Gärtnerplatz – 150 m² säurebeständiger Estrich", "Altbau-Wohnung Isarvorstadt – 85 m² Fußbodenheizung nachrüsten", "Büroetage Hauptbahnhof – 300 m² Fließestrich"],
    nearbyDistricts: ["Altstadt-Lehel", "Maxvorstadt", "Sendling", "Au-Haidhausen"]
  },
  {
    slug: "maxvorstadt",
    name: "Maxvorstadt",
    bezirk: 3,
    description: "Das Universitätsviertel mit Pinakotheken und TU München. In der Maxvorstadt sanieren wir historische Gebäude und verlegen Estrich in modernen Büro- und Wohnprojekten. Besonders gefragt: Sichtestrich für Galerien und kreative Büros.",
    highlights: ["Sichtestrich für Galerien und Ateliers", "Uni-Gebäude Sanierung", "Büroestrich für Start-ups"],
    estrichInfo: "Die Maxvorstadt verbindet Kultur und Innovation. Sichtestrich und geschliffene Betonböden sind hier besonders beliebt für Galerien, Ateliers und moderne Büros. Bei Altbausanierungen setzen wir auf leichte Estrichsysteme mit optimaler Trittschalldämmung.",
    typicalProjects: ["Galerie Kunstareal – 180 m² polierter Sichtestrich", "Start-up Büro Augustenstraße – 250 m² Fließestrich", "Altbau-Komplettsanierung – 110 m² Zementestrich mit Fußbodenheizung"],
    nearbyDistricts: ["Schwabing-West", "Altstadt-Lehel", "Ludwigsvorstadt-Isarvorstadt", "Neuhausen-Nymphenburg"]
  },
  {
    slug: "schwabing-west",
    name: "Schwabing-West",
    bezirk: 4,
    description: "Schwabing-West ist eines der begehrtesten Wohnviertel Münchens. Hier verlegen wir Estrich in eleganten Altbauwohnungen und hochwertigen Neubauten. Fußbodenheizungs-Nachrüstung in Jugendstil-Wohnungen ist unsere Spezialität.",
    highlights: ["Jugendstil-Wohnungen mit Fußbodenheizung", "Premium-Estrich für Neubauten", "Schallschutz nach höchsten Standards"],
    estrichInfo: "Schwabing-West steht für gehobenes Wohnen. Unsere Kunden erwarten hier höchste Qualität bei Estrich und Bodenaufbau. Fließestrich mit Fußbodenheizung dominiert bei Neubauten, Nachrüstung per Fräsverfahren bei Altbauten. Trittschalldämmung ist in den dicht bebauten Wohnvierteln besonders wichtig.",
    typicalProjects: ["Jugendstil-Villa Leopoldstraße – 220 m² Heizestrich", "Neubau-Penthouse – 160 m² Premium-Fließestrich", "Mehrfamilienhaus Hohenzollernstraße – 450 m² Zementestrich"],
    nearbyDistricts: ["Maxvorstadt", "Schwabing-Freimann", "Milbertshofen-Am Hart", "Neuhausen-Nymphenburg"]
  },
  {
    slug: "au-haidhausen",
    name: "Au-Haidhausen",
    bezirk: 5,
    description: "Das charmante Franzosenviertel und die Au gehören zu den beliebtesten Wohnlagen Münchens. Gründerzeit-Häuser und moderne Lofts prägen das Bild – perfekt für unsere Estrichsanierung und Fußbodenheizungs-Nachrüstung.",
    highlights: ["Gründerzeit-Sanierung Franzosenviertel", "Loft-Umbauten mit Sichtestrich", "Fußbodenheizung im Altbau"],
    estrichInfo: "Au-Haidhausen ist ein Paradies für Altbau-Liebhaber. Die Gründerzeit-Häuser erfordern sensible Estrichsanierung mit Höhenausgleich und optimaler Trittschalldämmung. In umgebauten Fabriketagen und Lofts ist geschliffener Sichtestrich der absolute Trend.",
    typicalProjects: ["Gründerzeit-Wohnung Franzosenviertel – 92 m² Fußbodenheizung nachrüsten", "Loft Kultfabrik – 180 m² geschliffener Sichtestrich", "Altbau-Komplettsanierung Wörthstraße – 75 m² Heizestrich"],
    nearbyDistricts: ["Altstadt-Lehel", "Ludwigsvorstadt-Isarvorstadt", "Obergiesing-Fasangarten", "Berg am Laim"]
  },
  {
    slug: "sendling",
    name: "Sendling",
    bezirk: 6,
    description: "Sendling bietet eine bunte Mischung aus Altbau-Charme und Neubaugebieten. Als Ihr Estrichleger in Sendling verlegen wir von der gemütlichen Altbauwohnung bis zum modernen Reihenhaus alle Estricharten professionell.",
    highlights: ["Altbau-Estrich mit Trittschalldämmung", "Neubauprojekte am Südpark", "Gewerbeboden für Handwerksbetriebe"],
    estrichInfo: "In Sendling verlegen wir Estrich für private und gewerbliche Kunden. Die Mischung aus Altbau-Wohnungen und Neubaugebieten erfordert vielseitige Lösungen – von der Trittschalldämmung in hellhörigen Altbauten bis zum Schnellestrich für termingebundene Neubauprojekte.",
    typicalProjects: ["Neubau-Reihenhaus Südpark – 140 m² Zementestrich mit Fußbodenheizung", "Handwerksbetrieb Sendling – 200 m² Industrieboden", "Altbau-Sanierung Lindwurmstraße – 68 m² Fließestrich"],
    nearbyDistricts: ["Ludwigsvorstadt-Isarvorstadt", "Sendling-Westpark", "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln", "Schwanthalerhöhe"]
  },
  {
    slug: "sendling-westpark",
    name: "Sendling-Westpark",
    bezirk: 7,
    description: "Rund um den Westpark verlegen wir Estrich in Wohnanlagen aus den 70er und 80er Jahren sowie in neuen Wohnprojekten. Estrichsanierung und energetische Bodendämmung sind hier besonders nachgefragt.",
    highlights: ["Estrichsanierung 70er/80er Bauten", "Energetische Bodendämmung", "Fußbodenheizung nachrüsten"],
    estrichInfo: "Sendling-Westpark ist geprägt von Wohnanlagen der 70er und 80er Jahre, die zunehmend saniert werden. Estrichsanierung mit neuer Wärmedämmung und Fußbodenheizungs-Nachrüstung sind die häufigsten Aufträge. Neue Wohnprojekte erhalten modernsten Fließestrich.",
    typicalProjects: ["Wohnanlage Westpark – 800 m² Estrichsanierung mit Dämmung", "Einfamilienhaus – 165 m² Fußbodenheizung nachrüsten", "Eigentumswohnung – 90 m² Fließestrich Neubau"],
    nearbyDistricts: ["Sendling", "Schwanthalerhöhe", "Hadern", "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln"]
  },
  {
    slug: "schwanthalerhoehe",
    name: "Schwanthalerhöhe",
    bezirk: 8,
    description: "Die Schwanthalerhöhe wandelt sich vom Arbeiterviertel zum trendigen Wohnquartier. Hier verlegen wir Estrich in sanierten Altbauten, neuen Wohnkomplexen und Gewerbeflächen rund um die Theresienhöhe.",
    highlights: ["Altbau zu Loft Umbauten", "Gewerbeestrich Theresienhöhe", "Moderne Wohnkomplexe"],
    estrichInfo: "Die Schwanthalerhöhe erlebt einen Wandel: Ehemalige Gewerbeflächen werden zu Wohnlofts, Altbauten werden kernsaniert. Wir verlegen hier Sichtestrich für Loft-Umbauten, Industrieböden für verbleibende Gewerbeflächen und hochwertigen Fließestrich für neue Wohnkomplexe.",
    typicalProjects: ["Loft-Umbau Theresienhöhe – 150 m² Sichtestrich", "Wohnkomplex Heimeranplatz – 600 m² Fließestrich", "Gewerbefläche Westend – 350 m² Industrieboden"],
    nearbyDistricts: ["Ludwigsvorstadt-Isarvorstadt", "Sendling", "Sendling-Westpark", "Laim"]
  },
  {
    slug: "neuhausen-nymphenburg",
    name: "Neuhausen-Nymphenburg",
    bezirk: 9,
    description: "Von der Nymphenburger Schlossanlage bis zum Rotkreuzplatz – Neuhausen-Nymphenburg vereint herrschaftliche Villen mit urbanem Wohnen. Wir verlegen hier Estrich auf höchstem Niveau für anspruchsvolle Kunden.",
    highlights: ["Villen-Sanierung Nymphenburg", "Premium-Estrich mit Fußbodenheizung", "Altbau-Estrich Neuhausen"],
    estrichInfo: "Neuhausen-Nymphenburg gehört zu den Top-Wohnlagen Münchens. Unsere Kunden erwarten Premium-Qualität: Fließestrich mit Fußbodenheizung für Villen, Schallschutz nach erhöhten Anforderungen und Sichtestrich für repräsentative Räume. In Neuhausen dominieren Altbausanierungen.",
    typicalProjects: ["Villa Nymphenburg – 320 m² Premium-Heizestrich", "Altbau Rotkreuzplatz – 105 m² Fußbodenheizung nachrüsten", "Doppelhaushälfte – 175 m² Zementestrich"],
    nearbyDistricts: ["Maxvorstadt", "Schwabing-West", "Moosach", "Laim"]
  },
  {
    slug: "moosach",
    name: "Moosach",
    bezirk: 10,
    description: "Moosach entwickelt sich mit dem neuen Wohnquartier an der ehemaligen Luitpoldkaserne rasant weiter. Wir verlegen Estrich in Neubauten, Gewerbeflächen und sanierten Bestandsgebäuden im gesamten Stadtbezirk.",
    highlights: ["Neubaugebiet Luitpoldkaserne", "Gewerbeestrich Moosacher Straße", "Bestandssanierung"],
    estrichInfo: "Moosach ist ein aufstrebendes Viertel mit viel Neubautätigkeit. Große Neubauprojekte erhalten Fließestrich mit Fußbodenheizung, Gewerbeflächen robuste Industrieböden. Bestandsgebäude werden energetisch saniert mit neuer Bodendämmung.",
    typicalProjects: ["Neubaugebiet Luitpoldkaserne – 1.200 m² Fließestrich", "Gewerbehalle Moosach – 500 m² Industrieboden", "Altbau-Sanierung – 95 m² Estrich mit Fußbodenheizung"],
    nearbyDistricts: ["Neuhausen-Nymphenburg", "Milbertshofen-Am Hart", "Feldmoching-Hasenbergl", "Allach-Untermenzing"]
  },
  {
    slug: "milbertshofen-am-hart",
    name: "Milbertshofen-Am Hart",
    bezirk: 11,
    description: "Rund um das BMW-Gelände und die Allianz Arena verlegen wir Estrich in Industrie- und Gewerbeflächen sowie in den wachsenden Wohnvierteln. Der Bezirk bietet eine spannende Mischung aus Industrie und Wohnen.",
    highlights: ["Industrieböden BMW-Umfeld", "Gewerbeestrich Highlight Towers", "Wohnestrich Olympiadorf"],
    estrichInfo: "Milbertshofen-Am Hart ist ein wichtiger Standort für Industrieböden und Gewerbeestrich. Rund um BMW und die Allianz Arena verlegen wir hochbelastbare Industrieböden. In den Wohnvierteln Am Hart und Olympiadorf setzen wir auf modernen Fließestrich.",
    typicalProjects: ["Zulieferer BMW – 2.000 m² Industrieboden", "Neubau Am Hart – 400 m² Fließestrich", "Gewerbefläche Frankfurter Ring – 600 m² Hartstoffestrich"],
    nearbyDistricts: ["Moosach", "Schwabing-West", "Schwabing-Freimann", "Feldmoching-Hasenbergl"]
  },
  {
    slug: "schwabing-freimann",
    name: "Schwabing-Freimann",
    bezirk: 12,
    description: "Von der Münchner Freiheit bis zum neuen Stadtviertel Bayernkaserne – Schwabing-Freimann ist Münchens vielseitigster Bezirk. Wir verlegen Estrich in Altbau-Schmuckstücken und den größten Neubauprojekten der Stadt.",
    highlights: ["Neubaugebiet Bayernkaserne", "Altbau-Sanierung Schwabing", "Gewerbeestrich Nordheide"],
    estrichInfo: "Schwabing-Freimann bietet die ganze Bandbreite: Jugendstil-Altbauten in Schwabing erfordern sensible Sanierung, während die Neubaugebiete Bayernkaserne und Domagkpark modernste Estrichsysteme erhalten. Im Gewerbegebiet Freimann verlegen wir Industrieböden.",
    typicalProjects: ["Bayernkaserne Neubau – 3.000 m² Fließestrich Großprojekt", "Jugendstil-Haus Schwabing – 130 m² Fußbodenheizung nachrüsten", "Gewerbepark Freimann – 800 m² Industrieboden"],
    nearbyDistricts: ["Schwabing-West", "Milbertshofen-Am Hart", "Bogenhausen"]
  },
  {
    slug: "bogenhausen",
    name: "Bogenhausen",
    bezirk: 13,
    description: "Bogenhausen ist Münchens nobelster Bezirk mit prächtigen Villen und exklusiven Wohnanlagen. Als Estrichleger in Bogenhausen arbeiten wir in den anspruchsvollsten Immobilien der Stadt – von der Prinzregentenstraße bis Oberföhring.",
    highlights: ["Villen-Estrich Herzogpark", "Premium-Sichtestrich", "Fußbodenheizung für Luxuswohnungen"],
    estrichInfo: "In Bogenhausen verlegen wir Premium-Estrich für die exklusivsten Immobilien Münchens. Villen im Herzogpark erhalten maßgeschneiderten Heizestrich, Luxuswohnungen an der Prinzregentenstraße hochwertigen Sichtestrich. Unsere Arbeit muss hier höchsten ästhetischen und technischen Ansprüchen genügen.",
    typicalProjects: ["Villa Herzogpark – 380 m² Premium-Heizestrich mit Sichtoberfläche", "Luxuswohnung Prinzregentenstraße – 200 m² Fließestrich", "Einfamilienhaus Oberföhring – 210 m² Zementestrich"],
    nearbyDistricts: ["Altstadt-Lehel", "Schwabing-Freimann", "Berg am Laim", "Au-Haidhausen"]
  },
  {
    slug: "berg-am-laim",
    name: "Berg am Laim",
    bezirk: 14,
    description: "Berg am Laim wandelt sich mit neuen Wohnquartieren am ehemaligen Bahnareal. Wir verlegen Estrich in den Neubauprojekten entlang der Bad-Schachener-Straße und sanieren Bestandsgebäude im gesamten Bezirk.",
    highlights: ["Neubaugebiet Werksviertel-Mitte", "Bestandssanierung Berg am Laim", "Gewerbeestrich"],
    estrichInfo: "Berg am Laim profitiert von der Nähe zum neuen Werksviertel und zum Ostbahnhof. Große Neubauprojekte erhalten modernsten Fließestrich, Bestandsgebäude werden mit neuer Wärmedämmung und Fußbodenheizung saniert. Gewerbeimmobilien benötigen robuste Industrieböden.",
    typicalProjects: ["Werksviertel Neubau – 500 m² Fließestrich", "Wohnanlage Bad-Schachener-Straße – 350 m² Zementestrich", "Bestandssanierung – 85 m² Estrich mit Fußbodenheizung"],
    nearbyDistricts: ["Au-Haidhausen", "Bogenhausen", "Trudering-Riem", "Ramersdorf-Perlach"]
  },
  {
    slug: "trudering-riem",
    name: "Trudering-Riem",
    bezirk: 15,
    description: "Trudering-Riem ist Münchens familienfreundlichster Bezirk mit vielen Einfamilienhäusern und der Messestadt Riem. Wir verlegen hier Estrich in Neubauten, Reihenhäusern und den Gewerbeflächen rund um die Neue Messe.",
    highlights: ["Einfamilienhaus-Estrich", "Messestadt Riem Neubauten", "Gewerbeestrich Messe München"],
    estrichInfo: "Trudering-Riem ist geprägt von Ein- und Zweifamilienhäusern mit Gärten – der ideale Markt für Zementestrich mit Fußbodenheizung. In der Messestadt Riem entstehen weiterhin große Wohnanlagen. Rund um die Messe München verlegen wir hochbelastbare Gewerbeböden.",
    typicalProjects: ["Einfamilienhaus Trudering – 195 m² Zementestrich mit Fußbodenheizung", "Wohnanlage Messestadt – 700 m² Fließestrich", "Gewerbefläche Messe – 1.500 m² Industrieboden"],
    nearbyDistricts: ["Berg am Laim", "Ramersdorf-Perlach", "Bogenhausen"]
  },
  {
    slug: "ramersdorf-perlach",
    name: "Ramersdorf-Perlach",
    bezirk: 16,
    description: "Von Neuperlach bis Alt-Perlach – einer der einwohnerstärksten Bezirke Münchens. Wir verlegen Estrich in den großen Sanierungsprojekten der 60er/70er-Bauten und in neuen Wohnquartieren wie dem Zamilapark.",
    highlights: ["Großsanierung Neuperlach-Wohnblöcke", "Neubaugebiet Zamilapark", "Estrich für Eigentümergemeinschaften"],
    estrichInfo: "Ramersdorf-Perlach steht vor einer Sanierungswelle: Die großen Wohnanlagen aus den 60er und 70er Jahren benötigen neue Estriche, Dämmung und Fußbodenheizung. Gleichzeitig entstehen moderne Wohnquartiere mit höchsten energetischen Standards.",
    typicalProjects: ["Wohnblock-Sanierung Neuperlach – 2.000 m² Estrichsanierung", "Neubau Zamilapark – 450 m² Fließestrich", "Eigentumswohnung Alt-Perlach – 78 m² Fußbodenheizung"],
    nearbyDistricts: ["Berg am Laim", "Trudering-Riem", "Obergiesing-Fasangarten", "Untergiesing-Harlaching"]
  },
  {
    slug: "obergiesing-fasangarten",
    name: "Obergiesing-Fasangarten",
    bezirk: 17,
    description: "Obergiesing hat sich vom Arbeiterviertel zum angesagten Wohnviertel gewandelt. Wir verlegen hier Estrich in sanierten Altbauten und neuen Wohnprojekten am Candidplatz und entlang der Tegernseer Landstraße.",
    highlights: ["Altbausanierung Giesing", "Estrich für Wohnbauprojekte", "Fußbodenheizung nachrüsten"],
    estrichInfo: "Obergiesing erlebt einen Aufschwung mit vielen Sanierungsprojekten und Neubauten. Altbauten aus der Jahrhundertwende erhalten neue Estriche mit Trittschalldämmung, moderne Wohnungen bekommen Fließestrich mit Fußbodenheizung.",
    typicalProjects: ["Altbau Candidplatz – 88 m² Estrichsanierung mit Fußbodenheizung", "Neubau Tegernseer Landstraße – 300 m² Fließestrich", "Gewerbefläche Giesing – 180 m² Industrieboden"],
    nearbyDistricts: ["Au-Haidhausen", "Untergiesing-Harlaching", "Ramersdorf-Perlach"]
  },
  {
    slug: "untergiesing-harlaching",
    name: "Untergiesing-Harlaching",
    bezirk: 18,
    description: "Zwischen Isar und Tierpark Hellabrunn liegt eines der grünsten Viertel Münchens. In Harlaching verlegen wir Estrich in gepflegten Villen und Einfamilienhäusern, in Untergiesing in Altbauten und Neubauten.",
    highlights: ["Villen-Estrich Harlaching", "Altbau-Sanierung Untergiesing", "Energetische Bodendämmung"],
    estrichInfo: "Untergiesing-Harlaching bietet eine Mischung aus gehobenen Wohnlagen in Harlaching und urbanem Charme in Untergiesing. In Harlaching verlegen wir Premium-Estrich für Villen und Einfamilienhäuser, in Untergiesing sanieren wir Altbauten mit neuer Wärmedämmung.",
    typicalProjects: ["Villa Harlaching – 280 m² Heizestrich", "Altbau Untergiesing – 72 m² Fließestrich", "Einfamilienhaus Menterschwaige – 190 m² Zementestrich"],
    nearbyDistricts: ["Obergiesing-Fasangarten", "Sendling", "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln"]
  },
  {
    slug: "thalkirchen-obersendling-forstenried-fuerstenried-solln",
    name: "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln",
    bezirk: 19,
    description: "Der größte Bezirk Münchens – von Thalkirchen am Flaucher bis zum noblen Solln. Hier verlegen wir Estrich in Villen, Einfamilienhäusern und den Gewerbeimmobilien am Siemens-Campus.",
    highlights: ["Villen-Estrich Solln", "Siemens-Campus Gewerbeböden", "Einfamilienhäuser Forstenried"],
    estrichInfo: "Dieser weitläufige Bezirk bietet alles: Premium-Villen in Solln, familienfreundliche Einfamilienhäuser in Forstenried und Fürstenried, sowie Gewerbeimmobilien rund um den Siemens-Campus in Obersendling. Wir bieten für jeden Bedarf die passende Estrichlösung.",
    typicalProjects: ["Villa Solln – 350 m² Premium-Heizestrich", "Siemens-Campus Büro – 800 m² Fließestrich", "Einfamilienhaus Forstenried – 160 m² Zementestrich"],
    nearbyDistricts: ["Sendling-Westpark", "Hadern", "Untergiesing-Harlaching", "Sendling"]
  },
  {
    slug: "hadern",
    name: "Hadern",
    bezirk: 20,
    description: "Hadern bietet ruhiges Wohnen nahe dem Klinikum Großhadern und der LMU. Wir verlegen Estrich in Einfamilienhäusern, Klinikgebäuden und den Wohnanlagen rund um den Haderner Stern.",
    highlights: ["Klinikum-Umfeld Gewerbeböden", "Einfamilienhaus-Estrich", "Estrichsanierung Wohnanlagen"],
    estrichInfo: "Hadern ist ein ruhiger Wohnbezirk mit vielen Ein- und Zweifamilienhäusern. Das Klinikum Großhadern und die LMU bringen zusätzlich Nachfrage nach Gewerbe- und Industrieböden. Sanierungsprojekte in den 70er-Jahre-Wohnanlagen nehmen zu.",
    typicalProjects: ["Einfamilienhaus Hadern – 180 m² Zementestrich", "Klinikgebäude – 400 m² chemiebeständiger Boden", "Wohnanlage Haderner Stern – 600 m² Estrichsanierung"],
    nearbyDistricts: ["Sendling-Westpark", "Pasing-Obermenzing", "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln"]
  },
  {
    slug: "pasing-obermenzing",
    name: "Pasing-Obermenzing",
    bezirk: 21,
    description: "Pasing mit seinem eigenen Zentrum und das villenreiche Obermenzing bieten beste Wohnlagen im Münchner Westen. Wir verlegen hier Estrich in Villen, Neubauprojekten und Gewerbeflächen rund um den Pasinger Bahnhof.",
    highlights: ["Villen-Estrich Obermenzing", "Neubauprojekte Pasing", "Gewerbeestrich Pasinger Marienplatz"],
    estrichInfo: "Pasing-Obermenzing verbindet urbanes Leben in Pasing mit villenreichem Wohnen in Obermenzing. Neubauprojekte am Pasinger Bahnhof erhalten modernsten Fließestrich, Villen in Obermenzing Premium-Heizestrich. Der lokale Gewerbebereich benötigt robuste Bodenbeläge.",
    typicalProjects: ["Villa Obermenzing – 290 m² Premium-Heizestrich", "Neubau Pasinger Bahnhof – 500 m² Fließestrich", "Gewerbefläche Pasing – 250 m² Industrieboden"],
    nearbyDistricts: ["Neuhausen-Nymphenburg", "Aubing-Lochhausen-Langwied", "Hadern", "Laim"]
  },
  {
    slug: "aubing-lochhausen-langwied",
    name: "Aubing-Lochhausen-Langwied",
    bezirk: 22,
    description: "Im Münchner Westen wächst die Freiham-Siedlung – eines der größten Neubauprojekte Bayerns. Wir verlegen Estrich in Tausenden neuen Wohnungen und in den bestehenden Wohngebieten Aubings.",
    highlights: ["Freiham Großprojekt", "Neubau-Estrich in Serie", "Einfamilienhäuser Aubing"],
    estrichInfo: "Aubing-Lochhausen-Langwied ist durch das Freiham-Projekt einer der am stärksten wachsenden Bezirke. Hier verlegen wir Estrich in industriellem Maßstab für neue Wohnanlagen. In Aubing und Lochhausen sanieren wir bestehende Einfamilienhäuser.",
    typicalProjects: ["Freiham Wohnanlage – 5.000 m² Fließestrich Großprojekt", "Einfamilienhaus Aubing – 170 m² Zementestrich", "Bestandssanierung Lochhausen – 95 m² Estrich mit Dämmung"],
    nearbyDistricts: ["Pasing-Obermenzing", "Allach-Untermenzing"]
  },
  {
    slug: "allach-untermenzing",
    name: "Allach-Untermenzing",
    bezirk: 23,
    description: "Allach-Untermenzing bietet dörflichen Charme am Stadtrand mit dem Industrie-Standort MAN/MTU. Wir verlegen Estrich in Einfamilienhäusern und den umliegenden Gewerbeflächen.",
    highlights: ["Einfamilienhaus-Estrich", "Industrieböden MAN-Umfeld", "Bestandssanierung"],
    estrichInfo: "Allach-Untermenzing verbindet ruhiges Wohnen mit industrieller Nachbarschaft. Einfamilienhäuser erhalten Zementestrich mit Fußbodenheizung, Gewerbeflächen im MAN-Umfeld hochbelastbare Industrieböden. Bestandssanierungen umfassen oft neue Wärmedämmung.",
    typicalProjects: ["Einfamilienhaus Allach – 185 m² Zementestrich mit Fußbodenheizung", "Zulieferer MAN – 1.000 m² Industrieboden", "Altbau Untermenzing – 80 m² Estrichsanierung"],
    nearbyDistricts: ["Moosach", "Feldmoching-Hasenbergl", "Aubing-Lochhausen-Langwied"]
  },
  {
    slug: "feldmoching-hasenbergl",
    name: "Feldmoching-Hasenbergl",
    bezirk: 24,
    description: "Im Norden Münchens entsteht mit dem Rahmenplan Feldmoching neuer Wohnraum. Wir verlegen Estrich in den Neubauprojekten und sanieren die Großwohnanlagen im Hasenbergl.",
    highlights: ["Neubaugebiet Feldmoching-Nord", "Großsanierung Hasenbergl", "Gewerbeestrich"],
    estrichInfo: "Feldmoching-Hasenbergl steht vor einem Wandel: Neue Wohnquartiere entstehen in Feldmoching, die Großwohnanlagen im Hasenbergl werden umfassend saniert. Beides erfordert professionelle Estricharbeiten in großem Maßstab.",
    typicalProjects: ["Neubaugebiet Feldmoching – 2.000 m² Fließestrich", "Wohnblock-Sanierung Hasenbergl – 1.500 m² Estrichsanierung", "Gewerbefläche München-Nord – 400 m² Industrieboden"],
    nearbyDistricts: ["Milbertshofen-Am Hart", "Moosach", "Allach-Untermenzing"]
  },
  {
    slug: "laim",
    name: "Laim",
    bezirk: 25,
    description: "Laim ist ein kompaktes Wohnviertel zwischen Pasing und der Innenstadt. Wir verlegen hier Estrich in Altbauwohnungen und den zahlreichen Neubauprojekten entlang der Landsberger Straße.",
    highlights: ["Altbau-Estrich Laim", "Neubauprojekte Landsberger Straße", "Trittschalldämmung"],
    estrichInfo: "Laim ist ein beliebtes Wohnviertel mit guter Anbindung. Die Mischung aus Altbauten und Neubauten bietet vielfältige Estrichprojekte – von der sensiblen Altbausanierung bis zum Großprojekt mit hunderten Quadratmetern Fließestrich.",
    typicalProjects: ["Altbau-Wohnung Laim – 75 m² Fließestrich mit Fußbodenheizung", "Neubau Landsberger Straße – 400 m² Fließestrich", "Dachgeschossausbau – 55 m² leichter Estrich"],
    nearbyDistricts: ["Schwanthalerhöhe", "Neuhausen-Nymphenburg", "Pasing-Obermenzing", "Hadern"]
  }
];

export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find(d => d.slug === slug);
}

export function getDistrictSlugs(): string[] {
  return districts.map(d => d.slug);
}
