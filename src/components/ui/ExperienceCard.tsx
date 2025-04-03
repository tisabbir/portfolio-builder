interface ExperienceCardProps {
  icon: string;
  title: string;
}

export const ExperienceCard = ({ icon, title }: ExperienceCardProps) => {
  return (
    <div className="flex items-center gap-5 bg-[#2B0B3A] p-[30px] rounded-[10px] max-sm:flex-col max-sm:text-center">
      <div className="text-2xl">
        <i className={`ti ti-${icon}`} />
      </div>
      <div>{title}</div>
    </div>
  );
};
