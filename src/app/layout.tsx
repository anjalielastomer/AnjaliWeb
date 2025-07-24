import type { Metadata } from "next";
import { Raleway, Montserrat,Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryProvider } from "@/providers/query-provider";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} ${roboto.variable} flex flex-col min-h-screen`}
      >
        <QueryProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}