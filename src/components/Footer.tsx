import aegisLogo from "@/assets/aegis-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={aegisLogo} alt="Aegis Drive" className="h-8 w-auto" />
            <span className="font-display font-bold text-lg text-foreground tracking-wide">
              AEGIS <span className="text-gradient">DRIVE</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#variants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Variants
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Aegis Drive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
