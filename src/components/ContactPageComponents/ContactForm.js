import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import CheckBoxes from "./CheckBoxes";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "form-name": "Contact Page",
    nombre: "",
    apellido: "",
    cedula: "",
    email: "",
    teléfono: "",
    dirección: "",
    ciudad: "",
    providencia: "",
  });
  console.log(formData);
  return (
    <>
      <form
        name="Contact Form"
        method="POST"
        // action={`${url}${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contactForm"
        className="w-4/5 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5 bg-gray-900 bg-opacity-75 p-5 rounded-lg"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <ContactInfo formData={formData} setFormData={setFormData} />
        <AddressInfo formData={formData} setFormData={setFormData} />
        <CheckBoxes formData={formData} setFormData={setFormData} />
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
