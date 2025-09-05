import { MapPin, Calendar, Camera, Plane } from 'lucide-react';
const Places = () => {
  const places = [{
    name: 'Tata Institute of Fundamental Research (TIFR)',
    location: 'Mumbai, Maharashtra',
    date: 'July 2024',
    description: 'STCS Vigyan Vidushi 2024 - Advanced theoretical computer science program',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=300&fit=crop',
    memories: 'Intensive learning with 31 other brilliant minds from across India'
  }, {
    name: 'Indian Institute of Science (IISc)',
    location: 'Bengaluru, Karnataka',
    date: 'December 2024',
    description: 'Theory CS Winter School 2024 - Matching Theory and Differential Privacy',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=500&h=300&fit=crop',
    memories: 'Amazing discussions on theoretical foundations with world-class researchers'
  }, {
    name: 'Indian Institute of Science (IISc)',
    location: 'Bengaluru, Karnataka',
    date: 'July 2023',
    description: 'Summer School - Signal Processing, ML, AI, and Power Systems',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop',
    memories: 'First exposure to cutting-edge research in multiple domains'
  }, {
    name: 'IIT Delhi',
    location: 'New Delhi, India',
    date: 'June - September 2024',
    description: 'ACM Research Internship - Accessibility tools for visually impaired coders',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
    memories: 'Eye-opening experience working on meaningful accessibility technology'
  }, {
    name: 'Rajasthan Adventures',
    location: 'Jaipur & Udaipur, Rajasthan',
    date: 'March 2023',
    description: 'Exploring the Pink City and City of Lakes during college break',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1599661046827-dacde84ccd6c?w=500&h=300&fit=crop',
    memories: 'Incredible architecture, street food, and sunset views over Lake Pichola'
  }, {
    name: 'Kerala Backwaters',
    location: 'Alleppey, Kerala',
    date: 'January 2024',
    description: 'Houseboat experience in God\'s Own Country',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1602216056504-b9d34113a2cd?w=500&h=300&fit=crop',
    memories: 'Peaceful mornings, coconut water, and the most serene boat rides'
  }, {
    name: 'Himachal Pradesh Trek',
    location: 'Manali, Himachal Pradesh',
    date: 'May 2023',
    description: 'Adventure trek in the Himalayas with college friends',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    memories: 'Challenging treks, breathtaking views, and campfire stories'
  }, {
    name: 'Goa Beach Vibes',
    location: 'North Goa, Goa',
    date: 'December 2023',
    description: 'Beach volleyball, sunset parties, and Portuguese architecture',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop',
    memories: 'Perfect blend of relaxation and exploration with the debate society crew'
  }];
  const getCategoryColor = (category: string) => {
    const colors = {
      'Academic': 'bg-blue-500/10 text-blue-400 border-blue-400/20',
      'Research': 'bg-green-500/10 text-green-400 border-green-400/20',
      'Travel': 'bg-purple-500/10 text-purple-400 border-purple-400/20',
      'Adventure': 'bg-orange-500/10 text-orange-400 border-orange-400/20'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground border-muted';
  };
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
      case 'Research':
        return <Camera className="w-4 h-4" />;
      case 'Travel':
        return <Plane className="w-4 h-4" />;
      case 'Adventure':
        return <MapPin className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };
  return <div className="space-y-8">
      {/* Header */}
      <section className="terminal-card">
        <h1 className="text-3xl font-bold gradient-text mb-4">Places</h1>
        <p className="text-muted-foreground">
          A visual journey through academic adventures, research conferences, and travel experiences 
          across India. From prestigious research institutes to breathtaking landscapes.
        </p>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-4">
        <div className="terminal-card text-center">
          <div className="text-2xl font-bold text-accent mb-1">8+</div>
          <div className="text-sm text-muted-foreground">Cities Visited</div>
        </div>
        <div className="terminal-card text-center">
          <div className="text-2xl font-bold text-accent mb-1">4</div>
          <div className="text-sm text-muted-foreground">Research Institutes</div>
        </div>
        <div className="terminal-card text-center">
          <div className="text-2xl font-bold text-accent mb-1">6</div>
          <div className="text-sm text-muted-foreground">States Explored</div>
        </div>
        <div className="terminal-card text-center">
          <div className="text-2xl font-bold text-accent mb-1">∞</div>
          <div className="text-sm text-muted-foreground">Memories Made</div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => <div key={index} className="terminal-card card-hover">
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
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{place.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{place.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{place.description}</p>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-accent italic">"{place.memories}"</p>
              </div>
            </div>
          </div>)}
      </section>

      {/* Travel Philosophy */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-6 glow-text">Travel Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Academic Wanderlust</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every research institute I visit teaches me something new - not just about computer science, 
              but about different approaches to learning, collaboration, and innovation. From TIFR's 
              theoretical rigor to IISc's multidisciplinary excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-accent">Beyond the Lab</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Travel recharges my curiosity and creativity. Whether it's debugging code by a Kerala backwater 
              or discussing algorithms during a Himalayan trek, some of my best ideas come when I'm exploring 
              new places and meeting new people.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Plans */}
      <section className="terminal-card">
        <h2 className="text-2xl font-bold mb-4 glow-text">Next Adventures</h2>
        <p className="text-muted-foreground mb-4">
          Currently planning my next research visits and travel adventures. Stay tuned!
        </p>
        <div className="flex flex-wrap gap-3">
          
          <span className="text-sm bg-muted px-3 py-1 rounded-md">Northeast India Exploration</span>
          <span className="text-sm bg-muted px-3 py-1 rounded-md">Silicon Valley Research Visit</span>
        </div>
      </section>
    </div>;
};
export default Places;