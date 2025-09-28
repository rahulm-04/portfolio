import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen text-white py-20 px-6 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className=" text-xs px-4 py-1 rounded-full  bg-rose-500">
            Professional Experience
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-rose-500">
          Career Journey
        </h2>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          My professional experience showcases a track record of delivering
          exceptional results and leading innovative projects.
        </p>

        {/* Experience Card */}
        <div className="relative bg-neutral-900 border-l-4 border-rose-500 rounded-lg p-6 shadow-lg">
          {/* Job Title and Company */}
          <h3 className="text-2xl font-semibold text-rose-500">
            Software Engineer
          </h3>
          <p className="text-lg text-rose-500 font-medium">Excelsoft</p>

          {/* Time + Type */}
          <div className="flex items-center gap-6 text-sm text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>sepetember 2024 - Present</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Full-time</span>
            </div>
          </div>

          {/* Achievements */}
          <h4 className="mt-6 text-lg font-semibold text-white">
            Key Achievements
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
            <li>
            Spearheaded development of responsive web applications using React.js, achieving a 40% improvement in page load speed and enhanced mobile usability.
            </li>
            <li>
            Implemented reusable UI components with React + Tailwind CSS / Material UI, reducing development time by 30% across projects.
            </li>
            <li>
            Collaborated with UX/UI designers to deliver pixel-perfect, accessible, and cross-browser compatible interfaces, increasing customer satisfaction scores.
            </li>
            <li>
            Integrated RESTful APIs and GraphQL into frontend, enabling real-time data updates and reducing API response rendering time by 25%.
            </li>
            <li>
            Optimized web performance through code splitting, lazy loading, and caching, leading to a significant boost in Lighthouse performance scores (90+).
            </li>
          </ul>

          {/* Badges */}
          <div className="flex gap-3 mt-6 flex-wrap">
            <span className="bg-rose-500  text-white text-xs px-3 py-1 rounded-full">
              📈 97% Performance Boost
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
