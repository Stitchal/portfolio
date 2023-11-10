import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Title from "../components/Title";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const formRef = useRef(null);

  function onChange(value) {
    // console.log("Captcha value:", value);
    setCaptchaValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer le formulaire
    captchaValue && formRef.current.submit();
    // console.log("Formulaire envoyé");
  }

  return (
    <div
      name="Contact"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3 items-center">
        <Title title="Contactez-moi" level="4" margin="8" />
        <form
          ref={formRef}
          action="https://getform.io/f/05b051d0-22e7-4f67-a0c5-8f4028610ada"
          method="POST"
          className="flex flex-col w-full gap-5 mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-4 bg-gradient-to-tr from-container-bg to-blue-gray text-custom-white rounded-lg focus:outline-none shadow-md shadow-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-4 bg-gradient-to-tr from-container-bg to-blue-gray text-custom-white rounded-lg focus:outline-none shadow-md shadow-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="10"
            className="p-4 bg-gradient-to-tr from-container-bg to-blue-gray text-custom-white rounded-lg focus:outline-none resize-none shadow-md shadow-gray-900"
            required
          ></textarea>
          <div className="flex flex-col items-end gap-4 w-full justify-end">
            <ReCAPTCHA
              sitekey="6Lf9ggQoAAAAAIGpzYtTnhp-oDoOCtBPXwfT1kr8"
              onChange={onChange}
            />

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
