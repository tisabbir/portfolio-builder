export const About = ({ title, company, about, location }: any) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#1A0B2E] rounded-xl shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6">{about}</p>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400 border-t border-[#7127BA]/30 pt-4">
        <div>
          <span className="text-white font-medium">Role:</span> {title} at {company}
        </div>
        <div>
          <span className="text-white font-medium">Location:</span> {location}
        </div>
      </div>
    </section>
  );
};
