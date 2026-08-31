import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { cn } from "@/lib/utils";

export interface WaveFieldProps {
  headline?: string;
  caption?: string;
  className?: string;
}

/**
 * Interactive canvas "signal field": a live monitoring motif that reacts to
 * the pointer. Rendering is client-only (useEffect), so SSR ships the frame
 * and copy with no canvas work.
 */
export function WaveField({
  headline = "ALWAYS MONITORING",
  caption = "Move across the field. Every line is a signal the control room is watching.",
  className = "",
}: WaveFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);

  const pointerRef = useRef({ x: -2000, y: -2000, targetX: -2000, targetY: -2000 });
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId = 0;
    let time = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.contentRect;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }
    });
    resizeObserver.observe(container);

    const render = () => {
      if (isRunningRef.current) time += 0.015;

      const width = container.clientWidth;
      const height = container.clientHeight;
      const pointer = pointerRef.current;

      pointer.x += (pointer.targetX - pointer.x) * 0.1;
      pointer.y += (pointer.targetY - pointer.y) * 0.1;

      ctx.fillStyle = "#0f1418";
      ctx.fillRect(0, 0, width, height);

      const lines = 30;
      const stepY = height / (lines + 1);

      for (let i = 0; i < lines; i++) {
        const yBase = stepY * (i + 1);
        ctx.beginPath();
        const points = 96;
        const stepX = width / points;

        for (let p = 0; p <= points; p++) {
          const x = p * stepX;
          const dx = x - pointer.x;
          const dy = yBase - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = dist < 240 ? (1 - dist / 240) * 34 : 0;

          const wave =
            Math.sin(p * 0.1 + time + i * 0.2) * 16 + Math.cos(p * 0.05 - time * 0.8) * 11;
          const y = yBase + wave - influence;

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const t = i / lines;
        const alpha = 0.1 + t * 0.32;
        // Brand green fading into cool officer grey down the field.
        ctx.strokeStyle =
          i % 4 === 0
            ? `rgba(0, 191, 99, ${alpha + 0.12})`
            : `rgba(226, 232, 236, ${alpha * 0.75})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          pointerRef.current.targetX = e.clientX - rect.left;
          pointerRef.current.targetY = e.clientY - rect.top;
        }
      }}
      onMouseLeave={() => {
        pointerRef.current.targetX = -2000;
        pointerRef.current.targetY = -2000;
      }}
      className={cn(
        "relative flex h-[380px] w-full select-none flex-col justify-between overflow-hidden border border-ink-border bg-ink",
        className,
      )}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />

      <div className="relative flex items-start justify-between gap-4 p-5">
        <p className="max-w-xs text-sm text-ink-muted">{caption}</p>
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          aria-pressed={!isRunning}
          className="label flex shrink-0 items-center gap-2 border border-ink-border bg-ink/70 px-3 py-2 text-[0.6rem] text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink-border/60"
        >
          {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {isRunning ? "Freeze" : "Run"}
        </button>
      </div>

      <div className="relative p-5">
        <p className="font-display text-[clamp(1.6rem,5vw,3.2rem)] leading-none tracking-[-0.03em] text-ink-foreground">
          {headline}
        </p>
      </div>
    </div>
  );
}

export default WaveField;
