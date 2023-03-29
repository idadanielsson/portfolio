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
            My name is Ida Danielsson! I’m an ambitious and creative web
            developer student specializing in e-commerce, currently living in
            Uppsala. During my two year at Medieinstitutet in Stockholm, I will
            establish solid knowledge in both frontend and backend development
            with skills in HTML, CSS/SCSS, JavaScript, TypeScript, React, SQL,
            PHP, and APIs. <br></br>
            <br></br>I have always been passionate about creating in various
            forms and for the past years, I have mastered a bachelor’s degree in
            media and communications, followed by almost two years working at
            one of Sweden’s fastest-growing e-commerce.
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
