import React, { useState,useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCalendarDays, FaRegClock } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from 'react-router-dom';


const Blogsection = ({ blogs }) => {
  
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
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
    },
    {
      id: 4,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 5,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 6,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 7,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 8,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
    {
      id: 9,
      pic: '/assets/lasu.svg',
      date: 'March 15, 2024',
      duration: '5 min read',
      views: '1.234 views',
      title: 'Olusegun Agagu University Okitipupa, Ondo State (OAUSTECH)',
      desc: 'We are thrilled to announce that the admission process is now open! Seize the opportunity to embark on your academic journey. Follow the outlined steps on our website to ensure a smooth application process. Don’t miss your chance to be part of this exciting opportunity and start your academic journey today. The application window is open until further notice, and we encourage all prospective students to apply early to ensure a smooth process.'
    },
  ]);

  return (
    <div className='container mx-auto px-6 lg:px-10 xl:px-10 pb-10 md:pb-20'>
       <div className='px-5 py-10 md:py-28 md:px-20 lg:p-20'>
  <div className='flex justify-center items-center '>
    <p className='font-exo text-base md:text-2xl lg:text-lg xl:text-xl  leading-6 md:leading-loose lg:leading-10 xl:leading-loose text-center font-bold' style={{ color: '#549172' }}>OUR BLOGS <span className='text-2xl md:text-5xl lg:text-3xl xl:text-4xl font-semibold text-black' ><br />Find all school updates from here</span> </p>
   </div>
  <div className='flex justify-center items-center'>
  <p className=' w-[90%] lg:w-[55%] xl:w-[55%] text-xs md:text-xl lg:text-xs xl:text-base text-center font-nunito-sans py-4 lg:py-6 leading-loose md:leading-10 lg:leading-6 xl:leading-6 text-gray-700'>
  Our blogs are thoughtfully crafted by experienced writers and researchers to bring you the most reliable and engaging content. Explore articles that keep you informed and inspired.
    </p>
  </div>

  </div>
  <div className='flex  items-center justify-between border px-2 py-1 md:px-4 md:py-2 w-full rounded-3xl'>
          <input 
          className='font-light font-exo text-xs md:text-lg lg:text-sm xl:text-base '
          placeholder='SEARCH ARTICLES...'/>
          <div className='h-8 w-8 md:w-12 md:h-12 lg:w-10 lg:h-10 flex justify-center items-center rounded-full' style={{ backgroundColor: '#549172' }}>
          <MdOutlineSearch className='text-white h-5 w-5 md:h-8 md:w-8 lg:h-6 lg:w-6'/>
          </div>
        </div>
        <div className="pt-4 md:py-10 relative">
      <div className="flex items-center justify-between">
        <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">TAGS</p>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="text-gray-500 hover:text-black">
            <FaChevronLeft size={20} style={{ color: '#549172' }} />
          </button>
          <button onClick={scrollRight} className="text-gray-500 hover:text-black">
            <FaChevronRight size={20} style={{ color: '#549172' }}/>
          </button>
        </div>
      </div>

      <div className="overflow-hidden relative mt-4">
        <div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none", // Hides scrollbar for Firefox
            msOverflowStyle: "none", // Hides scrollbar for Internet Explorer
          }}
        >
          {[
            "All",
            "Campus",
            "University",
            "UTME",
            "Unilag",
            "Yabatech",
            "Uniben",
            "Academic",
            "JAMB",
            "Lasu",
          ].map((tag, index) => (
            <button
              key={index}
              className={`py-2 px-8 rounded-md text-xs md:text-2xl lg:text-sm xl:text-lg font-exo ${
                index === 0
                  ? "text-white bg-green-700"
                  : "text-green-700 bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>

  <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 pt-8 pb-4'>
  {
          details.map(datum => (
            <Link key={datum.id} to={`/blog/${datum.id}`} className='flex flex-col gap-2 border rounded-xl'>
              <img src={datum.pic} alt="school-img" className='rounded-t-xl' />
              <div className='p-5 flex flex-col gap-4 md:gap-6 lg:gap-4'>
                <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-exo'>{datum.title}</p>
                <div className='flex items-center justify-between gap-1'>
                  <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1'>
                    <MdOutlineCalendarMonth className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                    <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.date}</p>
                  </div>
                  <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1'>
                    <FaRegClock className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                    <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.duration}</p>
                  </div>
                  <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1'>
                    <GrView className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                    <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.views}</p>
                  </div>
                </div>
                <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-nunito-sans'>
                  {datum.desc}
                </p>
              </div>
            </Link>
          ))
        }
        </div>
    </div>
  )
}

export default Blogsection
