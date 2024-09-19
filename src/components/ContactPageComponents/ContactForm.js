import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <form
        name="Contact Form"
        method="POST"
        // action={`${url}${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contactForm"
        className="w-4/5 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5 bg-white p-5 rounded-lg"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <ContactInfo name={name} setName={setName} lastName={lastName} setLastName={setLastName}/>
        <button
          type="submit"
          className="px-10 py-2 my-3 bg-primary-color text-white text-lg font-bold uppercase rounded hover:opacity-70 focus:outline-none focus:bg-gray-700"
          onClick={() => {}}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
