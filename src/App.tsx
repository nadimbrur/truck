import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";

import Purchase from "./pages/Purchase";
import UsedCars from "./pages/UsedCars";



// ✅ NEW: layout
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

// ✅ Layout wrapper
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* ✅ Home with layout */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Index />
              </MainLayout>
            }
          />

          {/* ✅ Contact with layout */}
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />

          <Route
            path="/brands"
            element={
              <MainLayout>
                <Brands />
              </MainLayout>
            }
          />



          <Route
            path="/purchase"
            element={
              <MainLayout>
                <Purchase />
              </MainLayout>
            }
          />

          <Route
            path="/used-cars"
            element={
              <MainLayout>
                <UsedCars />
              </MainLayout>
            }
          />


          {/* ✅ fallback */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;