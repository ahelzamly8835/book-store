import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    toast.error("Please login first 🔒");
    return <Navigate to="/login" replace />;
  }

  return children;
}