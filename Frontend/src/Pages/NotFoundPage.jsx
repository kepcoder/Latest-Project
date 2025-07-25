// NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
