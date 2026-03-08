import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'CV', path: '/cv' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Places', path: '/places' },
    { name: 'Resources', path: '/resources' },
    { name: 'Misc', path: '/misc' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="font-semibold text-foreground hover:text-primary transition-colors">
            ishanya
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm ${isActive(item.path) ? 'nav-link-active' : 'nav-link'}`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm py-2 ${isActive(item.path) ? 'nav-link-active' : 'nav-link'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
