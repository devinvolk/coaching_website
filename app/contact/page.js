"use client";

import Image from "next/image";
import React, { useRef } from "react";
import contactHero from "../../public/images/contactHero.webp";
import emailjs from "@emailjs/browser";

const page = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbn2h0i",
        "template_sc82i6a",
        form.current,
        "1CIt61pNsbip7CxKi"
      )
      .then(
        (result) => {
          alert(
            "Thank you for your message! Devin will get back to you shortly."
          );
          console.log(result.text);
        },
        (error) => {
          alert(
            "Unfortunately an error has occured. Please contact Devin on instagram @devinvolk. Sorry for the inconvenience."
          );
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Image
        src={contactHero}
        alt="Devin Volk crossing the finish line in Kona Hawaii at the 2022 Ironman World Championships"
        priority
      />
      <hr className="mt-16 mb-10 border-t-2 border-neutral-500 rounded-full w-4/5 md:w-3/5 mx-auto" />
      <h1 className="text-3xl md:text-5xl text-center" id="formTitle">
        Send Devin a Message!
      </h1>
      <hr className="my-10 border-t-2 border-neutral-500 rounded-full w-4/5 md:w-3/5 mx-auto" />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col mt-16 mx-4 md:mx-auto md:w-4/5"
      >
        <label htmlFor="name" className="text-xl">
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          placeholder="Jane Doe"
          required
          className="shadow md:shadow-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <label htmlFor="email" className="text-xl mt-10">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="janedoe@gmail.com"
          required
          className="shadow md:shadow-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <label htmlFor="message" className="text-xl mt-10">
          Message:
        </label>
        <input
          id="message"
          name="message"
          type="text"
          autoComplete="off"
          placeholder="Write your message here..."
          required
          className="shadow md:shadow-lg appearance-none border rounded pt-2 pb-80 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        <div className="flex justify-center mt-10 mb-20">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
