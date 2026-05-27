import { createContext, useState, useEffect } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const response = await axiosPublic.post("/login", {
        email,
        password,
      });
      const data = response.data;
      if (data.token) {
        const userData = { ...data.user, accessToken: data.token };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true };
      }
      return { success: false, message: "Login failed" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.response?.data?.message || "An error occurred" };
    } finally {
      setLoading(false);
    }
  };

  const logOutUser = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    loading,
    loginUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
