"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle settings
    const particles: Particle[] = [];
    // Fewer particles on mobile devices for better performance and cleaner look
    const particleCount = window.innerWidth < 768 ? 50 : window.innerWidth < 1024 ? 100 : 165;
    const connectionDistance = 120;
    const mouse = { x: 0, y: 0, radius: 200 };

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1,
      });
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse repulsion
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          particle.vx -= Math.cos(angle) * force * 0.5;
          particle.vy -= Math.sin(angle) * force * 0.5;
        }

        // Apply minimal friction to maintain movement
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Keep particles moving - add base velocity if too slow
        const minSpeed = 0.3;
        const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (currentSpeed < minSpeed) {
          const angle = Math.atan2(particle.vy, particle.vx);
          particle.vx = Math.cos(angle) * minSpeed;
          particle.vy = Math.sin(angle) * minSpeed;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.8)"; // Purple color - increased opacity
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
