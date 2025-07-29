import { Code2, Heart, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-gradient-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                DevTemplate
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              A modern, production-ready template for building beautiful web applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#tech" className="block text-muted-foreground hover:text-primary transition-colors">
                Tech Stack
              </a>
              <a href="#getting-started" className="block text-muted-foreground hover:text-primary transition-colors">
                Getting Started
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Examples
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for developers</span>
          </p>
          <p>
            © 2024 DevTemplate. Open source and free to use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;