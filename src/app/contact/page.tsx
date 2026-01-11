// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send data to API
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen px-6 py-12">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl text-black md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We&apos;d love to hear from you! Send us a message and we&apos;ll get back to
          you as soon as possible.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-green-600 font-bold text-xl"
          >
            Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-black">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-black transition"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-center mt-12"
      >
        <h2 className="text-2xl text-black font-bold mb-2">Other Ways to Reach Us</h2>
        <p className="text-gray-700">
          Email: support@example.com <br />
          Phone: +1 234 567 8900 <br />
          Address: 123 Main Street, Your City, Country
        </p>
      </motion.section>
    </main>
  );
}
