import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'About',
    path: '/about'
  }, {
    name: 'CV',
    path: '/cv'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Places',
    path: '/places'
  }, {
    name: 'Resources',
    path: '/resources'
  }, {
    name: 'Misc',
    path: '/misc'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 terminal-card border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-accent hover:text-primary transition-colors">
            <Terminal className="w-6 h-6" />
            <span className="font-bold text-lg glow-text">ishanya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`nav-link ${isActive(item.path) ? 'text-accent' : ''}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-accent transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`nav-link py-2 ${isActive(item.path) ? 'text-accent' : ''}`}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;