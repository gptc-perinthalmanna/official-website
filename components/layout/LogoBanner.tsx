import React from 'react'
import Image from 'next/image'
import logoImage from '../../public/logo.png'
function LogoBanner() {
    return (
        <div className="container mx-auto">
  <div className="flex justify-center md:justify-between">
    <div className="flex flex-col items-center md:flex-row py-4">
      <Image className="h-20 w-20 max-w-lg" src={logoImage} width={100} height={100} alt='Gptc Pmna Logo'/>
      <div className="text-center md:text-left">
        <p className="text-gray-800 font-bold md:text-2xl uppercase">Government</p>
        <p className="text-gray-800 font-extrabold md:text-3xl uppercase">Polytechnic College</p>
        <p className="text-gray-700 font-bold md:text-xl">Perinthalmanna</p>
      </div>
    </div>
  </div>
  <div className="flex"></div>
</div>
    )
}

export default LogoBanner
