import React from 'react'
import ContactForm from '../components/contactform/Contactform';
import { FaFacebookF,FaTwitter,FaTelegramPlane,FaLinkedinIn} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const social = [
    {
      id: 1,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#4267B2' }}>
        <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaFacebookF className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3 text-white' /></a>
      
      </div>
    },
    {
      id: 2,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#FFB54E' }}>
      <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3 text-white' /></a>

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
    {
      id: 5,
      icon: <div className='h-8 w-8 flex justify-center items-center' style={{ backgroundColor: '#0076B2' }}>
        <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3  text-white' /></a>
     
      </div>
    },
  ];
 
  const details =[
    {
      id:1,
      pic:'/assets/fb.svg'
    },
    {
      id:2,
      pic:'/assets/ig.svg'
    },
    {
      id:3,
      pic:'/assets/twitter.svg'
    },
    {
      id:4,
      pic:'/assets/telegram.svg'
    },
    {
      id:1,
      pic:'/assets/in.svg'
    },
  ]

  return (
    <div>
      <div className='px-5 py-10 md:py-28 md:px-20 lg:p-20'>
  <div className='flex justify-center items-center '>
    <p className='font-exo text-base md:text-2xl lg:text-lg xl:text-xl  leading-6 md:leading-loose lg:leading-10 xl:leading-loose text-center font-bold' style={{ color: '#549172' }}>OUR BLOGS <span className='text-2xl md:text-5xl lg:text-3xl xl:text-4xl font-semibold text-black' ><br /> Get In Touch</span> </p>
   </div>
  <div className='flex justify-center items-center'>
  <p className=' w-[90%] lg:w-[55%] xl:w-[55%] text-xs md:text-xl lg:text-xs xl:text-base text-center font-nunito-sans py-4 lg:py-6 leading-loose md:leading-10 lg:leading-6 xl:leading-6 text-gray-700'>
  We are here to help! Whether you have questions, need support, or want to share feedback, feel free to reach out to us.
    </p>
  </div>

  </div>

  <div className='container mx-auto px-6 py-4 lg:py-10 xl:py-20  flex flex-col gap-6 md:gap-20  md:px-10 lg:px-40 xl:px-64'>
     
         <div className=' flex flex-col lg:flex-row gap-y-8 gap-x-8 justify-between items-center'> 
         <div
    className="lg:flex-1 w-full h-[250px] md:h-[350px] lg:h-[300px] xl:h-[320px] text-white rounded-md p-5 md:p-10 flex flex-col gap-5 justify-center items-center"
    style={{ backgroundColor: '#3F8361' }}
  >
            <div className='bg-white h-8 w-8 md:w-16 md:h-16 lg:h-10 lg:w-10 xl:h-10 xl:w-10 rounded-full flex justify-center items-center'>
            <IoCallOutline className="h-4 w-4  md:h-8 md:w-8 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
            </div>
          <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-exo font-bold'>Phone</p>
         
         <a
          href="tel:+2348093555637"
          className="text-xs md:text-2xl lg:text-sm xl:text-lg font-nunito-sans font-light"
        >
          0909XXXXXXX, 08136XXXXXX
        </a> 
       
        
             
            </div>

            <div
    className="lg:flex-1 w-full h-[250px] md:h-[350px] lg:h-[300px] xl:h-[320px] text-white rounded-md p-5 md:p-10 flex flex-col gap-5 justify-center items-center"
    style={{ backgroundColor: '#3F8361' }}
  >
            <div className='bg-white h-8 w-8 md:w-16 md:h-16 lg:h-10 lg:w-10 xl:h-10 xl:w-10 rounded-full flex justify-center items-center'>
            <MdOutlineMail className="h-4 w-4  md:h-8 md:w-8 lg:h-4 lg:w-4 xl:h-5 xl:w-5" style={{ color: '#549172' }} />
            </div>
          <p className='text-sm md:text-2xl lg:text-base xl:text-lg font-exo font-bold'>Email</p>
    
        
        <a
          href="mailto:support@campusgenie.com"
          className="text-xs md:text-2xl lg:text-sm xl:text-lg font-nunito-sans font-light"
        >
         Support@campus.com
        </a>
         
            </div>
         </div>
         <div className='border-b '></div>
        <ContactForm />
        <div className='border-b '></div>
        <div>
        <div className='flex justify-center items-center  '>
   <span className='font-exo text-2xl md:text-5xl lg:text-3xl xl:text-4xl text-black font-light' ><br /> Follow Us</span>
   </div>
  <div className='flex justify-center items-center'>
  <p className=' w-[100%] md:w-[85%] lg:w-[50%] xl:w-[60%]  text-xs md:text-xl lg:text-xs xl:text-base text-center font-nunito-sans py-4 lg:py-6 leading-tight md:leading-8 lg:leading-tight xl:leading-6 text-gray-800 '>
  Stay connected with Campus Genie on social media for updates, tips, and more
    </p>
  </div>

  <div className='flex justify-center items-center gap-4'>
    {
     social.map((datum) => (

      <div key={datum.id} className='flex justify-center items-center'>
        
       <p>{datum.icon}</p>
        </div>
     ))
    }
    </div>
        </div>
     
   
    </div>


    </div>
  )
}

export default Contact;
