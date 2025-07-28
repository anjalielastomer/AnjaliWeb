
"use client";
import React from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProject";
import BusinessSection from "@/components/BusinessSection";
import VideoSection from "@/components/VideoSection";
import Client from "@/components/Client";
import LatestInsights from "@/components/LatestInsights";

const App: React.FC = () => {
  return (
    <main className="bg-bgcolour max-w-screen">
      <Hero />
      <AboutUs />
      <FeaturedProducts/>
      <BusinessSection />
      <FeaturedProjects />
      <Client />
      <LatestInsights />
      <VideoSection bgColor="bg-white" />
    </main>
  );
};

export default App;