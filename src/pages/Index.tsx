import { ArrowRight, Terminal, Code2, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-flex items-center gap-2 mb-6 text-accent">
          <Terminal className="w-8 h-8" />
          <span className="text-sm font-mono">ishanya</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Research.<br />
          Code.<br />
          <span className="glow-text">Innovate.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Hi, I’m Ishanya! I’m interested in how we can make AI more meaningful, accessible, and safe. My work often sits at the crossroads of privacy-preserving systems and AI/ML, but I enjoy following questions wherever they lead, from edge computing to Ai Ethics.
</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="btn-terminal flex items-center gap-2">
            About Me <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>
      </section>

      {/* Featured Areas */}
      <section className="grid md:grid-cols-3 gap-8">
        

        

        
      </section>

      {/* Quick Links */}
      <section className="terminal-card">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 glow-text">Explore My World</h2>
          <p className="text-muted-foreground">
            From academic achievements to travel adventures, get to know the person behind the research.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/cv" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="text-sm text-muted-foreground">Research positions, publications, and academic journey</p>
          </Link>
          
          <Link to="/blog" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Insights!</h3>
            <p className="text-sm text-muted-foreground">Technical posts, research reflections, and tutorials</p>
          </Link>
          
          <Link to="/places" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Places I've Been</h3>
            <p className="text-sm text-muted-foreground">Research conferences, academic visits, and adventures</p>
          </Link>
          
          <Link to="/misc" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Fun & Experiments</h3>
            <p className="text-sm text-muted-foreground">Side projects, memes, and creative endeavors</p>
          </Link>
        </div>
      </section>

      {/* Current Status */}
      
    </div>;
};
export default Index;
