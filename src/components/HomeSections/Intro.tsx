import React, { FC, useState, useEffect } from 'react'
import Container from '../Container'
import IntroImg from '../../assets/IntroImg.svg'
import { GetContributions } from '../../utils/github'

const Intro: FC = () => {
  const [contributionsCount, setContributionsCount] = useState<number>(0)

  useEffect(() => {
    GetContributions().then((data) => setContributionsCount(data))
  }, [])

  return (
    <div id='intro'>
      <Container className='md:flex justify-between items-center'>
        <div>
          <div className='flex'>
            <div className='bg-color-4 text-black px-2 py-1 rounded'>
              Developer
            </div>
          </div>
          <div className='mt-8 tracking-wide text-4xl'>
            <p>Hello!</p>
            <p>I'm Gangjun Lee</p>
          </div>
          <div className='mt-4 font-color-5'>
            <p>I'm a Korea student software engineer.</p>
          </div>
          <div className='font-color-4 mt-12 text-lg underline cursor-pointer'>
            <a href='#contact'>Get In Touch</a>
          </div>
        </div>
        <div className='hidden md:block'>
          <img
            style={{ width: '500px', height: '500px' }}
            alt='intro'
            src={IntroImg}
          />
        </div>
        <div className='md:flex absolute' style={{ bottom: '5em' }}>
          <div className='flex items-center'>
            <div className='text-5xl font-bold'>2</div>
            <div className='ml-5 font-color-5'>
              <p>Years</p>
              <p>Experience</p>
            </div>
          </div>
          <div className='md:ml-4 sm:ml-32 flex items-center'>
            <div className='text-5xl font-bold'>{contributionsCount}</div>
            <div className='ml-5 font-color-5'>
              <p>Contributions</p>
              <p>This Year</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro
