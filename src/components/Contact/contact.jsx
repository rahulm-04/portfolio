import React from "react";
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen text-white py-20 px-6 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 text-sm bg-rose-500 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mt-4 text-rose-500">Let's Work Together</h2>
          <p className="mt-4 text-lg text-gray-300">
            Ready to turn your ideas into reality? I'm available for freelance projects
            and would love to discuss how we can create something amazing together.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Available for Projects */}
            <div className="bg-[#111] border border-rose-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-rose-500">
                <MessageSquare className="w-5 h-5" />
                Available for Projects
              </h3>
              <p className="mt-2 text-gray-300">
                I'm currently accepting new freelance projects and would love to help
                bring your vision to life with modern, scalable solutions.
              </p>
              <p className="mt-2 text-green-500 font-medium">● Available Now</p>
            </div>

            {/* Contact Cards */}
            <div className="bg-[#111] p-6 rounded-lg shadow-lg">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-rose-500">
                <Mail className="w-5 h-5" /> Email
              </h4>
              <p className="text-rose-500">raahulix@gmail.com</p>
              <p className="text-gray-500 text-sm">
                Best for detailed project discussions
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-lg shadow-lg">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-rose-500">
                <Phone className="w-5 h-5" /> Phone
              </h4>
              <p className="text-rose-500">+91 7204484025</p>
              <p className="text-gray-500 text-sm">
                Available for urgent consultations
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-lg shadow-lg">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-rose-500">
                <Github className="w-5 h-5" /> GitHub
              </h4>
              <a
                href="https://github.com/rahulm-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:underline"
              >
                github.com/rahulm-04
              </a>
              <p className="text-gray-500 text-sm">View my code repositories</p>
            </div>

            <div className="bg-[#111] p-6 rounded-lg shadow-lg">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-rose-500">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/rahull-m044/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:underline"
              >
                linkedin.com/in/rahull-m044/
              </a>
              <p className="text-gray-500 text-sm">Professional networking</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-[#111] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-rose-500 mb-3">
                Services Available
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Full-time freelance projects</li>
                <li>• Part-time consulting</li>
                <li>• Technical mentoring</li>
                <li>• Code reviews and optimization</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold">24h</p>
                <p className="text-gray-400">Response Time</p>
              </div>
              <div className="bg-[#111] p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold text-green-500">100%</p>
                <p className="text-gray-400">Project Success</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-rose-400 to-rose-600 p-8 rounded-lg text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-gray-100 mb-4">
                Let's discuss your project requirements and create something extraordinary together.
              </p>
              <a
                href="mailto:ponnanna2001@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                <Mail className="w-5 h-5" /> Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
