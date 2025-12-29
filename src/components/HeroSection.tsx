import { FaBoltLightning } from "react-icons/fa6";
import SketchyBadge from "../ui/SketchyBadge";
import SketchyButton from "../ui/SketchyButton";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-10 pb-20 flex flex-col items-center justify-start overflow-hidden">
      <div className="w-full px-4">
        {/* TEXT CONTENT */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <SketchyBadge variant="primary">
              <FaBoltLightning className="w-4 h-4 mr-1" />
              Lightning-fast canvas
            </SketchyBadge>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">
            Sketch your <span className="text-primary">ideas</span>
            <br />
            at the speed of thought
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The simplest way to draw, sketch, and take quick notes. No
            complexity, just a lightning-fast canvas for your creativity.
          </p>

          <div
            className="flex justify-center mb-16"
            onClick={() => window.open("https://www.godraw.app", "_blank")}
          >
            <SketchyButton
              variant="primary"
              size="lg"
              className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 flex items-center gap-3"
            >
              Start Drawing
            </SketchyButton>
          </div>
        </div>

        {/* VIDEO */}
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/a8eSgUGkfVU?autoplay=1&mute=1"
              title="Godraw Hero Section Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
