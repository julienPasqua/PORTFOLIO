import { useEffect, useRef } from "react";

export default function SceneBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const letters =
      "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const resetDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#6aff6a";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resizeCanvas();
      resetDrops();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,255,120,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.75))]" />
    </div>
  );
}
