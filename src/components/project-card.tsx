import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Globe2, Github, Server, PlayCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

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

function getLinkIcon(type: string) {
  switch (type.toLowerCase()) {
    case "website":
      return <Globe2 className="size-4" />;
    case "backend":
      return <Server className="size-4" />;
    case "frontend":
    case "github":
      return <Github className="size-4" />;
    case "video":
      return <PlayCircle className="size-4" />;
    default:
      return <ExternalLink className="size-4" />;
  }
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
  // Collect all links including a Video button if video URL is provided
  const allLinks = [
    ...(links ?? []),
    ...(video
      ? [
          {
            type: "Video",
            href: video,
            icon: <PlayCircle className="size-4" />,
          },
        ]
      : []),
  ];

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      {/* Media block — full width image/video at top */}
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
            className="pointer-events-none mx-auto h-48 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="h-48 w-full overflow-hidden object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : null}
      </Link>

      {/* Content */}
      <CardHeader className="px-4 pt-4 pb-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold leading-tight">{title}</CardTitle>
          <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5 shrink-0">{dates}</span>
        </div>
        <div className="hidden font-sans text-xs underline print:visible">
          {link?.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-1">
          {description}
        </Markdown>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-4 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-xs font-medium"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4">
        {allLinks.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {allLinks.map((l, idx) => (
              <Link href={l.href} key={idx} target="_blank">
                <Badge
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity"
                  variant="default"
                >
                  {getLinkIcon(l.type)}
                  {l.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
