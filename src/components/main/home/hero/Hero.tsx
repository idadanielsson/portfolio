import "./Hero.scss";
import { motion } from "framer-motion";

const Header = () => {
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
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.5 }}
            whileInView={{ opacity: 1 }}
            className="content1__btn"
          >
            About me
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
