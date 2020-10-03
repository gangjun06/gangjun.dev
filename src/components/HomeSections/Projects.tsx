import React, { FC } from 'react'
import Container from '../Container'
import ProjectItem from '../ProjectItem'

const Projects: FC = () => {
  return (
    <div id='projects' className='bg-color-3'>
      <Container className='py-24 md:flex md:gap-x-24'>
        <div className='flex-1 mb-8'>
          <div className='flex justify-center'>
            <div>
              <div className='font-semibold text-4xl'>Projects</div>
              <div className='font-color-5'>
                List of projects I have worked on
              </div>
            </div>
          </div>
          <ProjectItem
            text='ProjectName'
            tags={['react', 'go']}
            color='#2D2E32'
          />
        </div>
        <div className='flex-1'>
          <ProjectItem
            text='ProjectName'
            tags={['react', 'go']}
            color='#2D2E32'
          />
          <ProjectItem
            text='ProjectName'
            tags={['react', 'go']}
            color='#2D2E32'
          />
        </div>
      </Container>
    </div>
  )
}

export default Projects
