import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TruckBrands from "@/components/TruckBrands"; // ✅ NEW
import ServiceList from "@/components/ServiceList";
import FeaturedTrucks from "@/components/FeaturedTrucks"; // ✅ NEW (recommended)
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      <HeroSection />

      {/* 🔥 Trust building section */}
      {/* <TruckBrands /> */}

      {/* 🔧 Services */}
      <ServiceList />

      {/* 🚚 Main product section */}
      {/* <FeaturedTrucks /> */}

      {/* 🏢 About company */}
      {/* <AboutSection /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Index;