import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className='flex justify-between mx-64 py-12'>
      <div className='flex text-2xl'>
        <div className='font-bold'>Gangjun</div>&nbsp;
        <div className='text-gray-300'>Lee</div>
      </div>
      <div className='flex'></div>
      <div className='flex items-center'>
        <div className='mr-4'>Github</div>
        <div className='bg-color-6 w-10 h-10 rounded-full flex justify-center items-center'>
          E
        </div>
      </div>
    </div>
  )
}

export default Navbar
