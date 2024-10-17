import React from 'react'
import Button from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa'
import { BottomBar } from './Bottom-bar'


const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 relative' id='contact'>
        <div className='w-full left-0 absolute -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>

        <div className='flex flex-col items-center'>
            <h2 className='heading lg:max-w-[45vw]'>
                <span className='text-purple '> Connect </span> with me
            </h2>
            <p className='text-white-200 md:top-10 my-5 text-center font-medium'>get in touch</p>
            <a href="mailto:hrithikkumar79@outlook.com">
                <Button 
                    title='Connect with me'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
            <div className="relative z-40">
                <BottomBar />
            </div>
        </div>
    </footer>
  )
}

export default Footer