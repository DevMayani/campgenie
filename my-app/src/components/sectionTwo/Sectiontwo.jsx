import React, { useEffect, useState } from 'react';
import bookSvg from '../../images/book.png';
import house from '../../images/house.jpg';
import suitcase from '../../images/case.png';
import desktop from '../../images/desktop.png';
import newspaper from '../../images/newspaper.png';
import ai from '../../images/ai.png';


const Sectiontwo = () => {
  const [bgImage, setBgImage] = useState('/assets/faq-bg.svg');
  const [details, setDetails] = useState([
    {
      id: 1,
      pic: bookSvg,
      title: 'JAMB & WAEC Past Questions',
      desc: "Access a comprehensive library of past JAMB and WAEC questions. Prepare effectively with well-organized questions by year and subject, ensuring you’re ready for success.",
    },
    {
      id: 2,
      pic: house,
      title: 'Hostel Booking',
      desc: "Find great internship opportunities to gain hands-on experience while studying. Expand your skills and network in your field of interest.",
    },
    {
      id: 3,
      pic: suitcase,
      title: 'Discover Internship ',
      desc: "Stay updated with the latest news, events, and announcements on campus. Get the information you need, all in one place.",
    },
    {
      id: 4,
      pic: desktop,
      title: 'JAMB CBT Simulator',
      desc: "Book a hostel room directly through the app and ensure you get a comfortable place to stay during your academic journey.",
    },
    {
      id: 5,
      pic: newspaper,
      title: 'News Feed',
      desc: "Practice for JAMB exams with the Computer-Based Test (CBT) simulator. Get familiar with the format and question types before the real exam.",
    },
    {
      id: 6,
      pic: ai,
      title: 'AI Genie Chatbot',
      desc: "Get personalized assistance and answers to all your questions with the AI-powered Genie chatbot, available 24/7.",
    },
  ]);

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 1024) {
        setBgImage('/assets/sectwo-desktop.svg'); // Desktop background
      } else {
        setBgImage('/assets/sectwo-mobile.svg'); // Mobile background
      }
    };

    updateBgImage(); // Set the initial image
    window.addEventListener('resize', updateBgImage); // Update on resize

    return () => window.removeEventListener('resize', updateBgImage); // Cleanup
  }, []);

  return (
    <div  className='py-10'  style={{
      backgroundImage: `url('${bgImage}')`,
      backgroundPosition: 'center', // Adjust this to reposition the star
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
  <div
      className=" container mx-auto px-2 md:px-6 lg:px-10 xl:px-10"
    
    >
      <p className="font-exo text-xl md:text-4xl lg:text-xl xl:text-2xl text-lite font-semibold">
        Key Features
      </p>
      <p className="text-sm md:text-2xl lg:text-base xl:text-lg text-center font-nunito-sans py-4 lg:py-6 leading-6 md:leading-10 lg:leading-loose xl:leading-7 text-gray-700">
        From JAMB prep to university life, Campus <br className="block md:hidden" /> Genie is your ultimate
        companion, helping <br className="block md:hidden lg:block" /> you achieve academic success and campus <br className="block lg:hidden" /> convenience
      </p>

      <div className="grid lg:grid-cols-2 gap-x-32">
  {details.map((datum, index) => (
    <div
      key={datum.id}
      className={`flex flex-col items-center m-4 p-6 w-auto ${
        index === 2 ? 'lg:translate-x-[-25%]' : '' // Shift 3rd item left on desktop
      } ${
        index === 3 ? 'lg:translate-x-[25%]' : '' // Shift 4th item right on desktop
      }`}
    >
      <img
        src={datum.pic}
        alt={datum.title}
        className="w-10 h-10 mb-4 object-cover"
      />
      <p className="font-semibold text-xl md:text-3xl lg:text-xl text-center font-exo text-gray-900">
        {datum.title}
      </p>
      <p className="text-sm md:text-2xl lg:text-sm text-center text-gray-600 mt-2 lg:w-[100%] xl:w-[90%] leading-6 md:leading-10 lg:leading-loose xl:leading-7 font-nunito-sans">
        {datum.desc}
      </p>
    </div>
  ))}
</div>
    </div>
    </div>
  
  );
};

export default Sectiontwo;
