import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/"); // or wherever you want
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#11071F] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1A0B2E] p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">Login to Your Account</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-[#2B1740] text-white placeholder-gray-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-[#2B1740] text-white placeholder-gray-400"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

<Button type="submit" size="lg" className="bg-[#7127BA] hover:bg-[#8138d1] text-white font-semibold px-8 w-full">
                    Log In
                </Button>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full border border-white text-white py-3 rounded font-medium hover:bg-[--accent-color]/10 transition flex items-center gap-6 justify-center"
                >
                    Continue with Google
                    <FaGoogle className="text-2xl" />
                </button>

                <p className="text-white text-center">Don't have an account? <Link to={'/signup'} className="text-[#7127BA]">Sign Up</Link> </p>
      </form>
    </div>
  );
};

export default Login;
