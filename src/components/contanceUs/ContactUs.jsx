import React, { useRef, useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation for required fields
    const name = form.current.name.value.trim();
    const email = form.current.from_name.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_8gw0m9p",
        "template_o8i32z2",
        form.current,
        "U_V12obpuXx0Qo0xY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setError(""); // Clear any previous error
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setError("An error occurred while sending the email.");
          toast.error("Error sending email. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="h1">Contact Us</h1>
      <form className="form-flex" ref={form} onSubmit={sendEmail}>
        <div className="input-flex">
          <div className="input-parent">
            <label className="input-label">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="inpt-cls"
              name="name"
              required
            />
          </div>
          <div className="input-parent">
            <label className="input-label">Company</label>
            <input
              type="text"
              className="inpt-cls"
              placeholder="Company Name"
              name="company_name"
            />
          </div>
        </div>
        <div className="input-flex">
          <div className="input-parent">
            <label className="input-label">Email</label>
            <input
              type="email" // Use type="email" for email validation
              className="inpt-cls"
              placeholder="Your Email"
              name="from_name"
              required
            />
          </div>
          <div className="input-parent">
            <label className="input-label">Phone</label>
            <input
              type="text"
              className="inpt-cls"
              placeholder="Your Phone"
              name="phone"
            />
          </div>
        </div>
        <textarea
          className="text-cls"
          placeholder="Message"
          name="message"
          required
        ></textarea>
        {error && <p className="error-msg">{error}</p>}
        <button className="form-btn" type="submit" value="Send">
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
