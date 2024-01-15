import Image from 'next/image'
import React from 'react'
import results from '../../public/results.JPG'

const page = () => {
  return (
    <Image 
      src={results}
      alt='Devin holding his Kona 2nd place bowl at the awards'
      priority
    />
  )
}

export default page