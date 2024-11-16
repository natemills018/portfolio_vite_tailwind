import React from 'react';

const Body = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-800">
      {children}
    </div>
  );
};

export default Body;