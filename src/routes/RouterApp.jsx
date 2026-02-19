import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AddCodePage from "../pages/AddCodePage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomeBefore from "../pages/HomeBefore";
import HomeAfter from "../pages/HomeAfter";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";

export default function RouterApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeBefore />} />
                <Route path="home-login" element={<HomeAfter />} />

                {/* Auth Pages */}
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="add-code" element={<AddCodePage />} />
                <Route path="reset-password" element={<ResetPasswordPage />} />
                <Route path="forget-password" element={<ForgetPasswordPage />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </>
    )
}