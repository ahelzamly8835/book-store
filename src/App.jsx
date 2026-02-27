import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/RouterApp";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
     <Toaster
  position="top-center"
  toastOptions={{
    success: {
      style: {
        background: "#22c55e",
        color: "#fff",
      },
    },
    error: {
      style: {
        background: "#ef4444",
        color: "#fff",
      },
    },
  }}
/>
      <RouterApp />
    </BrowserRouter>
  );
}