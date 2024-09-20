import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import CheckBoxes from "./CheckBoxes";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "form-name": "Contact Form",
    nombre: "",
    apellido: "",
    cedula: "",
    email: "",
    teléfono: "",
    dirección: "",
    ciudad: "",
    providencia: "",
    AfiliarMiembros: "Falso",
    Publicidad: "Falso",
    Donaciones: "Falso",
    Iniciativas: "Falso",
  });
  console.log(formData);

  function getFormData(object) {
    const newFormData = new FormData();
    Object.keys(object).forEach((key) => newFormData.append(key, object[key]));
    return newFormData;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataFromForm = getFormData(formData);
    const body = new URLSearchParams(dataFromForm).toString()
    console.log(body)

    const form = document.getElementById("contactForm");
    const newFormData = new FormData(form);
    const formDataObj = {};
    newFormData.forEach((value, key) => (formDataObj[key] = value));
    const body2 = new URLSearchParams(newFormData).toString()
    console.log(body2)
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(dataFromForm).toString(),
    }).then(() => {
      console.log("Form successfully submitted");
      // collectUserData(dataFromForm, clearCart, redirectHref);
    });
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(newFormData).toString(),
    }).then(() => {
      console.log("Form successfully submitted");
      // collectUserData(dataFromForm, clearCart, redirectHref);
    });
  };

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
        onSubmit={handleSubmit}
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
