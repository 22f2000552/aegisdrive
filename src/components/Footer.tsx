const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">A</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Aegis<span className="text-gradient">Drive</span>
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
