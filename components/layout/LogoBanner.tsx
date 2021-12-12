import React from 'react'
import Image from 'next/image'
import logoImage from '../../public/logo.png'
function LogoBanner() {
    return (
        <div className="container mx-auto">
  <div className="flex justify-center md:justify-between">
    <div className="flex flex-col items-center py-4 md:flex-row">
      <Image className="w-20 h-20 max-w-lg" src={logoImage} placeholder="blur" width={100} height={100} alt='Gptc Pmna Logo'/>
      <div className="text-center md:text-left">
        <p className="font-bold text-gray-800 uppercase md:text-2xl">Government</p>
        <p className="font-extrabold text-gray-800 uppercase md:text-3xl">Polytechnic College</p>
        <p className="font-bold text-gray-700 md:text-xl">Perinthalmanna</p>
      </div>
    </div>
  </div>
  <div className="flex"></div>
</div>
    )
}

export default LogoBanner
