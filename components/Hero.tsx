'use client'

import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react"
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
    icon: <div className="w-6 h-6 font-bold text-current">LC</div>,
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
    <div className="bg-black min-h-screen overflow-hidden relative">
      {/* Majestic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>
      
      {/* Animated particles/stars */}
      <div className="absolute inset-0">
        {typeof window !== 'undefined' && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Majestic orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 py-20">
            
            {/* Majestic Text Content */}
            <div className="max-w-3xl space-y-12 text-center lg:text-left">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple via-gray-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    Bonjour
                  </span>
                  <span className="ml-6 inline-block animate-bounce text-4xl">👋</span>
                </h1>
                
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-purple to-white bg-clip-text text-transparent">
                    I'm{' '}
                  </span>
                  <span className="bg-gradient-to-r from-purple via-gray-400 to-white bg-clip-text text-transparent relative">
                    Hrithik
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-transparent rounded-full"></div>
                  </span>
                </h2>

                <p className="text-2xl sm:text-3xl leading-relaxed">
                  <span className="bg-gradient-to-r from-gray-300 via-white to-purple bg-clip-text text-transparent">
                    A Full Stack{' '}
                  </span>
                  <span className="bg-gradient-to-r from-purple via-purple-200 to-white bg-clip-text text-transparent font-semibold relative">
                    Developer
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                  </span>
                  <span className="bg-gradient-to-r from-white via-purple to-white bg-clip-text text-transparent">
                    {' '}exploring the future of{' '}
                  </span>
                  <span className="bg-gradient-to-r from-purple via-gray-400 to-white bg-clip-text text-transparent font-semibold relative">
                    Web3
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                  </span>
                </p>
              </div>

              {/* Majestic Social Icons */}
              <div className="pt-12">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-5 rounded-2xl bg-black/80 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 hover:scale-110 backdrop-blur-md transform hover:-translate-y-2"
                      style={{
                        boxShadow: '0 0 40px rgba(147, 51, 234, 0.1)',
                        animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                      }}
                      aria-label={link.title}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                      
                      <div className="relative w-7 h-7 text-gray-300 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                        {link.icon}
                      </div>
                      
                      <span className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent bg-black/90 px-4 py-3 rounded-xl whitespace-nowrap border border-purple-500/30 backdrop-blur-sm">
                        {link.title}
                        <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/90 border-l border-t border-purple-500/30 rotate-45"></div>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Majestic Profile Image */}
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] transform hover:scale-105 transition-transform duration-1000">
                {/* Epic glow effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-violet-500/15 to-indigo-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/10 to-violet-400/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Majestic border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/50 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-transparent to-violet-600/20 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="w-full h-full bg-gradient-to-br from-purple to-white flex items-center justify-center text-8xl">
                    <Image
                      src="/aizen_sosuke.jpg"
                      alt="Profile"
                      className="rounded-full object-cover w-full h-full"
                      width={450}
                      height={450}
                      priority
                    />
                  </div>
                </div>
                
                {/* Epic corner accents */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-l-4 border-t-4 border-purple-400/60 rounded-tl-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-4 border-b-4 border-violet-400/60 rounded-br-lg"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-indigo-400/40 rounded-tr-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/40 rounded-bl-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}