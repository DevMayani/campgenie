import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
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
