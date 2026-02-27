import { User } from "lucide-react";

const team = [
  { name: "Inka", role: "DevOps Engineer" },
  { name: "Em", role: "Data Engineer" },
  { name: "Unay", role: "Data Engineer" },
  { name: "Java", role: "Java Developer" },
  { name: "Avi", role: "DevOps Engineer" },
  { name: "Evi", role: "Software Engineer" },
  { name: "Ani", role: "Software Engineer" },
  { name: "Chey", role: "Engineering Manager" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
            Our Team
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground">
            Our talented team brings deep expertise across DevOps, Data Engineering, Java, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:glow-border hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <User className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-card-foreground">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
