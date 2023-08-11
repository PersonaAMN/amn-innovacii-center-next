import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";

const Font = Roboto({ subsets: ["latin"], weight: "500" });

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
      <body
        className={`${Font.className} bg-gradient-to-b from-emerald-50 to-yellow-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
