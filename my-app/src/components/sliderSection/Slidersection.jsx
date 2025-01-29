import React, { useEffect, useState } from 'react';

const Slidersection = () => {
  const [bgImage, setBgImage] = useState('/assets/slider.svg');

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 1024) {
        setBgImage('/assets/secfour.svg'); // Desktop background
      } else {
        setBgImage('/assets/slider.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);
  return (
   <div className='mt-5' style={{
    backgroundImage: `url('${bgImage}')`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }}>
    <div className='container mx-auto px-6 lg:px-10 xl:px-10 lg:py-12'>
    <div className="  flex justify-start items-center gap-4 pb-6 md:pb-14 ">
              <button className="py-2 text-center px-8  rounded-md text-white text-xs md:text-2xl lg:text-sm xl:text-lg" style={{backgroundColor:'#3F8361'}}>Jambite</button>
              <button className="text-greenlite py-2  text-center px-8 rounded-md text-xs md:text-2xl lg:text-sm xl:text-lg" style={{backgroundColor:'#F1F1F1'}}>Undergraduate</button>
            </div>
     <div className='flex flex-row items-start  '>
    
            
     <div className='flex-1 '>
    
            <p className='pb-4 md:pb-8  font-exo text-xl md:text-4xl lg:text-3xl xl:text-4xl text-start font-semibold' style={{color:'#3F8361'}}>Explore School worldwide</p>
            <p className=' text-sm md:text-2xl lg:text-sm xl:text-lg text-start text-gray-900 mt-2 lg:w-[60%] xl:w-[70%] leading-6 md:leading-10 lg:leading-6 xl:leading-7 font-nunito-sans font-light'>Discover universities and colleges across the globe! Get insights into their programs, admission requirements, and exclusive scholarships to kickstart your study-abroad journey.</p>
     </div>

     
     <div className='flex-1 flex justify-center '>
<img src="/assets/iphone16pro.svg" alt="phone-img"   className="w-full h-auto" />
<img src="/assets/iphone16.svg" alt="phone-img" className='hidden lg:block w-full h-auto' />
     </div>
    </div>
    </div>
   </div>
  )
}

export default Slidersection

