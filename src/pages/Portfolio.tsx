
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { useToast } from "@/hooks/use-toast";

// This would come from an API in a real app
const mockPortfolioData = {
  id: "abc123",
  name: "Ibrahim Memon",
  title: "UI/UX Designer",
  company: "Design Studio",
  about: "A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.",
  email: "ibrahimmemon232@gmail.com",
  location: "New York, NY",
  phone: "+1 234 567 8900",
  imageUrl: "https://placehold.co/200x200/4a3b63/FFFFFF?text=Profile+Photo",
  skills: "figma, react, css, html, javascript, git",
  github: "https://github.com/ibrahimmemon",
  linkedin: "https://linkedin.com/in/ibrahimmemon",
  twitter: "https://twitter.com/ibrahimmemon",
  website: "https://ibrahimmemon.com",
  projectsData: [
    {
      title: "Project One",
      description: "A web app for visualizing personalized data. Create and save new playlists of recommended tracks based on your existing preferences.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "https://project1.com",
      github: "https://github.com/ibrahimmemon/project1"
    },
    {
      title: "Project Two",
      description: "A responsive web application built with React and TypeScript. Features include user authentication, data visualization, and API integration.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "https://project2.com",
      github: "https://github.com/ibrahimmemon/project2"
    }
  ],
  experienceData: [
    { 
      icon: "briefcase", 
      title: "UI/UX Designer", 
      company: "Design Studio",
      period: "2020 - Present",
      description: "Creating user interfaces and experiences for web and mobile applications."
    },
    { 
      icon: "code", 
      title: "Front-end Developer", 
      company: "Tech Company",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications using modern technologies."
    }
  ],
  educationData: [
    {
      institution: "University of Design",
      degree: "Bachelor of Arts in Interactive Design",
      period: "2014 - 2018"
    }
  ],
  theme: "purple",
  createdAt: "2023-08-12T12:00:00Z"
};

const Portfolio = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the portfolio data from an API
    const fetchPortfolio = async () => {
      try {
        // Simulate API fetch
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, we'll use mock data
        setPortfolio(mockPortfolioData);
      } catch (error) {
        toast({
          title: "Error loading portfolio",
          description: "Could not load the portfolio. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id, toast]);

  // Add Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600&family=Preahvihear&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#11071F] text-white">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-t-2 border-[#7127BA] border-solid rounded-full mx-auto mb-4"></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#11071F] text-white">
        <div className="text-center p-8">
          <h2 className="text-2xl mb-4">Portfolio Not Found</h2>
          <p>The portfolio you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Determine accent color based on theme
  const getThemeColor = () => {
    switch (portfolio.theme) {
      case "blue": return "#3b82f6";
      case "green": return "#10b981";
      case "dark": return "#374151";
      default: return "#7127BA"; // Purple is default
    }
  };

  const accentColor = getThemeColor();

  return (
    <div 
      className="max-w-none text-[white] min-h-screen w-full bg-[#11071F] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm"
      style={{ "--accent-color": accentColor } as React.CSSProperties}
    >
      <Header />
      <main>
        <Hero 
          name={portfolio.name} 
          title={portfolio.title} 
          accentColor={accentColor}
          imageUrl={portfolio.imageUrl}
          socialLinks={{
            github: portfolio.github,
            linkedin: portfolio.linkedin,
            twitter: portfolio.twitter,
            website: portfolio.website
          }}
        />
        <About 
          title={portfolio.title}
          company={portfolio.company}
          about={portfolio.about}
          location={portfolio.location}
        />
        <Experience 
          experiences={portfolio.experienceData} 
          education={portfolio.educationData}
        />
        <Skills skills={portfolio.skills ? portfolio.skills.split(',').map(skill => skill.trim()) : []} />
        <Projects projects={portfolio.projectsData} />
        <Contact 
          email={portfolio.email} 
          phone={portfolio.phone}
          socialLinks={{
            github: portfolio.github,
            linkedin: portfolio.linkedin,
            twitter: portfolio.twitter
          }}
        />
      </main>
    </div>
  );
};

export default Portfolio;
