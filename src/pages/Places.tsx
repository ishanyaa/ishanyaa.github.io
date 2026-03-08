import { MapPin, Calendar } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

const Places = () => {
  const places = [
    {
      name: 'Tata Institute of Fundamental Research (TIFR)',
      location: 'Mumbai, Maharashtra',
      date: 'July 2024',
      description: 'STCS Vigyan Vidushi 2024: Three weeks of error correcting codes, graph algorithms, information theory, quantum computing, spectral graph theory.',
      category: 'Academic',
      memories: 'Three weeks of intense learning with 31 other brilliant people. Late-night discussions by the sea. This one changed my life.'
    },
    {
      name: 'Indian Institute of Science (IISc)',
      location: 'Bengaluru, Karnataka',
      date: 'December 2024',
      description: 'Theory CS Winter School 2024: Matching Theory, Differential Privacy, Graph Theory.',
      category: 'Academic',
      memories: 'The differential privacy sessions directly shaped my thesis work. IISc campus is beautiful.'
    },
    {
      name: 'Indian Institute of Science (IISc)',
      location: 'Bengaluru, Karnataka',
      date: 'July 2023',
      description: 'Summer School: Signal Processing, ML, AI, and Power Systems.',
      category: 'Academic',
      memories: 'My first real exposure to research. This is where it all started.'
    },
    {
      name: 'NCAHT, IIT Delhi',
      location: 'New Delhi, India',
      date: 'June - September 2024',
      description: 'ACM Research Internship: Building accessibility tools for visually impaired coders.',
      category: 'Research',
      memories: 'Delhi in summer is hot, but the work was worth every sweaty commute. Made lifelong friends here.'
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Academic': 'bg-primary/10 text-primary',
      'Research': 'bg-green-500/10 text-green-700 dark:text-green-400',
      'Work': 'bg-primary/10 text-primary',
    };
    return colors[category] || 'tag';
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section>
          <h1 className="text-3xl font-bold text-foreground mb-3">Places</h1>
          <p className="text-muted-foreground">
            Research visits and conferences around India. Some of my best ideas came while exploring new places
            (and some came while waiting for delayed trains).
          </p>
        </section>
      </FadeIn>

      <StaggerContainer className="space-y-4">
        {places.map((place, index) => (
          <StaggerItem key={index}>
            <div className="section-card section-card-hover">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">{place.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /><span>{place.location}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /><span>{place.date}</span></div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-md flex-shrink-0 ${getCategoryColor(place.category)}`}>
                  {place.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{place.description}</p>
              <p className="text-xs text-muted-foreground italic">"{place.memories}"</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <section className="section-card">
          <h2 className="text-xl font-semibold mb-3 text-foreground">Coming Up</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Always planning the next trip. Some are for research, some are just because.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="tag">IIT Gandhinagar (ACM India Summer School, June 2025)</span>
            <span className="tag">IIT Delhi (Privacy Workshop, July 2025)</span>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Places;
