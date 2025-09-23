import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import leoProfile from "@/assets/leo-profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile image */}
          <div className="mb-8 animate-slide-up">
            <img
              src={leoProfile}
              alt="Leo Justice - Professional headshot"
              className="w-32 h-32 rounded-full mx-auto shadow-strong border-4 border-white"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="text-gradient">Leo Justice</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            15-year-old developer and entrepreneur creating digital experiences that make a difference
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
            Sophomore at Jefferson Academy Secondary with a passion for web development, business innovation, and bringing creative ideas to life through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-medium hover:shadow-glow transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Let's Connect
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">1+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">15</div>
              <div className="text-muted-foreground">Years Old</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">∞</div>
              <div className="text-muted-foreground">Ambition Level</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;