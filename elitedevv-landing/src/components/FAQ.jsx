import React, { useState } from "react";

export default function FAQ({ faqList }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqList.map(({ q, a }, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? "open" : ""}`}
        >
          <button
            className="faq-question"
            onClick={() => toggleIndex(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            {q}
            <span className="arrow">{openIndex === i ? "▲" : "▼"}</span>
          </button>
          {openIndex === i && (
            <div
              id={`faq-answer-${i}`}
              className="faq-answer"
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              {a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}