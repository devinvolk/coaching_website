import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-6 md:max-w-5xl w-full">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto space-y-2 p-6 sm:space-y-0 sm:p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500">
          <a href="/" className="hover:underline">
            © 2023 Devin Volk
          </a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 sm:space-x-2 mb-1">
          <a
            href="https://github.com/devinvolk"
            rel="noreferrer"
            target="_blank"
            role="button"
            tabIndex={0}
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
              aria-label="Link to Devin's Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/devin-volk-8a4711278/"
            rel="noreferrer"
            target="_blank"
            role="button"
            tabIndex={0}
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
              aria-label="Link to Devin's LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/devinvolk/?hl=en"
            rel="noreferrer"
            target="_blank"
            role="button"
            tabIndex={0}
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
              aria-label="Link to Devin's Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
