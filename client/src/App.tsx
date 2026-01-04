import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import Ablauf from "@/pages/ablauf";
import FAQ from "@/pages/faq";
import Preise from "@/pages/preise";
import Blog from "@/pages/blog";
import BlogArticle from "@/pages/blog-article";
import Kontakt from "@/pages/kontakt";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";
import AGB from "@/pages/agb";
import UeberUns from "@/pages/ueber-uns";
import Angebot from "@/pages/angebot";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
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
  );
}

export default App;
