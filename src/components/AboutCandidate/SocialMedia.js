import React from "react";
import { SiGmail } from "react-icons/si";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
const SocialMedia = ({ facebook, instagram, x, email }) => {
  console.log(facebook);
  console.log(instagram);
  console.log(x);
  console.log(email);
  return (
    <>
      <div className="flex justify-center my-10 space-x-10">
        {facebook ? (
          <a
            href={facebook}
            target="_blank"
            aria-label="Facebook"
            rel="noreferrer"
          >
            <FaFacebook className="mt-5 text-primary-color text-4xl" />
          </a>
        ) : (
          <></>
        )}
        {instagram ? (
          <a
            href={instagram}
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
          >
            <FaInstagram className="mt-5 text-primary-color text-4xl" />
          </a>
        ) : (
          <></>
        )}
        {x ? (
          <a href={x} target="_blank" aria-label="Twitter - X" rel="noreferrer">
            <FaXTwitter className="mt-5 text-primary-color text-4xl" />
          </a>
        ) : (
          <></>
        )}
        {email ? (
          <a href={`mailto:${email}`} aria-label="Gmail" rel="noreferrer">
            <SiGmail className="mt-5 text-primary-color text-4xl" />
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SocialMedia;
