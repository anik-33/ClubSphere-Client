import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is ClubSphere?',
    answer:
      'ClubSphere is a platform where students can discover, join, and manage clubs and events in one centralized place.',
  },
  {
    question: 'How can I join a club?',
    answer:
      'Create an account, explore clubs, and click the join button. Some clubs may require admin approval.',
  },
  {
    question: 'Is ClubSphere free to use?',
    answer:
      'Yes, ClubSphere is completely free for all students.',
  },
  {
    question: 'Can I create my own club?',
    answer:
      'Absolutely! Logged-in users can create and manage clubs from their dashboard.',
  },
  {
    question: 'How do I manage events?',
    answer:
      'Club admins can create, update, and manage events easily from the admin dashboard.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know about ClubSphere
          </p>

          {/* Accent line */}
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className={`font-medium text-lg ${
                      isOpen ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <FiChevronDown
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 text-blue-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
