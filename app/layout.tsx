import type { Metadata } from "next";
// TS can't find type declarations for css imports in this repo; ignore here
// @ts-ignore
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import GoogleTranslate from "./components/GoogleTranslate";

export const metadata: Metadata = {
  title: "Koky Hurghada Trips",
  description: "Book your best trips and tours in Hurghada.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden flex flex-col">
        <Navbar />

        {/* Language dropdown UI */}
        <div className="fixed top-6 right-6 z-[9999]">
          <GoogleTranslate />
        </div>

        <WhatsAppButton />
        <ScrollToTop />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}