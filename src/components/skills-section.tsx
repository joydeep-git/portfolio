"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Shield,
  Gauge,
  Globe,
  KeyRound,
  ShieldAlert,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

// Map of lucide icon name -> component
const LucideIconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Shield,
  Gauge,
  Globe,
  KeyRound,
  ShieldAlert,
};

interface Skill {
  readonly icon: string;
  readonly title: string;
  readonly lucideIcon?: string;
}

interface SkillCategory {
  readonly category: string;
  readonly skills: readonly Skill[];
}

interface SkillsSectionProps {
  skillCategories: readonly SkillCategory[];
  blurFadeDelay: number;
}

const categoryIcons: Record<string, string> = {
  "Backend": "🛠️",
  "Cloud & DevOps": "☁️",
  "Security": "🔐",
  "Frontend": "🎨",
  "Database": "🗄️",
  "AI & LLM Integrations": "🤖",
  "Payment Gateway": "💳",
};

export function SkillsSection({ skillCategories, blurFadeDelay }: SkillsSectionProps) {
  return (
    <div className="flex min-h-0 flex-col gap-y-5">
      <BlurFade delay={blurFadeDelay}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>

      <div className="flex flex-col gap-5">
        {skillCategories.map((category, catIdx) => (
          <BlurFade key={category.category} delay={blurFadeDelay + catIdx * 0.08}>
            <div className="flex flex-col gap-2">
              {/* Category header */}
              <div className="flex items-center gap-2">
                <span className="text-base">{categoryIcons[category.category] ?? "🔧"}</span>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skills row */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => {
                  const LucideComp = skill.lucideIcon ? LucideIconMap[skill.lucideIcon] : null;

                  return (
                    <BlurFade
                      key={`${category.category}-${skill.title}`}
                      delay={blurFadeDelay + catIdx * 0.08 + skillIdx * 0.03}
                    >
                      <Badge
                        className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium hover:bg-secondary/80 transition-colors"
                        variant="secondary"
                      >
                        {/* Show lucide icon if specified */}
                        {LucideComp && (
                          <LucideComp className="size-[17px] flex-shrink-0" />
                        )}

                        {/* Show PNG icon only if icon path is non-empty */}
                        {!LucideComp && skill.icon && (
                          <div className="size-[17px] relative flex-shrink-0">
                            <Image
                              fill
                              src={skill.icon}
                              alt={skill.title}
                              className="object-contain"
                              sizes="17px"
                            />
                          </div>
                        )}

                        <span>{skill.title}</span>
                      </Badge>
                    </BlurFade>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
