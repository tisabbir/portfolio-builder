
import { ExperienceCard } from "../ui/ExperienceCard";

interface Experience {
  icon: string;
  title: string;
}

interface ExperienceProps {
  experiences?: Experience[];
}

export const Experience = ({ 
  experiences = [
    { icon: "star", title: "CIB on the Mobile" },
    { icon: "message-circle", title: "CIB on the Mobile" },
    { icon: "rocket", title: "CIB on the Mobile" },
    { icon: "device-mobile", title: "CIB on the Mobile" }
  ]
}: ExperienceProps) => {
  return (
    <section className="p-[100px] max-sm:px-5 max-sm:py-[50px]">
      <h2 className="text-[40px] tracking-[0.02em] mb-10">Work Experience</h2>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[30px] max-md:grid-cols-[1fr]">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} icon={exp.icon} title={exp.title} />
        ))}
      </div>
    </section>
  );
};
