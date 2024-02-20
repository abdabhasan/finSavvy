import { Link } from "react-router-dom";

const Logo: React.FC = (): JSX.Element => {
  return (
    <>
      <Link
        to="/"
        className="btn btn-ghost text-xl text-rose-50 hover:bg-rose-500 transition duration-300 "
      >
        FinSavvy
      </Link>
    </>
  );
};
export default Logo;
