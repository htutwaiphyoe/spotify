import React from "react";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";
import { Download } from "@/components/organisms/Download";

export function HomeTemplate(): JSX.Element {
  return (
    <>
      <Hero />
      <Features />
      <Download />
    </>
  );
}
