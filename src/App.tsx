
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StrategyPage from "./pages/services/StrategyPage";
import TrainingsPage from "./pages/services/TrainingsPage";
import ClientsPage from "./pages/services/ClientsPage";
import KPIPage from "./pages/services/KPIPage";
import MachineLearningPage from "./pages/services/MachineLearningPage";
import ChatBotProvider from "./components/chatbot/ChatBotProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatBotProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/strategy" element={<StrategyPage />} />
            <Route path="/services/trainings" element={<TrainingsPage />} />
            <Route path="/services/clients" element={<ClientsPage />} />
            <Route path="/services/kpi" element={<KPIPage />} />
            <Route path="/services/machine-learning" element={<MachineLearningPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ChatBotProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
