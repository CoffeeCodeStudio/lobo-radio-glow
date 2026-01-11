import { useEffect, useRef } from "react";
import { Radio, Calendar, Clock } from "lucide-react";

interface ShowCard {
  id: number;
  name: string;
  genre: string;
  day: string;
  time: string;
  isLive?: boolean;
}

const ScheduleSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("revealed");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const shows: ShowCard[] = [
    {
      id: 1,
      name: "Neon Nights",
      genre: "80s Synthpop & New Wave",
      day: "Fredag",
      time: "20:00 - 00:00",
      isLive: true,
    },
    {
      id: 2,
      name: "Retro Rewind",
      genre: "90s Dance & Eurodance",
      day: "Lördag",
      time: "18:00 - 22:00",
    },
    {
      id: 3,
      name: "Sunday Grooves",
      genre: "80s Rock & Power Ballads",
      day: "Söndag",
      time: "16:00 - 20:00",
    },
    {
      id: 4,
      name: "Throwback Thursday",
      genre: "90s Hip-Hop & R&B",
      day: "Torsdag",
      time: "21:00 - 01:00",
    },
    {
      id: 5,
      name: "Midnight Mix",
      genre: "80s & 90s Mix",
      day: "Onsdag",
      time: "22:00 - 02:00",
    },
    {
      id: 6,
      name: "Vinyl Sessions",
      genre: "Classic Vinyl Spins",
      day: "Måndag",
      time: "19:00 - 22:00",
    },
  ];

  return (
    <section ref={sectionRef} id="schedule" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neon-gradient mb-4 italic">
            KOMMANDE DJ SETS
          </h2>
          <p className="text-muted-foreground text-lg">
            Missa inte dessa fantastiska shower fyllda med de bästa 80- och 90-talshitsen
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show) => (
            <div
              key={show.id}
              className={`scroll-reveal relative ${
                show.isLive ? "glass-card-pink" : "glass-card"
              } p-6 hover:scale-[1.02] transition-transform`}
            >
              {/* Live Badge */}
              {show.isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-neon-pink/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-neon-pink rounded-full live-dot"></div>
                  <span className="text-neon-pink text-xs font-bold">LIVE</span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-white" />
              </div>

              {/* Show Name */}
              <h3 className="font-display text-xl font-bold mb-3">{show.name}</h3>

              {/* Genre Tag */}
              <span className="genre-tag text-xs px-3 py-1 rounded-full inline-block mb-4">
                {show.genre}
              </span>

              {/* Day and Time */}
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{show.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{show.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
