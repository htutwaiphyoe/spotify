import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}
export interface ISectionHeading {
  title: string;
  description: string;
}

export interface IFeatureCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: string;
  mt: string;
  direction: string;
}

export interface IDownloadCard {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
  m: string;
}
