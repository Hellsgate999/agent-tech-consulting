import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your business? Reach out and let's discuss how we
            can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-card"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
            >
              Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@agenttechglobal.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
