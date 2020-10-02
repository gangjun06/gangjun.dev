import React, { FC } from 'react'

type props = {
    className: string
}

const Container: FC<props> = ({ children, className }) => {
  return <div className={`container mx-auto px-12 sm:px-4 ${className}`}>{children}</div>
}

export default Container
