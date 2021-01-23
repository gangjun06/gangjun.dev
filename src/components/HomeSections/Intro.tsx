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
      <Container className='sm:flex sm:flex-col sm:justify-center md:flex-row md:justify-between items-center'>
        <div>
          <div className='flex'>
            <div className='color-primary-bg text-black px-2 py-1 rounded'>
              Developer
            </div>
          </div>
          <div className='mt-8 tracking-wide text-4xl'>
            <p>Hello!</p>
            <p>I'm Gangjun Lee</p>
          </div>
          <div className='mt-4 color-gray-text'>
            <p>I'm a Korea student software engineer.</p>
          </div>
          <div className='color-primary-text mt-12 text-lg underline cursor-pointer'>
            <a href='#about'>Learn More</a>
          </div>
          <div
            className='my-8 xl:flex xl:absolute xl:my-0'
            style={{ bottom: '5em' }}>
            <div className='flex items-center'>
              <div className='text-5xl font-bold'>2</div>
              <div className='ml-5 color-gray-text'>
                <p>Years</p>
                <p>Experience</p>
              </div>
            </div>
            <div className='xl:ml-4 flex items-center'>
              <div className='text-5xl font-bold'>{contributionsCount}</div>
              <div className='ml-5 color-gray-text'>
                <p>Contributions</p>
                <p>For 1Year</p>
              </div>
            </div>
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
    </div>
  )
}

export default Intro
