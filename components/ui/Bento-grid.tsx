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
        border border-gray-700/50`,
        className
      )}
      style={{
        background: 'rgb(17,24,39)',
        backgroundImage: 'linear-gradient(90deg, rgba(17,24,39,1) 0%, rgba(31,41,55,1) 50%, rgba(55,65,81,1) 100%)',
        minHeight: 'auto'
      }}
    >
      <div className="w-full h-full">
        <div className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col w-full h-full px-4 sm:px-6 md:px-8 py-8 sm:py-10'
        )}>
          <div className="font-sans font-extralight text-gray-300 text-sm md:text-sm lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-white text-lg lg:text-2xl z-10 mb-6">
            {title}
          </div>
          {id === 3 && (
            <div className="w-full mt-auto relative">
              {/* Glow effect background */}
              {hoveredSkill && (
                <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-3xl transition-all duration-300 z-0"></div>
              )}
              
              <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`py-2.5 px-4 text-sm lg:text-base
                      rounded-full whitespace-nowrap
                      transition-all duration-300 transform
                      ${hoveredSkill === skill 
                        ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white scale-110 shadow-md shadow-indigo-500/20 font-medium border-none' 
                        : 'bg-[#1f2937]/90 text-gray-200 border border-gray-700 hover:border-indigo-400/30'}
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
              <div className="h-px w-full mt-6 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};