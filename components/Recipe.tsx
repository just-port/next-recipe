import React from 'react'
import Image from 'next/image'

const Recipe = ({ title, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} alt={title} />
    </div>
  )
}

export default Recipe
