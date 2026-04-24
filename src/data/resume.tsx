import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export const DATA = {
  name: "Joydeep Das",
  initials: "JD",
  url: "https://joy-deep.vercel.app",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description: "Full Stack Developer",
  summary: "Full Stack developer with expertise in Node.js, Typescript, Prisma, Redis, PostgreSQL, Docker and AWS.",
  avatarUrl: "/me.png",

  skillCategories: [
    {
      category: "Backend",
      skills: [
        { icon: "/nodejs.png", title: "Node.js" },
        { icon: "/typescript.png", title: "TypeScript" },
        { icon: "/prisma.png", title: "Prisma ORM" },
        { icon: "/redis.png", title: "Redis" },
        { icon: "/docker.png", title: "Docker" },
        { icon: "/express.png", title: "Express.js" },
        { icon: "/jwt.png", title: "JWT" },
      ],
    },
    {
      category: "Database",
      skills: [
        { icon: "/postgresql.png", title: "PostgreSQL" },
        { icon: "/mongodb.png", title: "MongoDB" },
      ],
    },
    {
      category: "Integrations & Cloud",
      skills: [
        { icon: "/aws.png", title: "AWS" },
        { icon: "/gemini.png", title: "Gemini AI" },
        { icon: "/cashfree.png", title: "Cashfree payments" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { icon: "/next.js.png", title: "Next.js" },
        { icon: "/redux.png", title: "Redux" },
        { icon: "/tailwind.png", title: "Tailwind CSS" },
        { icon: "/framer.png", title: "Framer Motion" },
      ],
    },
  ],

  // Legacy flat skills list (kept for compatibility)
  skills: [
    { icon: "/nodejs.png", title: "Node.js" },
    { icon: "/typescript.png", title: "TypeScript" },
    { icon: "/express.png", title: "Express.js" },
    { icon: "/prisma.png", title: "Prisma ORM" },
    { icon: "/docker.png", title: "Docker" },
    { icon: "/redis.png", title: "Redis" },
    { icon: "/postgresql.png", title: "PostgreSQL" },
    { icon: "/mongodb.png", title: "MongoDB" },
    { icon: "/jwt.png", title: "JWT" },
    { icon: "/aws.png", title: "AWS" },
    { icon: "/gemini.png", title: "Gemini AI" },
    { icon: "/next.js.png", title: "Next.js" },
    { icon: "/redux.png", title: "Redux" },
    { icon: "/tailwind.png", title: "Tailwind CSS" },
  ],

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home"
    },
  ],
  contact: {
    email: "joydeepdas@zohomail.com",
    tel: "+91 6290589624",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/joydeep-git",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joy-deepdas/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/ALTONIX/",
        icon: Icons.leetcode,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/joy_deep_19",
        icon: Icons.x,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/JOYDEEP_DAS_RESUME.pdf",
        icon: Icons.resumePng,
        navbar: true
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:joydeepdas@zohomail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Brihat Infotech",
      href: "https://brihatinfotech.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/brihat_infotech.jpeg",
      start: "June 2025",
      end: "Present",
      description:
        "Developed Karosauda and Karosauda Admin panel. Optimised performance and manage API calls and cache."
    },
    {
      company: "Digital Woods",
      href: "https://digitalwoods.io/",
      badges: [],
      location: "Siliguri",
      title: "Front-end Developer",
      logoUrl: "/digitalwoods.jpg",
      start: "Feb 2024",
      end: "Dec 2024",
      description:
        "Contributed to the development of Digital Woods HUB and DW Admin Panel. Worked on multiple projects for international clients and developed company website",
    },
  ],
  education: [
    {
      school: "Burdwan University",
      href: "",
      degree: "Bachelor of Science",
      logoUrl: "/burdwanUniversity.jpeg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "NewsGlance - AI news Platform",
      href: "https://newsglance.vercel.app",
      dates: "2026",
      active: true,
      description:
        "A full-stack real-time AI based news platform. Features include category-wise browsing (Tech, Business, Sports, Politics), article search, single article view, and a responsive card-based UI. Built with Next.js and powered by a Node.js backend with PostgreSQL for data persistence and Redis for caching news feeds.",
      technologies: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "Docker",
        "AWS",
        "Next.js",
        "Redux",
        "TanStack",
        "Shadcn UI",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://newsglance.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/joydeep-git/newsglance-api",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/joydeep-git/newsglance-web",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/newsglance.png",
      video: "",
    },
    {
      title: "Nestfinder - A Property Listing Platform",
      href: "https://nestfinder.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A feature-rich property listing platform with robust authentication, secure token validation, and seamless property management. Users can register, edit, and delete property listings while enjoying a smooth and interactive experience.",
      technologies: [
        "Node.js",
        "Typescript",
        "Express",
        "JWT",
        "MongoDB",
        "Next.js",
        "Redux",
        "Tanstack Query",
        "Supabase",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nestfinder.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/joydeep-git/nestfinder-backend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/joydeep-git/nestfinder-frontend",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/nestfinder.png",
      video:
        "",
    },
    {
      title: "YouTube Clone",
      href: "https://jd-youtube-clone-react.netlify.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A fully functional YouTube clone with user authentication, video search, and a history page to track watched videos. Built with React.js and Tailwind CSS for a modern and responsive UI, it integrates Firebase for authentication and data storage, along with the YouTube Data API for fetching video content.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "Google API",
      ],
      links: [
        {
          type: "Website",
          href: "https://jd-youtube-clone-react.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/joydeep-git/youtube-clone_react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/youtube-clone.png",
      video: "",
    },
  ],
} as const;
