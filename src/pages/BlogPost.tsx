import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { FadeIn } from '@/components/MotionWrapper';

// Import blog images
import tifrHomi from '@/assets/tifr-homi-bhabha.jpeg';
import tifrQubit from '@/assets/tifr-qubit.jpeg';
import tifrSea from '@/assets/tifr-sea.jpeg';
import tifrGroup from '@/assets/tifr-group.jpg';
import tifrGroupOrg from '@/assets/tifr-group-organisers.jpeg';
import tifrMarine from '@/assets/tifr-marine-drive.jpeg';
import tifrMarineTrident from '@/assets/tifr-marine-drive-trident.jpeg';
import tifrHalls from '@/assets/tifr-halls.jpeg';
import thesis5am from '@/assets/thesis-5am-bugfix.jpeg';
import delhiRashtrapati from '@/assets/delhi-rashtrapati-bhavan.jpeg';
import iitdEvenings from '@/assets/iitd-evenings.jpeg';
import iitdLawn from '@/assets/iitd-lawn.jpeg';
import iitdPrivacy from '@/assets/iitd-privacy-group.jpeg';
import iitdPrivacy2 from '@/assets/iitd-privacy-group2.jpeg';

interface BlogImage {
  src: string;
  alt: string;
  caption: string;
}

interface BlogSection {
  type: 'text' | 'heading' | 'image' | 'list' | 'ordered-list';
  content?: string;
  image?: BlogImage;
  items?: string[];
}

