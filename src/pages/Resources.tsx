import { ExternalLink } from 'lucide-react';
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
      topics: 'AI for Social Impact, Climate Modelling, Remote Sensing, Health Systems, DL, GNNs',
    },
    {
      name: 'Computational Challenges in Data Privacy',
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
      title: 'Privacy & AI Safety',
      resources: [
        { title: 'Flower Framework', url: 'https://flower.dev/', type: 'Framework', description: 'The federated learning framework I used for my thesis' },
        { title: 'PySyft', url: 'https://github.com/OpenMined/PySyft', type: 'Library', description: 'Privacy-preserving ML with great federated learning support' },
        { title: 'Opacus', url: 'https://opacus.ai/', type: 'Library', description: 'Differential privacy for PyTorch' },
        { title: 'Fairlearn', url: 'https://fairlearn.org/', type: 'Library', description: 'AI fairness toolkit' },
        { title: 'AIF360', url: 'https://aif360.mybluemix.net/', type: 'Library', description: 'IBM AI Fairness 360 toolkit' },
      ]
    },
    {
      title: 'Machine Learning',
      resources: [
        { title: 'PyTorch Documentation', url: 'https://pytorch.org/docs/', type: 'Docs', description: 'My go-to for deep learning. The tutorials are genuinely good.' },
        { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'Guide', description: 'Comprehensive and well-written.' },
        { title: 'MNE-Python', url: 'https://mne.tools/', type: 'Library', description: 'For EEG/MEG data processing' },
      ]
    },
    {
      title: 'Quantum Computing',
      resources: [
        { title: 'Qiskit Textbook', url: 'https://qiskit.org/textbook/', type: 'Book', description: 'Interactive and practical. How I learned quantum computing.' },
        { title: "My Grover's Algorithm Implementation", url: 'https://github.com/ishanyaa/Grovers_Algorithm', type: 'Code', description: "My implementation for SAT problems" },
      ]
    },
    {
      title: 'Academic',
      resources: [
        { title: 'ArXiv CS Papers', url: 'https://arxiv.org/list/cs.LG/recent', type: 'Repository', description: 'Where I go to stay updated on ML research' },
        { title: 'My Verilog Teaching Materials', url: 'https://github.com/ishanyaa/Digital_Circuits_and_Systems', type: 'Code', description: 'Materials I prepared as a TA' },
      ]
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <h1 className="text-3xl font-bold text-foreground mb-3">Resources</h1>
          <p className="text-muted-foreground">
            Tools, programs, and references that have been genuinely useful in my work.
            Not a curated "awesome list," just stuff I actually use.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Summer Schools & Certifications</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Programs that shaped how I think about research. Highly recommend applying if you get the chance.
          </p>
          <StaggerContainer className="space-y-3">
            {summerSchools.map((ss, i) => (
              <StaggerItem key={i}>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-medium text-foreground text-sm">
                      {ss.orgUrl ? (
                        <a href={ss.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{ss.name}</a>
                      ) : ss.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{ss.date}</span>
                  </div>
                  <p className="text-xs text-primary mb-1">{ss.org}</p>
                  <p className="text-xs text-muted-foreground">{ss.topics}</p>
                  {ss.certUrl && (
                    <a href={ss.certUrl} target="_blank" rel="noopener noreferrer" className="text-xs link-accent mt-1 inline-block">[Certificate]</a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      {resourceCategories.map((category, categoryIndex) => (
        <FadeIn key={categoryIndex}>
          <section className="section-card">
            <h2 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h2>
            <div className="space-y-3">
              {category.resources.map((resource, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground text-sm">{resource.title}</h3>
                      <span className="tag text-xs">{resource.type}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{resource.description}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0" aria-label="Open">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn>
        <section className="section-card text-center">
          <h2 className="text-lg font-semibold mb-2 text-foreground">Got a suggestion?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Know a great resource I should check out? I'm always looking to learn.
          </p>
          <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="btn-outline">Reach out on LinkedIn</a>
        </section>
      </FadeIn>
    </div>
  );
};

export default Resources;
