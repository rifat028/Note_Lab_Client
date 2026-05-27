import { use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/join-us" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
