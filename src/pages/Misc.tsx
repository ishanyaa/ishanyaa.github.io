import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Misc = () => {
  const quickFacts = [
    'Coffee-to-code ratio: approximately 2:1',
    'Gold Medal in Discus Throw (SANGHARSH Sports 2023 & 2024). Yes, really.',
    'JEE Paper 2 AIR 160, which means I can technically do non-CS things too',
    'Former Peer Counselor at IISER Bhopal, because listening is a skill too',
    'Navigation skill: excellent with Google Maps, questionable without',
    'Has read more research papers than novels (working on fixing that)',
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
          <h1 className="text-3xl font-bold text-foreground mb-3">Misc</h1>
          <p className="text-muted-foreground">
            The fun, experimental, and slightly chaotic side of things.
            Random thoughts, initiatives, and evidence that I don't take myself too seriously.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h2>
          <StaggerContainer className="grid sm:grid-cols-2 gap-2">
            {quickFacts.map((fact, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
                  <span className="text-primary mt-0.5">·</span>
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
              <div key={i} className="p-4 bg-secondary/50 rounded-lg">
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
              <div key={i} className="p-4 bg-secondary/50 rounded-lg">
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
          <h2 className="text-xl font-semibold mb-4 text-foreground">Research Humor</h2>
          <div className="space-y-3">
            {memes.map((meme, index) => (
              <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground text-sm">{meme.title}</h3>
                  <span className="tag text-xs">{meme.category}</span>
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
