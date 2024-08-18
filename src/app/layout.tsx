import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
import Footer from "@/components/Footer/Footer";

const fontSans = Rubik({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Philosophya",
  description: "Frases inspiradoras de grandes filósofos para reflexão diária.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressContentEditableWarning>
      <head/>

      <title>Philosophya</title>
      <meta
          name="description"
          content="Receba uma frase diriamente de um filósofo aleatório!"
        />

      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialised",
          fontSans.variable
        )}
      >
        <div className="flex flex-col justify-between bg-neutral-950 h-svh md:h-screen">
          <main className="flex flex-col flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
