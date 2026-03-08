import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import art1 from '@/assets/art1.png';
import art2 from '@/assets/art2.png';
import graduationPic from '@/assets/ishanya-graduation.jpeg';
import msrAiHealth from '@/assets/msr-aihealth.jpeg';

const Misc = () => {
  const quickFacts = [
    'Coffee-to-code ratio: approximately 2:1 ☕',
    'Gold Medal in Discus Throw (SANGHARSH Sports 2023 & 2024). Yes, really. 🥇',
    'JEE Paper 2 AIR 160, which means I can technically do non-CS things too',
    'Former Peer Counselor at IISER Bhopal, because listening is a skill too 🤝',
    'Navigation skill: excellent with Google Maps, questionable without 🗺️',
    'Has read more research papers than novels (working on fixing that) 📚',
  ];

  const initiatives = [
    {
      title: 'Arivu India',
      period: '2022 - Present',
      description: 'An initiative I started to advance educational access for under-resourced students through mentorship and resource sharing.',
      url: 'https://sites.google.com/view/arivuindia/'
    },
    {
      title: 'Uncharted Chapters',
      period: '2022 - Present',
      description: 'Another initiative for digital inclusion. Because everyone deserves access to good learning resources.',
      url: 'https://sites.google.com/view/unchartedchapters'
    }
  ];

  const leadership = [
    {
      title: 'Editor and Coordinator, Chrysalis Club',
      period: 'Feb 2022 - Dec 2024',
      description: "IISER Bhopal's science communication magazine. Content development and editorial coordination.",
      url: 'https://chrysalis-iiserb.vercel.app/team/2024'
    },
    {
      title: 'Peer Counselor, Office of Student Affairs',
      period: 'Apr 2022 - Apr 2024',
      description: "Peer support and well-being guidance as part of IISER Bhopal's mental-health support program.",
      url: 'https://sites.google.com/iiserb.ac.in/counseling-cell/peer-support-program'
    }
  ];

  const memes = [
    {
      title: 'Conference Paper Deadline',
      description: 'Writing the "future work" section at 3 AM because the submission portal closes in 47 minutes',
      category: 'Academic Life',
    },
    {
      title: 'Privacy Preserving AI',
      description: 'When differential privacy adds too much noise and your model predicts everything as "maybe"',
      category: 'Research',
    },
    {
      title: 'On Debugging',
      description: 'Debugging is like being a detective in a crime movie where you are also the murderer.',
      category: 'Programming',
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <h1 className="text-3xl font-bold text-foreground mb-3">Misc 🎨</h1>
          <p className="text-muted-foreground">
            The fun, experimental, and slightly chaotic side of things.
            Random thoughts, initiatives, art, and evidence that I don't take myself too seriously.
          </p>
        </section>
      </FadeIn>

      {/* Graduation */}
      <FadeIn>
        <section className="section-card fun-gradient">
          <h2 className="text-xl font-semibold mb-4 text-foreground">🎓 Graduated!</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <img src={graduationPic} alt="Ishanya at IISER Bhopal graduation" className="w-full sm:w-64 rounded-xl shadow-md border border-border" />
            <div>
              <p className="text-muted-foreground">
                Graduated from IISER Bhopal with a BS in Electrical Engineering and Computer Science, August 2025.
                Four years of learning, growing, tinkering, and asking too many questions. What a ride!
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* AIxHealth Event */}
      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">🏥 AIxHealth: Bridging Research and Practice</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <img src={msrAiHealth} alt="Ishanya at the AIxHealth pre-summit event" className="w-full sm:w-64 rounded-xl shadow-md border border-border" />
            <div>
              <p className="text-muted-foreground text-sm mb-2">
                Attended the <a href="https://www.aixhealth.info/blr" target="_blank" rel="noopener noreferrer" className="link-accent">AIxHealth Workshop</a>,
                the official pre-summit event of the India AI Impact Summit 2026 in Bengaluru.
              </p>
              <p className="text-muted-foreground text-sm">
                The workshop focused on bridging research and practice in AI and global health equity.
                It brought together practitioners from non-profits, healthcare, and academic/industry researchers
                to align research agendas with practical challenges. We discussed responsible development,
                integration, and governance of AI for global health. A truly eye-opening experience!
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Art & Pics */}
      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">🎨 Art & Pics</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            When I'm not reading papers or writing code, I sometimes doodle. Here are a couple of pieces I'm fond of.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <img src={art1} alt="Art by Ishanya - piece 1" className="w-full rounded-xl shadow-md border border-border" />
            </div>
            <div>
              <img src={art2} alt="Art by Ishanya - piece 2" className="w-full rounded-xl shadow-md border border-border" />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-2">
            {quickFacts.map((fact, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Initiatives</h2>
          <div className="space-y-4">
            {initiatives.map((item, i) => (
              <div key={i} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs link-accent">[Visit]</a>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Leadership & Service</h2>
          <div className="space-y-4">
            {leadership.map((item, i) => (
              <div key={i} className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs link-accent">[Page]</a>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Research Humor 😄</h2>
          <div className="space-y-3">
            {memes.map((meme, index) => (
              <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground text-sm">{meme.title}</h3>
                  <span className="tag-blue text-xs">{meme.category}</span>
                </div>
                <p className="text-sm text-muted-foreground italic">"{meme.description}"</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Misc;
