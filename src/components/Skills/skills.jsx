import React from "react";
import { Code2, Database, Layout, Cpu, Wrench, Brain } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-blue-400" size={22} />,
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend Technologies",
      icon: <Layout className="text-green-400" size={22} />,
      items: ["React.js", "Next JS", "HTML5", "CSS3", "Tailwind CSS","shadCN"],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-purple-400" size={22} />,
      items: ["Node.js", "Express.js", "SQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-orange-400" size={22} />,
      items: ["Git", "GitHub", "Postman", "vercel"],
    },
    {
      title: "AI & Productivity",
      icon: <Brain className="text-pink-400" size={22} />,
      items: ["Cursor AI", "ChatGPT", "AI-Assisted Development"],
    },
    {
      title: "Problem Solving",
      icon: <Cpu className="text-yellow-400" size={22} />,
      items: ["Data Structures", "Algorithms", "System Design"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen text-white py-20 px-6 flex flex-col justify-center"
    >

      {/* Section Badge */}
      <div className="text-center mb-6">
        <span className="bg-rose-600 px-4 py-1 rounded-full text-sm shadow-lg">
          Technical Skills
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-rose-500">
        My Technology Stack
      </h2>
      <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
        A comprehensive set of modern technologies and tools that enable me to
        build robust, scalable, and high-performance applications.
      </p>

      {/* Skills Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-700/80 text-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
