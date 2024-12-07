import React from "react";
import { FaUsers, FaRocket, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Journey
          </h1>
          <p className="text-xl mb-6">
            Empowering businesses with innovative solutions that drive success.
          </p>
          <a
            href="#mission"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            Discover More
          </a>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-white shadow-xl rounded-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <FaRocket className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700">
                We strive to innovate and empower businesses with tools that
                increase efficiency and profitability.
              </p>
            </div>
            <div className="p-6 bg-white shadow-xl rounded-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <FaHandsHelping className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700">
                We aim to build lasting partnerships that foster growth and
                mutual success for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaUsers className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-700">
                We believe in working together to achieve greater results.
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaRocket className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Innovation
              </h3>
              <p className="text-gray-700">
                Pushing the boundaries of technology to solve complex problems.
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <FaHandsHelping className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Integrity
              </h3>
              <p className="text-gray-700">
                Honesty and transparency are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Michael Brown",
                role: "Lead Developer",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Sarah Davis",
                role: "Marketing Head",
                img: "https://via.placeholder.com/150",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-600"
                />
                <h3 className="text-xl font-semibold text-indigo-600">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg mb-8">
            Have a question? We're here to help you. Reach out to us for any
            inquiries!
          </p>
          <a
            href="mailto:support@company.com"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
