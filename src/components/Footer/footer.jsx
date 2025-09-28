import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-[#f5d492] py-10 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/ewf.jpg')" }} // <-- replace with your image path
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Name + Role */}
        <h3 className="text-xl font-bold text-rose-500">M Rahul</h3>
        <p className="text-rose-400 text-sm mb-6">
          Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:ponnanna2001@gmail.com"
            className="bg-[#111]/80 hover:bg-rose-500 p-3 rounded-full transition"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://github.com/rahulm-04"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111]/80 hover:bg-rose-500 p-3 rounded-full transition"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahull-m044/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111]/80 hover:bg-rose-500 p-3 rounded-full transition"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Made with{" "}
          <span className="text-red-500">❤</span> by M Rahul
        </p>
      </div>
    </footer>
  );
};

export default Footer;
