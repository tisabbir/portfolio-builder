import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-[113px] flex justify-between items-center sticky z-[100] bg-[#1A0B2E] px-[100px] py-0 top-0 max-md:px-[50px] max-md:py-0 max-sm:px-5 max-sm:py-0">
      <Link to="/" className="text-2xl text-white">
        Z
      </Link>
      <nav className="flex gap-10 max-sm:hidden">
        <Link
          to="/"
          className="text-xl font-semibold tracking-[0.02em] text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-xl font-semibold tracking-[0.02em] text-white"
        >
          About
        </Link>
        <Link
          to="/lab"
          className="text-xl font-semibold tracking-[0.02em] text-white"
        >
          Lab
        </Link>
      </nav>
    </header>
  );
};
