import type { Metadata } from "next";
import { Quicksand, Geist_Mono } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Szabó Klíma - Klímaszerelés Budapest",
  description: "Megbízható klímaszerviz Budapesten és környékén. Gyors helyszínelés, precíz munka, garanciális szolgáltatás.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={quicksand.variable}>
      <body
        className={`${quicksand.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
