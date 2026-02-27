import { Cloud, Shield, Cpu, BarChart3, Users, Code2 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate, optimize, and manage your cloud infrastructure across AWS, Azure, and GCP for maximum efficiency.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade security assessments, compliance, and threat monitoring.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Leverage artificial intelligence and intelligent automation to streamline operations and drive innovation.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with advanced analytics, BI dashboards, and predictive modeling.",
  },
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Access top-tier tech talent on demand with our flexible staffing and team augmentation services.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Build scalable, modern applications tailored to your unique business requirements and growth goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
            What We Do
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            End-to-End Technology Services
          </h2>
          <p className="text-muted-foreground">
            From strategy to execution, we deliver comprehensive solutions that
            accelerate your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg border border-border bg-card hover:glow-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
