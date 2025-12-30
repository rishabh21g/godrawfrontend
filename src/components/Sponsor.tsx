import SketchyButton from "../ui/SketchyButton";
import { FaHeart, FaCoins } from "react-icons/fa6";

export default function Sponsor() {
  return (
    <section
      id="sponsor"
      className="w-full flex flex-col items-center justify-center py-10"
    >
      <div className="flex flex-col items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <FaHeart className="text-primary w-5 h-5" />
          <span className="text-lg md:text-xl font-semibold text-primary">
            GoDraw is built by a solo, non-funded developer.
          </span>
        </div>
        <span className="text-muted-foreground text-sm">
          If you love it, consider donating or investing to help it grow!
        </span>
      </div>
      <div className="flex gap-3 mt-2">
        <a
          href="https://github.com/sponsors/rishabh21g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SketchyButton
            variant="primary"
            size="sm"
            className="flex items-center gap-1"
          >
            <FaCoins className="w-4 h-4" />
            Donate
          </SketchyButton>
        </a>
        <a
          href="mailto:helpgodraw@gmail.com?subject=Investment%20in%20GoDraw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SketchyButton variant="outline" size="sm">
            Invest / Partner
          </SketchyButton>
        </a>
      </div>
    </section>
  );
}
