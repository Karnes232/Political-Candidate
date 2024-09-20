import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactInfo = ({ formData, setFormData }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      teléfono: e,
    });
  };
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    // Apply formatting as XXX-XXXXXXX-X
    if (value.length > 3 && value.length <= 10) {
      value = value.replace(/(\d{3})(\d{1,7})/, "$1-$2");
    } else if (value.length > 10) {
      value = value.replace(/(\d{3})(\d{7})(\d{1})/, "$1-$2-$3");
    }

    setFormData({
      ...formData,
      cedula: value,
    });
  };
  return (
    <>
      <div className="relative z-0 my-6 w-full group">
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={formData.nombre}
          onChange={handleChange}
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
          value={formData.apellido}
          onChange={handleChange}
        />
        <label htmlFor="apellido" className="contactFormLabel">
          Apellido
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="cedula"
          id="cedula"
          value={formData.cedula}
          onChange={handleInputChange}
          maxLength={13}
          className="contactFormInput peer"
          placeholder=""
          required
        />
        <label htmlFor="cedula" className="contactFormLabel">
          Cedula
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="colegioElectoral"
          id="colegioElectoral"
          value={formData.colegioElectoral}
          onChange={handleChange}
          maxLength={4}
          className="contactFormInput peer"
        />
        <label htmlFor="colegioElectoral" className="contactFormLabel">
          Colegio Electoral
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.teléfono}
          onChange={handlePhoneChange}
          // onCountryChange={handleCountryChange}
        />
      </div>
    </>
  );
};

export default ContactInfo;
