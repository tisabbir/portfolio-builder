export const Contact = ({ email, phone, socialLinks }: any) => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="bg-[#1A0B2E] rounded-xl p-8 shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-4">Feel free to reach out via email or connect on social media.</p>

        <div className="text-white mb-6 space-y-1">
          {email && <p><strong>Email:</strong> <a href={`mailto:${email}`} className="text-[#7127BA] hover:underline">{email}</a></p>}
          {phone && <p><strong>Phone:</strong> {phone}</p>}
        </div>

        <div className="flex justify-center gap-6 mt-4 text-xl text-[#7127BA]">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-github" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-linkedin" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <i className="fab fa-twitter" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
