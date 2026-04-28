"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

type App = {
  name: string;
  src: string;
  bg: string;
  /**
   * If true, the source SVG is monochrome white (simple-icons /ffffff).
   * If false, source is multi-color (Wikipedia) and we apply a white-silhouette
   * filter to keep the tile grid cohesive.
   */
  whiteSource: boolean;
};

const APPS: App[] = [
  { name: "Netflix", src: "/images/streaming/netflix.svg", bg: "#E50914", whiteSource: true },
  { name: "Apple TV+", src: "/images/streaming/appletv.svg", bg: "#000000", whiteSource: true },
  { name: "Prime Video", src: "/images/streaming/primevideo.svg", bg: "#00A8E1", whiteSource: false },
  { name: "Disney+", src: "/images/streaming/disneyplus.svg", bg: "#001E58", whiteSource: false },
  { name: "Max", src: "/images/streaming/max.svg", bg: "#002BE7", whiteSource: true },
  { name: "Paramount+", src: "/images/streaming/paramountplus.svg", bg: "#0064FF", whiteSource: true },
  { name: "YouTube", src: "/images/streaming/youtube.svg", bg: "#FF0000", whiteSource: true },
  { name: "Pluto TV", src: "/images/streaming/plutotv.svg", bg: "#1B5BAB", whiteSource: false },
];

export function StreamingGrid() {
  return (
    <ul className="grid grid-cols-4 gap-2.5 sm:gap-3 list-none">
      {APPS.map((app, i) => (
        <motion.li
          key={app.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: 0.5,
            delay: 0.1 + i * 0.06,
            ease: EASE_OUT_EXPO,
          }}
        >
          <div
            className="relative aspect-square w-full rounded-[22%] overflow-hidden flex items-center justify-center transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.06]"
            style={{
              background: app.bg,
              boxShadow:
                "0 2px 6px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            aria-label={app.name}
            role="img"
          >
            <Image
              src={app.src}
              alt=""
              width={48}
              height={48}
              className="w-1/2 h-1/2 object-contain"
              style={
                app.whiteSource
                  ? undefined
                  : { filter: "brightness(0) invert(1)" }
              }
            />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
