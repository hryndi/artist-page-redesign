import { useEffect, useState } from "react";

interface CursorGlowProps {
  color?: string;
  opacity?: number;
  size?: number;
}

export default function CursorGlow({
  color = "rgba(255, 195, 0, 0.5)",
  opacity = 0.3,
  size = 50,
}: CursorGlowProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the glow only after mouse has moved
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        opacity: isVisible ? opacity : 0,
        background: `radial-gradient(circle ${size}vw at ${mousePosition.x}px ${mousePosition.y}px, ${color} 0%, rgba(0, 0, 0, 0) 70%)`,
        transition: "opacity 0.3s ease-out",
      }}
    />
  );
}
