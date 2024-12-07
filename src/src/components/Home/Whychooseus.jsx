import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Guaranteed Loan Approval",
      description:
        "श्री राम फाइनेंस आपके लोन को बिना किसी परेशानी के जल्दी अप्रूव करता है।",
      icon: "💰",
    },
    {
      title: "No Hidden Charges",
      description:
        "हमारी प्रक्रिया पूरी तरह से ट्रांसपेरेंट है। कोई छुपे हुए चार्ज नहीं।",
      icon: "✅",
    },
    {
      title: "Flexible EMI Options",
      description:
        "Choose EMI plans that suit your budget and make your repayments stress-free.",
      icon: "📊",
    },
    {
      title: "Trusted by Thousands",
      description:
        "हम पर देशभर के हजारों ग्राहकों का भरोसा है। Join us for a reliable partnership.",
      icon: "🤝",
    },
  ];

  return (
    <section id="shree-ram-finance" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-1">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose <span className="text-indigo-600">Shree Ram Finance</span>?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          आपकी वित्तीय जरूरतों के लिए भरोसेमंद साथी। Fast, secure, and hassle-free services.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{point.title}</h3>
              <p className="text-gray-600 text-center">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
