import { useState } from "react";
import random from "../../assets/random.png";
import axios from "axios";

export default function SearchBar() {
  const [focusBox, setFocusBox] = useState(false);
  const [pincode, setPincode] = useState("");
  const [details, setDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const focusHandler = () => {
    setFocusBox(!focusBox);
  };

  const handleInputChange = (e) => {
    setPincode(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && pincode.length === 6) {
      try {
        // Fetch details based on pincode
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        const data = response.data[0];
        if (data.Status === "Success") {
          setDetails(data.PostOffice[0]); // Save fetched details
          setModalVisible(true); // Show modal
        } else {
          alert("Invalid Pincode. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching pincode details:", error);
        alert("Failed to fetch details. Please try again.");
      }
    }
  };

  return (
    <div         onBlur={focusHandler}
    className="relative z-40">
      <input
        type="text"
        placeholder="Enter your pincode"
        value={pincode}
        onFocus={focusHandler}
    
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
      />
      {focusBox && (
        <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
          <h2 className="uppercase text-gray-400 font-bold">Trending Topics</h2>
          <div className="my-4 flex items-center gap-2 flex-wrap">
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">
              Bio - Technology
            </p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Construction</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Drug discovery</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Agriculture</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Economy</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Environment</p>
          </div>
        </div>
      )}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px] text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Tower Installation Available!
            </h2>
            {details && (
              <p className="text-gray-700">
                Location: {details.Name}, {details.District}, {details.State},{" "}
                {details.Country}
              </p>
            )}
            <button
              onClick={() => setModalVisible(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
