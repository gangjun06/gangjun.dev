import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <div className=''>
      <BuildIntro />
      <BuildAbout />
    </div>
  )
}

const BuildIntro = () => {
  return (
    <div id='intro'>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='bg-color-4 text-black px-2 py-1 rounded'>
            Full-Stack Developer
          </div>
        </div>
        <div className='mt-8 tracking-wide text-4xl'>
          <p>Talk is cheap.</p>
          <p>Show me the code</p>
        </div>
        <div className="mt-4 font-color-5">
          <p>I develop a lot of interesting things.</p>
          <p>And I love what I do.</p>
        </div>
      </div>
    </div>
  )
}

const BuildAbout = () => {
  return <div id='about' className='bg-color-3'></div>
}

export default Home
