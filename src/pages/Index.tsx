import { ArrowRight, Terminal, Code2, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-flex items-center gap-2 mb-6 text-accent">
          <Terminal className="w-8 h-8" />
          <span className="text-sm font-mono">ishanya.dev</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Research.<br />
          Code.<br />
          <span className="glow-text">Innovate.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Computer Science researcher specializing in federated learning, privacy-preserving AI, 
          and accessible technology. Currently exploring the intersection of edge computing and machine learning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="btn-terminal flex items-center gap-2">
            About Me <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/projects" className="btn-terminal">
            View Projects
          </Link>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="terminal-card card-hover text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Brain className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">Federated Learning</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Privacy-preserving machine learning on distributed data. Working on custom CNN architectures 
            achieving 81.36% accuracy on non-IID datasets.
          </p>
          <Link to="/projects" className="text-accent hover:underline text-sm">
            See Research →
          </Link>
        </div>

        <div className="terminal-card card-hover text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">Edge Computing</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Deploying AI models on resource-constrained devices. Experience with Raspberry Pi clusters 
            and IoT sensor networks for real-time applications.
          </p>
          <Link to="/projects" className="text-accent hover:underline text-sm">
            Explore Projects →
          </Link>
        </div>

        <div className="terminal-card card-hover text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Code2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-3">Accessibility Tech</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Building inclusive technology for visually impaired users. Created coding platforms 
            with screen reader support and AI-powered assistance.
          </p>
          <Link to="/projects" className="text-accent hover:underline text-sm">
            Learn More →
          </Link>
        </div>
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
            <h3 className="font-semibold mb-2">CV & Experience</h3>
            <p className="text-sm text-muted-foreground">Research positions, publications, and academic journey</p>
          </Link>
          
          <Link to="/blog" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Blog & Insights</h3>
            <p className="text-sm text-muted-foreground">Technical posts, research reflections, and tutorials</p>
          </Link>
          
          <Link to="/places" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Places & Travels</h3>
            <p className="text-sm text-muted-foreground">Research conferences, academic visits, and adventures</p>
          </Link>
          
          <Link to="/misc" className="terminal-card card-hover text-center p-4">
            <h3 className="font-semibold mb-2">Fun & Experiments</h3>
            <p className="text-sm text-muted-foreground">Side projects, memes, and creative endeavors</p>
          </Link>
        </div>
      </section>

      {/* Current Status */}
      <section className="terminal-card text-center">
        <h2 className="text-2xl font-bold mb-4 glow-text">Currently</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-accent mb-2">🔬 Researching</h3>
            <p className="text-muted-foreground">Privacy-preserving activity recognition with 95.93% accuracy</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent mb-2">📚 Teaching</h3>
            <p className="text-muted-foreground">Digital Circuits & Verilog HDL to graduate students</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent mb-2">🚀 Building</h3>
            <p className="text-muted-foreground">Federated learning systems on Raspberry Pi clusters</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
