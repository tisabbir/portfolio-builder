import { motion } from "framer-motion";

export const Hero = ({ name, title, imageUrl, accentColor, socialLinks }: any) => {
  return (
    <section className="relative text-white py-16 px-4 md:px-12">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#7127BA]/30 to-[#11071F] blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.img
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[--accent-color] shadow-xl object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-3xl md:text-5xl font-bold mt-6"
          style={{ color: "var(--accent-color)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h2>

        <div className="mt-6 flex gap-4 justify-center">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <i className="fab fa-github text-2xl" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <i className="fab fa-linkedin text-2xl" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <i className="fab fa-twitter text-2xl" />
            </a>
          )}
          {socialLinks.website && (
            <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <i className="fas fa-globe text-2xl" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
