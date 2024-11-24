import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    { src: "/src/assets/character.jpg", title: "Character" },
    { src: "/src/assets/citizenship.jpg", title: "Citizenship" },
    { src: "/src/assets/collaboration.jpg", title: "Collaboration" },
    { src: "/src/assets/creativity.jpg", title: "Creativity" },
    { src: "/src/assets/criticalthinking.jpg", title: "Critical Thinking" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].title}
        className="carousel-image"
      />
      <div className="carousel-title">{images[currentIndex].title}</div>
    </div>
  );
};

export default Carousel;
