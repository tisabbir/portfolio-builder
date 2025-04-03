
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Create a Professional Portfolio in <span className="text-[#7127BA]">Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-8">
              Showcase your skills, projects, and experience with a beautiful, customizable portfolio website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create">
                <Button size="lg" className="bg-[#7127BA] hover:bg-[#8138d1] text-white font-semibold px-8">
                  Create Your Portfolio
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="text-[#7127BA] hover:bg-[#fffffff5] hover:text-[#7127BA] bg-white">
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative p-4 md:p-8 bg-[#1A0B2E] rounded-xl border border-gray-800 shadow-lg mx-auto max-w-4xl">
            <img 
              src="/portfolio-example.png" 
              alt="Portfolio Preview" 
              className="rounded-lg w-full h-auto shadow-xl"
              onError={(e) => {
                // Fallback if the custom image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1200x600/2b0b3a/FFFFFF?text=Professional+Portfolio+Example";
              }}
            />
            <div className="absolute -top-3 -left-3 bg-[#7127BA] text-white px-3 py-1 rounded-md text-sm font-medium">
              Portfolio Example
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[#1A0B2E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Create Your Portfolio with Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#2B0B3A] rounded-xl">
              <div className="text-[#7127BA] text-3xl mb-4">
                <i className="ti ti-rocket" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Setup</h3>
              <p className="opacity-80">
                Create your professional portfolio in minutes, not hours. Our simple form makes it easy to get started.
              </p>
            </div>
            
            <div className="p-6 bg-[#2B0B3A] rounded-xl">
              <div className="text-[#7127BA] text-3xl mb-4">
                <i className="ti ti-device-laptop" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
              <p className="opacity-80">
                Your portfolio will look great on all devices, from desktop to mobile, ensuring a professional appearance.
              </p>
            </div>
            
            <div className="p-6 bg-[#2B0B3A] rounded-xl">
              <div className="text-[#7127BA] text-3xl mb-4">
                <i className="ti ti-brush" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customizable</h3>
              <p className="opacity-80">
                Choose from multiple themes and customize the content to make your portfolio truly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Work?</h2>
          <p className="text-xl opacity-80 mb-8">
            Join thousands of professionals who use our platform to create stunning portfolios and advance their careers.
          </p>
          <Link to="/create">
            <Button size="lg" className="bg-[#7127BA] hover:bg-[#8138d1] text-white font-semibold px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
