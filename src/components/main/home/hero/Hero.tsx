import "./Hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="imgcontainer"></div>
        <motion.div className="content1">
          <h2 className="content1__title">
            <span id="hello">Hello, I'm Ida</span> Danielsson!
          </h2>
          <p className="content1__description">
            I'm a webdeveloper student specializing in e-commerce.
          </p>
          <a href="/" className="content1__btn">
            About me
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
