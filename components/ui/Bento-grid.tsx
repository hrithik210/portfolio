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
        rounded-3xl group/bento hover:shadow-xl
        transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col
        border border-white/[0.1]`,
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,28,45,1) 35%, rgba(0,212,255,1) 100%)',
        minHeight: 'auto'
      }}
    >
      <div className="w-full h-full">
        <div className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col w-full h-full px-4 sm:px-6 md:px-8 py-8 sm:py-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-sm lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-2xl z-10 mb-6">
            {title}
          </div>
          {id === 3 && (
            <div className="w-full mt-auto relative">
              {/* Glow effect background */}
              {hoveredSkill && (
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-3xl transition-all duration-300 z-0"></div>
              )}
              
              <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`py-2.5 px-4 text-sm lg:text-base
                      rounded-full whitespace-nowrap
                      transition-all duration-300 transform
                      ${hoveredSkill === skill 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white scale-110 shadow-lg shadow-cyan-500/50 font-medium border-none' 
                        : 'bg-[#10132E]/80 text-white/90 border border-white/10 hover:border-cyan-500/50'}
                      ${hoveredSkill && hoveredSkill !== skill ? 'opacity-50' : 'opacity-100'}
                    `}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Bottom glow line */}
              <div className="h-px w-full mt-6 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};