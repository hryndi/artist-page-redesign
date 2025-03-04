import { Button } from "./ui/button";
import {
  Instagram,
  Twitter,
  Youtube,
  AirplayIcon as Spotify,
  Music,
} from "lucide-react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-black/40 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <Music className="h-6 w-6 text-gold-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
                ARTIST NAME
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Creating innovative sounds and pushing the boundaries of music
              since 2017. Join the journey through sound and emotion.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gold-500/10 hover:text-gold-400"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gold-500/10 hover:text-gold-400"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gold-500/10 hover:text-gold-400"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gold-500/10 hover:text-gold-400"
              >
                <Spotify className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  className="text-muted-foreground hover:text-gold-400 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="music"
                  smooth={true}
                  className="text-muted-foreground hover:text-gold-400 transition-colors cursor-pointer"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="text-muted-foreground hover:text-gold-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  className="text-muted-foreground hover:text-gold-400 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold-400 transition-colors"
                >
                  Tour Dates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold-400 transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold-400 transition-colors"
                >
                  Merchandise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-gold-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold-500/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Artist Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
