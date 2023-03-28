import "../footer/Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">Hit me up!</p>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/idadanielssons/"
          className="social__icon"
        >
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a href="https://github.com/idadanielsson" className="social__icon">
          <AiFillGithub></AiFillGithub>
        </a>
        <a href="mailto:ida.danielsson96@hotmail.com" className="social__icon">
          <MdEmail></MdEmail>
        </a>
      </div>
    </div>
  );
};

export default Footer;
