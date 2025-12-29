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
      "Start with an infinite canvas for big ideas, or use pages to organize your thoughts into structured documents.",
    size: "large",
  },
  {
    icon: FaBoltLightning,
    title: "Lightning Fast",
    description:
      "Buttery smooth performance with zero lag. Optimized rendering ensures your creativity flows without interruption.",
    size: "large",
  },
  {
    icon: MdOutlineWifiOff,
    title: "Work Offline",
    description:
      "No internet? No problem. GoDraw works completely offline and syncs when you're back.",
    size: "large",
  },
  {
    icon: MdSdStorage,
    title: "Persistent Storage",
    description:
      "Your drawings are automatically saved to your browser's local storage. Never lose an idea.",
    size: "large",
  },
  {
    icon: FaDownload,
    title: "Png , Svg and Pdf Export",
    description:
      "Export your creations in PNG, SVG, or PDF format for easy sharing, printing, or archiving.",
    size: "large",
  },
  {
    icon: FaIcons,
    title: "Bundles of SVGs",
    description:
      "Access a massive library of hand-drawn sketchy icons and shapes. Drag, drop, and customize them to fit your style.",
    size: "large",
  },
  {
    icon: FaMobile,
    title: "Work on all devices",
    description:
      "Use GoDraw seamlessly across your phone, tablet, and desktop. Your work syncs everywhere.",
    size: "large",
  },
  {
    icon: FaToolbox,
    title: "Powerful Tools",
    description:
      "Use a wide range of powerful drawing and editing tools to bring your ideas to life.",
    size: "large",
  },
  {
    icon: FaFaceSmile,
    title: "Simple & Easy",
    description:
      "Zero learning curve. The interface is designed to get out of your way so you can focus on creativity.",
    size: "large",
  },
];

export default function Features() {
  return (
    <div className="sketchy-container" id="features">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Everything you need to{" "}
          <span className="relative inline-block text-primary">create</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful tools wrapped in a simple, sketchy interface.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`${
              feature.size === "large"
                ? "lg:col-span-2"
                : feature.size === "medium"
                  ? "lg:col-span-2"
                  : "col-span-1"
            }`}
          >
            <SketchyCard className="h-full">
              <div
                className={`flex ${
                  feature.size === "large"
                    ? "flex-col sm:flex-row items-start sm:items-center gap-6"
                    : "flex-col items-start"
                }`}
              >
                <div
                  className={`${
                    feature.size === "large" ? "w-20 h-20" : "w-14 h-14"
                  } bg-primary/10 rounded-full
                    flex items-center justify-center mb-4 sm:mb-0`}
                >
                  <feature.icon
                    className={`${
                      feature.size === "large" ? "w-10 h-10" : "w-7 h-7"
                    } text-primary`}
                  />
                </div>

                <div className={feature.size === "large" ? "flex-1" : ""}>
                  <h3
                    className={`${
                      feature.size === "large" ? "text-2xl" : "text-xl"
                    } font-bold text-foreground mb-2 mt-2`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SketchyCard>
          </div>
        ))}
      </div>
    </div>
  );
}
