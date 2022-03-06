import { SectionHeading } from "@/components/molecules/shared/SectionHeading";
import { DownloadCard } from "@/components/molecules/download/DownloadCard";
import { IDownloadCard } from "@/interfaces/index";

export function Download(): JSX.Element {
  const downloads: IDownloadCard[] = [
    {
      alt: "chrome",
      src: "/imgs/logo-chrome.svg",
      m: "lg:mb-16",
      title: "Add to Chrome",
      subtitle: "Minimum version 62",
    },
    {
      alt: "firefox",
      src: "/imgs/logo-firefox.svg",
      m: "lg:my-8",
      title: "Add to Firefox",
      subtitle: "Minimum version 62",
    },
    {
      alt: "opera mini",
      src: "/imgs/logo-opera.svg",
      m: "lg:mt-16",
      title: "Add to Opera Mini",
      subtitle: "Minimum version 62",
    },
  ];

  return (
    <section className="py-20">
      <SectionHeading
        title="Download the extension"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize."
      />
      <div className="container grid max-w-screen-lg grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {downloads.map(
          (download: IDownloadCard, i: number): JSX.Element => (
            <DownloadCard key={i} {...download} />
          )
        )}
      </div>
    </section>
  );
}
