import { Route, Routes, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomeBefore from "../pages/HomeBefore";
import HomeAfter from "../pages/HomeAfter";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import BookPage from "../components/BooksPage/BookPage";

export default function RouterApp() {

  const token = useAuthStore((state) => state.token);

  return (
    <Routes>

      {/* الصفحة الرئيسية ذكية */}
      <Route 
        path="/" 
        element={token ? <HomeAfter /> : <HomeBefore />} 
      />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/add-code" element={<AddCodePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />

      <Route path="/about" element={<ProtectedRoute> <AboutUs /> </ProtectedRoute>} />
      <Route path="/books" element={<ProtectedRoute> <BookPage /></ProtectedRoute> } />


      <Route 
        path="/profile" 
        element={token ? <Profile /> : <Navigate to="/login" />} 
      />

    </Routes>
  );
}