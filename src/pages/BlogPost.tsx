import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  const posts = {
    'federated-learning-edge-raspberry-pi': {
      title: 'Federated Learning on Edge: Lessons from Raspberry Pi Deployment',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['Federated Learning', 'Edge Computing', 'Raspberry Pi'],
      content: `
# Federated Learning on Edge: Lessons from Raspberry Pi Deployment

Deploying federated learning models on resource-constrained devices presents unique challenges that go far beyond theoretical considerations. During my BS thesis work under Dr. Haroon R Lone, I implemented a custom Federated Convolutional Neural Network (FLCNN) on Raspberry Pi 5 devices to simulate real-world edge environments.

## The Challenge

Traditional federated learning assumes relatively stable network conditions and adequate computational resources. Reality on edge devices tells a different story. With only 4GB of RAM and ARM-based processors, Raspberry Pi devices push the boundaries of what's possible in distributed machine learning.

## Architecture Design

Our FLCNN architecture had to be lightweight yet effective. We designed a custom CNN with:

- **Minimal parameter count**: Reduced model complexity while maintaining representational power
- **Efficient communication protocols**: Implemented model compression to reduce bandwidth usage
- **Asynchronous updates**: Handled intermittent connectivity gracefully

## Key Findings

After extensive testing with non-IID client data, we achieved **81.36% test accuracy** - outperforming several standard pre-trained models under the same federated setup. More importantly, we learned:

### 1. Memory Management is Critical
Standard PyTorch operations that work seamlessly on GPU-enabled machines can crash edge devices. We had to implement custom memory pooling and garbage collection strategies.

### 2. Network Latency Matters More Than Bandwidth
While model compression helped, the real bottleneck was connection establishment and maintenance. Persistent connections with heartbeat mechanisms proved essential.

### 3. Non-IID Data Distribution Amplifies Edge Challenges
The combination of statistical heterogeneity and resource constraints created convergence issues we hadn't anticipated in simulation.

## Performance Analysis

Our convergence analysis revealed interesting patterns:

- **Communication overhead**: 40% reduction through gradient compression
- **Training time**: 3x longer than centralized approach, but acceptable for privacy gains
- **Energy consumption**: Manageable with proper scheduling algorithms

## Looking Forward

This work is progressing toward publication, and we're exploring:

- Adaptive model architectures that adjust based on device capabilities
- Hierarchical federated learning for multi-tier edge environments
- Integration with differential privacy mechanisms

The intersection of federated learning and edge computing opens fascinating research directions, particularly as IoT devices become more prevalent in sensitive applications.

---

*This research was conducted as part of my BS thesis at IISER Bhopal under the supervision of Dr. Haroon R Lone. The work involved designing, implementing, and evaluating federated learning systems on actual Raspberry Pi hardware.*
      `
    },
    'ai-accessibility-coding-tools': {
      title: 'Making AI Accessible: Building Coding Tools for the Visually Impaired',
      date: '2024-12-20',
      readTime: '6 min read',
      tags: ['Accessibility', 'AI', 'Inclusion'],
      content: `
# Making AI Accessible: Building Coding Tools for the Visually Impaired

During my research internship at ACM and NCAHT, IIT Delhi, I had the privilege of working on accessibility tools that bridge the gap between advanced AI technologies and inclusive design. This experience fundamentally changed how I think about technology development.

## The Problem Space

Programming is inherently visual - from syntax highlighting to debugging interfaces. For visually impaired developers, this creates significant barriers to entry and productivity. While screen readers exist, they often struggle with code structure and complex data visualizations.

## Our Approach

We developed an integrated platform combining:

### AI-Powered Code Assistance
- **Natural language code explanation**: Converting complex algorithms into clear, sequential descriptions
- **Intelligent error detection**: Contextual debugging assistance through voice interfaces
- **Code structure navigation**: Hierarchical code exploration optimized for screen readers

### Accessible Data Visualization
The most challenging aspect was making graphs and charts accessible. Our solution involved:

- **Tactile diagram generation**: Converting visual data into physical representations
- **Audio data sonification**: Mapping data patterns to audio frequencies and rhythms
- **Structured text descriptions**: Comprehensive textual representations of visual elements

## Technical Implementation

We built the platform using:

- **NVDA screen reader integration**: Deep hooks into the screen reader API for seamless interaction
- **Flask-based backend**: Lightweight server handling AI inference and data processing
- **Custom audio processing**: Real-time sonification algorithms for data representation

## Key Challenges

### 1. Cognitive Load Management
Balancing information density with clarity proved difficult. Too much detail overwhelmed users; too little left them without context.

### 2. Real-time Interaction
Voice-based interfaces required careful timing and interruption handling to feel natural.

### 3. Diverse User Needs
Visual impairment exists on a spectrum. Our tools needed to accommodate varying levels of sight and different assistive technology preferences.

## Impact and Learnings

Working with visually impaired developers taught me:

- **Inclusive design benefits everyone**: Features we built for accessibility improved the experience for all users
- **Technology should adapt to users**: Not the other way around
- **Collaboration is essential**: Direct feedback from the target community was invaluable

## Future Directions

This work continues to influence my research philosophy. I'm exploring:

- Integration of accessibility considerations in federated learning systems
- Voice-controlled interfaces for IoT device programming
- Inclusive design principles in quantum computing education

---

*This project was part of my summer internship at ACM and NCAHT, IIT Delhi, focusing on inclusive technology development and AI accessibility.*
      `
    },
    'privacy-preserving-activity-recognition': {
      title: 'Privacy-Preserving Activity Recognition: A Deep Dive',
      date: '2024-11-30',
      readTime: '10 min read',
      tags: ['Privacy', 'IoT', 'Machine Learning'],
      content: `
# Privacy-Preserving Activity Recognition: A Deep Dive

How do you achieve 95.93% accuracy in activity recognition while providing formal privacy guarantees? This question drove my latest research project under Dr. Haroon R Lone, exploring the intersection of differential privacy and edge computing.

## The Privacy-Utility Tradeoff

Activity recognition systems traditionally require raw sensor data to be transmitted to central servers for processing. This creates significant privacy concerns - accelerometer and gyroscope data can reveal intimate details about a person's daily life, health conditions, and behavior patterns.

## Our Edge-Based Solution

We developed a system that processes sensitive data locally on IoT devices, adding carefully calibrated noise to preserve privacy while maintaining classification accuracy.

### System Architecture

**Local Processing Pipeline:**
1. **Data Collection**: Multi-sensor fusion from accelerometers, gyroscopes, and magnetometers
2. **Feature Extraction**: Edge-computed statistical features and frequency domain analysis
3. **Noise Addition**: Differential privacy mechanisms applied at the feature level
4. **Local Classification**: Lightweight neural network inference on-device

### Differential Privacy Implementation

Our privacy mechanism employed the Gaussian mechanism with:

- **ε-differential privacy**: Formal privacy parameter controlling noise levels
- **Adaptive noise scaling**: Dynamic adjustment based on data sensitivity
- **Composition tracking**: Managing privacy budget across multiple queries

## Technical Challenges

### 1. Noise Calibration
Too little noise compromises privacy; too much destroys utility. We developed adaptive algorithms that:

- Analyze local data distribution characteristics
- Adjust noise parameters based on classification confidence
- Maintain privacy guarantees across device heterogeneity

### 2. Resource Constraints
IoT devices have limited computational and memory resources. Our optimizations included:

- **Model quantization**: Reduced precision arithmetic for faster inference
- **Feature selection**: Identifying minimal feature sets for maintained accuracy
- **Efficient noise generation**: Hardware-accelerated random number generation

### 3. Real-time Performance
Activity recognition requires low-latency processing. We achieved this through:

- **Sliding window optimization**: Efficient buffer management for continuous data streams
- **Pipelined processing**: Overlapping computation and communication phases
- **Predictive prefetching**: Anticipating computation needs based on activity patterns

## Results and Analysis

Our final system achieved:

- **95.93% classification accuracy** on standard activity recognition benchmarks
- **Formal ε-differential privacy** with ε = 1.0 (strong privacy guarantee)
- **Sub-100ms inference latency** on ARM Cortex-A processors
- **3x reduction in communication overhead** compared to centralized approaches

### Privacy Analysis

We evaluated privacy protection through:

- **Membership inference attacks**: Attackers couldn't determine if specific data points were used in training
- **Attribute inference resistance**: Personal characteristics remained hidden despite model outputs
- **Composition analysis**: Privacy guarantees held across multiple interactions

## Real-World Deployment

Testing on embedded devices revealed practical considerations:

### Hardware Variability
Different IoT platforms exhibited varying noise characteristics and computational capabilities, requiring adaptive algorithms.

### Environmental Factors
Real-world deployment introduced sensor noise and environmental variations not present in laboratory settings.

### User Behavior Patterns
Long-term studies showed that privacy preferences and activity patterns change over time, necessitating adaptive privacy mechanisms.

## Looking Forward

This research opens several promising directions:

### Federated Privacy
Combining our edge-based approach with federated learning could enable collaborative model improvement while maintaining individual privacy.

### Multi-Modal Privacy
Extending privacy guarantees to other sensor modalities (audio, visual, environmental) presents interesting challenges.

### Dynamic Privacy
Developing systems that adapt privacy parameters based on context and user preferences represents the next frontier.

## Conclusion

Privacy-preserving activity recognition demonstrates that we don't have to choose between privacy and utility. With careful system design and theoretical foundations, we can achieve both strong privacy guarantees and high classification accuracy.

The key insight from this work is that privacy is not just about adding noise - it's about rethinking entire system architectures to minimize data exposure while maximizing utility.

---

*This research was conducted at IISER Bhopal under Dr. Haroon R Lone's supervision, with a focus on practical deployment of differential privacy mechanisms in resource-constrained environments.*
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="space-y-8">
        <section className="terminal-card text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/blog" className="btn-terminal">
            Back to Blog
          </Link>
        </section>
      </div>
    );
  }

  const getTagColor = (tag: string) => {
    const colors = {
      'Federated Learning': 'bg-blue-500/10 text-blue-400',
      'Edge Computing': 'bg-green-500/10 text-green-400',
      'Privacy': 'bg-purple-500/10 text-purple-400',
      'Accessibility': 'bg-orange-500/10 text-orange-400',
      'IoT': 'bg-cyan-500/10 text-cyan-400',
      'Machine Learning': 'bg-pink-500/10 text-pink-400',
      'Raspberry Pi': 'bg-red-500/10 text-red-400',
      'AI': 'bg-yellow-500/10 text-yellow-400',
      'Inclusion': 'bg-indigo-500/10 text-indigo-400'
    };
    return colors[tag as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <h1 className="text-3xl font-bold gradient-text mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className={`text-xs px-2 py-1 rounded-md ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Content */}
      <article className="terminal-card prose prose-invert max-w-none">
        <div 
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .replace(/\n/g, '<br>')
              .replace(/#{1,6}\s/g, match => {
                const level = match.trim().length;
                return `<h${level} class="text-${4-level}xl font-bold mt-8 mb-4 text-foreground">`;
              })
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`(.*?)`/g, '<code class="bg-muted px-1 rounded text-accent">$1</code>')
              .replace(/---/g, '<hr class="my-8 border-border">')
          }}
        />
      </article>
    </div>
  );
};

export default BlogPost;