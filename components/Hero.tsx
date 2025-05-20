'use client'

import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { IconBrandLeetcode } from "@tabler/icons-react"
import Image from "next/image"

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a1e] to-[#1a1a3a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 gap-12">
        {/* Text Content */}
        <div className="max-w-2xl w-full space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-400">
              Bonjour 👋 
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
              I&apos;m <span className="text-purple-400">Ramanand</span> (a.k.a. Hrithik)
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              A Full Stack <span className="text-purple-400">Developer</span> exploring 
              the future of <span className="text-purple-400">Web3</span>
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
                  className="group relative p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                  aria-label={link.title}
                >
                  <div className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors">
                    {link.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30">
            <Image
              src="/aizen_sosuke.jpg" // Replace with your actual image path
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a1e] to-transparent" />
    </div>
  )
}