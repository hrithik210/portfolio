'use client'

import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { IconBrandLeetcode } from "@tabler/icons-react"
import Image from "next/image"
import { BentoGrid, BentoGridItem } from './ui/Bento-grid'
import { gridItems } from '@/data/grid-items'

const socialLinks = [
  {
    title: "Resume",
    icon: <FileText />,
    href: "https://drive.google.com/file/d/1hGMIQtPNEgHc7x8BYtVl8JERaRv8JV5w/view"
  },
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/hrithik210"
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    href: "https://x.com/Hrithik_018"
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/ramanand-nayak-b2a622259/"
  },
  {
    title: "Leetcode",
    icon: <IconBrandLeetcode />,
    href: "https://leetcode.com/u/ramanand_nayak/"
  },
  {
    title: "Mail",
    icon: <Mail />,
    href: "mailto:hrithikkumar79@outlook.com"
  }
]

export default function Hero() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900/20 to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          
          {/* Subtle animated orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-16">
              
              {/* Text Content */}
              <div className="max-w-2xl space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      Bonjour
                    </span>
                    <span className="ml-4">👋</span>
                  </h1>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-200 font-medium">
                    I&apos;m <span className="text-purple-400 font-semibold">Ramanand</span> (a.k.a. Hrithik)
                  </h2>

                  <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed">
                    A Full Stack <span className="text-purple-400 font-medium">Developer</span> exploring 
                    the future of <span className="text-purple-400 font-medium">Web3</span>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="pt-8">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        aria-label={link.title}
                      >
                        <div className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors">
                          {link.icon}
                        </div>
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-300 bg-gray-900 px-2 py-1 rounded whitespace-nowrap">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-800/50 shadow-2xl">
                    <Image
                      src="/aizen_sosuke.jpg"
                      alt="Profile Image"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Tech Stack
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto">
            <BentoGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gridItems.map(({id, title, className, imgClassName, titleClassName, img, spareImg}) => (
                <BentoGridItem
                  id={id}
                  key={id}
                  title={title}
                  description=""
                  className={`${className} h-32 md:h-36 bg-gray-900/30 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:bg-gray-800/30 hover:scale-105 backdrop-blur-sm rounded-xl`}
                  img={img}
                  imgClassName={`${imgClassName} opacity-70 group-hover:opacity-90 transition-opacity`}
                  titleClassName={`${titleClassName} text-base md:text-lg font-medium text-gray-200 group-hover:text-purple-300 transition-colors`}
                  spareImg={spareImg}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>
    </div>
  )
}