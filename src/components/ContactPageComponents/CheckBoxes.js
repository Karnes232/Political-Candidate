import React from "react";

const CheckBoxes = ({ formData, setFormData }) => {
  const handleChange = ({ target }) => {
    console.log(target.checked);
    setFormData({
      ...formData,
      [target.name]: target.checked,
    });
  };
  return (
    <>
      <div className="relative z-0 mb-6 w-full group flex justify-around text-white">
        Cómo te gustaría ayudar?
      </div>
      <div className="relative z-0 mb-3 w-full group">
        <label className="contactFormLabelCheckBox">
          <input
            type="checkbox"
            name="AfiliarMiembros"
            className="mr-2"
            onChange={handleChange}
          />{" "}
          Afiliar Miembros
        </label>
      </div>
      <div className="relative z-0 mb-3 w-full group">
        <label className="contactFormLabelCheckBox">
          <input
            type="checkbox"
            name="Publicidad"
            className="mr-2"
            onChange={handleChange}
          />{" "}
          Dar Publicidad al Partido
        </label>
      </div>
      <div className="relative z-0 mb-3 w-full group">
        <label className="contactFormLabelCheckBox">
          <input
            type="checkbox"
            name="Donaciones"
            className="mr-2"
            onChange={handleChange}
          />{" "}
          Donaciones
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <label className="contactFormLabelCheckBox flex">
          <input
            type="checkbox"
            name="Iniciativas"
            className="mr-3"
            onChange={handleChange}
          />{" "}
          Promover Iniciativas a Favor Del Electorado
        </label>
      </div>
    </>
  );
};

export default CheckBoxes;
