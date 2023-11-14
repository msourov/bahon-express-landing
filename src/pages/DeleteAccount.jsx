import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/deleteaccount.css";

const DeleteAccount = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log("Form Data:", data);
    emailjs
      .sendForm(
        "service_kb1sbav",
        "contact_form",
        form.current,
        "NDVMobLASLmcU-ENZ"
      )
      .then(
        ((result, form) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        })
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="tel" name="user_phone" />
      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteAccount;
