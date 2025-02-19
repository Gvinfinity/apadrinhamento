import { AppRoutes } from "./routes";
import "@fontsource/roboto";
import { AuthContextProvider } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <AuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        stacked
      />
      <AppRoutes />
    </AuthContextProvider>
  );
}
