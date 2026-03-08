import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Index = () => {
  return (
    <div className="space-y-16">
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
            Hey, I'm Ishanya! I recently graduated from IISER Bhopal and now work as a Researcher at TCS Research. 
            I'm curious about how AI can be made more private, more useful, and more accessible to everyone. 
            My days usually involve tinkering with edge devices, experimenting with federated learning, 
            and asking "what if?" a lot. Sometimes the answers surprise me, and that's the best part.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-terminal flex items-center gap-2">
              About Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-terminal flex items-center gap-2">
              My Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <section className="terminal-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 glow-text">Explore My World</h2>
            <p className="text-muted-foreground">
              From research papers to Himalayan treks, there's a bit of everything here.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StaggerItem>
              <Link to="/cv" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">Research positions, awards, and my academic journey so far</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/blog" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Blog</h3>
                <p className="text-sm text-muted-foreground">Technical posts, research reflections, and things I've learned</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/places" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Places I've Been</h3>
                <p className="text-sm text-muted-foreground">Research visits, conferences, and travel adventures</p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link to="/misc" className="terminal-card card-hover text-center p-4 block">
                <h3 className="font-semibold mb-2">Fun Stuff</h3>
                <p className="text-sm text-muted-foreground">Side experiments, random thoughts, and the lighter side of research</p>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-4 glow-text">What I'm Up To</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-accent mb-2">At Work</h3>
              <p className="text-sm text-muted-foreground">
                Building privacy-sensitive AI systems at TCS Research, Bengaluru. Currently working with 
                multi-modal physiological data (EEG, ECG, gaze tracking) and designing compact architectures 
                for edge deployment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-2">On the Side</h3>
              <p className="text-sm text-muted-foreground">
                Learning about AI ethics through a Turing College EU-funded program, 
                mentoring students through Arivu India, and always planning my next trip.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Index;
