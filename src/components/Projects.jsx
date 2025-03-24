import React from "react";
import { useState,useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // ✅ Make visibleImages dynamic based on screen size
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(2); // Small screens: 2 images at a time
      } else if (window.innerWidth < 1024) {
        setVisibleImages(3); // Medium screens: 3 images at a time
      } else {
        setVisibleImages(4); // Large screens: 4 images at a time
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  // ✅ Adjust nextSlide to ensure all images are displayed
  const nextSlide = () => {
    if (currentIndex < projectsData.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    } 
    // ✅ Ensure the last images are displayed correctly
    else if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(projectsData.length - visibleImages);
    }
  };

  // ✅ Adjust prevSlide to prevent extra space on the left
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex-center gap-2">
        <h1 className="text-3xl font-bold">Projects</h1>
        <span className="text-3xl underline">Completed</span>
      </div>
      <div className="relative w-full mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>

        {/* Image Slider */}
        <div className="overflow-hidden w-full flex justify-center">
          <div className="flex gap-3 transition-transform duration-300">
            {projectsData.slice(currentIndex, currentIndex + visibleImages).map((project, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2 text-center">{project.title}</h2>
                <p className="text-center text-gray-500">{project.location} - {project.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full shadow-md">
            <FaChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full shadow-md">
            <FaChevronRight size={24} />
          </button>
        </div>
    </div>
   </div>
  );
};
export default Projects;

// <div className="absolute top-1/2 left-30 transform -translate-y-1/2">
// <button
//   className="p-2 bg-gray-800 text-white rounded-full shadow-md"
//   onClick={prevSlide}
//   disabled={currentIndex === 0}
// >
//   <FaChevronLeft size={20} />
// </button>
// </div>

// <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
// <button
//   className="p-2 bg-gray-800 text-white rounded-full shadow-md"
//   onClick={nextSlide}
//   disabled={currentIndex >= projectsData.length - visibleImages}
// >
//   <FaChevronRight size={20} />
// </button>
// </div>