import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { CgClose } from "react-icons/cg";

export default function ApplyNowModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    ownerName: "",
    mobileNumber: "",
    email: "",
    pinCode: "",
    postOffice: "",
    district: "",
    state: "",
    country: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [postOffices, setPostOffices] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "pinCode" && value.length === 6) {
      fetchAddress(value);
    }
  };

  const fetchAddress = async (pinCode) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = response.data[0];
      if (data.Status === "Success") {
        const postOffices = data.PostOffice;
        setPostOffices(postOffices);
        const postOffice = postOffices[0];
        setFormData((prevData) => ({
          ...prevData,
          district: postOffice.District,
          state: postOffice.State,
          country: postOffice.Country,
          postOffice: postOffice.Name,
        }));
      } else {
        alert("Invalid Pincode. Please try again.");
        setPostOffices([]);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      alert("Failed to fetch address. Please try again.");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/apply",
        // "https://jio-tower-bakcned-2.onrender.com/apply",
        formData
      );
      console.log(response);
      setFormSubmitted(true); // Set formSubmitted to true
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an issue submitting the application.");
    }
  };

  const handleClose = () => {
    setFormSubmitted(false); // Reset form submission state on close
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog   as="div" className="relative  z-10"  onClose={handleClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full bg-shot  max-w-xl transform overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-200 p-8 shadow-xl">
                {!formSubmitted && (
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-indigo-900 text-center mb-4"
                  >
                    Apply Now | आवेदन करें
                    <CgClose
                      onClick={handleClose}
                      className="absolute top-2 right-2 text-2xl text-gray-500 cursor-pointer"
                    />
                  </Dialog.Title>
                )}

                {/* Show form if not submitted */}
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      {
                        name: "ownerName",
                        label: "Property Owner Name",
                        placeholder: "Enter your full name",
                      },
                      {
                        name: "mobileNumber",
                        label: "Mobile Number",
                        placeholder: "Enter your 10-digit number",
                      },
                      {
                        name: "email",
                        label: "Email ID",
                        placeholder: "Enter a valid email address",
                      },
                      {
                        name: "pinCode",
                        label: "Site Location Pin Code",
                        placeholder: "Enter the pin code",
                      },
                    ].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-indigo-800">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="mt-1 block py-4 px-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          required
                        />
                      </div>
                    ))}
                    {postOffices.length > 0 && (
                      <div>
                        <label className="block text-sm font-medium text-indigo-800">
                          Select Post Office
                        </label>
                        <select
                          name="postOffice"
                          value={formData.postOffice}
                          onChange={handleChange}
                          className="mt-1 block py-4 px-2 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          {postOffices.map((postOffice, index) => (
                            <option key={index} value={postOffice.Name}>
                              {postOffice.Name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    {["district", "state", "country"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-indigo-800">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type="text"
                          name={field}
                          value={formData[field]}
                          readOnly
                          className="mt-1 py-4 px-2 block w-full rounded-lg border-gray-300 shadow-sm bg-gray-100 sm:text-sm"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-indigo-800">
                        Complete Site Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter the full address, including landmarks"
                        className="mt-1 my-4 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 px-2 bg-gradient-to-r from-green-400 to-teal-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
                      disabled={loading}
                    >
                      {loading ? "Fetching Address..." : "Submit Application"}
                    </button>
                  </form>
                ) : (
                  // Show success message with "Call Now" button
                  <div className="text-center">
                    <p className="text-lg font-semibold text-indigo-900">
                      Your form has been submitted successfully!
                    </p>
                    <p className="mt-4 text-md text-indigo-700">
                      Contact us now for any inquiries!
                    </p>
                    <button
                      onClick={() => alert("Calling...")} // You can replace this with actual call functionality
                      className="mt-6 py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:opacity-90 transition"
                    >
                      Call Now
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
