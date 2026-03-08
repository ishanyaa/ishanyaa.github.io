import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const CV = () => {
  const experiences = [
    {
      role: 'Researcher',
      organization: 'Industry Research Lab',
      location: 'Bengaluru, India',
      period: 'Sept 2025 - Present',
      area: 'Privacy-sensitive intelligent systems',
      highlights: [
        'Built a hierarchical sensor-vision defect detection pipeline for a robotic assembly line',
        'Reduced memory footprint by ~90% and improved accuracy from ~54% to >98% using mixture-of-experts models',
        'Deployed privacy-sensitive inference using ONNX Runtime on resource-constrained devices',
        'Work ranked 2nd in a company-wide research competition'
      ],
      links: [
        { label: 'Certificate', url: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/certificates/Ishanya_TCSResearchPrize.pdf' }
      ]
    },
    {
      role: "Bachelor's Thesis",
      organization: 'Systems and Informatics Research Laboratory (SIRL), IISER Bhopal',
      orgUrl: 'https://sirl-lab.github.io/',
      location: 'Bhopal, India',
      period: 'Nov 2024 - May 2025',
      supervisor: 'Dr. Haroon Rashid Lone',
      supervisorUrl: 'https://loneharoon.github.io/',
      area: 'Privacy-preserving AI',
      highlights: [
        'Built a lightweight CNN (FLCNN) for CIFAR-10 under non-IID data and intermittent connectivity',
        'Benchmarked federated vs centralised training against ShuffleNetV2',
        'Developed a local differential privacy activity recognition pipeline (95.93% accuracy)',
        'Co-developed EchoCare, a proof-of-concept for a low-cost AI-enabled digital stethoscope',
        'Proposed a federated learning training strategy for continual model improvement without centralising patient data'
      ]
    },
    {
      role: 'Teaching Assistant',
      organization: 'IISER Bhopal',
      location: 'Bhopal, India',
      period: 'Jan 2025 - Apr 2025',
      supervisor: 'Dr. Santanu Talukder',
      supervisorUrl: 'https://sites.google.com/site/santanutalukderiiscnanoscience/principal-investigator',
      area: 'Digital Circuits and Systems (ECS 326/676)',
      highlights: [
        'Taught Verilog HDL (syntax, simulation, hardware synthesis)',
        'Prepared digital circuit design exercises, Verilog labs, and assignments',
      ],
      links: [
        { label: 'Course Materials', url: 'https://github.com/ishanyaa/Digital_Circuits_and_Systems' }
      ]
    },
    {
      role: 'Research Intern',
      organization: 'IISER Bhopal',
      location: 'Bhopal, India',
      period: 'Jan 2024 - Mar 2025',
      supervisor: 'Dr. Santanu Talukder',
      supervisorUrl: 'https://sites.google.com/site/santanutalukderiiscnanoscience/principal-investigator',
      area: 'Intelligent Sensing',
      highlights: [
        'Built an RTD-based MEMS sensing system with ESP32 and OLED display for real-time temperature monitoring',
        'IC-MNSS 2024 Student Contest Finalist at IISc: Co-developed SightSync, an assistive wearable for visually impaired users'
      ],
      links: [
        { label: 'MEMS Project', url: 'https://github.com/ishanyaa/micro-electromechanical-systems' },
        { label: 'SightSync', url: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/ICMNSS_SightSync.pdf' }
      ]
    },
    {
      role: 'Research Intern',
      organization: 'NCAHT, IIT Delhi',
      orgUrl: 'https://www.ncaht.in/',
      location: 'New Delhi, India',
      period: 'May 2024 - Sept 2024',
      supervisor: 'Dr. Piyush Chanana, Dr. Anupama J',
      area: 'Assistive AI, Accessible Computing',
      highlights: [
        'Built AI-assisted accessible coding tools with screen readers and tactile feedback',
        'Designed accessible data visualisation interfaces and conducted user studies',
        'ACM India and NCAHT funded project'
      ]
    },
    {
      role: 'Research Intern',
      organization: 'SEMANTICS Lab, IISER Bhopal',
      location: 'Bhopal, India',
      period: 'Dec 2023 - Jan 2024',
      supervisor: 'Dr. Pallavi Athe',
      area: 'Ferroelectric Memory Devices',
      highlights: [
        'Simulated ferroelectric devices (FeRAM, FeFET, FTJ) and analysed scaling constraints',
        'Explored ferroelectric devices in AI accelerators and neuromorphic systems'
      ],
      links: [
        { label: 'Ferroelectrics', url: 'https://github.com/ishanyaa/Ferroelectrics' }
      ]
    }
  ];

  const achievements = [
    { title: 'Mohit Aron Endowment Fund, IIT Delhi', detail: 'Top ~1%', year: '2025' },
    { title: 'IAS-INSA-NASI Focus Area Science Technology Fellowship', detail: 'Top ~1%', year: '2024' },
    { title: 'STCS Vigyan Vidushi Fellowship (Google CSR + TIFR Mumbai)', detail: 'Top ~2.5%', year: '2024' },
    { title: 'ACM India Summer Fellowship Grant (NCAHT, IIT Delhi)', detail: 'Top ~0.5%', year: '2024' },
    { title: 'Udacity Bertelsmann Next Gen Tech Booster Scholarship', detail: 'Top ~2%', year: '2024' },
    { title: 'Professor Ram Kumar Scholarship, EDM Conference', detail: 'Global', year: '2023' },
    { title: 'All India Rank 160, NTA IIT-JEE Paper 2', detail: 'Top ~1%', year: '2021' },
  ];

  const skills = {
    languages: ['Python', 'Verilog'],
    databases: ['SQL (Oracle)', 'PostgreSQL', 'TimescaleDB'],
    libraries: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'Flower', 'PySyft', 'Matplotlib', 'OpenCV', 'MNE'],
    systems: ['Linux', 'ONNX Runtime', 'Distributed Training'],
    tools: ['Git', 'LTspice', 'AutoCAD', 'LaTeX', 'AWS', 'Opacus', 'Fairlearn', 'AIF360'],
  };

  const coursework = {
    cs: 'Discrete Maths, Theory of Computation, Data Science & ML, Algorithms, Quantum CS, Computer Networks, Computer Organisation, OS, AI, Applied Optimisation, IoT, DBMS (Highest Grade)',
    eee: 'Communications, EM Theory, MEMS, Digital Circuits & Systems (Highest Grade)',
    math: 'Linear Algebra, Multivariable Calculus, Calculus, Probability & Statistics',
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="section-card">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">Curriculum Vitae</h1>
              <p className="text-muted-foreground">BS (EECS), IISER Bhopal</p>
            </div>
            <a href="mailto:ishanya.inbox@gmail.com" className="btn-outline flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Contact
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Education</h2>
          <div className="border-l-2 border-primary/30 pl-4">
            <h3 className="font-medium text-foreground">
              BS in Electrical Engineering and Computer Science (
              <a href="https://eecs.iiserb.ac.in/" target="_blank" rel="noopener noreferrer" className="link-accent">EECS</a>)
            </h3>
            <p className="text-sm text-muted-foreground">
              <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Indian Institute of Science Education and Research (IISER), Bhopal
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
              <span>Aug 2021 - June 2025</span>
              <span>GPA: 8.61 / 10</span>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-6 text-foreground">Experience</h2>
          <StaggerContainer className="space-y-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="border-l-2 border-primary/30 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-medium text-foreground">{exp.role}</h3>
                      <p className="text-primary text-sm">
                        {exp.orgUrl ? (
                          <a href={exp.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.organization}</a>
                        ) : exp.organization}
                      </p>
                      {exp.supervisor && (
                        <p className="text-xs text-muted-foreground">
                          Advisor: {exp.supervisorUrl ? (
                            <a href={exp.supervisorUrl} target="_blank" rel="noopener noreferrer" className="link-accent">{exp.supervisor}</a>
                          ) : exp.supervisor}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground italic">{exp.area}</p>
                    </div>
                    <div className="text-xs text-muted-foreground sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1 sm:justify-end">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:justify-end mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-2"><span className="text-primary mt-1.5 flex-shrink-0">·</span> {h}</li>
                    ))}
                  </ul>
                  {exp.links && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {exp.links.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs link-accent">
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Achievements</h2>
          <StaggerContainer className="space-y-2">
            {achievements.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">·</span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <p className="text-sm font-medium text-foreground">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.detail}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{a.year}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-medium mb-2 text-primary capitalize">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Selected Coursework</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div><span className="font-medium text-foreground">Computer Science:</span> {coursework.cs}</div>
            <div><span className="font-medium text-foreground">EEE:</span> {coursework.eee}</div>
            <div><span className="font-medium text-foreground">Mathematics:</span> {coursework.math}</div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default CV;
