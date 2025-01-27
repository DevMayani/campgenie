import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Faq = () => {
  // State to track dropdown visibility
  const [dropdowns, setDropdowns] = useState({
    campusgenie: false,
    problem: false,
    signup: false,
    activate: false,
    features: false,
  });

  // Toggle function
  const toggleDropdown = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific dropdown
    }));
  };

  const [bgImage, setBgImage] = useState('/assets/faq-bg.svg');

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 1024) {
        setBgImage('/assets/faq-desktop.svg'); // Desktop background
      } else {
        setBgImage('/assets/faq-bg.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);


  return (
    <div
    className="py-4 lg:py-1 bg-greenlite text-white"
    style={{
      backgroundImage: `url('${bgImage}')`,
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    
    <div className="container mx-auto px-6 lg:px-10 xl:px-10 py-16 xl:py-28">
        <div className="pt-6 pb-4 flex justify-start">
          <p className="font-exo text-lg md:text-3xl lg:text-xl xl:text-2xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="">
          {/* Example Dropdown */}
          <div className="flex justify-between items-center text-start py-2">
            <p className="text-lg md:text-3xl lg:text-xl xl:text-2xl font-nunito-sans">
              What is Campus Genie?
            </p>
            <IoIosArrowDown
  onClick={() => toggleDropdown('campusgenie')}
  className={`icon ${dropdowns.campusgenie ? 'icon_active' : ''}`}
/>


          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              dropdowns.campusgenie ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {dropdowns.campusgenie && (
              <p className="flex justify-start items-center text-sm md:text-xl lg:text-lg xl:text-xl text-start py-4 font-nunito-sans tracking-wider font-light">
                Campus Genie is a mobile app designed to solve everyday problems and challenges faced by students on campus and Jambites.
              </p>
            )}
          </div>

          {/* Additional Dropdowns */}
          <div className="flex justify-between items-center text-start py-2">
            <p className='text-lg md:text-3xl lg:text-xl xl:text-2xl font-nunito-sans'>What problem does Campus Genie solve?</p>
            <IoIosArrowDown
  onClick={() => toggleDropdown('problem')}
  className={`icon ${dropdowns.problem ? 'icon_active' : ''}`}
/>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              dropdowns.problem ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {dropdowns.problem && (
              <p className="flex justify-start items-center text-sm md:text-xl lg:text-lg xl:text-xl text-start py-4 font-nunito-sans tracking-wider font-light">
                Campus Genie is a mobile app designed to solve everyday problems and challenges faced by students on campus and Jambites.
              </p>
            )}
          </div>

          <div className="flex justify-between items-center text-start py-2">
            <p className='text-lg md:text-3xl lg:text-xl xl:text-2xl font-nunito-sans'>How do I sign up for Campus Genie?</p>
            <IoIosArrowDown
  onClick={() => toggleDropdown('signup')}
  className={`icon ${dropdowns.signup ? 'icon_active' : ''}`}
/>

          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              dropdowns.signup ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {dropdowns.signup && (
              <p className="flex justify-start items-center text-sm md:text-xl lg:text-lg xl:text-xl text-start py-4 font-nunito-sans tracking-wider font-light">
                Campus Genie is a mobile app designed to solve everyday problems and challenges faced by students on campus and Jambites.
              </p>
            )}
          </div>


          {/* Add more dropdowns as needed */}
          <div className="flex justify-between items-center text-start py-2">
          <p className='text-lg md:text-3xl lg:text-xl xl:text-2xl font-nunito-sans'>How long does it take to activate my Campus Genie account?</p>
          <IoIosArrowDown
  onClick={() => toggleDropdown('activate')}
  className={`icon ${dropdowns.activate ? 'icon_active' : ''}`}
/>

          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              dropdowns.activate? 'max-h-40' : 'max-h-0'
            }`}
          >
            {dropdowns.activate && (
              <p className="flex justify-start items-center text-sm md:text-xl lg:text-lg xl:text-xl text-start py-4 font-nunito-sans tracking-wider font-light">
                Campus Genie is a mobile app designed to solve everyday problems and challenges faced by students on campus and Jambites.
              </p>
            )}
          </div>

             {/* Add more dropdowns as needed */}
             <div className="flex justify-between items-center text-start py-2" >
          <p className='text-lg md:text-3xl lg:text-xl xl:text-2xl font-nunito-sans'>What are the unique features of campus genie?</p>
          <IoIosArrowDown
  onClick={() => toggleDropdown('features')}
  className={`icon ${dropdowns.features ? 'icon_active' : ''}`}
/>

          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              dropdowns.features ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {dropdowns.features && (
              <p className="flex justify-start items-center text-sm md:text-xl lg:text-lg xl:text-xl text-start py-4 font-nunito-sans tracking-wider font-light">
                Campus Genie is a mobile app designed to solve everyday problems and challenges faced by students on campus and Jambites.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq;
