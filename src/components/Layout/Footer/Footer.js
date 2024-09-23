import React from "react";
import Copyright from "./Copyright";
import SocialMedia from "./SocialMedia";
import Signature from "./Signature";
const Footer = ({ info }) => {
  return (
    <footer className="border-b bg-secondary-color shadow-sm ">
      <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia info={info} iconColor="text-white" />
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright candidateName={info.candidateName} />
        </div>
      </div>
      <Signature />
    </footer>
  );
};

export default Footer;
