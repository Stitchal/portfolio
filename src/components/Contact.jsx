import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-gray-900 to-blue-950 px-5 pt-20"
    >
      <div className="flex flex-col w-full lg:w-2/3 items-center">
        <Title title="Contactez-moi" level="4" margin="8" />
        <form
          action="https://getform.io/f/05b051d0-22e7-4f67-a0c5-8f4028610ada"
          method="POST"
          className="flex flex-col w-full gap-5 mt-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-4 bg-gradient-to-tr from-blue-950 to-blue-900 text-white rounded-md focus:outline-none shadow-md shadow-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-4 bg-gradient-to-tr from-blue-950 to-blue-900 text-white rounded-md focus:outline-none shadow-md shadow-gray-900"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="10"
            className="p-4 bg-gradient-to-tr from-blue-950 to-blue-900 text-white rounded-md focus:outline-none resize-none shadow-md shadow-gray-900"
          ></textarea>
          <div className="flex w-full justify-end">
            <button className="flex text-custom-white bg-blue-500 cursor-pointer w-fit md:py-4 p-4 md:px-10 lg:mt-0 duration-500 rounded-xl hover:scale-110 font-bold">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
