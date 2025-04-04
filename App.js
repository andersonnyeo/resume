import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function AndersonResumeSite() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-5 bg-gray-800 text-center text-2xl font-bold">
        Anderson Yeo | Computer Science & AI
      </header>

      <nav className="flex justify-center space-x-6 p-4 bg-gray-700">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#experience" className="hover:text-yellow-400">Experience</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      <section id="about" className="p-10 text-center">
        <motion.h2 
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Final-year BSc Computer Science with AI student at the University of Nottingham.
          Passionate about software development, AI, and data analytics.
        </p>
      </section>

      <section id="experience" className="p-10">
        <h2 className="text-3xl font-semibold text-center">Experience</h2>
        <div className="mt-6 space-y-4 max-w-3xl mx-auto">
          <motion.div className="bg-gray-800 p-4 rounded-lg" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold">Data Analyst Intern - AIA Malaysia</h3>
            <p className="text-gray-400">JUNE 2024 – AUGUST 2024</p>
            <p>Developed Power BI dashboards and conducted trend analysis for data-driven decisions.</p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="p-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div className="bg-gray-800 p-4 rounded-lg" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold">Trackify - AI Expense Tracker</h3>
            <p>Developed an AI-driven expense tracker app with Flutter and Firebase.</p>
          </motion.div>

          <motion.div className="bg-gray-800 p-4 rounded-lg" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-bold">FitTrack - Workout Tracking App</h3>
            <p>Implemented user authentication and real-time features using Flutter.</p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="mailto:andersonsoonkai@gmail.com" className="text-yellow-400 text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://github.com/andersonnyeo" className="text-yellow-400 text-2xl">
            <FaGithub />
          </a>
          <span className="text-yellow-400 text-2xl">
            <FaPhone /> +44 7920 841658
          </span>
        </div>
      </section>

      <footer className="text-center p-4 bg-gray-800">© 2025 Anderson Yeo</footer>
    </div>
  );
}
