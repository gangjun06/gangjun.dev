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
    <div id='about' className='bg-color-3'>
      <Container className='md:flex flex-row-reverse justify-between items-stretch pt-48 pb-24 md:gap-x-24'>
        <div className='flex-1'>
          <div className='font-color-5'>Introduce</div>
          <div className='mt-4 font-semibold text-4xl'>
            Hello! I'm Gangjun Lee
          </div>
          <div className='mt-8 font-color-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            distinctio natus cupiditate debitis, nobis ducimus in, expedita,
            molestiae blanditiis alias pariatur incidunt sit! Ab debitis
            corporis dicta, nam suscipit quidem!
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
