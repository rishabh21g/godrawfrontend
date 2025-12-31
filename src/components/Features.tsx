import {
  FaUsers,
  FaInfinity,
  FaBoltLightning,
  FaDownload,
  FaIcons,
  FaFaceSmile,
  FaMobile,
  FaToolbox,
} from "react-icons/fa6";
import { MdOutlineWifiOff, MdSdStorage } from "react-icons/md";
import SketchyCard from "../ui/SketchyCard";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  size: "small" | "medium" | "large";
}

const features: Feature[] = [
  {
    icon: FaUsers,
    title: "Real-time Collaboration",
    description:
      "Draw together with friends or colleagues instantly. See their cursors move in real-time as you brainstorm together. Coming Soon!",
    size: "large",
  },
  {
    icon: FaInfinity,
    title: "Infinite & Page-based",
    description:
      "Start with an infinite canvas for big ideas, or use pages to organize your thoughts.",
    size: "large",
  },
  {
    icon: FaBoltLightning,
    title: "Lightning Fast",
    description:
      "Buttery smooth performance with zero lag. Optimized rendering ensures your creativity flows.",
    size: "large",
  },
  {
    icon: MdOutlineWifiOff,
    title: "Work Offline",
    description:
      "GoDraw works completely offline and syncs when you're back online.",
    size: "large",
  },
  {
    icon: MdSdStorage,
    title: "Persistent Storage",
    description: "Automatically saved to local storage. Never lose an idea.",
    size: "large",
  },
  {
    icon: FaDownload,
    title: "Export Anywhere",
    description: "Export as PNG, SVG, or PDF with one click.",
    size: "large",
  },
  {
    icon: FaIcons,
    title: "Sketchy Icons",
    description: "A huge library of hand-drawn SVG icons and shapes.",
    size: "large",
  },
  {
    icon: FaMobile,
    title: "All Devices",
    description: "Works beautifully on mobile, tablet, and desktop.",
    size: "large",
  },
  {
    icon: FaToolbox,
    title: "Powerful Tools",
    description: "Advanced tools designed for speed and creativity.",
    size: "large",
  },
  {
    icon: FaFaceSmile,
    title: "Simple UI",
    description: "Clean, minimal interface with zero learning curve.",
    size: "large",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Everything you need to{" "}
          <span className="text-primary inline-block">create</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Powerful tools wrapped in a simple, sketchy interface.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature) => (
          <div key={feature.title} className="lg:col-span-2">
            <SketchyCard className="h-full p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SketchyCard>
          </div>
        ))}
      </div>
    </section>
  );
}
