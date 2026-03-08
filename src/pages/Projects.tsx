import { ExternalLink, Github, Calendar } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Projects = () => {
  const projects = [
    {
      title: 'Hierarchical Sensor-Vision Defect Detection',
      category: 'Industry Research',
      period: 'Sept 2025 - Present',
      description: 'Built a defect detection pipeline for a robotic assembly line. Combines lightweight signal-based classifiers with on-demand deep vision models using mixture-of-experts.',
      tech: ['Python', 'ONNX Runtime', 'Computer Vision'],
      highlights: ['Reduced memory footprint by ~90%', 'Improved accuracy from ~54% to >98%', 'Ranked 2nd in company-wide research competition'],
      status: 'Active',
      links: { certificate: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/certificates/Ishanya_TCSResearchPrize.pdf' }
    },
    {
      title: 'Federated Learning CNN (FLCNN)',
      category: 'BS Thesis',
      period: 'Nov 2024 - May 2025',
      description: 'Custom federated CNN for CIFAR-10 classification. Handles non-IID data, heterogeneous compute, and intermittent connectivity.',
      tech: ['Python', 'PyTorch', 'Flower'],
      highlights: ['81.36% test accuracy on non-IID data', 'Competitive with ShuffleNetV2 under resource constraints'],
      status: 'Completed',
      links: {}
    },
    {
      title: 'Privacy-Preserving Activity Recognition',
      category: 'Privacy / ML',
      period: 'Nov 2024 - May 2025',
      description: 'Local differential privacy activity recognition pipeline. Enforces formal privacy guarantees while keeping accuracy high.',
      tech: ['Python', 'Differential Privacy', 'IoT'],
      highlights: ['95.93% classification accuracy', 'Formal epsilon-differential privacy guarantees'],
      status: 'Completed',
      links: {}
    },
    {
      title: 'EchoCare',
      category: 'Healthcare AI',
      period: '2024 - 2025',
      description: 'Proof-of-concept for a low-cost AI-enabled digital stethoscope. Designed the end-to-end pipeline for audio data acquisition, preprocessing, and lightweight ML inference.',
      tech: ['Python', 'Audio Processing', 'Federated Learning'],
      highlights: ['Grant-based translational research', 'Federated training strategy for patient data privacy'],
      status: 'Submitted',
      links: { paper: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/EchoCare.pptx.pdf' }
    },
    {
      title: 'SightSync',
      category: 'Assistive Tech',
      period: '2024',
      description: 'An assistive wearable for visually impaired users integrating depth sensing, computer vision, and voice feedback. IC-MNSS 2024 Student Contest Finalist at IISc.',
      tech: ['Computer Vision', 'Depth Sensing', 'Voice Feedback'],
      highlights: ['Finalist at IC-MNSS 2024 at IISc Bengaluru', 'Real-time object recognition'],
      status: 'Completed',
      links: { paper: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/ICMNSS_SightSync.pdf' }
    },
    {
      title: 'RTD-based MEMS Sensing System',
      category: 'Hardware / IoT',
      period: '2024',
      description: 'PCB integrating RTD sensor, ESP32, and OLED display for real-time temperature monitoring.',
      tech: ['ESP32', 'PCB Design', 'C++'],
      highlights: ['Compact low-power PCB layout', 'Real-time temperature visualization'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/micro-electromechanical-systems' }
    },
    {
      title: 'Neural Simulated Annealing Optimiser Benchmarking',
      category: 'ML Research',
      period: 'Jan 2025 - Apr 2025',
      description: "Benchmarked Qualcomm AI Research's NSA framework across optimisers (Adam, AdamW, AdaBelief, Adadelta, NAdam).",
      tech: ['Python', 'PyTorch', 'Optimization'],
      highlights: ['Comprehensive optimiser comparison', 'Proposed improved configurations'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/SAOptimisation' }
    },
    {
      title: "Grover's Algorithm for SAT Problems",
      category: 'Quantum Computing',
      period: 'Aug 2024 - Nov 2024',
      description: 'Designed an oracle-based quantum circuit to identify marked SAT solutions using amplitude amplification.',
      tech: ['Qiskit', 'Python', 'Quantum Circuits'],
      highlights: ['Quadratic speedup demonstration', 'Successful retrieval of target states'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/Grovers_Algorithm' }
    },
    {
      title: 'Unsupervised Clustering & Dimensionality Reduction',
      category: 'ML',
      period: 'Oct 2023',
      description: 'Implemented k-means, hierarchical, buckshot, DBSCAN clustering and PCA, t-SNE dimensionality reduction.',
      tech: ['Python', 'Scikit-learn', 'NumPy'],
      highlights: ['Multiple clustering algorithms compared', 'Feature selection for improved results'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa' }
    },
    {
      title: 'Ferroelectric Memory Devices',
      category: 'Hardware Research',
      period: 'Dec 2023 - Jan 2024',
      description: 'Simulated ferroelectric devices (FeRAM, FeFET, FTJ), analysing non-volatility and scaling constraints.',
      tech: ['Simulation', 'Device Physics'],
      highlights: ['Explored AI accelerator applications', 'Scaling constraint analysis'],
      status: 'Completed',
      links: { github: 'https://github.com/ishanyaa/Ferroelectrics' }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'Active': return 'bg-primary/10 text-primary';
      case 'Submitted': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400';
      default: return 'tag';
    }
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <h1 className="text-3xl font-bold text-foreground mb-3">Projects</h1>
          <p className="text-muted-foreground">
            A mix of research projects, hardware builds, and software experiments.
            Some worked great, some taught me a lot, and a few did both.
          </p>
        </section>
      </FadeIn>

      <StaggerContainer className="grid gap-5">
        {projects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="section-card section-card-hover">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-md ${getStatusColor(project.status)}`}>{project.status}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span>{project.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.paper && (
                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Paper">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.certificate && (
                    <a href={project.links.certificate} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Certificate">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

              <ul className="text-xs text-muted-foreground space-y-0.5 mb-3">
                {project.highlights.map((h, idx) => <li key={idx} className="flex gap-1.5"><span className="text-primary">·</span> {h}</li>)}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <section className="section-card text-center">
          <h2 className="text-xl font-semibold mb-3 text-foreground">Want to collaborate?</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Always happy to chat about research ideas or interesting problems. No pressure, just curiosity.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="btn-primary">Contact Me on LinkedIn</a>
            <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Projects;
