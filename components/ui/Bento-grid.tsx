"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./grradient-bg";
import { GlobeDemo } from "./Grid-Globe";
import { skills } from "@/data/grid-items";
import {useState } from "react";
import animationData from "@/data/confetti.json";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
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
  id? : number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied , setCopied] = useState(false);

  const handleCopy = () => {
    const text  = "hrithikkumar79@outlook.com"
    navigator.clipboard.writeText(text);

    setCopied(true);
  }
  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden
        rounded-3xl group/bento hover:shadow-xl 
        transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4
        border border-white/[0.1]`,
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,28,45,1) 35%, rgba(0,212,255,1) 100%)'
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName , 'object-cover' , 'object-center')}
            />
          )}
        </div>
        <div  className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
             <img 
             src={spareImg}
             alt={spareImg}
             className={'object-cover object-center w-full h-full'}
             />
          )}
        </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
            </BackgroundGradientAnimation>
          )}

          <div className={cn(titleClassName , 
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-sm lg:text-base z-10">
              {description}
            </div>

            <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 lg:-mt-4">
              {title}
            </div>

            {id ===2 && ( <GlobeDemo  />)}

            {id ===3 && (
                <div className="w-full max-w-4xl mx-auto p-6  rounded-lg">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="py-2 px-4 text-sm lg:text-base 
                                 bg-[#10132E] text-white rounded-full
                                 opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie options={{
                    loop : copied ,
                    autoplay : copied,
                    animationData ,
                    rendererSettings : {
                      preserveAspectRatio : "xMidYMid slice"
                    }

                  }} />
                </div>
                <Button title={copied ? "Email copied" : "Copy my email"}
                icon = { <IoCopyOutline /> } 
                position="left"  
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}/>
            </div>
            )}
          
      </div>
    </div>
  </div>
  );
};
