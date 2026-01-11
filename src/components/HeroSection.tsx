import djLoboImage from "@/assets/dj-lobo-real.jpg";
import { Radio } from "lucide-react";
const HeroSection = () => {
  const scrollToSchedule = () => {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 relative">
      {/* On Air Badge */}
      <div className="glass-card-pink on-air-pulse px-6 py-3 mb-8 flex items-center gap-3">
        <div className="w-3 h-3 bg-neon-pink rounded-full live-dot"></div>
        <span className="font-display font-bold text-neon-pink tracking-wider">
          PÅ LUFTEN
        </span>
      </div>

      {/* DJ Image with neon border */}
      <div className="relative mb-8">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border-gradient">
          <img
            src={djLoboImage}
            alt="DJ Lobo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Glow effect behind image */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 blur-3xl -z-10 scale-110"></div>
      </div>

      {/* Title */}
      <h1 className="font-display text-6xl md:text-8xl font-black text-neon-gradient mb-4 tracking-wider">
        DJ LOBO
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">
        Din port till <span className="text-neon-pink">80s</span> &{" "}
        <span className="text-neon-cyan">90s</span>
      </p>

      {/* Radio vibes */}
      <div className="flex items-center gap-3 text-neon-cyan mb-8">
        <Radio className="w-5 h-5" />
        <span className="font-display text-sm tracking-widest">
          RETRO RADIO VIBES
        </span>
        <Radio className="w-5 h-5" />
      </div>

      {/* CTA Button */}
      <button
        onClick={scrollToSchedule}
        className="glass-card px-8 py-4 font-display font-bold tracking-wider hover:bg-muted/50 transition-all hover:scale-105"
      >
        SE SCHEMA
      </button>
    </section>
  );
};

export default HeroSection;
