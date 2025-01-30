import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track active link
  const navigate = useNavigate();
const location = useLocation();


  return (
    <nav className="border relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10 xl:px-10">
        <div>
          <a href="/">
            <img src="/assets/logo.svg" alt="logo-img" />
          </a>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li
            className={`cursor-pointer ${
              activeLink === "home"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
  className={`cursor-pointer ${
    activeLink === "features"
      ? "border-b-2 border-green-500 py-1"
      : "hover:text-lite"
  }`}
  onClick={() => {
    setActiveLink("features");

    if (location.pathname !== "/") {
      // Redirect to home first
      navigate("/");

      // Wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Scroll directly if already on home page
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  <span>Features</span>
</li>

          <li
            className={`cursor-pointer ${
              activeLink === "about"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("about")}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "blog"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("blog")}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "faq"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("faq")}
          >
            FAQ
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "contact"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("contact")}
          >
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="cursor-pointer">
            <div className="px-8 bg-lite text-white flex justify-center items-center rounded-md">
              <button className="py-2 w-full text-center">Download</button>
            </div>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // Cancel (Close) Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:w-10 md:h-10 lg:w-6 lg:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:w-10 md:h-10 lg:w-6 lg:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 py-4 px-6 border drop-shadow-xl lg:hidden z-10">
          <li
            className={`cursor-pointer ${
              activeLink === "home"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
  className={`cursor-pointer ${
    activeLink === "features"
      ? "border-b-2 border-green-500 py-1"
      : "hover:text-lite"
  }`}
  onClick={() => {
    setActiveLink("features");
    
    if (location.pathname !== "/") {
      // Redirect to home first
      navigate("/");
      
      // Wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Direct scroll on the home page
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Features
</li>

          <li
            className={`cursor-pointer ${
              activeLink === "about"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("about")}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "blog"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("blog")}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "faq"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("faq")}
          >
            <Link to="">FAQ</Link>
          </li>
          <li
            className={`cursor-pointer ${
              activeLink === "contact"
                ? "border-b-2 border-green-500 py-1"
                : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("contact")}
          >
            <Link to="/contact"> Contact Us</Link>
          </li>

          <li
            className={`cursor-pointer ${
              activeLink === "learn" ? "border-none" : "hover:text-lite"
            }`}
            onClick={() => setActiveLink("learn")}
          >
            <div className="px-8 bg-lite text-white flex justify-center items-center rounded-md">
              <button className="py-2 w-full text-center">Download</button>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
