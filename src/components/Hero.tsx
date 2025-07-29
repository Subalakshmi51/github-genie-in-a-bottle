import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern
            </span>
            <br />
            <span className="text-foreground">Development</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl">Template</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A beautiful, production-ready template built with React, TypeScript, and Tailwind CSS. 
            Perfect for your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              <Download className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="glass" size="xl">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 pt-12 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>React 18</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;