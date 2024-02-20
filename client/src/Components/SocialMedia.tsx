import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a target="_blank" href="https://twitter.com">
          <FaTwitter className="text-2xl hover:text-rose-500 transition-all duration-300" />
        </a>
        <a target="_blank" href="https://www.youtube.com">
          <FaYoutube className="text-2xl hover:text-rose-500 transition-all duration-300" />
        </a>
        <a target="_blank" href="https://www.facebook.com">
          <FaFacebookF className="text-2xl hover:text-rose-500 transition-all duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default SocialMedia;
