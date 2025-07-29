import { Button } from "@/components/ui/button";
import { Github, Star, Code2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DevTemplate
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors">
              Tech Stack
            </a>
            <a href="#getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
              Get Started
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Star className="w-4 h-4 mr-2" />
              Star
            </Button>
            <Button variant="hero" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;