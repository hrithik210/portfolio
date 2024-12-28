"use client"

import { cn } from "@/lib/utils";
import { skills } from "@/data/grid-items";

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
            <div className="w-full mt-auto">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="py-2.5 px-4 text-sm lg:text-base 
                             bg-[#10132E] text-white rounded-full
                             opacity-70 hover:opacity-100 transition-all duration-300
                             hover:scale-105 transform
                             whitespace-nowrap
                             border border-white/10 hover:border-white/20
                             shadow-lg hover:shadow-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

