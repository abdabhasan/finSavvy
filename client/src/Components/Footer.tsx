import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer px-10 justify-between p-6 bg-neutral text-neutral-content">
      <aside>
        <h6 className="footer-title">
          &copy; {currentYear} FinSavvy. All rights reserved.
        </h6>
      </aside>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
