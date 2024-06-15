import React, { useState } from "react";
import "./index.css";
import  faqArray from "./faqArray";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const faqs = faqArray;

  return (
    <section className="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
      <div className="cd-faq__items">
        <ul className="cd-faq__group">
          <h2 className="cd-faq__title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <li className="cd-faq__item" key={index}>
              <a className={`cd-faq__trigger ${openIndex === index ? "open" : ""}`} href="#0" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
              </a>
              <div className={`cd-faq__content ${openIndex === index ? "open" : ""}`}>
                <div className="text-component">
                  <p>{faq.answer}</p>
                </div>
              </div> {/* cd-faq__content */}
            </li>
          ))}
        </ul> {/* cd-faq__group */}
      </div> {/* cd-faq__items */}

      <a href="#0" className="cd-faq__close-panel text-replace">Close</a>
      <div className="cd-faq__overlay" aria-hidden="true"></div>
    </section> /* cd-faq */
  );
};

export default FAQSection;
