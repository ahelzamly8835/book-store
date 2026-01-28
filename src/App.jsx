import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/RouterApp";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./pages/SignupPage";

export default function App() {
    return (
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    );
  }