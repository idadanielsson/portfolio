import { useState } from "react";
import { Link } from "react-router-dom";
import "../nav/Nav.scss";
import logo from "../../assets/logo-black.png";
import Hamburger from "hamburger-react";

export const Nav = () => {
  const [isOpen, setOpen] = useState(Boolean);
  const onClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div onClick={onClick}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="right"
          duration={0.3}
          distance="lg"
          color="#474747"
          easing="ease-in"
          onToggle={(toggled: any) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          rounded
          label="Show menu"
          hideOutline={false}
        ></Hamburger>
      </div>

      <div className={isOpen ? "navActive" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              onClick={() => {
                setOpen(false);
              }}
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav__link"
              onClick={() => {
                setOpen(false);
              }}
              to="/resume/file:///Users/idadanielsson/Documents/Medieinstitutet/LIA/CV%20Ida%20Danielsson%202.pdf"
            >
              Resume
            </Link>
            <Link
              className="nav__link"
              onClick={() => {
                setOpen(false);
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
