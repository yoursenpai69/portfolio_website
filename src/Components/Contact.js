import React, { useState } from "react";
import "../Styles/Contact.scss";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const userId = "user_n6EwJx1Acgp6yMBG5ouCS";
const serviceId = "service_nkv2fom";
const templateId = "template_gk1ok1k";
const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    from_message: "",
  });

  const scrollToTop = () => {
    document
      .getElementById("start-page")
      .scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact" id="my-contact">
      <h1 className="contact-title">Contact</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          className="name"
          name="from_name"
          type="text"
          required
          placeholder="Name..."
          onChange={handleChange}
        />
        <input
          className="eMail"
          name="from_email"
          type="email"
          required
          placeholder="Email..."
          onChange={handleChange}
        />
        <textarea
          className="message"
          name="from_message"
          placeholder="Your Message..."
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Send
        </button>
      </form>
      <div className="footer">
        <Icon
          className="to-top"
          onClick={scrollToTop}
          icon="akar-icons:circle-chevron-up-fill"
          width="60"
          height="60"
        />

        <h2>Live. Laugh. Love.</h2>
        <h3>Designed and built by Vijaya raghavan</h3>
      </div>
    </div>
  );
};

export default Contact;
