import { Code2, Brain, Zap, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const About = () => {
  return (
    <div className="space-y-12">
      <FadeIn>
        <section className="terminal-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <SlideIn direction="left" className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ishanya"
                className="w-48 h-48 rounded-full object-cover border-2 border-accent shadow-[--shadow-glow]"
              />
            </SlideIn>
            <SlideIn direction="right" className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 gradient-text">Ishanya</h1>
              <p className="text-xl text-accent mb-4">Researcher at TCS Research, Bengaluru</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a recent BS graduate from IISER Bhopal (Electrical Engineering and Computer Science), 
                now working at TCS Research. I like building things that are private, useful, and hopefully 
                don't crash on a Raspberry Pi. When I'm not staring at training logs, 
                you'll find me exploring new places or writing about stuff I find interesting.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>TCS Research, Bengaluru</span>
                </div>
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
                <a href="mailto:ishanya.inbox@gmail.com" className="btn-terminal text-sm">Email Me</a>
                <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="btn-terminal text-sm">LinkedIn</a>
                <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="btn-terminal text-sm">GitHub</a>
              </div>
            </SlideIn>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">What I Work On</h2>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Privacy-Preserving AI', desc: 'Federated learning, differential privacy, and making sure your data stays yours. Currently exploring this at TCS Research.' },
              { icon: Zap, title: 'Edge Intelligence', desc: 'Squeezing ML models onto tiny devices like Raspberry Pi and ESP32. It is surprisingly fun when things actually work.' },
              { icon: Code2, title: 'Accessible Tech', desc: 'Built coding tools for visually impaired students during my ACM internship at IIT Delhi. Tech should work for everyone.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">The Journey So Far</h2>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">TCS Research (Sept 2025 onwards)</h3>
                <p className="text-sm text-muted-foreground">
                  Working on privacy-sensitive intelligent systems in the CTO office. Dealing with multi-modal 
                  physiological data (EEG, ECG, gaze tracking), designing compact architectures for edge deployment, 
                  and building defect detection pipelines for robotic assembly lines. Our work ranked 2nd in a 
                  company-wide CTO Research Competition, which was a nice surprise.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">BS Thesis at IISER Bhopal</h3>
                <p className="text-sm text-muted-foreground">
                  Worked with Dr. Haroon Rashid Lone on federated learning. Built a custom CNN that hits 81.36% 
                  accuracy on non-IID data across Raspberry Pi 5 devices. Also built a differential privacy 
                  activity recognition pipeline that gets 95.93% accuracy. Plus co-developed EchoCare, 
                  a proof-of-concept for a low-cost AI-enabled digital stethoscope.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">ACM Internship at IIT Delhi (Summer 2024)</h3>
                <p className="text-sm text-muted-foreground">
                  Built AI-assisted accessible coding tools at NCAHT. Worked with screen readers, tactile feedback, 
                  and accessible data visualization. Conducted user studies to actually test if our stuff was useful.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">Research Intern at IISER Bhopal (2024-2025)</h3>
                <p className="text-sm text-muted-foreground">
                  Worked with Dr. Santanu Talukder on intelligent sensing. Built an RTD-based MEMS sensing system, 
                  was a finalist in the IEEE SSCS-ISSS MEMS Design Program (led a team across India, Kenya, and Canada!), 
                  and co-developed SightSync, an assistive wearable for visually impaired users.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Beyond the Code</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SlideIn direction="left">
              <h3 className="text-lg font-semibold mb-3">Some Things I'm Proud Of</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>- Gold Medal in Discus Throw (SANGHARSH Sports 2023, 2024)</li>
                <li>- Silver Medal in Shot Put</li>
                <li>- JEE Paper 2 All India Rank 160</li>
                <li>- Founded Arivu India and Uncharted Chapters for educational access</li>
                <li>- Peer Counselor at IISER Bhopal (2022-2024)</li>
                <li>- Editor at Chrysalis Club, IISER Bhopal's science magazine</li>
              </ul>
            </SlideIn>
            <SlideIn direction="right">
              <h3 className="text-lg font-semibold mb-3">Current Vibes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>- Learning about AI ethics through Turing College (EU-funded)</li>
                <li>- AWS Cloud Women Mentoring Program alumni</li>
                <li>- Upcoming: ACM India Summer School at IIT Gandhinagar</li>
                <li>- Upcoming: Privacy Workshop at IIT Delhi</li>
                <li>- Always looking for the next interesting problem</li>
                <li>- Coffee-to-code ratio: approximately 2:1</li>
              </ul>
            </SlideIn>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default About;
