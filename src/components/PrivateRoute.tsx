import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can customize this loader or return null
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // If not authenticated, redirect to login page
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
