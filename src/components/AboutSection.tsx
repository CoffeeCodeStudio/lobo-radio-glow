import { useEffect, useRef } from "react";
import djLoboAboutImage from "@/assets/dj-lobo-about.jpg";
import { Music, Headphones, Zap, Disc } from "lucide-react";
import { useBranding } from "@/hooks/useBranding";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { branding } = useBranding();

  // Use dynamic hero image if available, otherwise use the default
  const heroImage = branding?.hero_image_url || djLoboAboutImage;

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
    { value: "20+", label: "Years", ariaLabel: "Över 20 års erfarenhet" },
    { value: "500+", label: "Events", ariaLabel: "Över 500 spelningar" },
    { value: "100K+", label: "Listeners", ariaLabel: "Över 100 000 lyssnare" },
  ];

  const features = [
    {
      icon: Music,
      title: "80 & 90-tal",
      description: "Synth-pop, eurodance och discoklassiker",
      gradient: "icon-gradient-pink",
    },
    {
      icon: Disc,
      title: "Latin Vibes",
      description: "Salsa, reggaeton och tropical hits",
      gradient: "icon-gradient-cyan",
    },
    {
      icon: Headphones,
      title: "Club & Events",
      description: "Bröllop, företag och privatfester",
      gradient: "icon-gradient-purple",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-16 sm:py-24 px-4 sm:px-6 relative"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="scroll-reveal">
            <h2 
              id="about-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-neon-gradient mb-6 sm:mb-8"
            >
              OM DJ LOBO
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 leading-relaxed">
              DJ Lobo har arbetat som professionell DJ i över <span className="text-neon-pink font-semibold">20 år</span>. 
              Med rötter i Göteborg har han gjort hundratals spelningar på nattklubbar, företagsevent, bröllop och privatfester 
              – från Club Mamba till Salsa Latino Night på Kajuteriet Malmö.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Hans unika mix av <span className="text-neon-cyan font-semibold">80- och 90-talsklassiker</span> kombinerat med 
              het <span className="text-neon-pink font-semibold">latinmusik</span> skapar en oförglömlig atmosfär. 
              Oavsett om det är synth-pop, eurodance, salsa eller reggaeton – DJ Lobo tar dig på en musikalisk resa!
            </p>

            {/* Stats */}
            <dl className="flex gap-8 sm:gap-12 mt-6 sm:mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center scroll-reveal">
                  <dt className="sr-only">{stat.ariaLabel}</dt>
                  <dd>
                    <div className="font-display text-3xl sm:text-4xl font-bold text-neon-gradient">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm mt-1">
                      {stat.label}
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Column - Image and Features */}
          <div className="space-y-4 sm:space-y-6">
            {/* DJ Image */}
            <div className="scroll-reveal glass-card overflow-hidden">
              <img
                src={heroImage}
                alt="DJ Lobo spelar latinmusik live"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Feature Cards */}
            <ul className="grid grid-cols-3 gap-2 sm:gap-4" role="list">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="scroll-reveal glass-card p-3 sm:p-4 text-center"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.gradient} flex items-center justify-center mx-auto mb-2 sm:mb-3`}
                    aria-hidden="true"
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-[10px] sm:text-xs">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
