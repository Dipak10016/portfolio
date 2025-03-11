import React from 'react'
import Footer from '../Footer'
import Hero from './Hero'
import LatestWork from './LatestWork'
import Contact from './Contact'
import About from './About'

function Home() {
  return (
    <div className='fullbackgroundcolor px-4 xl:px-12 relative ' >
      <Hero />
      <br></br>
      <br></br>
      <br></br>
      <About />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home