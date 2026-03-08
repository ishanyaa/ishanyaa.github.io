import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="terminal-card border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Built with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> and way too much <Coffee className="inline w-4 h-4 text-accent mx-1" />
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {currentYear} Ishanya. Powered by caffeinated debugging sessions.
            </p>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/ishanyaa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ishanya/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:ishanya.inbox@gmail.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email Contact">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            No AI was harmed in the making of this website (except maybe my sanity)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
