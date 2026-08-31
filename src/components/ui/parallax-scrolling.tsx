import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import { cn } from "@/lib/utils";

export interface ParallaxLayersProps {
  children: ReactNode;
  className?: string;
  /** yPercent travel for layers 1 to 4, slowest layer last. */
  depths?: [number, number, number, number];
}

/**
 * Scroll-linked parallax container.
 * Children mark themselves with data-parallax-layer="1..4"; layer 1 travels
 * furthest (background) and layer 4 the least (foreground copy).
 * Everything runs in useEffect so SSR renders the static, readable layout.
 */
export function ParallaxLayers({
  children,
  className,
  depths = [64, 46, 30, 8],
}: ParallaxLayersProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = rootRef.current;
    if (!trigger) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger, start: "0% 0%", end: "100% 0%", scrub: 0 },
      });

      depths.forEach((yPercent, idx) => {
        const layer = trigger.querySelectorAll(`[data-parallax-layer="${idx + 1}"]`);
        if (layer.length) tl.to(layer, { yPercent, ease: "none" }, idx === 0 ? undefined : "<");
      });
    }, trigger);

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ctx.revert();
    };
  }, [depths]);

  return (
    <div ref={rootRef} className={cn("relative isolate overflow-hidden", className)}>
      {children}
    </div>
  );
}

export default ParallaxLayers;
