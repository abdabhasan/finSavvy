import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../Components";

const HomeLayout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomeLayout;