interface Post {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  sections: BlogSection[];
}

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, Post> = {
    'tifr-summer-2024': {
      title: 'The Summer That Changed Everything: TIFR, Mumbai, and Finding My Path',
      date: '2025-02-10',
      readTime: '12 min read',
      tags: ['Personal', 'Academia', 'TIFR'],
      sections: [
        { type: 'text', content: "Let me be honest: the first time I ever wrote code was in college. I didn't come from a background where CS was a given. At IISER Bhopal, I was figuring things out as I went, and for a while, I wasn't sure where I fit in." },
        { type: 'text', content: "Then came the summer of 2024, and everything shifted." },
        { type: 'heading', content: 'Getting Selected' },
        { type: 'text', content: "I still remember the day I got the email about the STCS Vigyan Vidushi fellowship at TIFR Mumbai. It's funded by Google CSR, and only about 32 people get selected from over a thousand applicants. I read the email three times because I genuinely could not believe it. Around the same time, I got selected for the ACM India summer fellowship at IIT Delhi. Two incredible opportunities in one summer. I was terrified and thrilled in equal measure." },
        { type: 'heading', content: 'TIFR: Where I Found My Passion' },
        { type: 'image', image: { src: tifrHomi, alt: 'The Homi J Bhabha statue at TIFR Mumbai', caption: 'The iconic Homi J Bhabha statue at TIFR. Standing here for the first time felt surreal.' } },
        { type: 'text', content: "TIFR was unlike anything I'd experienced. Three weeks of intense learning: error correcting codes, algorithms on graphs, information theory, quantum computing, spectral graph theory. The pace was brutal. Some lectures went completely over my head on the first pass, and I spent evenings trying to piece things together." },
        { type: 'image', image: { src: tifrHalls, alt: 'The halls of TIFR', caption: 'The halls of TIFR. There is something about walking through these corridors that makes you feel like you are part of something bigger.' } },
        { type: 'text', content: "But here's the thing that made it special: the discussions. Late-night conversations on the seashore about open problems. People questioning everything, not to show off, but because they genuinely wanted to understand. The freedom to say \"I don't get this\" without judgment. I'd never been in an environment like that." },
        { type: 'heading', content: 'Seeing a Quantum Computer!' },
        { type: 'image', image: { src: tifrQubit, alt: 'Quantum computer setup at TIFR', caption: 'We actually got to see a quantum computing setup at TIFR! After all those lectures on qubits and superposition, seeing the real thing was mind-blowing.' } },
        { type: 'text', content: "One of the highlights was visiting the quantum computing lab at TIFR. After spending days learning about quantum algorithms and error correcting codes in the classroom, getting to see the actual hardware was surreal. The cooling systems, the sheer engineering that goes into maintaining quantum coherence... it made the theory real in a way that no textbook can." },
        { type: 'heading', content: 'The People and The Sea' },
        { type: 'text', content: "I met people who had been doing CS since they were 12, and here I was, having started in college. But nobody cared about that. What mattered was curiosity, and curiosity was something I had in abundance." },
        { type: 'image', image: { src: tifrSea, alt: 'Group picture at the sea near TIFR', caption: 'Our group at the sea near TIFR campus. The discussions that happened on these shores were some of the best I have ever had.' } },
        { type: 'text', content: "There was this one evening, sitting by the sea at TIFR's campus, watching the sunset, discussing graph theory with people from all over India. Something clicked. This is what I want to do. This is who I want to be. Not the smartest person in the room, but someone who keeps asking questions and keeps showing up." },
        { type: 'image', image: { src: tifrGroup, alt: 'Group picture with faculty and organisers', caption: 'Group picture with the faculty and organisers. These people shaped my thinking in ways I am still discovering.' } },
        { type: 'image', image: { src: tifrGroupOrg, alt: 'With the organisers', caption: 'With the organisers who had the funniest scientific jokes! Honestly, I look up to them so much. The energy, the warmth, the intellect.' } },
        { type: 'heading', content: 'Walking the Streets of Mumbai' },
        { type: 'text', content: "After classes at TIFR, we'd walk the streets of Mumbai. Marine Drive at sunset, the crowd, the chatter, the sea breeze. For someone who had spent most of college in Bhopal, Mumbai felt electric." },
        { type: 'image', image: { src: tifrMarine, alt: 'Marine Drive, Mumbai', caption: 'Marine Drive after class. The city has an energy that is hard to put into words.' } },
        { type: 'image', image: { src: tifrMarineTrident, alt: 'Walking near the Trident at Marine Drive', caption: 'Walking near the Trident. Those evening walks after intense days of learning were the perfect way to decompress.' } },
        { type: 'heading', content: 'What Changed' },
        { type: 'text', content: "Before that summer, I liked CS. After it, I loved it. Before, I was interested in research. After, I knew I wanted to make it my life. The combination of TIFR's intellectual intensity showed me that research isn't just about papers and publications. It's about being part of a community that cares about understanding things deeply." },
        { type: 'text', content: "I came back to IISER Bhopal a different person. I was more confident, more curious, and for the first time, I had a clear sense of direction. I knew I wanted to pursue an MS/PhD. I knew I wanted to work on problems that matter. And I knew that the feeling of being \"not good enough\" that I'd carried for so long was just fear dressed up as humility." },
        { type: 'heading', content: 'To Anyone Reading This' },
        { type: 'text', content: "If you're an undergrad from a non-traditional CS background, feeling like everyone else has a head start: I get it. I was there. But here's what I learned that summer: the race isn't real. Nobody is keeping score except you. Show up, ask questions, be genuinely curious, and you'll find your place." },
        { type: 'text', content: "And apply to everything. The worst they can say is no. The best? It might just change your life." },
      ]
    },
    'thesis-to-ai-safety': {
      title: 'Down the Rabbit Hole: How a Thesis Topic Led Me to AI Safety',
      date: '2025-01-20',
      readTime: '15 min read',
      tags: ['AI Safety', 'Privacy', 'Research'],
      sections: [
        { type: 'text', content: "When it was time to pick our BS thesis projects, I was scrolling through the list of available topics in our department. One caught my eye: \"Privacy-Preserving AI.\" There was a reference paper attached. I clicked on it, started reading, and honestly? I was shocked." },
        { type: 'text', content: "I had this naive assumption that AI systems were built with privacy in mind. That someone, somewhere, was making sure that the data used to train models was handled responsibly. Turns out, that's not always the case. Not even close." },
        { type: 'heading', content: 'The Paper That Started It All' },
        { type: 'text', content: "The reference paper was about federated learning, a way to train ML models without collecting everyone's data in one place. The idea is elegant: instead of sending your data to a server, the model comes to your data. You train locally, send back only the model updates, and the central server aggregates them." },
        { type: 'text', content: "But the more I read, the more I realised: even model updates can leak information. There are attacks (membership inference, model inversion) that can reconstruct training data from gradients. So \"not sending the data\" isn't enough. You need differential privacy, secure aggregation, and careful system design." },
        { type: 'text', content: "I was hooked." },
        { type: 'heading', content: 'The Night I Fixed The Bug (5 AM Edition)' },
        { type: 'image', image: { src: thesis5am, alt: 'The view at 5 AM when the bug was finally fixed', caption: 'This is the view I saw at 5 AM when I finally fixed the bug I had been working on for weeks. The air was so cool, the weather was so peaceful, and the moon was nothing like I have ever seen in my life. I could hear the birds chirping. One of those moments where exhaustion and euphoria mix into something you never forget.' } },
        { type: 'text', content: "There was this one bug in my federated learning pipeline that had been haunting me for weeks. The model wasn't converging properly with non-IID data splits, and I had tried everything. New aggregation strategies, different learning rate schedules, re-partitioning the data. Nothing worked." },
        { type: 'text', content: "Then one night, around 4:30 AM, something clicked. I traced it back to a subtle numerical issue in the gradient clipping step. I made the fix, ran the experiment, and watched the loss finally drop. At 5 AM, I stepped outside. The air was impossibly cool and fresh. The moon was this giant glowing thing hanging low in the sky, like I had never seen before. Birds were starting to chirp. The whole world felt quiet and new. I stood there for a while, just breathing it in. That moment, standing alone in the early morning after weeks of frustration, is one of my core memories from the thesis." },
        { type: 'heading', content: 'Falling Into AI Safety' },
        { type: 'text', content: "Once you start pulling at the privacy thread, it unravels into a much bigger tapestry. Privacy-preserving AI is just one piece of a larger puzzle called AI safety. Here's how I fell down the rabbit hole:" },
        { type: 'text', content: "**Privacy** led me to **differential privacy**. I started using [Opacus](https://opacus.ai/) (PyTorch's differential privacy library) and [PySyft](https://github.com/OpenMined/PySyft) (for federated learning with privacy). The math behind epsilon-differential privacy is beautiful: you're essentially guaranteeing that any single person's presence or absence in the dataset doesn't significantly change the output." },
        { type: 'text', content: "**Differential privacy** led me to **fairness**. If you add noise to protect privacy, does that noise affect different groups differently? Turns out, yes, it can. I started exploring [Fairlearn](https://fairlearn.org/) and [IBM's AIF360](https://aif360.mybluemix.net/), which are toolkits for measuring and mitigating bias in AI systems." },
        { type: 'text', content: "**Fairness** led me to **governance**. Who decides what's fair? Who sets the rules for how AI systems should behave? I started reading about the [EU AI Act](https://artificialintelligenceact.eu/), which is the world's first comprehensive AI regulation. Through the Turing College's AI Ethics certification (EU-funded, Erasmus+), I'm now learning about how to actually implement ethical AI in practice, not just in theory." },
        { type: 'text', content: "**Governance** led me to **AI safety** broadly: alignment, robustness, interpretability. How do we make sure AI systems do what we want them to do? How do we make them robust against adversarial attacks? How do we understand what they're actually learning?" },
        { type: 'heading', content: 'What I Have Learned So Far' },
        { type: 'ordered-list', items: [
          "**Privacy is not just a technical problem.** It's social, legal, and political. Technical solutions like differential privacy are necessary but not sufficient. You also need policy, regulation, and cultural change.",
          "**AI safety is not about being scared of AI.** It's about being thoughtful. It's about asking \"what could go wrong?\" before deploying a system that affects millions of people.",
          "**The tools exist.** Libraries like Opacus, PySyft, Fairlearn, AIF360, and frameworks like [Flower](https://flower.dev/) (for federated learning) make it possible to build privacy-preserving, fair AI systems today. The gap isn't in tools; it's in adoption and awareness.",
          "**Interdisciplinary thinking is essential.** You can't do AI safety with just CS. You need philosophy (what does fairness mean?), law (what does the EU AI Act require?), sociology (how do AI systems affect communities?), and economics (who benefits, who pays?).",
        ]},
        { type: 'heading', content: 'Resources If You Are Curious' },
        { type: 'list', items: [
          "[Opacus](https://opacus.ai/): Differential privacy for PyTorch",
          "[PySyft](https://github.com/OpenMined/PySyft): Privacy-preserving ML",
          "[Flower](https://flower.dev/): Federated learning framework",
          "[Fairlearn](https://fairlearn.org/): AI fairness toolkit",
          "[AIF360](https://aif360.mybluemix.net/): IBM's AI Fairness 360",
          "[EU AI Act](https://artificialintelligenceact.eu/): The regulation that's shaping global AI policy",
          "[Turing College AI Ethics](https://www.turingcollege.com/ai-ethics): Where I'm currently learning about ethical AI",
          "[ArXiv CS Privacy](https://arxiv.org/list/cs.CR/recent): For staying updated on privacy research",
        ]},
        { type: 'heading', content: 'Where I Am Heading' },
        { type: 'text', content: "My thesis on federated learning and differential privacy was just the beginning. I want to go deeper into how we can build AI systems that are private, fair, and accountable. That's why I'm looking at MS/PhD programs. Not because I think I have all the answers, but because I have a lot of questions and I want to find a community that shares them." },
        { type: 'text', content: "If any of this resonates with you, I'd genuinely love to chat. [Find me on LinkedIn](https://www.linkedin.com/in/ishanya/). The more people thinking about these problems, the better." },
      ]
    },
    'accessibility-iit-delhi': {
      title: 'Building for Everyone: What I Learned at IIT Delhi About Accessibility',
      date: '2024-12-20',
      readTime: '10 min read',
      tags: ['Accessibility', 'Personal', 'IIT Delhi'],
      sections: [
        { type: 'text', content: "During the summer of 2024, I interned at the National Center for Assistive Health Technologies (NCAHT) at IIT Delhi, funded by ACM India. The project was about building AI-assisted accessible coding tools for visually impaired students. I walked in thinking I'd write some code and build some features. I walked out a fundamentally different person." },
        { type: 'heading', content: 'The Shock' },
        { type: 'text', content: "I was not prepared for how inaccessible the world is. I don't mean that in an abstract, \"I read about it in a textbook\" way. I mean I sat with visually impaired students and watched them try to use the tools that I and millions of others take for granted, and it was painful." },
        { type: 'text', content: "Code editors? Built for people who can see syntax highlighting. Debugging tools? Visual by nature. Data visualisations? Completely inaccessible. Error messages? Displayed visually in corners of the screen that screen readers might not even reach." },
        { type: 'text', content: "I remember thinking: we're in 2024, and we still haven't figured out how to let someone who can't see write a for loop without jumping through hoops? How is this possible? The world is so different for them, and I had no idea." },
        { type: 'text', content: "If you're curious about the specifics of what we built, feel free to [reach out on LinkedIn](https://www.linkedin.com/in/ishanya/). I'd love to chat about it!" },
        { type: 'heading', content: 'Life Lessons' },
        { type: 'text', content: "**Empathy isn't automatic.** I thought I was empathetic before this internship. I wasn't. Real empathy comes from sitting with someone, watching them struggle with something you've never thought twice about, and feeling that frustration in your gut. It's not about feeling sorry for people. It's about understanding their world." },
        { type: 'text', content: "**Compassion grows when you pay attention.** The students we worked with weren't looking for pity. They were sharp, funny, and deeply passionate about coding. They just needed tools that didn't assume everyone experiences the world the same way." },
        { type: 'text', content: "**Accessibility benefits everyone.** Features we built for visually impaired users, like natural language code explanations, turned out to be useful for everyone. It's the curb cut effect: designing for the margins improves things for the centre." },
        { type: 'heading', content: 'Crossing the Vindhyas' },
        { type: 'text', content: "This was also my first time crossing the Vindhyas and going to North India. Delhi's energy is intense: the food, the people, the heat (oh god, the heat). But I made some of my best friends there. People from different colleges, different states, all thrown together by this incredible program." },
        { type: 'text', content: "We'd finish work, grab chai from the IIT Delhi canteen, and talk about everything: research, life, dreams, fears. Those conversations shaped me as much as the research did." },
        { type: 'heading', content: 'What I Carry With Me' },
        { type: 'text', content: "After IIT Delhi, I can't look at a website, an app, or a tool without thinking: \"Can everyone use this?\" It's become a reflex." },
        { type: 'text', content: "I'm not an accessibility expert. I'm just someone who had her eyes opened by spending a summer with people who experience the world differently. And I think that's something every tech person should experience." },
        { type: 'text', content: "If you're interested in accessibility, check out [NCAHT at IIT Delhi](https://www.ncaht.in/). And if you're building something, ask yourself: who am I accidentally leaving out?" },
      ]
    },
    'iitd-privacy-summer-school': {
      title: 'IIT Delhi Summer School: Computational Challenges in Data Privacy',
      date: '2025-07-15',
      readTime: '8 min read',
      tags: ['Privacy', 'Workshop', 'IIT Delhi'],
      sections: [
        { type: 'text', content: "In July 2025, I attended the [Summer School & Workshop on Computational Challenges in Data Privacy](https://rohitvaish.in/Events/PrivacyWorkshop-2025/) at IIT Delhi. It was a week of cryptography, differential privacy, and security, and it turned out to be one of the most enriching experiences of my academic journey." },
        { type: 'heading', content: 'The Lectures' },
        { type: 'text', content: "The workshop covered some really fascinating ground. We went deep into the mathematics of differential privacy, explored cryptographic protocols, and discussed how security intersects with modern AI systems. What I loved most was how the speakers connected theory to real-world implications. It wasn't just abstract math; it was about building systems that actually protect people." },
        { type: 'text', content: "The workshop also opened my eyes to domains I hadn't explored before. I came in thinking about privacy mostly through the lens of federated learning and noise injection. I left thinking about secure computation, zero-knowledge proofs, and how privacy interacts with fairness and accountability in ways I hadn't considered." },
        { type: 'heading', content: 'The Campus and the People' },
        { type: 'image', image: { src: iitdLawn, alt: 'The lawn at IIT Delhi', caption: 'The IIT Delhi lawn. We spent so many evenings here just sitting and talking about life, research, and everything in between.' } },
        { type: 'text', content: "IIT Delhi in the monsoon has its own charm. The green lawns, the cool evenings after a hot day, the chai runs between sessions. We spent hours on the lawn, debating about privacy vs security tradeoffs, sharing our own research stories, and just... vibing." },
        { type: 'image', image: { src: iitdEvenings, alt: 'Evenings at IIT Delhi', caption: 'Evening light at IIT Delhi. The campus transforms in the golden hour.' } },
        { type: 'heading', content: 'Beyond the Classroom' },
        { type: 'text', content: "After classes, we explored Delhi. One of my favourite memories is visiting Rashtrapati Bhavan with friends. The cool air, the crowd, the people, the long walks down wide roads, the chatter. Delhi has this way of making you feel alive." },
        { type: 'image', image: { src: delhiRashtrapati, alt: 'Rashtrapati Bhavan, New Delhi', caption: 'Rashtrapati Bhavan! We went to visit with friends after classes. The cool air, the crowd, the wide roads, the chatter. Delhi in the evening is something else.' } },
        { type: 'heading', content: 'The Group' },
        { type: 'text', content: "One of the best parts of any workshop is the people you meet. Researchers from across India, all passionate about privacy and security, all at different stages of their journeys. We shared notes, recommended papers, and had those conversations that make you rethink your own assumptions." },
        { type: 'image', image: { src: iitdPrivacy, alt: 'Group photo after the privacy workshop at IIT Delhi', caption: 'Our group after the workshop. These are the kind of people who make academic events worth attending.' } },
        { type: 'image', image: { src: iitdPrivacy2, alt: 'Another group photo from the IIT Delhi privacy workshop', caption: 'More of the crew! Already missing these discussions.' } },
        { type: 'heading', content: 'What I Took Away' },
        { type: 'text', content: "This workshop reinforced something I've been feeling for a while: privacy is not a niche concern. It's central to how we build and deploy AI systems. And the more I learn about it, the more I realise how many open questions there are. That's exciting, honestly. It means there's so much work to be done, and so many ways to contribute." },
        { type: 'text', content: "If you're interested in data privacy, keep an eye on workshops like this one. The community is incredibly welcoming, and the conversations are some of the best you'll have." },
      ]
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

  const renderMarkdown = (text: string) => {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
  };

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
        <article>
          {post.sections.map((section, i) => {
            switch (section.type) {
              case 'heading':
                return <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">{section.content}</h2>;
              case 'image':
                return (
                  <div key={i} className="my-6">
                    <img src={section.image!.src} alt={section.image!.alt} className="blog-image" loading="lazy" />
                    <p className="blog-caption">{section.image!.caption}</p>
                  </div>
                );
              case 'list':
                return (
                  <ul key={i} className="space-y-1 my-4">
                    {section.items!.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-0.5">·</span>
                        <span dangerouslySetInnerHTML={{ __html: renderMarkdown(item) }} />
                      </li>
                    ))}
                  </ul>
                );
              case 'ordered-list':
                return (
                  <ol key={i} className="space-y-2 my-4">
                    {section.items!.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary font-medium">{j + 1}.</span>
                        <span dangerouslySetInnerHTML={{ __html: renderMarkdown(item) }} />
                      </li>
                    ))}
                  </ol>
                );
              default:
                return <p key={i} className="text-muted-foreground leading-relaxed my-4 text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(section.content || '') }} />;
            }
          })}
        </article>
      </FadeIn>
    </div>
  );
};

export default BlogPost;
