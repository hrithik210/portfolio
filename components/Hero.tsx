'use client'

import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { IconBrandLeetcode } from "@tabler/icons-react"
import Image from "next/image"
import Grid from "./Grid"

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
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.05; }
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #0f0f0f 25%, #1a1a1a 50%, #0d0d0d 75%, #000000 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 12s ease infinite'
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.01]" />
          
          {/* Enhanced animated orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/3 rounded-full blur-3xl"
            style={{ animation: 'subtlePulse 6s ease-in-out infinite' }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-600/3 rounded-full blur-3xl"
            style={{ animation: 'subtlePulse 8s ease-in-out infinite', animationDelay: '2s' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-gray-600/2 rounded-full blur-2xl"
            style={{ animation: 'subtlePulse 10s ease-in-out infinite', animationDelay: '4s' }}
          />
          
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-10 left-10 w-px h-20 bg-purple-500 rotate-45"></div>
            <div className="absolute top-20 right-20 w-px h-16 bg-blue-500 -rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-px h-12 bg-gray-500 rotate-12"></div>
            <div className="absolute bottom-10 right-10 w-px h-24 bg-purple-500 -rotate-12"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-16">
              
              {/* Text Content */}
              <div className="max-w-2xl space-y-8 text-center lg:text-left"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl font-bold font-mono">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple  to-gray-200"
                      style={{ textShadow: '0 0 20px rgba(147, 51, 234, 0.1)' }}
                    >
                      Bonjour
                    </span>
                    <span className="ml-4 inline-block" style={{ animation: 'float 3s ease-in-out infinite' }}>👋</span>
                  </h1>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-200 font-medium font-mono tracking-tight">
                    I&apos;m <span className="text-purple font-semibold relative">
                     
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-purple-500/60 to-transparent"></div>
                    </span> Hrithik
                  </h2>

                  <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-mono">
                    A Full Stack <span className="text-purple-400 font-medium relative">
                      Developer
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent"></div>
                    </span> exploring 
                    the future of <span className="text-blue-400 font-medium relative">
                      Web3
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent"></div>
                    </span>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="pt-8">
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 rounded-xl bg-black/60 border border-gray-800/40 hover:bg-gray-900/60 hover:border-purple-500/20 transition-all duration-500 hover:scale-110 backdrop-blur-sm overflow-hidden"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)'
                        }}
                        aria-label={link.title}
                      >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                        
                        <div className="relative w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300">
                          {link.icon}
                        </div>
                        
                        {/* Enhanced tooltip */}
                        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-300 bg-black/90 px-3 py-2 rounded-lg whitespace-nowrap border border-gray-700/50 backdrop-blur-sm">
                          {link.title}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-gray-700/50 rotate-45"></div>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96"
                  style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}
                >
                  {/* Multiple layered glow effects */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/8 to-blue-500/6 blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/4 to-blue-500/4 blur-2xl" style={{ animation: 'glow 4s ease-in-out infinite' }}></div>
                  
                  {/* Enhanced border effect */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-800/30 shadow-2xl shadow-black/80 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src="/aizen_sosuke.jpg"
                      alt="Profile Image"
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-purple-500/30 opacity-60"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-blue-500/30 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}