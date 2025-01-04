import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2dekpum",
        "template_8xvj95k",
        form.current,
        "p6Uwbm7TlLqyHxeBw"
      )
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message Sent!",
            showConfirmButton: false,
            timer: 1000,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-20 ">
      <div className="text-center my-10 py-4 font-bold text-4xl uppercase border-y-8 border-blue-900">
        contact with me
      </div>
      <div className=" grid gap-20 grid-cols-1 lg:grid-cols-2 pb-8 items-center px-2">
        {/* Contact Us Form */}
        <div className=" w-full h-full rounded-lg border px-10 pb-10 pt-8 shadow-md ">
          <div className="mb-6"></div>
          <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
              <label className="block font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                id="name"
                placeholder="Your Name"
                name="from_name"
                type="text"
              />
            </div>

            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
              <label className="block font-medium" htmlFor="_email">
                Email
              </label>
              <input
                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                id="_email"
                placeholder="Your Email"
                name="from_email"
                type="email"
              />
            </div>

            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
              <label className="block font-medium" htmlFor="_message">
                Message
              </label>
              <textarea
                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                id="_message"
                placeholder="What's on your mind?"
                name="message"
              />
            </div>

            <button className="rounded-md bg-hoverprimary px-4 py-2 text-black transition-colors btn btn-outline w-full text-xl uppercase hover:bg-blue-900 hover:text-white">
              Submit
            </button>
          </form>
        </div>
        <div className="inline grid-cols-1 space-y-4">
          {/* Facebook */}
          <div className="p-6 border border-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300">
            <div className="flex items-center justify-center text-center mb-4">
              <h3 className="text-2xl font-semibold">
                <FaFacebook className="text-center text-blue-500 text-4xl" />
              </h3>
            </div>
            <a
              href="https://www.facebook.com/originaljit"
              target="_blank"
              className="text-center font-bold btn btn-outline hover:bg-blue-500 w-full"
            >
              Send a Message
            </a>
          </div>

          {/* WhatsApp */}
          <div className="p-6 border border-green-500 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300">
            <div className="flex items-center justify-center text-center mb-4">
              <h3 className="text-2xl font-semibold">
                <FaWhatsapp className="text-center text-green-500 text-4xl" />
              </h3>
            </div>
            <a
              href="https://wa.me/8801772344407?text=..."
              target="_blank"
              className="text-center font-bold btn btn-outline hover:bg-green-500 w-full"
            >
              Send a Message
            </a>
          </div>

          {/* Phone Call */}
          <div className="p-6 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300">
            <div className="flex items-center justify-center text-center mb-4">
              <h3 className="text-2xl font-semibold">
                <FaPhone className="text-center text-blue-500 text-4xl" />
              </h3>
            </div>
            <a
              href="tel:+8801772344407"
              className="text-center font-bold btn btn-outline hover:bg-blue-500 w-full"
            >
              Make a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
