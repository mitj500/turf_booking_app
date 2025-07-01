import React, { useState } from "react";
import GalleryCard from "../../components/GalleryCard";
import FilterPanel from "../../components/FilterPanel";

const cardData = [
  {
    image: "https://picsum.photos/400/400",
    title: "Nature Vibes",
    description: "Peaceful forest scenery to relax your soul.",
    category: "Nature",
  },
  {
    image: "https://picsum.photos/400/400",
    title: "Tech World",
    description: "Dive into future-driven innovations.",
    category: "Technology",
  },
  {
    image: "https://picsum.photos/400/400",
    title: "Explore Space",
    description: "The infinite cosmos awaits your curiosity.",
    category: "Space",
  },
  {
    image: "https://picsum.photos/400/400",
    title: "Modern Design",
    description: "Sleek architecture from around the world.",
    category: "Architecture",
  },
];

const categories = ["All", "Nature", "Technology", "Space", "Architecture"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((card) => card.category === selectedCategory);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <FilterPanel
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <GalleryCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;