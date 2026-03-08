import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <FadeIn>
          <div className="inline-flex items-center gap-2 mb-6 text-accent">
            <Terminal className="w-8 h-8" />
            <span className="text-sm font-mono">ishanya</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Research.<br />
            Code.<br />
            <span className="glow-text">Innovate.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm Ishanya, a researcher who loves to solve problems and explore the evolving world of AI and Machine Learning.
            I'm interested in how we can make AI more meaningful, accessible, and impactful. My work often sits at the crossroads of privacy-preserving systems and AI/ML, but I enjoy following questions wherever they lead -- from edge computing to natural language processing.
            At the heart of my work is a simple question: How can we push the boundaries of intelligent systems while keeping them useful, inclusive, and future-ready?
            I see research as an exploration -- part theory, part engineering, and part curiosity-driven wandering. Some days it's building models on edge devices, other days it's experimenting with language technologies, and often it's just asking "what if?" and chasing the answer.
            For me, AI is more than a field of study -- it's a way to experiment, create, and discover new possibilities.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-terminal flex items-center gap-2">
              About Me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Featured Areas */}
      <section className="grid md:grid-cols-3 gap-8" />

      {/* Quick Links */}
      <FadeIn>
        <section className="terminal-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 glow-text">Explore My World</h2>
            <p className="text-muted-foreground">
              From academic achievements to travel adventures, get to know the person behind the research.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StaggerItem>
              <Link to="/cv" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">Research positions, publications, and academic journey</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/blog" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Insights!</h3>
                <p className="text-sm text-muted-foreground">Technical posts, research reflections, and tutorials</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/places" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Places I've Been</h3>
                <p className="text-sm text-muted-foreground">Research conferences, academic visits, and adventures</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/misc" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Fun & Experiments</h3>
                <p className="text-sm text-muted-foreground">Side projects, memes, and creative endeavors</p>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </FadeIn>
    </div>
  );
};

export default Index;
