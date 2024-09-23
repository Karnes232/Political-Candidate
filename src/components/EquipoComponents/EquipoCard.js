import React from "react";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SiGmail } from "react-icons/si";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "gatsby";
const EquipoCard = ({ person }) => {
  console.log(person.urlSlug);
  const image = getImage(person.photo);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        delay: 0.3,
      }}
      className="w-5/6 md:w-[20rem] xl:w-[22rem] rounded-lg mx-auto shadow-2xl h-96 bg-white flex justify-center"
    >
      <div className="flex flex-col my-10 w-4/5">
        <div className="flex justify-center items-center">
          <GatsbyImage
            image={image}
            alt={person.photo.title}
            className="w-28 h-28 rounded-full"
          />
        </div>

        <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
        <div className="font-medium text-gray-800 mt-2">{person.position}</div>
        <Link to={person.urlSlug} className="no-underline" aria-label="Home">
          <button className="mt-5 bg-red-700 hover:bg-primary-color px-2 py-3 text-white uppercase w-full">
            Learn More →
          </button>
        </Link>
        <div className="flex space-x-3">
          {person.facebook ? (
            <a
              href={person.facebook}
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <FaFacebook className="mt-5 text-primary-color text-2xl" />
            </a>
          ) : (
            <></>
          )}
          {person.instagram ? (
            <a
              href={person.instagram}
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <FaInstagram className="mt-5 text-primary-color text-2xl" />
            </a>
          ) : (
            <></>
          )}
          {person.x ? (
            <a
              href={person.x}
              target="_blank"
              aria-label="Twitter - X"
              rel="noreferrer"
            >
              <FaXTwitter className="mt-5 text-primary-color text-2xl" />
            </a>
          ) : (
            <></>
          )}
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              aria-label="Gmail"
              rel="noreferrer"
            >
              <SiGmail className="mt-5 text-primary-color text-2xl" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EquipoCard;
