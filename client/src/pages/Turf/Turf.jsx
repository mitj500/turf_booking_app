import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
function Turf() {
  const [turves, setTurves] = useState([]);
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

  return (
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
  );
}

export default Turf;
