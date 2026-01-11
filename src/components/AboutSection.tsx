import { useEffect, useRef } from "react";
import djLoboImage from "@/assets/dj-lobo-real.jpg";
import { Music, Headphones, Zap } from "lucide-react";

const AboutSection = () => {
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

  const stats = [
    { value: "20+", label: "Years" },
    { value: "5K+", label: "Vinyl" },
    { value: "100K+", label: "Listeners" },
  ];

  const features = [
    {
      icon: Music,
      title: "80-talshits",
      description: "Synth-pop, rock och discoklassiker",
      gradient: "icon-gradient-pink",
    },
    {
      icon: Headphones,
      title: "90-talsfavoriter",
      description: "Eurodance, grunge och R&B",
      gradient: "icon-gradient-cyan",
    },
    {
      icon: Zap,
      title: "Live varje vecka",
      description: "Färska mixes och specialshower",
      gradient: "icon-gradient-purple",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="scroll-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neon-gradient mb-8">
              OM DJ LOBO
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              DJ Lobo är en passionerad DJ med rötter i 80- och 90-talets gyllene
              musikera. Med sin unika blandning av klassiska hits och nostalgi skapar
              han en oförglömlig atmosfär.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Oavsett om det är synth-pop, eurodance eller rock - DJ Lobo tar dig på
              en resa genom de bästa låtarna från förr, direkt till ditt vardagsrum.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center scroll-reveal">
                  <div className="font-display text-4xl font-bold text-neon-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Features */}
          <div className="space-y-6">
            {/* DJ Image */}
            <div className="scroll-reveal glass-card overflow-hidden">
              <img
                src={djLoboImage}
                alt="DJ Lobo mixing"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="scroll-reveal glass-card p-4 text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center mx-auto mb-3`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
