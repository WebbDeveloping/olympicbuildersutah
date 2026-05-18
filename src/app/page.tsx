import Box from "@mui/material/Box";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyBar from "@/components/MobileStickyBar";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyUsSection />
        <ContactSection />
      </Box>
      <SiteFooter />
      <MobileStickyBar />
    </Box>
  );
}
