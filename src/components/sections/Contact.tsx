
interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface ContactProps {
  email?: string;
  phone?: string;
  socialLinks?: SocialLinks;
}

export const Contact = ({ 
  email = "ibrahimmemon232@gmail.com", 
  phone,
  socialLinks = {}
}: ContactProps) => {
  return (
    <section className="text-center p-[100px] max-sm:px-5 max-sm:py-[50px]">
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
      <p className="text-lg leading-normal mb-8 max-w-2xl mx-auto">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design, or have a project in
        mind? Let's connect!
      </p>
      
      <div className="flex flex-col items-center gap-4 mb-8">
        {email && (
          <div className="flex items-center gap-2">
            <i className="ti ti-mail text-xl" />
            <a href={`mailto:${email}`} className="text-base hover:underline">{email}</a>
          </div>
        )}
        
        {phone && (
          <div className="flex items-center gap-2">
            <i className="ti ti-phone text-xl" />
            <a href={`tel:${phone}`} className="text-base hover:underline">{phone}</a>
          </div>
        )}
      </div>
      
      <div className="flex justify-center gap-6 text-2xl">
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#7127BA] transition-colors">
            <i className="ti ti-brand-github" />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#7127BA] transition-colors">
            <i className="ti ti-brand-linkedin" />
          </a>
        )}
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#7127BA] transition-colors">
            <i className="ti ti-brand-twitter" />
          </a>
        )}
      </div>
    </section>
  );
};
