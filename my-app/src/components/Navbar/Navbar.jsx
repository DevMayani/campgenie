import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  return (
    <nav className='border'>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-10 xl:px-10">
        <div>
         <a href="/">
         <img src="/assets/logo.svg" alt="logo-img" />
         </a>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li
            className={`cursor-pointer ${activeLink === 'home' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('home')}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'features' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('features')}
          >
            Features
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'about' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('about')}
          >
            About Us
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'blog' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('blog')}
          >
            Blog
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'faq' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('faq')}
          >
            FAQ
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'contact' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('contact')}
          >
            Contact Us
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col items-start gap-4 py-4 px-6 border drop-shadow-xl lg:hidden">
          <li
            className={`cursor-pointer ${activeLink === 'home' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('home')}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'about' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('about')}
          >
            About
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'services' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('services')}
          >
            Services
          </li>
          <li
            className={`cursor-pointer ${activeLink === 'learn' ? 'border-b-2 border-green-500 py-1' : 'hover:text-lite'}`}
            onClick={() => setActiveLink('learn')}
          >
            Learn More
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
