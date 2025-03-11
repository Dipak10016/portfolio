import React from 'react';
import { BiCodeBlock, BiCoinStack, BiCross, BiSolidBookContent } from 'react-icons/bi';

function About() {
  return (
    <div id='aboutus' className='h-full w-full mt-20 md:mt-6 lg:mt-2 text-white'>
      <div className='relative'>
        <h1 className='text-4xl md:text-6xl text-center font-bold'>About Me</h1>
        <BiCross className='animate-spin text-5xl absolute -bottom-10 right-10' />
        <BiCross className='animate-bounce text-3xl absolute -bottom-96' />
      </div>
      <h1 className='w-full md:w-4/5 lg:w-3/5 xl:w-1/2 my-10 m-auto text-sm sm:text-base text-center'>
        I am a Full-Stack Developer with a passion for Artificial Intelligence and Machine Learning. My expertise includes:
        <br /><br />
        <strong>Frontend Development:</strong> Proficient in React.js, JavaScript, HTML, CSS, and Tailwind CSS. Experienced in state management with Context API, Zustand, and Redux Toolkit to build responsive, user-friendly interfaces.
        <br /><br />
        <strong>Backend Development:</strong> Skilled in Node.js, Express.js, and MongoDB, specializing in REST APIs, authentication, and real-time communication with Socket.io. Experienced with Postman, MongoDB Atlas, and Render.
        <br /><br />
        <strong>Web Design:</strong> Creating clean, modern, and user-friendly designs using HTML, CSS, and Tailwind CSS. Experienced in Figma for design and layout planning.
        <br /><br />
        I am dedicated to building responsive, user-friendly, and scalable web applications, always eager to learn, adapt, and tackle new challenges in web development.
      </h1>
      {/* Services */}
      <div className='min-h-60 w-full lg:w-11/12 m-auto flex flex-wrap justify-around items-center'>
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900'>
          <BiCodeBlock className='text-4xl md:text-5xl pt-4 rounded-full m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Frontend Development</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Proficient in React.js, JavaScript, HTML, CSS, and Tailwind CSS. Experienced in state management with Context API, Zustand, and Redux Toolkit to build responsive, user-friendly interfaces.
          </p>
        </div>
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-800'>
          <BiCoinStack className='text-4xl md:text-5xl pt-4 rounded-full m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Backend Development</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Skilled in Node.js, Express.js, and MongoDB, specializing in REST APIs, authentication, and real-time communication with Socket.io. Experienced with Postman, MongoDB Atlas, and Render.
          </p>
        </div>
        <div className='h-48 w-72 sm:h-56 lg:h-56 lg:w-72 cursor-pointer my-4 lg:my-0 mx-4 sm:mx-0 box duration-300 rounded-lg shadow-xl shadow-gray-900'>
          <BiSolidBookContent className='text-4xl md:text-5xl pt-4 rounded-full m-auto' />
          <h1 className='text-lg md:text-xl text-center font-semibold py-2'>Web Design</h1>
          <p className='text-xs sm:text-sm px-1 text-gray-400 text-center'>
            Creating clean, modern, and user-friendly designs using HTML, CSS, and Tailwind CSS. Experienced in Figma for design and layout planning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
