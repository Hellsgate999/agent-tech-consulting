import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Coverage" },
];

const highlights = [
  "Certified consultants across all major cloud platforms",
  "Proven methodologies for seamless digital transformation",
  "US-based team with global delivery capabilities",
  "Industry-specific expertise in finance, healthcare, and retail",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
              Why Agent Tech Global
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At Agent Tech Global, we combine deep technical expertise with
              strategic insight to help businesses navigate the complexities of
              modern technology. Our client-first approach ensures solutions that
              align with your vision and deliver lasting value.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-8 text-center border border-border"
              >
                <p className="font-heading text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
