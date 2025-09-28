import React from 'react';
import { FaAward, FaBolt, FaUsers, FaRobot } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative text-rose-500 py-20 px-4 md:px-16"
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Centered About Me Badge */}
        <div className="text-center mb-8">
          <span className="bg-rose-500 text-white text-xs font-medium px-4 py-1 rounded-full inline-block">
            About Me
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-rose-500">
              Crafting Digital Excellence
            </h2>

            <p className="text-lg mb-6 text-gray-200">
              A passionate software developer with a proven track record of delivering high-performance solutions and leading successful project implementations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-rose-500">My Journey</h3>

            <p className="mb-4 text-gray-300">
             I am a Full Stack Developer with 1 year of professional experience in designing and developing scalable, user-friendly, and high-performance web applications. Skilled in building responsive frontends with React.js and robust backends using Node.js, Express, and MongoDB/PostgreSQL, I specialize in delivering end-to-end solutions that bridge design and functionality.
             My experience includes developing dashboards, enterprise web
            </p>

            <p className="mb-6 text-gray-300">
             My experience includes developing dashboards, enterprise web applications, and API-driven systems, with a focus on clean code, performance optimization, and intuitive user experience. I am passionate about learning modern technologies, integrating AI-assisted development tools, and continuously improving software quality through agile practices.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Full Stack Development', 'Project Leadership', 'AI-Assisted Development', 'Performance Optimization'].map((tag, i) => (
                <span key={i} className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a]/90 p-6 rounded-lg border border-[#333]">
              <FaAward className="text-rose-500 text-2xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-1">First Ace Performer</h4>
              <p className="text-sm text-gray-300">Awarded for outstanding contribution and delivery excellence</p>
            </div>

            <div className="bg-[#1a1a1a]/90 p-6 rounded-lg border border-[#333]">
              <FaBolt className="text-rose-500 text-2xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-1">97% Performance Boost</h4>
              <p className="text-sm text-gray-300">Achieved through profiling, optimization, and AI-assisted development</p>
            </div>

            <div className="bg-[#1a1a1a]/90 p-6 rounded-lg border border-[#333]">
              <FaUsers className="text-rose-500 text-2xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-1">Team Leadership</h4>
              <p className="text-sm text-gray-300">Led full project lifecycles and mentored junior developers</p>
            </div>

            <div className="bg-[#1a1a1a]/90 p-6 rounded-lg border border-[#333]">
              <FaRobot className="text-rose-500 text-2xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-1">AI-Powered Development</h4>
              <p className="text-sm text-gray-300">Leveraging Cursor AI and ChatGPT for rapid development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

