import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Navbar: FC = () => {
  const navbarItems = [
    {
      name: 'Intro',
      link: '#app'
    },
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Projects',
      link: '#'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]

  return (
    <div className='flex justify-between mx-12 sm:mx-16 xl:mx-64 py-12'>
      <a className='flex text-2xl cursor-pointer' href='/'>
        <div className='font-bold'>Gangjun</div>&nbsp;
        <div className='text-gray-300'>Lee</div>
      </a>
      <div className='hidden lg:flex gap-x-12'>
        {navbarItems.map((item, i) => (
          <div key={i}>
            <motion.div
              initial={{ fontSize: '1rem' }}
              whileHover={{ fontSize: '1.125rem', color: '#63F3AB' }}>
              <motion.a href={item.link}>{item.name}</motion.a>
            </motion.div>
          </div>
        ))}
      </div>
      <div className='flex items-center'>
        <a
          className='mr-4 hidden md:flex items-center'
          href='https://github.com/gangjun06'>
          <FontAwesomeIcon icon={faGithub} />
          <div className='ml-2'>Github</div>
        </a>
        <a className='bg-color-6 w-10 h-10 rounded-full flex justify-center items-center' href="mailto:me@gangjun.dev">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  )
}

export default Navbar
