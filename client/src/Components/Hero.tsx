import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.svg";

const Hero: React.FC = (): JSX.Element => {
  return (
    <main className="flex-grow ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="m-8">
            <h1 className="text-5xl font-bold">
              Master Your Money with FinSavvy
            </h1>
            <p className="py-6 max-w-full lg:max-w-lg ">
              Discover the ease of smart financial management with FinSavvy. Our
              app brings you a seamless experience in tracking stocks and making
              informed investment decisions. FinSavvy simplifies your financial
              journey with its intuitive interface and personalized tools. Begin
              your path to financial mastery today!
            </p>
            <button className="btn text-rose-50 bg-rose-500 hover:bg-rose-50 hover:text-rose-500 transition duration-500">
              <Link to="dashboard">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
