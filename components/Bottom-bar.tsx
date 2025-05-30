"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { IconBrandLeetcode } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-deck";

const data = [
  {
    title: "Resume",
    icon: <FileText />,
    href: "https://drive.google.com/file/d/1D_BbUzEN_ODn3o0uQqvV8V99EuZVtMTS/view"
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
];

export const BottomBar = () => {
  return (
    <FloatingDock  className="mt-10 z-30 border hover:border-0" 
      items={data} 
    />
  );
};