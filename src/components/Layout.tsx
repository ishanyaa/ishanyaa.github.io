import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './MotionWrapper';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
