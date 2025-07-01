import React from "react";

const GalleryCard = ({ image, title, description }) => {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;