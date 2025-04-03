
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  github?: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <article className="mb-[100px]">
      <h3 className="text-2xl mb-5">{title}</h3>
      <p className="text-base leading-normal mb-5">{description}</p>
      <div className="flex gap-4 mb-5">
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#7127BA] hover:underline"
          >
            <i className="ti ti-external-link" />
            <span>View Live</span>
          </a>
        )}
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#7127BA] hover:underline"
          >
            <i className="ti ti-brand-github" />
            <span>View Code</span>
          </a>
        )}
      </div>
      <div className="w-full overflow-hidden rounded-[10px]">
        <img
          src={imageUrl}
          alt={`${title} Screenshot`}
          className="w-full h-auto"
        />
      </div>
    </article>
  );
};
