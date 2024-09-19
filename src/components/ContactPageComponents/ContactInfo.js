import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ name, setName, lastName, setLastName }) => {
  const handlePhoneChange = (e) => {
    console.log(e)
  };

  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="nombre" className="contactFormLabel">
          Nombre
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="apellido"
          id="apellido"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="apellido" className="contactFormLabel">
          Apellido
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <PhoneInput
          defaultCountry="DO"
          type="tel"
          name="teléfono"
          id="teléfono"
          className={`contactFormInput peer`}
          placeholder="Enter phone number"
          // value={formData.phone}
          onChange={handlePhoneChange}
          // onCountryChange={handleCountryChange}
        />
      </div>
    </>
  );
};

export default ContactInfo;
