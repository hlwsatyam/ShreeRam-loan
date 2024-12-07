import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What types of loans are available?",
    answer:
      "We offer personal loans, home loans, and business loans, each with flexible repayment terms and competitive interest rates.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "The loan amount you can borrow depends on your eligibility, income, and credit score. You can borrow up to ₹10,00,000.",
  },
  {
    question: "What is the interest rate?",
    answer:
      "Interest rates vary based on the loan type and your credit score. They range from 8% to 15% annually.",
  },
  {
    question: "What documents are required to apply for a loan?",
    answer:
      "You will need valid identification, proof of address, income proof, and your bank details to apply for a loan.",
  },
  {
    question: "How long does it take to get loan approval?",
    answer:
      "Loan approval usually takes between 3 to 5 business days, depending on the verification process and your documentation.",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes, you can prepay your loan. However, some loans may have prepayment charges depending on the terms of your agreement.",
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div id="faqs" className=" bg-gradient-to-br from-purple-600 to-indigo-900 text-white">
      <div className="container mx-auto py-2 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 animate-pulse">
          Loan FAQs | लोन सामान्य प्रश्न
        </h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-all duration-200 ease-in-out"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <motion.span
                  className="text-xl font-bold transform"
                  animate={{
                    rotate: selected === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  ⌄
                </motion.span>
              </div>
              {selected === index && (
                <motion.div
                  className="px-4 pb-4"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
