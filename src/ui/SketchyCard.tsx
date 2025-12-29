import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface SketchyCardProps {
  children: ReactNode;
  className?: string;
}

export default function SketchyCard({ children, className }: SketchyCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-6 border-3 border-primary",
        "rounded-md",
        "shadow-sketchy",
        className,
      )}
    >
      {children}
    </div>
  );
}
