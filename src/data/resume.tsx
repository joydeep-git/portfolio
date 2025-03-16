import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Joydeep Das",
  initials: "DV",
  url: "https://joydeep-dev.vercel.app/",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Full Stack Software Engineer. I love building things and helping people.",
  summary:
    "I started as a frontend developer specializing in React and Next.js. Over time, I expanded into backend development with Node.js, Express, and MongoDB. Now, I focus on building scalable full-stack applications and SaaS projects.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "Typescript",
    "Redux",
    "TanStack Query",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "https://leetcode.com/u/joydeep712/",
        icon: Icons.leetcode,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/joy_deep_19",
        icon: Icons.x,
        navbar: true,
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
      company: "Digital Woods",
      href: "https://digitalwoods.io/",
      badges: [],
      location: "Siliguri",
      title: "Front-end Developer",
      logoUrl: "/digitalwoods.jpg",
      start: "Feb 2024",
      end: "Dec 2024",
      description:
        "Developed and maintained multiple sections of the company website. Contributed to the development of Digital Woods HUB. Worked on multiple projects for international clients.",
    },
    {
      company: "iMerit",
      href: "https://digitalwoods.io/",
      badges: [],
      location: "Remote",
      title: "ITES Executive",
      logoUrl: "/imerit.jpeg",
      start: "July 2021",
      end: "Dec 2022",
      description:
        "Annotated Lidar, audio, image, and video data for AI/ML training with over 98% accuracy. Recognized for excellence with the 'Perfect Symphony Award'.",
    },
  ],
  education: [
    {
      school: "Burdwan University",
      href: "https://www.buruniv.ac.in/Demo/index_bucc.php",
      degree: "Bachelors of Science",
      logoUrl: "/burdwanUniversity.jpeg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Magra Uttam Chandra High School",
      href: "https://school.banglarshiksha.gov.in/ws/website/index/19121516601",
      degree: "Higher Secondary",
      logoUrl: "/muchs.jpg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
  ],
} as const;
