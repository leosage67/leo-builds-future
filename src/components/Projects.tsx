import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Cake, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Leo's Bakery example website",
      description: "A beautifully designed web application that combines my passion for baking with modern web development. This project showcases my ability to create user-friendly interfaces while incorporating my personal interests.",
      image: "/placeholder.svg", 
      technologies: ["React", "TypeScript", "Tailwind CSS", "Modern UI/UX"],
      liveUrl: "https://lovable.dev/projects/8b2ec50b-9615-4576-858c-32dcdd349f24",
      githubUrl: "https://github.com/leosage67/crumb-crafted-collection.git",
      featured: true,
      icon: Cake,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Soccer App",
      description: "An innovative web project demonstrating modern development practices and creative problem-solving. Built with cutting-edge technologies to deliver a seamless user experience.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "",
      githubUrl: "https://github.com/leosage67/evo-kick",
      featured: false,
      icon: Zap,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a showcase of my work - each project represents my growth as a developer and my commitment to creating meaningful digital experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`gradient-card shadow-medium hover:shadow-strong transition-all duration-500 border-0 overflow-hidden group ${
                project.featured ? 'mb-8' : 'mb-6'
              }`}
            >
              <div className={`grid grid-cols-1 ${project.featured ? 'lg:grid-cols-2' : ''} gap-0`}>
                {/* Project image/icon section */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Featured Project</div>
                      <div className="text-2xl font-bold text-foreground">{project.title}</div>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
                </div>

                {/* Project content */}
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project links */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300 group flex-1"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-2 border-primary/20 text-primary hover:bg-primary/10 transition-smooth"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}

          {/* Coming soon section */}
          <div className="text-center mt-16">
            <Card className="gradient-card shadow-soft border-0 max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">More Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm constantly working on new projects and learning new technologies. Check back soon for updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;