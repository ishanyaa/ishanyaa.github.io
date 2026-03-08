import { GraduationCap, MapPin } from 'lucide-react';
import profileImage from '@/assets/ishanya-garden.jpeg';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const About = () => {
  return (
    <div className="space-y-12">
      <FadeIn>
        <section className="section-card fun-gradient">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <SlideIn direction="left" className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ishanya at the IISER Bhopal garden"
                className="w-44 h-44 rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
              />
              <p className="text-xs text-muted-foreground text-center mt-2 italic max-w-[11rem] mx-auto">
                The garden at IISER Bhopal, near the academic building. They plant so many flowers during winter.
                The warm sun, the bees buzzing around, and good people to chat with about ideas. Core memory.
              </p>
            </SlideIn>
            <SlideIn direction="right" className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2 text-foreground">Hey, I'm Ishanya!</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I recently graduated from IISER Bhopal (BS in EECS, Aug 2025). I'm deeply curious about
                AI safety, privacy-preserving AI, and how we can govern AI systems responsibly.
                I love to research, tinker, and ask "why?" a lot. The more I read, the more I realise how much there is to learn,
                and honestly, that's what makes it exciting!
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm looking to pursue an MS/PhD and dig deeper into these questions. If any of this sounds interesting to you,
                or if you just want to chat about research, life, or anything really, feel free to{' '}
                <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
                  drop me a message on LinkedIn
                </a>! I'd genuinely love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>IISER Bhopal (BS, EECS)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>India</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">Contact Me on LinkedIn</a>
                <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">GitHub</a>
              </div>
            </SlideIn>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">What Gets Me Excited</h2>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Privacy-Preserving AI', desc: 'Federated learning, differential privacy, and making sure your data stays yours. How do we build AI that actually respects people?' },
              { title: 'AI Safety & Governance', desc: 'How do we make AI systems trustworthy? What does fairness look like in practice? These questions keep me up at night (in a good way).' },
              { title: 'Accessible Tech', desc: 'Built coding tools for visually impaired students during my ACM internship at IIT Delhi. Tech should work for everyone, period.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">The Journey So Far</h2>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                <h3 className="font-medium text-primary mb-1">Industrial Research (Sept 2025 onwards)</h3>
                <p className="text-sm text-muted-foreground">
                  Built a defect detection pipeline
                  that reduced memory footprint by ~90% and improved accuracy to over 98%. The work ranked 2nd in a company-wide research competition,
                  which was a nice surprise!
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-4 rounded-lg border-l-4 border-accent bg-accent/5">
                <h3 className="font-medium text-accent mb-1">BS Thesis at IISER Bhopal</h3>
                <p className="text-sm text-muted-foreground">
                  Worked with{' '}
                  <a href="https://loneharoon.github.io/" target="_blank" rel="noopener noreferrer" className="link-accent">Dr. Haroon Rashid Lone</a>{' '}
                  on federated learning and differential privacy. Built a custom CNN that works on non-IID data.
                  Also built a privacy-preserving activity recognition pipeline (95.93% accuracy!).
                  Plus co-developed EchoCare, a proof-of-concept for an AI-enabled digital stethoscope.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                <h3 className="font-medium text-primary mb-1">ACM Internship at IIT Delhi (Summer 2024)</h3>
                <p className="text-sm text-muted-foreground">
                  Built AI-assisted accessible coding tools at NCAHT. Worked with screen readers, tactile feedback,
                  and accessible data visualisation. Conducted user studies to test if our stuff was actually useful.
                  This one changed how I think about technology.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Beyond Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SlideIn direction="left">
              <div className="p-4 rounded-xl bg-primary/5">
                <h3 className="font-medium text-foreground mb-3">Some things I'm proud of</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gold Medal in Discus Throw (SANGHARSH Sports 2023, 2024)</li>
                  <li>Silver Medal in Shot Put</li>
                  <li>JEE Paper 2 All India Rank 160</li>
                  <li>Founded Arivu India and Uncharted Chapters for educational access</li>
                  <li>Peer Counselor at IISER Bhopal (2022-2024)</li>
                  <li>Editor at Chrysalis Club, IISER Bhopal's science magazine</li>
                </ul>
              </div>
            </SlideIn>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default About;
