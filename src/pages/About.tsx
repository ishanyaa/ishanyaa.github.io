import { Code2, Brain, Zap, MapPin, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="terminal-card">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Ishanya Profile"
              className="w-48 h-48 rounded-full object-cover border-2 border-accent shadow-[--shadow-glow]"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Ishanya</h1>
            <p className="text-xl text-accent mb-4">CS Grad</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Recent BS graduate in Electrical Engineering and Computer Science from IISER Bhopal, 
              passionate about privacy-preserving systems, and making AI accessible to everyone. When I'm not debugging code or writing research papers, you'll find me 
              exploring new places or creating memes that only computer scientists understand.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4" />
                <span>IISER Bhopal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Research Focus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Federated Learning</h3>
            <p className="text-sm text-muted-foreground">
              Designing privacy-preserving machine learning systems for decentralized environments
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Edge Computing</h3>
            <p className="text-sm text-muted-foreground">
              Implementing AI models on resource-constrained devices like Raspberry Pi
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Accessibility Tech</h3>
            <p className="text-sm text-muted-foreground">
              Building tools to make technology more accessible for visually impaired users
            </p>
          </div>
        </div>
      </section>

      {/* Academic Journey */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Academic Journey</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Current Research</h3>
            <p className="text-muted-foreground mb-2">
              <strong>BS Thesis:</strong> Federated Learning under Dr. Haroon R Lone
            </p>
            <p className="text-sm text-muted-foreground">
              Designed and implemented a custom Federated CNN achieving 81.36% accuracy on non-IID data, 
              deployed on Raspberry Pi 5 devices to simulate real-world edge environments.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Recent Projects</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Privacy-Preserving Activity Recognition with 95.93% accuracy</li>
              <li>• Accessible coding platform for visually impaired students (ACM Intern)</li>
              <li>• RTD temperature monitoring system with ESP32 and OLED display</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Elite Programs</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>TIFR STCS Vigyan Vidushi 2024:</strong> Selected from 1000+ applicants (32 chosen)</li>
              <li>• <strong>IISc Theory CS Winter School 2024:</strong> Advanced theoretical computer science</li>
              <li>• <strong>IISc Summer School 2023:</strong> Signal processing and ML research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Beyond The Code</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Achievements & Interests</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Editor and Coordinator at Chrysalis</li>
              <li>AWS Scholar</li>
              <li>JEE Paper 2 All India Rank 160</li>
              <li>Peer Counselor</li>
              <li>Active debater in college debate society</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Current Vibes</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Working towards research publications</li>
              <li>Planning my next adventure (check Places page!)</li>
              <li>Perfecting my coffee-to-code ratio</li>
              <li>Always looking for the next interesting problem to solve!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
