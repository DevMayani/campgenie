import React, { useEffect, useState } from 'react';

const SectionOne = () => {
  const [bgImage, setBgImage] = useState('/assets/faq-bg.svg');

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 1024) {
        setBgImage('/assets/backone.svg'); // Desktop background
      } else {
        setBgImage('/assets/mobile.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);

  return (
    <div
      className="relative  "
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: 'center 100%', // Adjust this to reposition the star
        backgroundSize: 'cover',
    
        backgroundRepeat: 'no-repeat',
        
      }}
    >
     <div className='container mx-auto px-6 lg:px-10 xl:px-10 flex flex-col lg:flex-row py-4 lg:py-10 xl:py-20'>
       {/* Text Content */}
       <div className="flex-1 py-6">
        <p className="text-2xl md:text-4xl md:leading-snug lg:leading-tight xl:leading-snug lg:text-3xl xl:text-4xl text-start font-exo font-semibold">
          Welcome to <span className="text-lite">CampusGenie</span> <br className='block md:hidden lg:block'/> Your <span className="text-lite">Key</span> to{' '}
          <span className="text-lite">Academic</span> <br className='block md:hidden lg:block'/> Excellence
        </p>
        <p className="text-start text-xs md:text-2xl lg:text-xs xl:text-base lg:w-[80%] font-nunito-sans py-4 lg:py-6 leading-6 md:leading-10 lg:leading-loose xl:leading-7 font-normal text-gray-500">
          Unleash Academic success with CampusGenie: your all-in-one app designed to streamline your academic journey. From JAMB & WAEC
          past questions to securing the perfect hostel, and landing the best internships, Campus Genius is here to empower your
          academic success.
        </p>

        <div className="flex flex-row justify-start py-4">
          <div>
            <img src="/assets/app store.svg" className="w-[80%] md:w-[90%] lg:w-[80%] h-auto" alt="app store-img w-auto" />
          </div>
          <div>
            <img src="/assets/play store.svg" className="w-[80%] md:w-[90%] lg:w-[80%] h-auto" alt="play store-img" />
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 py-6 lg:py-0">
        <img src="/assets/Group.svg" alt="Group-img" />
      </div>
     </div>
    </div>
  );
};

export default SectionOne;
