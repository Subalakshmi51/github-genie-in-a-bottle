import { Card } from "@/components/ui/card";
import { Zap, Shield, Palette, Code2, Smartphone, Rocket } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning Fast",
    description: "Built with Vite for instant hot reload and optimized builds. Experience blazing fast development."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Type Safe",
    description: "Full TypeScript support with strict mode enabled. Catch errors at compile time, not runtime."
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Beautiful Design",
    description: "Modern design system with Tailwind CSS and shadcn/ui components. Customizable and accessible."
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Developer Experience",
    description: "ESLint, Prettier, and pre-configured tooling for the best development experience."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Responsive",
    description: "Mobile-first design that looks great on all devices. Progressive and adaptive layouts."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Production Ready",
    description: "Optimized builds, code splitting, and deployment-ready configuration out of the box."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications with confidence and speed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-secondary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-card group hover:scale-105"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;