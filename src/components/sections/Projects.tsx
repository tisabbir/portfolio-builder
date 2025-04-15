export const Projects = ({ projects = [] }: any) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#1A0B2E] rounded-xl shadow-lg max-w-4xl mx-auto my-10" style={{ color: "var(--accent-color)" }}>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project: any, i: number) => (
          <div key={i} className="bg-[#221033] rounded-lg shadow-md overflow-hidden transition hover:scale-[1.02] hover:shadow-xl">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" className="text-[#7127BA] hover:underline text-sm">
                    Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" className="text-[#7127BA] hover:underline text-sm">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
