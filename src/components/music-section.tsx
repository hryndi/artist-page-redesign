import { motion } from "framer-motion";
import { AlbumCard } from "./album-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const albums = [
  {
    id: 1,
    title: "Neon Dreams",
    year: "2023",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
  {
    id: 2,
    title: "Midnight Echo",
    year: "2021",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
  {
    id: 3,
    title: "Electric Soul",
    year: "2019",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
  {
    id: 4,
    title: "Cosmic Rhythm",
    year: "2017",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
  {
    id: 5,
    title: "Cosmic Rhythm",
    year: "2017",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
  {
    id: 6,
    title: "Cosmic Rhythm",
    year: "2017",
    cover: "https://placehold.co/300x300",
    link: "#",
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold-900/20 to-background/5 pointer-events-none z-0" />

      <div className="w-full px-12 mx-auto relative z-10">
        {/* Updated Carousel Code */}
        <Carousel
          className="w-full max-w-6xl  mx-auto"
          opts={{ slidesToScroll: 1 }}
        >
          <div className="pl-10  pb-16">
            <h2 className="!text-6xl   md:text-5xl z-30 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-500 drop-shadow-lg">
              Music
            </h2>
            <p className="text-lg text-gray-300  max-w-2xl  ">
              Explore the discography that has captivated audiences worldwide
            </p>
          </div>
          <CarouselContent className="-ml-1">
            {albums.map((album, index) => (
              <CarouselItem
                key={album.id}
                className="px-5 basis-full sm:basis-1/2 md:basis-1/3 flex-shrink-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AlbumCard album={album} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-2rem] top-[65%]  z-10 visible sm:visible md:visible" />
          <CarouselNext className=" bsolute right-[-2rem] top-[65%]  z-10 visible sm:visible md:visible" />
        </Carousel>
      </div>
    </section>
  );
}
