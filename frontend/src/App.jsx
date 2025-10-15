import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </AuthProvider>
  );
};

export default App;
