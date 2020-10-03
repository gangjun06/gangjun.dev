import React, { FC } from 'react'

import IntroSection from '../components/HomeSections/Intro'
import AboutSection from '../components/HomeSections/About'
import ProjectSection from '../components/HomeSections/Projects'

const Home: FC = () => {
  return (
    <div className=' '>
      <IntroSection />
      <AboutSection />
      {/* <ProjectSection /> */}
    </div>
  )
}

export default Home
