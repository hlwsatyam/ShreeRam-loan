import React from "react";
import { motion } from "framer-motion";

const eligibilityCriteria = [
  {
    title: "Age",
    description: "Applicants must be between 18 and 60 years of age.",
    icon: "🎂",
  },
  {
    title: "Income",
    description: "A minimum monthly income of 10,000 is required.",
    icon: "💰",
  },
  {
    title: "Credit Score",
    description: "A credit score of 500 or above is preferred for approval.",
    icon: "📊",
  },
  {
    title: "Employment",
    description: "Salaried ,student or self-employed individuals are eligible.",
    icon: "🏢",
  },
  {
    title: "Documentation",
    description:
      "Valid ID proof, address proof, and income proof are mandatory.",
    icon: "📁",
  },
  {
    title: "Loan Purpose",
    description:
      "Loan must be used for permissible purposes such as education, business, or personal needs.",
    icon: "📜",
  },
];

const EligibilityCriteria = () => {
  return (
    <div
      id="eligibility"
      className="min-h-screen bg-gradient-to-r from-teal-500 to-green-600 text-white py-12"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Loan Eligibility Criteria | ऋण पात्रता मानदंड
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibilityCriteria.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-center text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
