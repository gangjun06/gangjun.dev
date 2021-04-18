import React, { FC, useEffect, useState } from 'react'
import { GetStatus, Status, StatusMode } from '../utils/status'
import Container from '../components/Container'

const statusBadgeColor = (mode: StatusMode): string => {
  let color = ''
  if (mode === StatusMode.Work) color = 'bg-blue-300'
  else if (mode === StatusMode.Study) color = 'bg-pink-300'
  else if (mode === StatusMode.Rest) color = 'bg-green-300'
  else if (mode === StatusMode.Sleep) color = 'bg-purple-300'
  else color = 'bg-gray-300'
  return color
}

const StatusPage: FC = () => {
  const [data, setData] = useState<null | Status>(null)
  useEffect(() => {
    GetStatus().then((data) => setData(data))
  }, [])
  return (
    <Container className='mt-24'>
      {data ? (
        <>
          <div className='flex'>
            <div
              className={`${statusBadgeColor(
                data.mode
              )} text-black px-2 py-1 rounded`}>
              {data.mode}
            </div>
          </div>
          <div className='text-2xl mt-4'>
            {data.title ? data.title : 'No title has been set.'}
          </div>
          <div className='mt-1 color-gray-text'>
            {data.text ? data.text : 'No description has been set.'}
          </div>
        </>
      ) : (
        <div>Loading Data...</div>
      )}
    </Container>
  )
}

export default StatusPage
