import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Get the current image, title, and description from the array
  const { imageUrl, title, description } = images[currentIndex];

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 rounded-lg shadow-lg h-96">
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="object-cover w-full h-full"
      />

      {/* Overlay with title and description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>

      {/* Previous and Next Buttons */}
      <button 
        onClick={prevImage} 
        className="absolute p-2 font-bold text-black transform -translate-y-1/2 bg-white rounded-full top-1/2 left-4 bg-opacity-30 hover:bg-opacity-50"
      >
        &#10094;
      </button>

      <button 
        onClick={nextImage} 
        className="absolute p-2 font-bold text-black transform -translate-y-1/2 bg-white rounded-full top-1/2 right-4 bg-opacity-30 hover:bg-opacity-50"
      >
        &#10095;
      </button>
    </div>
  );
}

export default ImageGallery;

