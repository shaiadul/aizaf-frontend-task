"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 min-h-screen px-6 py-12">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Our Company
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We create amazing products that make life easier and more enjoyable.
          Innovation, reliability, and care guide everything we do.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {[
          { label: "Products Delivered", value: "10k+" },
          { label: "Happy Customers", value: "5k+" },
          { label: "Global Partners", value: "50+" },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-4xl font-bold text-black mb-2">
              {stat.value}
            </span>
            <span className="text-gray-700 font-medium">{stat.label}</span>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-indigo-200 pl-6">
          {[
            { year: "2005", desc: "Started as a small team of engineers." },
            { year: "2010", desc: "Expanded team and launched new products." },
            { year: "2015", desc: "Opened first international office." },
            { year: "2018", desc: "Reached 1,000 customers worldwide." },
            { year: "2021", desc: "Launched innovative tech solutions." },
            { year: "2022", desc: "Introduced premium services globally." },
            { year: "2023", desc: "Achieved 5,000 happy customers." },
            { year: "2024", desc: "Expanded product line internationally." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-8 relative"
            >
              <div className="absolute -left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
                {item.year.slice(-2)}
              </div>
              <p className="text-gray-700 pl-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            "Fast Delivery",
            "Premium Quality",
            "Customer Support",
            "Global Shipping",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-indigo-50 text-black rounded-xl px-6 py-4 font-semibold shadow-md hover:bg-indigo-100 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-16 text-center rounded-xl shadow-lg max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us Today</h2>
        <p className="mb-6">
          Discover more about our products and services. Let’s grow together!
        </p>
        <a
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </main>
  );
}
