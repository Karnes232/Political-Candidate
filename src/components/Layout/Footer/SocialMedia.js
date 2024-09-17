import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const SocialMedia = ({ info, classes, iconColor }) => {
  return (
    <div className="border-b border-white md:border-none">
      <div
        className={`mx-8 flex justify-around py-4 md:mx-auto md:max-w-md ${classes}`}
      >
        <a
          href={info.facebook}
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className={`footerIcons ${iconColor}`} />
        </a>
        <a
          href={info.instagram}
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <FaInstagram className={`footerIcons ${iconColor}`} />
        </a>
        <a href={`mailto:${info.email}`} aria-label="Gmail" rel="noreferrer">
          <GrMail className={`footerIcons ${iconColor}`} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
