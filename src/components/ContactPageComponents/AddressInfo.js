import React from "react";
import ProvidenciaSelect from "./ProvidenciaSelect";

const AddressInfo = ({ formData, setFormData }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="dirección"
          id="dirección"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={formData.dirección}
          onChange={handleChange}
        />
        <label htmlFor="dirección" className="contactFormLabel">
          Dirección
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          className="contactFormInput peer"
          placeholder=" "
          required
          value={formData.ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad" className="contactFormLabel">
          Ciudad
        </label>
      </div>
      <ProvidenciaSelect formData={formData} setFormData={setFormData}/>
    </>
  );
};

export default AddressInfo;
