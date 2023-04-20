import "./Resume.scss";
import resume from "../../../assets/ida-danielsson-resume.png";
import downloadresume from "../../../assets/ida-danielsson_cv.pdf";

export const Resume = () => {
  return (
    <section className="resume">
      <div className="resumecontainer">
        <img className="resumecontainer__img" src={resume} alt="" />
        <a
          href={downloadresume}
          target="_blank"
          download
          className="resumecontainer__download"
        >
          Download resume
        </a>
      </div>
    </section>
  );
};
