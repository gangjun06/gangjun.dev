import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type props = {
  title: string
  text: string
  icon: IconProp
}

const AboutItem: FC<props> = ({ title, text, icon }) => {
  return (
    <motion.li
      className='color-dark-bg flex-1 px-12 py-8'
      whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
      <div className='flex justify-between items-center'>
        <div className=''>{title}</div>
        <FontAwesomeIcon icon={icon} className='font-color-4' />
      </div>
      <div className='color-gray-text'>{text}</div>
      <div className='mt-3 underline text-sm'>Learn More</div>
    </motion.li>
  )
}

export default AboutItem
