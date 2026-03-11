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
import ProductDetails from "../pages/ProductDetails";
import MyCart from "../pages/MyCart";
import WishlistPage from "../pages/WishlistPage";
import CheckOut from "../pages/CheckOut";

export default function RouterApp() {
  const token = useAuthStore((state) => state.token);

  return (
    <Routes>
      <Route path="/" element={token ? <HomeAfter /> : <HomeBefore />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/add-code" element={<AddCodePage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            {" "}
            <AboutUs />{" "}
          </ProtectedRoute>
        }
      />
      <Route
        path="/books"
        element={
          <ProtectedRoute>
            {" "}
            <BookPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
