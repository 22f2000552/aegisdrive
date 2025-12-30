import { AlertTriangle, Ban, Heart, Car } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "22M+",
    title: "Safety Concerns",
    description: "Vehicles in India lack any advanced safety features.",
  },
  {
    icon: Ban,
    stat: "1.5L",
    title: "Preventable Accidents",
    description: "Annual road accidents that could be avoided with ADAS deployment.",
  },
  {
    icon: Heart,
    stat: "45K+",
    title: "Medical Emergencies",
    description: "In-vehicle health emergencies go undetected each year.",
  },
  {
    icon: Car,
    stat: "High",
    title: "Affordability Gap",
    description: "ADAS remains costly and confined to premium vehicles only.",
  },
];

const Problem = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Problem Statement */}
          <div className="animate-slide-in-left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Problem</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              India&apos;s Road Safety <span className="text-gradient">Crisis</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Millions of vehicles on Indian roads lack basic safety features, leading to preventable accidents and loss of life. 
              Premium safety solutions remain out of reach for most consumers and fleet operators.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <problem.icon className="w-8 h-8 text-primary mb-3" />
                  <p className="text-2xl font-display font-bold text-gradient">{problem.stat}</p>
                  <p className="text-sm font-semibold mt-1">{problem.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Solution */}
          <div className="relative animate-slide-in-right">
            <div className="p-8 rounded-2xl bg-gradient-card border border-primary/30 glow-primary">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Solution</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-6">
                Aegis Drive Garuda
              </h3>
              <p className="text-muted-foreground mb-6">
                A hybrid hardware-software solution combining embedded analytics to enhance vehicle intelligence. 
                We retrofit traditional vehicles with:
              </p>

              <ul className="space-y-4">
                {[
                  "Affordable ADAS for mass market, fleet, and premium segments",
                  "Medical-grade PPG health monitoring for driver safety",
                  "Smart Tyre Air Regulation System (STARS)",
                  "AI-driven adaptive driving assistance",
                  "C-V2X connectivity for smart city integration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
