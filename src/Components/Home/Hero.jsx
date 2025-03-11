import React from 'react';  
import { BiArrowBack, BiLogoGithub, BiLogoLinkedin, BiBuildings } from 'react-icons/bi';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div id='home' className='h-full w-full flex flex-col items-center justify-center text-center lg:h-[90vh] py-10'>
      <div className='w-[90%] lg:w-[60%] font-bold mb-6'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl'>
          I'm <span className='textcolor'>Dipak Ghadge</span>
        </h1>
        <h2 className='text-lg sm:text-3xl md:text-4xl mt-2'>
          MERN Stack Developer passionate about building scalable web applications.
        </h2>
      </div>
      
      <p className='text-sm md:text-base w-[90%] lg:w-[60%] text-gray-400 mb-6'>
        Skilled in Figma, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap CSS, React.js, Material UI, Node.js, Express.js, PostgreSQL, and MongoDB. 
        Experienced in state management with Redux Toolkit. Proficient in Git, GitHub, Postman, and deployment platforms like Netlify and Render.
      </p>

      <div className='w-full text-center mb-8'>
        <h2 className='text-2xl font-bold mb-6'>Internships & Experience</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          <div className='p-4 border rounded-md shadow-md text-center w-96 h-72 flex flex-col items-center justify-between'>
            <BiBuildings className='text-4xl text-purple-700 mb-2' />
            <a href='http://www.astechnologycorp.com' target='_blank' rel='noopener noreferrer' className='text-lg md:text-xl font-semibold text-blue-600 hover:underline'>AS Technology Corporation</a>
            <p className='text-md text-gray-200'>Full Stack Developer Intern | Jun2024-Aug2024 | Pune Maharashtra, Remote</p>
            <ul className='text-md text-gray-200 list-disc list-inside text-left'>
              <li>Redesigned the "Skill Hub" dashboard using Figma, enhancing usability.</li>
              <li>Developed a responsive front-end using React and Tailwind CSS.</li>
              <li>Integrated RESTful APIs with Node.js, Express, and databases for better performance.</li>
              <li>Launched 8+ features, reducing page load times by 20% and increasing user engagement.</li>
            </ul>
          </div>
          <div className='p-4 border rounded-md shadow-md text-center w-96 h-72 flex flex-col items-center justify-between'>
            <BiBuildings className='text-4xl text-purple-700 mb-2' />
            <a href='http://www.krgconsultants.com' target='_blank' rel='noopener noreferrer' className='text-lg md:text-xl font-semibold text-blue-600 hover:underline'>KRG Consultants</a>
            <p className='text-md text-gray-200'>Web Development Intern | Dec 2023 - Feb 2024 | Vashi Navi Mumbai, Hybrid</p>
            <ul className='text-md text-gray-200 list-disc list-inside text-left'>
              <li>Designed web sections for "Live Recruit" using Figma.</li>
              <li>Developed the front-end with React, Material UI, Bootstrap, and JavaScript.</li>
              <li>Managed backend tasks with Mongoose, ensuring data integrity.</li>
              <li>Implemented 10+ new features and bug fixes for an improved user experience.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex space-x-4'>
        <a href='https://www.linkedin.com/in/dipakghadgewebdeveloper' target='_blank' rel='noopener noreferrer'>
          <BiLogoLinkedin className='text-2xl' />
        </a>
        <a href='https://github.com/Dipak10016' target='_blank' rel='noopener noreferrer'>
          <BiLogoGithub className='text-2xl' />
        </a>
      </div>

      <div className='mt-6'>
        <Link 
          to='contact' 
          smooth={true} 
          offset={-80} 
          duration={500} 
          className='btn h-10 w-36 rounded-md flex justify-center items-center text-base font-semibold bg-purple-700 text-white cursor-pointer'
        >
          Contact Me <BiArrowBack className='text-xl font-bold ml-2' />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
