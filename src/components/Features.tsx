import { Shield, Activity, Radio, Gauge, Brain, Wifi } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Driver Assistance",
    description: "Multi-sensor fusion with radar, cameras, and IMU for collision avoidance, lane assist, and automatic emergency braking.",
  },
  {
    icon: Activity,
    title: "PPG Health Monitoring",
    description: "World's first automotive PPG system with 99.8% clinical accuracy for real-time driver health monitoring.",
  },
  {
    icon: Gauge,
    title: "STARS System",
    description: "Smart Tyre Air Regulation System automatically monitors and adjusts pressure for optimal safety and efficiency.",
  },
  {
    icon: Wifi,
    title: "C-V2X Connectivity",
    description: "Cellular Vehicle-to-Everything enables seamless communication between vehicles, infrastructure, and pedestrians.",
  },
  {
    icon: Brain,
    title: "Federated Learning",
    description: "Decentralized AI training across vehicles enhances driving intelligence while preserving data privacy.",
  },
  {
    icon: Radio,
    title: "Retrofit Capability",
    description: "Upgrade any traditional vehicle with intelligent safety features without replacing the entire car.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Innovative <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete ADAS and health monitoring system tailored for Indian vehicles at accessible pricing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
