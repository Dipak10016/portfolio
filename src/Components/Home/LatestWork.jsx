import React from 'react';
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
      projectTitle: 'Vacation Next',
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
      projectTitle: 'QuickMenu',
      projectDescription: 'Built a QR code-based system using Python and Google Drive API to generate store-specific PDF menus, currently used by 8 shops. Enables seamless mobile access, reduces paperwork, and promotes sustainability. Integrated error correction for reliable scanning and a 90-day expiration mechanism for enhanced security.'
    },
  ];

  return (
    <div id='latestwork' className='relative m-auto mt-10 mb-2 px-4 max-w-7xl'>
      {/* Section Title */}
      <h1 className='text-3xl md:text-5xl font-semibold text-white text-center'>Latest Work</h1>
      <p className='text-gray-400 text-center mt-2'>(Some videos and deployment links are currently under development.)</p>

      {/* Project Grid - 3 Projects Per Row */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8'>
        {projects.map((val, ind) => (
          <div key={ind} className='flex flex-col items-start'>
            {/* Project Image */}
            <a href={val.projectView} className='w-full'>
              <img className='w-full object-cover rounded-lg' src={val.projectImg} alt={val.projectTitle} />
            </a>

            {/* Project Title */}
            <h1 className='text-2xl font-semibold text-white mt-4'>{val.projectTitle}</h1>
            
            {/* Project Description */}
            <p className='text-sm text-gray-300 mt-2'>{val.projectDescription}</p>

            {/* Buttons */}
            <div className='flex flex-wrap gap-3 mt-4'>
              <a href={val.projectCode} className='px-5 py-2 text-sm text-white bg-purple-600 rounded-full hover:bg-purple-700 transition'>View Code</a>
              <a href={val.projectView} className='px-5 py-2 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-700 transition'>View Live</a>
              <a href={val.projectDemo} className='px-5 py-2 text-sm text-white bg-green-600 rounded-full hover:bg-green-700 transition'>Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestWork;
