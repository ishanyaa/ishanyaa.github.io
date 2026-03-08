import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Blog = () => {
  const posts = [
    {
      title: 'The Summer That Changed Everything: TIFR, IIT Delhi, and Finding My Path',
      slug: 'tifr-summer-2024',
      excerpt: "The summer of 2024 was a turning point. Getting selected for both the ACM internship at IIT Delhi and the STCS Vigyan Vidushi at TIFR Mumbai changed how I see research, CS, and honestly, myself.",
      date: '2025-02-10',
      readTime: '12 min read',
      tags: ['Personal', 'Academia', 'TIFR'],
    },
    {
      title: 'Down the Rabbit Hole: How a Thesis Topic Led Me to AI Safety',
      slug: 'thesis-to-ai-safety',
      excerpt: "When I picked privacy-preserving AI as my thesis topic, I had no idea it would open up an entire world of AI safety, security, and governance. Here's how one paper led to hundreds more.",
      date: '2025-01-20',
      readTime: '15 min read',
      tags: ['AI Safety', 'Privacy', 'Research'],
    },
    {
      title: 'Building for Everyone: What I Learned at IIT Delhi About Accessibility',
      slug: 'accessibility-iit-delhi',
      excerpt: "My ACM internship at IIT Delhi was about building coding tools for visually impaired students. But it ended up teaching me more about empathy, compassion, and how inaccessible the world really is.",
      date: '2024-12-20',
      readTime: '10 min read',
      tags: ['Accessibility', 'Personal', 'IIT Delhi'],
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <h1 className="text-3xl font-bold text-foreground mb-3">Blog</h1>
          <p className="text-muted-foreground">
            Stories from my journey, things I'm learning, and topics I find fascinating.
            I try to write honestly about my experiences, the good parts and the confusing parts.
          </p>
        </section>
      </FadeIn>

      <StaggerContainer className="space-y-6">
        {posts.map((post, index) => (
          <StaggerItem key={index}>
            <article className="section-card section-card-hover">
              <h2 className="text-xl font-semibold text-foreground mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="tag-blue">{tag}</span>
                ))}
                <Link to={`/blog/${post.slug}`} className="ml-auto text-sm link-accent inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default Blog;
