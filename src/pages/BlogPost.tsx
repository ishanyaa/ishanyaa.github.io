import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, { title: string; date: string; readTime: string; tags: string[]; sections: { heading?: string; text: string }[] }> = {
    'federated-learning-edge-raspberry-pi': {
      title: 'Federated Learning on Edge: Lessons from Raspberry Pi Deployment',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['Federated Learning', 'Edge Computing', 'Raspberry Pi'],
      sections: [
        { text: 'Deploying federated learning models on resource-constrained devices is one of those things that sounds straightforward in theory and then humbles you in practice. During my BS thesis work under Dr. Haroon R Lone at IISER Bhopal, I implemented a custom Federated CNN (FLCNN) on Raspberry Pi 5 devices. Here is what I learned.' },
        { heading: 'The Setup', text: 'We had a handful of Raspberry Pi 5 devices, each with 4GB RAM and ARM-based processors. The goal was to train a CNN on CIFAR-10 data distributed across these devices in a non-IID fashion. Traditional federated learning assumes decent network conditions and enough compute. Reality had other plans.' },
        { heading: 'Architecture Decisions', text: 'Our FLCNN had to be small but effective. We focused on minimal parameter counts, efficient communication (model compression to save bandwidth), and asynchronous updates to handle the fact that WiFi on a Pi is not always reliable. We benchmarked against ShuffleNetV2 and showed competitive accuracy with much better deployability on constrained hardware.' },
        { heading: 'What Actually Went Wrong (and Right)', text: 'We hit 81.36% test accuracy, which was genuinely satisfying. But getting there involved a lot of debugging. Standard PyTorch ops that work fine on a GPU machine can crash edge devices. We had to implement custom memory pooling. Network latency mattered more than bandwidth. And non-IID data distribution made convergence trickier than expected.' },
        { heading: 'The Numbers', text: 'Communication overhead dropped by 40% with gradient compression. Training took about 3x longer than centralised, but thats the trade-off for keeping data on-device. Energy consumption was manageable with proper scheduling.' },
        { heading: 'What is Next', text: 'We are exploring adaptive model architectures that adjust to device capabilities, hierarchical federated setups, and combining this with differential privacy. The intersection of federated learning and edge computing is full of interesting problems, and I am excited to keep digging.' },
        { text: 'This work was done at IISER Bhopal under Dr. Haroon R Lone as part of my BS thesis.' }
      ]
    },
    'ai-accessibility-coding-tools': {
      title: 'Making AI Accessible: Building Coding Tools for the Visually Impaired',
      date: '2024-12-20',
      readTime: '6 min read',
      tags: ['Accessibility', 'AI', 'Inclusion'],
      sections: [
        { text: 'During my summer internship at NCAHT, IIT Delhi (funded by ACM India), I worked on building accessible coding tools. It was one of those projects that changed how I think about technology entirely.' },
        { heading: 'The Problem', text: 'Programming is visual. Syntax highlighting, debugging interfaces, data visualisations: all of it assumes you can see a screen. Screen readers exist, but they struggle with code structure and complex charts. For visually impaired developers, this creates real barriers.' },
        { heading: 'What We Built', text: 'We created tools that integrate with screen readers and provide tactile feedback. Natural language code explanations that break down algorithms step by step. Intelligent error detection through voice interfaces. And the hardest part: making graphs and charts accessible through tactile diagrams, audio sonification, and structured text descriptions.' },
        { heading: 'Lessons Learned', text: 'Cognitive load management was the biggest challenge. Too much audio information overwhelms users. Too little leaves them guessing. We ran user studies to find the right balance, and the feedback from actual users was invaluable. One thing that stuck with me: features built for accessibility often make things better for everyone.' },
        { heading: 'Looking Back', text: 'This project was supervised by Dr. Piyush Chanana and Dr. Anupama J. It taught me that good technology adapts to its users, not the other way around. I still think about accessibility in every project I work on now.' }
      ]
    },
    'privacy-preserving-activity-recognition': {
      title: 'Privacy-Preserving Activity Recognition: A Deep Dive',
      date: '2024-11-30',
      readTime: '10 min read',
      tags: ['Privacy', 'IoT', 'Machine Learning'],
      sections: [
        { text: 'How do you get 95.93% accuracy in activity recognition while providing formal privacy guarantees? That was the question that drove this project under Dr. Haroon R Lone at IISER Bhopal.' },
        { heading: 'Why Privacy Matters Here', text: 'Activity recognition systems usually send raw sensor data to central servers. But accelerometer and gyroscope data can reveal a lot about a person: health conditions, daily routines, behaviour patterns. We wanted to keep that data on the device.' },
        { heading: 'Our Approach', text: 'We built an edge-based system that processes data locally on IoT devices (Raspberry Pi 4B with ADXL sensors). The key was adding carefully calibrated noise using the Gaussian mechanism for epsilon-differential privacy. Too little noise and privacy is compromised. Too much and the model just predicts "maybe" for everything.' },
        { heading: 'Technical Challenges', text: 'Noise calibration was tricky. We developed adaptive algorithms that analyse local data distribution and adjust noise based on classification confidence. Resource constraints meant we needed model quantisation, smart feature selection, and hardware-accelerated random number generation. And all of this had to run in real-time with sub-100ms latency.' },
        { heading: 'Results', text: '95.93% classification accuracy with epsilon = 1.0 (strong privacy). Sub-100ms inference on ARM processors. 3x reduction in communication overhead compared to centralised approaches. We also tested against membership inference attacks and attribute inference, and the privacy guarantees held up.' },
        { heading: 'Takeaway', text: 'You do not have to choose between privacy and utility. With careful system design, you can have both. The key insight is that privacy is not just about adding noise; it is about rethinking the entire architecture to minimise data exposure while maximising what the model can learn.' }
      ]
    },
    'tifr-iisc-cs-programs': {
      title: "From TIFR to IISc: My Journey Through India's Premier CS Programs",
      date: '2024-10-15',
      readTime: '5 min read',
      tags: ['Academia', 'Research', 'Personal'],
      sections: [
        { text: 'Getting selected for TIFR Vigyan Vidushi 2024 (32 out of 1000+ applicants) and the IISc Theory CS Winter School were some of the most formative experiences of my academic life. Here is what it was like.' },
        { heading: 'TIFR Vigyan Vidushi', text: 'Three weeks in Mumbai at TIFR, learning about error correcting codes, algorithms on graphs, information theory, quantum computing, and spectral graph theory. The pace was intense. Everyone around me was brilliant. I will not pretend I understood everything on the first pass, but the discussions during breaks were often as valuable as the lectures.' },
        { heading: 'IISc Theory CS Winter School', text: 'Matching theory and differential privacy at IISc Bengaluru. This one hit closer to my research interests. The differential privacy sessions directly influenced my thesis work. Getting to interact with world-class researchers in a small setting was incredible.' },
        { heading: 'IISc Summer School 2023', text: 'My first real exposure to cutting-edge research. Signal processing, ML, AI, and power systems. Looking back, this is where I started to get serious about research as a career path.' },
        { heading: 'What I Took Away', text: 'These programs taught me that being the least experienced person in the room is a gift. You learn faster. You ask better questions. And you realise that every researcher you admire was once exactly where you are now.' }
      ]
    },
    'quantum-computing-grovers-algorithm': {
      title: "Quantum Computing Meets SAT: Implementing Grover's Algorithm",
      date: '2024-09-28',
      readTime: '12 min read',
      tags: ['Quantum Computing', 'Algorithms', 'Qiskit'],
      sections: [
        { text: "For Dr. Ankur Raina's quantum CS course, I implemented Grover's Algorithm for SAT problems in Qiskit. It was my first serious quantum computing project, and it was both exciting and humbling." },
        { heading: 'The Idea', text: "Grover's Algorithm provides a quadratic speedup over classical search for unstructured problems. For SAT, you design an oracle that marks solutions, then use amplitude amplification to boost their probability. In theory, elegant. In practice, building the oracle circuit is where the real work happens." },
        { heading: 'Implementation', text: 'I designed oracle-based quantum circuits that encode SAT clauses, implemented the diffusion operator for amplitude amplification, and ran simulations in Qiskit. The moment when the target states actually showed up with high probability in the measurement results was genuinely thrilling.' },
        { heading: 'Challenges', text: "Quantum circuit design requires a different kind of thinking. You cannot just debug by printing values. State vector inspection and careful gate-by-gate verification were essential. Also, Qiskit's documentation is good but quantum computing concepts take a while to really click." },
        { heading: 'What I Learned', text: 'Quantum computing is not magic. It is rigorous mathematics and careful engineering. The quadratic speedup is real but the overhead of circuit construction matters. I came out of this project with a much deeper appreciation for both the promise and the current limitations of quantum computing.' }
      ]
    },
    'teaching-verilog': {
      title: 'The Art of Teaching Verilog: What Students Taught Me',
      date: '2024-08-10',
      readTime: '7 min read',
      tags: ['Teaching', 'Verilog', 'Digital Design'],
      sections: [
        { text: 'Being a Teaching Assistant for Digital Circuits and Systems (ECS 326/676) under Dr. Santanu Talukder was a crash course in communication. Explaining Verilog HDL to students who have never seen a hardware description language before is harder than writing the code yourself.' },
        { heading: 'Teaching Approach', text: 'I taught Verilog from scratch: syntax, simulation, and hardware synthesis. I prepared exercises, lab assignments, and spent a lot of time in one-on-one debugging sessions. The debugging sessions were honestly the most educational part, for both me and the students.' },
        { heading: 'What Surprised Me', text: 'Students ask questions you never thought about. "Why does this work in simulation but not on the FPGA?" is a question that forces you to really understand the difference between behavioural and structural modelling. Teaching made me a better engineer.' },
        { heading: 'Verilog Bugs Are Special', text: 'Software bugs crash your program. Verilog bugs synthesise into hardware that does something confidently wrong. Helping students debug these issues taught me patience and the value of clear, systematic thinking.' },
        { heading: 'Final Thoughts', text: 'If you ever get the chance to teach or TA, take it. You will learn more about your subject than you expect, and the satisfaction of seeing a student finally get it is hard to beat.' }
      ]
    }
  };

  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="space-y-8">
        <section className="terminal-card text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            This blog post doesn't exist yet. Maybe I'll write it someday!
          </p>
          <Link to="/blog" className="btn-terminal">Back to Blog</Link>
        </section>
      </div>
    );
  }

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Federated Learning': 'bg-blue-500/10 text-blue-600',
      'Edge Computing': 'bg-green-500/10 text-green-600',
      'Privacy': 'bg-purple-500/10 text-purple-600',
      'Accessibility': 'bg-orange-500/10 text-orange-600',
      'IoT': 'bg-cyan-500/10 text-cyan-600',
      'Machine Learning': 'bg-pink-500/10 text-pink-600',
      'Raspberry Pi': 'bg-red-500/10 text-red-600',
      'AI': 'bg-yellow-500/10 text-yellow-600',
      'Inclusion': 'bg-indigo-500/10 text-indigo-600',
      'Quantum Computing': 'bg-pink-500/10 text-pink-600',
      'Algorithms': 'bg-green-500/10 text-green-600',
      'Qiskit': 'bg-blue-500/10 text-blue-600',
      'Academia': 'bg-purple-500/10 text-purple-600',
      'Research': 'bg-cyan-500/10 text-cyan-600',
      'Personal': 'bg-red-500/10 text-red-600',
      'Teaching': 'bg-yellow-500/10 text-yellow-600',
      'Verilog': 'bg-orange-500/10 text-orange-600',
      'Digital Design': 'bg-green-500/10 text-green-600',
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl font-bold gradient-text mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className={`text-xs px-2 py-1 rounded-md ${getTagColor(tag)}`}>{tag}</span>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <article className="terminal-card">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-bold text-foreground mb-3 mt-2">{section.heading}</h2>
                )}
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </article>
      </FadeIn>
    </div>
  );
};

export default BlogPost;
