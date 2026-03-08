import { Smile, Camera, Coffee, Heart } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Misc = () => {
  const memes = [
    {
      title: 'Federated Learning vs Reality',
      description: 'When your model works perfectly in simulation but the Raspberry Pi runs out of memory at epoch 3',
      category: 'Research Humor',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Debugging Verilog',
      description: 'Me explaining to students why their HDL code synthesises into something confidently wrong',
      category: 'Teaching Life',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop'
    },
    {
      title: 'Conference Paper Deadline',
      description: 'Writing the "future work" section at 3 AM because the submission portal closes in 47 minutes',
      category: 'Academic Struggles',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop'
    },
    {
      title: 'Privacy Preserving AI',
      description: 'When differential privacy adds too much noise and your model predicts everything as "maybe"',
      category: 'AI/ML Humor',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop'
    }
  ];

  const experiments = [
    {
      title: 'This Portfolio',
      description: 'The website you are looking at right now! React + TypeScript + Tailwind with a terminal-inspired design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      status: 'Live'
    },
    {
      title: 'Raspberry Pi Cluster',
      description: 'A mini cluster for testing federated learning at home. It gets warm.',
      tech: ['Raspberry Pi', 'Docker', 'Networking'],
      status: 'Built'
    },
    {
      title: 'Arivu India',
      description: 'An initiative I founded to advance educational access for under-resourced students through mentorship and resource sharing.',
      tech: ['Education', 'Mentorship', 'Community'],
      status: 'Active',
      url: 'https://sites.google.com/view/arivuindia/'
    },
    {
      title: 'Uncharted Chapters',
      description: 'Another initiative for digital inclusion. Because everyone deserves access to good learning resources.',
      tech: ['Education', 'Digital Inclusion'],
      status: 'Active',
      url: 'https://sites.google.com/view/unchartedchapters'
    }
  ];

  const randomThoughts = [
    {
      title: 'On Debugging',
      content: 'Debugging is like being a detective in a crime movie where you are also the murderer.',
      category: 'Programming'
    },
    {
      title: 'Research Life',
      content: 'Academia: Where "it works on my machine" becomes "it works in our controlled environment with specific hyperparameters and dataset splits."',
      category: 'Academia'
    },
    {
      title: 'Teaching Insights',
      content: 'Teaching Verilog taught me that hardware description languages are basically very expensive ways to write bugs that run in parallel.',
      category: 'Teaching'
    },
    {
      title: 'Edge Computing',
      content: 'Nothing humbles you quite like deploying a model on a Raspberry Pi and watching it run out of memory in the first 30 seconds.',
      category: 'Research'
    }
  ];

  const quickFacts = [
    'Coffee-to-code ratio: approximately 2:1',
    'Can throw a discus farther than most people can run (Gold Medal, SANGHARSH 2023 & 2024)',
    'Owns more Raspberry Pis than most people own houseplants',
    'Has read more research papers than novels (working on fixing that)',
    'Can debug Verilog and explain it to confused undergrads simultaneously',
    'Navigation skill: excellent with Google Maps, questionable without',
    'JEE Paper 2 AIR 160, which means I can also do non-CS things (theoretically)',
    'Former Peer Counselor at IISER Bhopal, because listening is a skill too',
  ];

  const leadership = [
    {
      title: 'Founder, Arivu India & Uncharted Chapters',
      period: '2022 - Present',
      description: 'Advancing educational access and digital inclusion for under-resourced students through mentorship and resource sharing.',
      urls: [
        { label: 'Arivu India', url: 'https://sites.google.com/view/arivuindia/' },
        { label: 'Uncharted Chapters', url: 'https://sites.google.com/view/unchartedchapters' }
      ]
    },
    {
      title: 'Editor and Coordinator, Chrysalis Club',
      period: 'Feb 2022 - Dec 2024',
      description: "IISER Bhopal's science communication magazine. Content development and editorial coordination.",
      urls: [{ label: 'Team Page', url: 'https://chrysalis-iiserb.vercel.app/team/2024' }]
    },
    {
      title: 'Peer Counselor, Office of Student Affairs',
      period: 'Apr 2022 - Apr 2024',
      description: "Peer support and well-being guidance as part of IISER Bhopal's mental-health support program.",
      urls: [{ label: 'Program Page', url: 'https://sites.google.com/iiserb.ac.in/counseling-cell/peer-support-program' }]
    }
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <h1 className="text-3xl font-bold gradient-text mb-4">Misc</h1>
          <p className="text-muted-foreground">
            The fun, experimental, and slightly chaotic side of things. 
            Side projects, random thoughts, and evidence that I don't take myself too seriously.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Quick Facts</h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-3">
            {quickFacts.map((fact, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Leadership & Service</h2>
          <div className="space-y-4">
            {leadership.map((item, i) => (
              <div key={i} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.urls.map((u) => (
                    <a key={u.label} href={u.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">[{u.label}]</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Side Projects & Initiatives</h2>
          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {experiments.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">{exp.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs bg-muted px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                  {exp.url && (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline mt-2 inline-block">[Visit]</a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <div className="flex items-center gap-3 mb-6">
            <Smile className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold glow-text">Research Life Memes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {memes.map((meme, index) => (
              <div key={index} className="bg-muted/30 rounded-lg overflow-hidden card-hover">
                <img src={meme.image} alt={meme.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{meme.title}</h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">{meme.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{meme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <div className="flex items-center gap-3 mb-6">
            <Coffee className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold glow-text">Random Thoughts</h2>
          </div>
          <div className="space-y-4">
            {randomThoughts.map((thought, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border-l-4 border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-accent">{thought.title}</h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md">{thought.category}</span>
                </div>
                <p className="text-muted-foreground italic">"{thought.content}"</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Misc;
