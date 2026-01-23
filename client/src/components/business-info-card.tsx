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
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-3 border rounded-lg bg-background/50">
            <p className="font-semibold text-xs mb-2">Betreiber</p>
            <p className="text-xs text-muted-foreground">
              <strong>Mustafa Sakar</strong><br />
              Hardenbergstr. 4, 80992 München<br />
              Tel: 089 444438872<br />
              E-Mail: info@estriche-muenchen.de<br />
              <span className="text-[10px]">Bauleitung, Projektsteuerung, Kundenberatung</span>
            </p>
          </div>

          <div className="p-3 border rounded-lg bg-background/50">
            <p className="font-semibold text-xs mb-2">Ausführender Partnerbetrieb</p>
            <p className="text-xs text-muted-foreground">
              <strong>Estrich T. H. UG (haftungsbeschränkt)</strong><br />
              Seebruckerstr. 15, 81825 München<br />
              HRB 282493, Amtsgericht München<br />
              GF: Hüseyin Türker<br />
              <span className="text-[10px]">Estrichverlegung und Isolierarbeiten</span>
            </p>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p style={{fontSize: '7px'}} className="text-muted-foreground leading-relaxed">
            <strong>Rechtlicher Hinweis:</strong> Der jeweilige Vertragspartner wird im Angebot und Auftrag ausdrücklich benannt. 
            USt-ID: DE356852204
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
