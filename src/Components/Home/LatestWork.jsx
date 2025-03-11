import React from 'react';
import { BiCircle, BiStar } from 'react-icons/bi';
import project4 from '../../assets/visionary extractor.png';
import project3 from '../../assets/vacatio_next.png';
import project1 from '../../assets/She_Safe.png';
import project5 from '../../assets/quick_menu.png';
import project2 from '../../assets/campus_edu.png';

function LatestWork() {
  const projects = [
    {
      projectImg: project1,
      projectCode: 'https://github.com/Dipak10016/She_Safe',
      projectView: 'https://none.com/',
      projectDemo: 'https://none.com/demo',
      projectTitle: 'SheSafe is an AI-powered platform',
      projectDescription: 'SheSafe is an AI-driven platform that enhances women’s safety with real-time alerts, location-based resources, and an empowerment hub, built using the MERN stack (MongoDB, Express.js, React.js, Node.js), machine learning, LLaMA AI, and Groq during the Mumbai Hacks 24-Hour Hackathon.'
    },
    {
      projectImg: project2,
      projectCode: 'https://github.com/Dipak10016/Campus_Edutrack',
      projectView: 'https://none.com',
      projectDemo: 'https://none.com/demo',
      projectTitle: 'Campus EduTrack',
      projectDescription: 'Campus EduTrack is a Python app for automating student data management at SIES Graduate School of Technology. Built with Python, xlwings, Tkinter, pandas, and openpyxl, it processes student 2000+ records and generates Mentee Information Sheets with an easy-to-use GUI.'
    },
    {
      projectImg: project3,
      projectCode: 'https://github.com/Dipak10016/Vacation_Next',
      projectView: 'https://none.com',
      projectDemo: 'https://none.com/demo',
      projectTitle: 'Vacation_Next',
      projectDescription: 'Vacation Next is a dynamic home rental platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), Figma for design, and Bootstrap & Tailwind CSS for the frontend. It simplifies vacation booking with an intuitive interface and real-time updates for travelers and property owners.'
    },
    {
      projectImg: project4,
      projectCode: 'https://github.com/Dipak10016/visionary_extractor',
      projectView: 'https://none.com',
      projectDemo: 'https://none.com/demo',
      projectTitle: 'Visionary Extractor',
      projectDescription: 'Visionary Extractor is an OCR-based tool for extracting text from images, built using Python. It utilizes libraries such as OpenCV (cv2), Tesseract (pytesseract), easyOCR, and PIL for image processing and text recognition. The project also uses numpy, requests, and pandas for enhanced functionality, data manipulation, and handling image inputs from URLs.'
    },
    {
      projectImg: project5,
      projectCode: 'https://none.com',
      projectView: 'https://none.com',
      projectDemo: 'https://none.com/demo',
      projectTitle: 'QuickMenu ',
      projectDescription: 'Built a QR code-based system using Python and Google Drive API to generate store-specific PDF menus, currently used by 8 shops. Enables seamless mobile access, reduces paperwork, and promotes sustainability. Integrated error correction for reliable scanning and a 90-day expiration mechanism for enhanced security.'
    },
  ];

  return (
    <div id='latestwork' className='relative m-auto mt-10 mb-2'>
      {/* Title Section */}
      <div className='m-auto text-center relative'>
        <h1 className='text-3xl md:text-5xl font-semibold py-7'>Latest Work</h1>
        <BiStar className='animate-spin text-2xl absolute bottom-0' />
      </div>
      <BiCircle className='text-5xl animate-pulse absolute bottom-0 right-10' />
      <BiCircle className='text-4xl animate-pulse absolute bottom-6 right-10' />

      {/* Project Grid */}
      <div className='h-full w-full xl:w-11/12 m-auto flex flex-wrap gap-4 justify-center items-start'>
        {projects.map((val, ind) => (
          <div key={ind} className='min-h-[400px] w-96 sm:w-[90%] lg:h-64 m-auto rounded-lg flex flex-col lg:flex-row lg:pt-2 mb-8 sm:mb-4'>
            {/* Project Image */}
            <a href={val.projectView} className='h-[60%] w-full lg:h-60 lg:w-[80%] m-auto'>
              <img className='project h-[92%] w-11/12 m-auto duration-300 rounded-lg object-cover' src={val.projectImg} />
            </a>
            
            {/* Project Details */}
            <div className='h-[40%] w-full lg:w-1/2 pl-4 lg:pl-2'>
              <h1 className='text-base font-semibold pb-1'>{val.projectTitle}</h1>
              <p>{val.projectDescription}</p>

              {/* Buttons */}
              <div className='flex flex-wrap justify-center gap-2 my-2'>
                <a href={val.projectCode} className='h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 btn rounded-full'>View Code</a>
                <a href={val.projectView} className='h-8 w-24 pt-1.5 text-sm text-center bg-purple-700 btn rounded-full'>View Live</a>
                <a href={val.projectDemo} className='h-8 w-24 pt-1.5 text-sm text-center bg-blue-700 btn rounded-full'>Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestWork;
