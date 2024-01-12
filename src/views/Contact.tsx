// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

// react
import React, { useState, ChangeEvent, FormEvent } from 'react';

// emailjs
import emailjs from '@emailjs/browser';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const initialFormData = {
    user_name: '',
    user_email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID as string)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData(initialFormData);
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Failed to send message', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <form onSubmit={sendEmail}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Your name"
                placeholderText="Name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              <LabelInput
                labelText="Your email"
                placeholderText="Email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput
                labelText="Your message"
                placeholderText="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                textarea
                required
              />
            </div>

            <Button secondary>Send Message</Button>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;
