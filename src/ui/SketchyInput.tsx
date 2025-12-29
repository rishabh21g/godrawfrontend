import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface SketchyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SketchyInput = forwardRef<HTMLInputElement, SketchyInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-foreground">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-card border-2 border-primary",
            "rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "placeholder:text-muted-foreground/60",
            "transition-all duration-200",
            "hover:border-primary-light",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

SketchyInput.displayName = "SketchyInput";

export default SketchyInput;
