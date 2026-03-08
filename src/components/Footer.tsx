import { Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [visitorInfo, setVisitorInfo] = useState<{ count: number; country: string } | null>(null);

  useEffect(() => {
    const visits = parseInt(localStorage.getItem('visitor_count') || '0', 10) + 1;
    localStorage.setItem('visitor_count', visits.toString());

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setVisitorInfo({ count: visits, country: data.country_name || 'Unknown' });
      })
      .catch(() => {
        setVisitorInfo({ count: visits, country: 'Earth' });
      });
  }, []);

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Ishanya
            </p>
            {visitorInfo && (
              <p className="text-xs text-muted-foreground mt-1">
                Visitor #{visitorInfo.count} from {visitorInfo.country}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
