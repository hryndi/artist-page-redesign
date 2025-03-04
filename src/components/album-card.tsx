import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface Album {
  id: number;
  title: string;
  year: string;
  cover: string;
  link: string;
}

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden  bg-black/40 border-gold-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 hover:border-gold-500/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="relative aspect-square">
          <div className=" overflow-hidden">
            <img
              src={album.cover || "/placeholder.svg"}
              alt={album.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-16 w-16 bg-gold-500/20 hover:bg-gold-500/40 text-white"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{album.title}</h3>
              <p className="text-muted-foreground">{album.year}</p>
            </div>
            <a href={album.link}>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full text-gold-400 hover:text-gold-300 hover:bg-gold-500/10"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
