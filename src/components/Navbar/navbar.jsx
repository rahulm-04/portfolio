import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 text-gray-400 px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-rose-500">M RAHUL</h1>
      <ul className="hidden md:flex gap-8">
        {["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-rose-500 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
