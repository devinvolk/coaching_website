import Image from 'next/image'
import React from 'react'
import coaching from '../../public/images/coaching.JPG'

const page = () => {
  return (
    <Image
    src={coaching}
    alt='Devin cycling up Hawii during the 2022 Ironman World Championships'
    priority
    />
  )
}

export default page