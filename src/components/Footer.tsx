import { Instagram, Facebook, Youtube, Radio, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/djloboradio",
  facebook: "https://www.facebook.com/djloboradiodjs/",
  youtube: "https://www.youtube.com/@djloboproducciones3211",
  zenoPlayer: "https://zeno.fm/radio/dj-lobo-radio-o85p/",
};

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 pb-24 sm:pb-32 relative">
      {/* Coffee Code Studio Signature - Fixed position on mobile */}
      <div className="sm:hidden fixed bottom-[78px] left-0 right-0 z-50 py-2 bg-background/90 backdrop-blur-sm border-t border-white/5">
        <a
          href="https://www.linkedin.com/in/rami-e-453b77330/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-1.5 text-xs focus-neon rounded px-2 py-1"
          aria-label="Besök Coffee Code Studio (öppnas i nytt fönster)"
        >
          <span 
            className="text-neon-cyan font-bold"
            style={{ textShadow: "0 0 12px rgba(0, 255, 255, 0.6)" }}
          >
            &lt;
          </span>
          <span 
            className="text-base"
            style={{ 
              filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.5))",
            }}
          >
            ☕️
          </span>
          <span 
            className="text-neon-cyan font-bold"
            style={{ textShadow: "0 0 12px rgba(0, 255, 255, 0.6)" }}
          >
            &gt;
          </span>
          <span 
            className="ml-1 font-semibold tracking-wide text-white"
            style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.4)" }}
          >
            Coffee Code Studio
          </span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center text-neon-cyan text-xl sm:text-2xl" aria-hidden="true">
            <span>((</span>
            <Radio className="w-4 h-4 sm:w-5 sm:h-5 mx-1" />
            <span>))</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-neon-gradient">
            DJ LOBO RADIO
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground/80 max-w-md mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
          Bringing the best of 80s and 90s music to your ears. Tune in and let the
          nostalgia flow.
        </p>

        {/* Social Links */}
        <nav aria-label="Sociala medier">
          <ul className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <li>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Följ DJ Lobo på Instagram (öppnas i nytt fönster)"
                className="tap-target w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 group focus-neon hover:scale-110"
                style={{ boxShadow: "0 0 15px rgba(253, 29, 29, 0.3)" }}
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-[#E1306C] transition-colors" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Följ DJ Lobo på Facebook (öppnas i nytt fönster)"
                className="tap-target w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 group focus-neon hover:scale-110"
                style={{ boxShadow: "0 0 15px rgba(24, 119, 242, 0.3)" }}
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-[#1877F2] transition-colors" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prenumerera på DJ Lobo på YouTube (öppnas i nytt fönster)"
                className="tap-target w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 group focus-neon hover:scale-110"
                style={{ boxShadow: "0 0 15px rgba(255, 0, 0, 0.3)" }}
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-[#FF0000] transition-colors" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.zenoPlayer}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lyssna på DJ Lobo Radio på Zeno.fm (öppnas i nytt fönster)"
                className="tap-target w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 group focus-neon hover:scale-110"
                style={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)" }}
              >
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-muted-foreground/70 text-xs sm:text-sm mb-3 sm:mb-4">
          © 2026 DJ Lobo Radio. All rights reserved.
        </p>

        {/* Legal Links */}
        <nav aria-label="Juridiska länkar">
          <ul className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <li>
              <a 
                href="#" 
                className="text-neon-cyan hover:underline focus-neon rounded px-1"
                aria-label="Läs vår integritetspolicy"
              >
                Integritetspolicy
              </a>
            </li>
            <li aria-hidden="true">
              <span className="text-muted-foreground">•</span>
            </li>
            <li>
              <a 
                href="#" 
                className="text-neon-cyan hover:underline focus-neon rounded px-1"
                aria-label="Läs våra användarvillkor"
              >
                Användarvillkor
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Signature - Hidden on mobile */}
      <div className="hidden sm:block mt-12 pt-6 border-t border-white/5">
        <a
          href="https://www.linkedin.com/in/rami-e-453b77330/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-1.5 text-sm text-muted-foreground/80 hover:text-white transition-colors duration-300 focus-neon rounded px-2 py-1"
          aria-label="Besök Coffee Code Studio (öppnas i nytt fönster)"
        >
          <span 
            className="transition-all duration-300 text-neon-cyan font-bold"
            style={{ textShadow: "0 0 12px rgba(0, 255, 255, 0.5)" }}
          >
            &lt;
          </span>
          <span 
            className="text-lg transition-all duration-300 group-hover:scale-110"
            style={{ 
              filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.5))",
            }}
          >
            ☕️
          </span>
          <span 
            className="transition-all duration-300 text-neon-cyan font-bold"
            style={{ textShadow: "0 0 12px rgba(0, 255, 255, 0.5)" }}
          >
            &gt;
          </span>
          <span 
            className="ml-1 font-semibold tracking-wide"
            style={{ textShadow: "0 0 8px rgba(0, 255, 255, 0.3)" }}
          >
            Coffee Code Studio
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
