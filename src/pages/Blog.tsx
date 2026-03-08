import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Blog = () => {
  const posts = [
    {
      title: 'Federated Learning on Edge: Lessons from Raspberry Pi Deployment',
      slug: 'federated-learning-edge-raspberry-pi',
      excerpt: "Deploying federated learning models on tiny devices is harder than it sounds. Here's what I learned from running FLCNN on Raspberry Pi 5 devices and why memory management keeps me up at night.",
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['Federated Learning', 'Edge Computing', 'Raspberry Pi'],
      status: 'published'
    },
    {
      title: 'Making AI Accessible: Building Coding Tools for the Visually Impaired',
      slug: 'ai-accessibility-coding-tools',
      excerpt: 'During my ACM internship at IIT Delhi, I worked on making programming more inclusive. Turns out, building accessible tech teaches you a lot about how everyone uses technology.',
      date: '2024-12-20',
      readTime: '6 min read',
      tags: ['Accessibility', 'AI', 'Inclusion'],
      status: 'published'
    },
    {
      title: 'Privacy-Preserving Activity Recognition: A Deep Dive',
      slug: 'privacy-preserving-activity-recognition',
      excerpt: 'How do you get 95.93% accuracy while still keeping user data private? A look at differential privacy on IoT devices, and why calibrating noise is trickier than it seems.',
      date: '2024-11-30',
      readTime: '10 min read',
      tags: ['Privacy', 'IoT', 'Machine Learning'],
      status: 'published'
    },
    {
      title: "From TIFR to IISc: My Journey Through India's Premier CS Programs",
      slug: 'tifr-iisc-cs-programs',
      excerpt: "Reflections on attending Vigyan Vidushi at TIFR and the Theory CS Winter School at IISc. What it's like to be surrounded by brilliant people and feel slightly out of your depth (in the best way).",
      date: '2024-10-15',
      readTime: '5 min read',
      tags: ['Academia', 'Research', 'Personal'],
      status: 'published'
    },
    {
      title: "Quantum Computing Meets SAT: Implementing Grover's Algorithm",
      slug: 'quantum-computing-grovers-algorithm',
      excerpt: "A practical guide to implementing Grover's Algorithm for SAT problems in Qiskit. Includes the moments where I thought quantum circuits would make more sense than they did.",
      date: '2024-09-28',
      readTime: '12 min read',
      tags: ['Quantum Computing', 'Algorithms', 'Qiskit'],
      status: 'published'
    },
    {
      title: 'The Art of Teaching Verilog: What Students Taught Me',
      slug: 'teaching-verilog',
      excerpt: 'Being a TA for Digital Circuits taught me that explaining something well is the hardest part. Also, Verilog bugs are a special kind of pain.',
      date: '2024-08-10',
      readTime: '7 min read',
      tags: ['Teaching', 'Verilog', 'Digital Design'],
      status: 'draft'
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Federated Learning': 'bg-blue-500/10 text-blue-600',
      'Edge Computing': 'bg-green-500/10 text-green-600',
      'Privacy': 'bg-purple-500/10 text-purple-600',
      'Accessibility': 'bg-orange-500/10 text-orange-600',
      'Quantum Computing': 'bg-pink-500/10 text-pink-600',
      'Teaching': 'bg-yellow-500/10 text-yellow-600',
      'Research': 'bg-cyan-500/10 text-cyan-600',
      'Personal': 'bg-red-500/10 text-red-600'
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <h1 className="text-3xl font-bold gradient-text mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on research, technology, and the occasional debugging story. 
            I try to write like I talk: no jargon walls, just honest takes on what I'm learning.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="terminal-card card-hover">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">Featured</span>
            <span className="text-xs text-muted-foreground">Latest Post</span>
          </div>
          <h2 className="text-2xl font-bold mb-3">{posts[0].title}</h2>
          <p className="text-muted-foreground mb-4 text-lg">{posts[0].excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(posts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{posts[0].readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {posts[0].tags.map(tag => (
              <span key={tag} className={`text-xs px-2 py-1 rounded-md ${getTagColor(tag)}`}>{tag}</span>
            ))}
          </div>
          <Link to={`/blog/${posts[0].slug}`} className="btn-terminal inline-flex items-center gap-2">
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-bold mb-6 glow-text">All Posts</h2>
      </FadeIn>
      <StaggerContainer className="space-y-6">
        {posts.slice(1).map((post, index) => (
          <StaggerItem key={index}>
            <article className="terminal-card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  {post.status === 'draft' && (
                    <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded-md mb-2 inline-block">Draft</span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
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
                </div>
                <div className="flex flex-col justify-center">
                  <Link to={`/blog/${post.slug}`} className="btn-terminal inline-flex items-center gap-2 whitespace-nowrap">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Blog;
