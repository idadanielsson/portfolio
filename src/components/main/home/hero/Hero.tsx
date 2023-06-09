import "./Hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="imgcontainer"></div>
        <div className="content1">
          <h2 className="content1__title">
            <span id="hello">Hello, I'm </span> Ida Danielsson!
          </h2>
          <p className="content1__description">
            I'm a webdeveloper student specializing in e-commerce.
          </p>
          <Link to="/contact" className="content1__btn">
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
