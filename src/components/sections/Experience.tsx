export const Experience = ({ experiences = [], education = [] }: any) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#1A0B2E] rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp: any, i: number) => (
          <div key={i} className="relative pl-8 border-l-4 border-[#7127BA]/50">
            <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#7127BA] rounded-full shadow-lg"></div>
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company} • {exp.period}</p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      {education.length > 0 && (
        <>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu: any, i: number) => (
              <div key={i} className="pl-4 border-l-4 border-[#7127BA]/50">
                <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.institution} • {edu.period}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
