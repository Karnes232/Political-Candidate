import React from "react";
import Select from "react-select";
const ProvidenciaSelect = () => {
  let options = [
    {
      value: "Azua",
      label: "Azua",
    },
    {
      value: "Baoruco",
      label: "Baoruco",
    },
    {
      value: "Barahona",
      label: "Barahona",
    },
    {
      value: "Dajabón",
      label: "Dajabón",
    },
    {
      value: "Duarte",
      label: "Duarte",
    },
    {
      value: "El Seibo",
      label: "El Seibo",
    },
    {
      value: "Elías Piña",
      label: "Elías Piña",
    },
    {
      value: "Espaillat",
      label: "Espaillat",
    },
    {
      value: "Hato Mayor",
      label: "Hato Mayor",
    },
    {
      value: "Hermanas Mirabal",
      label: "Hermanas Mirabal",
    },
    {
      value: "Independencia",
      label: "Independencia",
    },
    {
      value: "La Altagracia",
      label: "La Altagracia",
    },
    {
      value: "La Romana",
      label: "La Romana",
    },
    {
      value: "La Vega",
      label: "La Vega",
    },
    {
      value: "María Trinidad Sánchez",
      label: "María Trinidad Sánchez",
    },
    {
      value: "Monseñor Nouel",
      label: "Monseñor Nouel",
    },
    {
      value: "Monte Cristi",
      label: "Monte Cristi",
    },
    {
      value: "Monte Plata",
      label: "Monte Plata",
    },
    {
      value: "Pedernales",
      label: "Pedernales",
    },
    {
      value: "Peravia",
      label: "Peravia",
    },
    {
      value: "Puerto Plata",
      label: "Puerto Plata",
    },
    {
      value: "Samaná",
      label: "Samaná",
    },
    {
      value: "San Cristóbal",
      label: "San Cristóbal",
    },
    {
      value: "San José de Ocoa",
      label: "San José de Ocoa",
    },
    {
      value: "San Juan",
      label: "San Juan",
    },
    {
      value: "San Pedro de Macorís",
      label: "San Pedro de Macorís",
    },
    {
      value: "Sánchez Ramírez",
      label: "Sánchez Ramírez",
    },
    {
      value: "Santiago",
      label: "Santiago",
    },
    {
      value: "Santiago Rodríguez",
      label: "Santiago Rodríguez",
    },
    {
      value: "Santo Domingo",
      label: "Santo Domingo",
    },
    {
      value: "Valverde",
      label: "Valverde",
    },
    {
      value: "Distrito Nacional",
      label: "Distrito Nacional",
    },
  ];
  const style = {
    control: (base) => ({
      ...base,
      border: 1,
      // This line disable the blue border
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "black",
    }),
  };
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <Select
          options={options}
          className="contactFormInputProvidenca"
          classNamePrefix="select"
          isSearchable={true}
          name="providencia"
          //   onChange={hotelChange}
          placeholder={"Providencia"}
          styles={style}
          required
        />
      </div>
    </>
  );
};

export default ProvidenciaSelect;
