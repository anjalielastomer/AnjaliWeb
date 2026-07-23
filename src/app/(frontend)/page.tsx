"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedProjects from "@/components/FeaturedProject";
import BusinessSection from "@/components/BusinessSection";
import VideoSection from "@/components/VideoSection";
import Client from "@/components/Client";
import LatestInsights from "@/components/LatestInsights";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <main className="bg-white max-w-screen">
      {/* {loading ? (
        <LoadingScreen />
      ) : ( */}
      <>
        <Hero />
        <AboutUs />
        <FeaturedProducts />
        <BusinessSection />
        <FeaturedProjects />
        <Client />
        <LatestInsights />
        <VideoSection bgColor="bg-white" />
      </>
      {/* )} */}
    </main>
  );
};

export default App;
