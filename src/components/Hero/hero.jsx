import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white text-center px-6 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/ewf.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900/90" />
      </div>

      {/* Availability Badge - placed at very top */}
      <div className="absolute top-2 md:top-20 bg-rose-600 text-white px-5 py-1 rounded-full text-sm shadow-lg animate-pulse z-20">
        Available for Freelance Projects
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Name + Role */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 mt-20">
          M RAHUL
        </h1>
        <h2 className="text-3xl md:text-3xl text-rose-500 font-semibold mt-2">
          Software Engineer | Full Stack Developer
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-4xl text-rose-500">
          I’m a Web Developer with 1 year of experience crafting responsive,
          modern websites and applications. Skilled in React, JavaScript, and
          full-stack tools, I love turning ideas into clean, user-friendly
          digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="mailto:raahulix@gmail.com"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-rose-600 transition"
          >
            Get In Touch
          </a>
          <a
            href="/portfolio/res.pdf"
            className="bg-gray-800 border border-gray-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-700 transition"
            download="Rahul_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        {/* Contact + Social Links */}
        <div className="mt-10 flex flex-col gap-3 md:flex-row md:gap-8 items-center text-gray-400">
          <a
            href="mailto:raahulix@gmail.com"
            className="flex items-center gap-2 hover:text-rose-600"
          >
            <Mail size={20} /> raahulix@gmail.com
          </a>
          <a
            href="tel:+917204484025"
            className="flex items-center gap-2 hover:text-rose-600"
          >
            <Phone size={20} /> +91 7204484025
          </a>
          <a
            href="https://github.com/rahulm-04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-rose-600"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rahull-m044/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-rose-600"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        {/* Scroll Down Icon */}
        <div className="mt-12 animate-bounce text-rose-600">⌄</div>
      </div>
    </section>
  );
}
