// app/layout.tsx
import type { Metadata } from "next";
import { Raleway, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "sonner";
import LayoutWrapper from "@/components/Layoutwrapper"; // NEW

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
          <Toaster />
          <LayoutWrapper>{children}</LayoutWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}