import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const SocialMedia = ({ info }) => {
  console.log(info);
  return (
    <div className="border-b border-white md:border-none">
      <div className="mx-8 flex justify-around py-4 md:mx-auto md:max-w-md">
        <a
          href={info.facebook}
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className="footerIcons" />
        </a>
        <a
          href={info.instagram}
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <FaInstagram className="footerIcons" />
        </a>
        <a href={`mailto:${info.email}`} aria-label="Gmail" rel="noreferrer">
          <GrMail className="footerIcons" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
