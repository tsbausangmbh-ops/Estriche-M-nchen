import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-sm border-t shadow-lg" data-testid="mobile-cta-bar">
      <div className="flex items-center gap-2 p-2">
        <Button
          className="flex-1"
          asChild
          data-testid="button-mobile-call"
        >
          <a href="tel:+4989444438872">
            <Phone className="mr-2 h-4 w-4" />
            Anrufen
          </a>
        </Button>
        <Link href="/angebot" className="flex-1">
          <Button
            variant="outline"
            className="w-full"
            data-testid="button-mobile-angebot"
          >
            <FileText className="mr-2 h-4 w-4" />
            Angebot
          </Button>
        </Link>
      </div>
    </div>
  );
}
