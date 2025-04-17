import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A0B2E]/90 backdrop-blur-md border-b border-[#7127BA]/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        <Link to="/" className="text-2xl font-bold text-[--accent-color] tracking-wide">
          Z
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white hover:text-[--accent-color] transition text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-[--accent-color] transition text-sm md:text-base"
          >
            About
          </Link>
          <Link
            to="/lab"
            className="text-white hover:text-[--accent-color] transition text-sm md:text-base"
          >
            Lab
          </Link>

          {/* Authenticated User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-2 outline-none">
                <Avatar>
                  <AvatarImage src={user.photoURL || ""} />
                  <AvatarFallback>
                    {user.displayName?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A0B2E] border border-[#7127BA]/30 text-white w-40">
                <DropdownMenuItem asChild>
                  <Link to="/profile">👤 Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">📁 Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  🚪 Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="ghost" className="text-white text-sm hover:text-[--accent-color]">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[--accent-color] text-white text-sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
