import {
  Cloud, Shield, Cpu, BarChart3, Users, Code2,
  Database, Globe, Smartphone, Server, GitBranch, Workflow,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate, optimize, and manage your cloud infrastructure for maximum efficiency.",
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade security assessments and compliance.",
    technologies: ["SIEM", "Zero Trust", "IAM", "SOC 2", "HIPAA", "PCI-DSS"],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Leverage AI and intelligent automation to streamline operations and drive innovation.",
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "RPA", "MLOps"],
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description:
      "Build robust data pipelines and turn data into actionable insights.",
    technologies: ["Spark", "Snowflake", "Databricks", "Kafka", "Airflow", "Power BI"],
  },
  {
    icon: Users,
    title: "IT Staffing & Consulting",
    description:
      "Access top-tier tech talent on demand with flexible staffing and team augmentation.",
    technologies: ["DevOps", "Full Stack", "QA", "Scrum", "Project Mgmt", "BA"],
  },
  {
    icon: Code2,
    title: "Java & Enterprise Development",
    description:
      "Build scalable enterprise applications with modern Java ecosystems.",
    technologies: ["Java", "Spring Boot", "Microservices", "Hibernate", "Maven", "Gradle"],
  },
  {
    icon: Globe,
    title: "Web & Frontend Development",
    description:
      "Create modern, responsive web applications with cutting-edge frameworks.",
    technologies: ["React", "Angular", "TypeScript", "Node.js", "Next.js", "Vue"],
  },
  {
    icon: Database,
    title: "Database & Infrastructure",
    description:
      "Design, optimize, and manage databases and infrastructure at scale.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Oracle", "DynamoDB"],
  },
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    description:
      "Automate deployments, streamline workflows, and achieve continuous delivery.",
    technologies: ["Jenkins", "GitHub Actions", "ArgoCD", "Ansible", "Helm", "Prometheus"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Build cross-platform and native mobile apps that delight users.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Kotlin", "Swift"],
  },
  {
    icon: Server,
    title: "SAP & ERP Solutions",
    description:
      "Implement and customize enterprise resource planning solutions.",
    technologies: ["SAP S/4HANA", "SAP FICO", "SAP MM", "Salesforce", "Oracle ERP", "Workday"],
  },
  {
    icon: GitBranch,
    title: "QA & Testing",
    description:
      "Ensure quality with comprehensive manual and automated testing strategies.",
    technologies: ["Selenium", "Cypress", "JUnit", "Postman", "JMeter", "Appium"],
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
            From strategy to execution, we deliver comprehensive solutions across
            every major technology domain.
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
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
