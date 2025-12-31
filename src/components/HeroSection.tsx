import { useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SketchyBadge from "../ui/SketchyBadge";
import SketchyButton from "../ui/SketchyButton";

const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png",
  "/hero6.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full flex flex-col items-center justify-center py-4 sm:py-10">
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

      {/* Apple-style window with carousel */}
      <div className="w-full h-full mx-auto px-8 sm:px-0">
        <div className="bg-[#18181b] rounded-2xl shadow-xl border border-zinc-700 overflow-hidden">
          {/* Apple window controls */}
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-700">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          </div>
          <div className="relative w-full">
            <img
              src={heroImages[current]}
              alt={`Hero ${current + 1}`}
              className="w-full h-auto object-cover transition-all duration-300"
            />
            {/* Carousel Controls */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
              onClick={prevImage}
              aria-label="Previous"
              type="button"
            >
              <IoChevronBack size={16} />
            </button>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
              onClick={nextImage}
              aria-label="Next"
              type="button"
            >
              <IoChevronForward size={16} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === current ? "bg-primary" : "bg-zinc-500"
                  } transition`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
