"use client";
import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
    
    // Multiple shooting stars state
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
    }
    let shootingStars: ShootingStar[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const spawnShootingStar = () => {
      const startFromTop = Math.random() > 0.5;
      shootingStars.push({
        x: startFromTop ? Math.random() * canvas.width : 0,
        y: startFromTop ? 0 : Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 20 + 15,
        opacity: 1,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1) // roughly 45 deg down-right
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw static stars
      ctx.fillStyle = "#ffffff";
      stars.forEach(star => {
        ctx.beginPath();
        ctx.globalAlpha = Math.random() * 0.5 + 0.3; // Twinkle effect
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
      });

      // Draw shooting stars
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ctx.globalAlpha = ss.opacity;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.stroke();

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.01;

        if (ss.opacity <= 0 || ss.x > canvas.width + ss.length || ss.y > canvas.height + ss.length) {
          shootingStars.splice(i, 1);
        }
      }

      // High frequency of shooting stars
      if (Math.random() < 0.05) { // 5% chance every frame (roughly 3 per second at 60fps)
        spawnShootingStar();
      }

      ctx.globalAlpha = 1; // Reset alpha
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0" />;
}
