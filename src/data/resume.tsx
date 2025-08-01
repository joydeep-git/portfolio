import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Joydeep Das",
  initials: "JD",
  url: "https://joy-deep.vercel.app",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Full Stack Developer",
  summary:
    "Full Stack developer with expertise in Node.js, Next.js, Typescript and PostgresSQL.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "Node.js",
    "Typescript",
    "JavaScript",
    "React.js",
    "Redux",
    "PostgresSQL",
    "Tailwind CSS",
    "MongoDB",
    "Firebase",
    "Express"
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home"
    },
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
        url: "https://leetcode.com/u/3rrors/",
        icon: Icons.leetcode,
        navbar: false
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
        icon: Icons.resume,
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
          "Developed Karosauda and Karosauda Admin panel. Optimized performance and manage API calls and cache.",
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
    // {
    //   school: "Magra Uttam Chandra High School",
    //   href: "https://school.banglarshiksha.gov.in/ws/website/index/19121516601",
    //   degree: "Higher Secondary",
    //   logoUrl: "/muchs.jpeg",
    //   start: "2016",
    //   end: "2018",
    // },
  ],
  projects: [
    {
      title: "Nestfinder - A Property Listing Website",
      href: "https://nestfinder.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A feature-rich property listing platform with robust authentication, secure token validation, and seamless property management. Users can register, edit, and delete property listings while enjoying a smooth and interactive experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "Redux",
        "Tanstack Query",
        "React-hook-form",
        "Firebase",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nestfinder.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/joydeep-git/nestfinder-frontend",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/nestfinder.png",
      video:
        "",
    },
    {
      title: "Nestfinder Backend API",
      href: "https://github.com/joydeep-git/nestfinder-backend",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A scalable Node.js backend built with OOP principles, featuring JWT authentication, secure cookies, and MongoDB integration for efficient data management.",
      technologies: [
        "Node.js",
        "Typescript",
        "Express",
        "JWT",
        "Cookies",
        "MongoDB",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "GitHub",
          href: "https://github.com/joydeep-git/nestfinder-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/node-js.svg",
      video: "",
    },
    {
      title: "E-commerce Store",
      href: "https://jd-elecdroid-store-react.netlify.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A fully responsive e-commerce platform with user authentication, product browsing, cart management, filtering, and sorting features for a seamless shopping experience. Built with React.js, it leverages Firebase for authentication and backend services, while SCSS ensures a modern and visually appealing UI.",
      technologies: [
        "React.js",
        "JavaScript",
        "SCSS",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://jd-elecdroid-store-react.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/joydeep-git/elecdroid-store_react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/elecdroid.png",
      video: "",
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
  hackathons: [
    // {
    //   title: "Hackathon",
    //   dates: "June 10th, 2025",
    //   location: "Kolkata, India",
    //   description:
    //     "Developed a custom admin interface <a href='http://URL.co/'>NAME</a>.",
    //   image:
    //     "URL.jpg",
    //   win: "1st Place",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/joydeep-git",
    //     },
    //   ],
    // },
  ],
} as const;
