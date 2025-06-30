import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProject";
import BusinessSection from "@/components/BusinessSection";

const App: React.FC = () => {
  return (
    <main className="bg-bgcolour max-w-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <BusinessSection />
      <FeaturedProjects />
      <Footer />
    </main>
  );
};

export default App;
