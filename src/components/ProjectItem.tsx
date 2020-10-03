import React, { FC } from 'react'

type props = {
  text: string
  tags: string[]
  image?: string
  color: string
}

const ProjectItem: FC<props> = ({ text, tags, image, color }) => {
  const BuildTag = ({ text }: { text: string }) => {
    return (
      <div className='px-2 py-1 rounded-sm text-sm flex items-center text-gray-400' style={{ backgroundColor: '#4E4D52' }}>
        {text}
      </div>
    )
  }

  return (
    <div className='px-4 mt-16'>
      <div
        className='flex justify-between w-full projectItem py-8 px-12'
        style={{ backgroundColor: color }}>
        <div>{text}</div>
        <div className='flex gap-x-3'>
          {tags.map((item, i) => (
            <BuildTag text={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
