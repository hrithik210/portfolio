'use client'

import Image from 'next/image'
import { TextGenerateEffect } from './ui/text-generate-effect'

export default function Component() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a1e] overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#2F1533] to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-8 lg:mb-0">
          <TextGenerateEffect
            words="Yokkoso Watashino Portfolio society"
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
          />
          <p className="text-lg sm:text-xl text-gray-300 mb-4 font-semibold text-center ">
            I&apos;m Ramanand (a.k.a. Hrithik)
          </p>
          <div className='font-semibold text-base sm:text-lg text-center'>
          A Full Stack <span className='text-purple'>Developer</span> exploring the future of <span className='text-purple'>Web3</span>.
          </div>
        </div>
    
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] h-[300px] sm:h-[400px]">
        <Image
            src="/aizen1.png"
            alt="Portfolio image"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}