
interface AboutProps {
  title?: string;
  company?: string;
  about?: string;
}

export const About = ({ 
  title = "Software Engineer", 
  company = "Company", 
  about = "A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals."
}: AboutProps) => {
  // Split the about text into lines for better presentation
  const aboutLines = about.split('. ');
  
  return (
    <section className="mt-[50px] px-[100px] py-0 max-sm:px-5 max-sm:py-[50px]">
      <h2 className="text-[50px] tracking-[0.02em] mb-5">
        I'm a {title}.|
      </h2>
      <div className="text-2xl mb-5">
        <span>Currently, I'm a {title} at </span>
        <span>{company}</span>
      </div>
      <div className="text-[22px] leading-normal max-sm:text-lg">
        {aboutLines.map((line, index) => (
          <span key={index}>
            {line}{index < aboutLines.length - 1 ? '. ' : ''}
            {index < aboutLines.length - 1 && <br />}
          </span>
        ))}
      </div>
    </section>
  );
};
