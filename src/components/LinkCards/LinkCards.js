import React from "react";
import IndividualCard from "./IndividualCard";
import { LuClipboardList } from "react-icons/lu";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { MdFamilyRestroom } from "react-icons/md";
const LinkCards = ({ pageCards }) => {
  let propuestaCard;
  let contactoCard;
  let nostrosCard;
  pageCards.map((page) => {
    if (page.page === "/propuestas") {
      propuestaCard = page;
    }
    if (page.page === "/contacto") {
      contactoCard = page;
    }
    if (page.page === "/nostros") {
      nostrosCard = page;
    }
    return null;
  });
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between xl:mx-7 lg:space-x-7 mb-5 xl:mb-7">
      <IndividualCard pageCard={propuestaCard} icon={LuClipboardList} />
      <IndividualCard pageCard={nostrosCard} icon={MdFamilyRestroom} />
      <IndividualCard pageCard={contactoCard} icon={LiaPrayingHandsSolid} />
    </div>
  );
};

export default LinkCards;
