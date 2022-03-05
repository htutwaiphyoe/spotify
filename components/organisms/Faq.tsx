import { SectionHeading } from "@/components/molecules/shared/SectionHeading";
import { FaqAccordion } from "@/components/molecules/faq/FaqAccordion";
import { IFaqAccordion } from "@/interfaces/index";
import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";

export function Faq(): JSX.Element {
  const faqs: IFaqAccordion[] = [
    {
      summary: "What is a Bookmark?",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
    },
    {
      summary: "How can I request a new browser?",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
    },
    {
      summary: "Is there a mobile app?",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
    },
    {
      summary: "What about other Chromium browsers?",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
    },
  ];
  return (
    <section className="py-20 bg-bookmark-white" id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <div className="flex flex-col px-4 mx-auto mt-6 sm:w-3/4 lg:w-5/12 lg:px-0">
        {faqs.map((faq: IFaqAccordion, i) => (
          <FaqAccordion key={i} {...faq} />
        ))}
        <div className="flex justify-center mt-4">
          <Button text="Load More" classes={btnClasses.purple} type="button" />
        </div>
      </div>
    </section>
  );
}
