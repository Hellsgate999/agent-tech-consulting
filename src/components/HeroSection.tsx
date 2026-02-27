import heroBg from "@/assets/hero-bg.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-bg opacity-70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <p
            className="text-sm font-medium tracking-widest uppercase text-accent mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Technology Consulting Services
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Transforming Businesses Through{" "}
            <span className="text-gradient">Intelligent Technology</span>
          </h1>
          <p
            className="text-lg text-primary-foreground/70 max-w-xl mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            We partner with enterprises to deliver cutting-edge IT solutions,
            digital transformation, and strategic consulting that drives
            measurable results.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <a href="#contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
