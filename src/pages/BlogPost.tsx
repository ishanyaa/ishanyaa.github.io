import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, { title: string; date: string; readTime: string; tags: string[]; content: string }> = {
    'tifr-summer-2024': {
      title: 'The Summer That Changed Everything: TIFR, IIT Delhi, and Finding My Path',
      date: '2025-02-10',
      readTime: '12 min read',
      tags: ['Personal', 'Academia', 'TIFR'],
      content: `Let me be honest: the first time I ever wrote code was in college. I didn't come from a background where CS was a given. At IISER Bhopal, I was figuring things out as I went, and for a while, I wasn't sure where I fit in.

Then came the summer of 2024, and everything shifted.

## Getting Selected

I still remember the day I got the email about the STCS Vigyan Vidushi fellowship at TIFR Mumbai. It's funded by Google CSR, and only about 32 people get selected from over a thousand applicants. I read the email three times because I genuinely could not believe it. Around the same time, I got selected for the ACM India summer fellowship at IIT Delhi. Two incredible opportunities in one summer. I was terrified and thrilled in equal measure.

## TIFR: Where I Found My Passion

TIFR was unlike anything I'd experienced. Three weeks of intense learning: error correcting codes, algorithms on graphs, information theory, quantum computing, spectral graph theory. The pace was brutal. Some lectures went completely over my head on the first pass, and I spent evenings trying to piece things together.

But here's the thing that made it special: the discussions. Late-night conversations on the seashore about open problems. People questioning everything, not to show off, but because they genuinely wanted to understand. The freedom to say "I don't get this" without judgment. I'd never been in an environment like that.

I met people who had been doing CS since they were 12, and here I was, having started in college. But nobody cared about that. What mattered was curiosity, and curiosity was something I had in abundance.

There was this one evening, sitting by the sea at TIFR's campus, watching the sunset, discussing graph theory with people from all over India. Something clicked. This is what I want to do. This is who I want to be. Not the smartest person in the room, but someone who keeps asking questions and keeps showing up.

## The IIT Delhi Internship

The internship at NCAHT, IIT Delhi happened right before TIFR. It was my first time crossing the Vindhyas and going to North India. Delhi in summer is... an experience. The heat, the chaos, the incredible food.

But the work was transformative. Building accessible coding tools for visually impaired students made me see technology completely differently (I've written a separate post about that). And Delhi itself was where I made some of my closest friends. People from different colleges, different backgrounds, all brought together by this shared experience of trying to build something meaningful.

## What Changed

Before that summer, I liked CS. After it, I loved it. Before, I was interested in research. After, I knew I wanted to make it my life. The combination of TIFR's intellectual intensity and IIT Delhi's real-world impact showed me that research isn't just about papers and publications. It's about being part of a community that cares about understanding things deeply.

I came back to IISER Bhopal a different person. I was more confident, more curious, and for the first time, I had a clear sense of direction. I knew I wanted to pursue an MS/PhD. I knew I wanted to work on problems that matter. And I knew that the feeling of being "not good enough" that I'd carried for so long was just fear dressed up as humility.

## To Anyone Reading This

If you're an undergrad from a non-traditional CS background, feeling like everyone else has a head start: I get it. I was there. But here's what I learned that summer: the race isn't real. Nobody is keeping score except you. Show up, ask questions, be genuinely curious, and you'll find your place.

And apply to everything. The worst they can say is no. The best? It might just change your life.`
    },
    'thesis-to-ai-safety': {
      title: 'Down the Rabbit Hole: How a Thesis Topic Led Me to AI Safety',
      date: '2025-01-20',
      readTime: '15 min read',
      tags: ['AI Safety', 'Privacy', 'Research'],
      content: `When it was time to pick our BS thesis projects, I was scrolling through the list of available topics in our department. One caught my eye: "Privacy-Preserving AI." There was a reference paper attached. I clicked on it, started reading, and honestly? I was shocked.

I had this naive assumption that AI systems were built with privacy in mind. That someone, somewhere, was making sure that the data used to train models was handled responsibly. Turns out, that's not always the case. Not even close.

## The Paper That Started It All

The reference paper was about federated learning, a way to train ML models without collecting everyone's data in one place. The idea is elegant: instead of sending your data to a server, the model comes to your data. You train locally, send back only the model updates, and the central server aggregates them.

But the more I read, the more I realised: even model updates can leak information. There are attacks (membership inference, model inversion) that can reconstruct training data from gradients. So "not sending the data" isn't enough. You need differential privacy, secure aggregation, and careful system design.

I was hooked.

## Falling Into AI Safety

Once you start pulling at the privacy thread, it unravels into a much bigger tapestry. Privacy-preserving AI is just one piece of a larger puzzle called AI safety. Here's how I fell down the rabbit hole:

**Privacy** led me to **differential privacy**. I started using [Opacus](https://opacus.ai/) (PyTorch's differential privacy library) and [PySyft](https://github.com/OpenMined/PySyft) (for federated learning with privacy). The math behind epsilon-differential privacy is beautiful: you're essentially guaranteeing that any single person's presence or absence in the dataset doesn't significantly change the output.

**Differential privacy** led me to **fairness**. If you add noise to protect privacy, does that noise affect different groups differently? Turns out, yes, it can. I started exploring [Fairlearn](https://fairlearn.org/) and [IBM's AIF360](https://aif360.mybluemix.net/), which are toolkits for measuring and mitigating bias in AI systems.

**Fairness** led me to **governance**. Who decides what's fair? Who sets the rules for how AI systems should behave? I started reading about the [EU AI Act](https://artificialintelligenceact.eu/), which is the world's first comprehensive AI regulation. Through the Turing College's AI Ethics certification (EU-funded, Erasmus+), I'm now learning about how to actually implement ethical AI in practice, not just in theory.

**Governance** led me to **AI safety** broadly: alignment, robustness, interpretability. How do we make sure AI systems do what we want them to do? How do we make them robust against adversarial attacks? How do we understand what they're actually learning?

## What I've Learned So Far

1. **Privacy is not just a technical problem.** It's social, legal, and political. Technical solutions like differential privacy are necessary but not sufficient. You also need policy, regulation, and cultural change.

2. **AI safety is not about being scared of AI.** It's about being thoughtful. It's about asking "what could go wrong?" before deploying a system that affects millions of people.

3. **The tools exist.** Libraries like Opacus, PySyft, Fairlearn, AIF360, and frameworks like [Flower](https://flower.dev/) (for federated learning) make it possible to build privacy-preserving, fair AI systems today. The gap isn't in tools; it's in adoption and awareness.

4. **Interdisciplinary thinking is essential.** You can't do AI safety with just CS. You need philosophy (what does fairness mean?), law (what does the EU AI Act require?), sociology (how do AI systems affect communities?), and economics (who benefits, who pays?).

## Resources If You're Curious

Here are some things that helped me on this journey:

- [Opacus](https://opacus.ai/): Differential privacy for PyTorch
- [PySyft](https://github.com/OpenMined/PySyft): Privacy-preserving ML
- [Flower](https://flower.dev/): Federated learning framework
- [Fairlearn](https://fairlearn.org/): AI fairness toolkit
- [AIF360](https://aif360.mybluemix.net/): IBM's AI Fairness 360
- [EU AI Act](https://artificialintelligenceact.eu/): The regulation that's shaping global AI policy
- [Turing College AI Ethics](https://www.turingcollege.com/ai-ethics): Where I'm currently learning about ethical AI
- [ArXiv CS Privacy](https://arxiv.org/list/cs.CR/recent): For staying updated on privacy research

## Where I'm Heading

My thesis on federated learning and differential privacy was just the beginning. I want to go deeper into how we can build AI systems that are private, fair, and accountable. That's why I'm looking at MS/PhD programs. Not because I think I have all the answers, but because I have a lot of questions and I want to find a community that shares them.

If any of this resonates with you, I'd genuinely love to chat. [Find me on LinkedIn](https://www.linkedin.com/in/ishanya/) or drop me an [email](mailto:ishanya.inbox@gmail.com). The more people thinking about these problems, the better.`
    },
    'accessibility-iit-delhi': {
      title: 'Building for Everyone: What I Learned at IIT Delhi About Accessibility',
      date: '2024-12-20',
      readTime: '10 min read',
      tags: ['Accessibility', 'Personal', 'IIT Delhi'],
      content: `During the summer of 2024, I interned at the National Center for Assistive Health Technologies (NCAHT) at IIT Delhi, funded by ACM India. The project was about building AI-assisted accessible coding tools for visually impaired students. I walked in thinking I'd write some code and build some features. I walked out a fundamentally different person.

## The Shock

I was not prepared for how inaccessible the world is. I don't mean that in an abstract, "I read about it in a textbook" way. I mean I sat with visually impaired students and watched them try to use the tools that I and millions of others take for granted, and it was painful.

Code editors? Built for people who can see syntax highlighting. Debugging tools? Visual by nature. Data visualisations? Completely inaccessible. Error messages? Displayed visually in corners of the screen that screen readers might not even reach.

I remember thinking: we're in 2024, and we still haven't figured out how to let someone who can't see write a for loop without jumping through hoops? How is this possible?

## What We Built

Under the guidance of Dr. Piyush Chanana and Dr. Anupama J, we worked on:

- **Screen reader integration** for coding environments, making code structure navigable through audio
- **Tactile feedback systems** that let you "feel" code structure
- **Natural language code explanations** that break down what a function does in plain English
- **Accessible data visualisation interfaces**: turning charts and graphs into audio descriptions and tactile diagrams

The hardest part wasn't the technology. It was understanding the users. We ran user studies with visually impaired students, and their feedback taught us more than any paper could.

## Life Lessons

**Empathy isn't automatic.** I thought I was empathetic before this internship. I wasn't. Real empathy comes from sitting with someone, watching them struggle with something you've never thought twice about, and feeling that frustration in your gut. It's not about feeling sorry for people. It's about understanding their world.

**Compassion grows when you pay attention.** The students we worked with weren't looking for pity. They were sharp, funny, and deeply passionate about coding. They just needed tools that didn't assume everyone experiences the world the same way. That taught me something about compassion: it's not about fixing people. It's about fixing systems.

**Accessibility benefits everyone.** Features we built for visually impaired users, like natural language code explanations, turned out to be useful for everyone. It's the curb cut effect: designing for the margins improves things for the centre.

## Crossing the Vindhyas

This was also my first time going to North India. I'm from the south, and crossing the Vindhyas felt like entering a different world. Delhi's energy is intense: the food, the people, the heat (oh god, the heat). But I made some of my best friends there. People from different colleges, different states, all thrown together by this incredible program.

We'd finish work, grab chai from the IIT Delhi canteen, and talk about everything: research, life, dreams, fears. Those conversations shaped me as much as the research did.

## What I Carry With Me

After IIT Delhi, I can't look at a website, an app, or a tool without thinking: "Can everyone use this?" It's become a reflex.

I'm not an accessibility expert. I'm just someone who had her eyes opened (pun intended) by spending a summer with people who experience the world differently. And I think that's something every tech person should experience.

If you're interested in accessibility, check out [NCAHT at IIT Delhi](https://www.ncaht.in/). And if you're building something, ask yourself: who am I accidentally leaving out?`
    },
  };

  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="space-y-8">
        <section className="section-card text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">This blog post doesn't exist yet.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-3">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="tag-blue">{tag}</span>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">{block.replace('## ', '')}</h2>;
            }
            if (block.startsWith('- ')) {
              const items = block.split('\n').filter(l => l.startsWith('- '));
              return (
                <ul key={i} className="space-y-1 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-0.5">·</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>') }} />
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.startsWith('1. ') || block.match(/^\d+\. /)) {
              const items = block.split('\n').filter(l => l.match(/^\d+\. /));
              return (
                <ol key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary font-medium">{j + 1}.</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s+/, '').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>') }} />
                    </li>
                  ))}
                </ol>
              );
            }
            const html = block
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
            return <p key={i} className="text-muted-foreground leading-relaxed my-4 text-sm" dangerouslySetInnerHTML={{ __html: html }} />;
          })}
        </article>
      </FadeIn>
    </div>
  );
};

export default BlogPost;
