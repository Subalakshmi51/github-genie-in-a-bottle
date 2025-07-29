import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Terminal, Download, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Clone Repository",
    description: "Get started by cloning this template to your local machine",
    code: "git clone <repository-url>\ncd your-project-name"
  },
  {
    number: "02", 
    title: "Install Dependencies",
    description: "Install all required packages using your preferred package manager",
    code: "npm install\n# or\nyarn install\n# or\npnpm install"
  },
  {
    number: "03",
    title: "Start Development",
    description: "Launch the development server and start building your application",
    code: "npm run dev\n# or\nyarn dev\n# or\npnpm dev"
  }
];

const GettingStarted = () => {
  return (
    <section id="getting-started" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Getting Started
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running in less than 5 minutes with these simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-secondary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                <div className="bg-muted/30 rounded-lg p-4 border border-secondary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground font-mono">Terminal</span>
                  </div>
                  <pre className="text-sm text-foreground font-mono whitespace-pre-wrap">
                    {step.code}
                  </pre>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground">
            Ready to start building? Clone the repository and begin your project!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Clone Template
            </Button>
            <Button variant="glass" size="lg">
              <Play className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;