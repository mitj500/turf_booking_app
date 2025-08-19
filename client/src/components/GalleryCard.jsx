import React from "react";
import turf from "../assets/turf.png";

const GalleryCard = ({ image, title, description }) => {
  return (
    <div className="bg-zinc-800 h-100 w-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img  src={turf} alt={title} className="flex flex-row w-[300px] h-[100px] border-4 border-fuchsia-200 items-center m-4 ml-10"  />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2 text-center "> the sign of good turf </h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;