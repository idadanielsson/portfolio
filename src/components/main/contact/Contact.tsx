import { FormEvent, useRef, useState } from "react";
import "../contact/Contact.scss";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message!");

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_drhdsgb",
        "template_r7gp5cc",
        currentForm,
        "5kkroMGCXEesDAVv2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact">
        <h4 className="contact__title">Reach out!</h4>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            placeholder="Name"
            name="name"
            className="contact__input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            placeholder="Email"
            name="email"
            className="contact__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <textarea
            name="message"
            className="contact__message"
            placeholder="Message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
          <input type="submit" value="Send" className="contact__btn"></input>
        </form>
      </div>
    </>
  );
};
