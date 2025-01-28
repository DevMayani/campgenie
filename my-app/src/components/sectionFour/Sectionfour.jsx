import React, { useState } from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCalendarDays, FaRegClock } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Sectionfour = () => {
  
  // Function to truncate the description to a maximum of 100 words
  function truncateDescription(description, maxWords) {
    if (description) {
      const words = description.split(' ');
      if (words.length > maxWords) {
        return `${words.slice(0, maxWords).join(' ')}...`;
      }
      return description;
    }
    return '';
  }

  const [details, setDetails] = useState([
    {
      id: 1,
      pic: '/assets/osustech.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 2,
      pic: '/assets/futa.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 3,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    }
  ]);

  // Toggle read more/less functionality
  const toggleDescription = (id) => {
    setDetails((prevDetails) =>
      prevDetails.map((item) =>
        item.id === id
          ? { ...item, showFullDesc: !item.showFullDesc }
          : item
      )
    );
  };

  return (
    <div className='' style={{ color: '#FAF9F7' }}>
      <div className='container mx-auto px-6 lg:px-10 xl:px-10 py-6 md:py-10'>
        <div className='flex items-center gap-2 pb-2 md:pb-4 lg:pb-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            width="50"
            height="50"
            fill="none"
            stroke="#549172"
            strokeWidth="4"
          >
            <line x1="0" y1="25" x2="170" y2="25" />
            <line x1="170" y1="25" x2="150" y2="10" />
            <line x1="170" y1="25" x2="150" y2="40" />
          </svg>

          <p className="font-exo text-lg md:text-3xl lg:text-xl xl:text-2xl" style={{ color: '#549172' }}>News Update</p>
        </div>

        <div className='flex justify-between items-start'>
          <div className='flex-2'>
            <p className='text-lg md:text-4xl md:leading-snug lg:leading-tight xl:leading-snug lg:text-3xl xl:text-4xl text-start font-exo font-semibold text-gray-900 tracking-wide'>
              Receive up-to-date <br className='hidden md:block lg:hidden' /> updates from <br className='hidden md:block' /> campuses nationwide.
            </p>
          </div>
          <div className='md:flex-1'>
            <button className="py-2 text-white text-sm md:text-2xl md:py-3 lg:text-sm lg:py-2 xl:text-base px-8 rounded-md" style={{ backgroundColor: '#549172' }}>View All</button>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 pt-8 pb-4'>
          {
            details.map(datum => (
              <div key={datum.id} className='flex flex-col gap-2  border rounded-xl' style={{ color: '#FFFFFF' }}>
                <img src={datum.pic} alt="school-img" className='rounded-t-xl' />

                <div className='p-5 flex flex-col gap-4 md:gap-6 lg:gap-4'>
                  <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-exo'>{datum.title}</p>

                  <div className='flex items-center justify-between gap-1  '>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1'>
                      <MdOutlineCalendarMonth  className="h-4 w-4 md:h-8 md:w-8 lg:h-5 lg:w-5 xl:h-6 xl:w-6" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.date}</p>
                    </div>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1 '>
                      <FaRegClock className="h-4 w-4 md:h-8 md:w-8 lg:h-5 lg:w-5 xl:h-6 xl:w-6" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.duration}</p>
                    </div>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1 '>
                      <GrView className="h-4 w-4 md:h-8 md:w-8 lg:h-5 lg:w-5 xl:h-6 xl:w-6" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.views}</p>
                    </div>
                  </div>
                  <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-nunito-sans'>
                    {datum.showFullDesc ? datum.desc : truncateDescription(datum.desc, 50)} <button
                    className='text-start text-sm md:text-2xl lg:text-sm text-lite font-semibold mt-2'
                    onClick={() => toggleDescription(datum.id)}
                  >
                    {datum.showFullDesc ? '[Read LESS]' : '[Read MORE]'}
                  </button>
                  </p>
                 
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Sectionfour;
