import React, { FC } from 'react'
import Navbar from './Navbar'

const App: FC = ({ children }) => {
  return (
    <div id='app' className='bg-color-2 font-color-1'>
      <Navbar />
      <div className='mx-auto'>{children}</div>
    </div>
  )
}

export default App
