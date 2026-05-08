import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SEND EMAIL
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1aysb1p", // service id
        "template_lxu7vgt", // template id
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        "eIoz6e6bjtmMrqyw3" // public key
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");

          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);

          alert("Failed to Send Message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-gray-200 text-lg">
            Feel free to connect with me for projects,
            collaborations, or opportunities.
          </p>

        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            {/* CONTACT CARD */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">

              <h3 className="text-3xl font-bold mb-8">
                Get In Touch
              </h3>

              {/* EMAIL */}
              <div className="flex items-center gap-4 mb-6">

                <div className="bg-yellow-400 text-black p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <a
                    href="mailto:rajmaharichu30@gmail.com"
                    className="text-gray-200 hover:text-yellow-400 transition"
                  >
                    rajmaharichu30@gmail.com
                  </a>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4 mb-6">

                <div className="bg-yellow-400 text-black p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  <p className="text-gray-200">
                    +91 9361553904
                  </p>
                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">

                <div className="bg-yellow-400 text-black p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Location
                  </h4>

                  <p className="text-gray-200">
                    Kovilpatti, Tamil Nadu
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">

              <h3 className="text-2xl font-bold mb-6">
                Follow Me
              </h3>

              <div className="flex gap-6 text-3xl">

                {/* GITHUB */}
                <a
                  href="https://github.com/maharichu30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 hover:-translate-y-1 transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/mahalakshmi-r-532a6a2a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 hover:-translate-y-1 transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* MAIL */}
                <a
                  href="mailto:rajmaharichu30@gmail.com"
                  className="hover:text-yellow-400 hover:-translate-y-1 transition duration-300"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold mb-8 text-center">
              Send Message
            </h3>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={form.from_email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#F59E0B] text-black py-4 rounded-xl font-bold hover:bg-[#d97706] hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">

          <p className="text-gray-200">
            © 2025 Mahalakshmi. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-300">
            Built with React.js & Tailwind CSS ❤️
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;