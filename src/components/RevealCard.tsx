import React from 'react';

function MyCard() {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img 
        src="/images/md -Nate Mills Headshot.png"
        alt="Card Image" 
        className="object-cover w-full h-48" 
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">Card Title</h2>
        <p className="text-sm text-gray-600">
          This is a sample card description. 
          It can contain multiple lines of text.
        </p>
        <button 
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default MyCard;