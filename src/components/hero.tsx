import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Music2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

export default function Hero() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-gold-400 to-amber-500 drop-shadow-lg">
            ARTIST NAME
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Experience the sound that's redefining the boundaries of music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-gold-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Music2 className="mr-2 h-5 w-5" /> Listen Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold-500 text-amber-500 hover:bg-gold-500/10"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="music" smooth={true} duration={500}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-12 w-12 text-gold-400 hover:text-gold-300 hover:bg-gold-500/10"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
