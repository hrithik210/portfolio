"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <Link
      className={cn(
        "relative group cursor-pointer block",
        containerClassName
      )}
      href={href || "/"}
    >
      <div
        className="p-4 rounded-2xl border border-white/10 shadow-md 
                  group-hover:scale-105 group-hover:border-white/20
                  transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className={cn("relative", className)}>
          {children}
        </div>
      </div>
      
      {title && (
        <div className="mt-2 flex justify-center">
          <span className="rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 text-white text-xs font-bold">
            {title}
          </span>
        </div>
      )}
    </Link>
  );
};