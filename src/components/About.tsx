import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Cake, Trophy, Briefcase } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: GraduationCap,
      title: "Student",
      description: "Sophomore at Jefferson Academy Secondary, maintaining excellent grades while pursuing my passion for technology and business."
    },
    {
      icon: Cake,
      title: "Baking Enthusiast",
      description: "I love experimenting with new recipes and creating delicious treats. It's taught me precision, creativity, and patience."
    },
    {
      icon: Trophy,
      title: "Soccer Player",
      description: "Playing soccer has taught me teamwork, discipline, and the importance of consistent practice to achieve goals."
    },
    {
      icon: Briefcase,
      title: "Future Entrepreneur",
      description: "Passionate about creating businesses that solve real problems and make a positive impact in people's lives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a driven young developer who believes that age is just a number when it comes to creating meaningful digital experiences.
            </p>
          </div>

          {/* Main about content */}
          <div className="mb-16">
            <Card className="gradient-card shadow-medium border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-xl leading-relaxed mb-6">
                    At just 15 years old, I'm already passionate about using technology to solve problems and create value. 
                    As a sophomore at Jefferson Academy Secondary, I balance my academic pursuits with my love for coding, 
                    always looking for ways to turn ideas into reality.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey in web development started with curiosity and has grown into a genuine passion for creating 
                    digital experiences that matter. I believe that great software comes from understanding both the technical 
                    challenges and the human needs behind every project.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me perfecting a new baking recipe, training on the soccer field, or 
                    brainstorming my next business idea. Each of these activities teaches me valuable skills that I bring 
                    to my development work: creativity, teamwork, and strategic thinking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills highlight */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Core Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React", "TypeScript", "Tailwind CSS", "Node.js", "Web Development", 
                "UI/UX Design", "Project Management", "Problem Solving", "Team Leadership"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;