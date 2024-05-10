import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  const imageUrls = [
    {
      imageUrl: "https://source.unsplash.com/900x900/?student",
      caption: "Anantvedha Student Program",
    },
    {
      imageUrl: "https://source.unsplash.com/900x900/?edtech",
      caption: "Anantvedha EdTech Solutions",
    },
    {
      imageUrl: "https://source.unsplash.com/900x900/?ramen",
      caption: "Anantvedha Ramen Restaurant",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % imageUrls.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0 ? imageUrls.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide rounded position-relative"
      data-ride="false"
      width="90vw"
    >
      <div className="carousel-inner">
        {imageUrls.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              className="d-block w-100 img-fluid"
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: "90%",
                maxHeight: "420px",
                width: "auto",
                margin: "10px auto",
                borderRadius: "5px",
              }}
            />
            <div className="carousel-caption">
              <h3>{item.caption}</h3>
              <p>Explore more about Anantvedha</p>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev align-items-center justify-content-center"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
        onClick={handlePrev}
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next align-items-center justify-content-center"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
}
