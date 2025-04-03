
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock data for gallery
const mockGalleryData = [
  {
    id: "abc123",
    name: "Ibrahim Memon",
    title: "UI/UX Designer",
    imageUrl: "https://placehold.co/200x200/4a3b63/4a3b63",
    theme: "purple",
  },
  {
    id: "def456",
    name: "Sarah Johnson",
    title: "Frontend Developer",
    imageUrl: "https://placehold.co/200x200/3b82f6/3b82f6",
    theme: "blue",
  },
  {
    id: "ghi789",
    name: "Michael Chen",
    title: "Product Designer",
    imageUrl: "https://placehold.co/200x200/10b981/10b981",
    theme: "green",
  },
  {
    id: "jkl012",
    name: "Emily Rodriguez",
    title: "Full Stack Developer",
    imageUrl: "https://placehold.co/200x200/374151/374151",
    theme: "dark",
  },
];

const Gallery = () => {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, you would fetch portfolio data from an API
    const fetchPortfolios = async () => {
      try {
        // Simulate API fetch
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, we'll use mock data
        setPortfolios(mockGalleryData);
      } catch (error) {
        toast({
          title: "Error loading gallery",
          description: "Could not load the portfolio gallery. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, [toast]);

  // Get theme color based on portfolio theme
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case "blue": return "bg-blue-600";
      case "green": return "bg-green-600";
      case "dark": return "bg-gray-800";
      default: return "bg-[#7127BA]"; // Purple is default
    }
  };

  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <div className="p-8 md:p-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Gallery</h1>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Explore portfolios created by our users. Get inspired and create your own professional portfolio.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-8 w-8 border-t-2 border-[#7127BA] border-solid rounded-full"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolios.map((portfolio) => (
                <Card 
                  key={portfolio.id} 
                  className="overflow-hidden border border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all"
                >
                  <div className={`h-2 ${getThemeColor(portfolio.theme)}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={portfolio.imageUrl} 
                          alt={portfolio.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{portfolio.name}</h3>
                        <p className="text-sm opacity-75">{portfolio.title}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to={`/portfolio/${portfolio.id}`}>
                        <Button variant="outline" className="w-full">
                          View Portfolio
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-lg">Ready to showcase your work?</p>
              <Link to="/create">
                <Button>
                  Create Your Portfolio
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
