import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Your existing EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_2dekpum";
  const EMAILJS_TEMPLATE_ID = "template_8xvj95k";
  const EMAILJS_PUBLIC_KEY = "p6Uwbm7TlLqyHxeBw";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          // Success
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });

          // Reset form
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          // Error
          console.error("Email sending failed:", error.text);
          setStatus({
            type: "error",
            message:
              "Failed to send message. Please try again or email me directly at arijitbasubd@gmail.com",
          });
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 border-t border-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-gray-500 text-sm mb-4 tracking-wider">
            04 — CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-gray-300">Touch</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mb-8 p-4 rounded-lg border ${
              status.type === "success"
                ? "border-green-800 bg-green-900/20 text-green-400"
                : "border-red-800 bg-red-900/20 text-red-400"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-gray-700 transition-colors">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Email</div>
                    <a
                      href="mailto:arijitbasubd@gmail.com"
                      className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                      arijitbasubd@gmail.com
                    </a>
                    <div className="text-gray-400 text-sm mt-1">
                      Response within 24 hours
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-gray-700 transition-colors">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Phone</div>
                    <div className="text-white text-lg font-medium">
                      +8801772344407
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      Available everyday, 9AM-9PM
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-gray-700 transition-colors">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">Location</div>
                    <div className="text-white text-lg font-medium">
                      Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      Open to remote opportunities worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="text-gray-500 text-sm mb-4">
                  Also find me on
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ImArijitBasu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-800 text-gray-400 rounded-lg hover:text-white hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/arijit-basu-055060266/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-800 text-gray-400 rounded-lg hover:text-white hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send a Message
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field - Note: using "from_name" for EmailJS compatibility */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Email Field - Note: using "from_email" for EmailJS compatibility */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                    required
                    disabled={loading}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Form Note */}
                <div className="text-gray-500 text-sm text-center pt-4">
                  I'll respond to your message within 24 hours.
                </div>
              </form>
            </div>

            {/* Quick Response */}
            <div className="mt-8 p-6 border border-gray-800 rounded-xl bg-gray-900/20">
              <div className="flex items-start gap-4">
                <div className="text-gray-500 text-2xl">💬</div>
                <div>
                  <div className="text-white font-medium mb-1">
                    Prefer a quicker response?
                  </div>
                  <div className="text-gray-400 text-sm">
                    Connect with me on LinkedIn or email me directly at
                    arijitbasubd@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map/Area Info */}
        <div className="mt-16 pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-white font-bold mb-1">Based in Dhaka</div>
              <div className="text-gray-400 text-sm">Bangladesh</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold mb-1">Time Zone</div>
              <div className="text-gray-400 text-sm">IST (UTC+6:00)</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-white font-bold mb-1">Availability</div>
              <div className="text-gray-400 text-sm">
                Open for freelance & full-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
