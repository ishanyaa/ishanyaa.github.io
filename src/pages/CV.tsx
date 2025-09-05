import { Download, ExternalLink, Calendar, MapPin } from 'lucide-react';

const CV = () => {
  const handleDownload = () => {
    // Placeholder - would link to actual CV file
    alert('CV download functionality - connect to actual PDF file');
  };

  const experiences = [
    {
      role: 'BS Thesis Research',
      organization: 'Indian Institute of Science Education and Research (IISER)',
      location: 'Bhopal, India',
      period: 'Dec 2024 - Apr 2025',
      supervisor: 'Dr. Haroon R Lone',
      description: 'Federated Learning research focusing on custom FLCNN for image classification on non-IID client data',
      highlights: [
        'Achieved 81.36% test accuracy outperforming standard pre-trained models',
        'Deployed on Raspberry Pi 5 devices for edge environment simulation',
        'Conducted comprehensive performance analysis including convergence behavior'
      ]
    },
    {
      role: 'Teaching Assistant',
      organization: 'IISER Bhopal',
      location: 'Bhopal, India',
      period: 'Jan 2025 - Apr 2025',
      supervisor: 'Dr. Santanu Talukder',
      description: 'Digital Circuits and Systems (ECS326/676)',
      highlights: [
        'Taught Verilog HDL from scratch to undergraduate/graduate students',
        'Provided one-on-one debugging support and problem-solving sessions',
        'Helped students understand hardware design principles'
      ]
    },
    {
      role: 'ACM Research Intern',
      organization: 'ACM and NCAHT, IIT Delhi',
      location: 'New Delhi, India',
      period: 'June 2024 - Sept 2024',
      supervisor: '',
      description: 'Accessibility tools development for visually impaired coders',
      highlights: [
        'Developed coding support tools using screen readers and tactile diagrams',
        'Created accessible Python platform with integrated AI assistance',
        'Enhanced data visualization accessibility for visually impaired users'
      ]
    }
  ];

  const education = {
    degree: 'BS in Electrical Engineering and Computer Science (EECS)',
    institution: 'Indian Institute of Science Education and Research (IISER)',
    location: 'Bhopal, India',
    period: '2021 - 2025',
    status: 'Completed'
  };

  const skills = {
    programming: ['Python', 'C', 'STATA', 'SQL', 'PostgreSQL', 'TimescaleDB', 'MATLAB', 'Verilog'],
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Flower', 'PySyft'],
    tools: ['Git', 'LTspice', 'AutoCAD', 'Photoshop', 'LaTeX', 'Power BI'],
    specializations: ['Federated Learning', 'Edge Computing', 'Privacy-Preserving AI', 'Accessibility Tech']
  };

  return (
    <div className="space-y-8">
      {/* Header with download */}
      <section className="terminal-card">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Curriculum Vitae</h1>
            <p className="text-muted-foreground">Computer Science Researcher & AI/ML Specialist</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleDownload}
              className="btn-terminal flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <a 
              href="mailto:iiser.ishanya@gmail.com" 
              className="btn-terminal flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Education</h2>
        <div className="border-l-2 border-accent pl-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded-md">{education.status}</span>
          </div>
          <p className="text-muted-foreground mb-1">{education.institution}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{education.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{education.period}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-accent">{exp.organization}</p>
                  {exp.supervisor && (
                    <p className="text-sm text-muted-foreground">Supervisor: {exp.supervisor}</p>
                  )}
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
              <p className="text-muted-foreground mb-3">{exp.description}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill) => (
                <span key={skill} className="text-sm bg-muted px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="text-sm bg-muted px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="text-sm bg-muted px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {skills.specializations.map((skill) => (
                <span key={skill} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Achievements & Recognition</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">TIFR STCS Vigyan Vidushi 2024</p>
              <p className="text-sm text-muted-foreground">Selected as 1 of 32 participants from 1000+ applicants for advanced theoretical CS program</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">JEE Paper 2 All India Rank 160 (2021)</p>
              <p className="text-sm text-muted-foreground">Secured top rank in national engineering entrance examination</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">SANGHARSH Sports Competition (2023, 2024)</p>
              <p className="text-sm text-muted-foreground">Gold Medal in Discus Throw, Silver Medal in Shot Put</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;