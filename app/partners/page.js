import Image from 'next/image'
import React from 'react'
import partners from '../../public/partners.JPG'

const page = () => {
  return (
    <Image
    src={partners}
    alt='Head shot of Devin Resting on the wall during a swim workout'
    priority
    />
  )
}

export default page