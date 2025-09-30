"use client";
import React, { useRef, useEffect } from "react";

// AuroraCanvas.tsx — Type-safe (TypeScript) React component
// Updated to render a teal aurora wave effect matching your bg-gradient tailwind CSS

export type AuroraLayer = {
  base: number;
  amplitude: number;
  speed: number;
  opacity: number;
  start: string;
  end: string;
};

export type AuroraCanvasProps = {
  className?: string;
};

class ImprovedNoise {
  private p: Uint8Array;
  constructor() {
    this.p = new Uint8Array(512);
    const permutation = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ];
    for (let i = 0; i < 256; i++) this.p[256 + i] = this.p[i] = permutation[i];
  }
  private fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  private lerp(t: number, a: number, b: number) {
    return a + t * (b - a);
  }
  private grad(hash: number, x: number, y: number, z: number) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
  noise(x: number, y = 0, z = 0) {
    const p = this.p;
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);
    const A = p[X] + Y,
      AA = p[A] + Z,
      AB = p[A + 1] + Z;
    const B = p[X + 1] + Y,
      BA = p[B] + Z,
      BB = p[B + 1] + Z;
    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad(p[AA], x, y, z), this.grad(p[BA], x - 1, y, z)),
        this.lerp(
          u,
          this.grad(p[AB], x, y - 1, z),
          this.grad(p[BB], x - 1, y - 1, z)
        )
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(p[AA + 1], x, y, z - 1),
          this.grad(p[BA + 1], x - 1, y, z - 1)
        ),
        this.lerp(
          u,
          this.grad(p[AB + 1], x, y - 1, z - 1),
          this.grad(p[BB + 1], x - 1, y - 1, z - 1)
        )
      )
    );
  }
}

export default function AuroraCanvas({ className = "" }: AuroraCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const noise = new ImprovedNoise();

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const layers: AuroraLayer[] = [
      {
        base: 0.55,
        amplitude: 120,
        speed: 0.25,
        opacity: 0.6,
        start: "rgba(13,148,136,0.8)",
        end: "rgba(13,148,136,0)",
      },
      {
        base: 0.65,
        amplitude: 150,
        speed: 0.18,
        opacity: 0.5,
        start: "rgba(19, 78, 74,0.6)",
        end: "rgba(19, 78, 74,0)",
      },
    ];

    let raf: number;
    const draw = (time?: number) => {
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const t = (time || 0) * 0.001;

      layers.forEach((layer, idx) => {
        ctx.save();
        ctx.filter = `blur(${20 + idx * 10}px)`;
        ctx.beginPath();

        const points: [number, number][] = [];
        const step = Math.max(8, Math.round(W / 60));
        const baseY = H * layer.base;

        for (let x = 0; x <= W; x += step) {
          const nx = x / 200;
          const n1 = noise.noise(nx + t * layer.speed, idx * 10 + t * 0.1, 0);
          const n2 =
            0.5 * noise.noise(nx * 1.6 - t * 0.12, idx * 4 + t * 0.07, 0);
          const y =
            baseY + layer.amplitude * (n1 + n2) * Math.min(1.6, W / 900);
          points.push([x, y]);
        }

        if (points.length < 2) return;

        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2;
          const yc = (points[i][1] + points[i + 1][1]) / 2;
          ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
        }

        ctx.lineTo(W, H + 80);
        ctx.lineTo(0, H + 80);
        ctx.closePath();

        const g = ctx.createLinearGradient(
          0,
          baseY - layer.amplitude,
          0,
          baseY + layer.amplitude * 1.2
        );
        g.addColorStop(0, layer.start);
        g.addColorStop(1, layer.end);

        ctx.globalAlpha = layer.opacity;
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      });

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

// Usage with Tailwind background
// <section className="relative bg-gradient-to-tr from-zinc-900 via-zinc-900 to-teal-900">
//   <AuroraCanvas />
//   <YourTechstackContent />
// </section>
