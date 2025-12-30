import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Aegis Drive launches.",
      });
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Get Early Access</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Join the <span className="text-gradient">Waitlist</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Be the first to experience the future of vehicle safety. 
            Sign up to get exclusive updates and early access to Aegis Drive.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-6 bg-card border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button variant="hero" size="xl" type="submit">
              Join Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>contact@aegisdrive.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
