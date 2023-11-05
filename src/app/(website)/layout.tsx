import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/src/providers/ThemeProvider";
import Navbar from "@/src/components/Navbar";
import ScrollButton from "@/src/components/ScrollButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  min-h-full w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <ScrollButton />
      </body>
    </html>
  );
}
