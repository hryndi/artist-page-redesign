import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gold-900/10 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x800"
                alt="Artist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full opacity-20 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-gold-500 drop-shadow-lg">
              About the Artist
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white drop-shadow-md">
                Pioneering the Future of Sound
              </h3>
              <div className="space-y-4 text-white/90">
                <p className="text-lg leading-relaxed drop-shadow-sm">
                  Born in the heart of the music scene, this innovative artist
                  has been pushing the boundaries of sound since their debut.
                  With a unique blend of electronic, soul, and experimental
                  music, they've carved out a distinctive niche in the industry.
                </p>
                <p className="text-lg leading-relaxed drop-shadow-sm">
                  After releasing their groundbreaking first album in 2017, they
                  quickly gained recognition for their innovative production
                  techniques and emotionally charged performances. Their music
                  has been featured in major films, commercials, and playlists
                  worldwide.
                </p>
                <p className="text-lg leading-relaxed drop-shadow-sm">
                  When not in the studio creating new sounds, they can be found
                  collaborating with other boundary-pushing artists or
                  performing at sold-out venues across the globe.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gold-500/50 hover:bg-gold-500/10 text-gold-400 hover:text-gold-300"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gold-500/50 hover:bg-gold-500/10 text-gold-400 hover:text-gold-300"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gold-500/50 hover:bg-gold-500/10 text-gold-400 hover:text-gold-300"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
