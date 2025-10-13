import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CyberNav from "@/components/CyberNav";
import MatrixRain from "@/components/MatrixRain";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EncryptEdge - Cybersecurity Community",
  description: "Join the ultimate cybersecurity community. Learn, compete, and connect with cyber warriors from around the grid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white`}
      >
        <MatrixRain />
        <CyberNav />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
