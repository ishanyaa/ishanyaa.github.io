import { MapPin, Calendar, Camera, Plane } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/MotionWrapper';

const Places = () => {
  const places = [
    {
      name: 'TCS Research',
      location: 'Bengaluru, Karnataka',
      date: 'Sept 2025 - Present',
      description: 'Where I work now! Privacy-sensitive AI systems in the CTO office.',
      category: 'Work',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=500&h=300&fit=crop',
      memories: 'Still exploring Bengaluru and finding the best filter coffee spots'
    },
    {
      name: 'Tata Institute of Fundamental Research (TIFR)',
      location: 'Mumbai, Maharashtra',
      date: 'July 2024',
      description: 'STCS Vigyan Vidushi 2024: Error correcting codes, graph algorithms, information theory, quantum computing, spectral graph theory.',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=300&fit=crop',
      memories: 'Three weeks of intense learning with 31 other brilliant people. My brain was tired but happy.'
    },
    {
      name: 'Indian Institute of Science (IISc)',
      location: 'Bengaluru, Karnataka',
      date: 'December 2024',
      description: 'Theory CS Winter School 2024: Matching Theory, Differential Privacy, Graph Theory.',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=500&h=300&fit=crop',
      memories: 'The differential privacy sessions directly shaped my thesis work. IISc campus is beautiful.'
    },
    {
      name: 'Indian Institute of Science (IISc)',
      location: 'Bengaluru, Karnataka',
      date: 'July 2023',
      description: 'Summer School: Signal Processing, ML, AI, and Power Systems.',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop',
      memories: 'My first real exposure to cutting-edge research. This is where it all started.'
    },
    {
      name: 'NCAHT, IIT Delhi',
      location: 'New Delhi, India',
      date: 'June - September 2024',
      description: 'ACM Research Internship: Building accessibility tools for visually impaired coders.',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      memories: 'Delhi in summer is hot, but the work was worth every sweaty commute'
    },
    {
      name: 'Rajasthan Adventures',
      location: 'Jaipur & Udaipur, Rajasthan',
      date: 'March 2023',
      description: 'Exploring the Pink City and City of Lakes during college break.',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1599661046827-dacde84ccd6c?w=500&h=300&fit=crop',
      memories: 'The street food alone was worth the trip. Sunset over Lake Pichola was unreal.'
    },
    {
      name: 'Kerala Backwaters',
      location: 'Alleppey, Kerala',
      date: 'January 2024',
      description: "Houseboat experience in God's Own Country.",
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1602216056504-b9d34113a2cd?w=500&h=300&fit=crop',
      memories: 'Peaceful mornings, coconut water, and the most serene boat rides'
    },
    {
      name: 'Himachal Pradesh Trek',
      location: 'Manali, Himachal Pradesh',
      date: 'May 2023',
      description: 'Adventure trek in the Himalayas with college friends.',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      memories: 'Challenging treks, breathtaking views, and campfire stories at 3am'
    },
    {
      name: 'Goa Beach Vibes',
      location: 'North Goa, Goa',
      date: 'December 2023',
      description: 'Beach volleyball, sunset walks, and Portuguese architecture.',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop',
      memories: 'Perfect blend of relaxation and exploration with the debate society crew'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Academic': 'bg-blue-500/10 text-blue-600 border-blue-400/20',
      'Research': 'bg-green-500/10 text-green-600 border-green-400/20',
      'Travel': 'bg-purple-500/10 text-purple-600 border-purple-400/20',
      'Adventure': 'bg-orange-500/10 text-orange-600 border-orange-400/20',
      'Work': 'bg-cyan-500/10 text-cyan-600 border-cyan-400/20',
    };
    return colors[category] || 'bg-muted text-muted-foreground border-muted';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
      case 'Research':
      case 'Work':
        return <Camera className="w-4 h-4" />;
      case 'Travel':
        return <Plane className="w-4 h-4" />;
      case 'Adventure':
        return <MapPin className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <section className="terminal-card">
          <h1 className="text-3xl font-bold gradient-text mb-4">Places</h1>
          <p className="text-muted-foreground">
            A mix of research visits, conferences, and travel adventures across India. 
            Some of my best ideas came while exploring new places (and some came while waiting for delayed trains).
          </p>
        </section>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-4 gap-4">
        {[
          { value: '8+', label: 'Cities Visited' },
          { value: '4', label: 'Research Institutes' },
          { value: '6', label: 'States Explored' },
          { value: '\u221E', label: 'Memories Made' },
        ].map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="terminal-card text-center">
              <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <StaggerItem key={index}>
            <div className="terminal-card card-hover">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src={place.image} alt={place.name} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs border ${getCategoryColor(place.category)}`}>
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(place.category)}
                    <span>{place.category}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold mb-1">{place.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /><span>{place.location}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /><span>{place.date}</span></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{place.description}</p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-accent italic">"{place.memories}"</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <section className="terminal-card">
          <h2 className="text-2xl font-bold mb-4 glow-text">Coming Up</h2>
          <p className="text-muted-foreground mb-4">
            Always planning the next trip. Some are for research, some are just because.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="text-sm bg-muted px-3 py-1 rounded-md">IIT Gandhinagar (ACM India Summer School, June 2025)</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-md">IIT Delhi (Privacy Workshop, July 2025)</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-md">Northeast India Exploration</span>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Places;
