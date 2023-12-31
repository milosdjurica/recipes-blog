import type { Metadata } from "next";
import { Cormorant, Inter, Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import ScrollButton from "@/src/components/ScrollButton";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const metadata: Metadata = {
  title: "Recipes blog",
  description:
    "Find best Balkan recipes here. Healthy, good and delicious food.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} flex min-h-screen w-full flex-col justify-between`}
      >
        <Navbar />
        {children}
        <ScrollButton />
        <Footer />
      </body>
    </html>
  );
}
