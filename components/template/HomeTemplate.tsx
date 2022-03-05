import React from "react";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";

export function HomeTemplate(): JSX.Element {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
