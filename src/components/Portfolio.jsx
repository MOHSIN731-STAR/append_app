import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "./../assets/images/All/masonry-portfolio-1 (1).jpg";
import image2 from "./../assets/images/All/masonry-portfolio-5 (1).jpg";
import image3 from "./../assets/images/All/masonry-portfolio-3 (1).jpg";
import image4 from "./../assets/images/All/masonry-portfolio-4 (1).jpg";
import image5 from "./../assets/images/All/masonry-portfolio-5 (1).jpg";
import image6 from "./../assets/images/All/masonry-portfolio-6 (1).jpg";
import image7 from "./../assets/images/All/masonry-portfolio-7.jpg";
import image8 from "./../assets/images/All/masonry-portfolio-8.jpg";
import image9 from "./../assets/images/All/masonry-portfolio-9.jpg";
import image23 from "./../assets/images/All/masonry-portfolio-2 (1).jpg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <div className="flex gap-3 justify-center items-center mb-4">
          <div className="border-t-2 border-red-700 w-12 sm:w-16 mt-2"></div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Portfolio
          </h1>
          <div className="border-t-2 border-red-700 w-12 sm:w-16 mt-2"></div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
        {["all", "app", "card", "web"].map((tab) => (
          <button
            key={tab}
            className={`font-semibold py-1 px-4 sm:px-6 rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-red-600 text-white"
                : "hover:bg-red-600 hover:text-white"
            }  data-aos="fade-up"`}
            onClick={() => setActiveTab(tab)}
            aria-current={activeTab === tab ? "page" : undefined}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      {activeTab === "all" && (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4">
          {/* First Column */}
          <div className="w-full lg:w-1/3">
            <div data-aos="zoom-in">
              <img
                src={image1}
                alt="Portfolio item 1"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="zoom-in-up" className="mt-4 sm:mt-6">
              <img
                src={image6}
                alt="Portfolio item 6"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Second Column */}
          <div className="w-full lg:w-1/3">
            <div data-aos="zoom-in-left">
              <img
                src={image23}
                alt="Portfolio item 2"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-4 sm:mb-6"
              />
            </div>
            <div data-aos="zoom-in-right">
              <img
                src={image2}
                alt="Portfolio item 5"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="zoom-out" className="mt-4 sm:mt-6">
              <img
                src={image9}
                alt="Portfolio item 9"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Third Column */}
          <div className="w-full lg:w-1/3">
            <div data-aos="zoom-out-right">
              <img
                src={image3}
                alt="Portfolio item 3"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="zoom-out-left" className="mt-4 sm:mt-6">
              <img
                src={image4}
                alt="Portfolio item 4"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="mt-4 sm:mt-6"
            >
              <img
                src={image7}
                alt="Portfolio item 7"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div data-aos="zoom-out-right" className="mt-4 sm:mt-6">
              <img
                src={image8}
                alt="Portfolio item 8"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Other Tabs (App, Card, Web) */}
      {activeTab !== "all" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeTab === "app" && (
            <>
              {[
                { src: image1, aos: "zoom-in", alt: "Portfolio item 1" },
                { src: image4, aos: "zoom-out-left", alt: "Portfolio item 4" },
                {
                  src: image7,
                  aos: "fade-down",
                  duration: 1500,
                  alt: "Portfolio item 7",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos={item.aos}
                  data-aos-duration={item.duration || 1000}
                  data-aos-easing={
                    item.aos === "fade-down" ? "linear" : undefined
                  }
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </>
          )}

          {activeTab === "card" && (
            <>
              {[
                { src: image23, aos: "zoom-in-left", alt: "Portfolio item 2" },
                { src: image2, aos: "zoom-in-right", alt: "Portfolio item 5" },
                {
                  src: image7,
                  aos: "fade-down",
                  duration: 1500,
                  alt: "Portfolio item 7",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos={item.aos}
                  data-aos-duration={item.duration || 1000}
                  data-aos-easing={
                    item.aos === "fade-down" ? "linear" : undefined
                  }
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </>
          )}

          {activeTab === "web" && (
            <>
              {[
                { src: image3, aos: "zoom-out-right", alt: "Portfolio item 3" },
                { src: image6, aos: "zoom-in-up", alt: "Portfolio item 6" },
                { src: image9, aos: "zoom-out", alt: "Portfolio item 9" },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos={item.aos}
                  data-aos-duration={item.duration || 1000}
                  data-aos-easing={
                    item.aos === "fade-down" ? "linear" : undefined
                  }
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
