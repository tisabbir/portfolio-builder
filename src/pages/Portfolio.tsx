import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [portfolio, setPortfolio] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/portfolio/${id}`);
        setPortfolio(res.data);
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

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600&family=Preahvihear&display=swap";
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

  const getThemeColor = () => {
    switch (portfolio.theme) {
      case "blue": return "#3b82f6";    // Tailwind blue-500
      case "green": return "#10b981";   // Tailwind green-500
      case "dark": return "#374151";    // Tailwind gray-700
      case "red": return "#ef4444";     // Tailwind red-500
      default: return "#7127BA";        // Purple
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
            website: portfolio.website,
          }}
        />
        <About
          title={portfolio.title}
          company={portfolio.company}
          about={portfolio.about}
          location={portfolio.location}
        />
        <Experience
          experiences={portfolio.experience}
          education={portfolio.education}
        />
        <Skills
          skills={
            portfolio.skills
              ? portfolio.skills.split(",").map((skill: string) => skill.trim())
              : []
          }
        />
        <Projects projects={portfolio.projects} />
        <Contact
          email={portfolio.email}
          phone={portfolio.phone}
          socialLinks={{
            github: portfolio.github,
            linkedin: portfolio.linkedin,
            twitter: portfolio.twitter,
          }}
        />
      </main>
    </div>
  );
};

export default Portfolio;
