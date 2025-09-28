// src/components/Projects.jsx
import React from "react";
import { Laptop, Smartphone, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "vehiqAl - AI car marketplace",
    status: "Completed",
    type: "Enterprise Web Application",
    description:
      "VehiqAl AI is an intelligent web-based platform designed to revolutionize the automotive experience through artificial intelligence. The website leverages AI-driven insights, real-time data analysis, and modern UI/UX design to deliver smart vehicle-related services",
    features: [
      "AI-powered vehicle insights",
      "Test drive booking system",
      "Smart dashboard",
      "Personalized recommendations",
    ],
    technologies: ["Next.js", "javascript", "tailwind", "prisma","shadcn UI"],
    icon: <Laptop className="text-white w-6 h-6" />,
    liveDemo: "https://vehi-ai.vercel.app/", 
    code: "https://github.com/rahulm-04/vehiAI", 
  },
  {
    title: "Employee Management System",
    status: "Completed",
    type: "Enterprise Web Application",
    description:
      "Developed the frontend of an employee management system that enables HR teams and managers to track, manage, and update employee details, schedules, and performance.",
    features: [
      "Employee CRUD Operations",
      "Role & Department Management",
      "Search & Filter",
      "Responsive UI",
    ],
    technologies: ["React.js", "tailwind","Node.js", "JavaScript"],
    icon: <Smartphone className="text-white w-6 h-6" />,
    liveDemo: "https://rahulm-04.github.io/employeemgmntsys/", 
    code: "https://github.com/rahulm-04/employeemgmntsys", 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen text-white py-20 px-6 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-rose-500 text-white ">
          Featured Projects
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-rose-500">
          Project Portfolio
        </h2>
        <p className="text-lg text-white mt-3">
          A showcase of innovative solutions and technical expertise across
          various domains and technologies.
        </p>
      </div>

      {/* Major Projects */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="text-3xl font-semibold text-rose-500 text-left">
          Major Projects
        </h3>

        <div className="mt-6 space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-rose-500/40 hover:shadow-rose-500/20 transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="bg-rose-500 p-3 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-rose-500">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-yellow-600/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                    <p className="text-sm text-gray-400">{project.type}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300">{project.description}</p>

              {/* Features */}
              <div className="mt-4">
                <h5 className="font-semibold text-rose-500">
                  Key Features & Achievements
                </h5>
                <ul className="mt-2 grid md:grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-4">
                <h5 className="font-semibold text-rose-500">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-zinc-800 text-rose-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-700 transition text-white text-sm font-medium"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition text-orange-200 text-sm font-medium"
                >
                  <Code size={16} /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
