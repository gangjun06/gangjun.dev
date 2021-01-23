import React, { FC } from 'react'
import Container from '../Container'
import AboutItem from '../AboutItem'
import { motion } from 'framer-motion'

import {
  faCode,
  faMobileAlt,
  faPalette
} from '@fortawesome/free-solid-svg-icons'

const About: FC = () => {
  return (
    <div id='about' className='color-deepdark-bg'>
      <Container className='md:flex flex-row-reverse justify-between items-stretch pt-48 pb-24 md:gap-x-24'>
        <div className='flex-1'>
          <div className='color-gray-text'>Introduce</div>
          <div className='mt-4 font-semibold text-4xl'>
            Hello! I'm Gangjun Lee
          </div>
          <div className='mt-8 color-gray-text'>
            I am a 15 years old student developer from Korea. I have been
            interested in programming since I was younger than now, and I am
            still working hard to learn. Currently I am focusing on web full
            stack development and I don't have a clear goal yet, but I would
            like to continue working on it to make good software.
          </div>
        </div>
        <motion.ul className='flex-1 flex flex-col gap-y-2 mt-8 md:mt-0'>
          <AboutItem
            title='Full-Stack'
            text='React, NextJS, NodeJS, GO'
            icon={faPalette}
          />
          <AboutItem
            title='Mobile'
            text='Flutter, React-Native'
            icon={faMobileAlt}
          />
          <AboutItem title='Etc' text='C, C++, Rust' icon={faCode} />
        </motion.ul>
      </Container>
    </div>
  )
}

export default About
