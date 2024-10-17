"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { IconBrandLeetcode } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-deck";

const data = [
  {
    title: "Resume",
    icon: <FileText />,
    href: "https://drive.google.com/file/d/1h-N_6xBZG8TQsmSRQB3V2foD1FhKRT8_/view"
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
    href: "https://leetcode.com/studyplan/top-interview-150/"
  },
  {
    title: "Mail",
    icon: <Mail />,
    href: "mailto:hrithikkumar79@outlook.com"
  }
];

export const BottomBar = () => {
  return (
    <FloatingDock 
      mobileClassName="relative mt-10 z-30 border hover:border-0" 
      desktopClassName="relative mt-10 z-30 border hover:border-0" 
      items={data} 
    />
  );
};