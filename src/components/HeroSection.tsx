import { FaBoltLightning } from "react-icons/fa6";
import SketchyBadge from "../ui/SketchyBadge";
import SketchyButton from "../ui/SketchyButton";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-6 sm:p-10">
      {/* TEXT CONTENT */}
      <div className="w-full max-w-3xl mx-auto text-center px-2 sm:px-4">
        <div className="mb-4 flex justify-center">
          <SketchyBadge variant="primary">
            <FaBoltLightning className="w-4 h-4 mr-1" />
            Lightning-fast canvas
          </SketchyBadge>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Sketch your <span className="text-primary">ideas</span>
          <br className="hidden sm:block" />
          at the speed of thought
        </h1>

        <p className="text-base sm:text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
          The simplest way to draw, sketch, and take quick notes. No complexity,
          just a lightning-fast canvas for your creativity.
        </p>

        <div
          className="flex justify-center mb-8"
          onClick={() => window.open("https://www.godraw.app", "_blank")}
        >
          <SketchyButton
            variant="primary"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3"
          >
            Start Drawing
          </SketchyButton>
        </div>
      </div>

      {/* Apple-style window with image */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
        <div className="bg-[#18181b] rounded-2xl shadow-xl border border-zinc-700 overflow-hidden">
          {/* Apple window controls */}
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-700">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          </div>
          <div className="w-full">
            <img
              src="/hero.png"
              alt="Hero"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
