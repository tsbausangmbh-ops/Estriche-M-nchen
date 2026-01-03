import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import Ablauf from "@/pages/ablauf";
import FAQ from "@/pages/faq";
import Preise from "@/pages/preise";
import Blog from "@/pages/blog";
import BlogArticle from "@/pages/blog-article";
import Kontakt from "@/pages/kontakt";
import NotFound from "@/pages/not-found";

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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="estrich-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
