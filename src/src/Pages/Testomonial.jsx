import React from "react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gradient-to-b from-[#f5f7fa] to-[#e2e8f0] min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full relative">
          <img
            src="https://t3.ftcdn.net/jpg/02/95/80/14/360_F_295801440_tUiLlhkVNlsKgrksBe2LttGmr0AqkG7U.jpg"
            alt="Happy Loan Customers"
            className="rounded-lg shadow-lg w-full lg:h-[500px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
            <span className="text-sm mt-4 text-gray-600">
               benefiting from our loan services.
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a202c] mb-6">
            हमारे ग्राहक क्या कहते हैं? 
            <span className="block text-[#2b6cb0] mt-2 text-2xl">What Our Clients Say?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            हमारे लोन सेवा ने हजारों ग्राहकों को न केवल वित्तीय मदद दी है, 
            बल्कि उनके जीवन को भी बेहतर बनाया है। पढ़ें, हमारे खुशहाल ग्राहकों के अनुभव।
          </p>

          {/* Testimonials */}
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                " मुझे आवश्यक वित्तीय सहायता दी। प्रक्रिया सरल और तेज़ थी, और अब मुझे हर महीने आराम से EMI चुकानी है।"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - रमेश गुप्ता, दिल्ली
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                "This made securing a personal loan so easy. Now, I can take care of my family’s needs and repay the loan with a flexible plan."
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - Anita Sharma, Jaipur
              </h4>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-700">
                "मैंने अपनी घर की मरम्मत के लिए लोन लिया था और अब मैं आसानी से EMI चुका रहा हूँ। इस लोन ने मेरी जिंदगी आसान बना दी है।"
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                - विजय वर्मा, मुंबई
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
