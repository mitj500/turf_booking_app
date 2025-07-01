import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Proplan from "../../components/Proplan";
import Filter from "../Filter/Filter"; // Assuming you have a Filter component for filtering options
import GalleryPage from "../GalleryPage/GalleryPage";
function Turf() {
  const [turves, setTurves] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const cookie = Cookies.get("token");
    axios
      .get("http://localhost:3000/turf/gallery", {
        headers: { Authorization: `Bearer ${cookie}` },
      })
      .then((response) => {
        setTurves(response.data.turfs);
      })
      .catch((error) => {
        console.error("Error fetching turf data:", error);
        alert(
          error.response?.data?.message ||
            "An error occurred while fetching turf data."
        );
      });
  }, []);
  
const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Filter/>
    <div className="flex gap-5">
      {turves.map((turf) => (
        <div className="bg-white p-4 rounded-lg text-black border-green-500 border-2">
          <h2>{turf.name}</h2>
          <p>{turf.description}</p>
          <p>Location: {turf.location}</p>
          <p>Price: {turf.price}</p>
        </div>
        
      ))}
      
    </div>
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded-lg mt-4 mb-4 hover:bg-blue-600 transition duration-300 ease-in-out  ">
      subscribe to Pro Plan
      {isVisible ? 'Hide' : 'Show'} Component
    </button>
     {isVisible && (
      <div className=" bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Pro Plan</h2>
          <Proplan />
          <button
            onClick={handleClick}
            className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    )}
    <div>
   <GalleryPage/>
    </div>
    </div>
  );
}

export default Turf;
