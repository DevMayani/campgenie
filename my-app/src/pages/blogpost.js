
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCalendarDays, FaRegClock } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaTelegramPlane,FaLinkedinIn,FaWhatsapp} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLike,BiDislike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";

const BlogPost = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

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
  const post =[
    {
      id:1,
      ima:'/assets/man.svg',
      topic:'Challenges and Opportunities in Commercializing University Research',
      dat:'Saturday, August, 2024',
    },
    {
      id:2,
      ima:'/assets/man.svg',
      topic:'Challenges and Opportunities in Commercializing University Research',
      dat:'Saturday, August, 2024',
    },
    {
      id:3,
      ima:'/assets/man.svg',
      topic:'Challenges and Opportunities in Commercializing University Research',
      dat:'Saturday, August, 2024',
    },
    {
      id:4,
      ima:'/assets/man.svg',
      topic:'Challenges and Opportunities in Commercializing University Research',
      dat:'Saturday, August, 2024',
    },
    
  ]
   const social = [
    {
      id: 1,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#4267B2' }}>
        <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaFacebookF className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3 text-white' /></a>
      
      </div>
    },
    {
      id: 2,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#60D669' }}>
      <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3 text-white' /></a>

    </div>
    },
    {
      id:3,
     icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#1DA1F2' }}>
        <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaTwitter className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3  text-white' /></a>
   
      </div>
    },
    {
      id: 4,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#2AABEE' }}>
      <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3  text-white' /></a>
   
    </div>
    },
  
  ];
  const comment=[
    {
      id:1,
      picture:'/assets/esther.svg',
      name:'Esther Howard',
      currentDate:'July 25, 2021 2:30 PM',
      comment:'I guess the IA is looking good for now. Let’s get started with next process',
      like:'2',
      dislike:'0',
    },
    {
      id:2,
      picture:'/assets/esther.svg',
      name:'Esther Howard',
      currentDate:'July 25, 2021 2:30 PM',
      comment:'I guess the IA is looking good for now. Let’s get started with next process',
      like:'2',
      dislike:'0',
    },
    {
      id:3,
      picture:'/assets/esther.svg',
      name:'Esther Howard',
      currentDate:'July 25, 2021 2:30 PM',
      comment:'I guess the IA is looking good for now. Let’s get started with next process',
      like:'2',
      dislike:'0',
    },
    {
      id:4,
      picture:'/assets/esther.svg',
      name:'Esther Howard',
      currentDate:'July 25, 2021 2:30 PM',
      comment:'I guess the IA is looking good for now. Let’s get started with next process',
      like:'2',
      dislike:'0',
    },
    {
      id:5,
      picture:'/assets/esther.svg',
      name:'Esther Howard',
      currentDate:'July 25, 2021 2:30 PM',
      comment:'I guess the IA is looking good for now. Let’s get started with next process',
      like:'2',
      dislike:'0',
    },
  ]

  // Check if blogs is an array
  if (!Array.isArray(blogs)) {
    console.error("Blogs data is not an array:", blogs);
    return <h2>No blogs available</h2>;
  }

  const blog = blogs.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <h2>Blog Not Found</h2>
        <button onClick={() => navigate('/blogs')}>Back to Blogs</button>
      </div>
    );
  }

  return (
   <div>
     <img src={blog.pic} alt={blog.title} className="w-full h-auto" />
     <div className="container mx-auto px-6 lg:px-10 xl:px-10">
     <div className='flex flex-col lg:flex-row gap-4'>
     <div className='lg:flex-2 flex flex-col gap-4 pt-5 md:pt-10'>
     <h1 className='text-start text-xl md:text-3xl lg:text-xl xl:text-2xl text-gray-600 font-exo lg:w-[90%] xl:w-[80%]'>{blog.title}</h1>
     <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'><strong>{blog.date}</strong> | {blog.duration} | {blog.views}</p>
     <p className='text-start text-xs md:text-2xl lg:text-sm xl:text-base text-gray-600 font-nunito-sans leading-6 md:leading-10 font-normal lg:leading-relaxed xl:text-relaxed'>{blog.desc}</p>

     <div className='flex flex-col gap-4 md:gap-6'>
      <p className='text-start text-xs md:text-2xl lg:text-sm xl:text-base text-gray-600 font-nunito-sans leading-6 md:leading-10 font-normal lg:leading-relaxed xl:text-relaxed'>1. Worem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <img src='/assets/ladies.svg' alt='blog-img' className="w-full h-auto" />
      <p className='text-start text-xs md:text-2xl lg:text-sm xl:text-base text-gray-600 font-nunito-sans leading-6 md:leading-10 font-normal lg:leading-relaxed xl:text-relaxed'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
     </div>
     </div>
      <div className='lg:flex-1  pt-10 flex flex-col gap-4'>
        <div className='border rounded-lg p-5'>
        <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">Tags</p>
          <div className=" py-2 md:py-2 grid grid-cols-3 gap-2 md:gap-4 lg:gap-2 ">
          
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm " style={{backgroundColor:'#F1F1F1'}}>Campus</button>
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm " style={{backgroundColor:'#F1F1F1'}}>University</button>
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm" style={{backgroundColor:'#F1F1F1'}}>UTME</button>
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm" style={{backgroundColor:'#F1F1F1'}}>Unilag</button>
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm" style={{backgroundColor:'#F1F1F1'}}>Academic</button>
              <button className="text-greenlite py-2  text-center px-4 rounded-md text-xs md:text-2xl lg:text-xs xl:text-sm " style={{backgroundColor:'#F1F1F1'}}>JAMB</button>
            </div>
          </div>

          <div className='border rounded-lg p-5 md:py-10 lg:p-5'>
            <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">Recent Post</p>

            <div className='flex flex-col gap-4 md:gap-6 lg:gap-4 py-4 md:py-6'>
              {
                post.map((items) => (
                  <div key={items.id} className='flex items-center gap-2 md:gap-4 lg:gap-2' >
                    <img src={items.ima} alt='male-img' className='w-[200px] h-[100px] rounded-md' />
                    <div className='flex flex-col gap-4 '>
                    <p className='text-start text-xs md:text-2xl lg:text-xs xl:text-sm text-gray-400 font-nunito-sans font-light'>{items.dat}</p>
                      <p className='text-xs md:text-2xl lg:text-xs xl:text-sm'>{items.topic}</p>
                     
                      </div>
                  </div>
                ))
              }
            </div>
           
          </div>
          <div>
              <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">Share Article:(23)</p>
              <div className='flex justify-start items-center gap-4 py-3'>
    {
     social.map((datum) => (

      <div key={datum.id} className='flex justify-start items-center'>
        
       <p>{datum.icon}</p>
        </div>
     ))
    }
    </div>
            </div>
      </div>
     </div>
    

     <div className='flex justify-between items-start pt-10 md:pt-20 pb-5'>
          <div className=''>
            <p className=' text-lg md:text-3xl lg:text-xl xl:text-2xlt font-exo font-semibold text-gray-900 tracking-wide'>
              Related Articles
            </p>
          </div>
          <div className=''>
            <button className="py-2 text-white text-sm md:text-2xl md:py-3 lg:text-sm lg:py-2 xl:text-base px-8 rounded-md" style={{ backgroundColor: '#549172' }}>View All</button>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 '>
          {
            details.map(datum => (
              <div key={datum.id} className='flex flex-col gap-2  border rounded-xl' style={{ color: '#FFFFFF' }}>
                <img src={datum.pic} alt="school-img" className='rounded-t-xl' />

                <div className='p-5 flex flex-col gap-4 md:gap-6 lg:gap-4'>
                  <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-exo'>{datum.title}</p>

                  <div className='flex items-center justify-between gap-1  '>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1'>
                      <MdOutlineCalendarMonth  className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.date}</p>
                    </div>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1 '>
                      <FaRegClock className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.duration}</p>
                    </div>
                    <div className='flex items-center justify-start gap-1 md:gap-2 lg:gap-1 '>
                      <GrView className="h-4 w-4 md:h-7 md:w-7 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
                      <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{datum.views}</p>
                    </div>
                  </div>
                  <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-600 font-nunito-sans'>
                    {datum.desc}
                  </p>
                 
                </div>
              </div>
            ))
          }
        </div>
        <div className='py-5 md:py-10 lg:py-6 '>
     <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">Comments</p>
    <div className='py-3 md:py-5 lg:py-3 xl:py-4'>
    <div className='border p-3 md:p-5 rounded-md w-[100%] lg:w-[40%] xl:w-[35%] flex flex-col gap-4 md:gap-6'>
      {
        comment.map((idea) => (
        <div>
            <div key={idea.id} className='flex items-start gap-4 pb-2 md:pb-4'>
            <img src={idea.picture} alt='user-img' />
            <div className='flex flex-col gap-2'>
              <p className='text-start text-sm md:text-2xl lg:text-sm text-gray-900 font-bold'>{idea.name}</p>
              <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{idea.currentDate}</p>
              <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-600 font-nunito-sans font-light w-[90%] xl:w-[80%]'>{idea.comment}</p>
             <div className='flex items-center gap-4'>
             <div className='flex items-center gap-2'>
              <BiLike className="h-3 w-3 md:h-6 md:w-6 lg:h-3 lg:w-3 xl:h-4 xl:w-4 text-gray-400" />
              <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{idea.like}</p>
                </div>
                <div className='flex items-center gap-2'>
              <BiDislike className="h-3 w-3 md:h-6 md:w-6 lg:h-3 lg:w-3 xl:h-4 xl:w-4 text-gray-400" />
              <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>{idea.like}</p>
                </div>
                <div className='flex items-center gap-2'>
              <FaRegComments className="h-3 w-3 md:h-6 md:w-6 lg:h-3 lg:w-3 xl:h-4 xl:w-4 text-gray-400" />
              <p className='text-start text-xs md:text-2xl lg:text-sm text-gray-400 font-nunito-sans font-light'>Reply</p>
                </div>
              </div>
             
              </div>
             
            </div>
            <hr />
          </div>
            
        ))
      }
     </div>
    </div>
      </div>
        <div className='py-5'>
              <p className="font-exo text-xs md:text-2xl lg:text-sm xl:text-lg">Share Article:(23)</p>
              <div className='flex justify-start items-center gap-4 py-3'>
    {
     social.map((datum) => (

      <div key={datum.id} className='flex justify-start items-center'>
        
       <p>{datum.icon}</p>
        </div>
     ))
    }
    </div>
            </div>
     </div>
    
     
   </div>
  );
};

export default BlogPost;
