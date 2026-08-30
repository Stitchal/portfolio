'use client';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Title from '../components/Title';

export default function ContactSection(): JSX.Element {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (captchaValue && formRef.current) {
      formRef.current.submit();
    }
  }

  return (
    <section
      id="contact"
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
            rows={10}
            className="p-4 bg-gradient-to-tr from-container-bg to-blue-gray text-custom-white rounded-lg focus:outline-none resize-none shadow-md shadow-gray-900"
            required
          />
          <div className="flex flex-col items-end gap-4 w-full justify-end">
            <ReCAPTCHA
              sitekey="6Lf9ggQoAAAAAIGpzYtTnhp-oDoOCtBPXwfT1kr8"
              onChange={(value) => setCaptchaValue(value)}
            />
            <button className="flex text-custom-white bg-blue-500 cursor-pointer w-fit md:py-4 p-4 md:px-10 duration-500 rounded-xl hover:scale-110 font-bold">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
