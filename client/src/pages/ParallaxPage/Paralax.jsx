import React from "react";

import ParallaxSection from "../../components/ParallaxSection";

const Paralax = () => {
  return (  
    <div className="text-black">
      <ParallaxSection
        bgImage="picsu"
        heading="Welcome to the Future"
        content="Explore innovative solutions with immersive experiences."
      />
      <div className="p-10 bg-zinc-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Whether it's web apps, AI integration, or VR experiences — we create with impact. Scroll down to continue.
        </p>
      </div>
      <ParallaxSection
        bgImage="https://picsum.photos/400/400"
        heading="Powered by AI"
        content="We harness machine learning and data science to build smarter apps."
      />
      <div className="p-10 bg-zinc-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We envision a world where technology adapts to human needs and simplifies life through smart design.
        </p>
      </div>
      <ParallaxSection
        bgImage="https://picsum.photos/400/400"
        heading="Join Us"
        content="Be part of something amazing. Let's build the future together."
      />
    </div>
  );
};

export default  Paralax;
