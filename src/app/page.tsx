"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProject";
import BusinessSection from "@/components/BusinessSection";
import VideoSection from "@/components/VideoSection";
import Client from "@/components/Client";
import LatestInsights from "@/components/LatestInsights";
import Link from "next/link";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => {
    return (
      <div className="fixed inset-0 bg-green-100 text-white z-50 flex flex-col justify-center items-center ">
        <h1 className="text-5xl md:text-7xl font-extrabold font-raleway tracking-widest ">
          <span className="text-[color:var(--textorange)]">Anjali</span>{" "}
          Elastomer
        </h1>
      
      </div>
    );
  };

  return (
    <main className="bg-bgcolour max-w-screen">
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
