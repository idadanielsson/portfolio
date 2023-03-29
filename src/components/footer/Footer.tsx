import "../footer/Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">Reach out!</p>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/idadanielssons/"
          target="_blank"
          className="social__icon"
        >
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a
          href="https://github.com/idadanielsson"
          target="_blank"
          className="social__icon"
        >
          <AiFillGithub></AiFillGithub>
        </a>
        <Link to="/contact" className="social__icon">
          <MdEmail></MdEmail>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
