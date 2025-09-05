import { ExternalLink, Download, BookOpen, Code, Brain, Zap, Star } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Federated Learning & Privacy',
      icon: <Brain className="w-5 h-5" />,
      resources: [
        {
          title: 'Flower: Federated Learning Framework',
          url: 'https://flower.dev/',
          type: 'Framework',
          description: 'Comprehensive federated learning framework for research and production'
        },
        {
          title: 'PySyft: Private ML Library',
          url: 'https://github.com/OpenMined/PySyft',
          type: 'Library',
          description: 'Privacy-preserving machine learning library with federated learning support'
        },
        {
          title: 'Differential Privacy Papers',
          url: '#',
          type: 'Research',
          description: 'Curated collection of essential differential privacy research papers'
        },
        {
          title: 'Non-IID Data Challenges in FL',
          url: '#',
          type: 'Tutorial',
          description: 'Comprehensive guide to handling non-independent and identically distributed data'
        }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: <Zap className="w-5 h-5" />,
      resources: [
        {
          title: 'PyTorch Documentation',
          url: 'https://pytorch.org/docs/',
          type: 'Documentation',
          description: 'Official PyTorch documentation for deep learning implementations'
        },
        {
          title: 'scikit-learn User Guide',
          url: 'https://scikit-learn.org/stable/user_guide.html',
          type: 'Guide',
          description: 'Comprehensive machine learning algorithms and techniques'
        },
        {
          title: 'Neural Network Architectures',
          url: '#',
          type: 'Cheatsheet',
          description: 'Visual guide to popular neural network architectures and when to use them'
        },
        {
          title: 'Optimization Algorithms Comparison',
          url: '#',
          type: 'Analysis',
          description: 'Performance comparison of Adam, AdamW, AdaBelief, and other optimizers'
        }
      ]
    },
    {
      title: 'Hardware & IoT',
      icon: <Code className="w-5 h-5" />,
      resources: [
        {
          title: 'Raspberry Pi Foundation Docs',
          url: 'https://www.raspberrypi.org/documentation/',
          type: 'Documentation',
          description: 'Official Raspberry Pi documentation for edge computing projects'
        },
        {
          title: 'ESP32 Programming Guide',
          url: '#',
          type: 'Guide',
          description: 'Comprehensive guide for ESP32 microcontroller programming and IoT projects'
        },
        {
          title: 'PCB Design Best Practices',
          url: '#',
          type: 'Tutorial',
          description: 'Professional PCB design guidelines for efficient hardware development'
        },
        {
          title: 'Verilog HDL Reference',
          url: '#',
          type: 'Reference',
          description: 'Complete Verilog syntax reference and design patterns'
        }
      ]
    },
    {
      title: 'Academic & Research',
      icon: <BookOpen className="w-5 h-5" />,
      resources: [
        {
          title: 'Google Scholar Profile',
          url: '#',
          type: 'Profile',
          description: 'My research publications and citation metrics'
        },
        {
          title: 'ArXiv CS Papers',
          url: 'https://arxiv.org/list/cs.LG/recent',
          type: 'Repository',
          description: 'Latest computer science research papers on machine learning'
        },
        {
          title: 'Research Methodology Guide',
          url: '#',
          type: 'Guide',
          description: 'Best practices for conducting reproducible computer science research'
        },
        {
          title: 'LaTeX Templates',
          url: '#',
          type: 'Templates',
          description: 'Professional LaTeX templates for research papers and presentations'
        }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: <Star className="w-5 h-5" />,
      resources: [
        {
          title: 'Qiskit Textbook',
          url: 'https://qiskit.org/textbook/',
          type: 'Book',
          description: 'Interactive quantum computing textbook with practical examples'
        },
        {
          title: 'Quantum Algorithm Zoo',
          url: '#',
          type: 'Reference',
          description: 'Comprehensive list of quantum algorithms and their complexities'
        },
        {
          title: 'Grover\'s Algorithm Implementation',
          url: '#',
          type: 'Code',
          description: 'Complete implementation of Grover\'s algorithm for SAT problems'
        },
        {
          title: 'Quantum Error Correction',
          url: '#',
          type: 'Tutorial',
          description: 'Introduction to quantum error correction codes and techniques'
        }
      ]
    },
    {
      title: 'Tools & Productivity',
      icon: <Code className="w-5 h-5" />,
      resources: [
        {
          title: 'Git Best Practices',
          url: '#',
          type: 'Guide',
          description: 'Professional Git workflow for research and collaborative projects'
        },
        {
          title: 'VS Code Extensions for Research',
          url: '#',
          type: 'List',
          description: 'Essential VS Code extensions for data science and research'
        },
        {
          title: 'Python Virtual Environments',
          url: '#',
          type: 'Tutorial',
          description: 'Managing Python environments for reproducible research'
        },
        {
          title: 'Jupyter Notebook Tips',
          url: '#',
          type: 'Tips',
          description: 'Advanced Jupyter notebook features for better research workflow'
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Framework': 'bg-blue-500/10 text-blue-400',
      'Library': 'bg-green-500/10 text-green-400',
      'Research': 'bg-purple-500/10 text-purple-400',
      'Tutorial': 'bg-orange-500/10 text-orange-400',
      'Documentation': 'bg-cyan-500/10 text-cyan-400',
      'Guide': 'bg-pink-500/10 text-pink-400',
      'Reference': 'bg-yellow-500/10 text-yellow-400',
      'Code': 'bg-red-500/10 text-red-400'
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <h1 className="text-3xl font-bold gradient-text mb-4">Resources</h1>
        <p className="text-muted-foreground">
          A curated collection of tools, papers, frameworks, and guides that have been invaluable 
          in my research journey. From federated learning frameworks to quantum computing tutorials.
        </p>
      </section>

      {/* Quick Access */}
      <section className="terminal-card">
        <h2 className="text-xl font-bold mb-4 glow-text">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#" className="btn-terminal flex items-center gap-2 text-center justify-center">
            <Download className="w-4 h-4" />
            My Research Papers
          </a>
          <a href="#" className="btn-terminal flex items-center gap-2 text-center justify-center">
            <Code className="w-4 h-4" />
            Code Repositories
          </a>
          <a href="#" className="btn-terminal flex items-center gap-2 text-center justify-center">
            <BookOpen className="w-4 h-4" />
            Reading List
          </a>
        </div>
      </section>

      {/* Resource Categories */}
      <div className="space-y-8">
        {resourceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="terminal-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold glow-text">{category.title}</h2>
            </div>

            <div className="grid gap-4">
              {category.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold hover:text-accent transition-colors">
                        {resource.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-md ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Open resource"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contribution */}
      <section className="terminal-card text-center">
        <h2 className="text-2xl font-bold mb-4 glow-text">Contribute</h2>
        <p className="text-muted-foreground mb-6">
          Know of a great resource that should be here? Found a broken link? 
          I'm always looking to improve this collection!
        </p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:iiser.ishanya@gmail.com" className="btn-terminal">
            Suggest Resource
          </a>
          <a href="#" className="btn-terminal">
            Report Issue
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="terminal-card bg-muted/30">
        <h3 className="text-sm font-semibold mb-2 text-accent">Disclaimer</h3>
        <p className="text-xs text-muted-foreground">
          These resources are shared for educational and research purposes. 
          Some links may be placeholders pending proper implementation. 
          Always verify the latest information from official sources.
        </p>
      </section>
    </div>
  );
};

export default Resources;