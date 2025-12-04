"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/40 z-50 border-b border-blue-300/40 shadow-lg shadow-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo / Nama */}
        <h1 className="text-lg font-bold tracking-wider drop-shadow-lg">
          <a href="#home" className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">SIRFARATIH</a>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-blue-700 hover:text-purple-600 transition font-semibold drop-shadow-md"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden backdrop-blur-lg bg-white/40 border-t border-blue-300/40">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-blue-700 hover:text-purple-600 text-lg font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
