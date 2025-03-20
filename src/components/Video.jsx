import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Video = ({ images, isOpen, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`video-container ${isOpen ? "with-sidebar" : ""}`}>
      {/* Sidebar */}
      <div className={`video-sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Image */}
          <div className="relative w-full">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-[300px] object-cover rounded-lg"
            />

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                className="bg-gray-800 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-800 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Marquee for Title */}
          <div className="w-full mt-2 overflow-hidden whitespace-nowrap">
            <p
              className="text-md font-bold inline-block animate-marquee"
              style={{ animationDuration: "5s" }}
            >
              {title[currentIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Animation CSS */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Video;