import React from "react";

const ParallaxSection = ({ bgImage, heading, content }) => {
  return (
    <div
      className="h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ParallaxSection;
