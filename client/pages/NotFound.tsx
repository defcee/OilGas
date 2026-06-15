import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const isPlaceholder = ["/sites", "/reports", "/map"].includes(location.pathname);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-blue-50/30 to-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
          <p className="text-xl font-semibold text-foreground mb-2">
            {isPlaceholder ? "Page Coming Soon" : "Page Not Found"}
          </p>
          <p className="text-muted-foreground mb-6">
            {isPlaceholder
              ? "This feature is being built out. Continue prompting to implement this page."
              : "The page you're looking for doesn't exist or may have been moved."}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Back to Home
            </Button>
          </Link>
          {isPlaceholder && (
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 text-sm">
              <p className="text-foreground font-medium">💡 To build this page:</p>
              <p className="text-muted-foreground mt-1">
                Ask the assistant to implement the full feature for this route.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
