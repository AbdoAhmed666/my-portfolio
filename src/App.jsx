
import React from "react";
import { motion } from "framer-motion";
import myPhoto from "./assets/me.jpg"; // ضع صورتك داخل مجلد src/assets وسميها me.jpg

export default function App() {
  const skills = [
    "Python", "Machine Learning", "Deep Learning", "MLOps", "Docker",
    "FastAPI", "TensorFlow", "PyTorch", "IoT", "Firebase"
  ];

  const projects = [
    {
      title: "Smart Armband - EMG Gesture Control",
      desc: "Finger gesture recognition using EMG data, deployed via API and web dashboard.",
      tech: "Python • TensorFlow • FastAPI • Docker • Firebase",
      link: "https://github.com/AbdoAhmed666/geastureESP"
    },
    {
      title: "Nursing Assistant Robot",
      desc: "A nursing robot integrating voice interface and medical image analysis.",
      tech: "PyTorch • OpenCV • ROS",
      link: "https://github.com/AbdoAhmed666/-SmartWatch-Activity-Predictor"
    },
    {
      title: "Song Analyzer & Generator",
      desc: "Music analysis and melody generation using MIDI and deep learning.",
      tech: "LibROSA • pretty_midi • Flask",
      link: "https://github.com/AbdoAhmed666/Music"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#050811] via-[#0b1220] to-[#121a2f] text-white min-h-screen font-['JetBrains_Mono']">
      
      {/* ===== Navbar ===== */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[#0b1220]/70 backdrop-blur-md border-b border-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-400 tracking-wide">Abdelrhman Ahmed</h1>
        <div className="space-x-6 text-sm">
          {["About", "Projects", "Skills", "Contact"].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center text-center py-48 px-6">
        <motion.img
          src={myPhoto}
          alt="Abdelrhman Ahmed"
          className="w-40 h-40 rounded-full mb-8 border-4 border-indigo-500 shadow-lg shadow-indigo-500/40 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Abdelrhman Ahmed — AI & IoT Engineer
        </motion.h2>

        <motion.p 
          className="max-w-2xl text-gray-400 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building smart, end-to-end AI systems from sensors to the cloud. 
          Turning ideas into real-time deployable machine learning applications.
        </motion.p>

        <div className="space-x-4">
          <a href="#projects">
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 transition-transform duration-300">
               View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border border-indigo-400 text-indigo-300 px-8 py-3 rounded-full hover:bg-indigo-400/10 hover:scale-105 transition-transform duration-300">
              📬 Contact Me
            </button>
          </a>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="px-8 py-28 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-gray-800 shadow-lg shadow-indigo-500/10"
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-400">About Me</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’m an <strong>AI Engineer</strong> passionate about merging intelligent algorithms with physical systems.
            I design end-to-end AI + IoT solutions that learn from sensors, analyze data in real time, and automate smart devices.
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>🎓 <strong>Education:</strong> NTI & DataCamp — Advanced ML & DL Training</li>
            <li>🧠 <strong>Experience:</strong> Real-world projects in EMG signal processing, IoT control, and cloud deployment.</li>
          </ul>
        </motion.div>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects" className="px-8 py-28">
        <h3 className="text-3xl font-bold mb-10 text-indigo-400 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.a 
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-indigo-400 hover:shadow-indigo-400/30 hover:shadow-lg transition block"
            >
              <h4 className="text-xl font-semibold mb-3 text-white">{proj.title}</h4>
              <p className="text-gray-400 mb-4 text-sm">{proj.desc}</p>
              <p className="text-xs text-indigo-300">{proj.tech}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills" className="px-8 py-24 bg-[#0e1530]/70 backdrop-blur-md">
        <h3 className="text-3xl font-bold mb-10 text-indigo-400 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-[#0b1220] border border-gray-700 px-5 py-2 rounded-full text-sm hover:border-indigo-400 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="px-8 py-28 text-center bg-gradient-to-b from-[#0b1220] to-[#121a2f]">
        <h3 className="text-3xl font-bold mb-6 text-indigo-400">Contact Me</h3>
        <div className="space-y-2 text-lg">
          <p className="text-gray-300">
            📧 <a href="mailto:abdoibrahim122000@gmail.com" className="text-indigo-400 hover:underline">abdoibrahim122000@gmail.com</a>
          </p>
          <p className="text-gray-400">
            💼 <a href="https://www.linkedin.com/in/abdelrhman-ahmed-92a432260/" target="_blank" className="text-indigo-400 hover:underline">linkedin.com/in/abdelrhman-ahmed</a>
          </p>
          <p className="text-gray-400">
            💻 <a href="https://github.com/AbdoAhmed666" target="_blank" className="text-indigo-400 hover:underline">github.com/AbdoAhmed666</a>
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm bg-[#0b1220]">
        © 2025 Abdelrhman Ahmed — All rights reserved
      </footer>
    </div>
  );
}
