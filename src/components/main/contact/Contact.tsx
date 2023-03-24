import { FormEvent } from "react";
import { Link } from "react-router-dom";
import "../contact/Contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <h4 className="contact__title">Reach out!</h4>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();

          alert("Tack för ditt meddelande!");
        }}
        className="contact__form"
      >
        <div className="inputcontainer">
          <input
            placeholder="Name"
            className="inputcontainer__input"
            type="text"
          />

          <input
            placeholder="Email"
            className="inputcontainer__input"
            type="text"
          />
        </div>

        <input className="contact__message" type="text" />
        <button className="contact__btn">Send</button>
        <Link to="/"></Link>
      </form>
    </div>
  );
};

export default Contact;
