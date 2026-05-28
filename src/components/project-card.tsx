import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

// ── Tech stack auto-categorizer ─────────────────────────────────────────────
const TECH_MAP: [string, string[]][] = [
  ["Backend",        ["Node.js", "Express", "TypeScript", "JavaScript", "Prisma", "JWT", "Nodemailer", "REST", "GraphQL", "Python", "Go", "Rust", "Socket"]],
  ["Database",       ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "SQLite", "DynamoDB"]],
  ["Frontend",       ["Next.js", "React", "Redux", "Tailwind", "TanStack", "Tanstack", "Shadcn", "Framer", "Formik", "Vue", "Svelte", "Angular", "HTML", "CSS"]],
  ["Cloud & DevOps", ["Docker", "AWS", "Render", "Vercel", "Netlify", "CloudFront", "EC2", "S3", "CI/CD", "Kubernetes"]],
  ["AI",             ["Bedrock", "Gemini", "Claude", "OpenAI", "GPT", "LLM", "LangChain", "Polly", "Artificial"]],
  ["Payments",       ["Cashfree", "Stripe", "Razorpay", "PayPal"]],
];

// Color tokens for each category — light-mode only (forced theme)
const CATEGORY_STYLE: Record<string, { pill: string; label: string; dot: string }> = {
  "Backend":        { pill: "bg-blue-50 text-blue-700 border border-blue-200",     label: "text-blue-500",   dot: "bg-blue-400" },
  "Database":       { pill: "bg-emerald-50 text-emerald-700 border border-emerald-200", label: "text-emerald-500", dot: "bg-emerald-400" },
  "Frontend":       { pill: "bg-violet-50 text-violet-700 border border-violet-200",  label: "text-violet-500", dot: "bg-violet-400" },
  "Cloud & DevOps": { pill: "bg-orange-50 text-orange-700 border border-orange-200",  label: "text-orange-500", dot: "bg-orange-400" },
  "AI":             { pill: "bg-rose-50 text-rose-700 border border-rose-200",        label: "text-rose-500",   dot: "bg-rose-400" },
  "Payments":       { pill: "bg-amber-50 text-amber-700 border border-amber-200",     label: "text-amber-500",  dot: "bg-amber-400" },
  "Other":          { pill: "bg-gray-100 text-gray-600 border border-gray-200",       label: "text-gray-400",   dot: "bg-gray-400" },
};

const CATEGORY_ORDER = ["Backend", "Database", "Frontend", "Cloud & DevOps", "AI", "Payments", "Other"];

function categorizeTechs(technologies: readonly string[]) {
  const grouped = new Map<string, string[]>();

  for (const tech of technologies) {
    let matched = false;
    for (const [cat, keywords] of TECH_MAP) {
      if (keywords.some((kw) => tech.toLowerCase().includes(kw.toLowerCase()))) {
        if (!grouped.has(cat)) grouped.set(cat, []);
        grouped.get(cat)!.push(tech);
        matched = true;
        break;
      }
    }
    if (!matched) {
      if (!grouped.has("Other")) grouped.set("Other", []);
      grouped.get("Other")!.push(tech);
    }
  }

  return CATEGORY_ORDER.flatMap((cat) =>
    grouped.has(cat) ? [[cat, grouped.get(cat)!] as [string, string[]]] : []
  );
}

// ── Button style resolver ────────────────────────────────────────────────────
function getLinkStyle(type: string) {
  const t = type.toLowerCase();
  if (t === "website") return "bg-foreground text-background hover:bg-foreground/85";
  if (t.includes("postman")) return "bg-[#FF6C37] text-white hover:bg-[#e55d2a]";
  if (t === "video demo") return "bg-[#625DF5] text-white hover:bg-[#5250d4]";
  if (t === "video") return "bg-red-500 text-white hover:bg-red-600";
  if (t === "backend") return "bg-slate-800 text-white hover:bg-slate-700";
  if (t === "frontend") return "bg-slate-600 text-white hover:bg-slate-500";
  return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
}

// ── Component ────────────────────────────────────────────────────────────────
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const allLinks = [
    ...(links ?? []),
    ...(video
      ? [{ type: "Video", href: video, icon: <PlayCircle className="size-3" /> }]
      : []),
  ];

  const categorized = categorizeTechs(tags);

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-xl transition-all duration-300 ease-out">
      {/* ── Hero image / video ─────────────────────────────────── */}
      <Link
        target="_blank"
        href={href || "#"}
        className={cn("block cursor-pointer group relative overflow-hidden", className)}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none w-full h-52 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={900}
            height={500}
            className="w-full h-52 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
      </Link>

      {/* ── Header: title + year ────────────────────────────────── */}
      <CardHeader className="px-5 pt-4 pb-2">
        <div className="flex items-start justify-between gap-3">
          <Link target="_blank" href={href || "#"} className="hover:underline underline-offset-2">
            <h3 className="text-[15px] font-bold leading-snug">{title}</h3>
          </Link>
          <span className="shrink-0 mt-0.5 text-[11px] font-semibold text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {dates}
          </span>
        </div>

        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-1.5 leading-relaxed">
          {description}
        </Markdown>
      </CardHeader>

      {/* ── Tech stack — grouped by category ───────────────────── */}
      <CardContent className="px-5 pb-3">
        {categorized.length > 0 && (
          <div className="border-t pt-3 mt-1 space-y-2">
            {/* Section label */}
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground/70">
              Tech Stack
            </p>

            {/* Category rows */}
            <div className="flex flex-col gap-1.5">
              {categorized.map(([cat, techs]) => {
                const s = CATEGORY_STYLE[cat] ?? CATEGORY_STYLE["Other"];
                return (
                  <div key={cat} className="flex items-start gap-2">
                    {/* Category label col */}
                    <div className="flex items-center gap-1 w-[100px] shrink-0 mt-[3px]">
                      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", s.dot)} />
                      <span className={cn("text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap", s.label)}>
                        {cat}
                      </span>
                    </div>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "text-[11px] font-medium px-2 py-[2px] rounded-full leading-tight",
                            s.pill
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>

      {/* ── Action buttons ──────────────────────────────────────── */}
      <CardFooter className="px-5 pb-4 pt-0">
        {allLinks.length > 0 && (
          <div className="flex flex-row flex-wrap gap-2 w-full">
            {allLinks.map((l, idx) => (
              <Link href={l.href} key={idx} target="_blank">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold",
                    "transition-all duration-150 hover:scale-[1.04] active:scale-[0.98]",
                    getLinkStyle(l.type)
                  )}
                >
                  {/* Use the icon provided in resume.tsx directly */}
                  <span className="[&>svg]:size-3 flex-shrink-0">{l.icon}</span>
                  {l.type}
                </span>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
