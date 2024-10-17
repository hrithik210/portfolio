export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "https://drive.google.com/file/d/1h-N_6xBZG8TQsmSRQB3V2foD1FhKRT8_/view" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Turning ideas into reality with clean code and practical solutions.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center items-center z-10",
      img: "",
      spareImg: "",
    },,
    {
      id: 6,
      title: "want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  
  export const projects = [
    {
      id: 1,
      title: "Medium-Blog Platform",
      des: "A full-stack blog platform with user authentication, allowing users to view and post blogs. Deployed on Cloudflare Workers and Vercel for scalability and performance.",
      img: "/medium-blog.png",
      iconLists: ["/re.svg", "/ts.svg", "/prisma.svg", "/cloudflare.svg", "/vercel.svg"],
      link: "https://medium-blog-blush-sigma.vercel.app/", 
    },
    {
      id: 2,
      title: "Chat-with-Website",
      des: "A chat application enabling real-time conversations with any website, utilizing Next.js, Redis for session management, and TypeScript for type safety.",
      img: "/chat-with-website.png",
      iconLists: ["/next.svg", "/re.svg", "/redis.svg", "/ts.svg", "/tail.svg","/vercel.svg"],
      link: "https://ai-chatbot-steel-six.vercel.app/",
    },
    {
      id: 3,
      title: "Movies Recommender System",
      des: "An advanced movie recommender system using collaborative filtering and content-based algorithms, optimized for performance and scalability.",
      img: "/movie-recommender.jpg", 
      iconLists: ["/python.svg", "/ml.jpg",],
      link: "https://github.com/hrithik210/Movies-recommender-system",
    },
    {
      id: 4,
      title: "Exploring and Predicting NYC Taxi Trip Durations",
      des: "Data exploration and machine learning models to predict trip durations using the NYC Taxi Trip Duration dataset.",
      img: "/taxi.jpg", 
      iconLists: ["/python.svg", "/ml.jpg",], 
      link: "https://github.com/hrithik210/Cab-fare-predictions",
    },
  ];
  
export const skills = [
    'JavaScript', 'TypeScript', 'React','Tailwind', 'Next.js',
    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'Docker',
    'Data Structures & Algorithms', 'Git', 'GitHub' ,'Python', 'HTML', 'CSS', 'MySQL',
    'AWS', 'Cloudflare workers'
  ]