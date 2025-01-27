import React from 'react'
import { FaFacebookF, FaGooglePlusG,FaYoutube,FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";




const Footer = () => {

  const socials = [
    {
        id: 1,
        icon: <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">< FaFacebookF className='h-3 w-3 md:h-5 md:w-5 lg:h-3 lg:w-3' /></a>,
        title:'Facebook'
      },
      {
        id: 2,
        icon: <a href="https://www.linkedin.com/in/eniola-oni-8ba018180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><BsInstagram className='h-3 w-3  md:h-5 md:w-5 lg:h-3 lg:w-3' /></a>,
        title:'Instagram'
      },
      {
        id: 3,
        icon: <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaXTwitter className='h-3 w-3  md:h-5 md:w-5 lg:h-3 lg:w-3' /></a>,
        title:'Twitter'
      },
      {
        id: 4,
        icon: <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='h-3 w-3  md:h-5 md:w-5 lg:h-3 lg:w-3' /></a>,
        title:'LinkedIn'
      },
      {
        id: 5,
        icon: <a href="https://youtube.com/@theragist?si=OClCj1dGveog7Ci7" target="_blank" rel="noopener noreferrer"><FaYoutube className='h-3 w-3  md:h-5 md:w-5 lg:h-3 lg:w-3'/></a>,
        title:'Youtube'
      },
    ];

    const support= [
      {
          id: 1,
          icons: <a href="https://instagram.com/theragist?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">< IoCallOutline  className='h-4 w-4 md:h-5 md:w-5' /></a>,
          labelone:'+234 8093555637, ',
          labeltwo:'+234 9035765737',
        },
        {
          id: 2,
          icons: <a href="https://www.linkedin.com/in/eniola-oni-8ba018180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><MdOutlineMail className='h-4 w-4 md:h-5 md:w-5' /></a>,
          labelone:'Support@campugenie.com'
        },
        
      ];


  return (
    <div className='px-4 py-10 md:px-5 lg:px-10 bg-greenlite text-white'>
    <div className='border border-lite container mx-auto px-3  md:px-6 lg:px-10 xl:px-10  py-5 flex flex-col lg:flex-row'>
      <div className='flex-1 flex flex-col gap-4  lg:gap-1 py-5 md:py-10 lg:py-5'>
        <div>
          <a href="/">
          <img src="/assets/footer logo.svg" className='w-[60%] md:w-[50%] lg:w-[50%] ' alt="logo-img" />
          </a>
        </div>
        <p className='text-xs text-start leading-normal md:text-xl lg:text-xs xl:text-sm lg:w-[80%] '>Join our newsletter to stay up to date on school news, new features and releases.</p>

        <div className='flex flex-col lg:flex-row gap-y-2 md:gap-y-4 gap-x-2 pt-0  lg:w-[80%] lg:py-2 '>
     <input placeholder='Enter your email' className='bg-transparent border rounded-md px-2 py-2 text-xs md:text-xl lg:text-xs xl:text-sm lg:w-[50%]' />
     <button className='text-lite bg-white rounded-md px-2 w-[30%] py-1 text-xs md:text-xl lg:text-xs xl:text-sm '>Subscribe</button>
     </div>

     <p className='text-xs md:text-xl lg:text-xs xl:text-sm text-start lg:w-[80%] '>
      By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
      </p>

      </div>
      <div className='flex-1 grid grid-cols-2 lg:grid-cols-3 gap-y-8 py-5 md:py-10'>
  {/* Column 1 */}
  <div className=''>
    <p className='font-bold text-start text-sm md:text-xl lg:text-sm xl:text-base'>Company</p>
    <div className='flex flex-col gap-2 lg:gap-4 items-start mt-3 text-start text-xs md:text-xl lg:text-xs xl:text-sm font-light'>
      <p>Home</p>
      <p>About Us</p>
      <p>Services</p>
      <p>Blog</p>
      <p>FAQs</p>
      <p>Our Team</p>
    </div>
  </div>

  {/* Column 2 (Support) */}
  <div className='hidden lg:block'>
    {/* Show this on larger screens */}
    <p className='font-bold text-start text-sm md:text-xl lg:text-sm xl:text-base'>Support</p>
    <div className='flex flex-col gap-2 lg:gap-4 items-start mt-3 text-start text-xs md:text-xl lg:text-xs xl:text-sm font-light'>
      {support.map((item) => (
        <div key={item.id} className='flex items-center justify-between gap-2'>
          <p>{item.icons}</p>
          <div>
            <p className='text-xs md:text-xl lg:text-xs font-light'>{item.labelone}</p>
            <p className='text-xs md:text-xl lg:text-xs font-light'>{item.labeltwo}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Column 3 (Follow Us) */}
  <div className=''>
    <p className='font-bold text-start text-sm md:text-xl lg:text-sm xl:text-base'>Follow Us</p>
    <div className='flex flex-col gap-2 lg:gap-4 items-start mt-3 text-start text-xs md:text-xl lg:text-xs xl:text-sm font-light'>
      {socials.map((datum) => (
        <div key={datum.id} className='flex items-center justify-between gap-4 md:gap-6 lg:gap-4'>
          <p>{datum.icon}</p>
          <p className='text-xs md:text-xl lg:text-xs xl:text-sm font-light'>{datum.title}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Column 2 (Support) for Mobile */}
  <div className='lg:hidden'>
    {/* Show this only on mobile */}
    <p className='font-bold text-start text-sm md:text-xl lg:text-sm xl:text-base'>Support</p>
    <div className='flex flex-col gap-2 lg:gap-4 items-start mt-3 text-start text-xs md:text-xl lg:text-xs xl:text-sm font-light'>
      {support.map((item) => (
        <div key={item.id} className='flex items-center justify-between gap-2'>
          <p>{item.icons}</p>
          <div>
            <p className='text-xs md:text-xl lg:text-xs font-light'>{item.labelone}</p>
            <p className='text-xs md:text-xl lg:text-xs font-light'>{item.labeltwo}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

 
    </div>
    <div className='py-4 lg:py-8 flex flex-col-reverse lg:flex-row justify-between items-center text-xs md:text-xl lg:text-xs xl:text-sm gap-y-6 md:gap-y-8 container mx-auto '>
      <p>© 2025 CampusGenie. All rights reserved.</p>
      <div className='flex gap-4 cursor-pointer underline underline-lite'>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </div>









   
    </div>
  )
}

export default Footer