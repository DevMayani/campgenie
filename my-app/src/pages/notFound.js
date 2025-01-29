import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  const [bgImage, setBgImage] = useState('/assets/errorimg.svg');

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 768) {
        setBgImage('/assets/errorimg.svg'); // Desktop background
      } else {
        setBgImage('/assets/errorimg.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);
  return (

    <div className="flex flex-col items-center justify-center h-screen text-center" style={{
      backgroundImage: `url('${bgImage}')`,
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;