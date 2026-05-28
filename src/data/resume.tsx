import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Joydeep Das",
  initials: "JD",
  url: "https://joy-deep.vercel.app",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description: "Full Stack Developer",
  summary: "Full Stack Developer with a backend, Artificial Intelligence and cloud focus — building production systems with Node.js, TypeScript, PostgreSQL, Redis, and AWS. Hands-on experience with AI integrations(AWS Bedrock, Google Gemini) and end-to-end security architecture. Proven ability to deliver and deploy real-world applications independently. Open to backend or full-stack roles.",
  avatarUrl: "/me.png",

  skillCategories: [
    {
      category: "Backend",
      skills: [
        { icon: "/nodejs.png", title: "Node.js" },
        { icon: "/typescript.png", title: "TypeScript" },
        { icon: "/prisma.png", title: "Prisma ORM" },
        { icon: "/express.png", title: "Express.js" },
        { icon: "/nodemailer.png", title: "Nodemailer" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { icon: "/aws.png", title: "AWS" },
        { icon: "/docker.png", title: "Docker" },
        { icon: "/render.jpeg", title: "Render" },
      ],
    },
    {
      category: "Security",
      skills: [
        { icon: "/jwt.png", title: "JWT" },
        { icon: "", title: "Argon2", lucideIcon: "ShieldCheck" },
        { icon: "", title: "Helmet.js", lucideIcon: "Shield" },
        { icon: "", title: "Rate Limiting", lucideIcon: "Gauge" },
        { icon: "", title: "CORS", lucideIcon: "Globe" },
        { icon: "", title: "OTP Validation", lucideIcon: "KeyRound" },
        { icon: "", title: "DDOS Protection", lucideIcon: "ShieldAlert" },
      ],
    },
    {
      category: "Database",
      skills: [
        { icon: "/postgresql.png", title: "PostgreSQL" },
        { icon: "/mysql.png", title: "MySQL" },
        { icon: "/redis.png", title: "Redis" },
        { icon: "/mongodb.png", title: "MongoDB" },
      ],
    },
    {
      category: "AI & LLM Integrations",
      skills: [
        { icon: "/claude.png", title: "Claude AI" },
        { icon: "/bedrock.png", title: "AWS Bedrock" },
        { icon: "/gemini.png", title: "Gemini AI" },
      ],
    },
    {
      category: "Payment Gateway",
      skills: [
        { icon: "/cashfree.png", title: "Cashfree payments" },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { icon: "/next.js.png", title: "Next.js" },
        { icon: "/redux.png", title: "Redux" },
        { icon: "/tailwind.png", title: "Tailwind CSS" },
        { icon: "/framer.png", title: "Framer Motion" },
        { icon: "/tanstack.png", title: "Tanstack Query" },
        { icon: "/formik.png", title: "Formik" },
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
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/brihat_infotech.jpeg",
      start: "June 2025",
      end: "August 2025",
      description:
        "Developed Karosauda and Karosauda Admin panel. Optimised performance and manage API calls and cache."
    },
    {
      company: "Cybergrove Solutions",
      href: "",
      badges: [],
      location: "Siliguri",
      title: "Software Developer",
      logoUrl: "",
      start: "February 2024",
      end: "December 2024",
      description: "Contributed to the development of Digital Woods HUB and DW Admin Panel. Developed internal application using Node.js and HubSpot CMS Api.",
    },
    {
      company: "iMerit Technology Services",
      href: "",
      badges: [],
      location: "Kolkata",
      title: "ITES Executive",
      logoUrl: "/imerit.png",
      start: "July 2021",
      end: "December 2022",
      description:"",
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
        "A live AI-powered news platform built alone, end to end. Redis-first caching cuts API calls by 80%+. AWS Bedrock for AI summarisation, Polly for TTS audio, Cashfree payments, JWT auth with token blacklisting — deployed via Docker on AWS EC2 behind CloudFront.",
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
          type: "Video Demo",
          href: "https://www.loom.com/share/2e0b390aaa1349018f3175eca94f9450",
          icon: <Icons.loom className="size-3" />,
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
        {
          type: "Postman Collection",
          href: "https://newsglance.apidog.io",
          icon: <Icons.postman className="size-3" />,
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
  ],
} as const;
