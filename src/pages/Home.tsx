import React, { FC } from 'react'

import IntroSection from '../components/HomeSections/Intro'
import AboutSection from '../components/HomeSections/About'
import ProjectSection from '../components/HomeSections/Projects'
import ContactSection from '../components/HomeSections/Contact'

const Home: FC = () => {
  return (
    <div className=' '>
      <IntroSection />
      <AboutSection />
      {/* <ProjectSection /> */}
      <ContactSection />
    </div>
  )
}

export default Home
