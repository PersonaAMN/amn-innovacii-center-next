"use client";

import Image from "next/image";
import { memo } from "react";
import { experts } from "@/components/catalog/expertsInfo";
import About from "@/components/about/about";
import CardsList from "@/components/catalog/expertCard";
import Index from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <About />
      <CardsList />
    </>
  );
}
