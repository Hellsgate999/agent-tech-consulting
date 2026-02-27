import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Senior Java Developer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "5+ years",
    description:
      "Build and maintain enterprise-grade Java applications using Spring Boot, Microservices, and cloud-native architectures.",
    technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "DevOps Engineer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "3+ years",
    description:
      "Design and manage CI/CD pipelines, cloud infrastructure, and container orchestration for enterprise clients.",
    technologies: ["AWS", "Terraform", "Docker", "Jenkins", "Kubernetes"],
  },
  {
    title: "Data Engineer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "4+ years",
    description:
      "Build and optimize data pipelines, ETL workflows, and analytics platforms using modern data stack.",
    technologies: ["Python", "Spark", "Snowflake", "Airflow", "Kafka"],
  },
  {
    title: "React Frontend Developer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "3+ years",
    description:
      "Develop responsive, high-performance web applications using React, TypeScript, and modern frontend tools.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "Salesforce Consultant",
    location: "Remote / USA",
    type: "Contract",
    experience: "4+ years",
    description:
      "Implement and customize Salesforce solutions including Sales Cloud, Service Cloud, and integrations.",
    technologies: ["Salesforce", "Apex", "Lightning", "MuleSoft", "SOQL"],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "7+ years",
    description:
      "Design scalable, secure cloud architectures and lead migration strategies for enterprise clients.",
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Serverless"],
  },
  {
    title: "QA Automation Engineer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "3+ years",
    description:
      "Build automated test frameworks and ensure quality across web, API, and mobile applications.",
    technologies: ["Selenium", "Cypress", "Java", "Postman", "CI/CD"],
  },
  {
    title: "AI/ML Engineer",
    location: "Remote / USA",
    type: "Full-Time",
    experience: "4+ years",
    description:
      "Develop and deploy machine learning models and AI-powered solutions for enterprise use cases.",
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "MLOps"],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            We're looking for passionate technologists to help us deliver
            world-class consulting solutions. Work remotely, grow your career,
            and make an impact.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
              Open Positions
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Current Openings
            </h2>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="group p-6 sm:p-8 rounded-lg border border-border bg-card hover:glow-border hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shrink-0"
                  >
                    <a href="mailto:careers@agenttechglobal.com?subject=Application: {job.title}">
                      Apply Now
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.technologies.map((tech) => (
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

      <Footer />
    </div>
  );
};

export default Careers;
