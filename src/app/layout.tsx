import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"

const fontSans = Inter({ 
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
        {children}
      </body>
    </html>
  );
}
