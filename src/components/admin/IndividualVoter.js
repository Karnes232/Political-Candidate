import React from "react";

const IndividualVoter = ({ voter }) => {
  return (
    <>
      <div className="h-24 lg:h-36"></div>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <th className="p-2">Nombre:</th>
            <td className="capitalize">{voter?.nombre}</td>
          </tr>
          <tr>
            <th className="p-2">Apellido:</th>
            <td className="capitalize">{voter?.apellido}</td>
          </tr>
          <tr>
            <th className="p-2">Cedula:</th>
            <td className="capitalize">{voter?.cedula}</td>
          </tr>
          <tr>
            <th className="p-2">Colegio Elect:</th>
            <td className="capitalize">{voter?.colegioElectoral}</td>
          </tr>
          <tr>
            <th className="p-2">Email:</th>
            <a href={`mailto:${voter?.email}`}>
              <td className="">{voter?.email}</td>
            </a>
          </tr>
          <tr>
            <th className="p-2">Teléfono:</th>
            <a href={`tel:${voter?.teléfono}`}>
              <td className="">{voter?.teléfono}</td>
            </a>
          </tr>
          <tr>
            <th className="p-2">Dirección:</th>
            <td className="capitalize">{voter?.dirección}</td>
          </tr>
          <tr>
            <th className="p-2">Ciudad:</th>
            <td className="capitalize">{voter?.ciudad}</td>
          </tr>
          <tr>
            <th className="p-2">Providencia:</th>
            <td className="capitalize">{voter?.providencia}</td>
          </tr>
        </tbody>
      </table>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <th className="p-2">Afiliar Miembros:</th>
            <td className="capitalize pr-5">{voter?.AfiliarMiembros}</td>
          </tr>
          <tr>
            <th className="p-2">Dar Publicidad al Partido:</th>
            <td className="capitalize pr-5">{voter?.Publicidad}</td>
          </tr>
          <tr>
            <th className="p-2">Donaciones:</th>
            <td className="capitalize pr-5">{voter?.Donaciones}</td>
          </tr>
          <tr>
            <th className="p-2">
              Promover Iniciativas a Favor Del Electorado:
            </th>
            <td className="capitalize pr-5">{voter?.Iniciativas}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default IndividualVoter;
