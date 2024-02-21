import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeLayout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
