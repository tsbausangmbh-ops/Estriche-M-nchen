import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export function BusinessInfoCard() {
  return (
    <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
      <CardContent className="p-6 space-y-6">
        <div>
          <p className="font-bold text-sm mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            Website-Betreiber & Verantwortliche
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            Die Website Estriche München wird gemeinschaftlich betrieben von zwei rechtlich selbstständigen Einzelgewerben:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 border rounded-lg bg-background/50">
            <p className="font-semibold text-xs mb-2">Gewerbebetrieb 1</p>
            <p className="text-xs text-muted-foreground">
              <strong>Mustafa Sakar</strong><br />
              Hardenbergstr. 4, 80992 München<br />
              Tel: 089 444438872<br />
              <span className="text-[10px]">Bauleitung, Projektsteuerung, Kundenberatung</span>
            </p>
          </div>

          <div className="p-3 border rounded-lg bg-background/50">
            <p className="font-semibold text-xs mb-2">Gewerbebetrieb 2</p>
            <p className="text-xs text-muted-foreground">
              <strong>Ali Kemal Kurt</strong><br />
              Zielstattstr. 9, 81379 München<br />
              Tel: 0152 122 740 43<br />
              <span className="text-[10px]">Ausführende Bau- und Sanierungsleistungen</span>
            </p>
          </div>
        </div>

        <div className="p-3 border rounded-lg bg-background/50">
          <p className="font-semibold text-xs mb-2">Ausführender Partnerbetrieb Estricharbeiten</p>
          <p className="text-xs text-muted-foreground">
            <strong>Estrich T. H. UG (haftungsbeschränkt)</strong><br />
            Seebruckerstr. 15, 81825 München<br />
            HRB 282493, Amtsgericht München | GF: Hüseyin Türker<br />
            <span className="text-[10px]">Estrichverlegung und Ausführung von Isolierarbeiten</span>
          </p>
        </div>

        <div className="pt-2 border-t">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            <strong>Rechtlicher Hinweis:</strong> Die genannten Gewerbebetriebe sind rechtlich, wirtschaftlich und steuerlich eigenständig. 
            Der jeweilige Vertragspartner wird im Angebot und Auftrag ausdrücklich benannt. 
            Eine gemeinschaftliche Haftung besteht nicht. USt-ID: DE356852204
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
