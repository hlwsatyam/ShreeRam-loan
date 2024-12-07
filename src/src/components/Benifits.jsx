import { FaRupeeSign, FaRegHandshake, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      title: "Quick Loan Approval ",
      description: "सिर्फ कुछ मिनटों में अपना लोन अप्रूव करवाएं और फाइनेंशियल जरूरतें पूरी करें।",
      icon: <FaClock />,
    },
    {
      title: "Flexible Repayment Options ",
      description:
        "आपकी सुविधा के अनुसार EMI चुनें और बिना किसी चिंता के लोन चुकाएं।",
      icon: <FaRupeeSign />,
    },
    {
      title: "Low Interest Rates",
      description:
        "शुरुआत करें केवल 10% ब्याज दरों से और अपने खर्चों को आसानी से मैनेज करें।",
      icon: <FaShieldAlt />,
    },
    {
      title: "Trusted by Millions",
      description:
        "हमारे आसान और सुरक्षित प्लेटफॉर्म पर भरोसा करें और तुरंत लोन प्राप्त करें।",
      icon: <FaRegHandshake />,
    },
  ];

  return (
    <div id="benefits" className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Benefits With Us
        </h1>
        <p className="text-lg text-gray-700 mb-12 italic">
          आपकी सभी वित्तीय जरूरतों के लिए आसान और सुरक्षित समाधान।
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-3 hover:bg-green-100"
            >
              <div className="text-green-600 text-5xl mb-4">{benefit.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h2>
              <p className="text-gray-600 italic">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
