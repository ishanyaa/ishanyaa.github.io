import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
const Blog = () => {
  const posts = [{
    title: 'Federated Learning on Edge: Lessons from Raspberry Pi Deployment',
    excerpt: 'Deploying federated learning models on resource-constrained devices presents unique challenges. Here\'s what I learned from implementing FLCNN on Raspberry Pi 5 devices.',
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['Federated Learning', 'Edge Computing', 'Raspberry Pi'],
    status: 'published'
  }, {
    title: 'Making AI Accessible: Building Coding Tools for the Visually Impaired',
    excerpt: 'During my internship at ACM, I worked on creating accessible coding platforms. This post explores the challenges and solutions in making programming more inclusive.',
    date: '2024-12-20',
    readTime: '6 min read',
    tags: ['Accessibility', 'AI', 'Inclusion'],
    status: 'published'
  }, {
    title: 'Privacy-Preserving Activity Recognition: A Deep Dive',
    excerpt: 'How do you maintain privacy while achieving 95.93% accuracy in activity recognition? A technical exploration of differential privacy techniques at the edge.',
    date: '2024-11-30',
    readTime: '10 min read',
    tags: ['Privacy', 'IoT', 'Machine Learning'],
    status: 'published'
  }, {
    title: 'From TIFR to IISc: My Journey Through India\'s Premier CS Programs',
    excerpt: 'Reflections on attending elite computer science programs and what I learned about theoretical foundations, research methodologies, and academic collaboration.',
    date: '2024-10-15',
    readTime: '5 min read',
    tags: ['Academia', 'Research', 'Personal'],
    status: 'published'
  }, {
    title: 'Quantum Computing Meets SAT: Implementing Grover\'s Algorithm',
    excerpt: 'A practical guide to implementing Grover\'s Algorithm for SAT problems, including quantum circuit design and amplitude amplification techniques.',
    date: '2024-09-28',
    readTime: '12 min read',
    tags: ['Quantum Computing', 'Algorithms', 'Qiskit'],
    status: 'published'
  }, {
    title: 'The Art of Teaching Verilog: From HDL Novice to Digital Designer',
    excerpt: 'Teaching Verilog HDL to undergraduate students taught me as much about learning as it did about digital design. Here are my pedagogical insights.',
    date: '2024-08-10',
    readTime: '7 min read',
    tags: ['Teaching', 'Verilog', 'Digital Design'],
    status: 'draft'
  }];
  const getTagColor = (tag: string) => {
    const colors = {
      'Federated Learning': 'bg-blue-500/10 text-blue-400',
      'Edge Computing': 'bg-green-500/10 text-green-400',
      'Privacy': 'bg-purple-500/10 text-purple-400',
      'Accessibility': 'bg-orange-500/10 text-orange-400',
      'Quantum Computing': 'bg-pink-500/10 text-pink-400',
      'Teaching': 'bg-yellow-500/10 text-yellow-400',
      'Research': 'bg-cyan-500/10 text-cyan-400',
      'Personal': 'bg-red-500/10 text-red-400'
    };
    return colors[tag as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };
  return <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <h1 className="text-3xl font-bold gradient-text mb-4">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts on research, technology, and the occasional debugging adventure. 
          From federated learning insights to quantum computing experiments.
        </p>
      </section>

      {/* Featured Post */}
      <section className="terminal-card card-hover">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">Featured</span>
          <span className="text-xs text-muted-foreground">Latest Post</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-3 hover:text-accent transition-colors cursor-pointer">
          {posts[0].title}
        </h2>
        
        <p className="text-muted-foreground mb-4 text-lg">{posts[0].excerpt}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(posts[0].date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{posts[0].readTime}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {posts[0].tags.map(tag => <span key={tag} className={`text-xs px-2 py-1 rounded-md ${getTagColor(tag)}`}>
              {tag}
            </span>)}
        </div>
        
        <Link to="/blog/federated-learning-edge-raspberry-pi" className="btn-terminal flex items-center gap-2">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6 glow-text">All Posts</h2>
        <div className="space-y-6">
          {posts.slice(1).map((post, index) => <article key={index} className="terminal-card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {post.status === 'draft' && <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-md">
                        Draft
                      </span>}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => <span key={tag} className={`text-xs px-2 py-1 rounded-md ${getTagColor(tag)}`}>
                        {tag}
                      </span>)}
                  </div>
                </div>
                
                <div className="flex flex-col justify-between md:w-auto">
                  <Link 
                    to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                    className="btn-terminal flex items-center gap-2 whitespace-nowrap"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>)}
        </div>
      </section>

      {/* Newsletter Subscription */}
      
    </div>;
};
export default Blog;