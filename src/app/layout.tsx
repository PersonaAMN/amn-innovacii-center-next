import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Footer from "@/components/footer/Footer";

const ibmFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Учебный центр",
  description: "Обучение",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmFont.className}>
        <Navbar title="test" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
