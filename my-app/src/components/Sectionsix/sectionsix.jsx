import React from 'react';

const Sectionsix = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 md:py-12 lg:py-10">
      <div className="flex-1 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/sectionsix-bg.svg')" }}
        ></div>
        
        <img
          src="/assets/sectionsix-img.svg"
          alt="foreground-img"
          className="relative z-10 mx-auto p-4 md:p-2 ml-4 md:ml-36 lg:ml-14 xl:ml-20"
        />
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-6 lg:px-10 xl:px-10  flex-1 flex flex-col justify-center ">
       <p className='text-2xl md:text-4xl md:leading-snug lg:leading-tight xl:leading-snug lg:text-3xl xl:text-4xl text-start font-exo font-bold'>Download Our <br /> Mobile App</p>
       <p className='text-start text-base md:text-2xl lg:text-base xl:text-xl lg:w-[80%] font-nunito-sans py-4 lg:py-6 leading-normal md:leading-10 lg:leading-normal xl:leading-7 tracking-wider text-gray-700'>Streamline your campus experience <br className=' block md:hidden' /> with our <br className='hidden lg:block'/> versatile app – the one- <br className=' block md:hidden' />stop solution for <br className='hidden lg:block' /> academic success.</p>

       <div className='flex flex-row justify-start  py-0 '>
          <div >
            <img src="/assets/app store.svg" className='w-[80%] md:w-[90%] lg:w-[80%] h-auto ' alt="app store-img w-auto" />
          </div>
          <div >
            <img src="/assets/play store.svg" className='w-[80%] md:w-[90%] lg:w-[80%] h-auto ' alt="play store-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionsix;
