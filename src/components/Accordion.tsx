import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div data-orientation="vertical">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            data-state={isOpen ? 'open' : 'closed'}
            data-orientation="vertical"
            className="mb-3 rounded-md border bg-card px-5"
          >
            <h3 data-orientation="vertical" data-state={isOpen ? 'open' : 'closed'} className="flex">
              <button
                type="button"
                aria-expanded={isOpen}
                data-state={isOpen ? 'open' : 'closed'}
                data-orientation="vertical"
                className="flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all text-left hover:no-underline"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div
                data-state="open"
                id={`accordion-content-${index}`}
                role="region"
                data-orientation="vertical"
                className="overflow-hidden text-sm"
              >
                <div className="pb-4 pt-0 leading-relaxed text-muted-foreground">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
