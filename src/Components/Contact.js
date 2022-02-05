import React from "react";
import "../Styles/Contact.scss";

const Contact = () => {
  // const handleOnSubmit = () => {};
  return (
    <div className="contact" id="my-contact">
      <h1 className="contact-title">Contact</h1>
      <form>
        <input className="name" type="text" required placeholder="Name..." />
        <input className="eMail" type="email" required placeholder="Email..." />
        <textarea className="message" placeholder="Your Message..." />
        <button className="submit">Send</button>
      </form>
      <div className="footer">
        <h4>Live. Laugh. Love.</h4>
      </div>
    </div>
  );
};

export default Contact;
