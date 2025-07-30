// components/LayoutWrapper.tsx
'use client';

import { useState } from "react";
import LogoTransition from "@/components/LogoTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <LogoTransition onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <>
          <Navbar />
          <main className="flex-grow">
            <AOSInit />
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
