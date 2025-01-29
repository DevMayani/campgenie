import React from 'react'

const About = () => {
  const details=[
    {
    id:1,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:2,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:3,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:4,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:5,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:6,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:7,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
  {
    id:8,
    pic:'/assets/ladyimage.svg',
    label:'Emmanuel Taiwo',
    position:'Chief Executive Officer',
  },
]

const vision=[
  {
  id:1,
  imag:'/assets/markicon.svg',
  title:'Our Story',
  desc:'Campus Genie was founded by a group of passionate educators and technologists who saw the need for a more personalized and effective approach to learning. We believe that every student deserves access to quality resources and guidance,regardless of their background or circumstances',
},
{
  id:2,
  imag:'/assets/eye.svg',
  title:'Our Vision',
  desc:'To revolutionize the education sector by providing cutting-edge technology and expert guidance, enabling students to achieve academic excellence and succeed in their chosen careers',
},

]
  return (
    <div>
  <div className='p-10 md:py-28 md:px-20 lg:p-20'>
  <div className='flex justify-center items-center '>
    <p className='font-exo text-lg md:text-3xl lg:text-xl xl:text-2xl font-light leading-6 md:leading-8 lg:leading-7 xl:leading-10 text-center '>Welcome to <span className='text-2xl md:text-5xl lg:text-3xl xl:text-4xl text-lite font-semibold' style={{ color: '#549172' }}><br /> CampusGenie</span> </p>
   </div>
  <div className='flex justify-center items-center'>
  <p className=' w-[100%] lg:w-[60%] xl:w-[70%] text-sm md:text-2xl lg:text-sm xl:text-lg text-center font-nunito-sans py-4 lg:py-6 leading-6 md:leading-10 lg:leading-6 xl:leading-7 text-gray-700'>
    We are a team of education enthusiasts dedicated to helping students succeed in their academic journey. Our mission is to provide innovative solutions and support services that empower students to reach their full potential.
    </p>
  </div>

  </div>
  <div>
    <div className='text-white  bg-greenlite p-3 md:p-8 lg:p-6 xl:p-8' >
      <p className='text-exo text-2xl md:text-5xl lg:text-3xl xl:text-4xl text-center'>Meet our Team</p>
    </div>
    <div className='container mx-auto px-6 lg:px-10 xl:px-10 py-10  md:py-16 lg:py-10 xl:py-20' style={{ backgroundColor: '#FAF9F7' }}>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {
        details.map((datum)=> (
          <div className=' text-white rounded-md' style={{ backgroundColor: '#2B5D45' }}>
            
            <img src={datum.pic} className='w-full h-auto ' alt='staff-img' />
            <div className='p-5 flex flex-col justify-center items-center'>
            <p className='text-sm md:text-2xl lg:text-xl xl:text-xl font-exo'>{datum.label}</p>
            <p className='text-xs md:text-xl lg:text-sm font-nunito-sans'>{datum.position}</p>
              </div>
             
            </div>
        ))
      }
     </div>
    </div>
    <div className='container mx-auto px-6 lg:px-10 xl:px-10 py-4 lg:py-10 xl:py-20 '>
    <div className='grid lg:grid-cols-2 gap-4'>
      {
        vision.map((items)=> (
          <div className='bg-greenlite text-white rounded-md p-5 md:p-10' >
            
            <div className='flex justify-between items-start '>
            <p className='font-exo text-lg md:text-3xl lg:text-xl xl:text-2xl '>{items.title}</p>
            <img src={items.imag} className='w-[10%] lg:w-[10%]' alt='staff-img' />
          
              </div>
            <p className='text-xs md:text-xl lg:text-sm xl:text-base font-light font-nunito-sans w-[70%] md:w-[100%] lg:w-[80%] pt-8'>{items.desc}</p>
             
             
            </div>
        ))
      }
     </div>
    </div>
  </div>
    </div>
  )
}

export default About;
