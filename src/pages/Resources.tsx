import { ExternalLink, BookOpen, Code, Brain, Zap, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Resources = () => {
  const summerSchools = [
    {
      name: 'STCS Vigyan Vidushi 2024',
      org: 'TIFR Mumbai',
      orgUrl: 'https://www.tcs.tifr.res.in/~stcs-vv-24/',
      date: 'July 2024',
      topics: 'Error Correcting Codes, Algorithms on Graphs, Information Theory, Quantum Computing, Spectral Graph Theory',
    },
    {
      name: 'Theory CS Winter School 2024',
      org: 'IISc Bengaluru',
      orgUrl: 'https://algo.csa.iisc.ac.in/winterschool24/participants.html',
      date: 'December 2024',
      topics: 'Matching Theory, Differential Privacy, Graph Theory',
    },
    {
      name: 'ACM India Summer School: AI for Social Good',
      org: 'IIT Gandhinagar',
      orgUrl: 'https://sustainability-lab.github.io/acm-summer-2025/',
      date: 'June 2025',
      topics: 'AI for Social Impact, Climate Modelling, Remote Sensing, Health Systems, DL, Edge AI, GNNs',
    },
    {
      name: 'Summer School & Workshop: Computational Challenges in Data Privacy',
      org: 'IIT Delhi',
      orgUrl: 'https://rohitvaish.in/Events/PrivacyWorkshop-2025/',
      date: 'July 2025',
      topics: 'Cryptography, Differential Privacy, Security',
    },
    {
      name: 'AWS Cloud Women Mentoring Program',
      org: 'Amazon Web Services',
      orgUrl: 'https://pages.awscloud.com/AWS_Cloud_Women_Mentoring_Program_2024.html',
      date: 'Sept 2024 - Jan 2025',
      topics: 'Cloud architectures, data pipelines, scalable ML systems. Mentored by Wolfgang Fuker (AWS Austria)',
      certUrl: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/certificates/IshanyaAWSCloud.pdf',
    },
    {
      name: 'AI Ethics and Fairness Program (DIVERSIFAIR)',
      org: 'Turing College (EU-funded, Erasmus+)',
      orgUrl: 'https://www.turingcollege.com/ai-ethics',
      date: '2025 - 2026',
      topics: 'Ethical AI aligned with EU AI Act, bias mitigation using Fairlearn and AIF360, transparency, regulatory compliance',
    },
  ];

  const resourceCategories = [
    {
      title: 'Federated Learning & Privacy',
      icon: <Brain className="w-5 h-5" />,
      resources: [
        { title: 'Flower Framework', url: 'https://flower.dev/', type: 'Framework', description: 'The federated learning framework I used for my thesis' },
        { title: 'PySyft', url: 'https://github.com/OpenMined/PySyft', type: 'Library', description: 'Privacy-preserving ML library with great federated learning support' },
        { title: 'Opacus (Differential Privacy for PyTorch)', url: 'https://opacus.ai/', type: 'Library', description: 'Used this for differential privacy experiments' },
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: <Zap className="w-5 h-5" />,
      resources: [
        { title: 'PyTorch Documentation', url: 'https://pytorch.org/docs/', type: 'Docs', description: 'My go-to for deep learning. The tutorials are genuinely good.' },
        { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'Guide', description: 'Comprehensive and well-written. Great for classical ML.' },
        { title: 'MNE-Python (EEG/MEG)', url: 'https://mne.tools/', type: 'Library', description: 'Using this at TCS Research for EEG data processing' },
      ]
    },
    {
      title: 'Hardware & IoT',
      icon: <Code className="w-5 h-5" />,
      resources: [
        { title: 'Raspberry Pi Docs', url: 'https://www.raspberrypi.org/documentation/', type: 'Docs', description: 'Essential for all my edge computing projects' },
        { title: 'ONNX Runtime', url: 'https://onnxruntime.ai/', type: 'Framework', description: 'For deploying models on resource-constrained devices' },
        { title: 'My Verilog Teaching Materials', url: 'https://github.com/ishanyaa/Digital_Circuits_and_Systems', type: 'Code', description: 'Materials I prepared as a TA for Digital Circuits' },
      ]
    },
    {
      title: 'Quantum Computing',
      icon: <Star className="w-5 h-5" />,
      resources: [
        { title: 'Qiskit Textbook', url: 'https://qiskit.org/textbook/', type: 'Book', description: 'Interactive and practical. How I learned quantum computing.' },
        { title: "My Grover's Algorithm Implementation", url: 'https://github.com/ishanyaa/Grovers_Algorithm', type: 'Code', description: 'My implementation of Grover\'s for SAT problems' },
      ]
    },
    {
      title: 'Academic & Research',
      icon: <BookOpen className="w-5 h-5" />,
      resources: [
        { title: 'ArXiv CS Papers', url: 'https://arxiv.org/list/cs.LG/recent', type: 'Repository', description: 'Where I go to stay updated on ML research' },
        { title: 'Fairlearn', url: 'https://fairlearn.org/', type: 'Library', description: 'AI fairness toolkit, using it in the Turing College ethics program' },
        { title: 'AIF360', url: 'https://aif360.mybluemix.net/', type: 'Library', description: 'IBM AI Fairness 360 toolkit' },
      ]
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Framework': 'bg-blue-500/10 text-blue-600',
      'Library': 'bg-green-500/10 text-green-600',
      'Docs': 'bg-cyan-500/10 text-cyan-600',
      'Guide': 'bg-pink-500/10 text-pink-600',
      'Book': 'bg-purple-500/10 text-purple-600',
      'Code': 'bg-red-500/10 text-red-600',
      'Repository': 'bg-orange-500/10 text-orange-600',
    };
    return colors[type] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <h1 className="text-3xl font-bold gradient-text mb-4">Resources</h1>
          <p className="text-muted-foreground">
            Tools, programs, and references that have been genuinely useful in my work. 
            Not a curated "awesome list," just stuff I actually use or have used.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Summer Schools & Certifications</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Programs that shaped how I think about research. Highly recommend applying to these if you get the chance.
          </p>
          <StaggerContainer className="space-y-4">
            {summerSchools.map((ss, i) => (
              <StaggerItem key={i}>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold">
                        {ss.orgUrl ? (
                          <a href={ss.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{ss.name}</a>
                        ) : ss.name}
                      </h3>
                      <p className="text-sm text-accent">{ss.org}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{ss.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ss.topics}</p>
                  {ss.certUrl && (
                    <a href={ss.certUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline mt-1 inline-block">[Certificate]</a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      {resourceCategories.map((category, categoryIndex) => (
        <FadeIn key={categoryIndex}>
          <section className="terminal-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold glow-text">{category.title}</h2>
            </div>
            <div className="grid gap-4">
              {category.resources.map((resource, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{resource.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-md ${getTypeColor(resource.type)}`}>{resource.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Open resource">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn>
        <section className="terminal-card text-center">
          <h2 className="text-2xl font-bold mb-4 glow-text">Got a Suggestion?</h2>
          <p className="text-muted-foreground mb-6">
            Know a great resource I should check out? I'm always looking to learn.
          </p>
          <a href="mailto:ishanya.inbox@gmail.com" className="btn-terminal">Drop me a line</a>
        </section>
      </FadeIn>
    </div>
  );
};

export default Resources;
