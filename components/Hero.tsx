import Image from 'next/image'

export default function Component() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a1e] overflow-hidden flex items-center">
     
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#2F1533] to-transparent"></div>
      
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      

      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-purple">Yokkoso Watashino Portfolio</span> society
          </h1>
          <p className="text-xl text-gray-300 mb-6 mt-2">
            I'm Ramanand (a.k.a. Hrithik) From India
          </p>
  
        </div>
        
    
        <div className="relative w-[400px] h-[400px]">
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