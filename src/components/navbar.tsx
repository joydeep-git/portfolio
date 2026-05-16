import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex items-end justify-center pb-4">
      {/* Scrollable container for very small screens */}
      <div className="pointer-events-auto w-full max-w-[calc(100vw-2rem)] overflow-x-auto scrollbar-none flex justify-center">
        <Dock className="z-50 flex min-h-full h-full items-center gap-1 px-3 bg-background border border-border/60 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.05)] whitespace-nowrap">
          {/* Nav pages */}
          {DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-11"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* Separator */}
          <div className="h-6 w-px bg-border mx-1 flex-shrink-0" />

          {/* Social links */}
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      target="_blank"
                      href={social.url}
                      aria-label={name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 sm:size-11 flex items-center justify-center"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
        </Dock>
      </div>
    </div>
  );
}
