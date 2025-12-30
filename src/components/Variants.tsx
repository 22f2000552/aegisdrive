import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const variants = [
  {
    name: "Garuda Core",
    tagline: "Essential Safety",
    features: [
      "Lane & collision alerts",
      "Blind spot monitoring",
      "Speed alerts",
      "Basic parking assist",
      "Automatic emergency braking",
    ],
    highlighted: false,
  },
  {
    name: "Garuda Aero",
    tagline: "Advanced Assistance",
    features: [
      "All Core features",
      "Adaptive cruise control",
      "Fatigue detection",
      "Sign recognition",
      "Traffic updates",
      "Night/rain assist",
    ],
    highlighted: false,
  },
  {
    name: "Garuda Nova",
    tagline: "AI Co-Pilot",
    features: [
      "All Aero features",
      "AI co-pilot alerts",
      "Predictive hazard detection",
      "STARS tyre regulation",
      "OTA updates",
      "PPG health monitoring",
    ],
    highlighted: true,
  },
  {
    name: "Garuda Titan",
    tagline: "Future-Ready",
    features: [
      "All Nova features",
      "Automation-ready hardware",
      "360° awareness",
      "Real-time V2X communication",
      "Premium customization",
      "Accident hotspot alerts",
    ],
    highlighted: false,
  },
];

const Variants = () => {
  return (
    <section id="variants" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Product Lineup</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Garuda <span className="text-gradient">Variants</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Modular and scalable design allowing you to start with essentials and upgrade over time.
          </p>
        </div>

        {/* Variants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {variants.map((variant, index) => (
            <div
              key={variant.name}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                variant.highlighted
                  ? "bg-gradient-card border-primary glow-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {variant.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold mb-1">{variant.name}</h3>
              <p className="text-primary text-sm font-medium mb-6">{variant.tagline}</p>

              <ul className="space-y-3 mb-8">
                {variant.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={variant.highlighted ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Variants;
