import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { primary } from '../styles/color'
import { Link, useLocation } from 'react-router-dom'

const Navbar: FC = () => {
  const location = useLocation()
  const navbarItems = [
    {
      name: 'Intro',
      link: '/#app'
    },
    {
      name: 'About',
      link: '/#about'
    },
    {
      name: 'Projects',
      link: '/#'
    },
    {
      name: 'Contact',
      link: '/#contact'
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
              whileHover={{ fontSize: '1.125rem', color: primary }}>
              {location.pathname === '/' ? (
                <motion.a href={item.link}>{item.name}</motion.a>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      <div className='flex items-center'>
        <a
          className='mr-4 hidden sm:flex items-center'
          href='https://github.com/gangjun06'>
          <FontAwesomeIcon icon={faGithub} />
          <div className='ml-2'>Github</div>
        </a>
      </div>
    </div>
  )
}

export default Navbar
