import React, { useState } from 'react';

const FAQSection = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section section--faq">
      <div className="container">
        <header className="section__header">
          <h2>{t.faq.title}</h2>
        </header>

        <div className="accordion">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="accordion__item" key={index}>
                <button
                  className="accordion__button"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.q}</span>
                  <span className="accordion__icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`accordion__panel ${
                    isOpen ? "accordion__panel--open" : ""
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
