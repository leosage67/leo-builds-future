import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Best for formal inquiries and project discussions",
      action: "Send Email",
      href: "mailto:leo.justice@example.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Quick questions or casual conversation",
      action: "Start Chat",
      href: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "For detailed project discussions",
      action: "Book Time",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "#",
      color: "hover:text-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and entrepreneurship.
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <a href={method.href}>
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main CTA */}
          <Card className="gradient-card shadow-medium border-0 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium hover:shadow-glow transition-all duration-300"
                >
                  <a href="mailto:leo.justice@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/20 text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social links */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">You can also find me on</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-muted-foreground ${social.color} transition-smooth p-3 rounded-full hover:bg-primary/10`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;