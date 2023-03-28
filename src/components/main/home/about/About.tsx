import { Link } from "react-router-dom";
import "./About.scss";

export const About = () => {
  return (
    <>
      <div className="content">
        <div className="about">
          <div className="headingcontainer" id="headingcontainer">
            <div className="vl"></div>
            <h4 className="headingcontainer__heading">About me</h4>
          </div>

          <p className="about__description">
            My name is Ida Danielsson, and I’m a first-year web development
            student at Medieinstitutet in Stockholm. During my first year, I
            established solid knowledge in both frontend development as well as
            backend development. The program includes languages such as
            JavaScript, typescript, react, SQL, PHP, and various frameworks. For
            the past years, I have mastered a bachelor’s degree in media and
            communications, followed by almost two years working at one of
            Sweden’s fastest-growing e-commerce.
          </p>
          <Link to="/resume" className="about__btn">
            My Resume
          </Link>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
