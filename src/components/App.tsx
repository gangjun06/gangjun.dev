import React, { FC } from 'react'
import Navbar from './Navbar'

const App: FC = ({ children }) => {
  return (
    <div id='app' className='color-white-text color-dark-bg'>
      <Navbar />
      <div className='mx-auto'>{children}</div>
    </div>
  )
}

export default App
