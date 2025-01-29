import React, { useEffect, useState } from 'react';

const Sectionthree = () => {
  const [bgImage, setBgImage] = useState('/assets/secfourmobile.svg');

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 768) {
        setBgImage('/assets/secfourdesktop.svg'); // Desktop background
      } else {
        setBgImage('/assets/secfourmobile.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);
  return (
   
   <div  style={{
    backgroundImage: `url('${bgImage}')`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>
      <div className=' container mx-auto px-6 py-6 md:p-16 xl:p-28'>
     <img src="/assets/campess.svg" alt="campus-essential-img"    className="w-full h-auto hidden md:block "    />
     <img src="/assets/camp.svg" alt="campus-essential-img"    className="w-full h-auto block md:hidden"    />
    </div>
   </div>
  
  )
}

export default Sectionthree
