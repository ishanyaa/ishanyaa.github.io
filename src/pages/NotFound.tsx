import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center section-card max-w-md">
        <div className="text-6xl font-mono text-accent mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4 text-foreground">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Looks like this page got lost in the federated network.
          Let's get you back to familiar territory.
        </p>
        <div className="space-y-3">
          <Link to="/" className="btn-primary block">
            Return Home
          </Link>
          <Link to="/about" className="link-accent text-sm">
            Learn about Ishanya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
