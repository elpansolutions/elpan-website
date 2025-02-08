/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'ELPAN Solutions',
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success("Success! We'll get back to you soon. Thank you!");
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">

      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Let&apos;s Discuss</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-black text-center mb-12">
          Please fill out the form below to discuss your project and we&apos;ll get back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="flex bg-theme-blue text-white text-xl sm:text-lg tracking-wider items-center justify-center w-40 h-12 p-4 border-2 border-theme-blue shadow-xl rounded-full transform transition duration-500 hover:bg-white hover:text-theme-blue hover:scale-105 mx-auto"
            type="button"
            onClick={submitEmail}
          >
            SUBMIT
          </Button>
        </div>
      </Fade>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
        <div className="flex items-center">
          <FaPhone className="mr-2 text-lg" />
          <Button type="link" href="#" className="text-base text-black hover:text-gray-700 transition">
            +91 89039 59099
          </Button>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-lg" />
          <Button type="link" href="#" className="text-base text-black hover:text-gray-700 transition">
            enquiry@elpan.in
          </Button>
        </div>
      </div>

      <ToastContainer />

    </section>
  );
};
