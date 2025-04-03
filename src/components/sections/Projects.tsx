
import { ProjectCard } from "../ui/ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

export const Projects = ({
  projects = [
    {
      title: "Example Project",
      description: "A web app for visualizing personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "https://example.com",
      github: "https://github.com/example/project"
    },
    {
      title: "Example Project",
      description: "A web app for visualizing personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "https://example.com",
      github: "https://github.com/example/project"
    }
  ]
}: ProjectsProps) => {
  return (
    <section className="p-[100px] max-sm:px-5 max-sm:py-[50px]">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
          github={project.github}
        />
      ))}
    </section>
  );
};
