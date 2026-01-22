import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import Home from "@/pages/home";

const ServiceDetail = lazy(() => import("@/pages/service-detail"));
const Ablauf = lazy(() => import("@/pages/ablauf"));
const FAQ = lazy(() => import("@/pages/faq"));
const Preise = lazy(() => import("@/pages/preise"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogArticle = lazy(() => import("@/pages/blog-article"));
const Kontakt = lazy(() => import("@/pages/kontakt"));
const Impressum = lazy(() => import("@/pages/impressum"));
const Datenschutz = lazy(() => import("@/pages/datenschutz"));
const AGB = lazy(() => import("@/pages/agb"));
const UeberUns = lazy(() => import("@/pages/ueber-uns"));
const Angebot = lazy(() => import("@/pages/angebot"));
const Rechner = lazy(() => import("@/pages/rechner"));
const CookieEinstellungen = lazy(() => import("@/pages/cookie-einstellungen"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leistungen/:id" component={ServiceDetail} />
        <Route path="/ablauf" component={Ablauf} />
        <Route path="/faq" component={FAQ} />
        <Route path="/preise" component={Preise} />
        <Route path="/ratgeber" component={Blog} />
        <Route path="/ratgeber/:slug" component={BlogArticle} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route path="/agb" component={AGB} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/angebot" component={Angebot} />
        <Route path="/rechner" component={Rechner} />
        <Route path="/cookie-einstellungen" component={CookieEinstellungen} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="estrich-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <ScrollToTop />
            <Toaster />
            <Router />
            <CookieConsent />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
