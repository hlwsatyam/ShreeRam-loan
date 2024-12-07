import Container from "./Container";

export default function Footer({ isOpen, setIsOpen }) {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
      
        { name: "Benefits", href: "#benefits" },
        { name: "Application Process", href: "#application" },
        { name: "Why Choose Jio?", href: "#jio" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQs", href: "#faqs" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
  ];
  const footerSection2 = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Eligibility Criteria", href: "#eligibility" },
        { name: "Benefits", href: "#benefits" },
       
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-[#white] py-4 text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Dashboard Login */}
          <div className="flex flex-col items-start space-y-4">
            <img
              onClick={() => setIsOpen(!isOpen)}
              src={
                "https://media.licdn.com/dms/image/v2/D4E22AQGPm9Yn-om5Hw/feedshare-shrink_800/feedshare-shrink_800/0/1718646445687?e=2147483647&v=beta&t=E7-F_PlPZ8bI1Jj_HJlLDBYnWtfFjS3RbcsGZComa-s"
              }
              alt="Grant Canyon"
              className="w-44 cursor-pointer h-14 mb-6"
            />
            <button
              onClick={() => (window.location.href = "/admin")}
              type="button"
              className="bg-blue-600  hover:bg-blue-500 !text-white font-bold py-2 px-4 rounded transition-all"
            >
              Dashboard Login
            </button>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h1 className="font-bold capitalize text-lg pb-4">
                {section.title}
              </h1>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Footer Sections */}
          {footerSection2.map((section, index) => (
            <div key={index}>
              <h1 className="font-bold capitalize text-lg pb-4">
                {section.title}
              </h1>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Section */}
          <div>
            <h1 className="font-bold capitalize text-lg pb-4">Contact Us</h1>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-blue-400"></i>
                <span>+91-12345-67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>support@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span>1234, Business Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Jio. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
