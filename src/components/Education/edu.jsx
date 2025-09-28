import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative min-h-screen text-white py-10 px-6 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 text-sm bg-rose-500 rounded-full">
            Education
          </span>
          <h2 className="text-4xl text-rose-500 font-bold mt-4">Academic Background</h2>
          <p className="mt-4 text-lg text-gray-300">
            Strong foundation in computer science with excellent academic performance
            and practical application of theoretical concepts.
          </p>
        </div>

        {/* Degree Card */}
        <div className="bg-[#111] border-l-4 border-rose-500 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <GraduationCap className="text-rose-500 w-6 h-6" />
                Bachelor of Engineering
              </h3>
              <p className="text-rose-500 font-medium">Computer Science</p>
              <p className="text-gray-400">
                Vidya Vardhaka College of Engineering, Mysore
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-1">
                <Calendar className="w-4 h-4" /> August 2019 – June 2023
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-rose-600 px-4 py-2 rounded-lg font-semibold">
                7.01 CGPA
              </span>
            </div>
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-3 text-rose-500">Academic Highlights</h4>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300 list-disc list-inside">
            <li>Strong foundation in Data Structures and Algorithms</li>
            <li>Comprehensive understanding of Software Engineering principles</li>
            <li>Database Management Systems and SQL proficiency</li>
            <li>Object-Oriented Programming and Design Patterns</li>
            <li>Web Technologies and Full-Stack Development</li>
            <li>Computer Networks and System Architecture</li>
          </ul>
        </div>

        {/* Core Subjects */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-3 text-rose-500">Core Subjects</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures",
              "Algorithms",
              "Software Engineering",
              "Database Systems",
              "Web Technologies",
              "Object-Oriented Programming",
              "Computer Networks",
              "Operating Systems",
              "System Design",
              "Computer Graphics",
            ].map((subject, i) => (
              <span
                key={i}
                className="bg-[#1c1c1c] px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
          <div className="bg-rose-500 p-6 rounded-lg">
            <p className="text-3xl font-bold">4</p>
            <p className="text-gray-400">Years of Study</p>
          </div>
          <div className="bg-rose-500 p-6 rounded-lg">
            <p className="text-3xl font-bold">7.01</p>
            <p className="text-gray-400">CGPA</p>
          </div>
          <div className="bg-rose-500 p-6 rounded-lg">
            <p className="text-3xl font-bold">B.E.</p>
            <p className="text-gray-400">Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
