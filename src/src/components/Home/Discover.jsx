import React from "react";
import { FaRupeeSign, FaHandshake, FaClock, FaShieldAlt } from "react-icons/fa";

function Discover() {
  return (
    <div>
      {/* Achievements Section */}
      <section className="py-4 bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50,000+", label: "खुश ग्राहक" },
              { value: "₹500 Cr+", label: "Loans Disbursed" },
              { value: "20 Years", label: "Experience " },
              { value: "99.9%", label: "Approval Rate" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-green-800 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition">
                <h3 className="text-4xl font-bold text-yellow-300">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            हमारी सेवाएं (Our Services)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Instant Loan Approval (तुरंत लोन)",
                description:
                  "सिर्फ 5 मिनट में लोन अप्रूवल पाएं और अपनी वित्तीय जरूरतें पूरी करें।",
                benefits: [
                  "Quick Processing",
                  "Minimum Documentation",
                  "Fast Disbursement",
                ],
                icon: <FaClock className="text-green-500 text-3xl" />,
              },
              {
                name: "Flexible EMI Options (लचीली EMI)",
                description:
                  "अपने बजट के अनुसार EMI चुनें और बिना किसी चिंता के लोन चुकाएं।",
                benefits: [
                  "Customizable Plans",
                  "Low Interest Rates",
                  "Easy Payment Methods",
                ],
                icon: <FaRupeeSign className="text-green-500 text-3xl" />,
              },
              {
                name: "Secure and Trusted (सुरक्षित और भरोसेमंद)",
                description:
                  "हमारे प्लेटफॉर्म पर सुरक्षित और आसान प्रक्रिया का अनुभव करें।",
                benefits: [
                  "Data Privacy",
                  "Trusted by Millions",
                  "24/7 Support",
                ],
                icon: <FaShieldAlt className="text-green-500 text-3xl" />,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-2 transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-lg text-gray-700 mb-4">{service.description}</p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  {service.benefits.map((benefit, j) => (
                    <li key={j}>✔ {benefit}</li>
                  ))}
                </ul>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                  Apply Now (अभी आवेदन करें)
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
