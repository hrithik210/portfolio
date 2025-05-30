import { projects } from '@/data/grid-items'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
       <h1 className='heading'>
            Recent  <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-400'>Projects</span>
       </h1>
       <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-4'>
            {projects.map(({id ,title , des , img , iconLists , link}) => (
                <div className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex 
                    justify-center items-center sm:w-[570px] w-[80vw] ' key={id}>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex item-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative h-full w-full overflow-hiddenlg:rounded-3xl bg-[#13162d] '>
                                <img src="/bg.png" alt='/bg.png'/>
                            </div>
                            <img src={img} alt={title}  className='absolute inset-0 w-full h-full object-cover z-10'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base
                        line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm  line-clamp-2 '>
                            {des}
                        </p>
                        <div className='flex items-center justify-between
                        mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon , index) =>(
                                    <div key={icon} className='border border-white-/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{transform :`translateX(-5${5 * index *2 }px-)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>

                                ))}
                            </div>
                            <div className='flex justify-center'>
                                <p className='flex lg:text-xl md:sm text-sm text-purple'>Check live site</p>
                                <FaLocationArrow className='ms-3 color-[#CBACF9]'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
       </div>
    </div>
  )
}

export default RecentProjects