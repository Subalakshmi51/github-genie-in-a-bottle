import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React 18", category: "Frontend", color: "bg-blue-500/20 text-blue-300" },
  { name: "TypeScript", category: "Language", color: "bg-blue-600/20 text-blue-400" },
  { name: "Vite", category: "Build Tool", color: "bg-purple-500/20 text-purple-300" },
  { name: "Tailwind CSS", category: "Styling", color: "bg-cyan-500/20 text-cyan-300" },
  { name: "shadcn/ui", category: "Components", color: "bg-gray-500/20 text-gray-300" },
  { name: "React Router", category: "Navigation", color: "bg-red-500/20 text-red-300" },
  { name: "React Query", category: "Data Fetching", color: "bg-orange-500/20 text-orange-300" },
  { name: "Lucide Icons", category: "Icons", color: "bg-green-500/20 text-green-300" },
  { name: "ESLint", category: "Linting", color: "bg-indigo-500/20 text-indigo-300" },
  { name: "Git", category: "Version Control", color: "bg-yellow-500/20 text-yellow-300" }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 px-6 bg-gradient-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Modern </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the latest and greatest technologies for optimal performance and developer experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <Badge 
                variant="secondary" 
                className={`px-6 py-3 text-sm font-medium ${tech.color} border border-secondary/30 hover:border-primary/40 transition-all duration-300 hover:shadow-glow`}
              >
                <span className="font-semibold">{tech.name}</span>
                <span className="ml-2 text-xs opacity-70">{tech.category}</span>
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            + Many more tools and libraries for a complete development experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;