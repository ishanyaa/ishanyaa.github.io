import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const CV = () => {
  const experiences = [
    {
      role: 'Researcher, CTO Office',
      organization: 'TCS Research (Tata Consultancy Services)',
      orgUrl: 'https://www.tcs.com/what-we-do/research',
      location: 'Bengaluru, India',
      period: 'Sept 2025 - Present',
      area: 'Privacy-sensitive intelligent systems and distributed AI',
      highlights: [
        'Working with multi-modal physiological data (EEG, ECG, gaze tracking) to model decision-making behaviour under privacy constraints',
        'Designing compact multi-modal learning architectures for edge deployment, optimised for latency, memory, and privacy',
        'Built a hierarchical sensor-vision defect detection pipeline for a robotic rocket assembly line',
        'Reduced edge memory footprint by ~90% and improved accuracy from ~54% to >98% using mixture-of-experts models',
        'Deployed privacy-sensitive inference using ONNX Runtime on resource-constrained devices',
        'Work ranked 2nd in a company-wide CTO Research Competition'
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
        'Built a lightweight CNN (FLCNN) for CIFAR-10 on Raspberry Pi 5 clients under non-IID data and intermittent connectivity',
        'Benchmarked federated vs centralised training against ShuffleNetV2, showing competitive accuracy with better deployability',
        'Developed a local differential privacy activity recognition pipeline with RPi4B and ADXL Sensor (95.93% accuracy)',
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
        'IEEE SSCS-ISSS MEMS Design Program Finalist: Led a multi-institutional team (India, Kenya, Canada)',
        'Designed a MEMS micro-mirror (500um x 500um) with stress-displacement analysis for beam steering',
        'IC-MNSS 2024 Student Contest Finalist at IISc: Co-developed SightSync, an assistive wearable for visually impaired users'
      ],
      links: [
        { label: 'MEMS Project', url: 'https://github.com/ishanyaa/micro-electromechanical-systems' },
        { label: 'IEEE MEMS', url: 'https://github.com/ishanyaa/ishanyaa.github.io/blob/main/files/IEEEMEMS.pdf' },
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
    systems: ['Linux', 'ONNX Runtime', 'Edge Deployment', 'Distributed Training'],
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
        <section className="terminal-card">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text mb-2">Curriculum Vitae</h1>
              <p className="text-muted-foreground">Researcher, TCS Research | BS (EECS), IISER Bhopal</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:ishanya.inbox@gmail.com" className="btn-terminal flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Education</h2>
          <div className="border-l-2 border-accent pl-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">
                BS in Electrical Engineering and Computer Science (
                <a href="https://eecs.iiserb.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">EECS</a>
                )
              </h3>
            </div>
            <p className="text-muted-foreground mb-1">
              <a href="https://www.iiserb.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Indian Institute of Science Education and Research (IISER), Bhopal
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Aug 2021 - June 2025</span>
              </div>
              <span>GPA: 8.61 / 10</span>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Experience</h2>
          <StaggerContainer className="space-y-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div className="border-l-2 border-accent pl-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-accent">
                        {exp.orgUrl ? (
                          <a href={exp.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.organization}</a>
                        ) : exp.organization}
                      </p>
                      {exp.supervisor && (
                        <p className="text-sm text-muted-foreground">
                          Advisor: {exp.supervisorUrl ? (
                            <a href={exp.supervisorUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{exp.supervisor}</a>
                          ) : exp.supervisor}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground italic">{exp.area}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <div className="flex items-center gap-1 md:justify-end">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 md:justify-end mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>- {h}</li>
                    ))}
                  </ul>
                  {exp.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.links.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
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
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Achievements</h2>
          <StaggerContainer className="space-y-3">
            {achievements.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <p className="font-medium">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.detail}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{a.year}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-6 glow-text">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold mb-2 text-accent capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="text-xs bg-muted px-2 py-1 rounded-md">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-4 glow-text">Selected Coursework</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div><span className="font-semibold text-foreground">Computer Science:</span> {coursework.cs}</div>
            <div><span className="font-semibold text-foreground">EEE:</span> {coursework.eee}</div>
            <div><span className="font-semibold text-foreground">Mathematics:</span> {coursework.math}</div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default CV;
