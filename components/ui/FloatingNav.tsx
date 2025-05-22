"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItemType = {
  name: string;
  link: string;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    const scrollDifference = currentScrollY - lastScrollY;
    
    // Hide nav when near the top (within 150px) to avoid blocking hero
    if (currentScrollY < 150) {
      setVisible(false);
    } 
    // Show nav when scrolling up (but not too close to top)
    else if (scrollDifference < -10 && currentScrollY > 150) {
      setVisible(true);
    } 
    // Hide nav when scrolling down
    else if (scrollDifference > 10) {
      setVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  });

  // Handle smooth scrolling for anchor links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(link);
      if (element) {
        // Calculate offset to account for the floating nav
        const navHeight = 80; // Approximate height of the nav
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetTop = elementTop - navHeight;
        
        window.scrollTo({
          top: link === '#about' ? 0 : offsetTop, // Scroll to very top for hero/about
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            `flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-lg
            shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5
            items-center justify-center space-x-4 bg-neutral-900/80 backdrop-blur-md`,
            className
          )}
        >
          {navItems.map((navItem: NavItemType, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => handleClick(e, navItem.link)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
              )}
              {...(navItem.link.startsWith('http') && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};