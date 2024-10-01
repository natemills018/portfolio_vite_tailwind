import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900">
      {/* Profile Picture */}
      <div className="flex items-center justify-center w-24 h-24 mb-6 bg-yellow-500 rounded-full">
        <img 
          src="your-image-url" 
          alt="Profile" 
          className="w-full h-full rounded-full"
        />
      </div>

      {/* Name and Title */}
      <h1 className="mb-2 text-3xl font-bold text-yellow-200">Nate Mills</h1>
      <p className="text-gray-400">Fullstack Web & App Developer</p>

      {/* Button */}
      <button className="flex items-center px-4 py-2 mt-6 space-x-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-500">
        {/* <span>&#8594;</span> Arrow Icon */}
        <span>Log In</span>
      </button>
    </div>
  );
};

export default ProfileCard;
