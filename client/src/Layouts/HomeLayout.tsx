import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context/useAuth";
const HomeLayout = () => {
  return (
    <UserProvider>
      <main className="min-h-screen flex flex-col">
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </UserProvider>
  );
};

export default HomeLayout;
