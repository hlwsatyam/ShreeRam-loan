import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin({isOpen, setIsOpen}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  // Check login state on mount
  useEffect(() => {
    setIsOpen(false);
    const isLogged = localStorage.getItem("isLoggedIn");
    if (isLogged === "true") {
      setLoggedIn(true);
      fetchData();
    }
  }, []);

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jio-tower-bakcned-2.onrender.com/data"); // Replace with your backend API
      setData(response.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  // Handle Login
  const handleLogin = () => {
    if (username === "1" && password === "1") {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      fetchData();
    } else {
      setError("Invalid username or password");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {!loggedIn ? (
        <div className="bg-gray-800 p-10 rounded-lg shadow-md w-80">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded transition-all"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="container mx-auto px-6 py-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Welcome, Admin</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 py-2 px-4 rounded transition-all"
            >
              Logout
            </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Fetched Data</h2>
  <div className="overflow-x-auto">
    <table className="table-auto overflow-scroll w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b-2">ID</th>
          <th className="px-4 py-2 border-b-2">Name</th>
          <th className="px-4 py-2 border-b-2">Email</th>
          <th className="px-4 py-2 border-b-2">Phone</th>
          <th className="px-4 py-2 border-b-2">Address</th>
          <th className="px-4 py-2 border-b-2">City</th>
          <th className="px-4 py-2 border-b-2">State</th>
          <th className="px-4 py-2 border-b-2">Country</th>
          <th className="px-4 py-2 border-b-2">post offc</th>
          {/* Add more fields here as per your data */}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item,i) => (
            <tr key={item.id} className="hover:bg-gray-700">
              <td className="px-4 py-2 border-b">{i+1}</td>
              <td className="px-4 py-2 border-b">{item.ownerName}</td>
              <td className="px-4 py-2 border-b">{item.email}</td>
              <td className="px-4 py-2 border-b">{item.mobileNumber}</td>
              <td className="px-4 py-2 border-b">{item.address}</td>
              <td className="px-4 py-2 border-b">{item.district}</td>
              <td className="px-4 py-2 border-b">{item.state}</td>
              <td className="px-4 py-2 border-b">{item.country}</td>
              <td className="px-4 py-2 border-b">{item.postOffice}</td>
              {/* Add more fields here if necessary */}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center px-4 py-2 border-b">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

        </div>
      )}
    </div>
  );
}
