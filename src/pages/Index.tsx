import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Index = () => {
  return (
    <div className="space-y-16">
      <section className="py-16">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hi, I'm Ishanya!
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            I'm someone who gets genuinely excited about research. I love tinkering, asking questions,
            and figuring out how things work (and why they sometimes don't). Right now, I'm really curious about
            AI safety, privacy-preserving AI, and governance of AI systems.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            I just finished my BS from <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer" className="link-accent">IISER Bhopal</a> and
            I'm looking to pursue an MS/PhD. This website is my little corner of the internet where I share what I'm learning,
            what I'm working on, and a bit of who I am. Feel free to look around, and if anything resonates,
            {' '}<a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="link-accent">drop me a message on LinkedIn</a>!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3">
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              About Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
              My Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <section>
          <h2 className="text-xl font-semibold mb-6 text-foreground">Explore</h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {[
              { to: '/cv', title: 'Experience', desc: 'Research positions, awards, and my journey so far' },
              { to: '/blog', title: 'Blog', desc: 'Personal stories and things I find fascinating' },
              { to: '/places', title: 'Places', desc: 'Research visits and conferences around India' },
              { to: '/misc', title: 'Fun Stuff', desc: 'Side projects, random thoughts, and the lighter side' },
            ].map(item => (
              <StaggerItem key={item.to}>
                <Link to={item.to} className="section-card section-card-hover block p-5">
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">What I'm Up To</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-foreground mb-2">Currently</h3>
              <p className="text-sm text-muted-foreground">
                Working as a researcher, exploring privacy-preserving AI, AI safety, and governance.
                Learning about AI ethics through a Turing College EU-funded program.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">On the side</h3>
              <p className="text-sm text-muted-foreground">
                Mentoring students through Arivu India,
                planning my next research visit, and always looking for the next interesting problem to dig into.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Index;
