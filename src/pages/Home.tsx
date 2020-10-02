import React, { FC, useEffect, useState } from 'react'
import IntroImg from '../assets/IntroImg.svg'
import { GetContributions } from '../utils/github'
import Container from '../components/Container'
import { motion } from 'framer-motion'
import AboutItem from '../components/AboutItem'

const Home: FC = () => {
  return (
    <div className=' '>
      <BuildIntro />
      <BuildAbout />
    </div>
  )
}

const BuildIntro = () => {
  const [contributionsCount, setContributionsCount] = useState<number>(0)

  useEffect(() => {
    // GetContributions().then((data) => setContributionsCount(data))
  }, [])

  return (
    <div id='intro'>
      <Container className='md:flex justify-between items-center'>
        <div>
          <div className='flex'>
            <div className='bg-color-4 text-black px-2 py-1 rounded'>
              Full-Stack Developer
            </div>
          </div>
          <div className='mt-8 tracking-wide text-4xl'>
            <p>Talk is cheap.</p>
            <p>Show me the code</p>
          </div>
          <div className='mt-4 font-color-5'>
            <p>I develop a lot of interesting things.</p>
            <p>And I love what I do.</p>
          </div>
          <div className='font-color-4 mt-12 text-lg underline cursor-pointer'>
            <a href='mailto:me@gangjun.dev'>Get In Touch</a>
          </div>
        </div>
        <div className='hidden md:block'>
          <img
            style={{ width: '500px', height: '500px' }}
            alt='intro'
            src={IntroImg}
          />
        </div>
      </Container>
      <div
        className='flex mx-64 py-12'
        style={{ position: 'absolute', bottom: '25vh' }}>
        <div className='flex items-center'>
          <div className='text-5xl font-bold'>2</div>
          <div className='ml-5 font-color-5'>
            <p>Years</p>
            <p>Experience</p>
          </div>
        </div>
        <div className='ml-4 sm:ml-32 flex items-center'>
          <div className='text-5xl font-bold'>{contributionsCount}</div>
          <div className='ml-5 font-color-5'>
            <p>Contributions</p>
            <p>This Year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const BuildAbout = () => {
  return (
    <div id='about' className='bg-color-3'>
      <Container className='md:flex flex-row-reverse justify-between items-stretch pt-48 md:gap-x-12'>
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
          <AboutItem />
          <AboutItem />
          <AboutItem />
        </motion.ul>
      </Container>
    </div>
  )
}

export default Home
