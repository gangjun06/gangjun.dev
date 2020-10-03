import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar: FC = () => {
  return (
    <div className='flex justify-between mx-64 py-12'>
      <div className='flex text-2xl'>
        <div className='font-bold'>Gangjun</div>&nbsp;
        <div className='text-gray-300'>Lee</div>
      </div>
      <div className='flex'></div>
      <div className='flex items-center'>
        <div className='mr-4 flex items-center'>
          <FontAwesomeIcon icon={faGithub} />
          <div className='ml-2'>Github</div>
        </div>
        <div className='bg-color-6 w-10 h-10 rounded-full flex justify-center items-center'>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
