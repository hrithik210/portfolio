"use client";
import { cn } from "@/lib/utils";
import { skills } from "@/data/grid-items";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("w-full px-4 sm:px-6 md:px-8", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  return (
    <div
      className={cn(
        `w-full relative overflow-hidden
         rounded-2xl group/bento hover:shadow-2xl hover:shadow-purple-900/20
         transition-all duration-500 shadow-xl shadow-black/80 justify-between flex flex-col
         border border-gray-800/50 hover:border-purple-500/30 backdrop-blur-sm
         before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-900/5 before:to-black/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`,
        className
      )}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0f0f0f 25%, #1a1a1a 50%, #0d0d0d 75%, #000000 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite',
        minHeight: 'auto'
      }}
    >
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.8; }
          50% { opacity: 0.9; }
          75% { opacity: 0.7; }
        }
      `}</style>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-purple-600/10 blur-sm animate-pulse"></div>
      </div>
      
      <div className="w-full h-full relative z-10">
        <div className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition-all duration-500 relative flex flex-col w-full h-full px-4 sm:px-6 md:px-8 py-8 sm:py-10'
        )}>
          <div className="font-mono font-light text-gray-400 text-sm md:text-sm lg:text-base z-10 tracking-wider uppercase">
            {description}
          </div>
          <div 
            className="font-mono font-bold text-gray-100 text-lg lg:text-2xl z-10 mb-6 tracking-tight"
            style={{ 
              textShadow: '0 0 10px rgba(147, 51, 234, 0.2), 0 0 20px rgba(147, 51, 234, 0.1)',
              animation: 'flicker 3s ease-in-out infinite'
            }}
          >
            {title}
          </div>
          
          {id === 3 && (
            <div className="w-full mt-auto relative">
              {/* Enhanced glow background with multiple layers */}
              {hoveredSkill && (
                <>
                  <div className="absolute inset-0 bg-purple-600/8 blur-2xl rounded-3xl transition-all duration-500 z-0 animate-pulse"></div>
                  <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-2xl transition-all duration-300 z-0"></div>
                </>
              )}
              
              {/* Animated grid pattern background */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              ></div>
              
              <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`py-3 px-5 text-sm lg:text-base font-mono
                     rounded-xl whitespace-nowrap cursor-pointer
                     transition-all duration-500 transform relative overflow-hidden
                     ${hoveredSkill === skill
                       ? 'bg-gradient-to-r from-purple-600/70 via-blue-500/60 to-purple-600/70 text-white scale-110 shadow-lg shadow-purple-500/20 font-bold border border-purple-400/40'
                       : 'bg-black/80 text-gray-300 border border-gray-700/60 hover:border-purple-500/40 backdrop-blur-sm hover:bg-gray-900/60'}
                     ${hoveredSkill && hoveredSkill !== skill ? 'opacity-40 scale-95' : 'opacity-100'}
                    `}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      textShadow: hoveredSkill === skill ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Glitch effect overlay for hovered skill */}
                    {hoveredSkill === skill && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    )}
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
              
              {/* Enhanced bottom effects */}
              <div className="relative mt-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
                <div className="h-px w-full mt-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm"></div>
                {/* Flickering accent dots */}
                <div className="absolute left-1/4 -top-1 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute right-1/3 -top-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute left-3/4 -top-1 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Corner accent lines */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-purple-500/30 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-500/30 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};