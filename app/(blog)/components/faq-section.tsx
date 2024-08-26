"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQ {
  question?: string | undefined;
  answer?: string | undefined;
}

type FAQsSectionProps = {
  faqs: FAQ[];
};

export const FAQsSection: React.FC<FAQsSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-8 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left py-4 px-6 bg-secondary-100 font-semibold"
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <FaMinus className="text-accent" />
                  ) : (
                    <FaPlus className="text-accent" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-4 px-6 bg-lightGray text-primary-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
