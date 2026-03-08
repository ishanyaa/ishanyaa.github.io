import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Projects = () => {
  const projects = [
    {
      title: 'Hierarchical Sensor-Vision Defect Detection',
      category: 'Industry Research',
      period: 'Sept 2025 - Present',
      description: 'Built a defect detection pipeline for a robotic rocket assembly line at TCS Research. Combines lightweight signal-based classifiers with on-demand deep vision models using mixture-of-experts.',
      tech: ['Python', 'ONNX Runtime', 'Edge AI', 'Computer Vision'],
      highlights: ['Reduced edge memory footprint by ~90%', 'Improved accuracy from ~54% (ML-only) to >98%', 'Ranked 2nd in TCS company-wide CTO Research Competition'],
      status: 'Active',
      links: { certificate: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/certificates/Ishanya_TCSResearchPrize.pdf' }
    },
    {
      title: 'Federated Learning CNN (FLCNN)',
      category: 'BS Thesis',
      period: 'Nov 2024 - May 2025',
      description: 'Custom federated CNN for CIFAR-10 classification on Raspberry Pi 5 clients. Handles non-IID data, heterogeneous compute, and intermittent connectivity.',
      tech: ['Python', 'PyTorch', 'Flower', 'Raspberry Pi 5'],
      highlights: ['81.36% test accuracy on non-IID data', 'Competitive with ShuffleNetV2 under resource constraints', 'Deployed on actual Raspberry Pi hardware'],
      status: 'Completed',
      links: {}
    },
    {
      title: 'Privacy-Preserving Activity Recognition',
      category: 'Edge AI / Privacy',
      period: 'Nov 2024 - May 2025',
      description: 'Local differential privacy activity recognition pipeline using RPi4B and ADXL Sensor. Enforces formal privacy guarantees while keeping accuracy high.',
      tech: ['Python', 'Differential Privacy', 'Raspberry Pi 4B', 'ADXL Sensor'],
      highlights: ['95.93% classification accuracy', 'Formal epsilon-differential privacy guarantees', 'Fully on-device processing'],
      status: 'Completed',
      links: {}
    },
    {
      title: 'EchoCare',
      category: 'Healthcare AI',
      period: '2024 - 2025',
      description: 'Proof-of-concept for a low-cost AI-enabled digital stethoscope. Designed the end-to-end pipeline for audio data acquisition, preprocessing, and lightweight ML inference under edge constraints.',
      tech: ['Python', 'Audio Processing', 'Federated Learning', 'Edge AI'],
      highlights: ['Grant-based translational research', 'Federated training strategy for patient data privacy', 'Designed for low-connectivity environments'],
      status: 'Submitted',
      links: { paper: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/EchoCare.pptx.pdf' }
    },
    {
      title: 'SightSync',
      category: 'Assistive Tech',
      period: '2024',
      description: 'An assistive wearable for visually impaired users integrating depth sensing, computer vision object recognition, and voice feedback for navigation. IC-MNSS 2024 Student Contest Finalist at IISc.',
      tech: ['Computer Vision', 'Depth Sensing', 'Voice Feedback', 'Wearables'],
      highlights: ['Finalist at IC-MNSS 2024 at IISc Bengaluru', 'Real-time object recognition and navigation', 'Voice-based feedback loop'],
      status: 'Completed',
      links: { paper: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/ICMNSS_SightSync.pdf' }
    },
    {
      title: 'RTD-based MEMS Sensing System',
      category: 'Hardware / IoT',
      period: '2024',
      description: 'PCB integrating RTD sensor, ESP32, and OLED display for real-time temperature monitoring. Optimised for low power consumption and embedded deployment.',
      tech: ['ESP32', 'PCB Design', 'OLED Display', 'C++'],
      highlights: ['Compact low-power PCB layout', 'Real-time temperature visualization', 'Part of broader MEMS research'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/micro-electromechanical-systems' }
    },
    {
      title: 'MEMS Micro-Mirror Design',
      category: 'Hardware / MEMS',
      period: '2024',
      description: 'Designed and simulated an electrostatically actuated tip-tilt micro-mirror (500um x 500um) for beam steering. IEEE SSCS-ISSS MEMS Design Program Finalist.',
      tech: ['MEMS', 'Simulation', 'AutoCAD'],
      highlights: ['IEEE SSCS-ISSS MEMS Design Finalist', 'Led multi-institutional team (India, Kenya, Canada)', 'Stress-displacement analysis for precise beam steering'],
      status: 'Completed',
      links: { paper: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/IEEEMEMS.pdf' }
    },
    {
      title: 'Neural Simulated Annealing Optimiser Benchmarking',
      category: 'ML Research',
      period: 'Jan 2025 - Apr 2025',
      description: "Benchmarked Qualcomm AI Research's NSA framework across optimisers (Adam, AdamW, AdaBelief, Adadelta, NAdam). Proposed improved optimiser configurations.",
      tech: ['Python', 'PyTorch', 'Optimization'],
      highlights: ['Comprehensive optimiser comparison', 'Performance-efficiency tradeoff analysis', 'Proposed improved configurations'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/SAOptimisation' }
    },
    {
      title: "Grover's Algorithm for SAT Problems",
      category: 'Quantum Computing',
      period: 'Aug 2024 - Nov 2024',
      description: 'Designed an oracle-based quantum circuit to identify marked SAT solutions using amplitude amplification. Demonstrated quadratic speedup over classical search.',
      tech: ['Qiskit', 'Python', 'Quantum Circuits'],
      highlights: ['Quadratic speedup demonstration', 'Oracle-based quantum circuit', 'Successful retrieval of target states'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/Grovers_Algorithm' }
    },
    {
      title: 'Unsupervised Clustering & Dimensionality Reduction',
      category: 'ML',
      period: 'Oct 2023',
      description: 'Implemented k-means, hierarchical, buckshot, DBSCAN clustering and PCA, t-SNE dimensionality reduction. Applied SelectKBest feature selection for better cluster separation.',
      tech: ['Python', 'Scikit-learn', 'NumPy'],
      highlights: ['Multiple clustering algorithms compared', 'Feature selection for improved results', 'Comprehensive analysis'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa' }
    },
    {
      title: 'Ferroelectric Memory Devices',
      category: 'Hardware Research',
      period: 'Dec 2023 - Jan 2024',
      description: 'Simulated ferroelectric devices (FeRAM, FeFET, FTJ), analysing non-volatility and scaling constraints for next-gen memory and AI accelerators.',
      tech: ['Simulation', 'MATLAB', 'Device Physics'],
      highlights: ['Explored AI accelerator applications', 'Neuromorphic system potential', 'Scaling constraint analysis'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/Ferroelectrics' }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-500/10';
      case 'Active': return 'text-blue-600 bg-blue-500/10';
      case 'Submitted': return 'text-purple-600 bg-purple-500/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <h1 className="text-3xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-muted-foreground">
            A mix of research projects, hardware builds, and software experiments. 
            Some worked great, some taught me a lot, and a few did both.
          </p>
        </section>
      </FadeIn>

      <StaggerContainer className="grid gap-6">
        {projects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="terminal-card card-hover">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-md ${getStatusColor(project.status)}`}>{project.status}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{project.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.paper && (
                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Paper">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.certificate && (
                    <a href={project.links.certificate} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Certificate">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent">Key Highlights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((h, idx) => <li key={idx}>- {h}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent">Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs bg-muted px-2 py-1 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <section className="terminal-card text-center">
          <h2 className="text-2xl font-bold mb-4 glow-text">Want to Collaborate?</h2>
          <p className="text-muted-foreground mb-6">
            I'm always happy to chat about research ideas, open-source projects, or interesting problems. 
            No pressure, just curiosity.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:ishanya.inbox@gmail.com" className="btn-terminal">Get in Touch</a>
            <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="btn-terminal flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Projects;
