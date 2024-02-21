import { Link } from "react-router-dom";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { navbarLinks } from "../helpers/constants";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar  bg-neutral ">
      <div className="navbar-start mx-10">
        <Sidebar />
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-rose-50">
          {navbarLinks.map((link) => {
            return (
              <li key={link.id} className="capitalize">
                <Link to={link.url}>{link.url}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end mr-10">
        <Link
          to="login"
          className="btn  text-rose-50 hover:bg-rose-500 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
