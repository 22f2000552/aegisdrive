import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Activity } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Currently in Ideation Phase</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Make Your Vehicle{" "}
              <span className="text-gradient">Talk</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              A driving hawk that retrofits traditional vehicles with intelligent safety, 
              AI-driven assistance, and health monitoring systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Join the Waitlist
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient">22M+</p>
                <p className="text-sm text-muted-foreground">Vehicles in India lack safety</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient">1.5L</p>
                <p className="text-sm text-muted-foreground">Preventable accidents yearly</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-display font-bold text-gradient">99.8%</p>
                <p className="text-sm text-muted-foreground">PPG clinical accuracy</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={heroImage}
                alt="Aegis Drive AI-powered vehicle dashboard"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-4 top-1/4 bg-card border border-border rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <Shield className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">ADAS Protection</p>
            </div>

            <div className="absolute -right-4 top-1/2 bg-card border border-border rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
              <Cpu className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">AI-Powered</p>
            </div>

            <div className="absolute -bottom-4 left-1/4 bg-card border border-border rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: "0.5s" }}>
              <Activity className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">Health Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
