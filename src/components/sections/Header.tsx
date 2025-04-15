import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lab", path: "/lab" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1A0B2E]/80 border-b border-[#7127BA]/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-[--accent-color] tracking-widest hover:opacity-90 transition"
        >
          Z
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-all ${
                pathname === item.path
                  ? "text-[--accent-color] underline underline-offset-4"
                  : "text-white hover:text-[--accent-color]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile nav placeholder (optional dropdown later) */}
        <div className="sm:hidden">
          {/* Add mobile menu button here in future */}
        </div>
      </div>
    </header>
  );
};
