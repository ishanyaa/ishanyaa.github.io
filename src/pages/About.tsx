import { GraduationCap, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const About = () => {
  return (
    <div className="space-y-12">
      <FadeIn>
        <section className="section-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <SlideIn direction="left" className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ishanya"
                className="w-40 h-40 rounded-full object-cover border-2 border-border"
              />
            </SlideIn>
            <SlideIn direction="right" className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2 text-foreground">Ishanya</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Hey! I'm a recent BS graduate from IISER Bhopal (Electrical Engineering and Computer Science).
                I'm deeply curious about AI safety, privacy-preserving AI, and how we can govern AI systems responsibly.
                I love to research, tinker, and ask "why?" a lot. The more I read, the more I realise how much there is to learn,
                and honestly, that's what makes it exciting.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm looking to pursue an MS/PhD and dig deeper into these questions. If any of this sounds interesting to you,
                or if you just want to chat, feel free to {' '}
                <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="link-accent">
                  drop me a message on LinkedIn
                </a>! I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>IISER Bhopal (BS, EECS)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <a href="mailto:ishanya.inbox@gmail.com" className="btn-outline text-sm">Email Me</a>
                <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">LinkedIn</a>
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
              { title: 'Privacy-Preserving AI', desc: 'Federated learning, differential privacy, and making sure your data stays yours. How do we build AI that respects people?' },
              { title: 'AI Safety & Governance', desc: 'How do we make AI systems trustworthy? What does fairness look like in practice? These questions keep me up at night (in a good way).' },
              { title: 'Accessible Tech', desc: 'Built coding tools for visually impaired students during my ACM internship at IIT Delhi. Tech should work for everyone, period.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div>
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
              <div>
                <h3 className="font-medium text-primary mb-1">Researcher (Sept 2025 onwards)</h3>
                <p className="text-sm text-muted-foreground">
                  Working on privacy-sensitive intelligent systems. Built a defect detection pipeline
                  that reduced memory footprint by ~90% and improved accuracy to over 98%. Deployed inference
                  using ONNX Runtime on constrained devices. The work ranked 2nd in a company-wide research competition,
                  which was a nice surprise!
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-medium text-primary mb-1">BS Thesis at IISER Bhopal</h3>
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
              <div>
                <h3 className="font-medium text-primary mb-1">ACM Internship at IIT Delhi (Summer 2024)</h3>
                <p className="text-sm text-muted-foreground">
                  Built AI-assisted accessible coding tools at NCAHT. Worked with screen readers, tactile feedback,
                  and accessible data visualisation. Conducted user studies to test if our stuff was actually useful.
                  This one changed how I think about technology.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div>
                <h3 className="font-medium text-primary mb-1">Research Intern at IISER Bhopal (2024-2025)</h3>
                <p className="text-sm text-muted-foreground">
                  Worked with{' '}
                  <a href="https://sites.google.com/site/santanutalukderiiscnanoscience/principal-investigator" target="_blank" rel="noopener noreferrer" className="link-accent">Dr. Santanu Talukder</a>{' '}
                  on intelligent sensing. Built an RTD-based MEMS sensing system and co-developed SightSync,
                  an assistive wearable for visually impaired users (IC-MNSS 2024 finalist at IISc).
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
              <h3 className="font-medium text-foreground mb-3">Some things I'm proud of</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Gold Medal in Discus Throw (SANGHARSH Sports 2023, 2024)</li>
                <li>Silver Medal in Shot Put</li>
                <li>JEE Paper 2 All India Rank 160</li>
                <li>Founded Arivu India and Uncharted Chapters for educational access</li>
                <li>Peer Counselor at IISER Bhopal (2022-2024)</li>
                <li>Editor at Chrysalis Club, IISER Bhopal's science magazine</li>
              </ul>
            </SlideIn>
            <SlideIn direction="right">
              <h3 className="font-medium text-foreground mb-3">Currently exploring</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>AI ethics through Turing College (EU-funded)</li>
                <li>AWS Cloud Women Mentoring Program alumni</li>
                <li>Upcoming: ACM India Summer School at IIT Gandhinagar</li>
                <li>Upcoming: Privacy Workshop at IIT Delhi</li>
                <li>Always looking for the next interesting problem</li>
              </ul>
            </SlideIn>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default About;
