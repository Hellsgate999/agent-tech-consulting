const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-lg font-bold text-primary-foreground tracking-tight">
            AGENT TECH <span className="text-accent">GLOBAL</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Agent Tech Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
