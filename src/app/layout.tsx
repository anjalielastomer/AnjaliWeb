// app/layout.tsx
import type { Metadata } from "next";
import { Raleway, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "sonner";
import LayoutWrapper from "@/components/Layoutwrapper"; // NEW
import ClientOnly from "@/components/ClientOnly";
import Chatbot from "@/components/Chatbot";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["800", "500", "300"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anjali Elastomer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${raleway.variable} ${montserrat.variable} ${roboto.variable} flex flex-col min-h-screen overflow-x-hidden`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <Toaster
            toastOptions={{
              style: {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                fontSize: "18px",
                padding: "30px 40px",
                maxWidth: "90%",
                width: "fit-content",
                height: "fit-content",
                backgroundColor: "white",
                color: "#333",
                borderRadius: "16px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                textAlign: "center",
              },
            }}
            richColors
            closeButton
          />
          
          <LayoutWrapper>{children}</LayoutWrapper>
          
          {/* Add Chatbot */}
          <ClientOnly>
            <Chatbot />
          </ClientOnly>
        </QueryProvider>
      </body>
    </html>
  );
}