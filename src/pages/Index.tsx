import { useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600&family=Preahvihear&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="max-w-none text-[white] min-h-screen w-full bg-[#11071F] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <div className="text-5xl p-[100px]">Z</div>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
