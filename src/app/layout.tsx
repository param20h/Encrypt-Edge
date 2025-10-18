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
  description: "Join LPU's premier cybersecurity community. Learn cutting-edge security practices, compete in CTF challenges, and connect with industry professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black min-h-screen text-white`}
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
