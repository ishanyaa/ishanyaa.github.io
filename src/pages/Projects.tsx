import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'Federated Learning CNN',
    category: 'Research Project',
    period: 'Dec 2024 - Apr 2025',
    description: 'Custom Federated Convolutional Neural Network for image classification on non-IID client data, achieving 81.36% test accuracy.',
    tech: ['Python', 'TensorFlow', 'Raspberry Pi', 'Federated Learning'],
    highlights: ['Outperformed standard pre-trained models', 'Deployed on Raspberry Pi 5 edge devices', 'Real-world decentralized environment simulation'],
    status: 'In Progress',
    links: {
      github: '#',
      demo: '#',
      paper: '#'
    }
  }, {
    title: 'Privacy-Preserving Activity Recognition',
    category: 'IoT & Privacy',
    period: 'Jan 2025 - Apr 2025',
    description: 'Edge-based activity recognition system using IoT sensors with differential privacy guarantees.',
    tech: ['Python', 'IoT Sensors', 'Differential Privacy', 'Edge Computing'],
    highlights: ['95.93% classification accuracy achieved', 'Formal privacy guarantees at the edge', 'Real-time deployment on embedded devices'],
    status: 'Completed',
    links: {
      github: '#',
      paper: '#'
    }
  }, {
    title: 'Accessible Coding Platform',
    category: 'Accessibility Tech',
    period: 'June 2024 - Sept 2024',
    description: 'Python coding platform with integrated AI assistance for visually impaired students, featuring screen reader compatibility.',
    tech: ['Python', 'AI/ML', 'NVDA', 'Accessibility APIs'],
    highlights: ['Screen reader optimized interface', 'AI-powered coding doubt resolution', 'Tactile diagram integration'],
    status: 'Completed',
    links: {
      github: '#',
      demo: '#'
    }
  }, {
    title: 'RTD Temperature Monitoring',
    category: 'Hardware Project',
    period: 'Aug 2024 - Dec 2024',
    description: 'PCB design integrating RTD with ESP32 and OLED display for real-time temperature monitoring in MEMS applications.',
    tech: ['ESP32', 'PCB Design', 'OLED Display', 'C++'],
    highlights: ['Compact and efficient PCB layout', 'Real-time temperature visualization', 'Low power consumption design'],
    status: 'Completed',
    links: {
      github: '#'
    }
  }, {
    title: 'Neural Simulated Annealing Optimizer',
    category: 'ML Research',
    period: 'Jan 2025 - Apr 2025',
    description: 'Benchmarking study of Qualcomm AI Research\'s NSA optimizer against traditional optimizers.',
    tech: ['Python', 'PyTorch', 'Optimization Algorithms'],
    highlights: ['Comprehensive optimizer comparison', 'Performance analysis across multiple metrics', 'Superior configuration proposals'],
    status: 'In Progress',
    links: {
      github: '#'
    }
  }, {
    title: 'Grover\'s Algorithm for SAT',
    category: 'Quantum Computing',
    period: 'Aug 2024 - Nov 2024',
    description: 'Quantum circuit implementation of Grover\'s Algorithm for efficient SAT problem solving.',
    tech: ['Qiskit', 'Python', 'Quantum Circuits'],
    highlights: ['Quadratic speedup demonstration', 'Oracle-based quantum circuit construction', 'Amplitude amplification implementation'],
    status: 'Completed',
    links: {
      github: '#'
    }
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/10';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Research Project':
        return <Users className="w-4 h-4" />;
      case 'Hardware Project':
        return <Zap className="w-4 h-4" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };
  return <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <h1 className="text-3xl font-bold gradient-text mb-4">Projects</h1>
        <p className="text-muted-foreground">
          A collection of research projects, experiments, and implementations spanning 
          federated learning, accessibility tech, IoT systems, and quantum computing.
        </p>
      </section>

      {/* Project Grid */}
      <div className="grid gap-6">
        {projects.map((project, index) => <div key={index} className="terminal-card card-hover">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                {project.links.github && <a href={project.links.github} className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub Repository">
                    <Github className="w-5 h-5" />
                  </a>}
                {project.links.demo && <a href={project.links.demo} className="text-muted-foreground hover:text-accent transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>}
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 text-accent">Key Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.highlights.map((highlight, idx) => <li key={idx}>• {highlight}</li>)}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-2 text-accent">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>
          </div>)}
      </div>

      {/* Call to action */}
      <section className="terminal-card text-center">
        <h2 className="text-2xl font-bold mb-4 glow-text">Interested in Collaboration?</h2>
        <p className="text-muted-foreground mb-6">
          I'm always open to discussing research opportunities, open-source contributions, 
          or interesting problems to solve.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:iiser.ishanya@gmail.com" className="btn-terminal">
            Get in Touch
          </a>
          <a href="https://github.com/ishanya" className="btn-terminal flex items-center gap-2">
            <Github className="w-4 h-4" />
            View All Projects
          </a>
        </div>
      </section>
    </div>;
};
export default Projects;