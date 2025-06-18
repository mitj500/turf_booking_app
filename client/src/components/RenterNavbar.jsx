import React from "react";
import Cookies from "js-cookie"; // Make sure to install js-cookie package
import logo from "../assets/logo.png"; // Adjust the path to your logo image

function RenterNavbar() {
  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    window.location.href = "/Signin"; // Redirect to sign-in page after logout
    alert("User logged out successfully");
  };
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <img className="flex" src="logo" alt="logo" />
      <div className="flex gap-4">
        <a href="/user/dashboard" className="hover:text-gray-400">
          Dashboard
        </a>
        <a href="/user/profile" className="hover:text-gray-400">
          Profile
        </a>
        <a href="/renter/turf/gallery" className="hover:text-gray-400">
          Turf
        </a>
           <a href="/renter/turf/create" className="hover:text-gray-400">
          Create Turf
        </a>
      </div>
      <div>
        <button
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default RenterNavbar;
