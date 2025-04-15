export const Skills = ({ skills = [] }: any) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#1A0B2E] rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="bg-[#7127BA]/20 text-[#7127BA] px-4 py-1 rounded-full text-sm font-medium shadow-sm border border-[#7127BA]/40 hover:bg-[#7127BA]/30 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
