import { Smile, Camera, Code2, Coffee, Lightbulb, Heart, Zap } from 'lucide-react';

const Misc = () => {
  const memes = [
    {
      title: 'Federated Learning vs Reality',
      description: 'When your model works perfectly in simulation but fails on actual Raspberry Pi devices',
      category: 'Research Humor',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Debugging Verilog',
      description: 'Me explaining to students why their HDL code synthesizes but doesn\'t work',
      category: 'Teaching Life',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop'
    },
    {
      title: 'Conference Paper Deadline',
      description: 'Writing "future work" section at 3 AM before submission',
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
      title: 'Terminal-Style Portfolio',
      description: 'This website! Built with React + TypeScript, designed like a developer terminal',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      status: 'Live'
    },
    {
      title: 'Quantum Cat Classifier',
      description: 'Using Grover\'s algorithm to find the best cat photos (because why not?)',
      tech: ['Qiskit', 'Python', 'Quantum Humor'],
      status: 'Prototype'
    },
    {
      title: 'AI Meme Generator',
      description: 'Training ML models to generate computer science memes (surprisingly effective)',
      tech: ['GPT Fine-tuning', 'Image Generation', 'Comedy'],
      status: 'Training'
    },
    {
      title: 'Raspberry Pi Cluster',
      description: 'Mini supercomputer for testing federated learning at home',
      tech: ['Raspberry Pi', 'Docker', 'Networking'],
      status: 'Building'
    }
  ];

  const randomThoughts = [
    {
      title: 'On Debugging',
      content: 'Debugging is like being a detective in a crime movie where you are also the murderer.',
      category: 'Programming Philosophy'
    },
    {
      title: 'Research Life',
      content: 'Academia: Where "it works on my machine" becomes "it works in our controlled environment with specific hyperparameters and dataset splits."',
      category: 'Academic Truth'
    },
    {
      title: 'Teaching Insights',
      content: 'Teaching Verilog has taught me that hardware description languages are basically just very expensive ways to write bugs.',
      category: 'Teaching Wisdom'
    },
    {
      title: 'Conference Presentations',
      content: 'The best part about presenting research is explaining complex algorithms in exactly 17 slides while pretending you have infinite time.',
      category: 'Conference Life'
    }
  ];

  const quickFacts = [
    '☕ Coffee-to-code ratio: approximately 2:1',
    '🏃‍♀️ Can throw a discus farther than most people can run',
    '🤖 Owns more Raspberry Pis than most people own houseplants',
    '📚 Has read more research papers than novels (unfortunately)',
    '🎯 Can debug Verilog and explain it to confused undergrads simultaneously',
    '🧠 Thinks in both Python and mathematical notation',
    '🌍 Navigation skill: excellent with maps, terrible with social cues',
    '🔬 Believes every problem can be solved with enough caffeine and federated learning'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <h1 className="text-3xl font-bold gradient-text mb-4">Misc</h1>
        <p className="text-muted-foreground">
          The fun, experimental, and slightly chaotic side of my digital life. 
          Memes, side projects, random thoughts, and evidence that I have a sense of humor 
          (despite being a computer science researcher).
        </p>
      </section>

      {/* Quick Facts */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Quick Facts About Me</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {quickFacts.map((fact, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="text-accent text-sm">{fact}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Memes Section */}
      <section className="terminal-card">
        <div className="flex items-center gap-3 mb-6">
          <Smile className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold glow-text">Research Life Memes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {memes.map((meme, index) => (
            <div key={index} className="bg-muted/30 rounded-lg overflow-hidden card-hover">
              <img
                src={meme.image}
                alt={meme.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{meme.title}</h3>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">
                    {meme.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{meme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side Experiments */}
      <section className="terminal-card">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold glow-text">Side Experiments</h2>
        </div>
        <div className="space-y-4">
          {experiments.map((experiment, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{experiment.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-md ${
                      experiment.status === 'Live' 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {experiment.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{experiment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experiment.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Random Thoughts */}
      <section className="terminal-card">
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold glow-text">Random Thoughts & Insights</h2>
        </div>
        <div className="space-y-4">
          {randomThoughts.map((thought, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-accent">{thought.title}</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded-md">
                  {thought.category}
                </span>
              </div>
              <p className="text-muted-foreground italic">"{thought.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Dumps */}
      <section className="terminal-card">
        <div className="flex items-center gap-3 mb-6">
          <Camera className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold glow-text">Photo Dumps</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop"
            alt="Random moment"
            className="w-full h-32 object-cover rounded-lg card-hover"
          />
          <img
            src="https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=200&h=200&fit=crop"
            alt="Lab life"
            className="w-full h-32 object-cover rounded-lg card-hover"
          />
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop"
            alt="Conference vibes"
            className="w-full h-32 object-cover rounded-lg card-hover"
          />
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=200&h=200&fit=crop"
            alt="Coding session"
            className="w-full h-32 object-cover rounded-lg card-hover"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Random captures from conferences, lab work, travel, and daily life adventures.
        </p>
      </section>

      {/* Easter Eggs */}
      <section className="terminal-card text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold glow-text">Hidden Features</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          This website has some hidden terminal commands. Open your browser's console and try typing:
        </p>
        <div className="space-y-2 text-sm font-mono bg-muted/30 p-4 rounded-lg">
          <div><span className="text-accent">{'>'}</span> <span className="text-green-400">ishanya.hack()</span> <span className="text-muted-foreground">// See what happens 😉</span></div>
          <div><span className="text-accent">{'>'}</span> <span className="text-green-400">federated.train()</span> <span className="text-muted-foreground">// Start training simulation</span></div>
          <div><span className="text-accent">{'>'}</span> <span className="text-green-400">quantum.entangle()</span> <span className="text-muted-foreground">// Quantum magic</span></div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          * No actual quantum entanglement or federated training will occur
        </p>
      </section>
    </div>
  );
};

export default Misc;