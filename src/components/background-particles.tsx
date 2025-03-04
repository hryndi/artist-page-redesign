import { useEffect, useRef } from "react";

interface ParticleProps {
  density?: number;
  color?: string;
  maxSize?: number;
  minSize?: number;
  speed?: number;
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  shape: string;
  rotation: number;
  rotationSpeed: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  color: string;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    color: string,
    maxSize: number,
    minSize: number,
    speed: number
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.color = color;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * (maxSize - minSize) + minSize;
    this.speedX = (Math.random() - 0.5) * speed;
    this.speedY = (Math.random() - 0.5) * speed;
    this.opacity = Math.random() * 0.5 + 0.2;

    const shapes = ["circle", "triangle", "square", "line"];
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];

    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;

    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    switch (this.shape) {
      case "circle":
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        break;

      case "triangle":
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.size);
        this.ctx.lineTo(-this.size, this.size);
        this.ctx.lineTo(this.size, this.size);
        this.ctx.closePath();
        this.ctx.fill();
        break;

      case "square":
        this.ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        break;

      case "line":
        this.ctx.beginPath();
        this.ctx.moveTo(-this.size, 0);
        this.ctx.lineTo(this.size, 0);
        this.ctx.stroke();
        break;
    }

    this.ctx.restore();
  }
}

export default function BackgroundParticles({
  density = 15,
  color = "#FFC300",
  maxSize = 20,
  minSize = 2,
  speed = 0.5,
}: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    function initParticles() {
      if (!canvas) return;
      particles = [];
      const particleCount = Math.floor(
        (canvas.width * canvas.height) / (10000 / density)
      );

      for (let i = 0; i < particleCount; i++) {
        if (!ctx) return;
        particles.push(
          new Particle(canvas, ctx, color, maxSize, minSize, speed)
        );
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, color, maxSize, minSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    />
  );
}
