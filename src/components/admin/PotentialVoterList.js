import { Link } from "gatsby";
import React from "react";

const PotentialVoterList = ({ voter }) => {
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <Link to={`/admin/voter/${voter.id}`}>
          <th
            scope="row"
            className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            {voter?.nombre}
          </th>{" "}
        </Link>
        <td className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {voter?.apellido}
        </td>
        <td className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {voter?.cedula}
        </td>
      </tr>
    </>
  );
};

export default PotentialVoterList;
